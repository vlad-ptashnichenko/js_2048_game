parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.querySelector("body"),a=l.querySelector(".button"),i=l.querySelector(".message-container"),s=i.querySelector(".message-start"),d=i.querySelector(".message-win"),f=i.querySelector(".message-lose"),u=l.querySelector(".game-score"),h=e(l.querySelectorAll(".field-row")),y=e(document.querySelectorAll(".field-cell")),g=!1;function v(){var e="";do{e=y[Math.floor(Math.random()*y.length)]}while(1!==e.classList.length);Math.random()>.9?(e.classList.add("field-cell--4"),e.textContent="4"):(e.classList.add("field-cell--2"),e.textContent="2"),x()}function x(){for(var e=y.every(function(e){return 2===e.classList.length}),t=!0,n=0;n<h.length;n++)for(var r=0;r<h[n].children.length;r++)h[n].children[r].nextElementSibling&&h[n].children[r].textContent===h[n].children[r].nextElementSibling.textContent&&(t=!1),n<3&&h[n].children[r].textContent===h[n+1].children[r].textContent&&(t=!1);e&&t&&f.classList.remove("hidden")}function m(e,t,n){switch(t){case"ArrowUp":case"ArrowLeft":c(e);break;case"ArrowDown":case"ArrowRight":e.reverse(),c(e),e.reverse()}switch(t){case"ArrowUp":case"ArrowDown":for(var r=0;r<e.length;r++)h[r].append(e[r]);break;case"ArrowLeft":case"ArrowRight":for(var o=0;o<e.length;o++)h[n].append(e[o])}function c(e){e.sort(function(e,t){return""===e.textContent?1:""===t.textContent?-1:(e.textContent===t.textContent&&(e.classList.remove("field-cell--".concat(e.textContent)),e.textContent="",t.classList.remove("field-cell--".concat(t.textContent)),t.textContent*=2,t.classList.add("field-cell--".concat(t.textContent)),g=!0,u.textContent=+u.textContent+ +t.textContent),0)})}}function w(e,t){return e.some(function(e){switch(t){case"ArrowLeft":for(var n=e.children.length-1;n>0;n--)if(e.children[n].textContent&&!e.children[n-1].textContent)return!0;break;case"ArrowRight":for(var r=0;r<e.children.length-1;r++)if(e.children[r].textContent&&!e.children[r+1].textContent)return!0;break;case"ArrowUp":for(var o=e.length-1;o>0;o--)if(e[o].textContent&&!e[o-1].textContent)return!0;break;case"ArrowDown":for(var c=0;c<e.length-1;c++)if(e[c].textContent&&!e[c+1].textContent)return!0}})}a.addEventListener("click",function(){for(var e=0;e<y.length;e++)y[e].className="field-cell",y[e].textContent="";a.classList.remove("start"),a.classList.add("restart"),a.textContent="Restart",s.classList.add("hidden"),f.classList.add("hidden"),u.textContent=0,v(),v()}),l.addEventListener("keyup",function(t){var n=e(document.querySelectorAll(".field-cell"));if(s.classList.contains("hidden")&&d.classList.contains("hidden")&&f.classList.contains("hidden")){for(var r=[],o=function(e){r.push(n.filter(function(t,n){return(n+e)%4==0}))},c=h.length;c>0;c--)o(c);switch(t.key){case"ArrowUp":for(var a=w(r,t.key),i=0;i<r.length;i++)m(r[i],t.key);L(a);break;case"ArrowDown":for(var u=w(r,t.key),y=0;y<r.length;y++)m(r[y],t.key);L(u);break;case"ArrowLeft":for(var x=w(h,t.key),C=0;C<h.length;C++)m(e(h[C].children),t.key,C);L(x);break;case"ArrowRight":for(var A=w(h,t.key),b=0;b<h.length;b++)m(e(h[b].children),t.key,b);L(A)}}function L(e){(g||e)&&(v(),g=!1)}l.querySelector(".field-cell--2048")&&d.classList.remove("hidden")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b74b00cc.js.map