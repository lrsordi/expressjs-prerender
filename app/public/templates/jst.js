this["templates"]["aboutheproject"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<section id="' +__e( identifier ) +'">\n  <h1>' +__e( title ) +'</h1>\n  <p>' +__e( aboutTxt ) +'</p>\n</section>\n';}return __p};
this["templates"]["aboutheproject_m"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<section id="' +__e( identifier ) +'">\n  <h1>' +__e( title ) +'</h1>\n  <span>MOBILEEEEE</span>\n  <p>' +__e( aboutTxt ) +'</p>\n</section>\n';}return __p};
this["templates"]["error404"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<section id="' +__e( identifier ) +'">\n  <h1>Erroouuu</h1>\n  <p>' +__e( url ) +'</p>\n</section>\n';}return __p};
this["templates"]["home"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<section id="' +__e( identifier ) +'">\n  <ul>\n    <li><a href="/home/block1" class="history-link">Bloco 1</a></li>\n    <li><a href="/home/block2" class="history-link">Bloco 2</a></li>\n    <li><a href="/home/block3" class="history-link">Bloco 3</a></li>\n    <li><a href="/home/block4" class="history-link">Bloco 4</a></li>\n  </ul>\n  <h1>Olá</h1>\n\n\n  <div id="carousel-container"></div>\n\n  <div class="block block1"></div>\n  <div class="block block2"></div>\n  <div class="block block3"></div>\n  <div class="block block4"></div>\n</section>\n';}return __p};
this["templates"]["home_carousel"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="' +__e( identifier ) +'">\n  <a href="/sobre-o-projeto" class="history-link">teste btn</a>\n  <span class="svg-txt">teste do contiudo</span>\n\n\n  <svg version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 1498.11 409" style="enable-background:new 0 0 1498.11 409;" xml:space="preserve">\n    <style type="text/css">\n    	path {fill:red;fill-opacity:0;stroke:red;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;}\n    </style>\n\n    <g id="DrawSVG">\n    	<g>\n    	</g>\n    </g>\n</svg>\n\n</div>\n';}return __p};
this["templates"]["main"] = function(obj) {obj || (obj = {});var __t, __p = '';with (obj) {__p += '<nav id="main-menu">\n  <ul class="items">\n    <li><a href="/" class="history-link">Home</a></li>\n    <li><a href="/sobre-o-projeto" class="history-link">Sobre o projeto</a></li>\n    <li><a href="/produto/1" class="history-link">Produto 1</a></li>\n    <li><a href="/produto/2" class="history-link">Produto 2</a></li>\n    <li><a href="/produto/3" class="history-link">Produto 3</a></li>\n    <li><a href="/produto/4" class="history-link">Produto 4</a></li>\n    <li><a href="/produto/5" class="history-link">Produto 5</a></li>\n    <li><a href="/produto/6" class="history-link">Produto 6</a></li>\n  </ul>\n</nav>\n<div id="section-container"></div>\n';}return __p};
this["templates"]["product"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<section id="' +__e( identifier ) +'">\n  <h1>' +__e( ("Nome do produto " + name.toString()) ) +'</h1>\n  <br/><br/>\n  <br/><br/>\n  <p>Sobre este produto:</p>\n  <p>' +__e( txt ) +'</p><br/><br/>\n</section>\n';}return __p};