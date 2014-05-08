/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.ShelfListView = Backbone.View.extend({
		initialize: function(){
			_.bindAll(this, 'render', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here
			this.shelfListWC = new Array();
//			this.collection.bind('add', this.add);
			this.render();
		},
		render: function(){
			var self = this;
			_(this.collection.models).each(function(item){ // in case collection is not empty
//				console.log(this)
				var newWidth = app.newWidth;
				self.appendItem(item, newWidth);
			}, this);
			return this;
		},
		appendItem: function(item, newWidth){
			var curState = item.attributes.state ? "on" : "off";
			var shelfItemView = new app.ShelfItemView({
				model: item,
				className: 	'shelf '+curState+' '+item.cid//shelf shelf<%= index %>  <% if(state == true) { %> on <% } %>">
			});
			this.shelfListWC.push(shelfItemView);
			var self = this;
			this.$el.droppable({
				tolerance: "pointer",
				accept: ".product",
			 	drop: function( ev, ui ) {
			 		app.curShelfListView = self;
//			 		console.log(app.curBayView.shelfListWC)
				}
			});
			$(this.$el.find('.full-height2')).css({width: newWidth}).append(shelfItemView.render().el);
		}
	});
	app.ShelfItemView = Backbone.View.extend({
		tagName: 'div',
//		className: 'shelf',
		initialize: function(){
			_.bindAll(this, 'render', 'lookForHighestProduct', 'unrender', 'toggleState', 'deleteProduct', 'dropProduct', 'testClick'); // remember: every function that uses 'this' as the current object should be in here
//			console.log(this.model)
//			this.model.bind('update', this.render);
//			this.model.bind('remove', this.unrender);
	   	},
		render: function () {
//			console.log("Rendering shelf.");
			var template = _.template($('#shelf-item-template').html(), {project: this.model, index: 1, state: this.model.attributes.state});
			this.$el.html(template);
//			console.log(template);
			var thisShelveItems = this.model.attributes.shelveItems;
			if(thisShelveItems.length>0){
//			if(thisShelveItems.length>0 && thisShelveItems.models[0].attributes.pid){
//				console.log(thisShelveItems.models[0].attributes.pid); //
//				console.log(thisShelveItems);
//				console.log(thisShelveItems); // find the heighest product and give shelf
				this.productItemList = new app.ProductListView({"collection":thisShelveItems, el: this.el});
				this.lookForHighestProduct();
//				console.log(this.productItemList.collection);
			}
			var self = this;
			this.$el.droppable({
				tolerance: "pointer",
				accept: ".product",
			 	drop: function( ev, ui ) {
					var droppable = $(this); // http://stackoverflow.com/questions/12724388/creating-multiple-droppable-siblings-that-at-positioned-on-top-of-eachother
					ui.helper.css({pointerEvents: 'none'});
					var onto = document.elementFromPoint(ev.clientX, ev.clientY);
					ui.helper.css({pointerEvents: ''});
					if(!droppable.is(onto) && droppable.has(onto).length === 0) {
						return;
					}
//					console.log( "Dropped at "+$(self).attr("class"));
					self.dropProduct(ev, ui);
					app.myPanzoom.panzoom("enable");
//					$("#bays-container").delay(500).panzoom("enable");
				}
			});
//			console.log("this.$el.droppable");
			return this;
		},
		lookForHighestProduct: function () {
			var thisShelveItems = this.model.attributes.shelveItems;
			var maxHeight = this.$el.data("maxHeight") ? this.$el.data("maxHeight") : 0;
			_(thisShelveItems.models).each(function(item){ // in case collection is not empty
				var thisHeight = item.get("height");
//					console.log(thisHeight);
				if(thisHeight>maxHeight){
					maxHeight = thisHeight;
				}
			}, this);
//			console.log("New maxHeight = "+maxHeight);
			this.$el.data("maxHeight",maxHeight);
//				this.$el.addClass("maxHeight"+maxHeight);
		},
		events: {
			"click .icon-minus" : "toggleState",
			"click .icon-plus" : "toggleState",
			"click .delete" : "deleteProduct",
			"click" : "testClick"
		},
		unrender: function(){
			$(this.el).remove();
		},
		testClick: function(){
			console.log($(this).attr("class"));
		},
		toggleState: function(ev){
			var newState = !this.model.get('state');
			this.model.set({state:newState})
//			console.log(this.model);
//			console.log(newState);
			if(newState){
				// try if there arent any products on the following enabled shelf which could obstruct our new shelf?

				/*_(thisShelveItems.models).each(function(item){ // in case collection is not empty
					var thisHeight = item.get("height");
	//					console.log(thisHeight);
					if(thisHeight>maxHeight){
						maxHeight = thisHeight;
					}
				}, this);*/
				var thisShelf = $(ev.target).closest(".shelf");
				var thisShelfIndex = $(".shelf").index(thisShelf);
				var nextEnabledShelf = $(thisShelf).nextAll(".on").first();
				var nextEnabledShelfIndex = $(".shelf").index(nextEnabledShelf);
//					console.log("Indexes: "+thisShelfIndex+" a "+nextEnabledShelfIndex);
				var maxProductHeight = $(".shelf").eq(nextEnabledShelfIndex).data("maxHeight");
				var spaceHdiference = (nextEnabledShelfIndex-thisShelfIndex)*10;
//					console.log("Shelf space height: "+spaceHdiference+" and tallest product height: "+maxProductHeight);
				if(spaceHdiference<maxProductHeight || maxProductHeight=="undefined"){
					if(typeof app.shelfNoFitView2 !== 'undefined'){ // remove view if it exists
						app.shelfNoFitView2.remove();
					}
					app.shelfNoFitView2 = new app.ShelfNoFitView2({model:this.model});
					console.log("Not enough space to fit in another shelf!");
				} else {
					this.$el.removeClass("off").addClass("on");
					app.currProject.save();
					app.curBay.removeTSShadow();
				}
				/*}*/
			} else {
				if(this.$el.find(".product").length>0){ // if trying to remove shelf on which there are products
					app.shelfToDelete = this.$el;
					if(typeof app.shelfDeleteView !== 'undefined'){ // remove view if it exists
						app.shelfDeleteView.remove();
					}
					app.shelfDeleteView = new app.ShelfDeleteView({model:this.model});
				} else {
					this.$el.removeClass("on").addClass("off");
					app.currProject.save();
					app.curBay.removeTSShadow();
				}
			}
			ev.stopPropagation();
			ev.preventDefault();
		},
		deleteProduct: function(ev){
			app.curBayIndex = $(".bay").index($(ev.target).closest('.bay')); // not proud of this, but model.save() keeps destroying the projectEditView
			$(ev.target).closest('.box-clone').remove();
			app.currProject.save();
			ev.stopPropagation();
			ev.preventDefault();
		},
		dropProduct: function(ev, ui){
			console.log("Dropping"); // this.model
//			if($(ui.helper).attr("id")!="product-bar") { // not when producBar is dragged & dropped...
//				console.log(this.$el.data("maxHeight"));
//				console.log(this.$el.attr("class"));
				if(this.$el.hasClass("off")){ // if shelf disabled, find the enabled and call dropProduct method
					var index = this.$el.closest(".full-height2").find(".shelf").index(this.$el);
					var elBelow = this.$el.closest(".full-height2").find(".shelf").eq(index+1);
					while (elBelow.hasClass("off")){ // look for next enabled
	//					console.log(elBelow.attributes.state)
						index = elBelow.closest(".full-height2").find(".shelf").index(elBelow);
						elBelow = elBelow.closest(".full-height2").find(".shelf").eq(index+1);
					}
	//				console.log("Dropped on dead shelf! Next alive found and event delegated.");
	//				console.log(app.curShelfListView.shelfListWC)
					app.curShelfListView.shelfListWC[index+1].dropProduct(ev, ui)
				} else { // else process the dropping
					var myWidth = $(ui.helper).data("width");
					var productHeight = $(ui.helper).data("height");
					var myImg = $(ui.helper).data("img");
					var myPid = $(ui.helper).data("pid");
					var fullWidth = $(this.el).closest(".bay").width()//css("width");
					var tempWidth = 0;
					var shelfHeight = this.$el.data("shelfHeight");
					console.log("shelfHeight = "+shelfHeight+" > productHeight = "+productHeight);
					if(productHeight<=shelfHeight*10){
						_(this.$el.find(".product")).each(function(item){ // in case collection is not empty
							tempWidth += $(item).width();
		//					console.log($(item).width());
						}, this);
		//				tempWidth = tempWidth==0 ? 0 : tempWidth;
		//				console.log("fullWidth = "+fullWidth+" a tempWidth+myWidth*4 = "+(tempWidth+myWidth*4));
						if(typeof this.shelveItemList === 'undefined') this.shelveItemList = new ShelfItemList();
						if(tempWidth<fullWidth && tempWidth+myWidth*4<=fullWidth){
							var newItem = this.shelveItemList.push({ shelf: this.model, pid:myPid, img:myImg, width:myWidth, height:productHeight });
		//					console.log(newItem.models);
							if(typeof this.productItemList === 'undefined') { // if first product in shelf
								this.productItemList = new app.ProductListView({"collection":newItem, el: this.el});
							} else {
								this.productItemList.appendItem(newItem.models[newItem.models.length-1]);
							}
		//					console.log(this.productItemList.collection);
						} else {
	//						app.shelfNoFitView = new app.ShelfNoFitView({model:this.model});
							console.warn("Doesn't fit - width-wise!")
						}
					} else {
						if(typeof app.shelfNoFitView !== 'undefined'){ // remove view if it exists
							app.shelfNoFitView.remove();
						}
						app.shelfNoFitView = new app.ShelfNoFitView({model:this.model});
						console.warn("Doesn't fit - height-wise!")
					}
					this.lookForHighestProduct();
					app.currProject.save();
				}
//			}
		}
	});
})(jQuery);
