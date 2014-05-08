/*global Backbone */
var app = app || {};
app.baysContWidth = 0;
app.myPanzoom = null;
app.zoom = 0.5;
app.pan = {};

(function () {
//	'use strict';

/*	$(window).on("beforeunload",function(){ // save project on page leave
		console.log("Saving app.currProject!");
		app.currProject.save();
	})
	$(window).on(this.window, {
		beforeunload:function(){ // save project on page leave
			console.log("Saving app.currProject!");
			app.currProject.save();
		}
	})*/

	app.ProjectEditView = Backbone.View.extend({
	//		el: '.page',
		tagName: 'div',
	   	events: {
		  'click .bay.new .addBay': 'showPopup',
		  'submit #setDimensions'  : 'onAddBay',
		  'click input[type="submit"]' : 'onAddBay',
		  'click .project-name' : 'nameChange',
		  'click .bp' : 'zoomIn',
		  'click .bm' : 'zoomOut',
		  'click .minus' : 'minus',
		  'click .plus' : 'plus',
		  'click .popupCnt' : 'clickOnPopup',
		  'click .popup' : 'clickOnBG',
		  'click .cancel' : 'clickOnBG',
		  'click .open-resource' : 'openResource',
		  'click .back2Res' : 'back2Resources',
		  'click h1' : 'tempBack',

//		  'remove' : 'pageUnLoad' //  save project on projectEditView removal
//		  'keypress': 'logKey'
		},
//		pageUnLoad: function(){
//			console.log("Saving app.currProject!");
//			app.currProject.save();
//		},
		initialize: function(){
			_.bindAll(this, 'render', 'adjustPanZoom', 'onAddBay', 'showPopup', 'minus', 'plus', 'renderBays', 'nameChange', 'nameChangeDone', 'logKey', 'zoomIn', 'zoomOut', 'clickOnBG', 'clickOnPopup', 'openResource', 'back2Resources'); // remember: every function that uses 'this' as the current object should be in here
//			var bays = this.model.get('bays');
//			console.log(app.currProject);
			this.model = app.currProject;
			var self = this;
			this.model.fetch({
			  	success: function (collection, response) {
					self.render();
//					console.log("No of bays: "+app.currProject.attributes.bays.length);
			  	}
			 });
//			console.log(this.model);
			$(document).bind('keyup', this.logKey); // Esc doesnt work if you bind it conventionally
			return this;
	   	},
		render: function() {
			$('.page').html(this.el);
		   	var template = _.template( $('#project-edit-template').html(), {project: this.model} );
			this.$el.html(template);
			this.renderBays();
			var self = this;
			app.myPanzoom = $("#bays-container").panzoom({ // PANZOOOM
				$zoomIn: $(".zoom-in"),
				$zoomOut: $(".zoom-out"),
				$zoomRange: $(".zoom-range"),
				$reset: $(".reset"),
//				contain:true,
				increment: 0.25,
				minScale: 0.5,
				maxScale: 2,
				onReset: function(){
//					app.myPanzoom.panzoom("setMatrix", [ 0.5,0,0,0.5,-510,-285 ]);
					app.zoom = 0.5;
					app.myPanzoom.panzoom("zoom", app.zoom, app.zoom )//.panzoom("pan", -510, -285 );
					self.adjustPanZoom();
				},
			});
			app.myPanzoom.on("panzoomzoom", function(e, panzoom, scale, opts){
				app.zoom = scale;
//				console.log("myPanzoom.scale = "+scale)
//				console.log("myPanzoom.scale = "+scale)
			})
			app.myPanzoom.on("panzoompan", function(e, panzoom, x, y){
				app.pan = {"left":x, "top":y};
//				console.log("myPanzoom.pan = "+x+" a "+y)
			})
			app.myPanzoom.on('panzoomend', function(ev, panzoom, matrix, changed) {
//			  console.log(ev)
			  if (changed) {
//			  	console.log("matrix = "+matrix)
			//  	alert("deal with drags or touch moves")
			// 		deal with drags or touch moves
			  } else {
				if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { // for some reason otherwise clicks within myPanzoom on these devices don't work.
			  		$(ev.target).click();
			  	}
			//  	alert("deal with clicks or taps")
			// 		deal with clicks or taps
			  }
			});
			this.adjustPanZoom();
		   	return this;
		},
		adjustPanZoom: function(){
			var tallestBay = 0
			$(".full-height").each(function(){
//				console.log($(this).height());
				if(($(this).height())>tallestBay){
					tallestBay = $(this).height();
				}
			})
//			console.log(tallestBay);
			var baysHeight = $("#bays-container").height();
			app.zoom = 580/tallestBay;
//			console.log(app.zoom);
			app.zoom = app.zoom>1 ? 1 : app.zoom;
//			app.zoom = 1;
			app.zoom = 0.5;
			app.myPanzoom.panzoom("zoom", app.zoom, app.zoom);

			var baysWidth = $("#bays-container").width();
//			alert(baysWidth)
			var leftB = ((1000-baysWidth*app.zoom)/2)-2500;
			app.myPanzoom.panzoom("pan", leftB, -2250 );
//			app.myPanzoom.panzoom("pan", leftB, -285 );

/*			var leftB = ((1000-baysWidth*app.zoom)/2)-2000;
			app.myPanzoom.panzoom("pan", leftB, -750 );*/
/*			var leftB = ((1000-baysWidth*app.zoom)/2)-2500;
			app.myPanzoom.panzoom("pan", leftB, -285 );*/
		},
		renderBays: function() { //
			app.baysContWidth = 0;
//			console.log("RERender Bay Carousel "+this.model.get('bays').length) // BayListView
			if(typeof app.bayListView !== 'undefined'){ app.bayListView.remove() }
			app.bayListView = new app.BayListView();
		},
		onAddBay: function(ev) {
			this.model = app.currProject; // for some reason without this the this.model takes previous project model
//			console.log(this.model);
			var fWidth = $("#setDimensions").find('#formWidth').val();
			var fHeight = $("#setDimensions").find('#formHeight').val();
//			console.log(fWidth+" a "+ $("#formWidth").val())
//			console.log(fHeight+" a "+ $("#formHeight").val())
			var fNumber = $("#setDimensions").find('#fNumber').val();
			var newBay = new Bay({height: fHeight, width: fWidth, fNumber: fNumber, project: this.model});
//			newBay.set({id:newBay.cid});
			if(typeof app.shelveList === 'undefined') app.shelveList = new ShelfList();
			if(typeof app.shelveItemList === 'undefined') app.shelveItemList = new ShelfItemList();
			if(fNumber>=1){
				var marks = Math.ceil((fHeight-1)/fNumber/10)*10; // not quite right - there are impossible variations
			} else {
				var marks = 30;
			}
//			console.log("marks "+marks);
			for (var i = 0; i <= fHeight - 10 ; i+= 10) {
				if (i%marks==0){
//					console.log("yes "+i);
					app.shelveList.unshift({ bay: newBay, state : true });
//					var newShelf = new Shelf({ bay: newBay, state : true });
//					app.shelveItemList.unshift({ shelf: newShelf, name: "New name" });
//					console.log(newShelf);
				} else {
					app.shelveList.unshift({ bay: newBay, state : false });
//					var newShelf = new Shelf({ bay: newBay, state : false });
//					app.shelveItemList.unshift({ shelf: newShelf, name: "New name" });
				}
			};
//			console.log(this.model)
			this.model.save();
			$('.popup, .popupOld').remove();

			app.bayListView.appendItem(newBay, false)
			this.adjustPanZoom();
			console.log("No of bays: "+app.currProject.attributes.bays.length);
//			console.log(app.currProject);
//			this.renderBays(); // otherwise deletion of lastly created bay won't work -
			app.currProject.save();
			if(ev) ev.preventDefault();
		},
		showPopup: function(ev){
			var popup = _.template( $("#popup-bay-template").html() );
//			$(".header").append(popup);
			$(".project-edit-container").append(popup);
//			this.$el.find('#formWidth').focus();
			ev.stopPropagation();
			ev.preventDefault();
		},
		minus: function(ev){
			var myInp = $(ev.target).closest("td").find("input");
			if(myInp.attr("min")<=parseInt(myInp.val())-parseInt(myInp.attr("step"))){
				myInp.val(parseInt(myInp.val())-parseInt(myInp.attr("step")));
			} else {
				$(myInp).stop().css("opacity", "0.2").delay(50).animate({opacity: 1}, 500, function() {});
			}
			ev.preventDefault();
		},
		plus: function(ev){
			var myInp = $(ev.target).closest("td").find("input");
			if(myInp.attr("max")>=parseInt(myInp.val())+parseInt(myInp.attr("step"))){
				myInp.val(parseInt(myInp.val())+parseInt(myInp.attr("step")));
			} else {
				$(myInp).stop().css("opacity", "0.2").delay(50).animate({opacity: 1}, 500, function() {});
			}
			ev.preventDefault();
		},
		nameChange: function(){
			$('.project-name').hide();
			$('#project-name-edit').show().focus();
		},
		nameChangeDone: function(){
			app.newProjectName = $('#project-name-edit').val()
			app.currProject.set({projectname: app.newProjectName})
			console.log('nameChangeDone');
//			$("#content").focus();
			this.model.save();
//			$('#project-name-edit').blur();
			$('#project-name-edit').trigger( "blur" );
			this.renderBays();
		},
		logKey: function(ev){
			if (ev.keyCode==13 && $(ev.target).is("#project-name-edit")) {
				this.nameChangeDone();
			} else if (ev.keyCode==13 && $("#setDimensions").length>0) {
				this.onAddBay(); // works differently then when clicked on OK
			} else if(ev.keyCode==27){
				$('.popup, .popupOld').remove();
			}
		},
		zoomIn: function(ev){
//			$('#bays-container').animate({ 'zoom': 1.5 }, 400);
			ev.preventDefault();
		},
		zoomOut: function(ev){
//			$('#bays-container').animate({ 'zoom': 1 }, 400);
			$("#bays-container").panzoom();
			ev.preventDefault();
		},
		clickOnBG: function(ev){ // remove popups
			$('.popup, .popupOld').remove();
			$(".bay.edit").removeClass("edit");
			$("#bay-list").removeClass("editS").removeClass("editP");
			app.bayEditMode = false;
//			console.log(ev.target)
//			ev.preventDefault();
		},
		clickOnPopup: function(ev){ // don't remove popups
			ev.stopPropagation();
			ev.preventDefault();
		},
		openResource: function(ev){
			this.clickOnBG()
			var popup = _.template( $("#popup-resource").html(), {myUrl: "data/GSK-Instaplan-UX-v3.pdf"} );
			$(".project-edit-container").append(popup);
			ev.stopPropagation();
			ev.preventDefault();
		},
		back2Resources: function(ev){
			this.clickOnBG(ev);
			app.productBarView.openResources(ev);
			ev.stopPropagation();
			ev.preventDefault();
		},
		tempBack: function(){
			app.mainRouter.navigate('#/projects', {trigger:true});
		}
	});


})(jQuery);