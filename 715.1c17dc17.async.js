(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[715],{38645:function(I,R,m){"use strict";m.d(R,{Z:function(){return H}});var A=m(85045),r=m(67294),O=m(35532),j=m(67915);function h(l){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(l)}function S(l,t){return B(l)||W(l,t)||g(l,t)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(l,t){if(l){if(typeof l=="string")return v(l,t);var o=Object.prototype.toString.call(l).slice(8,-1);if(o==="Object"&&l.constructor&&(o=l.constructor.name),o==="Map"||o==="Set")return Array.from(l);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return v(l,t)}}function v(l,t){(t==null||t>l.length)&&(t=l.length);for(var o=0,e=new Array(t);o<t;o++)e[o]=l[o];return e}function W(l,t){var o=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(o!=null){var e,n,a,i,s=[],f=!0,d=!1;try{if(a=(o=o.call(l)).next,t===0){if(Object(o)!==o)return;f=!1}else for(;!(f=(e=a.call(o)).done)&&(s.push(e.value),s.length!==t);f=!0);}catch(y){d=!0,n=y}finally{try{if(!f&&o.return!=null&&(i=o.return(),Object(i)!==i))return}finally{if(d)throw n}}return s}}function B(l){if(Array.isArray(l))return l}function T(l,t){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(l);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable})),o.push.apply(o,e)}return o}function C(l){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?T(Object(o),!0).forEach(function(e){k(l,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):T(Object(o)).forEach(function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(o,e))})}return l}function k(l,t,o){return t=c(t),t in l?Object.defineProperty(l,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[t]=o,l}function c(l){var t=p(l,"string");return h(t)==="symbol"?t:String(t)}function p(l,t){if(h(l)!=="object"||l===null)return l;var o=l[Symbol.toPrimitive];if(o!==void 0){var e=o.call(l,t||"default");if(h(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(l)}function u(l){var t=l.children;return r.createElement("span",{"data-token":t},t)}function b(l){return l.hasQuestionToken&&typeof l.type=="string"&&(l.type=l.type.replace(/\s+\|\s+undefined\s*$/i,"")),l}var E=function(t){var o,e=(0,A.YB)(),n=(0,A.WF)(),a=n.themeConfig;return(o=t.source)!==null&&o!==void 0&&o[0]&&a.sourceLink?r.createElement("a",{className:"dumi-default-api-link",href:e.formatMessage({id:"$internal.api.sourceLink"},C({},t.source[0])),target:"_blank",rel:"noreferrer"},t.className):t.className},_={toNode:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||r.createElement("span",null,t.type):"const"in t?r.createElement("span",null,t.const):"oneOf"in t?this.oneOf(t):r.createElement("span",null,"unknown")},string:function(t){return r.createElement("span",null,t.type)},number:function(t){return r.createElement("span",null,t.type)},boolean:function(t){return r.createElement("span",null,t.type)},any:function(t){return r.createElement("span",null,t.type)},object:function(t){var o=this,e=Object.entries(t.properties||{}),n=e.map(function(a,i){var s,f=S(a,2),d=f[0],y=f[1];return r.createElement("span",{key:d},r.createElement("span",null,d),!((s=t.required)!==null&&s!==void 0&&s.includes(d))&&r.createElement(u,null,"?"),r.createElement(u,null,":"),y.type==="object"?r.createElement("span",null,"object"):o.toNode(y),i<e.length-1&&r.createElement(u,null,";"))});return r.createElement("span",null,r.createElement(u,null,"{"),n,r.createElement(u,null,"}"))},array:function(t){var o=r.createElement("span",null,"any");if(t.items){var e=this.getValidClassName(t.items);o=e!=null?e:this.toNode(t.items)}return r.createElement("span",null,o,r.createElement(u,null,"["),r.createElement(u,null,"]"))},element:function(t){return r.createElement("span",null,r.createElement(u,null,"<"),r.createElement("span",null,t.componentName),r.createElement(u,null,">"))},function:function(t){var o=this,e=t.signature;if(!e)return r.createElement("span",null,"Function");var n="oneOf"in e?e.oneOf:[e];return n.map(function(a,i){return r.createElement("span",{key:"".concat(i)},a.isAsync?r.createElement(u,null,"async"):"",r.createElement(u,null,"("),a.arguments.map(function(s,f){return r.createElement("span",{key:"".concat(i).concat(f)},r.createElement("span",null,s.key),s.hasQuestionToken&&r.createElement(u,null,"?"),r.createElement(u,null,":"),o.toNode(s.schema?s.schema:b(s)),f<a.arguments.length-1&&r.createElement(u,null,","))}),r.createElement(u,null,")"),r.createElement(u,null,"=>"),o.toNode(a.returnType),i<n.length-1&&r.createElement(u,null,"|"))})},dom:function(t){return r.createElement("span",null,t.className||"DOM")},enum:function(t){var o=t.enum.map(function(e){return JSON.stringify(e)});return r.createElement("span",null,o.map(function(e,n){return r.createElement("span",{key:n},r.createElement("span",null,e),n<o.length-1&&r.createElement(u,null,"|"))}))},oneOf:function(t){var o=this;return t.oneOf.map(function(e,n){return r.createElement("span",{key:n},o.getValidClassName(e)||o.toNode(e),n<t.oneOf.length-1&&r.createElement(u,null,"|"))})},reference:function(t){var o=this,e=t.typeParameters||[],n=e.map(function(a,i){return r.createElement("span",{key:i},o.toNode(a),i<e.length-1&&r.createElement(u,null,","))});return r.createElement(r.Fragment,null,r.createElement("a",{className:"dumi-default-api-link",href:t.externalUrl,target:"_blank",rel:"noreferrer"},t.name),n.length?r.createElement(r.Fragment,null,r.createElement(u,null,"<"),n,r.createElement(u,null,">")):"")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?r.createElement(E,t):null}},L=function(t){var o=(0,r.useState)(function(){return _.toNode(t)}),e=S(o,2),n=e[0],a=e[1];return(0,r.useEffect)(function(){a(_.toNode(t))},[t]),r.createElement("code",{className:"dumi-default-api-type"},n)};function x(l){var t={};return Object.entries(l).forEach(function(o){var e,n,a=S(o,2),i=a[0],s=a[1],f=(e=s.tags)===null||e===void 0?void 0:e.modifierTags,d=(n=s.tags)===null||n===void 0?void 0:n.blockTags;f==null||f.forEach(function(y){(y==="alpha"||y==="beta"||y==="experimental")&&(t[i]=[y])}),d==null||d.forEach(function(y){var P=y.tag,D=y.content;if(P==="deprecated"||P==="since"){var F=D.map(function($){return $.text}).join("");t[i]=[P,F]}})}),t}var N=function(t){var o=t.name,e=t.info,n=(0,A.YB)(),a=S(e,2),i=a[0],s=a[1],f=k({className:"dumi-default-api-release-modifer"},"data-release",i);s&&i==="deprecated"&&(f["data-dumi-tooltip"]=s);var d=i==="since"?"".concat(s,"+"):n.formatMessage({id:"api.component.release.".concat(i)});return r.createElement("span",{className:"dumi-default-api-release"},r.createElement("span",{className:"dumi-default-api-release-name","data-release":i},o),r.createElement("span",f,i==="deprecated"?d:r.createElement(O.Z,{type:"info"},d)))},M=function(t){var o=(0,A.eL)(),e=o.frontmatter,n=(0,A.cc)(),a=n.components,i=t.id||e.atomId,s=(0,A.YB)();if(!i)throw new Error("`id` properties if required for API component!");var f=a==null?void 0:a[i],d={},y=(t.type||"props").toLowerCase();if(f){var P,D="".concat(y,"Config");d=((P=f[D])===null||P===void 0?void 0:P.properties)||{}}var F=(0,r.useMemo)(function(){return x(d)},[d]);return r.createElement("div",{className:"markdown"},r.createElement(j.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,s.formatMessage({id:"api.component.name"})),r.createElement("th",null,s.formatMessage({id:"api.component.description"})),r.createElement("th",null,s.formatMessage({id:"api.component.type"})),y==="props"&&r.createElement("th",null,s.formatMessage({id:"api.component.default"})))),r.createElement("tbody",null,Object.keys(d).length?Object.entries(d).map(function($){var U,Z=S($,2),K=Z[0],V=Z[1];return r.createElement("tr",{key:K},r.createElement("td",null,F[K]?r.createElement(N,{name:K,info:F[K]}):K),r.createElement("td",null,V.description||"--"),r.createElement("td",null,r.createElement(L,V)),y==="props"&&r.createElement("td",null,r.createElement("code",null,(U=f.propsConfig.required)!==null&&U!==void 0&&U.includes(K)?s.formatMessage({id:"api.component.required"}):JSON.stringify(V.default)||"--")))}):r.createElement("tr",null,r.createElement("td",{colSpan:4},s.formatMessage({id:"api.component.".concat(a?"not.found":"unavailable")},{id:i}))))))},H=M},35532:function(I,R,m){"use strict";m.d(R,{Z:function(){return j}});var A=m(67294);function r(){return r=Object.assign?Object.assign.bind():function(h){for(var S=1;S<arguments.length;S++){var w=arguments[S];for(var g in w)Object.prototype.hasOwnProperty.call(w,g)&&(h[g]=w[g])}return h},r.apply(this,arguments)}var O=function(S){return A.createElement("span",r({className:"dumi-default-badge"},S))},j=O},16795:function(I,R,m){"use strict";var A=m(34100),r=m(24422),O=m(45598),j=m(67294);function h(g){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},h(g)}function S(g){var v=g.children,W=toArray(v).filter(function(T){var C;return h(T)==="object"&&typeof T.type=="function"&&((C=T.type)===null||C===void 0?void 0:C.name)===SourceCode.name}),B=W.map(function(T,C){var k,c,p=(k=T.props)!==null&&k!==void 0?k:{},u=p.lang,b=p.title;return{key:String((c=T.key)!==null&&c!==void 0?c:C),label:b||u||"txt",children:T}});return React.createElement(Tabs,{className:"dumi-default-code-group",items:B})}var w=null},67915:function(I,R,m){"use strict";m.d(R,{Z:function(){return k}});var A=m(93096),r=m.n(A),O=m(67294),j=["children"];function h(c,p){return W(c)||v(c,p)||w(c,p)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(c,p){if(c){if(typeof c=="string")return g(c,p);var u=Object.prototype.toString.call(c).slice(8,-1);if(u==="Object"&&c.constructor&&(u=c.constructor.name),u==="Map"||u==="Set")return Array.from(c);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return g(c,p)}}function g(c,p){(p==null||p>c.length)&&(p=c.length);for(var u=0,b=new Array(p);u<p;u++)b[u]=c[u];return b}function v(c,p){var u=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(u!=null){var b,E,_,L,x=[],N=!0,M=!1;try{if(_=(u=u.call(c)).next,p===0){if(Object(u)!==u)return;N=!1}else for(;!(N=(b=_.call(u)).done)&&(x.push(b.value),x.length!==p);N=!0);}catch(H){M=!0,E=H}finally{try{if(!N&&u.return!=null&&(L=u.return(),Object(L)!==L))return}finally{if(M)throw E}}return x}}function W(c){if(Array.isArray(c))return c}function B(c,p){if(c==null)return{};var u=T(c,p),b,E;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(c);for(E=0;E<_.length;E++)b=_[E],!(p.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(c,b)&&(u[b]=c[b])}return u}function T(c,p){if(c==null)return{};var u={},b=Object.keys(c),E,_;for(_=0;_<b.length;_++)E=b[_],!(p.indexOf(E)>=0)&&(u[E]=c[E]);return u}var C=function(p){var u=p.children,b=B(p,j),E=(0,O.useRef)(null),_=(0,O.useState)(!1),L=h(_,2),x=L[0],N=L[1],M=(0,O.useState)(!1),H=h(M,2),l=H[0],t=H[1];return(0,O.useEffect)(function(){var o=E.current;if(o){var e=r()(function(){N(o.scrollLeft>0),t(o.scrollLeft<o.scrollWidth-o.offsetWidth)},100);return e(),o.addEventListener("scroll",e),window.addEventListener("resize",e),function(){o.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}},[]),O.createElement("div",{className:"dumi-default-table"},O.createElement("div",{className:"dumi-default-table-content",ref:E,"data-left-folded":x||void 0,"data-right-folded":l||void 0},O.createElement("table",b,u)))},k=C},66313:function(I,R,m){"use strict";var A=m(70593),r=m(67294);function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(e)}function j(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,i)}return a}function h(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?j(Object(a),!0).forEach(function(i){S(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function S(e,n,a){return n=w(n),n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function w(e){var n=g(e,"string");return O(n)==="symbol"?n:String(n)}function g(e,n){if(O(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,n||"default");if(O(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function v(e,n){return T(e)||B(e,n)||c(e,n)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,n){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i,s,f,d,y=[],P=!0,D=!1;try{if(f=(a=a.call(e)).next,n===0){if(Object(a)!==a)return;P=!1}else for(;!(P=(i=f.call(a)).done)&&(y.push(i.value),y.length!==n);P=!0);}catch(F){D=!0,s=F}finally{try{if(!P&&a.return!=null&&(d=a.return(),Object(d)!==d))return}finally{if(D)throw s}}return y}}function T(e){if(Array.isArray(e))return e}function C(e){return u(e)||p(e)||c(e)||k()}function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(e,n){if(e){if(typeof e=="string")return b(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,n)}}function p(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function u(e){if(Array.isArray(e))return b(e)}function b(e,n){(n==null||n>e.length)&&(n=e.length);for(var a=0,i=new Array(n);a<n;a++)i[a]=e[a];return i}function E(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(e).forEach(function(i,s){var f="".concat(n?"".concat(n,"-"):"").concat(s);switch(i==null?void 0:i.type){case"ul":{var d,y=((d=a[a.length-1])===null||d===void 0?void 0:d.children)||a,P=E(i.props.children||[],f);y.push.apply(y,C(P));break}case"li":{var D=E(i.props.children,f);a.push({title:[].concat(i.props.children).filter(function(F){return F.type!=="ul"}),key:f,children:D,isLeaf:!D.length});break}default:}}),a}var _=function(n){var a=useState(E(n)),i=v(a,2),s=i[0],f=i[1];return useEffect(function(){f(E(n))},[n]),s},L=function(n){var a=n.isLeaf,i=n.expanded;return a?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):i?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},x=function(n){var a=n.isLeaf,i=n.expanded;return a?React.createElement("span",{className:"tree-switcher-leaf-line"}):i?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},N=function(){return{height:0,opacity:0}},M=function(n){var a=n.scrollHeight;return{height:a,opacity:1}},H=function(n){return{height:n?n.offsetHeight:0}},l=function(n,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},t={motionName:"ant-motion-collapse",onAppearStart:N,onEnterStart:N,onAppearActive:M,onEnterActive:M,onLeaveStart:H,onLeaveActive:N,onAppearEnd:l,onEnterEnd:l,onLeaveEnd:l,motionDeadline:500},o=function(e){var n=_(e.children),a=createRef(),i=function(f,d){var y=d.isLeaf;y||f.shiftKey||f.metaKey||f.ctrlKey||a.current.onNodeExpand(f,d)};return React.createElement(Tree,{className:"dumi-default-tree",icon:L,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:h(h({},t),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:e.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:x})}},45598:function(I,R,m){"use strict";var A,r=m(64836).default;A={value:!0},A=h;var O=r(m(67294)),j=m(11805);function h(S){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=[];return O.default.Children.forEach(S,function(v){v==null&&!w.keepEmpty||(Array.isArray(v)?g=g.concat(h(v)):(0,j.isFragment)(v)&&v.props?g=g.concat(h(v.props.children,w)):g.push(v))}),g}},64836:function(I){function R(m){return m&&m.__esModule?m:{default:m}}I.exports=R,I.exports.__esModule=!0,I.exports.default=I.exports}}]);
