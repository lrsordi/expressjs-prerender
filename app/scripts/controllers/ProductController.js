var Backbone = require('backbone');
var $ = require('jquery');
var ProductView = require('../views/sections/ProductView');

var ProductController = function(options){
  var app = options.app;
  var view;

  return {
      index : function(id){
        console.log("product controller started " + id);
        view = new ProductView({name : id, id : id});
        app.mainView.pageRender(view);

        $("head title").text(window.app.metatags[app.router.currentRoute].title + " " + id);
        $("head meta[name='og:title']").attr("content",window.app.metatags[app.router.currentRoute].title + " " + id);
        $("head meta[name=description], head meta[name='og:description']").attr("content",window.app.metatags[app.router.currentRoute].description + " " + id);
        window.prerenderReady = true;
      }
  }
}




module.exports = ProductController;
