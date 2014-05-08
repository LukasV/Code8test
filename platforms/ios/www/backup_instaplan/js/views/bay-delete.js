/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.BayDeleteView = Backbone.View.extend({
		className: 'bay-delete',
		initialize: function(){
			_.bindAll(this, 'render', 'deleteBay', 'cancel'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
		},
		render: function(){
			$('#popup').html(this.el);
			var popup = _.template( $("#popup-bay-delete").html());
			this.$el.html(popup);
			return this;
		},
		events: {
			"click .button2" : "deleteBay",
			"click .button" : "cancel"
		},
		deleteBay: function(ev){
//			console.log(this);
			this.remove();
			$("#bay-list").removeClass("editS").removeClass("editP");
			$(".bay.edit").removeClass("edit");
			app.bayEditMode = false;
			app.curBay.myRemove();
			app.currProject.save();
			ev.stopPropagation();
			ev.preventDefault();
		},
		cancel: function(ev){
			app.projectEditView.clickOnBG();
			ev.preventDefault();
		}
	});
})(jQuery);
