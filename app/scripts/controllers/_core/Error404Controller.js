var Backbone = require('backbone');
var $ = require('jquery');
var Error404View = require('../../views/_core/Error404View');
var AbstractController = require('../_base/AbstractController');

var Error404Controller = AbstractController.extend({

  index : function(){
  	this.renderError();
    if(!this.view){
      this.view = new Error404View({url : Backbone.history.getFragment(), endAppear : this.viewDidAppear, identifier : "error", controller : this});
    }
    this.render();
    
  }
});




module.exports = Error404Controller;
