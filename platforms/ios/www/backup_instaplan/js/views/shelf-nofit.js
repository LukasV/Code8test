/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.ShelfNoFitView = Backbone.View.extend({
		className: 'shelf-edit',
		initialize: function(){
			_.bindAll(this, 'render', 'cancel'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
		},
		render: function(){
			$('#popup').html(this.el);
			var popup = _.template( $("#popup-shelf-nofit").html());
			this.$el.html(popup);
			return this;
		},
		events: {
			"click .button" : "cancel"
		},
		cancel: function(ev){
			this.remove();
//			.bay-edit
/*			$("#bay-list").removeClass("editS").removeClass("editP");
			app.bayEditMode = false;
			$(".bay.edit").removeClass("edit");*/
//			$('.popup, .popupOld').remove();
			ev.preventDefault();
		}
	});
})(jQuery);
