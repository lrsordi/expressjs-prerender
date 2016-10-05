var Backbone = require('backbone');

/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var AboutTheProjectView = Backbone.View.extend({
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
    this.$el = window.templates.aboutheproject({identifier : "about-the-project", title : "Sobre o projeto", aboutTxt : "sobre o texto! =)"});
    return this;
  }
});

module.exports = AboutTheProjectView;
