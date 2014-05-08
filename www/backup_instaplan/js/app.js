var app = app || {};
//var ENTER_KEY = 13;
//var ESC_KEY = 27;

$(function () {
'use strict';

//	Backbone.sync = function(method, model, success, error){ // Backbone.sync: Overrides persistence storage with dummy function. This enables use of Model.destroy() without raising an error.
//		success();
//	}

	// kick things off by creating the `App`
	app.appView = new app.AppView();

	// Main Router
	// ----------
	app.MainRouter = Backbone.Router.extend({
		routes: {
		   	"": "home",
		   	"projects": "list_projects",
		   	"edit/:id": "edit_project",
		   	"delete/:id": "delete_project"
		},
		home: function(){
			app.appView.render();
		},
		list_projects: function(){
			if(typeof app.projectListView !== 'undefined'){ // remove view if it exists
				app.projectListView.remove();
			}
			app.projectListView = new app.ProjectListView({collection: app.projectList});
		},
		edit_project: function(_id){
			app.currProject = null;
//			console.warn(_id);
			app.currProject = Project.findOrCreate({id: _id, bays: {} }); //merge:false,
			app.currProjectId = _id;
//			console.warn(app.currProject);
//				console.log(app.currProject);
			if(typeof app.projectEditView !== 'undefined'){ // remove view if it exists
				app.projectEditView.remove();
			}
			app.projectEditView = new app.ProjectEditView();
			if(typeof app.productBarView !== 'undefined'){ // remove view if it exists
				app.productBarView.remove();
			}
			app.productBarView = new app.ProductBarView();
		},
		delete_project: function(_id){
			var projectRemoved = app.projectList.get(_id);
			projectRemoved.destroy();
			app.mainRouter.navigate('#/projects', {trigger:true});
		}
	});

	app.mainRouter = new app.MainRouter();
	Backbone.history.start();
//	init();
	$("#canvas").remove();
});
/*function onDeviceReady() {
	if(typeof StatusBar !== 'undefined') { StatusBar.hide(); }
	alert(StatusBar);
}
document.addEventListener("deviceready", onDeviceReady, false);*/