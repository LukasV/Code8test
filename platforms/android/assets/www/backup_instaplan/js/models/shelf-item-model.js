/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ShelfItem = Backbone.RelationalModel.extend({
		localStorage: new Backbone.LocalStorage("SP")
	});

})(jQuery);