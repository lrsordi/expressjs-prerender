var Backbone = require('backbone');
var $ = require('jquery');
var AbstractController = require('./_base/AbstractController');
var AboutTheProjectView = require('../views/sections/AboutTheProjectView');


var AboutTheProjectController = AbstractController.extend({
  index : function(){
    this.view = new AboutTheProjectView({identifier : "about-the-project", controller : this});
    this.render();
    this.view.doAppear();
  }
});




module.exports = AboutTheProjectController;
