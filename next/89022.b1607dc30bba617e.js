(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89022],{89022:()=>{!function(e,n){var t,r="hljs-ln",o="hljs-ln-line",a="hljs-ln-code",i="hljs-ln-numbers",l="hljs-ln-n",s="data-line-number",c=/\r\n|\r|\n/g;function u(t){try{var r=n.querySelectorAll("code.hljs,code.nohighlight");for(var o in r)r.hasOwnProperty(o)&&(r[o].classList.contains("nohljsln")||d(r[o],t))}catch(n){e.console.error("LineNumbers error: ",n)}}function d(n,t){var r;"object"==typeof n&&(r=function(){n.innerHTML=f(n,t)},e.setTimeout(r,0))}function f(e,n){var t=function(e,n){return{singleLine:h(n=n||{}),startFrom:m(e,n)}}(e,n);return v(e),function(e,n){var t=g(e);if(""===t[t.length-1].trim()&&t.pop(),t.length>1||n.singleLine){for(var c="",u=0,d=t.length;u<d;u++)c+=N('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[o,i,l,s,a,u+n.startFrom,t[u].length>0?t[u]:" "]);return N('<table class="{0}">{1}</table>',[r,c])}return e}(e.innerHTML,t)}function h(e){return!!e.singleLine&&e.singleLine}function m(e,n){var t=1;isFinite(n.startFrom)&&(t=n.startFrom);var r=function(e,n){return e.hasAttribute(n)?e.getAttribute(n):null}(e,"data-ln-start-from");return null!==r&&(t=function(e,n){if(!e)return 1;var t=Number(e);return isFinite(t)?t:1}(r)),t}function v(e){var n=e.childNodes;for(var t in n)if(n.hasOwnProperty(t)){var r=n[t];(r.textContent.trim().match(c)||[]).length>0&&(r.childNodes.length>0?v(r):p(r.parentNode))}}function p(e){var n=e.className;if(/hljs-/.test(n)){for(var t=g(e.innerHTML),r=0,o="";r<t.length;r++)o+=N('<span class="{0}">{1}</span>\n',[n,t[r].length>0?t[r]:" "]);e.innerHTML=o.trim()}}function g(e){return 0===e.length?[]:e.split(c)}function N(e,n){return e.replace(/\{(\d+)\}/g,(function(e,t){return void 0!==n[t]?n[t]:e}))}e.hljs?(e.hljs.initLineNumbersOnLoad=function(t){"interactive"===n.readyState||"complete"===n.readyState?u(t):e.addEventListener("DOMContentLoaded",(function(){u(t)}))},e.hljs.lineNumbersBlock=d,e.hljs.lineNumbersValue=function(e,n){if("string"==typeof e){var t=document.createElement("code");return t.innerHTML=e,f(t,n)}},(t=n.createElement("style")).type="text/css",t.innerHTML=N(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[r,l,s]),n.getElementsByTagName("head")[0].appendChild(t)):e.console.error("highlight.js not detected!"),document.addEventListener("copy",(function(e){var n,t=window.getSelection();(function(e){for(var n=e;n;){if(n.className&&-1!==n.className.indexOf("hljs-ln-code"))return!0;n=n.parentNode}return!1})(t.anchorNode)&&(n=-1!==window.navigator.userAgent.indexOf("Edge")?function(e){for(var n=e.toString(),t=e.anchorNode;"TD"!==t.nodeName;)t=t.parentNode;for(var r=e.focusNode;"TD"!==r.nodeName;)r=r.parentNode;var o=parseInt(t.dataset.lineNumber),i=parseInt(r.dataset.lineNumber);if(o!=i){var l=t.textContent,c=r.textContent;if(o>i){var u=o;o=i,i=u,u=l,l=c,c=u}for(;0!==n.indexOf(l);)l=l.slice(1);for(;-1===n.lastIndexOf(c);)c=c.slice(0,-1);for(var d=l,f=function(e){for(var n=e;"TABLE"!==n.nodeName;)n=n.parentNode;return n}(t),h=o+1;h<i;++h){var m=N('.{0}[{1}="{2}"]',[a,s,h]);d+="\n"+f.querySelector(m).textContent}return d+"\n"+c}return n}(t):t.toString(),e.clipboardData.setData("text/plain",n),e.preventDefault())}))}(window,document)}}]);