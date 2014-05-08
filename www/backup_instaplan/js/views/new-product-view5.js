/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.NP5View = Backbone.View.extend({
		el: "#np",
		initialize: function(){
			_.bindAll(this, 'render', 'closeItself'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
		},
		events: {
			"click" : "closeItself",
		},
		render: function(){
			var template = _.template( $("#new-product5").html() );
			this.$el.html(template);
		},
		closeItself: function(){
			this.remove();
		}
	});

})(jQuery);
