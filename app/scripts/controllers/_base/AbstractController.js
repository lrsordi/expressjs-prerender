var Backbone = require('backbone');
var BackboneController = require('./BackboneController');
var Error404View = require('../../views/_core/Error404View');
var $ = require('jquery');


var AbstractController = Backbone.Controller.extend({

	app : null,
	view : null,
	viewRecyclable:false,

	updateMetaTags : function(){
		$("head title").text(window.app.metatags[app.router.currentRoute].title);
	    $("head meta[name='og:title']").attr("content",window.app.metatags[app.router.currentRoute].title);
	    $("head meta[name=description], head meta[name='og:description']").attr("content",window.app.metatags[app.router.currentRoute].description);
	},

	render : function(){
		if(!this.view){
			console.error("this.view is not defined, and the view cannot be rendered.");
		}

		this.updateMetaTags();
		app.mainView.pageRender(this.view);
	},

	viewDidAppear : function(){
		window.prerenderReady = true;
	},

	viewDidDisappear : function(){
		
	},


	renderError : function(){
		$("head meta[name='prerender-status-code']").attr("content", "404");
		//this.view.doAppear();
	}
});


module.exports = AbstractController;
