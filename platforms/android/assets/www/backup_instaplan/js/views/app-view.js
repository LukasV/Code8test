/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
//	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({
		el: '.page',
//		className: '',
	    initialize: function(){
	      _.bindAll(this, 'render', 'newProjectPopup', 'saveProject'); // fixes loss of context for 'this' within methods
	      app.projectList = new ProjectList();
	      app.projectList.fetch();
//	       this.render(); // not all views are self-rendering. This one is.
	    },
		render: function() {
//			$('.page').html(this.el);
			var template = _.template( $('#home-template').html() );
			this.$el.html(template);
			return this; // for chainable calls, like .render().el
		},
		events: {
			"click #new-project" : "newProjectPopup",
			"submit .add-project-form" : "saveProject",
			"blur #projectname" : "closePopup"
		},
		newProjectPopup: function(){
			var template = _.template( $('#new-project-template').html() );
			this.$el.find('.landing-page').append(template);
			this.$el.find('#projectname').focus();
			return false; // prevent reload
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
				$('.popup, .popupOld').remove();
			}
		}
	});
})(jQuery);
