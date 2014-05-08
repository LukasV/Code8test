/*global Backbone */
var app = app || {};

(function () {
//	'use strict';

	app.ProjectListView = Backbone.View.extend({
//		el: '.page',
		className: 'project-list',
		initialize: function(){
			_.bindAll(this, 'render', 'appendItem', 'newProjectPopup', 'saveProject'); // remember: every function that uses 'this' as the current object should be in here
      		this.render();
	   	},
		render: function () {
			$('.page').html(this.el);
			var template = _.template($('#project-list-template').html(), {projects: this.collection.models});
//			console.log(template)
			this.$el.html(template);
			var self = this;
			_(this.collection.models).each(function(item){ // in case collection is not empty
				self.appendItem(item);
			}, this);
			return this;
		},
		events: {
			"click #new-project" : "newProjectPopup",
			"submit .add-project-form" : "saveProject",
			"blur #projectname" : "closePopup"
		},
		appendItem: function(item){
			var projectItemView = new app.ProjectItemView({
				model: item
			});
			$('#project-list', this.el).append(projectItemView.render().el);
		},
		newProjectPopup: function(ev){
//			console.log('fungujwe');
			var template = _.template( $('#new-project-template').html() );
			$('.project-list').append(template);

//			console.log($('.project-list').length);
			this.$el.find('#projectname').focus();
			ev.preventDefault();
//			return false; // prevent reload
		},
		saveProject: function (ev) {
			var projectDetails = $(ev.currentTarget).serializeObject(),
			today = new Date(),
			timeNow,
			dd  = today.getDate(),
			mm  = today.getMonth()+1,
			yy  = today.getFullYear(),
			min = today.getMinutes(),
			hh  = today.getHours();
			timeNow = dd+'.'+mm+'.'+yy+' '+hh+':'+min;
			projectDetails.lastsaved = timeNow;
			var newProject = app.projectList.create(projectDetails);
			app.mainRouter.navigate('#/edit/' + newProject.attributes.id, {trigger:true});
//			return false; // prevent reload
			ev.preventDefault();
		},
		closePopup: function(ev){
			if( ev.currentTarget.value === "" ){
				$('.popupOld').remove();
			}
		},
	});
	app.ProjectItemView = Backbone.View.extend({
		tagName: 'tr',
		initialize: function(){
			_.bindAll(this, 'render', 'unrender', 'generatePDF'); // remember: every function that uses 'this' as the current object should be in here
//			this.model.bind('change', this.render);
//			this.model.bind('remove', this.unrender);
	   	},
	   	events: {
	   		"click .generate" : "generatePDF"
	   	},
	   	generatePDF: function(ev){
//	   		var myA = $(ev.target).closest("a")
			var projectJSON = $(ev.target).closest("tr").data("pdata")
	   		console.log(projectJSON);

	   		/*
			 David's magic here...
 	   		*/
// 	   		app.curPDFUrl = "data/GSK-Instaplan-UX-v3.pdf";
            cordova.exec(function(success){
                app.curPDFUrl = "file://" + success;
                         
                 if($("#pdfPreview").length<1) $(".page").append('<div id="pdfPreview"></div>');
                 if(typeof app.projectPreview !== 'undefined'){ // remove view if it exists
                 app.projectPreview.remove();
                 }
                 app.projectPreview = new app.ProjectPreview();
                         
                         
            }, function(error){alert("error:" + error)}, 'Echo', "echo", [JSON.stringify($(ev.target).closest("tr").data("pdata"))]);



			ev.stopPropagation();
			ev.preventDefault();
	   	},
		render: function () {
//			console.log(this.model);
			var template = _.template($('#project-item-template').html(), {project: this.model});
			this.$el.html(template);
//			var newElement = $(template).appendTo("#product-content");
//			$(newElement).data("wholeModel", item.attributes);
			this.$el.data("pdata", this.model.attributes);
			return this;
		},
		unrender: function(){
			$(this.el).remove();
		},
		remove: function(){
			this.model.destroy();
		}
	});

})(jQuery);