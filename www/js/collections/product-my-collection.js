/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	MyProductList = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("SPProduct"),
		model: Product,
//		url: 'data/products.json',
/*	    parse: function(response){
	    	console.log(response);
	       	return response.items;
	    }*/
	});


})(jQuery);