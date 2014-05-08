/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ProductCategoryList = Backbone.Collection.extend({
//		localStorage: new Backbone.LocalStorage("SP"),
		model: ProductCategory,
		url: 'data/product-categories.json',
/*	    parse: function(response){
	    	console.log(response);
	       	return response.items;
	    }*/
	});


})(jQuery);