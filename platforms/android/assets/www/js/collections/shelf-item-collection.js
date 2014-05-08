/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ShelfItemList = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("SP"),
		model: ShelfItem
	});

//	ShelveList = new ShelveList();
})(jQuery);