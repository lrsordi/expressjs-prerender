var Backbone = require('backbone');
require('gsap');

var BaseComponentView = Backbone.View.extend({
  /**
  Inicializa a BaseView
  @method BaseView.initialize
  */
  rendered : false,
  identifier : "",
  references : null,
  controller : {},
  $domEl : {},

  render : function(){
    this.$el = window.templates[this.identifier]({identifier : this.identifier});
    return this;
  },

  initialize : function(options){
    this.identifier = options.identifier;

    console.error("["+options.identifier+"] - component initialize not implemented");
  },

  build : function(){
    console.error("["+this.identifier+"] - component build not implemented");
  },

  remove: function(){
    TweenMax.killTweensOf($("#"+this.identifier));
  },

  destroy : function(){
    console.error("component.destroy is not implemented.");
  },

});

module.exports = BaseComponentView;
