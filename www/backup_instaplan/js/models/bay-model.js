/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	Bay = Backbone.RelationalModel.extend({
		localStorage: new Backbone.LocalStorage("SP"),
		relations: [{
			type: Backbone.HasMany,
			key: 'shelves',
			relatedModel: 'Shelf',
			collectionType: 'ShelfList',
			reverseRelation: {
				key: 'bay'
			}
		}]
	});

})(jQuery);