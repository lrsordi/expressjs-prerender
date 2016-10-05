var Backbone = require('backbone');
var $ = require('jquery');
var AboutTheProjectView = require('../views/sections/AboutTheProjectView');


var AboutTheProjectController = function(options){
  var app = options.app;
  var view;


  return {
      index : function(){
        console.log("about the project controller started");
        if(!view){
          view = new AboutTheProjectView({});
        }

        app.mainView.pageRender(view);
        $("head title").text(window.app.metatags[app.router.currentRoute].title);
        $("head meta[name='og:title']").attr("content",window.app.metatags[app.router.currentRoute].title);
        $("head meta[name=description], head meta[name='og:description']").attr("content",window.app.metatags[app.router.currentRoute].description);       
        window.prerenderReady = true;
      }
  }
}




module.exports = AboutTheProjectController;
