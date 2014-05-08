/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	BayList = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("SP"),
		model: Bay
	});

//	bayList = new BayList();

})(jQuery);