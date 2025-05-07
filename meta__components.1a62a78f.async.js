"use strict";(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[838],{32450:function(E,v,e){e.r(v),e.d(v,{demos:function(){return f}});var P=e(97857),i=e.n(P),g=e(15009),p=e.n(g),u=e(99289),x=e.n(u),c=e(67294),I=e(34986),f={"formpro-demo-0":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{fieldProps:{columns:[{title:"\u9009\u62E9\u7528\u6237",dataIndex:"users",valueType:"tableSelect",fieldProps:{title:"\u9009\u62E9\u7528\u6237",tableFieldProps:{url:"/api/users",columns:[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"}]},modalFieldProps:{title:"\u9009\u62E9\u7528\u6237"}}}]}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-0",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '\u9009\u62E9\u7528\u6237',
            dataIndex: 'users',
            valueType: 'tableSelect',
            fieldProps: {
              title: '\u9009\u62E9\u7528\u6237',
              tableFieldProps: {
                url: '/api/users',
                columns: [
                  { title: '\u59D3\u540D', dataIndex: 'name' },
                  { title: '\u5E74\u9F84', dataIndex: 'age' }
                ]
              },
              modalFieldProps: {
                title: '\u9009\u62E9\u7528\u6237'
              }
            }
          }
        ]
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"formpro-demo-1":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{fieldProps:{columns:[{title:"\u90E8\u95E8",dataIndex:"department",valueType:"treeSelect",fieldProps:{url:"/api/departments",params:function(a){return{pid:a.value}},setData:function(a){return a.data},fieldNames:{label:"name",value:"id",children:"children"}}}]}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-1",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '\u90E8\u95E8',
            dataIndex: 'department',
            valueType: 'treeSelect',
            fieldProps: {
              url: '/api/departments',
              params: (data) => ({ pid: data.value }),
              setData: (response) => response.data,
              fieldNames: {
                label: 'name',
                value: 'id',
                children: 'children'
              }
            }
          }
        ]
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"formpro-demo-2":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{fieldProps:{columns:[{title:"\u9644\u4EF6",dataIndex:"files",valueType:"upload",fieldProps:{title:"\u4E0A\u4F20\u6587\u4EF6",url:"/api/upload",setData:function(a){return a.url},fieldPropsUpload:{multiple:!0,maxCount:5}}}]}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-2",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '\u9644\u4EF6',
            dataIndex: 'files',
            valueType: 'upload',
            fieldProps: {
              title: '\u4E0A\u4F20\u6587\u4EF6',
              url: '/api/upload',
              setData: (response) => response.url,
              fieldPropsUpload: {
                multiple: true,
                maxCount: 5
              }
            }
          }
        ]
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"formpro-demo-3":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{url:"/api/submit",fieldProps:{columns:[{title:"\u90E8\u95E8\u9009\u62E9",dataIndex:"department",valueType:"treeSelect",fieldProps:{url:"/api/departments",setData:function(a){return a.data}}},{title:"\u4EBA\u5458\u9009\u62E9",dataIndex:"users",valueType:"tableSelect",fieldProps:{tableFieldProps:{url:"/api/users"}}},{title:"\u9644\u4EF6\u4E0A\u4F20",dataIndex:"files",valueType:"upload",fieldProps:{url:"/api/upload",multiple:!0}}]}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-3",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      fieldProps={{
        columns: [
          {
            title: '\u90E8\u95E8\u9009\u62E9',
            dataIndex: 'department',
            valueType: 'treeSelect',
            fieldProps: {
              url: '/api/departments',
              setData: (res) => res.data
            }
          },
          {
            title: '\u4EBA\u5458\u9009\u62E9',
            dataIndex: 'users',
            valueType: 'tableSelect',
            fieldProps: {
              tableFieldProps: {
                url: '/api/users'
              }
            }
          },
          {
            title: '\u9644\u4EF6\u4E0A\u4F20',
            dataIndex: 'files',
            valueType: 'upload',
            fieldProps: {
              url: '/api/upload',
              multiple: true
            }
          }
        ]
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"formpro-demo-4":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{url:"/api/submit",beforeSubmit:function(a){return i()(i()({},a),{},{timestamp:Date.now()})}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-4",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      beforeSubmit={(values) => {
        // \u5904\u7406\u63D0\u4EA4\u6570\u636E
        return {
          ...values,
          timestamp: Date.now()
        };
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"formpro-demo-5":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{url:"/api/submit",fieldProps:{columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF01"}]}}]}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-5",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      fieldProps={{
        columns: [
          {
            title: '\u7528\u6237\u540D',
            dataIndex: 'username',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF01'
                }
              ]
            }
          }
        ]
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"formpro-demo-6":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{detailUrl:"/api/detail",isEdit:!0,detailSetData:function(a){return i()(i()({},a),{},{createTime:moment(a.createTime).format("YYYY-MM-DD")})}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-6",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      detailUrl="/api/detail"
      isEdit={true}
      detailSetData={(data) => {
        // \u5904\u7406\u8BE6\u60C5\u6570\u636E
        return {
          ...data,
          createTime: moment(data.createTime).format('YYYY-MM-DD')
        };
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"formpro-demo-7":{component:c.memo(c.lazy(x()(p()().mark(function d(){var o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return c.createElement(FormPro,{url:"/api/submit",finishFun:function(a,m){console.log("\u63D0\u4EA4\u6210\u529F\uFF1A",a),window.location.reload()}})},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"formpro-demo-7",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      finishFun={(data, values) => {
        // \u5237\u65B0\u9875\u9762\u6216\u66F4\u65B0\u5217\u8868
        console.log('\u63D0\u4EA4\u6210\u529F\uFF1A', data);
        window.location.reload();
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=x()(p()().mark(function t(){var n,l=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}}}},97389:function(E,v,e){e.r(v),e.d(v,{demos:function(){return I}});var P=e(15009),i=e.n(P),g=e(99289),p=e.n(g),u=e(67294),x=e(37738),c=e(65388),I={"loginpro-demo-0":{component:u.memo(u.lazy(p()(i()().mark(function f(){var d,o,t;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return d=l.sent,o=d.LoginPro,t=function(){return u.createElement(o,{hasSmsLogin:!0,url:"/api/login",captchaUrl:"/api/sendSms",loginFormFieldProps:{title:"\u7CFB\u7EDF\u767B\u5F55"}})},l.abrupt("return",{default:t});case 6:case"end":return l.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-0",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';

const Demo: FC = () => {
  return (
    <LoginPro
      hasSmsLogin={true}
      url="/api/login"
      captchaUrl="/api/sendSms"
      loginFormFieldProps={{
        title: "\u7CFB\u7EDF\u767B\u5F55"
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:c},renderOpts:{compile:function(){var f=p()(i()().mark(function o(){var t,n=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,n));case 3:case"end":return r.stop()}},o)}));function d(){return f.apply(this,arguments)}return d}()}},"loginpro-demo-1":{component:u.memo(u.lazy(p()(i()().mark(function f(){var d;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return u.createElement(LoginPro,{url:"/api/login",encrypt:function(r){return CryptoJS.MD5(r).toString()}})},t.abrupt("return",{default:d});case 2:case"end":return t.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-1",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      encrypt={(password) => {
        // \u81EA\u5B9A\u4E49\u52A0\u5BC6\u903B\u8F91
        return CryptoJS.MD5(password).toString();
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var f=p()(i()().mark(function o(){var t,n=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,n));case 3:case"end":return r.stop()}},o)}));function d(){return f.apply(this,arguments)}return d}()}},"loginpro-demo-2":{component:u.memo(u.lazy(p()(i()().mark(function f(){var d;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return u.createElement(LoginPro,{url:"/api/login",callback:function(r){localStorage.setItem("userInfo",JSON.stringify(r)),window.location.href="/dashboard"}})},t.abrupt("return",{default:d});case 2:case"end":return t.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-2",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      callback={(data) => {
        // \u5B58\u50A8\u7528\u6237\u4FE1\u606F
        localStorage.setItem('userInfo', JSON.stringify(data));
        // \u8DF3\u8F6C\u9875\u9762
        window.location.href = '/dashboard';
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var f=p()(i()().mark(function o(){var t,n=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,n));case 3:case"end":return r.stop()}},o)}));function d(){return f.apply(this,arguments)}return d}()}},"loginpro-demo-3":{component:u.memo(u.lazy(p()(i()().mark(function f(){var d;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return u.createElement(LoginPro,{url:"/api/login",BottomDom:function(){return u.createElement("div",{style:{textAlign:"center",marginTop:16}},u.createElement("a",{href:"/register"},"\u6CE8\u518C\u8D26\u53F7"))}})},t.abrupt("return",{default:d});case 2:case"end":return t.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-3",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      BottomDom={() => (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <a href="/register">\u6CE8\u518C\u8D26\u53F7</a>
        </div>
      )}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var f=p()(i()().mark(function o(){var t,n=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,n));case 3:case"end":return r.stop()}},o)}));function d(){return f.apply(this,arguments)}return d}()}},"loginpro-demo-4":{component:u.memo(u.lazy(p()(i()().mark(function f(){var d;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return u.createElement(LoginPro,{url:"/api/login",usernameField:"account",passwordField:"pwd",phoneField:"phone",captchaField:"code"})},t.abrupt("return",{default:d});case 2:case"end":return t.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-4",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      usernameField="account"
      passwordField="pwd"
      phoneField="phone"
      captchaField="code"
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var f=p()(i()().mark(function o(){var t,n=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,n));case 3:case"end":return r.stop()}},o)}));function d(){return f.apply(this,arguments)}return d}()}}}},90026:function(E,v,e){e.r(v),e.d(v,{demos:function(){return f}});var P=e(15009),i=e.n(P),g=e(99289),p=e.n(g),u=e(67294),x=e(42460),c=e(65388),I=e(13829),f={"modalpro-demo-0":{component:u.memo(u.lazy(p()(i()().mark(function d(){var o,t,n,l,r,a,m;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return o=h.sent,t=o.ModalPro,h.next=6,Promise.resolve().then(e.bind(e,13829));case 6:return n=h.sent,l=n.Button,r=n.Form,a=n.Input,m=function(){return u.createElement(t,{title:"\u81EA\u5B9A\u4E49\u8868\u5355",Content:function(O){var M=O.setIsModalOpen;return u.createElement(r,{onFinish:function(D){console.log(D),M(!1)}},u.createElement(r.Item,{name:"name",label:"\u59D3\u540D"},u.createElement(a,null)))},handleOk:function(O){console.log("\u70B9\u51FB\u4E86\u786E\u5B9A"),O(!0)}},u.createElement(l,{type:"primary"},"\u6253\u5F00\u8868\u5355"))},h.abrupt("return",{default:m});case 12:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"modalpro-demo-0",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { ModalPro } from 'durians';
import { Button, Form, Input } from 'antd';

const Demo: FC = () => {
  return (
    <ModalPro
      title="\u81EA\u5B9A\u4E49\u8868\u5355"
      Content={({ setIsModalOpen }) => (
        <Form
          onFinish={(values) => {
            console.log(values);
            setIsModalOpen(false);
          }}
        >
          <Form.Item name="name" label="\u59D3\u540D">
            <Input />
          </Form.Item>
        </Form>
      )}
      handleOk={(callback) => {
        console.log('\u70B9\u51FB\u4E86\u786E\u5B9A');
        callback(true);
      }}
    >
      <Button type="primary">\u6253\u5F00\u8868\u5355</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.24.9"}},entry:"index.tsx"},context:{durians:c,antd:I},renderOpts:{compile:function(){var d=p()(i()().mark(function t(){var n,l=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"modalpro-demo-1":{component:u.memo(u.lazy(p()(i()().mark(function d(){var o;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return u.createElement(ModalPro,{Content:function(a){var m=a.setIsModalOpen;return u.createElement(Button,{onClick:function(){return m(!1)}},"\u5173\u95ED\u5F39\u7A97")}},u.createElement(Button,null,"\u6253\u5F00\u5F39\u7A97"))},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"modalpro-demo-1",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <ModalPro
      Content={({ setIsModalOpen }) => (
        <Button onClick={() => setIsModalOpen(false)}>
          \u5173\u95ED\u5F39\u7A97
        </Button>
      )}
    >
      <Button>\u6253\u5F00\u5F39\u7A97</Button>
    </ModalPro>
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(i()().mark(function t(){var n,l=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"modalpro-demo-2":{component:u.memo(u.lazy(p()(i()().mark(function d(){var o;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return u.createElement(ModalPro,{handleOk:function(a){setTimeout(function(){console.log("\u5904\u7406\u5B8C\u6210"),a(!0)},1e3)}},u.createElement(Button,null,"\u6253\u5F00\u5F39\u7A97"))},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"modalpro-demo-2",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <ModalPro
      handleOk={(callback) => {
        // \u6267\u884C\u81EA\u5B9A\u4E49\u903B\u8F91
        setTimeout(() => {
          console.log('\u5904\u7406\u5B8C\u6210');
          callback(true); // \u4F20\u5165 true \u5173\u95ED\u5F39\u7A97
        }, 1000);
      }}
    >
      <Button>\u6253\u5F00\u5F39\u7A97</Button>
    </ModalPro>
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(i()().mark(function t(){var n,l=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"modalpro-demo-3":{component:u.memo(u.lazy(p()(i()().mark(function d(){var o;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return u.createElement(ModalPro,{fieldProps:{width:800,centered:!0,className:"custom-modal",maskClosable:!1}},u.createElement(Button,null,"\u6253\u5F00\u5F39\u7A97"))},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"modalpro-demo-3",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <ModalPro
      fieldProps={{
        width: 800,
        centered: true,
        className: 'custom-modal',
        maskClosable: false
      }}
    >
      <Button>\u6253\u5F00\u5F39\u7A97</Button>
    </ModalPro>
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(i()().mark(function t(){var n,l=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}},"modalpro-demo-4":{component:u.memo(u.lazy(p()(i()().mark(function d(){var o;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){return u.createElement(ModalPro,{handleOk:function(){var r=p()(i()().mark(function m(s){return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.prev=0,y.next=3,fetch("/api/submit");case 3:s(!0),y.next=10;break;case 6:y.prev=6,y.t0=y.catch(0),console.error(y.t0),s(!1);case 10:case"end":return y.stop()}},m,null,[[0,6]])}));function a(m){return r.apply(this,arguments)}return a}()},u.createElement(Button,null,"\u6253\u5F00\u5F39\u7A97"))},n.abrupt("return",{default:o});case 2:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"modalpro-demo-4",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <ModalPro
      handleOk={async (callback) => {
        try {
          await fetch('/api/submit');
          callback(true); // \u6210\u529F\u540E\u5173\u95ED\u5F39\u7A97
        } catch (error) {
          console.error(error);
          callback(false); // \u5931\u8D25\u4E0D\u5173\u95ED\u5F39\u7A97
        }
      }}
    >
      <Button>\u6253\u5F00\u5F39\u7A97</Button>
    </ModalPro>
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(i()().mark(function t(){var n,l=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}}}},78893:function(E,v,e){var P;e.r(v),e.d(v,{demos:function(){return o}});var i=e(97857),g=e.n(i),p=e(15009),u=e.n(p),x=e(99289),c=e.n(x),I=e(67294),f=e(47117),d=e(65388),o={"tablepro-demo-0":{component:I.memo(I.lazy(c()(u()().mark(function t(){var n,l,r,a,m;return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=h.sent,l=n.TablePro,r=n.FormPro,h.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=h.sent,m=a.useEffect,h.abrupt("return",{default:function(){for(var C=function(){console.log("\u53D6\u6D88")},O=function(){console.log("\u786E\u5B9A")},M=function(){console.log("\u70B9\u51FB")},b=[],D=0;D<50;D++)b.push({key:D,name:"Edward ".concat(D),age:D,address:"London Park no. ".concat(D),name1:"London Park no. ".concat(D,"1111"),name2:"London Park no. ".concat(D,"2222"),name3:"London Park no. ".concat(D,"2222")});return I.createElement("div",{style:{width:"100%",overflow:"hidden"}},I.createElement(l,{className:"xlb_table_demo",bordered:!0,fieldProps:{rowKey:"key",dataSource:b,columns:[{title:"Full Name",dataIndex:"name",width:100,key:"name",sorter:!0,fixed:"left",valueType:"treeSelectPro",align:"center"},{title:"Age",width:100,dataIndex:"age",key:"age",sorter:!0,children:[{title:"Name1",width:100,dataIndex:"name1",key:"name",sorter:!0,children:[{title:"Name3",width:100,dataIndex:"name3",key:"name",sorter:!0}]},{title:"Name2",width:100,dataIndex:"name2",key:"name"}]},{title:"Column 1",dataIndex:"address",key:"1",width:500},{title:"Column 2",dataIndex:"2",key:"2",width:150},{title:"Column 3",dataIndex:"3",key:"3",width:150},{title:"Column 4",dataIndex:"4",key:"4",width:150},{title:"Column 5",dataIndex:"5",key:"5",width:150},{title:"Column 6",dataIndex:"6",key:"6",width:150},{title:"Column 7",dataIndex:"7",key:"7",width:150},{title:"Column 8",dataIndex:"8",key:"8"},{title:"Action",dataIndex:"operation",key:"operation",width:100,render:function(){return I.createElement("a",null,"action")}}]}}))}});case 10:case"end":return h.stop()}},t)})))),asset:{type:"BLOCK",id:"tablepro-demo-0",refAtomIds:["TablePro"],dependencies:{"index.jsx":{type:"FILE",value:`import {TablePro,FormPro} from "durians";
import {useEffect} from "react";


/** \u6309\u94AE\u7EC4 */
export default () => {
  const onCancel = () => {
    console.log('\u53D6\u6D88');
  };
  const onOk = () => {
    console.log('\u786E\u5B9A');
  };
  const onClick = () => {
    console.log('\u70B9\u51FB');
  };


  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      name: \`Edward \${i}\`,
      age: i,
      address: \`London Park no. \${i}\`,
      name1: \`London Park no. \${i}1111\`,
      name2: \`London Park no. \${i}2222\`,
      name3: \`London Park no. \${i}2222\`,
    });
  }


  return (
    <div style={{
      width: "100%",
      overflow: "hidden"
    }}>

      <TablePro
        className={"xlb_table_demo"}
        bordered={true}
        fieldProps={{
          rowKey:"key",
          dataSource: data,
          columns: [
            {
              title: 'Full Name',
              dataIndex: 'name',
              width: 100,
              key: 'name',
              sorter: true,
              fixed: 'left',
              valueType:"treeSelectPro",
              align: "center"
              // },{
              //   title: 'Full Name222',
              //   dataIndex: 'age',
              //   align:"center",
              //   width: 100,
            },
            {
              title: 'Age',
              width: 100,
              dataIndex: 'age',
              key: 'age',
              sorter: true,
              children: [
                {
                  title: 'Name1',
                  width: 100,
                  dataIndex: 'name1',
                  key: 'name',
                  sorter: true,
                  children: [
                    {
                      title: 'Name3',
                      width: 100,
                      dataIndex: 'name3',
                      key: 'name',
                      sorter: true,
                    }]
                }, {
                  title: 'Name2',
                  width: 100,
                  dataIndex: 'name2',
                  key: 'name',
                },
              ]
            },
            {
              title: 'Column 1',
              dataIndex: 'address',
              key: '1',
              width: 500,
            },
            {
              title: 'Column 2',
              dataIndex: '2',
              key: '2',
              width: 150,
            },
            {
              title: 'Column 3',
              dataIndex: '3',
              key: '3',
              width: 150,
            },
            {
              title: 'Column 4',
              dataIndex: '4',
              key: '4',
              width: 150,
            },
            {
              title: 'Column 5',
              dataIndex: '5',
              key: '5',
              width: 150,
            },
            {
              title: 'Column 6',
              dataIndex: '6',
              key: '6',
              width: 150,
            },
            {
              title: 'Column 7',
              dataIndex: '7',
              key: '7',
              width: 150,
            },
            {title: 'Column 8', dataIndex: '8', key: '8'},
            {
              title: 'Action',
              dataIndex: 'operation',
              key: 'operation',
              width: 100,
              render: () => <a>action</a>,
            },
          ]
        }}
      />
    </div>
  );
};`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx",title:"\u57FA\u7840\u4F7F\u7528"},context:{durians:d,react:P||(P=e.t(I,2))},renderOpts:{compile:function(){var t=c()(u()().mark(function l(){var r,a=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(335).then(e.bind(e,37335));case 2:return s.abrupt("return",(r=s.sent).default.apply(r,a));case 3:case"end":return s.stop()}},l)}));function n(){return t.apply(this,arguments)}return n}()}},"tablepro-demo-1":{component:I.memo(I.lazy(c()(u()().mark(function t(){var n,l,r;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=m.sent,l=n.TablePro,r=function(){return I.createElement(l,{url:"/api/list",treeFieldProps:{url:"/api/tree",fieldProps:{fieldNames:{title:"name",key:"id",children:"children"}}},fieldProps:{columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"}]}})},m.abrupt("return",{default:r});case 6:case"end":return m.stop()}},t)})))),asset:{type:"BLOCK",id:"tablepro-demo-1",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

const Demo: FC = () => {
  return (
    <TablePro
      url="/api/list"
      treeFieldProps={{
        url: '/api/tree',
        fieldProps: {
          fieldNames: {
            title: 'name',
            key: 'id',
            children: 'children'
          }
        }
      }}
      fieldProps={{
        columns: [
          {
            title: '\u540D\u79F0',
            dataIndex: 'name'
          },
          {
            title: '\u5E74\u9F84',
            dataIndex: 'age'
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:d},renderOpts:{compile:function(){var t=c()(u()().mark(function l(){var r,a=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(335).then(e.bind(e,37335));case 2:return s.abrupt("return",(r=s.sent).default.apply(r,a));case 3:case"end":return s.stop()}},l)}));function n(){return t.apply(this,arguments)}return n}()}},"tablepro-demo-2":{component:I.memo(I.lazy(c()(u()().mark(function t(){var n;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=function(){return I.createElement(TablePro,{fieldProps:{columns:[{title:"\u59D3\u540D",dataIndex:"name",sorter:!0,valueType:"text"},{title:"\u5E74\u9F84",dataIndex:"age",valueType:"digit"}]}})},r.abrupt("return",{default:n});case 2:case"end":return r.stop()}},t)})))),asset:{type:"BLOCK",id:"tablepro-demo-2",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <TablePro
      fieldProps={{
        columns: [
          {
            title: '\u59D3\u540D',
            dataIndex: 'name',
            sorter: true,
            valueType: 'text'
          },
          {
            title: '\u5E74\u9F84',
            dataIndex: 'age',
            valueType: 'digit'
          }
        ]
      }}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var t=c()(u()().mark(function l(){var r,a=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(335).then(e.bind(e,37335));case 2:return s.abrupt("return",(r=s.sent).default.apply(r,a));case 3:case"end":return s.stop()}},l)}));function n(){return t.apply(this,arguments)}return n}()}},"tablepro-demo-3":{component:I.memo(I.lazy(c()(u()().mark(function t(){var n;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=function(){return I.createElement(TablePro,{actionBar:[function(m){var s=m.record;return I.createElement("a",{onClick:function(){return console.log(s)}},"\u67E5\u770B\u8BE6\u60C5")}],actionWidth:150})},r.abrupt("return",{default:n});case 2:case"end":return r.stop()}},t)})))),asset:{type:"BLOCK",id:"tablepro-demo-3",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <TablePro
      actionBar={[
        ({ record }) => (
          <a onClick={() => console.log(record)}>
            \u67E5\u770B\u8BE6\u60C5
          </a>
        )
      ]}
      actionWidth={150}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var t=c()(u()().mark(function l(){var r,a=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(335).then(e.bind(e,37335));case 2:return s.abrupt("return",(r=s.sent).default.apply(r,a));case 3:case"end":return s.stop()}},l)}));function n(){return t.apply(this,arguments)}return n}()}},"tablepro-demo-4":{component:I.memo(I.lazy(c()(u()().mark(function t(){var n;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=function(){return I.createElement(TablePro,{deleteUrl:"/api/delete",tableAlertOptionRenderPro:[function(m){var s=m.selectedRowKeys,h=m.selectedRows;return I.createElement(Button,{onClick:function(){return console.log(s,h)}},"\u6279\u91CF\u5BFC\u51FA")}]})},r.abrupt("return",{default:n});case 2:case"end":return r.stop()}},t)})))),asset:{type:"BLOCK",id:"tablepro-demo-4",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <TablePro
      deleteUrl="/api/delete"
      tableAlertOptionRenderPro={[
        ({ selectedRowKeys, selectedRows }) => (
          <Button 
            onClick={() => console.log(selectedRowKeys, selectedRows)}
          >
            \u6279\u91CF\u5BFC\u51FA
          </Button>
        )
      ]}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var t=c()(u()().mark(function l(){var r,a=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(335).then(e.bind(e,37335));case 2:return s.abrupt("return",(r=s.sent).default.apply(r,a));case 3:case"end":return s.stop()}},l)}));function n(){return t.apply(this,arguments)}return n}()}},"tablepro-demo-5":{component:I.memo(I.lazy(c()(u()().mark(function t(){var n;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=function(){return I.createElement(TablePro,{treeFieldProps:{url:"/api/tree",fieldProps:{onSelect:function(s){return console.log("\u9009\u4E2D\u7684\u8282\u70B9:",s)}}},paramsFun:function(s){return g()(g()({},s),{},{treeId:s.treeId})}})},r.abrupt("return",{default:n});case 2:case"end":return r.stop()}},t)})))),asset:{type:"BLOCK",id:"tablepro-demo-5",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`const Demo: FC = () => {
  return (
    <TablePro
      treeFieldProps={{
        url: '/api/tree',
        fieldProps: {
          onSelect: (keys) => console.log('\u9009\u4E2D\u7684\u8282\u70B9:', keys)
        }
      }}
      paramsFun={(params) => ({
        ...params,
        treeId: params.treeId
      })}
    />
  );
};
export default Demo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var t=c()(u()().mark(function l(){var r,a=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(335).then(e.bind(e,37335));case 2:return s.abrupt("return",(r=s.sent).default.apply(r,a));case 3:case"end":return s.stop()}},l)}));function n(){return t.apply(this,arguments)}return n}()}}}},16568:function(E,v,e){var P;e.r(v),e.d(v,{demos:function(){return f}});var i=e(15009),g=e.n(i),p=e(99289),u=e.n(p),x=e(67294),c=e(16677),I=e(65388),f={"treepro-demo-0":{component:x.memo(x.lazy(u()(g()().mark(function d(){var o,t,n,l,r,a;return g()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=s.sent,t=o.default,s.next=6,Promise.resolve().then(e.bind(e,65388));case 6:return n=s.sent,l=n.TreePro,r=[{title:"\u8282\u70B91",key:"0-0",children:[{title:"\u5B50\u8282\u70B91",key:"0-0-0"}]},{title:"\u8282\u70B92",key:"0-1",children:[{title:"\u5B50\u8282\u70B92",key:"0-1-0"}]}],a=function(){var y=function(M,b){console.log("\u9009\u4E2D",M,b)},C=function(M,b){console.log("\u52FE\u9009",M,b)};return t.createElement(l,{fieldProps:{treeData:r}})},s.abrupt("return",{default:a});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"treepro-demo-0",refAtomIds:["TreePro"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import {TreePro} from 'durians';

const treeData = [
  {
    title: '\u8282\u70B91',
    key: '0-0',
    children: [
      {
        title: '\u5B50\u8282\u70B91',
        key: '0-0-0',
      },
    ],
  },
  {
    title: '\u8282\u70B92',
    key: '0-1',
    children: [
      {
        title: '\u5B50\u8282\u70B92',
        key: '0-1-0',
      },
    ],
  },
];

const TreeProExample = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('\u9009\u4E2D', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('\u52FE\u9009', checkedKeys, info);
  };

  return (
    <TreePro fieldProps={{treeData}}/>);
};

export default TreeProExample;`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"}},entry:"index.jsx",title:"\u57FA\u672C TreePro \u793A\u4F8B"},context:{react:P||(P=e.t(x,2)),durians:I},renderOpts:{compile:function(){var d=u()(g()().mark(function t(){var n,l=arguments;return g()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,l));case 3:case"end":return a.stop()}},t)}));function o(){return d.apply(this,arguments)}return o}()}}}},45637:function(E,v,e){e.r(v),e.d(v,{texts:function(){return i}});var P=e(34986);const i=[{value:"FormPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Components",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u5C01\u88C5\u4E86\u5E38\u89C1\u7684\u8868\u5355\u573A\u666F\uFF0C\u652F\u6301\u6A21\u6001\u6846\u3001\u62BD\u5C49\u7B49\u591A\u79CD\u5E03\u5C40\u5F62\u5F0F\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u914D\u7F6E\u9879\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u6A21\u6001\u6846\u6216\u62BD\u5C49\u5F62\u5F0F\u7684\u8868\u5355",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5904\u7406\u8868\u5355\u63D0\u4EA4\u3001\u6570\u636E\u83B7\u53D6\u7B49\u590D\u6742\u903B\u8F91",paraId:1,tocIndex:1},{value:"\u9700\u8981\u7EDF\u4E00\u7BA1\u7406\u8868\u5355\u9A8C\u8BC1\u548C\u63D0\u4EA4\u884C\u4E3A",paraId:1,tocIndex:1},{value:`import { FormPro } from '@your-package/components';
`,paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"layoutType",paraId:3,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7C7B\u578B\uFF0C\u652F\u6301 ModalForm \u6216 DrawerForm",paraId:3,tocIndex:5},{value:"'ModalForm' | 'DrawerForm'",paraId:3,tocIndex:5},{value:"'ModalForm'",paraId:3,tocIndex:5},{value:"children",paraId:3,tocIndex:5},{value:"\u89E6\u53D1\u8868\u5355\u663E\u793A\u7684\u5143\u7D20",paraId:3,tocIndex:5},{value:"ReactNode",paraId:3,tocIndex:5},{value:"<Button>\u70B9\u51FB\u6211</Button>",paraId:3,tocIndex:5},{value:"fieldProps",paraId:3,tocIndex:5},{value:"\u8868\u5355\u5B57\u6BB5\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA ",paraId:3,tocIndex:5},{value:"BetaSchemaForm",paraId:3,tocIndex:5},{value:" \u7684\u6240\u6709\u5C5E\u6027",paraId:3,tocIndex:5},{value:"object",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5},{value:"url",paraId:3,tocIndex:5},{value:"\u8868\u5355\u63D0\u4EA4\u7684\u63A5\u53E3\u5730\u5740",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"detailUrl",paraId:3,tocIndex:5},{value:"\u83B7\u53D6\u8868\u5355\u8BE6\u60C5\u6570\u636E\u7684\u63A5\u53E3\u5730\u5740",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"record",paraId:3,tocIndex:5},{value:"\u8868\u5355\u521D\u59CB\u503C",paraId:3,tocIndex:5},{value:"object",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5},{value:"ajax",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5",paraId:3,tocIndex:5},{value:"(url: string, params: object, callback: Function) => Promise<void>",paraId:3,tocIndex:5},{value:"ajaxCommon",paraId:3,tocIndex:5},{value:"finishFun",paraId:3,tocIndex:5},{value:"\u8868\u5355\u63D0\u4EA4\u6210\u529F\u540E\u7684\u56DE\u8C03",paraId:3,tocIndex:5},{value:"(data: any, values: object) => void",paraId:3,tocIndex:5},{value:"() => {}",paraId:3,tocIndex:5},{value:"setMsg",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u63D0\u793A\u6D88\u606F\u5904\u7406\u51FD\u6570",paraId:3,tocIndex:5},{value:"(data: any) => string",paraId:3,tocIndex:5},{value:"(data) => data.msg",paraId:3,tocIndex:5},{value:"detailSetData",paraId:3,tocIndex:5},{value:"\u5904\u7406\u8BE6\u60C5\u6570\u636E\u7684\u51FD\u6570",paraId:3,tocIndex:5},{value:"(data: any) => object",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"isEdit",paraId:3,tocIndex:5},{value:"\u662F\u5426\u4E3A\u7F16\u8F91\u6A21\u5F0F",paraId:3,tocIndex:5},{value:"boolean",paraId:3,tocIndex:5},{value:"false",paraId:3,tocIndex:5},{value:"beforeSubmit",paraId:3,tocIndex:5},{value:"\u8868\u5355\u63D0\u4EA4\u524D\u7684\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:3,tocIndex:5},{value:"(values: object, record: object, originValues: object) => object",paraId:3,tocIndex:5},{value:"(data) => data",paraId:3,tocIndex:5},{value:"Ant Design",paraId:4,tocIndex:6},{value:" - ^5.0.0",paraId:4,tocIndex:6},{value:"@ant-design/pro-components",paraId:4,tocIndex:6},{value:" - ^2.0.0",paraId:4,tocIndex:6},{value:`interface FormData {
  [key: string]: any;
}

interface FormResponse {
  msg: string;
  [key: string]: any;
}
`,paraId:5,tocIndex:8},{value:"TableSelect \u662F\u4E00\u4E2A\u57FA\u4E8E TablePro \u548C ModalPro \u7684\u8868\u683C\u9009\u62E9\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u9009\u548C\u5355\u9009\u6A21\u5F0F\u3002",paraId:6,tocIndex:10},{value:"\u53C2\u6570",paraId:7,tocIndex:11},{value:"\u8BF4\u660E",paraId:7,tocIndex:11},{value:"\u7C7B\u578B",paraId:7,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:11},{value:"title",paraId:7,tocIndex:11},{value:"\u9009\u62E9\u6309\u94AE\u6587\u5B57",paraId:7,tocIndex:11},{value:"string",paraId:7,tocIndex:11},{value:"'\u9009\u62E9'",paraId:7,tocIndex:11},{value:"value",paraId:7,tocIndex:11},{value:"\u9009\u4E2D\u7684\u503C",paraId:7,tocIndex:11},{value:"any[]",paraId:7,tocIndex:11},{value:"[]",paraId:7,tocIndex:11},{value:"onChange",paraId:7,tocIndex:11},{value:"\u9009\u62E9\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:11},{value:"(value: any[]) => void",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"tableFieldProps",paraId:7,tocIndex:11},{value:"TablePro \u7684\u5C5E\u6027\u914D\u7F6E",paraId:7,tocIndex:11},{value:"TableProProps",paraId:7,tocIndex:11},{value:"{}",paraId:7,tocIndex:11},{value:"modalFieldProps",paraId:7,tocIndex:11},{value:"ModalPro \u7684\u5C5E\u6027\u914D\u7F6E",paraId:7,tocIndex:11},{value:"ModalProProps",paraId:7,tocIndex:11},{value:"{}",paraId:7,tocIndex:11},{value:"TreeSelectPro \u662F\u4E00\u4E2A\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u7684\u6811\u5F62\u9009\u62E9\u5668\u7EC4\u4EF6\u3002",paraId:8,tocIndex:12},{value:"\u53C2\u6570",paraId:9,tocIndex:13},{value:"\u8BF4\u660E",paraId:9,tocIndex:13},{value:"\u7C7B\u578B",paraId:9,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:13},{value:"ajax",paraId:9,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5",paraId:9,tocIndex:13},{value:"Function",paraId:9,tocIndex:13},{value:"ajaxCommon",paraId:9,tocIndex:13},{value:"rowKey",paraId:9,tocIndex:13},{value:"\u884C\u552F\u4E00\u6807\u8BC6",paraId:9,tocIndex:13},{value:"string",paraId:9,tocIndex:13},{value:"'value'",paraId:9,tocIndex:13},{value:"fieldProps",paraId:9,tocIndex:13},{value:"\u914D\u7F6E\u9879\uFF0C\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027",paraId:9,tocIndex:13},{value:"object",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"fieldProps.url",paraId:9,tocIndex:13},{value:"\u6570\u636E\u63A5\u53E3\u5730\u5740",paraId:9,tocIndex:13},{value:"string",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"fieldProps.params",paraId:9,tocIndex:13},{value:"\u8BF7\u6C42\u53C2\u6570\u5904\u7406\u51FD\u6570",paraId:9,tocIndex:13},{value:"(data: any) => object",paraId:9,tocIndex:13},{value:"() => ({})",paraId:9,tocIndex:13},{value:"fieldProps.setData",paraId:9,tocIndex:13},{value:"\u54CD\u5E94\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:9,tocIndex:13},{value:"(response: any) => any[]",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"fieldProps.fieldNames",paraId:9,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u8282\u70B9\u5B57\u6BB5",paraId:9,tocIndex:13},{value:"object",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"UploadPro \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design Upload \u7684\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\u3002",paraId:10,tocIndex:14},{value:"\u53C2\u6570",paraId:11,tocIndex:15},{value:"\u8BF4\u660E",paraId:11,tocIndex:15},{value:"\u7C7B\u578B",paraId:11,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:15},{value:"title",paraId:11,tocIndex:15},{value:"\u4E0A\u4F20\u6309\u94AE\u6587\u5B57",paraId:11,tocIndex:15},{value:"string",paraId:11,tocIndex:15},{value:"'\u4E0A\u4F20'",paraId:11,tocIndex:15},{value:"url",paraId:11,tocIndex:15},{value:"\u4E0A\u4F20\u63A5\u53E3\u5730\u5740",paraId:11,tocIndex:15},{value:"string",paraId:11,tocIndex:15},{value:"'/upload'",paraId:11,tocIndex:15},{value:"fieldPropsUpload",paraId:11,tocIndex:15},{value:"Upload \u7EC4\u4EF6\u7684\u5C5E\u6027\u914D\u7F6E",paraId:11,tocIndex:15},{value:"UploadProps",paraId:11,tocIndex:15},{value:"{}",paraId:11,tocIndex:15},{value:"onChange",paraId:11,tocIndex:15},{value:"\u6587\u4EF6\u5217\u8868\u53D8\u5316\u7684\u56DE\u8C03",paraId:11,tocIndex:15},{value:"(fileList) => void",paraId:11,tocIndex:15},{value:"-",paraId:11,tocIndex:15},{value:"setData",paraId:11,tocIndex:15},{value:"\u4E0A\u4F20\u54CD\u5E94\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:11,tocIndex:15},{value:"(response) => string",paraId:11,tocIndex:15},{value:"() => ''",paraId:11,tocIndex:15},{value:"ajaxSuccess",paraId:11,tocIndex:15},{value:"\u4E0A\u4F20\u6210\u529F\u7684\u56DE\u8C03",paraId:11,tocIndex:15},{value:"(response, callback) => void",paraId:11,tocIndex:15},{value:"-",paraId:11,tocIndex:15},{value:"ajaxError",paraId:11,tocIndex:15},{value:"\u4E0A\u4F20\u5931\u8D25\u7684\u56DE\u8C03",paraId:11,tocIndex:15},{value:"(response, callback) => void",paraId:11,tocIndex:15},{value:"-",paraId:11,tocIndex:15},{value:"\u8FD9\u90E8\u5206\u8865\u5145\u6587\u6863\u8BE6\u7EC6\u8BF4\u660E\u4E86 TableSelect\u3001TreeSelectPro \u548C UploadPro \u8FD9\u4E09\u4E2A\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5305\u62EC\uFF1A",paraId:12},{value:"\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u57FA\u672C\u4ECB\u7ECD",paraId:13},{value:"\u4EE3\u7801\u793A\u4F8B",paraId:13},{value:"\u8BE6\u7EC6\u7684 API \u6587\u6863",paraId:13},{value:"\u7EC4\u5408\u4F7F\u7528\u793A\u4F8B",paraId:13},{value:"\u6587\u6863\u4FDD\u6301\u4E86\u539F\u6709\u7684\u683C\u5F0F\u548C\u98CE\u683C\uFF0C\u540C\u65F6\u6DFB\u52A0\u4E86\u65B0\u7684\u5185\u5BB9\u3002\u8FD9\u4E9B\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u4F5C\u4E3A FormPro \u7684\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u901A\u8FC7 valueType \u6765\u6307\u5B9A\u5BF9\u5E94\u7684\u7EC4\u4EF6\u7C7B\u578B\u3002",paraId:14}]},54394:function(E,v,e){e.r(v),e.d(v,{texts:function(){return i}});var P=e(37738);const i=[{value:"LoginPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Components",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u767B\u5F55\u7EC4\u4EF6\uFF0C\u652F\u6301\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u548C\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\u4E24\u79CD\u65B9\u5F0F\uFF0C\u5E76\u63D0\u4F9B\u4E86\u81EA\u52A8\u767B\u5F55\u3001\u5BC6\u7801\u52A0\u5BC6\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5FEB\u901F\u6784\u5EFA\u767B\u5F55\u9875\u9762",paraId:1,tocIndex:1},{value:"\u9700\u8981\u652F\u6301\u8D26\u53F7\u5BC6\u7801\u548C\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u5BC6\u7801\u8FDB\u884C\u52A0\u5BC6\u5904\u7406",paraId:1,tocIndex:1},{value:"\u9700\u8981\u652F\u6301\u81EA\u52A8\u767B\u5F55\u529F\u80FD",paraId:1,tocIndex:1},{value:`import { LoginPro } from 'durians';
`,paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"ajax",paraId:3,tocIndex:5},{value:"\u901A\u7528\u8BF7\u6C42\u65B9\u6CD5",paraId:3,tocIndex:5},{value:"(url: string, params: object, callback: Function, isApi?: boolean) => void",paraId:3,tocIndex:5},{value:"ajaxCommon",paraId:3,tocIndex:5},{value:"url",paraId:3,tocIndex:5},{value:"\u767B\u5F55\u63A5\u53E3\u5730\u5740",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"captchaUrl",paraId:3,tocIndex:5},{value:"\u9A8C\u8BC1\u7801\u53D1\u9001\u63A5\u53E3\u5730\u5740",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"loginFormFieldProps",paraId:3,tocIndex:5},{value:"LoginForm \u7EC4\u4EF6\u7684\u5C5E\u6027\u914D\u7F6E",paraId:3,tocIndex:5},{value:"object",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5},{value:"hasSmsLogin",paraId:3,tocIndex:5},{value:"\u662F\u5426\u542F\u7528\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55",paraId:3,tocIndex:5},{value:"boolean",paraId:3,tocIndex:5},{value:"false",paraId:3,tocIndex:5},{value:"hasAccountLogin",paraId:3,tocIndex:5},{value:"\u662F\u5426\u542F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",paraId:3,tocIndex:5},{value:"boolean",paraId:3,tocIndex:5},{value:"true",paraId:3,tocIndex:5},{value:"phoneField",paraId:3,tocIndex:5},{value:"\u624B\u673A\u53F7\u5B57\u6BB5\u540D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'mobile'",paraId:3,tocIndex:5},{value:"usernameField",paraId:3,tocIndex:5},{value:"\u7528\u6237\u540D\u5B57\u6BB5\u540D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'username'",paraId:3,tocIndex:5},{value:"passwordField",paraId:3,tocIndex:5},{value:"\u5BC6\u7801\u5B57\u6BB5\u540D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'password'",paraId:3,tocIndex:5},{value:"captchaField",paraId:3,tocIndex:5},{value:"\u9A8C\u8BC1\u7801\u5B57\u6BB5\u540D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'captcha'",paraId:3,tocIndex:5},{value:"extraPasswordText",paraId:3,tocIndex:5},{value:"\u5BC6\u7801\u52A0\u5BC6\u989D\u5916\u6DF7\u6DC6\u6587\u672C",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"''",paraId:3,tocIndex:5},{value:"secretKey",paraId:3,tocIndex:5},{value:"AES \u52A0\u5BC6\u5BC6\u94A5",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"encrypt",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u52A0\u5BC6\u51FD\u6570",paraId:3,tocIndex:5},{value:"(password: string) => string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"tokenField",paraId:3,tocIndex:5},{value:"token \u5B57\u6BB5\u540D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'token'",paraId:3,tocIndex:5},{value:"setData",paraId:3,tocIndex:5},{value:"\u767B\u5F55\u54CD\u5E94\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:3,tocIndex:5},{value:"(response: any) => any",paraId:3,tocIndex:5},{value:"(data) => data.data",paraId:3,tocIndex:5},{value:"callback",paraId:3,tocIndex:5},{value:"\u767B\u5F55\u6210\u529F\u56DE\u8C03",paraId:3,tocIndex:5},{value:"(data: any) => void",paraId:3,tocIndex:5},{value:"() => {}",paraId:3,tocIndex:5},{value:"BottomDom",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u7EC4\u4EF6",paraId:3,tocIndex:5},{value:"ReactNode",paraId:3,tocIndex:5},{value:"() => </>",paraId:3,tocIndex:5},{value:"ForGetPassword",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5FD8\u8BB0\u5BC6\u7801\u7EC4\u4EF6",paraId:3,tocIndex:5},{value:"ReactNode",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u5FD8\u8BB0\u5BC6\u7801\u7EC4\u4EF6",paraId:3,tocIndex:5},{value:"Ant Design",paraId:4,tocIndex:6},{value:" - ^5.0.0",paraId:4,tocIndex:6},{value:"@ant-design/pro-components",paraId:4,tocIndex:6},{value:" - ^2.0.0",paraId:4,tocIndex:6},{value:"crypto-js",paraId:4,tocIndex:6},{value:" - ^4.1.1",paraId:4,tocIndex:6},{value:`interface LoginParams {
  username?: string;
  password?: string;
  mobile?: string;
  captcha?: string;
  autoLogin?: boolean;
}
`,paraId:5,tocIndex:8},{value:`interface LoginResponse {
  code: number;
  msg: string;
  data: {
    token: string;
    [key: string]: any;
  }
}
`,paraId:6,tocIndex:9}]},23876:function(E,v,e){e.r(v),e.d(v,{texts:function(){return i}});var P=e(42460);const i=[{value:"ModalPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Modal",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u66F4\u7B80\u4FBF\u7684\u4F7F\u7528\u65B9\u5F0F\u548C\u66F4\u7075\u6D3B\u7684\u63A7\u5236\u65B9\u6CD5\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u5F39\u7A97",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5728\u5F39\u7A97\u5185\u90E8\u63A7\u5236\u5F39\u7A97\u7684\u663E\u793A\u72B6\u6001",paraId:1,tocIndex:1},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u5F39\u7A97\u7684\u89E6\u53D1\u5143\u7D20",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u5F39\u7A97\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u548C\u6269\u5C55",paraId:1,tocIndex:1},{value:`import { ModalPro } from 'durians';
`,paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"title",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u6807\u9898",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'\u57FA\u7840'",paraId:3,tocIndex:5},{value:"handleOk",paraId:3,tocIndex:5},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:5},{value:"(callback: (close?: boolean) => void) => void",paraId:3,tocIndex:5},{value:"(callback) => callback()",paraId:3,tocIndex:5},{value:"Content",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u5185\u5BB9\u7EC4\u4EF6",paraId:3,tocIndex:5},{value:"ReactNode | ((props: { isModalOpen: boolean; setIsModalOpen: (open: boolean) => void }) => ReactNode)",paraId:3,tocIndex:5},{value:"() => <div>\u793A\u4F8B</div>",paraId:3,tocIndex:5},{value:"children",paraId:3,tocIndex:5},{value:"\u89E6\u53D1\u5F39\u7A97\u7684\u5143\u7D20",paraId:3,tocIndex:5},{value:"ReactNode",paraId:3,tocIndex:5},{value:"<div>\u70B9\u51FB</div>",paraId:3,tocIndex:5},{value:"fieldProps",paraId:3,tocIndex:5},{value:"Modal \u7EC4\u4EF6\u7684\u5C5E\u6027\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA ",paraId:3,tocIndex:5},{value:"Ant Design Modal",paraId:3,tocIndex:5},{value:"ModalProps",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5},{value:`interface ContentProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}
`,paraId:4,tocIndex:6},{value:"Ant Design",paraId:5,tocIndex:7},{value:` - ^5.0.0
`,paraId:5,tocIndex:7},{value:"Modal \u7EC4\u4EF6: ",paraId:6,tocIndex:7},{value:"\u6587\u6863\u94FE\u63A5",paraId:6,tocIndex:7}]},53308:function(E,v,e){e.r(v),e.d(v,{texts:function(){return i}});var P=e(47117);const i=[{value:"TablePro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Table",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u8868\u683C\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u66F4\u4E30\u5BCC\u7684\u529F\u80FD\u548C\u66F4\u7B80\u4FBF\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u652F\u6301\u6811\u5F62\u8868\u683C\u3001\u6279\u91CF\u64CD\u4F5C\u3001\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F\u7B49\u7279\u6027\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5C55\u793A\u5927\u91CF\u7ED3\u6784\u5316\u6570\u636E",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u641C\u7D22\u3001\u7B5B\u9009\u7B49\u64CD\u4F5C",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539\u67E5",paraId:1,tocIndex:1},{value:"\u9700\u8981\u652F\u6301\u6811\u5F62\u7ED3\u6784\u7684\u6570\u636E\u5C55\u793A",paraId:1,tocIndex:1},{value:"\u9700\u8981\u652F\u6301\u6279\u91CF\u64CD\u4F5C\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86 TablePro \u7684\u57FA\u7840\u7528\u6CD5\uFF0C\u5305\u62EC\u56FA\u5B9A\u5217\u3001\u6392\u5E8F\u3001\u591A\u7EA7\u8868\u5934\u7B49\u529F\u80FD\uFF1A",paraId:2,tocIndex:3},{value:`import { TablePro } from 'durians';
`,paraId:3,tocIndex:7},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"ajax",paraId:4,tocIndex:7},{value:"\u901A\u7528\u8BF7\u6C42\u65B9\u6CD5",paraId:4,tocIndex:7},{value:"(url: string, params: object, callback: Function, isApi?: boolean) => void",paraId:4,tocIndex:7},{value:"ajaxCommon",paraId:4,tocIndex:7},{value:"url",paraId:4,tocIndex:7},{value:"\u6570\u636E\u63A5\u53E3\u5730\u5740",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"addUrl",paraId:4,tocIndex:7},{value:"\u65B0\u589E\u63A5\u53E3\u5730\u5740",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"editUrl",paraId:4,tocIndex:7},{value:"\u7F16\u8F91\u63A5\u53E3\u5730\u5740",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"deleteUrl",paraId:4,tocIndex:7},{value:"\u5220\u9664\u63A5\u53E3\u5730\u5740",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"deleteField",paraId:4,tocIndex:7},{value:"\u5355\u4E2A\u5220\u9664\u7684\u5B57\u6BB5\u540D",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"'id'",paraId:4,tocIndex:7},{value:"deleteFields",paraId:4,tocIndex:7},{value:"\u6279\u91CF\u5220\u9664\u7684\u5B57\u6BB5\u540D",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"'idList'",paraId:4,tocIndex:7},{value:"deleteFieldIsArr",paraId:4,tocIndex:7},{value:"\u5355\u4E2A\u5220\u9664\u65F6\u662F\u5426\u4F20\u9012\u6570\u7EC4",paraId:4,tocIndex:7},{value:"boolean",paraId:4,tocIndex:7},{value:"false",paraId:4,tocIndex:7},{value:"deleteParams",paraId:4,tocIndex:7},{value:"\u5220\u9664\u63A5\u53E3\u7684\u989D\u5916\u53C2\u6570",paraId:4,tocIndex:7},{value:"object",paraId:4,tocIndex:7},{value:"{}",paraId:4,tocIndex:7},{value:"deleteBatchHidden",paraId:4,tocIndex:7},{value:"\u662F\u5426\u9690\u85CF\u6279\u91CF\u5220\u9664\u529F\u80FD",paraId:4,tocIndex:7},{value:"boolean",paraId:4,tocIndex:7},{value:"false",paraId:4,tocIndex:7},{value:"fieldProps",paraId:4,tocIndex:7},{value:"\u8868\u683C\u5C5E\u6027\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA ",paraId:4,tocIndex:7},{value:"ProTable",paraId:4,tocIndex:7},{value:"ProTableProps",paraId:4,tocIndex:7},{value:"{}",paraId:4,tocIndex:7},{value:"addFormProFieldProps",paraId:4,tocIndex:7},{value:"\u65B0\u589E\u8868\u5355\u7684\u5C5E\u6027\u914D\u7F6E",paraId:4,tocIndex:7},{value:"object",paraId:4,tocIndex:7},{value:"{}",paraId:4,tocIndex:7},{value:"treeFieldProps",paraId:4,tocIndex:7},{value:"\u6811\u5F62\u9009\u62E9\u5668\u7684\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA TreePro \u7EC4\u4EF6",paraId:4,tocIndex:7},{value:"object",paraId:4,tocIndex:7},{value:"null",paraId:4,tocIndex:7},{value:"treeWidth",paraId:4,tocIndex:7},{value:"\u6811\u5F62\u9009\u62E9\u5668\u7684\u5BBD\u5EA6",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"200",paraId:4,tocIndex:7},{value:"keywordField",paraId:4,tocIndex:7},{value:"\u5173\u952E\u8BCD\u641C\u7D22\u5B57\u6BB5",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"keywordPlaceholder",paraId:4,tocIndex:7},{value:"\u5173\u952E\u8BCD\u641C\u7D22\u5360\u4F4D\u7B26",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:`// \u8868\u683C\u6570\u636E\u7ED3\u6784
interface TableListItem {
  id: string | number;
  [key: string]: any;
}

// \u8BF7\u6C42\u53C2\u6570\u7ED3\u6784
interface RequestParams {
  pageIndex: number;
  pageSize: number;
  [key: string]: any;
}

// \u54CD\u5E94\u6570\u636E\u7ED3\u6784
interface ResponseData {
  code: number;
  msg: string;
  data: {
    records: TableListItem[];
    total: number;
  };
}
`,paraId:5,tocIndex:8},{value:"Ant Design",paraId:6,tocIndex:9},{value:" - ^5.0.0",paraId:6,tocIndex:9},{value:"@ant-design/pro-components",paraId:6,tocIndex:9},{value:" - ^2.0.0",paraId:6,tocIndex:9},{value:"lodash-es",paraId:6,tocIndex:9},{value:" - ^4.17.21",paraId:6,tocIndex:9}]},29859:function(E,v,e){e.r(v),e.d(v,{texts:function(){return i}});var P=e(16677);const i=[]}}]);
