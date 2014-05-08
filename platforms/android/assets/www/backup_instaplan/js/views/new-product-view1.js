/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.NP1View = Backbone.View.extend({
		el: "#np",
		initialize: function(){
			_.bindAll(this, 'render', 'nextStep'); // remember: every function that uses 'this' as the current object should be in here
			app.newProduct = app.newProduct ? app.newProduct : new MyProduct();
			this.model = app.newProduct;
			this.render();
		},
		events: {
			"click .next" : "nextStep",
		},
		render: function(){
			var template = _.template( $("#new-product1").html(), {product:this.model});
			this.$el.html(template);
		},
		nextStep: function(ev){
//			alert($("#product-height").val())
			this.model.save({
				Name: $("#product-name").val(),
				Width: $("#product-width").val(),
				Height: $("#product-height").val()
			}, {
				error: function(model, response, options){ // DOESNT WORK for some reason
//					aler(response)
					console.log("Validation error.");
				},
				success: function(model, response, options){
					console.log("Validation success. "+response);
//					app.productBarView.render();
					app.productBarView.openNPStep(2);
				},
			});
			ev.stopPropagation();
			ev.preventDefault();
		}
	});

})(jQuery);
