var Backbone = require('backbone');
var BaseView = require('../_base/BaseView');
require('gsap');
require('gsap/src/uncompressed/plugins/ScrollToPlugin');

/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var HomeView = BaseView.extend({
  /**
  Inicializa a BaseView
  @method BaseView.initialize
  */
  $domEl : null,

  initialize: function (options) {
    this.options = options || {};
    this.identifier = options.identifier || "base-view";
    this.controller = options.controller;
  },

  

  render : function(parentNode){
    this.$el = window.templates.home({identifier : this.identifier});
    return this;
  },


  manageSubsection : function(subsection){
    $domEl = $("#"+this.identifier);
    var posy;

    if(subsection){
      posy = $domEl.find("."+subsection).offset().top;
    }else{
      posy = 0;
    }
    
    // TweenMax.killTweensOf(window);
    TweenMax.to(window, 1, {scrollTo:{x : 0, y : posy}, ease: Quint.easeInOut});
  },
});

module.exports = HomeView;
