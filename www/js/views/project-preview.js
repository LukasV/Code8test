/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.ProjectPreview = Backbone.View.extend({
		el: "#pdfPreview",
		initialize: function(){
			_.bindAll(this, 'render', 'sendPDF', 'removePopup'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
			console.log(app.curPDFUrl);
		},
		events: {
		  	'click .popupCnt' : 'clickOnPopup',
		  	'click .popup' : 'removePopup',
		  	'click .cancel' : 'removePopup',
		},
		render: function(){
			var popup = _.template( $("#popup-pdf").html(), {myUrl: app.curPDFUrl} );
			this.$el.html(popup);
		},
		removePopup: function(ev){
			$('.popup, .popupOld').remove();
			this.remove();
			ev.stopPropagation();
			ev.preventDefault();
		},
		clickOnPopup: function(ev){ // don't remove popups
			ev.stopPropagation();
			ev.preventDefault();
		},
		sendPDF: function(ev){
			ev.stopPropagation();
			ev.preventDefault();
		}
	});

})(jQuery);
