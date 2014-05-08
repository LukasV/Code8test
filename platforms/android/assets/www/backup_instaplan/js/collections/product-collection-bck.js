/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ProductList = Backbone.Collection.extend({
//		localStorage: new Backbone.LocalStorage("SP"),
		model: Product,
		url: 'data/products.json',
/*	    parse: function(response){
	    	console.log(response);
	       	return response.items;
	    }*/
	});


})(jQuery);