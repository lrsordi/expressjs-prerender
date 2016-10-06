var Backbone = require('backbone');
var $ = require('jquery');
var AbstractController = require('./_base/AbstractController');
var AboutTheProjectView = require('../views/sections/AboutTheProjectView');


var AboutTheProjectController = AbstractController.extend({
  index : function(){
    this.view = new AboutTheProjectView({endAppear : this.viewDidAppear, identifier : "about-the-project"});
    this.render();
    this.view.doAppear();
  }
});




module.exports = AboutTheProjectController;
