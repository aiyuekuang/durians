(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[326],{55300:function(kr,Be,n){"use strict";n.r(Be),n.d(Be,{FormPro:function(){return Re},LoginPro:function(){return Br},ModalPro:function(){return Te},TablePro:function(){return ze},TreePro:function(){return We}});var Xe=n(52677),Ye=n.n(Xe),qe=n(15009),J=n.n(qe),_e=n(99289),ve=n.n(_e),er=n(97857),t=n.n(er),rr=n(19632),ee=n.n(rr),tr=n(5574),re=n.n(tr),nr=n(48689),Le=n(24969),ar=n(61534),or=n(86738),lr=n(96074),te=n(45360),Oe=n(60940),De=n(42075),me=n(14726),E=n(67294),ir=n(64599),Ue=n.n(ir),sr=n(11238),dr=n(81354),X=n.n(dr),he=function(e,l,i){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,u="";return s&&(u="api"),sr.ZP.post(u+e,{data:l}).then(function(a){a.code==0?i(a):te.ZP.error(a.msg)}).catch(function(a){console.log(a)})},Ne=function(e,l){var i=Ue()(e),s;try{var u=function(){var f=s.value,d=f.proConfig;d!=null&&d.isKeyword&&(f.hideInSearch=!0),f.request||(f.valueType==="select"||f.valueType==="treeSelect")&&(f.request=function(){var v=ve()(J()().mark(function P(g,m){var j;return J()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return j=[],h.next=3,l(d.url,t()(t()({},g),typeof d.params=="function"?d.params(g,m):d.params||{}),function($){j=d.setData($)});case 3:return h.abrupt("return",j);case 4:case"end":return h.stop()}},P)}));return function(P,g){return v.apply(this,arguments)}}())};for(i.s();!(s=i.n()).done;)u()}catch(a){i.e(a)}finally{i.f()}return e},ur=function(e,l,i){var s=X().enc.Utf8.parse(l),u=X().enc.Utf8.parse(i);return X().AES.encrypt(e,s,{mode:X().mode.ECB,padding:X().pad.Pkcs7}).toString()},zr=function(e,l,i){var s=CryptoJS.enc.Utf8.parse(l),u=CryptoJS.enc.Utf8.parse(i);return CryptoJS.AES.decrypt(e,s,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7})},cr=function(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return l.find(function(i){return e(i)})},Me=n(89451),fr=n(59847),Ke=n(68652),r=n(85893);function Ce(b,e,l){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"value",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"children",u=(0,Ke.Z)(b),a=Ue()(u),f;try{for(a.s();!(f=a.n()).done;){var d=f.value;d[i]===e?d.children=l:d.children&&(d.children=Ce(d.children,e,l,i,s))}}catch(v){a.e(v)}finally{a.f()}return u}var vr=function(e){var l=e.ajax,i=l===void 0?he:l,s=e.fieldProps,u=s.fieldNames,a=s.params,f=a===void 0?function(h){return{}}:a,d=s.url,v=s.setData,P=(0,E.useState)([]),g=re()(P,2),m=g[0],j=g[1];(0,E.useEffect)(function(){B({},t()({},f({})))},[]);var B=function($){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return i(d,t()(t()({},f($)),C),function(T){var S=v(T);u&&(S=S.map(function(L){return L.label=L[u.label],L.value=L[u.value],L})),j(function(L){return $.value?Ce(L,$.value,S):S})})};return(0,r.jsx)(fr.Z,t()(t()({},e==null?void 0:e.fieldProps),{},{treeDataSimpleMode:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"\u8BF7\u9009\u62E9",loadData:B,treeData:m}))},mr=vr,hr=n(2058),pr=n(88484),gr=function(e){var l=e.title,i=l===void 0?"\u4E0A\u4F20":l,s=e.fieldProps,u=s===void 0?{}:s,a=e.url,f=a===void 0?"/upload":a,d=e.headers,v=d===void 0?{}:d,P={name:"file",action:f,headers:t()({},v),onChange:function(m){m.file.status!=="uploading"&&console.log(m.file,m.fileList),m.file.status==="done"?te.ZP.success("".concat(m.file.name," \u4E0A\u4F20\u6210\u529F")):m.file.status==="error"&&te.ZP.error("".concat(m.file.name," \u4E0A\u4F20\u5931\u8D25"))}};return(0,r.jsx)(hr.Z,t()(t()(t()({},u),P),{},{children:(0,r.jsx)(me.ZP,{icon:(0,r.jsx)(pr.Z,{}),children:i})}))},xr=gr,Fr=n(85576),Pr=function(e){var l=e.title,i=l===void 0?"\u57FA\u7840":l,s=e.handleOk,u=s===void 0?function(S){S()}:s,a=e.Content,f=a===void 0?function(){return(0,r.jsx)("div",{children:"\u793A\u4F8B"})}:a,d=e.children,v=d===void 0?(0,r.jsx)("div",{children:"\u70B9\u51FB"}):d,P=e.fieldProps,g=P===void 0?{}:P,m=(0,E.useState)(!1),j=re()(m,2),B=j[0],h=j[1],$=function(){h(!0)},C=function(){u(function(){h(!1)})},T=function(){h(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{onClick:$,style:{width:"max-content"},children:v}),(0,r.jsx)(Fr.Z,t()(t()({title:i,open:B,onOk:C,onCancel:T},g),{},{children:(0,r.jsx)(f,{isModalOpen:B,setIsModalOpen:h})}))]})},Te=Pr,yr=function(e){var l=e.title,i=l===void 0?"\u9009\u62E9":l,s=e.tableFieldProps,u=s===void 0?{}:s,a=e.modalFieldProps,f=a===void 0?{}:a,d=e.value,v=d===void 0?[]:d,P=e.onChange,g=(0,E.useState)(v),m=re()(g,2),j=m[0],B=m[1];(0,E.useEffect)(function(){console.log(6666888,v)},[v]);var h=function(T){console.log("selectedRowKeys changed: ",T),B(T)},$={selectedRowKeys:j,onChange:h};return(0,r.jsx)(Te,t()(t()({Content:function(){return(0,r.jsx)(ze,t()(t()({},u),{},{fieldProps:t()(t()({},u.fieldProps),{},{rowSelection:$})}))}},f),{},{handleOk:function(){P(P(j))},children:(0,r.jsx)(me.ZP,{type:"link",children:v&&v.length?"\u5DF2\u9009\u62E9".concat(v.length,"\u4E2A"):i})}))},jr=yr,Sr=function(e){var l=e.children,i=(0,E.useContext)(Me.L_);return(0,r.jsx)(Me.L_.Provider,{value:t()(t()({},i),{},{valueTypeMap:{treeSelectPro:{renderFormItem:function(u,a){return(0,r.jsx)(mr,t()({},a))}},uploadPro:{renderFormItem:function(u,a){return(0,r.jsx)(xr,t()({},a))}},tableSelect:{renderFormItem:function(u,a){return console.log(667555,a),(0,r.jsx)(jr,t()(t()({},a),a.fieldProps))}}}}),children:l})},ke=Sr,$r=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u6807\u9898",dataIndex:"title",copyable:!0,ellipsis:!0,tooltip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}],Cr=function(e){var l=e.ajax,i=l===void 0?he:l,s=e.url,u=s===void 0?"https://proapi.azurewebsites.net/github/issues":s,a=e.addUrl,f=e.editUrl,d=e.deleteUrl,v=e.deleteFields,P=v===void 0?"idList":v,g=e.deleteField,m=g===void 0?null:g,j=e.deleteFieldIsArr,B=j===void 0?!1:j,h=e.deleteParams,$=h===void 0?{}:h,C=e.addFormProFieldProps,T=C===void 0?{}:C,S=e.actionWidth,L=S===void 0?100:S,z=e.fieldProps,I=z===void 0?{search:{},columns:$r,rowKey:"id"}:z,K=e.setData,G=K===void 0?function(c){var o;return c==null||(o=c.data)===null||o===void 0?void 0:o.records}:K,ne=e.setTotal,ie=ne===void 0?function(c){var o;return c==null||(o=c.data)===null||o===void 0?void 0:o.total}:ne,Q=e.setMsg,se=Q===void 0?function(c){return c==null?void 0:c.msg}:Q,q=e.actionBar,ae=q===void 0?[]:q,U=e.paginationAlias,y=U===void 0?{pageIndex:"pageIndex",pageSize:"pageSize"}:U,N=e.tableAlertOptionRenderPro,O=N===void 0?[]:N,_=e.treeFieldProps,D=_===void 0?null:_,ge=e.paramsFun,oe=ge===void 0?function(c){return c}:ge,xe=e.treeParamsFun,Ee=xe===void 0?function(c){return{treeId:c}}:xe,de=e.treeWidth,je=de===void 0?200:de,ue=(0,E.useState)({}),ce=re()(ue,2),Se=ce[0],H=ce[1],p=(0,E.useState)({}),V=re()(p,2),M=V[0],k=V[1],A=(0,E.useRef)(),w=(0,E.useRef)(),$e=I.rowKey||"id",le=[].concat(ee()(f?[function(c){var o=c.record;return(0,r.jsx)(Fe,{title:"\u7F16\u8F91",id:$e,record:o,children:(0,r.jsx)("a",{children:"\u7F16\u8F91"})})}]:[]),ee()(ae),ee()(d?[function(c){var o=c.record;return(0,r.jsx)(or.Z,{title:"\u5220\u9664",description:"\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",onConfirm:function(){Je([o[$e]],function(){},!1)},okText:"\u662F",cancelText:"\u5426",children:(0,r.jsx)("a",{style:{color:"red"},children:"\u5220\u9664"})})}]:[]));(0,E.useEffect)(function(){console.log(67666,w.current.getFieldsValue()),w!=null&&w.current&&k(w.current.getFieldsValue())},[]);var Fe=function(o){var x=o.children,F=o.record,Z=o.id,R=o.title,W=R===void 0?"\u65B0\u589E":R,fe=typeof I.columns=="function"?I.columns("add"):I.columns,Y=a,ye={};return Z&&F!==null&&F!==void 0&&F[Z]&&(ye[Z]=F==null?void 0:F[Z],f&&(Y=f)),(0,r.jsx)(Re,t()(t()({ajax:i},T),{},{url:Y,finishFun:function(){var be;(be=A.current)===null||be===void 0||be.reload()},params:t()(t()({},ye),T.params),fieldProps:t()({initialValues:t()(t()({},F),Se),columns:fe.map(function(Qe){return t()(t()({},Qe),{},{width:null})}),title:W},T.fieldProps),children:x}))},we=function(o,x){return(0,r.jsx)("div",{className:"durians_table_pro_action",children:le.map(function(F,Z){return(0,r.jsxs)(E.Fragment,{children:[(0,r.jsx)(F,{record:x}),le.length>1&&Z<le.length-1?(0,r.jsx)(lr.Z,{type:"vertical"}):null]},Z)})})},Je=function(o){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,Z=o;!B&&!F&&(Z=o[0]);var R=t()({},$);F?R[P]=Z:m?R[m]=Z:R[I.rowKey||"id"]=Z,i(d,R,function(W){var fe;te.ZP.success(se(W)),(fe=A.current)===null||fe===void 0||fe.reload(),A.current.clearSelected(),x()})},Ge=typeof I.columns=="function"?I.columns("table"):I.columns||[],Pe=cr(function(c){var o;return c==null||(o=c.proConfig)===null||o===void 0?void 0:o.isKeyword},Ge);return(0,r.jsx)(ke,{children:(0,r.jsxs)("div",{className:"durians_table_body",children:[D?(0,r.jsx)("div",{className:"durians_table_body_l",style:{width:je},children:(0,r.jsx)(We,t()(t()({ajax:i},D),{},{fieldProps:t()({onSelect:function(o){var x;H(function(F){var Z=(0,Ke.Z)(F);return t()(t()({},Z),Ee(o))}),(x=A.current)===null||x===void 0||x.reload()}},D.fieldProps)}))}):null,(0,r.jsx)("div",{className:"durians_table_body_r",style:t()({},D?{maxWidth:"calc(100% - ".concat(je+8,"px)")}:{}),children:(0,r.jsx)(ar.Z,t()(t()({onSubmit:function(o){k(o)},formRef:w,defaultSize:"small",scroll:{x:"100%"},rowSelection:d||O.length?{selections:[Oe.Z.SELECTION_ALL,Oe.Z.SELECTION_INVERT],preserveSelectedRowKeys:!0}:!1,tableAlertRender:function(o){var x=o.selectedRowKeys,F=o.selectedRows,Z=o.onCleanSelected;return console.log(x,F),(0,r.jsx)(De.Z,{size:24,children:(0,r.jsxs)("span",{children:["\u5DF2\u9009 ",x.length," \u9879",(0,r.jsx)("a",{style:{marginInlineStart:8},onClick:Z,children:"\u53D6\u6D88\u9009\u62E9"})]})})},tableAlertOptionRender:function(o){var x=o.selectedRowKeys,F=o.selectedRows,Z=o.onCleanSelected;return(0,r.jsxs)(De.Z,{size:16,children:[d?(0,r.jsx)(Te,{title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",Content:function(){return"\u786E\u5B9A\u5220\u9664\uFF1F"},handleOk:function(W){Je(x,function(){W()})},children:(0,r.jsx)(me.ZP,{size:"small",icon:(0,r.jsx)(nr.Z,{}),danger:!0,children:"\u6279\u91CF\u5220\u9664"},"danger")}):null,O.map(function(R,W){return(0,r.jsx)(R,{selectedRowKeys:x,selectedRows:F,onCleanSelected:Z,formRef:w,actionRef:A,searchValues:M},W)})]})},actionRef:A,request:function(){var c=ve()(J()().mark(function o(x,F,Z){var R,W;return J()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(R=I.dataSource,W=t()({},Se),W[y.pageIndex]=x.current,W[y.pageSize]=x.pageSize,!u){Y.next=7;break}return Y.next=7,i(u,oe(t()(t()({},W),x)),function(ye){console.log(ye),R=ye});case 7:return Y.abrupt("return",Promise.resolve({data:R?G(R):[],success:!0,total:R?ie(R):0}));case 8:case"end":return Y.stop()}},o)}));return function(o,x,F){return c.apply(this,arguments)}}(),rowKey:"id",form:{syncToUrl:!1},pagination:{pageSize:10,onChange:function(o){return console.log(o)}},dateFormatter:"string"},I),{},{options:t()(t()({},Pe?{search:{name:Pe.formItemProps?Pe.formItemProps.name:Pe.dataIndex,placeholder:"\u8BF7\u8F93\u5165".concat(Pe.title),allowClear:!0}}:{}),{},{setting:{listsHeight:400}},I.options),columns:[].concat(ee()(Ne(Ge,i)),ee()(le.length?[{title:"\u64CD\u4F5C",dataIndex:"actionTablePro",fixed:"right",hideInSearch:!0,actionWidth:L,render:we}]:[])),search:I.search?t()({labelWidth:"auto",span:4,defaultCollapsed:!1},I.search||{}):{labelWidth:"auto"},toolBarRender:function(o){var x;return[].concat(ee()(a?[(0,r.jsx)(Fe,{children:(0,r.jsx)(me.ZP,{icon:(0,r.jsx)(Le.Z,{}),type:"primary",children:"\u65B0\u5EFA"},"button")})]:[]),ee()(((x=I.toolBarRender)===null||x===void 0?void 0:x.map(function(F){return console.log(7656,Ye()(F)),typeof F=="function"?(0,r.jsx)(F,{action:o,formRef:w,searchValues:M}):F}))||[]))}}))})]})})},ze=Cr,Tr=n(87547),He=n(94149),Ir=n(24454),Ar=n(68262),Ie=n(5966),Zr=n(16434),Rr=n(63434),Er=n(9361),Ae=n(56140),pe=n(99191),Hr=(0,pe.df)([{id:"SHA256",fun:function(e){return X().SHA256(e).toString(X().enc.Base64)}},{id:"MD5",fun:function(e){return X().MD5(e).toString(X().enc.Hex)}}]),Ze="autoLogin",br=function(e){var l=e.ajax,i=l===void 0?he:l,s=e.url,u=e.captchaUrl,a=e.loginFormFieldProps,f=e.hasSmsLogin,d=f===void 0?!1:f,v=e.hasAccountLogin,P=v===void 0?!0:v,g=e.phoneField,m=g===void 0?"mobile":g,j=e.extraPasswordText,B=j===void 0?"":j,h=e.secretKey,$=h===void 0?"":h,C=e.setData,T=C===void 0?function(U){return U.data}:C,S=e.tokenField,L=S===void 0?"token":S,z=e.callback,I=z===void 0?function(){}:z,K=Er.Z.useToken(),G=K.token,ne=(0,E.useState)("account"),ie=re()(ne,2),Q=ie[0],se=ie[1],q=(0,E.useRef)();(0,E.useEffect)(function(){var U=(0,pe.pv)(Ze);U&&ae((0,pe.pv)(Ze))},[]);var ae=function(y){var N=t()({},y);N.password=ur(N.password+B,$,$),i(s,N,function(O){(0,pe.KN)(L,T(O)),y.autoLogin&&(0,pe.ok)(Ze,y),I(O)},!1)};return(0,r.jsx)("div",{style:{backgroundColor:G.colorBgContainer},className:"crm_login_body",children:(0,r.jsxs)(Ar.U,t()(t()({formRef:q,title:"\u767B\u5F55",subTitle:"\u6B22\u8FCE\u767B\u5F55\u7CFB\u7EDF",initialValues:{username:"",password:""},onFinish:function(){var U=ve()(J()().mark(function y(N){var O;return J()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,q.current.validateFields();case 2:return O=D.sent,O&&ae(N),D.abrupt("return",!0);case 5:case"end":return D.stop()}},y)}));return function(y){return U.apply(this,arguments)}}()},a),{},{children:[(0,r.jsxs)(Ae.Z,{centered:!0,activeKey:Q,onChange:function(y){return se(y)},children:[(0,r.jsx)(Ae.Z.TabPane,{tab:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",disabled:!P},"account"),(0,r.jsx)(Ae.Z.TabPane,{tab:"\u624B\u673A\u53F7\u767B\u5F55",disabled:!d},"phone")]}),Q==="account"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ie.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(Tr.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,r.jsx)(Ie.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(He.Z,{className:"prefixIcon"}),strengthText:"\u5BC6\u7801\u5E94\u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u548C\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u81F3\u5C11\u4E3A8\u4E2A\u5B57\u7B26",statusRender:function(y){var N=function(){return y&&y.length>12?"ok":y&&y.length>6?"pass":"poor"},O=N();return O==="pass"?(0,r.jsx)("div",{style:{color:G.colorWarning},children:"\u5F3A\u5EA6\uFF1A\u4E2D"}):O==="ok"?(0,r.jsx)("div",{style:{color:G.colorSuccess},children:"\u5F3A\u5EA6\uFF1A\u5F3A"}):(0,r.jsx)("div",{style:{color:G.colorError},children:"\u5F3A\u5EA6\uFF1A\u5F31"})}},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]})]}),Q==="phone"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ie.Z,{fieldProps:{size:"large",prefix:(0,r.jsx)(Ir.Z,{className:"prefixIcon"})},name:m,placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"},{pattern:/^1\d{10}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"}]}),(0,r.jsx)(Zr.Z,{fieldProps:{size:"large",prefix:(0,r.jsx)(He.Z,{className:"prefixIcon"})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:function(y,N){return y?"".concat(N," ","\u83B7\u53D6\u9A8C\u8BC1\u7801"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},phoneName:m,name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"}],onGetCaptcha:function(){var U=ve()(J()().mark(function y(N){var O;return J()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:O={},O[m]=N,i(u,t()({},O),function(ge){te.ZP.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\uFF0C\u8BF7\u67E5\u770B\u624B\u673A\u77ED\u4FE1")});case 3:case"end":return D.stop()}},y)}));return function(y){return U.apply(this,arguments)}}()})]}),(0,r.jsxs)("div",{style:{marginBlockEnd:24},children:[(0,r.jsx)(Rr.Z,{noStyle:!0,name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"}),(0,r.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801"})]})]}))})},Br=br,Lr=n(77646),Or=function(e){var l=e.params,i=l===void 0?{}:l,s=e.layoutType,u=s===void 0?"ModalForm":s,a=e.fieldProps,f=a===void 0?{}:a,d=e.url,v=e.ajax,P=v===void 0?he:v,g=e.finishFun,m=g===void 0?function(){}:g,j=e.setMsg,B=j===void 0?function(C){return C.msg}:j,h=e.children,$=h===void 0?(0,r.jsx)(me.ZP,{children:"\u70B9\u51FB\u6211"}):h;return(0,r.jsx)(ke,{children:(0,r.jsx)(Lr.Z,t()(t()(t()({trigger:$,layoutType:u,onFinish:ve()(J()().mark(function C(){var T,S,L,z=arguments;return J()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return T=z.length>0&&z[0]!==void 0?z[0]:{},S=!1,L=t()(t()({},i),T),console.log(T),K.next=6,P(d,L,function(G){te.ZP.success(B(G)),m(),S=!0});case 6:return K.abrupt("return",S);case 7:case"end":return K.stop()}},C)}))},u==="ModalForm"?{modalProps:{destroyOnClose:!0,getContainer:document.getElementById("root")}}:{drawerProps:{destroyOnClose:!0}}),f),{},{columns:Ne(f.columns,P)}))})},Re=Or,Dr=n(17960),Ur=n(85418),Nr=n(16664),Ve=n(86548),Mr=n(89705),Vr=[{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}],Kr=function(e){var l=e.title,i=l===void 0?"\u9009\u62E9":l,s=e.ajax,u=s===void 0?he:s,a=e.url,f=a===void 0?"https://proapi.azurewebsites.net/github/issues":a,d=e.params,v=d===void 0?function(H){return{}}:d,P=e.addUrl,g=e.editUrl,m=e.deleteUrl,j=e.deleteFields,B=j===void 0?"idList":j,h=e.deleteField,$=h===void 0?"id":h,C=e.deleteFieldIsArr,T=C===void 0?!1:C,S=e.deleteParams,L=S===void 0?{}:S,z=e.addFormProFieldProps,I=z===void 0?{}:z,K=e.setData,G=K===void 0?function(H){return H.data}:K,ne=e.setMsg,ie=ne===void 0?function(H){return H.msg}:ne,Q=e.editField,se=e.fieldProps,q=se===void 0?{fieldNames:{title:"title",key:"key",children:"children"},onSelect:function(){}}:se,ae=e.isSelect,U=ae===void 0?!1:ae,y=e.detail,N=y===void 0?!0:y,O=(0,E.useState)([]),_=re()(O,2),D=_[0],ge=_[1],oe=q.fieldNames,xe=q.onSelect,Ee=xe===void 0?function(){}:xe,de={ajax:u,addUrl:P,editUrl:g,deleteUrl:m,deleteFields:B,deleteField:$,editField:Q,deleteFieldIsArr:T,deleteParams:L,addFormProFieldProps:I};(0,E.useEffect)(function(){ue({},t()({},v({})))},[]);var je=function(p){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,M=p;!T&&!V&&(M=p[0]);var k=t()({},L);V?k[B]=M:k[$]=M,u(m,k,function(A){te.ZP.success(ie(A)),ue({},t()({},v({})))})},ue=function(p){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return u(f,t()(t()({},v(p)),V),function(M){var k=G(M);oe&&(k=k.map(function(A){return A.title=A[oe.title],A.key=A[oe.key],U&&(A.isLeaf=!0),A})),ge(function(A){return p.key?Ce(A,p.key,k,oe.key):k})})},ce=function(p){var V=p.children,M=p.addFormProFieldProps,k=p.ajax,A=p.addUrl,w=p.record,$e=p.fieldProps,le=A,Fe={};return Q&&w.id&&(Fe[Q]=w.id,g&&(le=g)),(0,r.jsx)(Re,t()(t()({finishFun:function(){ue({},t()({},v({})))},ajax:k,url:le},M),{},{fieldProps:t()(t()({},$e),M.fieldProps),params:t()(t()({},Fe),(M==null?void 0:M.params)||{}),children:V}))},Se=function(p){return[{key:"1",label:(0,r.jsx)(ce,t()(t()({},de),{},{addUrl:P,record:{id:p.key},fieldProps:{initialValues:p,readonly:!0},children:(0,r.jsx)("a",{children:"\u8BE6\u60C5"})})),icon:(0,r.jsx)(Nr.Z,{}),disabled:!N},{key:"2",label:(0,r.jsx)(ce,t()(t()({},de),{},{addUrl:P,record:{id:p.key},fieldProps:{initialValues:p},children:(0,r.jsx)("a",{children:"\u7F16\u8F91"})})),icon:(0,r.jsx)(Ve.Z,{}),disabled:!g},{key:"3",label:(0,r.jsx)("a",{onClick:function(){je([p.key])},children:"\u5220\u9664"}),icon:(0,r.jsx)(Ve.Z,{}),disabled:!m}]};return(0,r.jsxs)("div",{className:"durians_tree_body",children:[(0,r.jsxs)("div",{className:"durians_tree_body_title",children:[(0,r.jsx)("div",{className:"durians_tree_body_title_l",children:i}),(0,r.jsx)("div",{className:"durians_tree_body_title_r",children:(0,r.jsx)(ce,t()(t()({},de),{},{addUrl:P,children:(0,r.jsx)(Le.Z,{})}))})]}),(0,r.jsx)("div",{className:"durians_tree_body_tree",children:(0,r.jsx)(Dr.Z,{onSelect:Ee,fieldNames:oe,loadData:ue,treeData:D,titleRender:function(p){return console.log(789666,p),(0,r.jsxs)("div",{className:"durians_tree_body_title_node",children:[(0,r.jsx)("div",{className:"durians_tree_body_title_node_l",children:p.title}),(0,r.jsx)("div",{className:"durians_tree_body_title_node_r",children:(0,r.jsx)(Ur.Z,{menu:{items:Se(p)},getPopupContainer:function(){return document.body},children:(0,r.jsx)("a",{onClick:function(M){return M.preventDefault()},children:(0,r.jsx)(Mr.Z,{})})})})]},p.key)}})})]})},We=Kr},42480:function(){},24654:function(){}}]);
