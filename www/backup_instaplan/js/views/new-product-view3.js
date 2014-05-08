/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.NP3View = Backbone.View.extend({
		el: "#np",
		initialize: function(){
			_.bindAll(this, 'render', 'nextStep', 'prevStep'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
		},
		events: {
			"click .back" : "prevStep",
			"click .next" : "nextStep",
		},
		render: function(){
			var template = _.template( $("#new-product3").html() );
			this.$el.html(template);
		},
		prevStep: function(ev){
			app.productBarView.openNPStep(2);
			ev.stopPropagation();
			ev.preventDefault();
		},
		nextStep: function(ev){
			app.productBarView.openNPStep(4);
			ev.stopPropagation();
			ev.preventDefault();
		}
	});

})(jQuery);
