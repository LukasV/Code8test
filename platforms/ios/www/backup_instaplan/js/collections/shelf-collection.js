/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ShelfList = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("SP"),
		model: Shelf
	});

//	ShelveList = new ShelveList();
})(jQuery);