/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.ShelfDeleteView = Backbone.View.extend({
		className: 'shelf-edit',
		initialize: function(){
			_.bindAll(this, 'render', 'deleteShelf', 'cancel'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
		},
		render: function(){
			$('#popup').html(this.el);
			var popup = _.template( $("#popup-shelf-delete").html());
			this.$el.html(popup);
			return this;
		},
		events: {
			"click .button2" : "deleteShelf",
			"click .button" : "cancel"
		},
		deleteShelf: function(ev){
			app.shelfToDelete.find(".product").find(".delete").click();
			app.shelfToDelete.removeClass("on").addClass("off");
			app.currProject.save();
			app.curBay.removeTSShadow();
			this.remove();
			app.curBay.editBay(ev);
			$("#bay-list").addClass("editS").removeClass("editP");
//			app.bayEditMode = true;
//			$(".bay.edit").removeClass("edit");
			ev.preventDefault();
		},
		cancel: function(ev){
			this.remove();
			app.curBay.editBay(ev);
			$(".a2").click();
//			$("#bay-list").removeClass("editS").removeClass("editP");
/*			app.bayEditMode = false;
			$(".bay.edit").removeClass("edit");*/
//			$('.popup, .popupOld').remove();
			ev.preventDefault();
		}
	});
})(jQuery);
