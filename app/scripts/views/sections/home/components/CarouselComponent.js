var Backbone = require('backbone');
var BaseComponent = require('../../../_base/BaseComponentView');



var CarouselComponent = BaseComponent.extend({

  $dolEl : null,

  initialize : function(options){
    this.identifier = options.identifier;
  },

  build : function(){
    $domEl = $("#" + this.identifier);
    $domEl.find("span").click(function(evt){
      alert("aeeaeae");
    });
  },
});

module.exports = CarouselComponent;
