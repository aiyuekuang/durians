(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[345],{51660:function(ze,w,n){"use strict";n.r(w),n.d(w,{LoginPro:function(){return Ee},ModalPro:function(){return ne},TablePro:function(){return me}});var oe=n(15009),A=n.n(oe),se=n(99289),K=n.n(se),le=n(97857),u=n.n(le),ie=n(19632),B=n.n(ie),ue=n(48689),de=n(24969),ce=n(22530),he=n(79050),fe=n(86738),W=n(45360),ve=n(96074),k=n(62120),q=n(42075),_=n(14726),N=n(67294),e=n(85893),ge=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u6807\u9898",dataIndex:"title",copyable:!0,ellipsis:!0,tooltip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}],pe=function(t){var f=t.ajax,j=t.url,Z=j===void 0?"https://proapi.azurewebsites.net/github/issues":j,F=t.addUrl,d=t.editUrl,y=t.deleteUrl,$=t.deleteField,I=$===void 0?"idList":$,O=t.addFieldProps,z=O===void 0?{}:O,R=t.actionWidth,M=R===void 0?100:R,m=t.fieldProps,i=m===void 0?{search:{},columns:ge}:m,E=t.setData,L=E===void 0?function(a){return a.data.records}:E,D=t.setTotal,P=D===void 0?function(a){return a.data.total}:D,C=t.setMsg,s=C===void 0?function(a){return a.msg}:C,g=t.actionBar,p=g===void 0?[]:g,x=(0,N.useRef)(),S=i.rowKey||"id",v=[].concat(B()(y?[function(a){var r=a.record;return(0,e.jsx)(H,{record:r,children:(0,e.jsx)("a",{children:"\u7F16\u8F91"})})}]:[]),B()(p),B()(y?[function(a){var r=a.record;return(0,e.jsx)(fe.Z,{title:"\u5220\u9664",description:"\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",onConfirm:function(){ae([r[S]])},okText:"\u662F",cancelText:"\u5426",children:(0,e.jsx)("a",{style:{color:"red"},children:"\u5220\u9664"})})}]:[])),H=function(r){var l=r.children,o=r.record;return(0,e.jsx)(ce.Z,u()({initialValues:o,columns:i.columns.map(function(c){return u()(u()({},c),{},{width:"md"})}),trigger:l,onFinish:function(){var c=K()(A()().mark(function h(V){var T,U,X;return A()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return T=!1,U=F,X=V,o!=null&&o[S]&&d&&(X[S]=o==null?void 0:o[S],U=d),b.next=6,f(U,X,function(Ie){var Y;(Y=x.current)===null||Y===void 0||Y.reload(),W.ZP.success(s(Ie)),T=!0});case 6:return b.abrupt("return",T);case 7:case"end":return b.stop()}},h)}));return function(h){return c.apply(this,arguments)}}(),layoutType:"ModalForm",rowProps:{gutter:[16,16]},colProps:{span:12},grid:!0},z))},Le=function(r,l){return(0,e.jsx)("div",{className:"durians_table_pro_action",children:v.map(function(o,c){return(0,e.jsxs)(N.Fragment,{children:[(0,e.jsx)(o,{record:l}),v.length>1&&c<v.length-1?(0,e.jsx)(ve.Z,{type:"vertical"}):null]},c)})})},ae=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},o={};o[I]=r,f(y,o,function(c){var h;W.ZP.success(s(c)),(h=x.current)===null||h===void 0||h.reload(),x.current.clearSelected(),l()})};return(0,e.jsx)(he.Z,u()(u()({defaultSize:"small",scroll:{x:"100%"},rowSelection:{selections:[k.Z.SELECTION_ALL,k.Z.SELECTION_INVERT]},tableAlertRender:function(r){var l=r.selectedRowKeys,o=r.selectedRows,c=r.onCleanSelected;return console.log(l,o),(0,e.jsx)(q.Z,{size:24,children:(0,e.jsxs)("span",{children:["\u5DF2\u9009 ",l.length," \u9879",(0,e.jsx)("a",{style:{marginInlineStart:8},onClick:c,children:"\u53D6\u6D88\u9009\u62E9"})]})})},tableAlertOptionRender:function(r){var l=r.selectedRowKeys,o=r.selectedRows,c=r.onCleanSelected;return(0,e.jsx)(q.Z,{size:16,children:y?(0,e.jsx)(ne,{title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",Content:function(){return"\u786E\u5B9A\u5220\u9664\uFF1F"},handleOk:function(V){ae(l,function(){V()})},children:(0,e.jsx)(_.ZP,{size:"small",icon:(0,e.jsx)(ue.Z,{}),danger:!0,children:"\u6279\u91CF\u5220\u9664"},"danger")}):null})},actionRef:x,request:function(){var a=K()(A()().mark(function r(l,o,c){var h;return A()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return console.log(777,f,o,l,c),h=null,T.next=4,f(Z,u()({pageIndex:l.current,pageSize:l.pageSize},l),function(U){console.log(U),h=U});case 4:return T.abrupt("return",Promise.resolve({data:L(h),success:!0,total:P(h)}));case 5:case"end":return T.stop()}},r)}));return function(r,l,o){return a.apply(this,arguments)}}(),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",defaultValue:{option:{fixed:"right",disable:!0}},onChange:function(r){console.log("value: ",r)}},rowKey:"id",options:{setting:{listsHeight:400}},form:{syncToUrl:!1},pagination:{pageSize:10,onChange:function(r){return console.log(r)}},dateFormatter:"string"},i),{},{columns:[].concat(B()(i.columns),B()(v.length?[{title:"\u64CD\u4F5C",dataIndex:"actionTablePro",fixed:"right",actionWidth:M,render:Le}]:[])),search:i.search?u()({labelWidth:"auto",span:4,defaultCollapsed:!1},i.search||{}):{labelWidth:"auto"},toolBarRender:function(){return[].concat(B()(F?[(0,e.jsx)(H,{children:(0,e.jsx)(_.ZP,{icon:(0,e.jsx)(de.Z,{}),type:"primary",children:"\u65B0\u5EFA"},"button")})]:[]),B()(i.toolBarRender||[]))}}))},me=pe,xe=n(5574),ee=n.n(xe),je=n(85576),Fe=function(t){var f=t.title,j=f===void 0?"\u57FA\u7840":f,Z=t.handleOk,F=Z===void 0?function(P){P()}:Z,d=t.Content,y=d===void 0?function(){return(0,e.jsx)("div",{children:"\u793A\u4F8B"})}:d,$=t.children,I=$===void 0?(0,e.jsx)("div",{children:"\u70B9\u51FB"}):$,O=t.fieldProps,z=O===void 0?{}:O,R=(0,N.useState)(!1),M=ee()(R,2),m=M[0],i=M[1],E=function(){i(!0)},L=function(){F(function(){i(!1)})},D=function(){i(!1)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{onClick:E,children:I}),(0,e.jsx)(je.Z,u()(u()({title:j,open:m,onOk:L,onCancel:D},z),{},{children:(0,e.jsx)(y,{isModalOpen:m,setIsModalOpen:i})}))]})},ne=Fe,ye=n(87547),te=n(94149),Pe=n(24454),Ce=n(68262),G=n(5966),Se=n(16434),Te=n(63434),Ae=n(9361),J=n(56140),Ze=n(11238),Re=function(t,f,j){var Z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,F="";return Z&&(F="api"),Ze.ZP.post(F+t,{data:f}).then(function(d){d.code==0?j(d):W.ZP.error(d.msg)}).catch(function(d){console.log(d)})},Be=n(81354),re=n.n(Be),$e=n(62291),Oe=function(t){var f=t.ajax,j=f===void 0?Re:f,Z=t.url,F=t.captchaUrl,d=t.loginFormFieldProps,y=t.hasSmsLogin,$=y===void 0?!1:y,I=t.hasAccountLogin,O=I===void 0?!0:I,z=t.phoneField,R=z===void 0?"mobile":z,M=Ae.Z.useToken(),m=M.token,i=(0,N.useState)("account"),E=ee()(i,2),L=E[0],D=E[1],P=(0,N.useRef)();return(0,e.jsx)("div",{style:{backgroundColor:m.colorBgContainer},className:"crm_login_body",children:(0,e.jsxs)(Ce.U,u()(u()({formRef:P,title:"\u767B\u5F55",subTitle:"\u6B22\u8FCE\u767B\u5F55\u7CFB\u7EDF",initialValues:{username:"",password:""},onFinish:function(){var C=K()(A()().mark(function s(g){var p,x;return A()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,P.current.validateFields();case 2:return p=v.sent,p&&(x=u()({},g),x.password=re().SHA256(g.password).toString(re().enc.Base64),j(Z,x,function(H){(0,$e.ok)("token",H.data)},!1)),v.abrupt("return",!0);case 5:case"end":return v.stop()}},s)}));return function(s){return C.apply(this,arguments)}}()},d),{},{children:[(0,e.jsxs)(J.Z,{centered:!0,activeKey:L,onChange:function(s){return D(s)},children:[(0,e.jsx)(J.Z.TabPane,{tab:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",disabled:!O},"account"),(0,e.jsx)(J.Z.TabPane,{tab:"\u624B\u673A\u53F7\u767B\u5F55",disabled:!$},"phone")]}),L==="account"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.Z,{name:"username",fieldProps:{size:"large",prefix:(0,e.jsx)(ye.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,e.jsx)(G.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,e.jsx)(te.Z,{className:"prefixIcon"}),strengthText:"\u5BC6\u7801\u5E94\u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u548C\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u81F3\u5C11\u4E3A8\u4E2A\u5B57\u7B26",statusRender:function(s){var g=function(){return s&&s.length>12?"ok":s&&s.length>6?"pass":"poor"},p=g();return p==="pass"?(0,e.jsx)("div",{style:{color:m.colorWarning},children:"\u5F3A\u5EA6\uFF1A\u4E2D"}):p==="ok"?(0,e.jsx)("div",{style:{color:m.colorSuccess},children:"\u5F3A\u5EA6\uFF1A\u5F3A"}):(0,e.jsx)("div",{style:{color:m.colorError},children:"\u5F3A\u5EA6\uFF1A\u5F31"})}},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]})]}),L==="phone"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(Pe.Z,{className:"prefixIcon"})},name:R,placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"},{pattern:/^1\d{10}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"}]}),(0,e.jsx)(Se.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(te.Z,{className:"prefixIcon"})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:function(s,g){return s?"".concat(g," ","\u83B7\u53D6\u9A8C\u8BC1\u7801"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},phoneName:R,name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"}],onGetCaptcha:function(){var C=K()(A()().mark(function s(g){var p;return A()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:p={},p[R]=g,j(F,u()({},p),function(v){W.ZP.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\uFF0C\u8BF7\u67E5\u770B\u624B\u673A\u77ED\u4FE1")});case 3:case"end":return S.stop()}},s)}));return function(s){return C.apply(this,arguments)}}()})]}),(0,e.jsxs)("div",{style:{marginBlockEnd:24},children:[(0,e.jsx)(Te.Z,{noStyle:!0,name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"}),(0,e.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801"})]})]}))})},Ee=Oe},42480:function(){},24654:function(){}}]);
