var Backbone = require('backbone');
require('gsap');

var BaseView = Backbone.View.extend({
  /**
  Inicializa a BaseView
  @method BaseView.initialize
  */
  rendered : false,
  identifier : "",
  controller : {},
  $domEl : {},

  render : function(){

  },

  remove: function(){
    TweenMax.killTweensOf($("#"+this.identifier));
  },

  doDisappear : function(){
    this.remove();
    this.unbind();
  },


  doAppear : function(animated){
  	animated = animated || true;
  	TweenMax.from($("#"+this.identifier), 1, {alpha : 0, y : "10%", ease : Quint.easeOut, onComplete:this.options.endAppear});
  },

  _internalEndAppear : function(){
  	this.controller.viewDidAppear();
  },

  manageSubsection : function(str){
    console.error("view.manageSubsection not implemented");
  }
});

module.exports = BaseView;