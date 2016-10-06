var Backbone = require('backbone');
var Router = require('./Router');
var Http = require('http');


var HomeController = require('./controllers/HomeController');
var AboutTheProjectController = require('./controllers/AboutTheProjectController');
var ProductController = require('./controllers/ProductController');
var SitemapController = require('./controllers/_core/SitemapController');
var Error404Controller = require('./controllers/_core/Error404Controller');
var MainView = require('./views/_base/MainView');


Backbone.$ = $;
window.Backbone = Backbone;
/**
Application.js - Classe base da aplicação.
@class Application
@static
**/
var Application = function() {
  var self = this;

  Http.get('public/config/routes.json', function(req){
    req.setEncoding('utf8');
    req.on('data', function (data) {
        data = JSON.parse(data);
        self.routes = data.routes;
        self.routes["*path"] = "error404#index";
        self.loadMeta();
    });
    //this.initialize();
  });
};


Application.prototype.loadMeta = function(){
  var self = this;
  Http.get('public/config/metatags.json', function(req){
    req.setEncoding('utf8');
    req.on('data', function (data) {
        data = JSON.parse(data);
        self.metatags = data.metatags;
        self.initialize();
    });
    //this.initialize();
  });
}


/**
Método de inicialização da classe.
@method Application.initialize
**/
Application.prototype.initialize = function() {
  console.log("initialize");
  /**
  * Lista de controllers: `budgetList`,`budget`,`login`
      * @property window.app.controllers
      * @static
      * @final
   */
  this.controllers = {
    home : new HomeController({app : this}),
    aboutTheProject : new AboutTheProjectController({app : this}),
    product : new ProductController({app : this}),
    sitemap : new SitemapController({app:this}),
    error404 : new Error404Controller({app : this})
  };

  /**
  * Backbone Router utilizado para gerenciar rotas.
      * @property window.app.router
      * @static
      * @final
   */
  this.router = new Router({
    app: this,
    routes : this.routes,
    controllers: this.controllers
  });

  /**
  * MainView do Backbone, onde as seções são renderizadas dentro.
      * @property window.app.mainView
      * @static
      * @final
   */
   this.mainView = new MainView({
    el: $('#app'),
    router: this.router
  });

  var self = this;
  $(document).on("click",".history-link", function(evt){
    evt.preventDefault();
    self.router.navigate($(this).attr("href"), true);
  });

  this.mainView.render();
  Backbone.history.start({ pushState: true, root : "/", silent : false });
};




module.exports = Application;
