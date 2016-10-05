var Backbone = require('backbone');
var $ = require('jquery');
var Error404View = require('../views/Error404View');


var Error404Controller = function(options){
  var app = options.app;
  var view;

  return {
      index : function(){
        console.log(app.router);
        if(!view){
          view = new Error404View({url : Backbone.history.getFragment()});
        }

        app.mainView.pageRender(view);
        window.prerenderReady = true;
      }
  }
}




module.exports = Error404Controller;
