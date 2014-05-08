/*global Backbone */
var app = app || {};
app.dropTopMargin = 544;
app.dragOrigin = 648;
app.curProductBar = 1;
app.prevProductBar = 1;
app.draggedProduct = {x: 0,y: 0};
/*app.productBTops = new Array(323,728,628);
app.productBarT = 0;*/

(function () {
//	'use strict';

	app.ProductBarView = Backbone.View.extend({
		el: '#product-bar',
		initialize: function(){
			_.bindAll(this, 'render', 'searchSubmit', 'filterBy', 'searchFocus', 'pBOpen', 'pbClick', 'searchSubmitClick', 'addProduct', 'openResources', 'openNewProduct', 'openNPStep', 'openProductInfo');
      		this.render();
      		$("#product-bar").addClass('easeOut');
//			$("#product-bar").delay(10000).css({"top":"628px"});
	   	},
	   	events: {
		  'submit #searchForm'  : 'searchSubmit',
		  'click #searchSubmit' : 'searchSubmitClick',
		  'click .productmenu a' : 'filterBy',
		  'click #searchString' : 'searchFocus',
		  'click .pbClick' : 'pbClick',
		  'click .ico2' : 'pbClick',
		  'click #add-product' : 'addProduct',
		  'click #resources-link' : 'openResources',
		  'click #add-product' : 'openNewProduct',
		  'dblclick .product' : 'openProductInfo',

//		  'keypress': 'logKey'
		},
		openProductInfo: function(ev){
			var productItem = $(ev.target).closest(".product");
			if($(productItem).hasClass('fake')){
			} else {
	//			console.log($(productItem).data("wholeModel"));
				$(".project-edit-container").append('<div id="np" />');
				app.projectEditView.clickOnBG();
				if(typeof app.productInfo !== 'undefined'){ // remove view if it exists
					app.productInfo.remove();
				}
				app.productInfo = new app.ProductInfo({model: $(productItem).data("wholeModel")});
				ev.preventDefault();
			}
		},
		render: function () {
		   	var template = _.template( $('#product-bar-template').html());
			this.$el.html(template);
			var y = 1;
			var self = this;
			app.productList = new ProductList();
			app.productList.fetch({
			  success: function (collection, response) {
//				console.log(app.productList.models);
				_(app.productList.models).each(function(item, index){ // in case collection is not empty
//			   		console.log(item.attributes)
				   	var template = _.template( $('#product-item-template').html(), {
				   		pModel: item.attributes,
						pId: item.attributes.ID,
						pName: item.attributes.Name,
						pDescription: "Brand: "+item.attributes.Brand, //item.attributes.description, "#No "+item.attributes.ID+
						pWidth: parseInt(item.attributes.Width),
						pHeight: parseInt(item.attributes.Height),
						pImage: item.attributes.UPC+".png"
				   	});
				   	var newElement = $(template).appendTo("#product-content");
					$(newElement).data("wholeModel", item.attributes);
				}, self);
				self.makeProductsDraggable();
			  },
			  error: function (collection, response, options){
			  		console.warn("Product fetch ERROR!");
			  		console.log(collection);
			  		console.log(response);
			  		console.log(options);
			  }
			})
			$("#product-bar").draggable({
				axis: "y",
				cancel: "#product-content, #search input",
				drag: function( event, ui ) {
//					console.log(ui.position.top)
				},
				start: function( event, ui ) {
					app.prevPosTop = ui.position.top;
//					$(this).removeClass('easeOut');
				},
				stop: function( event, ui ) {
//					$(this).addClass('easeOut')
//					console.log(app.prevPosTop+" a "+ui.position.top)
					app.dropTopMargin = ui.position.top-104;
					if(ui.position.top<323){ // 4 lines view
						$(this).css("top","323px");
						self.pBOpen(3);
					} else if(ui.position.top>323 && ui.position.top<628 && app.prevPosTop>ui.position.top){ // 1 line view
						$(this).css("top","323px");
						self.pBOpen(3);
					} else if(ui.position.top>323 && ui.position.top<628 && app.prevPosTop<ui.position.top){ // 4 line view
						$(this).css("top","628px");
						self.pBOpen(2);
					} else if(ui.position.top>628 && app.prevPosTop>ui.position.top){ // 1 line view
						$(this).css("top","628px");
						self.pBOpen(2);
					} else if(ui.position.top>628 && app.prevPosTop<ui.position.top){ // 0 line view
						$(this).css("top","728px");
						self.pBOpen(1);
					} else if(ui.position.top>728 && app.prevPosTop>ui.position.top){ // 0 line view
						$(this).css("top","728");
						self.pBOpen(1);
					}
				}
			});
			app.myProductList = new MyProductList();
			app.myProductList.fetch({
			  success: function (collection, response) {
//				console.log(app.myProductList.models);
				_(app.myProductList.models).each(function(item, index){ // in case collection is not empty
//			   		console.log(item.attributes)
//					item.attributes.description = item.attributes.description=="" ? "w: "+item.attributes.width+"cm, "+"w: "+item.attributes.height+"cm" : item.attributes.description;
				   	var template = _.template( $('#product-item-template').html(), {
				   		pModel: item.attributes,
						pId: item.attributes.ID,
						pName: item.attributes.Name,
						pDescription: "Brand: "+item.attributes.Brand, //item.attributes.description, "#No "+item.attributes.ID+
						pWidth: parseInt(item.attributes.Width),
						pHeight: parseInt(item.attributes.Height),
						pImage: item.attributes.UPC+".png"
				   	});
//					console.log($(self.el).html())
//					$(self.el).find("#product-content").append(template);
					$(template).insertAfter($(self.el).find("#product-content").find(".product").eq(0));
// HAS TO BE FINISHED
//				   	var newElement = $(template).appendTo("#product-content");
//					$(newElement).data("wholeModel", item.attributes);

				}, self);
				self.makeProductsDraggable();
			  }
			});
//			this.openNPStep(4);
			this.pbClick(); var self = this; setTimeout(function(){ self.pbClick(); }, 1000)
			$("#product-contentWrap").niceScroll("#product-content",{bouncescroll:true, cursorcolor:"#F00",cursoropacitymax:0.7,/*boxzoom:true,*/touchbehavior:true});  // Second scrollable DIV
//			this.pbClick();
		},
		addMyProduct: function(addedProduct){
			var self = this;
	   		console.log(addedProduct.attributes)
//			addedProduct.attributes.description = addedProduct.attributes.description=="" ? "w: "+addedProduct.attributes.width+"cm, "+"w: "+item.attributes.height+"cm" : item.attributes.description;
		   	var template = _.template( $('#product-item-template').html(), {
				pId: addedProduct.attributes.ID,
				pName: addedProduct.attributes.Name,
				pDescription: "Brand: "+addedProduct.attributes.Brand, //addedProduct.attributes.description, "#No "+item.attributes.ID+
				pWidth: parseInt(addedProduct.attributes.Width),
				pHeight: parseInt(addedProduct.attributes.Height),
				pImage: addedProduct.attributes.UPC+".png"
		   	});
//			console.log($(self.el).html())
//			$(self.el).find("#product-content").prepend(template);
			$(template).insertAfter($(self.el).find("#product-content").find(".product").eq(0));
			self.makeProductsDraggable();
		},
		makeProductsDraggable: function(){
			$("#product-bar .product").draggable({ // init DRAGABLE
				appendTo: "#bays-container",
				helper: "clone",
//				cursorAt: { top: 10, left: 10 }, // not usefull due to scaled scene
				start: function( event, ui ) {
					$(ui.helper).addClass('box-clone')
//					app.productBarView.pbClose();
					var myWidth = ui.helper.data("width");
					var myHeight = ui.helper.data("height");
					app.draggedProduct.x = event.clientX;
					app.draggedProduct.y = event.clientY;
					ui.helper.find(".img img")
					.css({"width": myWidth*4+"px","height": myHeight*4-2+"px"})

				},
				drag: function( event, ui ) {
//					console.log(ui.helper.width())
//					console.log(event.clientX+" a "+ui.position.left)
					var original = ui.originalPosition;
//					console.log(ui.helper.context.clientWidth)
					ui.position = {
					    top: (event.clientY - app.draggedProduct.y + original.top+20) / app.zoom,
					    left: (event.clientX - app.draggedProduct.x + original.left+40) / app.zoom
					};
				}
			});
		},
		pBOpen: function (index) {
			var prev = app.curProductBar;
			app.prevProductBar = prev;
//			console.log(prev+" prev / index "+index);
			if(prev==1 && index==1){

			} else if(prev==1 && index==2){
				$(".ico2, #resources-link").fadeOut(500, function(){
					$(".productmenu, #searchString").fadeIn(250);
				});
				$(".ico2, #resources-link").fadeOut(500, function(){$(".productmenu, #searchString").fadeIn(250);});
//				$(".pbClick").addClass("back");
			} else if(prev==1 && index==3){
				$(".ico2, #resources-link").fadeOut(500, function(){$(".productmenu, #searchString").fadeIn(250);});
				$(".pbClick").addClass("back");
			} else if(prev==2 && index==1){
				$(".productmenu, #searchString").fadeOut(500, function(){
					$(".ico2, #resources-link").fadeIn(250);
					$("#searchString").hide();
				});
				$(".ico2, #resources-link").fadeOut(500, function(){$(".productmenu, #searchString").fadeIn(250);});
				$(".pbClick").removeClass("back");
			} else if(prev==2 && index==3){
				$(".ico2, #resources-link").fadeOut(500, function(){$(".productmenu, #searchString").fadeIn(250);});
				$(".pbClick").addClass("back");
			} else if(prev==3 && index==1){
				$(".productmenu, #searchString").fadeOut(500, function(){
					$(".ico2, #resources-link").fadeIn(250);
				});
				$(".ico2, #resources-link").fadeOut(500, function(){$(".productmenu, #searchString").fadeIn(250);});
				$(".pbClick").removeClass("back");
			} else if(prev==3 && index==2){
				$(".ico2, #resources-link").fadeOut(500, function(){$(".productmenu, #searchString").fadeIn(250);});
			}
			app.curProductBar = index;
			return this;
		},
		pbClick: function (ev) {
			if(app.bayEditMode==false){
	//			var cur = app.curProductBar;
				var PBPositionT = parseInt($("#product-bar").css("top"));
//				console.log(PBPositionT+" - "+app.prevProductBar);
	//			console.log(PBPositionT+" - "+app.curProductBar);
				if(PBPositionT>=728){
					$("#product-bar").css("top","628px");
					this.pBOpen(2);
				} else if(PBPositionT==628 && app.prevProductBar==1){
					$("#product-bar").css("top","323px");
					this.pBOpen(3);
				} else if(PBPositionT==628 && app.prevProductBar==3){
					$("#product-bar").css("top","728px");
					this.pBOpen(1);
				} else if(PBPositionT==628 && app.prevProductBar==2){
					$("#product-bar").css("top","323px");
					this.pBOpen(3);
				} else if(PBPositionT<=323){
					$("#product-bar").css("top","628px");
					this.pBOpen(2);
				}
			}
			if(ev) ev.preventDefault();
			return this;
		},
		pbClose: function(){
			$("#product-bar").css("top","728px"); 	// if editing
			app.productBarView.pBOpen(1); 			// hide product Bar
		},
		searchSubmitClick: function (ev) {
			if($("#searchString").css('display') == 'none'){
				$("#product-bar").css("top","628px");
				this.pBOpen(2);
			}
			ev.stopPropagation();
			ev.preventDefault();
		},
		searchSubmit: function(ev){
			$("#product-content .product").stop().hide();
			$("#product-content .product").each(function(index) {
			    $(this).delay(50*index).fadeIn(250);
			});
//			$("#searchString").val("Searched. :)")
			$('#searchString').blur();
//			ev.stopPropagation();
			ev.preventDefault();
		},
		filterBy: function(ev){
			console.log($(ev.target).html())
			$(".productmenu .active").removeClass("active")
			$(ev.target).addClass("active")
			$("#product-content .product").stop().hide();
			$("#product-content .product").each(function(index) {
			    $(this).delay(50*index).fadeIn(250);
			});
			ev.preventDefault();
		},
		searchFocus: function(ev){
			$(ev.target).focus();
			ev.preventDefault();
		},
		addProduct: function(ev){
			ev.preventDefault();
		},
		openResources: function(ev){
			var popup = _.template( $("#popup-resources").html());
			$(".project-edit-container").append(popup);
			ev.preventDefault();
		},
		openNewProduct: function(ev){
			this.openNPStep(1);
			if(ev) ev.preventDefault();
		},
		openNPStep: function(stepNo){
			$(".project-edit-container").append('<div id="np" />');
			if(stepNo>=1 && stepNo<=5){
				app.projectEditView.clickOnBG();
				if(typeof app.nPView !== 'undefined'){ // remove view if it exists
					app.nPView.remove();
				}
				eval("app.nPView = new app.NP"+stepNo+"View()");
			}
		}
	});

})(jQuery);