/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	ProjectList = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("SP"),
		model: Project
	});

//	projectList = new ProjectList();

})(jQuery);