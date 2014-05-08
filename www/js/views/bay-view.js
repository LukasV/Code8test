/*global Backbone */
var app = app || {};
app.bayEditMode = false;

(function () {
//	'use strict';

	app.BayListView = Backbone.View.extend({
		id: 'bay-list-view',
		initialize: function(){
			this.collection = app.currProject.attributes.bays;
//			console.log(this.collection)
			_.bindAll(this, 'render', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here
//			this.collection.bind('change', this.colChange);
			this.render();
		},
		render: function(){
			$('#bay-list').html(this.el);
//			console.log("Number of bays: "+this.collection.length);
			var self = this;
			_(this.collection.models).each(function(item, index){ // in case collection is not empty
				if(app.curBayIndex==index){ // refresh in edit mode?
					self.appendItem(item, index);
				} else {
					self.appendItem(item, null);
				}
			}, this);
			return this;
		},
		appendItem: function(item, index){
			var myClass = (index===null) ? 'bay active' : 'bay active edit';
			var bayItemView = new app.BayItemView({
				model: item,
				className: myClass,
				id: item.cid
			});
			$(this.el).append(bayItemView.render().el);
		}
	});
	app.BayItemView = Backbone.View.extend({
//		className: 'bay active',
		initialize: function(){
			_.bindAll(this, 'render', 'unrender', 'myRemove', 'editBay', 'modelChange', 'removeTSShadow'); // remember: every function that uses 'this' as the current object should be in here
//			this.model.bind('change', this.modelChange);
	   	},
		render: function () {
			var template = _.template($('#bay-item-template').html(), {project: this.model});
			this.$el.html(template);
			app.newWidth = (this.model.attributes.width*4)+"px";
			var shelfListWC = new app.ShelfListView({"collection":this.model.attributes.shelves, el: this.el});
//			console.log(this.model.attributes.width);
//			console.log(newWidth);
			this.$el.css({width: app.newWidth}); // set bay's width from data

			app.baysContWidth += parseInt(this.$el.css("width"));
			$("#bays-container").css({"width":app.baysContWidth+460+"px"})
			this.removeTSShadow();
			return this;
		},
		events: {
			"click .bay-edit" : "editBay"
		},
		unrender: function(){
			alert("dd")
			$(this.el).remove();
		},
		modelChange: function(){
			alert("dd")
//			$(this.el).remove();
		},
		myRemove: function(){
			var self = this;
			console.log(this.model)
			var destroyed = this.model.destroy({
				success: function(){
					self.$el.remove();
					console.log("No of bays: "+app.currProject.attributes.bays.length);
				}
			});
			console.log(destroyed);
		},
		editBay: function(ev){
//			alert(app.bayEditView)
			app.curBayIndex = $(".bay").index($(ev.target).closest('.bay')); // not proud of this, but model.save() keeps destroying the projectEditView
			app.curBay = this;	 // $(ev.target).closest('.bay');
//			console.log(app.curBay);
			app.bayEditMode = true;
			app.productBarView.pbClose();
			$(".bay.edit").removeClass("edit");
			this.$el.addClass("edit");
			app.popupFromLeft = this.$el.position();
//			console.log(popupFromLeft.left+"px");
			if(typeof app.bayEditView !== 'undefined'){ // remove view if it exists
				app.bayEditView.remove();
			}
			app.bayEditView = new app.BayEditView();
//			$('#bay-edit').css({"left":/*app.popupFromLeft.left+250*/650+"px", "top":"220px"})
			$('#bay-edit').css({"left":"670px", "top":"95px"})
			ev.stopPropagation();
			ev.preventDefault();
		},
		closePopup: function(){
			$('.popup, .popupOld').remove();
		},
		removeTSShadow: function(ev){
//			console.log("Removing Top shelves shadows...");
			var firstShelfRendered = false;
			var shelfSpace = 1;
			this.$el.find(".shelf").each(function(){
           		if(firstShelfRendered==false){ // handle top shelf shadow
	              	if($(this).hasClass("off")){
	              		$(this).addClass("topShelf");
	              	} else {
	        			$(this).addClass("topShelf");
    	      			firstShelfRendered = true;
	              	}
          		} else {
          			$(this).removeClass("topShelf");
          		}
				if($(this).hasClass("off")){ // take care of active shelfHeight property
					shelfSpace++;
				} else {
					$(this).addClass("height"+shelfSpace).data("shelfHeight",shelfSpace);
					shelfSpace = 1;
				}
//				console.log(shelfSpace);
            });
		}
	});
})(jQuery);
