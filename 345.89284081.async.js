(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[345],{51660:function(ze,w,n){"use strict";n.r(w),n.d(w,{LoginPro:function(){return Le},ModalPro:function(){return re},TablePro:function(){return Fe}});var le=n(15009),S=n.n(le),ie=n(99289),W=n.n(ie),ue=n(97857),i=n.n(ue),de=n(19632),B=n.n(de),ce=n(79855),fe=n(24193),he=n(61078),ve=n(61719),ge=n(86738),H=n(45360),me=n(96074),k=n(50397),q=n(42075),_=n(14726),N=n(67294),pe=n(11238),ee=function(r,m,p){var j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,T="";return j&&(T="api"),pe.ZP.post(T+r,{data:m}).then(function(u){u.code==0?p(u):H.ZP.error(u.msg)}).catch(function(u){console.log(u)})},e=n(85893),xe=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u6807\u9898",dataIndex:"title",copyable:!0,ellipsis:!0,tooltip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}],je=function(r){var m=r.ajax,p=m===void 0?ee:m,j=r.url,T=j===void 0?"https://proapi.azurewebsites.net/github/issues":j,u=r.addUrl,$=r.editUrl,F=r.deleteUrl,O=r.deleteFieldUrl,z=O===void 0?"idList":O,E=r.fieldPropsAdd,L=E===void 0?{}:E,I=r.actionWidth,y=I===void 0?100:I,P=r.fieldProps,f=P===void 0?{search:{},columns:xe}:P,Z=r.setData,b=Z===void 0?function(a){return a.data.records}:Z,x=r.setTotal,R=x===void 0?function(a){return a.data.total}:x,l=r.setMsg,g=l===void 0?function(a){return a.msg}:l,h=r.actionBar,U=h===void 0?[]:h,C=(0,N.useRef)(),v=f.rowKey||"id",M=[].concat(B()(F?[function(a){var t=a.record;return(0,e.jsx)(oe,{record:t,children:(0,e.jsx)("a",{children:"\u7F16\u8F91"})})}]:[]),B()(U),B()(F?[function(a){var t=a.record;return(0,e.jsx)(ge.Z,{title:"\u5220\u9664",description:"\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",onConfirm:function(){se([t[v]])},okText:"\u662F",cancelText:"\u5426",children:(0,e.jsx)("a",{style:{color:"red"},children:"\u5220\u9664"})})}]:[])),oe=function(t){var o=t.children,s=t.record;return(0,e.jsx)(he.Z,i()({initialValues:s,columns:f.columns.map(function(d){return i()(i()({},d),{},{width:"md"})}),trigger:o,onFinish:function(){var d=W()(S()().mark(function c(V){var A,D,X;return S()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return A=!1,D=u,X=V,s!=null&&s[v]&&$&&(X[v]=s==null?void 0:s[v],D=$),K.next=6,p(D,X,function(Ue){var Y;(Y=C.current)===null||Y===void 0||Y.reload(),H.ZP.success(g(Ue)),A=!0});case 6:return K.abrupt("return",A);case 7:case"end":return K.stop()}},c)}));return function(c){return d.apply(this,arguments)}}(),layoutType:"ModalForm",rowProps:{gutter:[16,16]},colProps:{span:12},grid:!0},L))},Ie=function(t,o){return(0,e.jsx)("div",{className:"durians_table_pro_action",children:M.map(function(s,d){return(0,e.jsxs)(N.Fragment,{children:[(0,e.jsx)(s,{record:o}),M.length>1&&d<M.length-1?(0,e.jsx)(me.Z,{type:"vertical"}):null]},d)})})},se=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},s={};s[z]=t,p(F,s,function(d){var c;H.ZP.success(g(d)),(c=C.current)===null||c===void 0||c.reload(),C.current.clearSelected(),o()})};return(0,e.jsx)(ve.Z,i()(i()({defaultSize:"small",scroll:{x:"100%"},rowSelection:{selections:[k.Z.SELECTION_ALL,k.Z.SELECTION_INVERT]},tableAlertRender:function(t){var o=t.selectedRowKeys,s=t.selectedRows,d=t.onCleanSelected;return console.log(o,s),(0,e.jsx)(q.Z,{size:24,children:(0,e.jsxs)("span",{children:["\u5DF2\u9009 ",o.length," \u9879",(0,e.jsx)("a",{style:{marginInlineStart:8},onClick:d,children:"\u53D6\u6D88\u9009\u62E9"})]})})},tableAlertOptionRender:function(t){var o=t.selectedRowKeys,s=t.selectedRows,d=t.onCleanSelected;return(0,e.jsx)(q.Z,{size:16,children:F?(0,e.jsx)(re,{title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",Content:function(){return"\u786E\u5B9A\u5220\u9664\uFF1F"},handleOk:function(V){se(o,function(){V()})},children:(0,e.jsx)(_.ZP,{size:"small",icon:(0,e.jsx)(ce.Z,{}),danger:!0,children:"\u6279\u91CF\u5220\u9664"},"danger")}):null})},actionRef:C,request:function(){var a=W()(S()().mark(function t(o,s,d){var c;return S()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log(777,s,o,d),c=null,A.next=4,p(T,i()({pageIndex:o.current,pageSize:o.pageSize},o),function(D){console.log(D),c=D});case 4:return A.abrupt("return",Promise.resolve({data:b(c),success:!0,total:R(c)}));case 5:case"end":return A.stop()}},t)}));return function(t,o,s){return a.apply(this,arguments)}}(),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",defaultValue:{option:{fixed:"right",disable:!0}},onChange:function(t){console.log("value: ",t)}},rowKey:"id",options:{setting:{listsHeight:400}},form:{syncToUrl:function(t,o){return o==="get"?i()({},t):t}},pagination:{pageSize:10,onChange:function(t){return console.log(t)}},dateFormatter:"string"},f),{},{columns:[].concat(B()(f.columns),B()(M.length?[{title:"\u64CD\u4F5C",dataIndex:"actionTablePro",fixed:"right",actionWidth:y,render:Ie}]:[])),search:f.search?i()({labelWidth:"auto",span:4,defaultCollapsed:!1},f.search||{}):{labelWidth:"auto"},toolBarRender:function(){return[].concat(B()(u?[(0,e.jsx)(oe,{children:(0,e.jsx)(_.ZP,{icon:(0,e.jsx)(fe.Z,{}),type:"primary",children:"\u65B0\u5EFA"},"button")})]:[]),B()(f.toolBarRender||[]))}}))},Fe=je,ye=n(5574),ne=n.n(ye),Pe=n(85576),Ce=function(r){var m=r.title,p=m===void 0?"\u57FA\u7840":m,j=r.handleOk,T=j===void 0?function(x){x()}:j,u=r.Content,$=u===void 0?function(){return(0,e.jsx)("div",{children:"\u793A\u4F8B"})}:u,F=r.children,O=F===void 0?(0,e.jsx)("div",{children:"\u70B9\u51FB"}):F,z=r.fieldProps,E=z===void 0?{}:z,L=(0,N.useState)(!1),I=ne()(L,2),y=I[0],P=I[1],f=function(){P(!0)},Z=function(){T(function(){P(!1)})},b=function(){P(!1)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{onClick:f,children:O}),(0,e.jsx)(Pe.Z,i()(i()({title:p,open:y,onOk:Z,onCancel:b},E),{},{children:(0,e.jsx)($,{isModalOpen:y,setIsModalOpen:P})}))]})},re=Ce,Ae=n(85244),te=n(18274),Se=n(62827),Te=n(68262),G=n(5966),Ze=n(16434),Re=n(63434),Be=n(9361),J=n(56140),$e=n(81354),ae=n.n($e),Oe=n(62291),Ee=function(r){var m=r.ajax,p=m===void 0?ee:m,j=r.url,T=r.captchaUrl,u=r.loginFormFieldProps,$=r.hasSmsLogin,F=$===void 0?!1:$,O=r.hasAccountLogin,z=O===void 0?!0:O,E=r.phoneField,L=E===void 0?"mobile":E,I=Be.Z.useToken(),y=I.token,P=(0,N.useState)("account"),f=ne()(P,2),Z=f[0],b=f[1],x=(0,N.useRef)();return(0,e.jsx)("div",{style:{backgroundColor:y.colorBgContainer},className:"crm_login_body",children:(0,e.jsxs)(Te.U,i()(i()({formRef:x,title:"\u767B\u5F55",subTitle:"\u6B22\u8FCE\u767B\u5F55\u7CFB\u7EDF",initialValues:{username:"admin",password:"111111"},onFinish:function(){var R=W()(S()().mark(function l(g){var h,U;return S()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,x.current.validateFields();case 2:return h=v.sent,h&&(U=i()({},g),U.password=ae().SHA256(g.password).toString(ae().enc.Base64),p(j,U,function(M){(0,Oe.ok)("token",M.data)},!1)),v.abrupt("return",!0);case 5:case"end":return v.stop()}},l)}));return function(l){return R.apply(this,arguments)}}()},u),{},{children:[(0,e.jsxs)(J.Z,{centered:!0,activeKey:Z,onChange:function(l){return b(l)},children:[(0,e.jsx)(J.Z.TabPane,{tab:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",disabled:!z},"account"),(0,e.jsx)(J.Z.TabPane,{tab:"\u624B\u673A\u53F7\u767B\u5F55",disabled:!F},"phone")]}),Z==="account"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.Z,{name:"username",fieldProps:{size:"large",prefix:(0,e.jsx)(Ae.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,e.jsx)(G.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,e.jsx)(te.Z,{className:"prefixIcon"}),strengthText:"\u5BC6\u7801\u5E94\u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u548C\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u81F3\u5C11\u4E3A8\u4E2A\u5B57\u7B26",statusRender:function(l){var g=function(){return l&&l.length>12?"ok":l&&l.length>6?"pass":"poor"},h=g();return h==="pass"?(0,e.jsx)("div",{style:{color:y.colorWarning},children:"\u5F3A\u5EA6\uFF1A\u4E2D"}):h==="ok"?(0,e.jsx)("div",{style:{color:y.colorSuccess},children:"\u5F3A\u5EA6\uFF1A\u5F3A"}):(0,e.jsx)("div",{style:{color:y.colorError},children:"\u5F3A\u5EA6\uFF1A\u5F31"})}},placeholder:"\u5BC6\u7801: 111111",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]})]}),Z==="phone"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(Se.Z,{className:"prefixIcon"})},name:L,placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"},{pattern:/^1\d{10}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"}]}),(0,e.jsx)(Ze.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(te.Z,{className:"prefixIcon"})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:function(l,g){return l?"".concat(g," ","\u83B7\u53D6\u9A8C\u8BC1\u7801"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},phoneName:L,name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"}],onGetCaptcha:function(){var R=W()(S()().mark(function l(g){var h;return S()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:h={},h[L]=g,p(T,i()({},h),function(v){H.ZP.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\uFF0C\u8BF7\u67E5\u770B\u624B\u673A\u77ED\u4FE1")});case 3:case"end":return C.stop()}},l)}));return function(l){return R.apply(this,arguments)}}()})]}),(0,e.jsxs)("div",{style:{marginBlockEnd:24},children:[(0,e.jsx)(Re.Z,{noStyle:!0,name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"}),(0,e.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801"})]})]}))})},Le=Ee},42480:function(){},24654:function(){}}]);
