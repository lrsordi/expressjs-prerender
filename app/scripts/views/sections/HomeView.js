var Backbone = require('backbone');

/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var HomeView = Backbone.View.extend({
  /**
  Inicializa a BaseView
  @method BaseView.initialize
  */
  redered : false,

  initialize: function (options) {
    this.options = options || {};
    this.identifier = options.identifier || "base-view";
  },

  identifier : "abouttheproject",

  render : function(parentNode){
    this.$el = window.templates.home({identifier : "home"});
    return this;
  },

  goToSubSection : function(block){
    TweenMax.to(window, 1, {scrollTo : {x : 0, y : $("#home").find("."+block).offset().top}, ease : Quint.easeOut});
  }
});

module.exports = HomeView;
