var Backbone = require('backbone');
var $ = require('jquery');
var AbstractController = require('./_base/AbstractController');
var AboutTheProjectView = require('../views/sections/abouttheproject/AboutTheProjectView');
var AboutTheProjectViewMobile = require('../views/sections/abouttheproject/AboutTheProjectView_m');


var AboutTheProjectController = AbstractController.extend({
  index : function(){
    if(window.md.mobile() == null)
      this.view = new AboutTheProjectView({identifier : "about-the-project", controller : this});
    else
      this.view = new AboutTheProjectViewMobile({identifier : "about-the-project", controller : this});
    this.render();
    //this.view.doAppear();
  }
});




module.exports = AboutTheProjectController;
