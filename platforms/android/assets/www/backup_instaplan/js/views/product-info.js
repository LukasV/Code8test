/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.ProductInfo = Backbone.View.extend({
		el: "#np",
		initialize: function(){
			_.bindAll(this, 'render', 'nextStep', 'prevStep'); // remember: every function that uses 'this' as the current object should be in here
			console.log("Does app.newProduct exist? ");
			console.log(this.model)
			this.render();
		},
		events: {
			"click .back" : "prevStep",
			"click .next" : "nextStep",
		},
		render: function(){
//			alert("dd")
			app.productCategoryList = new ProductCategoryList;
			var self = this;
			var template = _.template( $("#product-info").html(), {product:self.model});
			self.$el.html(template);
		},
		prevStep: function(ev){
			app.productBarView.openNPStep(3);
			ev.stopPropagation();
			ev.preventDefault();
		},
		nextStep: function(ev){
			this.remove();
//			var self = this;
			ev.stopPropagation();
			ev.preventDefault();
		}
	});

})(jQuery);
