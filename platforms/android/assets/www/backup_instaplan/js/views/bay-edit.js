/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.BayEditView = Backbone.View.extend({
		className: 'bay-edit',
		initialize: function(){
			_.bindAll(this, 'render', 'swapEditing', 'deleteBay', 'done'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
		},
		render: function(){
			$('#popup').html(this.el);
			var popup = _.template( $("#popup-bay-edit").html());
			this.$el.html(popup);
			$("#bay-list").addClass("editP")
			this.$el.draggable({});
			return this;
		},
		events: {
			"click .a1" : "swapEditing",
			"click .a2" : "swapEditing",
			"click .button2" : "deleteBay",
			"click .button" : "done"
		},
		swapEditing: function(ev){
			var curClass = $(ev.target).attr("class");
			$('#bay-edit').removeClass("ea1").removeClass("ea2").addClass("e"+curClass);
			if(curClass=="a1"){
				$("#bay-list").removeClass("editS").addClass("editP");
			} else {
				$("#bay-list").removeClass("editP").addClass("editS");
			}
			ev.stopPropagation();
			ev.preventDefault();
		},
		deleteBay: function(ev){
			this.remove();
//			$("#bay-list").removeClass("editS").removeClass("editP");
			if(typeof app.bayDeleteView !== 'undefined'){ // remove view if it exists
				app.bayDeleteView.remove();
			}
			app.bayDeleteView = new app.BayDeleteView();
//			$('#bay-delete').css({"left":app.popupFromLeft.left+250+"px", "top":"220px"})
			$('#bay-delete').css({"left":"650px", "top":"95px"})
			ev.stopPropagation();
			ev.preventDefault();
		},
		done: function(ev){
			app.projectEditView.clickOnBG();
			ev.preventDefault();
		}
	});
})(jQuery);
