(()=>{var t={964:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var n=i(81),r=i.n(n),o=i(645),a=i.n(o)()(r());a.push([t.id,"body{background:#F8F8F8;padding:3em;font-family:'Libre Franklin', sans-serif}h1{font-size:36px}.header{margin-bottom:30px;display:flex;justify-content:space-between}.header h1{margin:0}.header p{margin:10px 0}.header a{padding:0;border-bottom:2px solid transparent;text-decoration:none;color:#000;-webkit-transition:all 0.2s linear;transition:all 0.2s linear}.header a:hover{padding-bottom:5px;border-bottom:2px solid #000;-webkit-transition:all 0.2s linear;transition:all 0.2s linear}@media (max-width: 768px){.header{flex-direction:column}}.about-section{display:flex;justify-content:space-between;position:relative;margin-bottom:100px}.about-section h1{position:absolute;width:45%;padding-top:10px}@media (min-width: 768px) and (max-width: 1023px){.about-section h1{width:100%}}@media (max-width: 768px){.about-section h1{width:100%}}.description{width:50%;background:#fff;margin-left:30%;padding:60px 50px 50px 20%}.description p{font-size:30px;line-height:1.5}@media (min-width: 768px) and (max-width: 1023px){.description p{font-size:24px}}@media (max-width: 768px){.description p{font-size:20px}}@media (min-width: 768px) and (max-width: 1023px){.description{width:100%;margin:80px 0 0;padding:50px 50px 50px 250px}}@media (max-width: 768px){.description{width:100%;margin:200px 0 0;padding:50px}}.project-section{display:flex}.project-section .project{margin:10px 0;line-height:1.5;padding-right:30px;width:50%}.project-section .project h5{font-size:24px;margin:0}.project-section .project h5 a{color:#000}.project-section .project p{font-size:24px;margin:10px 0}@media (min-width: 768px) and (max-width: 1023px){.project-section .project p{font-size:20px}}@media (max-width: 768px){.project-section .project p{font-size:20px}}.project-section .project .links{font-size:20px}.project-section .project .links a{color:#000;text-decoration:none;transition:color 0.2s ease}.project-section .project .links a:hover{color:#444}@media (max-width: 768px){.project-section .project{width:100%}}@media (max-width: 768px){.project-section{flex-direction:column}}.graphic{margin-top:30px}.graphic img{width:250px;position:absolute;top:190px;left:25%}@media (min-width: 768px) and (max-width: 1023px){.graphic img{width:200px;top:180px;left:0}}@media (max-width: 768px){.graphic img{display:none}}.footer{margin:100px 0 0 0;text-align:center}.footer a{color:#000000;padding:5px;-moz-transition:opacity 0.5s ease;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}.footer a:hover{opacity:0.7}\n",""]);const s=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);n&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},291:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>g});var n=i(379),r=i.n(n),o=i(795),a=i.n(o),s=i(569),p=i.n(s),c=i(565),d=i.n(c),l=i(216),u=i.n(l),f=i(589),m=i.n(f),h=i(964),x={};x.styleTagTransform=m(),x.setAttributes=d(),x.insert=p().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=u(),r()(h.Z,x);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:t=>{"use strict";var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var o={},a=[],s=0;s<t.length;s++){var p=t[s],c=n.base?p[0]+n.base:p[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var u=i(l),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,n);n.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,r){var o=n(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=i(o[a]);e[s].references--}for(var p=n(t,r),c=0;c<o.length;c++){var d=i(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=p}}},569:t=>{"use strict";var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,r&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},693:()=>{},371:(t,e,i)=>{"use strict";t.exports=i.p+"images/me@2x..png"}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),i.nc=void 0,i(693),i(291),i(371)})();