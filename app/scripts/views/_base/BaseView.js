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
    var self = this;
    TweenMax.killTweensOf($("#"+this.identifier));
    TweenMax.to($("#"+this.identifier), 0.3, {alpha : 0, x : -100, ease : Back.easeIn, onComplete:self._internalEndDisappear, onCompleteParams:[self, self.options.controller]});
  },


  doAppear : function(animated){
  	animated = animated || true;
    var self = this;
    TweenMax.killTweensOf($("#"+this.identifier));
  	TweenMax.from($("#"+this.identifier), 0.6, {alpha : 0, x : 100, ease : Back.easeOut, onComplete:self._internalEndAppear, onCompleteParams:[self,self.options.controller]});
  },

  _internalEndAppear : function(self,controller){
    console.log(self.identifier);
    console.log()
  	controller.viewDidAppear();
    controller.viewIsReady();
    self.trigger('endAppear');
  },

  _internalEndDisappear : function(self, controller){
  	controller.viewDidDisappear();
    self.trigger('endDisappear');
  },

  manageSubsection : function(str){
    console.error("view.manageSubsection not implemented");
  }
});

module.exports = BaseView;
