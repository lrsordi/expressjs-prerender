var Backbone = require('backbone');
var $ = require('jquery');
var HomeView = require('../views/sections/HomeView');


var HomeController = function(options){
  var app = options.app;
  var view;

  return {
      index : function(subsection){
        view = new HomeView({block : subsection || "block1"});
        app.mainView.pageRender(view);


        view.goToSubSection((subsection || "block1"));
        $("head title").text(window.app.metatags[app.router.currentRoute].title  + "  " + (subsection || "block1"));
        $("head meta[name='og:title']").attr("content",window.app.metatags[app.router.currentRoute].title  + "  " + (subsection || "block1"));
        $("head meta[name=description], head meta[name='og:description']").attr("content",window.app.metatags[app.router.currentRoute].description  + "  " + (subsection || "block1"));

        window.prerenderReady = true;
      }
  }
}




module.exports = HomeController;
