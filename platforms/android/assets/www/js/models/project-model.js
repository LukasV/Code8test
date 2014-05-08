/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	Project = Backbone.RelationalModel.extend({
		localStorage: new Backbone.LocalStorage("SP"),
		relations: [{
			type: Backbone.HasMany,
			key: 'bays',
			relatedModel: 'Bay',
			collectionType: 'BayList',
			reverseRelation: {
				key: 'project',
				includeInJSON: '_id'
			}
		}]
	});

})(jQuery);