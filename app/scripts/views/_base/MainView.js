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
  currentView : null,
  nextView : null,
  nextRoute : null,


  performingTransition : false,

  initialize: function (options) {
    this.options = options || {};
    this.identifier = options.identifier || "base-view";
  },

  identifier : "main-view",

  pageRender: function (view, ignore) {
    ignore = ignore || false;
    if(this.performingTransition && !ignore) return;

    if(!this.rendered)
      this.render();

    if(this.currentView != null){
      this.listenTo(this.currentView, 'endDisappear', this._renderNextView);
      this.performingTransition = true;
      this.currentView.doDisappear();
      this.nextView = view;
      this.nextRoute = Backbone.history.fragment;
      return;
    }


    this.currentView = view;
    this.nextView = null;
    this.sectionContainer.html(view.render().$el);

    this.listenTo(view, 'endAppear', this.endAppear);
    //view.on('endDisappear', this.endAppear);
    view.doAppear();
  },

  endAppear : function(){
    this.performingTransition = false;
    this.checkRouteChanges();
    console.log("END APPEAR");
  },


  checkRouteChanges : function(){
    if(this.nextRoute != null && Backbone.history.fragment != this.nextRoute){
      Backbone.history.navigate(this.nextRoute, true);
      this.nextRoute = null;
      return true;
    }

    this.nextRoute = null;
    return false;
  },

  render : function(){
    this.$el.html(window.templates.main());
    this.sectionContainer = this.$el.find("#section-container");
    this.rendered = true;
  },

  renderNextView : function(){
    this.currentView.destroy();
    this.currentView.remove();
    this.currentView = null;
    this.pageRender(this.nextView, true);
  },

  _renderNextView : function(){
    window.app.mainView.renderNextView();
  }
});

module.exports = MainView;
