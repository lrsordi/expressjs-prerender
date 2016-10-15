var Backbone = require('backbone');
var BaseComponent = require('../../../_base/BaseComponentView');
var opentype = require("opentype.js");
require('gsap');
require('../../../../vendors/DrawSVGPlugin');



var CarouselComponent = BaseComponent.extend({

  $dolEl : null,

  initialize : function(options){
    this.identifier = options.identifier;
  },

  build : function(){
    $domEl = $("#" + this.identifier);
    /*
    document.createElementNS("http://www.w3.org/2000/svg", "rect");
    document.createElementNS("http://www.w3.org/2000/svg", "path");
    document.createElementNS("http://www.w3.org/2000/svg", "g");

    opentype.load('public/fonts/intro-regular.otf', function(err, font) {
      var path = font.getPath('teste aqui', 0, 150, 150);
      var el = path.toSVG(2);
      var dStr = el.replace("<path d=\"","").replace("\"/>","");

      $domEl.find("svg g g").append(el);
      el = $domEl.find("svg g g")[0];
      newpath = document.createElementNS('http://www.w3.org/2000/svg',"path");
      newpath.setAttributeNS(null, "d",dStr);
      console.log(newpath);
      window.el = el;
      el.appendChild(newpath);

      TweenMax.set($domEl.find("path"), {drawSVG:"0%", fillOpacity:0});
      TweenMax.to($domEl.find("path"),5,{drawSVG:"100%", delay:1, ease : Linear.easeInOut});
      TweenMax.to($domEl.find("path"), 1, {fillOpacity:0.3, delay:1, ease : Linear.easeNone, overwrite:false});
      // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).
  });*/
  },
});

module.exports = CarouselComponent;
