/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.NP4View = Backbone.View.extend({
		el: "#np",
		initialize: function(){
			_.bindAll(this, 'render', 'nextStep', 'prevStep'); // remember: every function that uses 'this' as the current object should be in here
			console.log("Does app.newProduct exist?");
			console.log(app.newProduct);
			app.newProduct = app.newProduct ? app.newProduct : new MyProduct();
			this.model = app.newProduct;
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
			app.productCategoryList.fetch({
				success: function (collection, response) {
//					console.log(app.productCategoryList);
					var template = _.template( $("#new-product4").html(), {product:self.model, categories:app.productCategoryList.toJSON()});
					self.$el.html(template);
/*					$('#product-category').selectize({
						create: true,
						sortField: {
							field: 'text',
							direction: 'asc'
						},
						onChange: function(){
							console.log("Changing category");
							$("#product-subcategory").children('option').hide();
							$('#product-subcategory').destroy();
						}
					});
					$('#product-subcategory').selectize({
						create: true,
						sortField: {
							field: 'text',
							direction: 'asc'
						},
					});*/
				}
			});
		},
		prevStep: function(ev){
			app.productBarView.openNPStep(3);
			ev.stopPropagation();
			ev.preventDefault();
		},
		nextStep: function(ev){
			var self = this;
			this.model.save({
				Name: $("#product-name").val(),
				Width: $("#product-width").val(),
				Height: $("#product-height").val(),
				Brand: $("#product-brand").val(),
				Manufacturer: $("#product-manufacturer").val(),
				Category: $("#product-category").val(),
				Subcategory: $("#product-subcategory").val(),
				UOM: $("#product-format").val(),
				UPC: $("#product-barcode").val(),
			}, {
				error: function(model, response, options){ // DOESNT WORK for some reason
//					alert(response)
					console.log("Validation error.");
				},
				success: function(model, response, options){
					console.log("Validation success. "+response);
					app.newProduct = null;
					app.productBarView.addMyProduct(self.model);
					app.productBarView.openNPStep(5);
				},
			});
			ev.stopPropagation();
			ev.preventDefault();
		}
	});

})(jQuery);
