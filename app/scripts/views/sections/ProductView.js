var Backbone = require('backbone');
var BaseView = require('../_base/BaseView');

/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var ProductView = BaseView.extend({
  /**
  Inicializa a BaseView
  @method BaseView.initialize
  */

  initialize: function (options) {
    this.options = options || {};
    this.identifier = options.identifier || "base-view";
    this.controller = options.controller;
  },

  render : function(parentNode){
    this.$el = window.templates.product({identifier : this.identifier, title : this.options.id, name : this.options.id, txt : "Texto sobre o produto"});
    this.$domEl = $("#"+this.identifier);
    return this;
  }
});

module.exports = ProductView;
