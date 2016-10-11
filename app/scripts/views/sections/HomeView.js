var Backbone = require('backbone');
var BaseView = require('../_base/BaseView');
require('gsap');
var CarouselComponent = require('./home/CarouselComponent');
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
  carousel : null,

  initialize: function (options) {
    this.options = options || {};
    this.identifier = options.identifier || "base-view";
    this.controller = options.controller;
  },



  createComponents : function(){

    console.log(this.$domEl);

    carousel = new CarouselComponent({identifier : "home_carousel"});
    this.$domEl.find("#carousel-container").html(carousel.render().$el);
    carousel.build();
  },


  doAppear : function(){
    this.$domEl = $("#"+this.identifier);

    var self = this;
    TweenMax.from(this.$domEl, 0.8, {alpha : 0, x : 300, ease : Elastic.easeOut, onComplete:self._internalEndAppear, onCompleteParams:[self, self.options.controller]});
    this.createComponents();
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
