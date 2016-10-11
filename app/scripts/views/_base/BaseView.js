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

  destroy : function(){
    console.error("view.destroy is not implemented.");
  },

  doDisappear : function(){
    // this.remove();
    // this.unbind();
    TweenMax.from($("#"+this.identifier), 1, {alpha : 0, y : "10%", ease : Quint.easeOut, onComplete:this.options.endAppear});
  },


  doAppear : function(animated){
  	animated = animated || true;
    var self = this;
  	TweenMax.from($("#"+this.identifier), 1, {alpha : 0, y : "10%", ease : Quint.easeOut, onComplete:self._internalEndAppear, onCompleteParams:[self.controller]});
  },

  _internalEndAppear : function(controller){
  	controller.viewDidAppear();
  },

  manageSubsection : function(str){
    console.error("view.manageSubsection not implemented");
  }
});

module.exports = BaseView;
