var Backbone = require('backbone');
var $ = require('jquery');
var AbstractController = require('./_base/AbstractController');
var ProductView = require('../views/sections/ProductView');

var ProductController = AbstractController.extend({
  index : function(id){
    this.view = new ProductView({name : id, id : id, endAppear : this.viewDidAppear, identifier : "product", controller : this});
    this.render();
  }
});




module.exports = ProductController;
