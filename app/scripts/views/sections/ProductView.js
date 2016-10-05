var Backbone = require('backbone');

/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var ProductView = Backbone.View.extend({
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
    this.$el = window.templates.product({identifier : "product", title : this.options.id, name : this.options.id, txt : "Texto sobre o produto"});
    return this;
  }
});

module.exports = ProductView;
