!function(){"use strict";var t="/durians/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"durians","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.21c2dc9a.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.d9559d4b.async.js",65],["components__TreePro__index.md.38d5043a.async.js",88],["components__TablePro__index.md.d1eda991.async.js",246],["components__LoginPro__index.md.ad12b2d5.async.js",485],["nm__dumi__theme-default__layouts__DocLayout__index.79fd8e5a.async.js",519],["components__FormPro__index.md.2b74cb94.async.js",568],["574.e8c51481.chunk.css",574],["574.5bf2332f.async.js",574],["components__ModalPro__index.md.b943831c.async.js",811],["877.4b9f672e.async.js",877],["918.677cdcf1.async.js",918],["dumi__tmp-production__dumi__theme__ContextWrapper.7c9f289e.chunk.css",923],["dumi__tmp-production__dumi__theme__ContextWrapper.46a15406.async.js",923],["docs__index.md.b83de793.async.js",935]],"r":{"/*":[2,3,7,9,10,12,13,14,15],"/":[16,7,9,10,12,13,14,15],"/~demos/:id":[0,1,12,13,14,15],"/components/form-pro":[8,7,9,10,12,13,14,15],"/components/login-pro":[6,7,9,10,12,13,14,15],"/components/modal-pro":[11,7,9,10,12,13,14,15],"/components/table-pro":[5,7,9,10,12,13,14,15],"/components/tree-pro":[4,7,9,10,12,13,14,15]}},{publicPath:"/durians/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();