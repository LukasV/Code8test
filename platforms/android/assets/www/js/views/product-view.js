/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.ProductListView = Backbone.View.extend({
		initialize: function(){
			_.bindAll(this, 'render', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here
			this.render();
		},
		render: function(){
			var self = this;
			_(this.collection.models).each(function(item){ // in case collection is not empty
//				console.log(this)
				self.appendItem(item);
			}, this);
			return this;
		},
		appendItem: function(item){
			var productItemView = new app.ProductItemView({
				model: item
			});
			$(this.$el).append(productItemView.render().el);
		}
	});
	app.ProductItemView = Backbone.View.extend({
//		tagName: 'div',
//		className: 'shelf',
		initialize: function(){
			_.bindAll(this, 'render', 'unrender', 'deleteProduct'); // remember: every function that uses 'this' as the current object should be in here
//			this.model.bind('change', this.render);
//			this.model.bind('remove', this.unrender);
	   },
		render: function () {
//			var template = _.template($('#shelf-item-template').html(), {project: this.model, index: 1, state: this.model.attributes.state});
//			this.$el.html(template);
//			console.log(this.model);
			var myWidth = this.model.attributes.width;
			var myHeight = this.model.attributes.height;
			var myPid = this.model.attributes.pid;
			var myName = this.model.attributes.name;
			var myDescription = this.model.attributes.description;
			var myImg = this.model.attributes.img;
			var myTop = -(myHeight*4-37);
			var template = _.template( $('#product-item-template').html(), {
				pModel: this.model,
				pId: myPid,
				pName: myName,
				pDescription: myDescription,
				pImage: myImg,
				pWidth: myWidth,
				pHeight: myHeight
		   	});
//		   	console.log(myWidth+" a "+myHeight)
			var newElement = $(template).appendTo(this.$el);//$(this.el).append(template);
			$(newElement).data("wholeModel", this.model.attributes);
//					console.log(this.$el.find(".product").length)
			this.$el.find(".product").addClass('box-clone')
			.appendTo(this.$el)
			.css({
				"top": myTop+"px",
				"left": "0px",
				"position":"relative",
				"z-index":"100",
				"margin-left": "0px"})
			.find(".img img")
			.css({"width": myWidth*4+"px","height": myHeight*4-2+"px"})
			.closest(".img").find("a.delete")
			.css({"width": myWidth*4+"px","height": myHeight*4-2+"px", "margin-bottom": -(myHeight*4-2)+"px"});
			if(myWidth<20){ // make the delete button small if it doesnt fit within the ITEM width
//				this.$el.find(".product .delete").css({"zoom":"50%","top":"10px"});
				this.$el.find(".product .delete").addClass("mini");
			}
//			console.log(this.$el.find(".product").length);
			this.$el.find(".product").draggable({ // init DRAGABLE
				appendTo: "#bays-container",
//				helper: "clone",
//				distance: 10,
//				revert: true,
				start: function( ev, ui ) {
					$(ui.helper).addClass('box-clone')
					app.productBarView.pbClose();
					app.draggedProduct.x = ev.clientX;
					app.draggedProduct.y = ev.clientY;
				},
				drag: function(ev, ui){
					var original = ui.originalPosition;
					ui.position = {
					    top: (ev.clientY - app.draggedProduct.y + original.top ) / app.zoom, // -285+
					    left: (ev.clientX - app.draggedProduct.x + original.left) / app.zoom // 510 /-350+
					};
					app.myPanzoom.panzoom("disable");
				},
				stop: function(ev, ui){
					$(ui.helper).remove(); //destroy clone
            		$(ui.draggable).remove(); //remove from list
				}
			});
			return this;
		},
		events: {
			"click .delete" : "deleteProduct"
		},
		unrender: function(){
			$(this.el).remove();
		},
		deleteProduct: function(ev){
			var self = this;
			var destroyed = this.model.destroy({
				success: function(){
					self.$el.remove();
					console.log("Product remove!");
				}
			});
			app.currProject.save();
			ev.stopPropagation();
			ev.preventDefault();
		}
	});
})(jQuery);
