var Backbone = require('backbone');
var $ = require('jquery');
var HomeView = require('../views/sections/HomeView');
var AbstractController = require('./_base/AbstractController');


var HomeController = AbstractController.extend({
  viewRecyclable : true,

  index : function(){
	if($("#home").length == 0){
		this.view = new HomeView({endAppear : this.viewDidAppear, identifier : "home"});
	    this.render();
	    this.view.doAppear();
	}

	this.checkSubsection();
  },

  checkSubsection : function(){
  	var arrSplit = Backbone.history.location.pathname.split("/");
	var subsection = arrSplit[arrSplit.length-1];
	this.view.manageSubsection(subsection);
  }
});




module.exports = HomeController;
