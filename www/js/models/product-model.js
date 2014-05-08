/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	Product = Backbone.RelationalModel.extend({
//		localStorage: new Backbone.LocalStorage("SP"),
		defaults: {
/*			id: 1,
			name: "Intdeterminately Specific Product",
			description: "1 line of description of #No w: 5cm h: 10cm d: 5cm",
			width: 10,
			height: 10,
			image: "1.png",
			brand: "",
			manufacturer: "",
			category: "",
			subcategory: "",
			format: "",
			barcode: "" */

		    UPC:12345678,
		    ID:1234567,
		    Name:"Product name",
		    Size:75,
		    UOM:"ML",
		    Used:112,
		    Fully:"0",
		    Category:"EXTRA CARE",
		    Height:"4.200 cm",
		    Width:"17.700 cm",
		    Depth:"3.500 cm",
		    TrayHeight:"12.80 cm",
		    TrayWidth:"18.10 cm",
		    TrayDepth:"14.20 cm",
		    Subcategory:"Sensitive",
		    Brand:"Brand",
		    Manufacturer:"Manufacturer"

		}
	});

})(jQuery);