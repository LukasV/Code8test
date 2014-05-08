/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	Shelf = Backbone.RelationalModel.extend({
		localStorage: new Backbone.LocalStorage("SP"),
		relations: [{
			type: Backbone.HasMany,
			key: 'shelveItems',
			relatedModel: 'ShelfItem',
			collectionType: 'ShelfItemList',
			reverseRelation: {
				key: 'shelf'
			}
		}]
	});

})(jQuery);