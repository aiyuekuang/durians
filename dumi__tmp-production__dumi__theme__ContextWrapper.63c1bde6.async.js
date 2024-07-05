"use strict";(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[923],{26520:function(M,r,t){t.r(r),t.d(r,{default:function(){return C}});var v=t(5574),h=t.n(v),b=t(97857),F=t.n(b),a=t(67294),n=t(53683),P=t(56790),N=t(64236),i={TablePro:{type:"COMPONENT",id:"TablePro",title:"TablePro",propsConfig:{type:"object",required:[],className:"__type",properties:{ajax:{type:"function",className:"Function",description:"\u901A\u7528ajax\u5B9E\u73B0\u65B9\u6CD5",tags:{description:"\u901A\u7528ajax\u5B9E\u73B0\u65B9\u6CD5",default:`(url: string, params: object, callback: Function, isApi = true) => {
let api_ = "";
if (isApi) {
api_ = "api";
}

return request.post(api_ + url, {data: params}).then((data) => {
if (data.code == 0) {
callback(data)
} else {
message.error(data.msg)
}
}).catch(function (error) {
console.log(error);
})
}
}`},default:`(url: string, params: object, callback: Function, isApi = true) => {
let api_ = "";
if (isApi) {
api_ = "api";
}

return request.post(api_ + url, {data: params}).then((data) => {
if (data.code == 0) {
callback(data)
} else {
message.error(data.msg)
}
}).catch(function (error) {
console.log(error);
})
}
}`},url:{type:"string",description:"\u83B7\u53D6\u6570\u636E\u7684URL,\u4F8B\u5B50\uFF0C/api/new_find",tags:{description:"\u83B7\u53D6\u6570\u636E\u7684URL,\u4F8B\u5B50\uFF0C/api/new_find",default:"-"},default:"-"},addUrl:{type:"string",description:"\u65B0\u589E\u7684\u8868\u5355URL",tags:{description:"\u65B0\u589E\u7684\u8868\u5355URL",default:"-"},default:"-"},editUrl:{type:"string",description:"\u7F16\u8F91\u7684\u8868\u5355URL",tags:{description:"\u7F16\u8F91\u7684\u8868\u5355URL",default:"-"},default:"-"},deleteUrl:{type:"string",description:"\u5220\u9664\u6570\u636E\u7684URL",tags:{description:"\u5220\u9664\u6570\u636E\u7684URL",default:"-"},default:"-"},deleteField:{type:"string",description:"\u6279\u91CF\u5220\u9664\u6570\u636E\u7684\u5B57\u6BB5\u540D",tags:{description:"\u6279\u91CF\u5220\u9664\u6570\u636E\u7684\u5B57\u6BB5\u540D",default:"idList"},default:"idList"},fieldProps:{type:"any",description:"pro-table\u7684props\u53C2\u6570\uFF0C\u5305\u62ECcolumns\uFF0CdataSource\u7B49",tags:{description:"pro-table\u7684props\u53C2\u6570\uFF0C\u5305\u62ECcolumns\uFF0CdataSource\u7B49",default:"{}"},default:{}},addFormProFieldProps:{type:"any",description:"BetaSchemaForm\u7684props\u53C2\u6570",tags:{description:"BetaSchemaForm\u7684props\u53C2\u6570",default:"{}"},default:{}},setData:{type:"function",className:"Function",description:"\u83B7\u53D6\u67E5\u8BE2\u6570\u636E\u6EDE\u540E\u7684\u4E2D\u95F4\u4EF6\uFF0C\u5904\u7406\u4E00\u4E0B\u6570\u636E\uFF0C\u518D\u8FD4\u56DE\u51FA\u53BB\u5C31\u662F\u8868\u683C\u6700\u7EC8\u62FF\u5230\u7684dataSource",tags:{description:"\u83B7\u53D6\u67E5\u8BE2\u6570\u636E\u6EDE\u540E\u7684\u4E2D\u95F4\u4EF6\uFF0C\u5904\u7406\u4E00\u4E0B\u6570\u636E\uFF0C\u518D\u8FD4\u56DE\u51FA\u53BB\u5C31\u662F\u8868\u683C\u6700\u7EC8\u62FF\u5230\u7684dataSource",default:"(data)=>{return data.data}"},default:{}},setTotal:{type:"function",className:"Function",description:"\u83B7\u53D6\u67E5\u8BE2\u6570\u636E\u6EDE\u540E\u7684\u4E2D\u95F4\u4EF6\uFF0C\u5904\u7406\u4E00\u4E0B\u6570\u636E\uFF0C\u518D\u8FD4\u56DE\u51FA\u53BB\u5C31\u662F\u8868\u683C\u6570\u636E\u603B\u6570\u636E\u91CF\uFF0C\u5206\u9875\u65F6\u7528\u7684",tags:{description:"\u83B7\u53D6\u67E5\u8BE2\u6570\u636E\u6EDE\u540E\u7684\u4E2D\u95F4\u4EF6\uFF0C\u5904\u7406\u4E00\u4E0B\u6570\u636E\uFF0C\u518D\u8FD4\u56DE\u51FA\u53BB\u5C31\u662F\u8868\u683C\u6570\u636E\u603B\u6570\u636E\u91CF\uFF0C\u5206\u9875\u65F6\u7528\u7684",default:"(data)=>{return data.total}"},default:{}},setMsg:{type:"function",className:"Function",description:"\u65B0\u589E\u8868\u5355\u63D0\u4EA4\u6210\u529F\u4E4B\u540E\uFF0C\u9700\u8981\u8FD4\u56DE\u7ED9\u9875\u9762\u7684\u4E00\u4E2Amessage\u5F39\u7A97\u4E2D\u7684\u63D0\u793A\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32",tags:{description:"\u65B0\u589E\u8868\u5355\u63D0\u4EA4\u6210\u529F\u4E4B\u540E\uFF0C\u9700\u8981\u8FD4\u56DE\u7ED9\u9875\u9762\u7684\u4E00\u4E2Amessage\u5F39\u7A97\u4E2D\u7684\u63D0\u793A\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32",default:"(data)=>{return data.message}"},default:{}},actionBar:{type:"array",className:"Array",description:"\u8868\u683C\u540E\u9762\u7684\u64CD\u4F5C\u7EC4\uFF0C\u7C7B\u578B\u662F\u4E2A\u6570\u7EC4\uFF0C\u5143\u7D20\u662F\u7EC4\u4EF6\uFF0C\u4F1A\u4F20\u9012record",tags:{description:"\u8868\u683C\u540E\u9762\u7684\u64CD\u4F5C\u7EC4\uFF0C\u7C7B\u578B\u662F\u4E2A\u6570\u7EC4\uFF0C\u5143\u7D20\u662F\u7EC4\u4EF6\uFF0C\u4F1A\u4F20\u9012record",default:"[({record})=>{return <div>\u8DF3\u8F6C</div>}]"},default:"[({record})=>{return <div>\u8DF3\u8F6C</div>}]",items:{type:"any"}},actionWidth:{type:"number",description:"\u8868\u683C\u64CD\u4F5C\u5217\u7684\u5BBD\u5EA6",tags:{description:"\u8868\u683C\u64CD\u4F5C\u5217\u7684\u5BBD\u5EA6",default:"100"},default:100},paginationAlias:{type:"any",description:"ajax\u63A5\u53E3\u5206\u9875\u53C2\u6570\u7684\u5B57\u6BB5\u522B\u540D",tags:{description:"ajax\u63A5\u53E3\u5206\u9875\u53C2\u6570\u7684\u5B57\u6BB5\u522B\u540D",default:'{pageIndex:"pageIndex",pageSize:"pageSize"}'},default:{pageIndex:"pageIndex",pageSize:"pageSize"}},tableAlertOptionRenderPro:{type:"array",className:"Array",items:{type:"any"}}}}},ModalPro:{type:"COMPONENT",id:"ModalPro",title:"ModalPro",propsConfig:{type:"object",required:[],className:"__type",properties:{title:{type:"string",description:"\u6807\u9898",default:"\u57FA\u7840",tags:{default:"\u57FA\u7840"}},handleOk:{type:"function",className:"Function",description:"\u70B9\u51FBOK\u7684\u65F6\u5019\uFF0C\u4F1A\u6709\u4E00\u4E2Acallback\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u4F60\u7684\u51FD\u6570\u4E2D\u6267\u884Ccallback\u53EF\u4EE5\u4F20\u9012ture\u6216\u8005false\u6253\u5F00\u6216\u8005\u5173\u95ED\u5F39\u7A97",default:`(callback: any) => {
callback()
}`,tags:{default:`(callback: any) => {
callback()
}`}},Content:{type:"any",description:"\u5F39\u7A97\u91CC\u7684\u5185\u5BB9",default:"() => <div>\u793A\u4F8B</div>",tags:{default:"() => <div>\u793A\u4F8B</div>"}},children:{type:"reactNode",className:"ReactNode",description:"\u89E6\u53D1\u70B9\u51FB\u4E8B\u4EF6\u5F39\u7A97\u5305\u88F9\u7684\u5185\u5BB9",default:"<div>\u70B9\u51FB</div>",tags:{default:"<div>\u70B9\u51FB</div>"}},fieldProps:{type:"object",description:"antd\u4E2Dmodal\u7684fieldProps-\u81EA\u6709\u5C5E\u6027",default:{},tags:{default:"{}"}}}}},LoginPro:{type:"COMPONENT",id:"LoginPro",title:"LoginPro",propsConfig:{type:"object",required:[],className:"__type",properties:{ajax:{type:"function",className:"Function",description:"\u901A\u7528ajax\u5B9E\u73B0\u65B9\u6CD5",tags:{description:"\u901A\u7528ajax\u5B9E\u73B0\u65B9\u6CD5",default:`(url: string, params: object, callback: Function, isApi = true) => {
let api_ = "";
if (isApi) {
api_ = "api";
}

return request.post(api_ + url, {data: params}).then((data) => {
if (data.code == 0) {
callback(data)
} else {
message.error(data.msg)
}
}).catch(function (error) {
console.log(error);
})
}`},default:`(url: string, params: object, callback: Function, isApi = true) => {
let api_ = "";
if (isApi) {
api_ = "api";
}

return request.post(api_ + url, {data: params}).then((data) => {
if (data.code == 0) {
callback(data)
} else {
message.error(data.msg)
}
}).catch(function (error) {
console.log(error);
})
}`},url:{type:"string",description:"\u70B9\u51FB\u767B\u5F55\u7684url",tags:{description:"\u70B9\u51FB\u767B\u5F55\u7684url",default:"-"},default:"-"},captchaUrl:{type:"string",description:"\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7684url",tags:{description:"\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7684url",default:"-"},default:"-"},loginFormFieldProps:{type:"object",description:"antd-pro\u767B\u5F55\u8868\u5355\u7684props",tags:{description:"antd-pro\u767B\u5F55\u8868\u5355\u7684props",default:"{}"},default:{}},hasSmsLogin:{type:"boolean",description:"\u662F\u5426\u6709\u77ED\u4FE1\u767B\u5F55\u6A21\u5F0F",tags:{description:"\u662F\u5426\u6709\u77ED\u4FE1\u767B\u5F55\u6A21\u5F0F",default:"false\uFF08\u65E0\uFF09"},default:"false\uFF08\u65E0\uFF09"},hasAccountLogin:{type:"boolean",description:"\u662F\u5426\u6709\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u6A21\u5F0F",tags:{description:"\u662F\u5426\u6709\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u6A21\u5F0F",default:"true"},default:!0},phoneField:{type:"string",description:"\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u63A5\u53E3\uFF0C\u53D1\u9001\u624B\u673A\u53F7\u7684\u5B57\u6BB5",tags:{description:"\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u63A5\u53E3\uFF0C\u53D1\u9001\u624B\u673A\u53F7\u7684\u5B57\u6BB5",default:"true"},default:!0}}}},FormPro:{type:"COMPONENT",id:"FormPro",title:"FormPro",propsConfig:{type:"object",required:[],className:"__type",properties:{layoutType:{type:"any",description:"\u9AD8\u7EA7\u8868\u5355\u7C7B\u578B:ModalForm",tags:{description:"\u9AD8\u7EA7\u8868\u5355\u7C7B\u578B:ModalForm",default:'"ModalForm"'},default:"ModalForm"},fieldProps:{type:"any",description:"\u9AD8\u7EA7\u8868\u5355\u81EA\u5E26\u7684\u53C2\u6570",tags:{description:"\u9AD8\u7EA7\u8868\u5355\u81EA\u5E26\u7684\u53C2\u6570",default:"{}"},default:{}},url:{type:"string"},ajax:{type:"function",className:"Function"},finishFun:{type:"function",className:"Function"},setMsg:{type:"function",className:"Function"},children:{type:"any"}}}}},o=t(90482),j=t(87391),x=t(85893),s=F()({},j),d={name:"durians",description:"A react library developed with dumi",version:"0.0.38",license:"MIT",authors:["ztao"]},l="browser",p=void 0,c={logo:"https://img1.baidu.com/it/u=2018354835,1125004781&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",footer:'Copyright \xA9 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"durians"},u=!0;function C(){var L=(0,n.pC)(),A=(0,a.useState)(!1),f=h()(A,2),g=f[0],m=f[1],y=(0,a.useRef)(n.m8.location.pathname);(0,a.useEffect)(function(){return n.m8.listen(function(e){e.location.pathname!==y.current&&(y.current=e.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var S=a.useMemo(function(){var e={pkg:d,historyType:l,entryExports:s,demos:null,components:i,locales:o.k,loading:g,setLoading:m,hostname:p,themeConfig:c,_2_level_nav_available:u};return Object.defineProperty(e,"demos",{get:function(){return(0,P.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),e},[d,l,s,i,o.k,g,m,p,c,u]);return(0,x.jsx)(N.D.Provider,{value:S,children:L})}}}]);
