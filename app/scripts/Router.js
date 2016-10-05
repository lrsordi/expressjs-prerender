var Backbone = require('backbone');
var BackboneRouteControl = require('backbone-route-control');



/**
Classe responsável pelos métodos de rota
@class Router
@extends BackboneRouteControl
**/
var Router = BackboneRouteControl.extend({
    /**
    Definição das rotas da aplicação
    @property Router.routes
    @static
    */

/**
    Rota default. Redireciona para a home.
    @method Router.defaultRoute
    @static
*/
  defaultRoute : function(){
    this.navigate('', true);
  },

/**
    Middleware executada em cada rota. Checa se o usuário está logado.
    @method Router.route
    @param route
    @param name
    @param callback
    @static
*/
    route: function(route, name, callback) {
        var router = this;
        if (!callback) callback = this[name];
        var self = this;
        var f = function(p1,p2,p3) {
            router.currentRoute = route;
            callback.apply(router, arguments);
        };
        return Backbone.Router.prototype.route.call(this, route, name, f);
    }
});

module.exports = Router;
