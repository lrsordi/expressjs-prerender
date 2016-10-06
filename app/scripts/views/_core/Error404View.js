var Backbone = require('backbone');
var BaseView = require('../_base/BaseView');

/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var Error404View = BaseView.extend({
  /**
  Inicializa a BaseView
  @method BaseView.initialize
  */
  redered : false,

  initialize: function (options) {
    this.options = options || {};
    this.identifier = options.identifier || "base-view";
  },

  identifier : "error404",

  render : function(parentNode){
    
    this.$el = window.templates.error404({identifier : "about-the-project", url : this.options.url});
    return this;
  }
});

module.exports = Error404View;
