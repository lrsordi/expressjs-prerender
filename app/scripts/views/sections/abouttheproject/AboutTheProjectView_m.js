var Backbone = require('backbone');
var BaseView = require('../../_base/BaseView');

/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var AboutTheProjectView = BaseView.extend({
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
    this.$el = window.templates.aboutheproject_m({identifier : this.identifier, title : "Sobre o projeto", aboutTxt : "sobre o texto! =)"});
    this.$domEl = $("#"+this.identifier);
    return this;
  }
});

module.exports = AboutTheProjectView;
