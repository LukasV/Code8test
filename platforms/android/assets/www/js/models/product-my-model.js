/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	MyProduct = Backbone.RelationalModel.extend({
		localStorage: new Backbone.LocalStorage("SPProduct"),
		defaults: {
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
		},
		validate: function(attrs, options){
//			console.log(attrs)
			if(attrs.Name=="" || attrs.Name=="New product" || attrs.Name=="Burts Bees Orange Essence"){
//				alert("Product name has to be filled up.")
				$("#product-name").addClass("error").focus();
				return "Product name has to be filled up.";
			} else{
				$("#product-name").removeClass("error");
			}
			if(attrs.Height==""){
				$("#product-height").addClass("error").focus();
				return "Product height has to be filled up.";
			} else{
				$("#product-height").removeClass("error");
			}
			if(attrs.Width==""){
				$("#product-width").addClass("error").focus();
				return "Product width has to be filled up.";
			} else{
				$("#product-width").removeClass("error");
			}
		}
	});

})(jQuery);