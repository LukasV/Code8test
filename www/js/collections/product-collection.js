/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ProductList = Backbone.PageableCollection.extend({

		model: Product,
		url: 'data/products2.json',

	});

})(jQuery);