var Backbone = require('backbone');
var $ = require('jquery');
var AbstractController = require('./_base/AbstractController');
var ProductView = require('../views/sections/ProductView');

var ProductController = AbstractController.extend({
  index : function(id){
  	if(id > 5){
  		this.options.app.router.navigate("/error/url="+Backbone.history.getFragment(),true);
  		return;
  	}
    this.view = new ProductView({name : id, id : id, endAppear : this.viewDidAppear, identifier : "product"});
    this.render();
    this.view.doAppear();
  }
});




module.exports = ProductController;
