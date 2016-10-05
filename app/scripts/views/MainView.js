var Backbone = require('backbone');


/**
* TEMPLATE VIEW
* @about : this class render the route view correct, based on routes.js definitions
**/
var MainView = Backbone.View.extend({
  /**
  Inicializa a BaseView
  @method BaseView.initialize
  */
  rendered : false,

  initialize: function (options) {
    this.options = options || {};
    this.identifier = options.identifier || "base-view";
  },

  identifier : "main-view",

  pageRender: function (view) {
    if(!this.rendered)
      this.render();

    view.render();
    this.sectionContainer.html(view.render().$el);
  },

  render : function(){
    this.$el.html(window.templates.main());
    this.sectionContainer = this.$el.find("#section-container");
    this.rendered = true;
  }
});

module.exports = MainView;
