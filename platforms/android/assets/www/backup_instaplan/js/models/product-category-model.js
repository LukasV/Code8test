/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ProductCategory = Backbone.RelationalModel.extend({
//		localStorage: new Backbone.LocalStorage("SP"),
		defaults: {
			id: 0,
			name: "Default Category",
			parent: null
		}
	});

})(jQuery);