(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[387],{36274:function(mr,he,t){"use strict";t.r(he),t.d(he,{FormPro:function(){return fe},LoginPro:function(){return sr},ModalPro:function(){return $e},TablePro:function(){return Ye},TreePro:function(){return Ce}});var Ie=t(52677),De=t.n(Ie),Ze=t(15009),K=t.n(Ze),Be=t(99289),_=t.n(Be),Le=t(97857),n=t.n(Le),Ee=t(19632),k=t.n(Ee),be=t(48689),pe=t(24969),Ne=t(61534),Oe=t(86738),Me=t(96074),ae=t(45360),ge=t(60940),xe=t(42075),se=t(14726),M=t(67294),Ue=t(64599),Fe=t.n(Ue),ze=t(11238),Ke=t(81354),W=t.n(Ke),ee=function(e,l,a){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,c="";return s&&(c="api"),ze.ZP.post(c+e,{data:l}).then(function(o){o.code==0?a(o):ae.ZP.error(o.msg)}).catch(function(o){console.log(o)})},je=function(e,l){var a=Fe()(e),s;try{var c=function(){var f=s.value,d=f.proConfig;f.request||(f.valueType==="select"||f.valueType==="treeSelect")&&(f.request=function(){var F=_()(K()().mark(function C(j,I){var x;return K()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log(22122,j,d.params),x=[],v.next=4,l(d.url,n()(n()({},j),typeof d.params=="function"?d.params(j,I):d.params||{}),function(D){x=d.setData(D)});case 4:return v.abrupt("return",x);case 5:case"end":return v.stop()}},C)}));return function(C,j){return F.apply(this,arguments)}}())};for(a.s();!(s=a.n()).done;)c()}catch(o){a.e(o)}finally{a.f()}return e},He=function(e,l,a){var s=W().enc.Utf8.parse(l),c=W().enc.Utf8.parse(a);return W().AES.encrypt(e,s,{mode:W().mode.ECB,padding:W().pad.Pkcs7}).toString()},hr=function(e,l,a){var s=CryptoJS.enc.Utf8.parse(l),c=CryptoJS.enc.Utf8.parse(a);return CryptoJS.AES.decrypt(e,s,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7})},ye=t(89451),We=t(5574),oe=t.n(We),Je=t(59847),Ve=t(54673),r=t(85893);function ie(L,e,l){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"value",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"children",c=(0,Ve.Z)(L),o=Fe()(c),f;try{for(o.s();!(f=o.n()).done;){var d=f.value;d[a]===e?d.children=l:d.children&&(d.children=ie(d.children,e,l,a,s))}}catch(F){o.e(F)}finally{o.f()}return c}var we=function(e){var l=e.ajax,a=l===void 0?ee:l,s=e.fieldProps,c=s.fieldNames,o=s.params,f=o===void 0?function(v){return{}}:o,d=s.url,F=s.setData,C=(0,M.useState)([]),j=oe()(C,2),I=j[0],x=j[1];(0,M.useEffect)(function(){N({},n()({},f({})))},[]);var N=function(D){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return a(d,n()(n()({},f(D)),T),function(E){var h=F(E);c&&(h=h.map(function(Z){return Z.label=Z[c.label],Z.value=Z[c.value],Z})),x(function(Z){return D.value?ie(Z,D.value,h):h})})};return(0,r.jsx)(Je.Z,n()(n()({},e==null?void 0:e.fieldProps),{},{treeDataSimpleMode:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"\u8BF7\u9009\u62E9",loadData:N,treeData:I}))},Ge=we,ke=function(e){var l=e.children,a=(0,M.useContext)(ye.L_);return(0,r.jsx)(ye.L_.Provider,{value:n()(n()({},a),{},{valueTypeMap:{treeSelectPro:{renderFormItem:function(c,o){return(0,r.jsx)(Ge,n()({},o))}}}}),children:l})},Pe=ke,Qe=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u6807\u9898",dataIndex:"title",copyable:!0,ellipsis:!0,tooltip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}],Xe=function(e){var l=e.ajax,a=l===void 0?ee:l,s=e.url,c=s===void 0?"https://proapi.azurewebsites.net/github/issues":s,o=e.addUrl,f=e.editUrl,d=e.deleteUrl,F=e.deleteFields,C=F===void 0?"idList":F,j=e.deleteField,I=j===void 0?null:j,x=e.deleteFieldIsArr,N=x===void 0?!1:x,v=e.deleteParams,D=v===void 0?{}:v,T=e.addFormProFieldProps,E=T===void 0?{}:T,h=e.actionWidth,Z=h===void 0?100:h,U=e.fieldProps,B=U===void 0?{search:{},columns:Qe,rowKey:"id"}:U,O=e.setData,H=O===void 0?function(P){return P.data.records}:O,G=e.setTotal,q=G===void 0?function(P){return P.data.total}:G,J=e.setMsg,te=J===void 0?function(P){return P.msg}:J,Q=e.actionBar,X=Q===void 0?[]:Q,A=e.paginationAlias,u=A===void 0?{pageIndex:"pageIndex",pageSize:"pageSize"}:A,p=e.tableAlertOptionRenderPro,y=p===void 0?[]:p,V=e.treeFieldProps,$=V===void 0?null:V,b=(0,M.useRef)(),ve=(0,M.useRef)(),Te=B.rowKey||"id",le=[].concat(k()(f?[function(P){var i=P.record;return(0,r.jsx)(Ae,{title:"\u7F16\u8F91",id:Te,record:i,children:(0,r.jsx)("a",{children:"\u7F16\u8F91"})})}]:[]),k()(X),k()(d?[function(P){var i=P.record;return(0,r.jsx)(Oe.Z,{title:"\u5220\u9664",description:"\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",onConfirm:function(){Re([i[Te]],function(){},!1)},okText:"\u662F",cancelText:"\u5426",children:(0,r.jsx)("a",{style:{color:"red"},children:"\u5220\u9664"})})}]:[])),Ae=function(i){var g=i.children,m=i.record,S=i.id,R=i.title,z=R===void 0?"\u65B0\u589E":R;console.log(5555,m,S);var Y=o,w={};return S&&m!==null&&m!==void 0&&m[S]&&(w[S]=m==null?void 0:m[S],f&&(Y=f)),(0,r.jsx)(fe,n()(n()({ajax:a},E),{},{url:Y,finishFun:function(){var me;(me=b.current)===null||me===void 0||me.reload()},params:n()(n()({},w),E.params),fieldProps:n()({initialValues:m,columns:B.columns.map(function(ne){return n()(n()({},ne),{},{width:null})}),title:z},E.fieldProps),children:g}))},vr=function(i,g){return(0,r.jsx)("div",{className:"durians_table_pro_action",children:le.map(function(m,S){return(0,r.jsxs)(M.Fragment,{children:[(0,r.jsx)(m,{record:g}),le.length>1&&S<le.length-1?(0,r.jsx)(Me.Z,{type:"vertical"}):null]},S)})})},Re=function(i){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,S=i;!N&&!m&&(S=i[0]);var R=n()({},D);m?R[C]=S:I?R[I]=S:R[B.rowKey||"id"]=S,a(d,R,function(z){var Y;ae.ZP.success(te(z)),(Y=b.current)===null||Y===void 0||Y.reload(),b.current.clearSelected(),g()})};return(0,r.jsx)(Pe,{children:(0,r.jsxs)("div",{className:"durians_table_body",children:[$?(0,r.jsx)("div",{className:"durians_table_body_l",style:{width:300},children:(0,r.jsx)(Ce,n()({ajax:a},$))}):null,(0,r.jsx)("div",{className:"durians_table_body_r",children:(0,r.jsx)(Ne.Z,n()(n()({formRef:ve,defaultSize:"small",scroll:{x:"100%"},rowSelection:{selections:[ge.Z.SELECTION_ALL,ge.Z.SELECTION_INVERT]},tableAlertRender:function(i){var g=i.selectedRowKeys,m=i.selectedRows,S=i.onCleanSelected;return console.log(g,m),(0,r.jsx)(xe.Z,{size:24,children:(0,r.jsxs)("span",{children:["\u5DF2\u9009 ",g.length," \u9879",(0,r.jsx)("a",{style:{marginInlineStart:8},onClick:S,children:"\u53D6\u6D88\u9009\u62E9"})]})})},tableAlertOptionRender:function(i){var g=i.selectedRowKeys,m=i.selectedRows,S=i.onCleanSelected;return(0,r.jsxs)(xe.Z,{size:16,children:[d?(0,r.jsx)($e,{title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",Content:function(){return"\u786E\u5B9A\u5220\u9664\uFF1F"},handleOk:function(z){Re(g,function(){z()})},children:(0,r.jsx)(se.ZP,{size:"small",icon:(0,r.jsx)(be.Z,{}),danger:!0,children:"\u6279\u91CF\u5220\u9664"},"danger")}):null,y.map(function(R,z){return(0,r.jsx)(R,{selectedRowKeys:g,selectedRows:m,onCleanSelected:S,formRef:ve,actionRef:b},z)})]})},actionRef:b,request:function(){var P=_()(K()().mark(function i(g,m,S){var R,z;return K()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(R=B.dataSource,z={},z[u.pageIndex]=g.current,z[u.pageSize]=g.pageSize,!c){w.next=7;break}return w.next=7,a(c,n()(n()({},z),g),function(ne){console.log(ne),R=ne});case 7:return w.abrupt("return",Promise.resolve({data:H(R),success:!0,total:q(R)}));case 8:case"end":return w.stop()}},i)}));return function(i,g,m){return P.apply(this,arguments)}}(),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",defaultValue:{option:{fixed:"right",disable:!0}},onChange:function(i){console.log("value: ",i)}},rowKey:"id",options:{setting:{listsHeight:400}},form:{syncToUrl:!1},pagination:{pageSize:10,onChange:function(i){return console.log(i)}},dateFormatter:"string"},B),{},{columns:[].concat(k()(je(B.columns,a)),k()(le.length?[{title:"\u64CD\u4F5C",dataIndex:"actionTablePro",fixed:"right",hideInSearch:!0,actionWidth:Z,render:vr}]:[])),search:B.search?n()({labelWidth:"auto",span:4,defaultCollapsed:!1},B.search||{}):{labelWidth:"auto"},toolBarRender:function(i){var g;return console.log(6666,B.toolBarRender),[].concat(k()(o?[(0,r.jsx)(Ae,{children:(0,r.jsx)(se.ZP,{icon:(0,r.jsx)(pe.Z,{}),type:"primary",children:"\u65B0\u5EFA"},"button")})]:[]),k()(((g=B.toolBarRender)===null||g===void 0?void 0:g.map(function(m){return console.log(7656,De()(m)),typeof m=="function"?(0,r.jsx)(m,{action:i,formRef:ve}):m}))||[]))}}))})]})})},Ye=Xe,qe=t(85576),_e=function(e){var l=e.title,a=l===void 0?"\u57FA\u7840":l,s=e.handleOk,c=s===void 0?function(h){h()}:s,o=e.Content,f=o===void 0?function(){return(0,r.jsx)("div",{children:"\u793A\u4F8B"})}:o,d=e.children,F=d===void 0?(0,r.jsx)("div",{children:"\u70B9\u51FB"}):d,C=e.fieldProps,j=C===void 0?{}:C,I=(0,M.useState)(!1),x=oe()(I,2),N=x[0],v=x[1],D=function(){v(!0)},T=function(){c(function(){v(!1)})},E=function(){v(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{onClick:D,children:F}),(0,r.jsx)(qe.Z,n()(n()({title:a,open:N,onOk:T,onCancel:E},j),{},{children:(0,r.jsx)(f,{isModalOpen:N,setIsModalOpen:v})}))]})},$e=_e,er=t(87547),Se=t(94149),rr=t(24454),tr=t(68262),de=t(5966),nr=t(16434),ar=t(63434),or=t(9361),ue=t(56140),re=t(99191),pr=(0,re.df)([{id:"SHA256",fun:function(e){return W().SHA256(e).toString(W().enc.Base64)}},{id:"MD5",fun:function(e){return W().MD5(e).toString(W().enc.Hex)}}]),ce="autoLogin",lr=function(e){var l=e.ajax,a=l===void 0?ee:l,s=e.url,c=e.captchaUrl,o=e.loginFormFieldProps,f=e.hasSmsLogin,d=f===void 0?!1:f,F=e.hasAccountLogin,C=F===void 0?!0:F,j=e.phoneField,I=j===void 0?"mobile":j,x=e.extraPasswordText,N=x===void 0?"":x,v=e.secretKey,D=v===void 0?"":v,T=e.setData,E=T===void 0?function(A){return A.data}:T,h=e.tokenField,Z=h===void 0?"token":h,U=e.callback,B=U===void 0?function(){}:U,O=or.Z.useToken(),H=O.token,G=(0,M.useState)("account"),q=oe()(G,2),J=q[0],te=q[1],Q=(0,M.useRef)();(0,M.useEffect)(function(){var A=(0,re.pv)(ce);A&&X((0,re.pv)(ce))},[]);var X=function(u){var p=n()({},u);p.password=He(p.password+N,D,D),a(s,p,function(y){(0,re.KN)(Z,E(y.data)),u.autoLogin&&(0,re.ok)(ce,u),B(y)},!1)};return(0,r.jsx)("div",{style:{backgroundColor:H.colorBgContainer},className:"crm_login_body",children:(0,r.jsxs)(tr.U,n()(n()({formRef:Q,title:"\u767B\u5F55",subTitle:"\u6B22\u8FCE\u767B\u5F55\u7CFB\u7EDF",initialValues:{username:"",password:""},onFinish:function(){var A=_()(K()().mark(function u(p){var y;return K()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Q.current.validateFields();case 2:return y=$.sent,y&&X(p),$.abrupt("return",!0);case 5:case"end":return $.stop()}},u)}));return function(u){return A.apply(this,arguments)}}()},o),{},{children:[(0,r.jsxs)(ue.Z,{centered:!0,activeKey:J,onChange:function(u){return te(u)},children:[(0,r.jsx)(ue.Z.TabPane,{tab:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",disabled:!C},"account"),(0,r.jsx)(ue.Z.TabPane,{tab:"\u624B\u673A\u53F7\u767B\u5F55",disabled:!d},"phone")]}),J==="account"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(de.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(er.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,r.jsx)(de.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(Se.Z,{className:"prefixIcon"}),strengthText:"\u5BC6\u7801\u5E94\u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u548C\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u81F3\u5C11\u4E3A8\u4E2A\u5B57\u7B26",statusRender:function(u){var p=function(){return u&&u.length>12?"ok":u&&u.length>6?"pass":"poor"},y=p();return y==="pass"?(0,r.jsx)("div",{style:{color:H.colorWarning},children:"\u5F3A\u5EA6\uFF1A\u4E2D"}):y==="ok"?(0,r.jsx)("div",{style:{color:H.colorSuccess},children:"\u5F3A\u5EA6\uFF1A\u5F3A"}):(0,r.jsx)("div",{style:{color:H.colorError},children:"\u5F3A\u5EA6\uFF1A\u5F31"})}},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]})]}),J==="phone"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(de.Z,{fieldProps:{size:"large",prefix:(0,r.jsx)(rr.Z,{className:"prefixIcon"})},name:I,placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"},{pattern:/^1\d{10}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"}]}),(0,r.jsx)(nr.Z,{fieldProps:{size:"large",prefix:(0,r.jsx)(Se.Z,{className:"prefixIcon"})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:function(u,p){return u?"".concat(p," ","\u83B7\u53D6\u9A8C\u8BC1\u7801"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},phoneName:I,name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"}],onGetCaptcha:function(){var A=_()(K()().mark(function u(p){var y;return K()().wrap(function($){for(;;)switch($.prev=$.next){case 0:y={},y[I]=p,a(c,n()({},y),function(b){ae.ZP.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\uFF0C\u8BF7\u67E5\u770B\u624B\u673A\u77ED\u4FE1")});case 3:case"end":return $.stop()}},u)}));return function(u){return A.apply(this,arguments)}}()})]}),(0,r.jsxs)("div",{style:{marginBlockEnd:24},children:[(0,r.jsx)(ar.Z,{noStyle:!0,name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"}),(0,r.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801"})]})]}))})},sr=lr,ir=t(77646),dr=function(e){var l=e.params,a=l===void 0?{}:l,s=e.layoutType,c=s===void 0?"ModalForm":s,o=e.fieldProps,f=o===void 0?{}:o,d=e.url,F=e.ajax,C=F===void 0?ee:F,j=e.finishFun,I=j===void 0?function(){}:j,x=e.setMsg,N=x===void 0?function(T){return T.msg}:x,v=e.children,D=v===void 0?(0,r.jsx)(se.ZP,{children:"\u70B9\u51FB\u6211"}):v;return(0,r.jsx)(Pe,{children:(0,r.jsx)(ir.Z,n()(n()(n()({trigger:D,layoutType:"ModalForm",onFinish:_()(K()().mark(function T(){var E,h,Z,U=arguments;return K()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return E=U.length>0&&U[0]!==void 0?U[0]:{},h=!1,Z=n()(n()({},a),E),console.log(E),O.next=6,C(d,Z,function(H){ae.ZP.success(N(H)),I(),h=!0});case 6:return O.abrupt("return",h);case 7:case"end":return O.stop()}},T)}))},c==="ModalForm"?{modalProps:{destroyOnClose:!0}}:{drawerProps:{destroyOnClose:!0}}),f),{},{columns:je(f.columns,C)}))})},fe=dr,ur=t(17960),cr=t(89705),gr=[{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}],fr=function(e){var l=e.title,a=l===void 0?"\u9009\u62E9":l,s=e.ajax,c=s===void 0?ee:s,o=e.url,f=o===void 0?"https://proapi.azurewebsites.net/github/issues":o,d=e.params,F=d===void 0?function(u){return{}}:d,C=e.addUrl,j=e.editUrl,I=e.deleteUrl,x=e.deleteFields,N=x===void 0?"idList":x,v=e.deleteField,D=v===void 0?null:v,T=e.deleteFieldIsArr,E=T===void 0?!1:T,h=e.deleteParams,Z=h===void 0?{}:h,U=e.addFormProFieldProps,B=U===void 0?{}:U,O=e.setData,H=O===void 0?function(u){return u.data}:O,G=e.fieldNames,q=(0,M.useState)([]),J=oe()(q,2),te=J[0],Q=J[1];(0,M.useEffect)(function(){X({},n()({},F({})))},[]);var X=function(p){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return c(f,n()(n()({},F(p)),y),function(V){var $=H(V);G&&($=$.map(function(b){return b.label=b[G.label],b.value=b[G.value],b})),Q(function(b){return p.value?ie(b,p.value,$):$})})},A=function(p){var y=p.children;return(0,r.jsx)(fe,n()(n()({url:C},B),{},{fieldProps:{columns:[{title:"\u6807\u9898",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}]},children:y}))};return(0,r.jsxs)("div",{className:"durians_tree_body",children:[(0,r.jsxs)("div",{className:"durians_tree_body_title",children:[(0,r.jsx)("div",{className:"durians_tree_body_title_l",children:a}),(0,r.jsx)("div",{className:"durians_tree_body_title_r",children:(0,r.jsx)(A,{children:(0,r.jsx)(pe.Z,{})})})]}),(0,r.jsx)("div",{className:"durians_tree_body_tree",children:(0,r.jsx)(ur.Z,{loadData:X,treeData:te,titleRender:function(p){return(0,r.jsxs)("div",{className:"durians_tree_body_title_node",children:[(0,r.jsx)("div",{className:"durians_tree_body_title_node_l",children:p.title}),(0,r.jsx)("div",{className:"durians_tree_body_title_node_r",onClick:function(V){V.stopPropagation(),console.log(2222)},children:(0,r.jsx)(cr.Z,{})})]})}})})]})},Ce=fr},42480:function(){},24654:function(){}}]);
