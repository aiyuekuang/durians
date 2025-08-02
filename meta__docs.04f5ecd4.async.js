"use strict";(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[904],{795:function(g,n,e){e.r(n),e.d(n,{demos:function(){return c}});var r=e(67294),c={}},36750:function(g,n,e){e.r(n),e.d(n,{demos:function(){return c}});var r=e(67294),c={}},36163:function(g,n,e){e.r(n),e.d(n,{demos:function(){return c}});var r=e(67294),c={}},11171:function(g,n,e){var r;e.r(n),e.d(n,{demos:function(){return E}});var c=e(15009),d=e.n(c),A=e(99289),P=e.n(A),M=e(67294),h=e(66436),E={"docs-demo-0":{component:M.memo(M.lazy(P()(d()().mark(function T(){var f,i,o,t,u;return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=s.sent,i=f.default,s.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return o=s.sent,t=o.TablePro,u=function(){return i.createElement("div",null,i.createElement(t,{url:"/api/users",addUrl:"/api/users",editUrl:"/api/users",deleteUrl:"/api/users",fieldProps:{columns:[{title:"\u59D3\u540D",dataIndex:"name",valueType:"text"},{title:"\u90AE\u7BB1",dataIndex:"email",valueType:"text"}]}}))},s.abrupt("return",{default:u});case 10:case"end":return s.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TablePro, FormPro, ModalPro } from 'durians';

const App = () => {
  return (
    <div>
      <TablePro
        url="/api/users"
        addUrl="/api/users"
        editUrl="/api/users"
        deleteUrl="/api/users"
        fieldProps={{
          columns: [
            {
              title: '\u59D3\u540D',
              dataIndex: 'name',
              valueType: 'text',
            },
            {
              title: '\u90AE\u7BB1',
              dataIndex: 'email',
              valueType: 'text',
            },
          ],
        }}
      />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{react:r||(r=e.t(M,2)),durians:h},renderOpts:{compile:function(){var T=P()(d()().mark(function i(){var o,t=arguments;return d()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(250),e.e(764)]).then(e.bind(e,90250));case 2:return I.abrupt("return",(o=I.sent).default.apply(o,t));case 3:case"end":return I.stop()}},i)}));function f(){return T.apply(this,arguments)}return f}()}}}},43203:function(g,n,e){e.r(n),e.d(n,{demos:function(){return h}});var r=e(15009),c=e.n(r),d=e(99289),A=e.n(d),P=e(67294),M=e(66436),h={"docs-mock-data-demo-0":{component:P.memo(P.lazy(A()(c()().mark(function E(){var T,f;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,66436));case 2:T=o.sent,f=T.TablePro;case 5:case"end":return o.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-mock-data-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

// \u8FD9\u4E2A\u8BF7\u6C42\u4F1A\u88AB Mock \u62E6\u622A\u5E76\u8FD4\u56DE\u6A21\u62DF\u6570\u636E
<TablePro url="/api/users" />`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:M},renderOpts:{compile:function(){var E=A()(c()().mark(function f(){var i,o=arguments;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(250),e.e(764)]).then(e.bind(e,90250));case 2:return u.abrupt("return",(i=u.sent).default.apply(i,o));case 3:case"end":return u.stop()}},f)}));function T(){return E.apply(this,arguments)}return T}()}}}},78526:function(g,n,e){var r;e.r(n),e.d(n,{demos:function(){return f}});var c=e(15009),d=e.n(c),A=e(5574),P=e.n(A),M=e(99289),h=e.n(M),E=e(67294),T=e(52202),f={"docs-mock-test-demo-0":{component:E.memo(E.lazy(h()(d()().mark(function i(){var o,t,u,I,s,x,v,U,k;return d()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=C.sent,t=o.default,u=o.useState,C.next=7,Promise.resolve().then(e.bind(e,52202));case 7:return I=C.sent,s=I.Button,x=I.Card,v=I.message,U=I.Space,k=I.Table,C.abrupt("return",{default:function(){var W=u(!1),S=P()(W,2),R=S[0],D=S[1],G=u([]),L=P()(G,2),B=L[0],N=L[1],F=u(null),j=P()(F,2),K=j[0],O=j[1],w=function(){var b=h()(d()().mark(function m(){var y,l;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return D(!0),a.prev=1,a.next=4,fetch("/api/users?current=1&pageSize=5");case 4:return y=a.sent,a.next=7,y.json();case 7:l=a.sent,l.success?(N(l.data.list),O(l),v.success("\u83B7\u53D6\u7528\u6237\u5217\u8868\u6210\u529F"),console.log("\u7528\u6237\u6570\u636E:",l)):v.error("\u83B7\u53D6\u7528\u6237\u5217\u8868\u5931\u8D25"),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),console.error("API \u8C03\u7528\u5931\u8D25:",a.t0),v.error("API \u8C03\u7528\u5931\u8D25");case 15:return a.prev=15,D(!1),a.finish(15);case 18:case"end":return a.stop()}},m,null,[[1,11,15,18]])}));return function(){return b.apply(this,arguments)}}(),$=function(){var b=h()(d()().mark(function m(){var y,l,_;return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return D(!0),p.prev=1,y={name:"\u6D4B\u8BD5\u7528\u6237"+Date.now(),email:"test".concat(Date.now(),"@example.com"),phone:"13800138000",department:"\u6280\u672F\u90E8",position:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",status:1},p.next=5,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});case 5:return l=p.sent,p.next=8,l.json();case 8:_=p.sent,_.success?(v.success("\u521B\u5EFA\u7528\u6237\u6210\u529F"),console.log("\u521B\u5EFA\u7ED3\u679C:",_),w()):v.error("\u521B\u5EFA\u7528\u6237\u5931\u8D25: "+_.msg),p.next=16;break;case 12:p.prev=12,p.t0=p.catch(1),console.error("\u521B\u5EFA\u7528\u6237\u5931\u8D25:",p.t0),v.error("\u521B\u5EFA\u7528\u6237\u5931\u8D25");case 16:return p.prev=16,D(!1),p.finish(16);case 19:case"end":return p.stop()}},m,null,[[1,12,16,19]])}));return function(){return b.apply(this,arguments)}}(),z=function(){var b=h()(d()().mark(function m(){var y,l;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return D(!0),a.prev=1,a.next=4,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"admin",password:"123456"})});case 4:return y=a.sent,a.next=7,y.json();case 7:l=a.sent,l.success?(v.success("\u767B\u5F55\u6210\u529F"),console.log("\u767B\u5F55\u7ED3\u679C:",l),O(l)):v.error("\u767B\u5F55\u5931\u8D25: "+l.msg),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),console.error("\u767B\u5F55\u5931\u8D25:",a.t0),v.error("\u767B\u5F55\u5931\u8D25");case 15:return a.prev=15,D(!1),a.finish(15);case 18:case"end":return a.stop()}},m,null,[[1,11,15,18]])}));return function(){return b.apply(this,arguments)}}(),H=function(){var b=h()(d()().mark(function m(){var y,l;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return D(!0),a.prev=1,a.next=4,fetch("/api/tree");case 4:return y=a.sent,a.next=7,y.json();case 7:l=a.sent,l.success?(v.success("\u83B7\u53D6\u6811\u5F62\u6570\u636E\u6210\u529F"),console.log("\u6811\u5F62\u6570\u636E:",l),O(l)):v.error("\u83B7\u53D6\u6811\u5F62\u6570\u636E\u5931\u8D25"),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),console.error("\u83B7\u53D6\u6811\u5F62\u6570\u636E\u5931\u8D25:",a.t0),v.error("\u83B7\u53D6\u6811\u5F62\u6570\u636E\u5931\u8D25");case 15:return a.prev=15,D(!1),a.finish(15);case 18:case"end":return a.stop()}},m,null,[[1,11,15,18]])}));return function(){return b.apply(this,arguments)}}(),J=[{title:"ID",dataIndex:"id",key:"id",width:60},{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u90AE\u7BB1",dataIndex:"email",key:"email"},{title:"\u90E8\u95E8",dataIndex:"department",key:"department"},{title:"\u804C\u4F4D",dataIndex:"position",key:"position"},{title:"\u72B6\u6001",dataIndex:"status",key:"status",render:function(m){return m===1?"\u542F\u7528":"\u7981\u7528"}}];return t.createElement("div",{style:{padding:"20px"}},t.createElement(x,{title:"Mock API \u6D4B\u8BD5",style:{marginBottom:20}},t.createElement(U,{wrap:!0},t.createElement(s,{type:"primary",loading:R,onClick:w},"\u6D4B\u8BD5\u83B7\u53D6\u7528\u6237\u5217\u8868"),t.createElement(s,{loading:R,onClick:$},"\u6D4B\u8BD5\u521B\u5EFA\u7528\u6237"),t.createElement(s,{loading:R,onClick:z},"\u6D4B\u8BD5\u767B\u5F55 (admin/123456)"),t.createElement(s,{loading:R,onClick:H},"\u6D4B\u8BD5\u6811\u5F62\u6570\u636E"))),B.length>0&&t.createElement(x,{title:"\u7528\u6237\u6570\u636E",style:{marginBottom:20}},t.createElement(k,{columns:J,dataSource:B,rowKey:"id",pagination:!1,size:"small"})),K&&t.createElement(x,{title:"API \u54CD\u5E94\u6570\u636E"},t.createElement("pre",{style:{background:"#f5f5f5",padding:"10px",borderRadius:"4px",overflow:"auto",maxHeight:"400px"}},JSON.stringify(K,null,2))))}});case 14:case"end":return C.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-mock-test-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Card, message, Space, Table } from 'antd';

export default () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);

  // \u6D4B\u8BD5\u83B7\u53D6\u7528\u6237\u5217\u8868
  const testGetUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users?current=1&pageSize=5');
      const data = await response.json();
      
      if (data.success) {
        setUserData(data.data.list);
        setApiResponse(data);
        message.success('\u83B7\u53D6\u7528\u6237\u5217\u8868\u6210\u529F');
        console.log('\u7528\u6237\u6570\u636E:', data);
      } else {
        message.error('\u83B7\u53D6\u7528\u6237\u5217\u8868\u5931\u8D25');
      }
    } catch (error) {
      console.error('API \u8C03\u7528\u5931\u8D25:', error);
      message.error('API \u8C03\u7528\u5931\u8D25');
    } finally {
      setLoading(false);
    }
  };

  // \u6D4B\u8BD5\u521B\u5EFA\u7528\u6237
  const testCreateUser = async () => {
    setLoading(true);
    try {
      const newUser = {
        name: '\u6D4B\u8BD5\u7528\u6237' + Date.now(),
        email: \`test\${Date.now()}@example.com\`,
        phone: '13800138000',
        department: '\u6280\u672F\u90E8',
        position: '\u524D\u7AEF\u5DE5\u7A0B\u5E08',
        status: 1
      };

      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      
      const data = await response.json();
      
      if (data.success) {
        message.success('\u521B\u5EFA\u7528\u6237\u6210\u529F');
        console.log('\u521B\u5EFA\u7ED3\u679C:', data);
        // \u91CD\u65B0\u83B7\u53D6\u7528\u6237\u5217\u8868
        testGetUsers();
      } else {
        message.error('\u521B\u5EFA\u7528\u6237\u5931\u8D25: ' + data.msg);
      }
    } catch (error) {
      console.error('\u521B\u5EFA\u7528\u6237\u5931\u8D25:', error);
      message.error('\u521B\u5EFA\u7528\u6237\u5931\u8D25');
    } finally {
      setLoading(false);
    }
  };

  // \u6D4B\u8BD5\u767B\u5F55
  const testLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          password: '123456'
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        message.success('\u767B\u5F55\u6210\u529F');
        console.log('\u767B\u5F55\u7ED3\u679C:', data);
        setApiResponse(data);
      } else {
        message.error('\u767B\u5F55\u5931\u8D25: ' + data.msg);
      }
    } catch (error) {
      console.error('\u767B\u5F55\u5931\u8D25:', error);
      message.error('\u767B\u5F55\u5931\u8D25');
    } finally {
      setLoading(false);
    }
  };

  // \u6D4B\u8BD5\u6811\u5F62\u6570\u636E
  const testTreeData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/tree');
      const data = await response.json();
      
      if (data.success) {
        message.success('\u83B7\u53D6\u6811\u5F62\u6570\u636E\u6210\u529F');
        console.log('\u6811\u5F62\u6570\u636E:', data);
        setApiResponse(data);
      } else {
        message.error('\u83B7\u53D6\u6811\u5F62\u6570\u636E\u5931\u8D25');
      }
    } catch (error) {
      console.error('\u83B7\u53D6\u6811\u5F62\u6570\u636E\u5931\u8D25:', error);
      message.error('\u83B7\u53D6\u6811\u5F62\u6570\u636E\u5931\u8D25');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u90AE\u7BB1',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '\u90E8\u95E8',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '\u804C\u4F4D',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: '\u72B6\u6001',
      dataIndex: 'status',
      key: 'status',
      render: (status) => status === 1 ? '\u542F\u7528' : '\u7981\u7528',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Mock API \u6D4B\u8BD5" style={{ marginBottom: 20 }}>
        <Space wrap>
          <Button 
            type="primary" 
            loading={loading} 
            onClick={testGetUsers}
          >
            \u6D4B\u8BD5\u83B7\u53D6\u7528\u6237\u5217\u8868
          </Button>
          <Button 
            loading={loading} 
            onClick={testCreateUser}
          >
            \u6D4B\u8BD5\u521B\u5EFA\u7528\u6237
          </Button>
          <Button 
            loading={loading} 
            onClick={testLogin}
          >
            \u6D4B\u8BD5\u767B\u5F55 (admin/123456)
          </Button>
          <Button 
            loading={loading} 
            onClick={testTreeData}
          >
            \u6D4B\u8BD5\u6811\u5F62\u6570\u636E
          </Button>
        </Space>
      </Card>

      {userData.length > 0 && (
        <Card title="\u7528\u6237\u6570\u636E" style={{ marginBottom: 20 }}>
          <Table 
            columns={columns} 
            dataSource={userData} 
            rowKey="id"
            pagination={false}
            size="small"
          />
        </Card>
      )}

      {apiResponse && (
        <Card title="API \u54CD\u5E94\u6570\u636E">
          <pre style={{ 
            background: '#f5f5f5', 
            padding: '10px', 
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '400px'
          }}>
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </Card>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:r||(r=e.t(E,2)),antd:T},renderOpts:{compile:function(){var i=h()(d()().mark(function t(){var u,I=arguments;return d()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(250),e.e(764)]).then(e.bind(e,90250));case 2:return x.abrupt("return",(u=x.sent).default.apply(u,I));case 3:case"end":return x.stop()}},t)}));function o(){return i.apply(this,arguments)}return o}()}}}},72143:function(g,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Durians \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design Pro \u7684\u4F01\u4E1A\u7EA7\u4F4E\u4EE3\u7801\u7EC4\u4EF6\u5E93\uFF0C\u65E8\u5728\u4E3A\u4F01\u4E1A\u7EA7\u5E94\u7528\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u7EA7\u7EC4\u4EF6\uFF0C\u51CF\u5C11\u91CD\u590D\u5F00\u53D1\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002",paraId:0,tocIndex:2},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:3},{value:"\uFF1A\u63D0\u4F9B\u5B8C\u6574\u7684 CRUD \u529F\u80FD\u7EC4\u4EF6\uFF0C\u65E0\u9700\u91CD\u590D\u5F00\u53D1",paraId:1,tocIndex:3},{value:"\u4F01\u4E1A\u7EA7",paraId:1,tocIndex:3},{value:"\uFF1A\u57FA\u4E8E Ant Design Pro\uFF0C\u6EE1\u8DB3\u4F01\u4E1A\u7EA7\u5E94\u7528\u9700\u6C42",paraId:1,tocIndex:3},{value:"\u4F4E\u4EE3\u7801",paraId:1,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u914D\u7F6E\u5316\u7684\u65B9\u5F0F\u5FEB\u901F\u6784\u5EFA\u590D\u6742\u529F\u80FD",paraId:1,tocIndex:3},{value:"\u7C7B\u578B\u5B89\u5168",paraId:1,tocIndex:3},{value:"\uFF1A\u5B8C\u6574\u7684 TypeScript \u652F\u6301\uFF0C\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u4FDD\u969C",paraId:1,tocIndex:3},{value:"\u53EF\u6269\u5C55",paraId:1,tocIndex:3},{value:"\uFF1A\u7075\u6D3B\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6269\u5C55",paraId:1,tocIndex:3},{value:"\u7EC4\u4EF6",paraId:2,tocIndex:5},{value:"\u4E3B\u8981\u529F\u80FD",paraId:2,tocIndex:5},{value:"\u9002\u7528\u573A\u666F",paraId:2,tocIndex:5},{value:"\u6838\u5FC3\u7279\u6027",paraId:2,tocIndex:5},{value:"TablePro",paraId:2,tocIndex:5},{value:"\u6570\u636E\u8868\u683C\u5C55\u793A\u4E0E\u64CD\u4F5C",paraId:2,tocIndex:5},{value:"\u6570\u636E\u7BA1\u7406\u9875\u9762",paraId:2,tocIndex:5},{value:"CRUD\u3001\u5206\u9875\u3001\u641C\u7D22\u3001\u6392\u5E8F",paraId:2,tocIndex:5},{value:"FormPro",paraId:2,tocIndex:5},{value:"\u8868\u5355\u6570\u636E\u5F55\u5165",paraId:2,tocIndex:5},{value:"\u65B0\u589E/\u7F16\u8F91\u6570\u636E",paraId:2,tocIndex:5},{value:"\u6A21\u6001\u6846/\u62BD\u5C49\u3001\u9A8C\u8BC1\u3001\u8054\u52A8",paraId:2,tocIndex:5},{value:"ModalPro",paraId:2,tocIndex:5},{value:"\u5F39\u7A97\u4EA4\u4E92",paraId:2,tocIndex:5},{value:"\u786E\u8BA4\u64CD\u4F5C\u3001\u4FE1\u606F\u5C55\u793A",paraId:2,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u56DE\u8C03\u63A7\u5236",paraId:2,tocIndex:5},{value:"LoginPro",paraId:2,tocIndex:5},{value:"\u7528\u6237\u8BA4\u8BC1",paraId:2,tocIndex:5},{value:"\u767B\u5F55\u9875\u9762",paraId:2,tocIndex:5},{value:"\u591A\u79CD\u767B\u5F55\u65B9\u5F0F\u3001\u52A0\u5BC6",paraId:2,tocIndex:5},{value:"TreePro",paraId:2,tocIndex:5},{value:"\u6811\u5F62\u6570\u636E\u5C55\u793A",paraId:2,tocIndex:5},{value:"\u7EC4\u7EC7\u67B6\u6784\u3001\u5206\u7C7B\u7BA1\u7406",paraId:2,tocIndex:5},{value:"\u61D2\u52A0\u8F7D\u3001CRUD\u3001\u9009\u62E9",paraId:2,tocIndex:5},{value:"React 18",paraId:3,tocIndex:8},{value:": \u73B0\u4EE3\u5316\u7684\u524D\u7AEF\u6846\u67B6\uFF0C\u652F\u6301\u5E76\u53D1\u7279\u6027",paraId:3,tocIndex:8},{value:"TypeScript",paraId:3,tocIndex:8},{value:": \u7C7B\u578B\u5B89\u5168\uFF0C\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\u548C\u4EE3\u7801\u8D28\u91CF",paraId:3,tocIndex:8},{value:"Ant Design 5.x",paraId:3,tocIndex:8},{value:": \u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C\u7EC4\u4EF6\u5E93",paraId:3,tocIndex:8},{value:"Ant Design Pro Components",paraId:3,tocIndex:8},{value:": \u9AD8\u7EA7\u4E1A\u52A1\u7EC4\u4EF6",paraId:3,tocIndex:8},{value:"Father 4.x",paraId:4,tocIndex:9},{value:": \u57FA\u4E8E Rollup \u7684\u7EC4\u4EF6\u5E93\u6784\u5EFA\u5DE5\u5177",paraId:4,tocIndex:9},{value:"Dumi 2.x",paraId:4,tocIndex:9},{value:": \u7EC4\u4EF6\u5E93\u6587\u6863\u751F\u6210\u5DE5\u5177",paraId:4,tocIndex:9},{value:"Jest",paraId:4,tocIndex:9},{value:": \u5355\u5143\u6D4B\u8BD5\u6846\u67B6",paraId:4,tocIndex:9},{value:"ESLint + Prettier",paraId:4,tocIndex:9},{value:": \u4EE3\u7801\u8D28\u91CF\u548C\u683C\u5F0F\u5316\u5DE5\u5177",paraId:4,tocIndex:9},{value:"\u6BCF\u4E2A\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u4E00\u4E2A\u7279\u5B9A\u7684\u529F\u80FD\u9886\u57DF\uFF0C\u4FDD\u6301\u7EC4\u4EF6\u7684\u7B80\u6D01\u548C\u4E13\u6CE8\u3002",paraId:5,tocIndex:11},{value:"\u7EC4\u4EF6\u5BF9\u6269\u5C55\u5F00\u653E\uFF0C\u5BF9\u4FEE\u6539\u5C01\u95ED\u3002\u901A\u8FC7 props \u914D\u7F6E\u5B9E\u73B0\u529F\u80FD\u6269\u5C55\u3002",paraId:6,tocIndex:12},{value:"\u9AD8\u5C42\u6A21\u5757\u4E0D\u4F9D\u8D56\u4F4E\u5C42\u6A21\u5757\uFF0C\u90FD\u4F9D\u8D56\u4E8E\u62BD\u8C61\u3002\u901A\u8FC7\u63A5\u53E3\u548C\u7C7B\u578B\u5B9A\u4E49\u5B9E\u73B0\u89E3\u8026\u3002",paraId:7,tocIndex:13},{value:"\u7EC4\u4EF6\u7684\u884C\u4E3A\u5E94\u8BE5\u7B26\u5408\u7528\u6237\u7684\u76F4\u89C9\u548C\u9884\u671F\uFF0CAPI \u8BBE\u8BA1\u7B80\u6D01\u660E\u4E86\u3002",paraId:8,tocIndex:14},{value:"\u63D0\u4F9B\u5408\u7406\u7684\u9ED8\u8BA4\u503C\uFF0C\u652F\u6301\u9010\u6B65\u914D\u7F6E\u548C\u5B9A\u5236\u3002",paraId:9,tocIndex:15},{value:"\u4F7F\u7528 ",paraId:10,tocIndex:17},{value:"React.memo",paraId:10,tocIndex:17},{value:" \u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u6E32\u67D3",paraId:10,tocIndex:17},{value:"\u5408\u7406\u4F7F\u7528 ",paraId:10,tocIndex:17},{value:"useCallback",paraId:10,tocIndex:17},{value:" \u548C ",paraId:10,tocIndex:17},{value:"useMemo",paraId:10,tocIndex:17},{value:"\u907F\u514D\u5728\u6E32\u67D3\u51FD\u6570\u4E2D\u521B\u5EFA\u5BF9\u8C61",paraId:10,tocIndex:17},{value:"\u5B9E\u73B0\u9632\u6296\u548C\u8282\u6D41\u673A\u5236",paraId:11,tocIndex:18},{value:"\u652F\u6301\u865A\u62DF\u6EDA\u52A8\uFF08\u5927\u6570\u636E\u91CF\u573A\u666F\uFF09",paraId:11,tocIndex:18},{value:"\u667A\u80FD\u5206\u9875\u548C\u61D2\u52A0\u8F7D",paraId:11,tocIndex:18},{value:"\u8BF7\u6C42\u53BB\u91CD\u548C\u7F13\u5B58",paraId:12,tocIndex:19},{value:"\u9519\u8BEF\u91CD\u8BD5\u673A\u5236",paraId:12,tocIndex:19},{value:"\u8BF7\u6C42\u53D6\u6D88\u652F\u6301",paraId:12,tocIndex:19},{value:"\u652F\u6301\u901A\u8FC7\u63D2\u4EF6\u6269\u5C55\u7EC4\u4EF6\u529F\u80FD\uFF0C\u4E0D\u4FEE\u6539\u6838\u5FC3\u4EE3\u7801\u3002",paraId:13,tocIndex:21},{value:"\u652F\u6301\u4E3B\u9898\u5B9A\u5236\u548C\u52A8\u6001\u5207\u6362\u3002",paraId:14,tocIndex:22},{value:"\u5185\u7F6E\u56FD\u9645\u5316\u673A\u5236\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u3002",paraId:15,tocIndex:23},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u6EE1\u8DB3\u7279\u6B8A\u9700\u6C42\u3002",paraId:16,tocIndex:24},{value:"TypeScript \u7C7B\u578B\u68C0\u67E5",paraId:17,tocIndex:26},{value:"ESLint \u4EE3\u7801\u89C4\u8303\u68C0\u67E5",paraId:17,tocIndex:26},{value:"Prettier \u4EE3\u7801\u683C\u5F0F\u5316",paraId:17,tocIndex:26},{value:"Husky Git Hooks",paraId:17,tocIndex:26},{value:"\u5355\u5143\u6D4B\u8BD5\uFF1AJest + React Testing Library",paraId:18,tocIndex:27},{value:"\u96C6\u6210\u6D4B\u8BD5\uFF1A\u7EC4\u4EF6\u95F4\u4EA4\u4E92\u6D4B\u8BD5",paraId:18,tocIndex:27},{value:"E2E \u6D4B\u8BD5\uFF1A\u7528\u6237\u573A\u666F\u6D4B\u8BD5",paraId:18,tocIndex:27},{value:"\u89C6\u89C9\u56DE\u5F52\u6D4B\u8BD5\uFF1AUI \u4E00\u81F4\u6027\u6D4B\u8BD5",paraId:18,tocIndex:27},{value:"API \u6587\u6863\uFF1A\u81EA\u52A8\u751F\u6210\u7684\u63A5\u53E3\u6587\u6863",paraId:19,tocIndex:28},{value:"\u4F7F\u7528\u6307\u5357\uFF1A\u8BE6\u7EC6\u7684\u4F7F\u7528\u8BF4\u660E",paraId:19,tocIndex:28},{value:"\u6700\u4F73\u5B9E\u8DF5\uFF1A\u5F00\u53D1\u5EFA\u8BAE\u548C\u89C4\u8303",paraId:19,tocIndex:28},{value:"\u53D8\u66F4\u65E5\u5FD7\uFF1A\u7248\u672C\u66F4\u65B0\u8BB0\u5F55",paraId:19,tocIndex:28},{value:"\u5B8C\u5584\u73B0\u6709\u7EC4\u4EF6\u529F\u80FD",paraId:20,tocIndex:30},{value:"\u63D0\u5347\u6D4B\u8BD5\u8986\u76D6\u7387",paraId:20,tocIndex:30},{value:"\u4F18\u5316\u6027\u80FD\u548C\u4F53\u9A8C",paraId:20,tocIndex:30},{value:"\u6269\u5C55\u7EC4\u4EF6\u5E93\u89C4\u6A21",paraId:21,tocIndex:31},{value:"\u652F\u6301\u66F4\u591A\u4E1A\u52A1\u573A\u666F",paraId:21,tocIndex:31},{value:"\u5EFA\u7ACB\u8BBE\u8BA1\u7CFB\u7EDF",paraId:21,tocIndex:31},{value:"\u6784\u5EFA\u5B8C\u6574\u7684\u4F4E\u4EE3\u7801\u5E73\u53F0",paraId:22,tocIndex:32},{value:"\u652F\u6301\u53EF\u89C6\u5316\u914D\u7F6E",paraId:22,tocIndex:32},{value:"\u5EFA\u7ACB\u751F\u6001\u7CFB\u7EDF",paraId:22,tocIndex:32},{value:"\u786E\u4FDD\u4F60\u7684\u5F00\u53D1\u73AF\u5883\u6EE1\u8DB3\u4EE5\u4E0B\u8981\u6C42\uFF1A",paraId:23,tocIndex:34},{value:"Node.js",paraId:24,tocIndex:34},{value:": >= 16.0.0",paraId:24,tocIndex:34},{value:"npm",paraId:24,tocIndex:34},{value:": >= 7.0.0 \u6216 ",paraId:24,tocIndex:34},{value:"yarn",paraId:24,tocIndex:34},{value:": >= 1.22.0",paraId:24,tocIndex:34},{value:"Git",paraId:24,tocIndex:34},{value:": \u6700\u65B0\u7248\u672C",paraId:24,tocIndex:34},{value:`# \u514B\u9686\u9879\u76EE
git clone https://github.com/aiyuekuang/durians.git
cd durians

# \u5B89\u88C5\u4F9D\u8D56
npm install

# \u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668
npm run dev
`,paraId:25,tocIndex:35},{value:`# \u521B\u5EFA\u7EC4\u4EF6\u76EE\u5F55
mkdir src/components/YourComponent
cd src/components/YourComponent

# \u521B\u5EFA\u5FC5\u8981\u6587\u4EF6
touch index.tsx index.md index.less
`,paraId:26,tocIndex:37},{value:`// src/components/YourComponent/index.tsx
import React, { memo, useCallback, useMemo } from 'react';
import type { YourComponentProps } from '../../types';

const YourComponent: React.FC<YourComponentProps> = memo(({
  // props \u89E3\u6784
}) => {
  // \u4F7F\u7528 useCallback \u4F18\u5316\u56DE\u8C03\u51FD\u6570
  const handleClick = useCallback(() => {
    // \u5904\u7406\u903B\u8F91
  }, []);

  // \u4F7F\u7528 useMemo \u4F18\u5316\u8BA1\u7B97
  const computedValue = useMemo(() => {
    // \u8BA1\u7B97\u903B\u8F91
  }, []);

  return (
    <div className="durians-your-component">
      {/* \u7EC4\u4EF6 JSX */}
    </div>
  );
});

YourComponent.displayName = 'YourComponent';

export default YourComponent;
`,paraId:27,tocIndex:38},{value:`// src/types/index.ts
export interface YourComponentProps {
  /** \u7EC4\u4EF6\u5C5E\u6027\u63CF\u8FF0 */
  prop1?: string;
  /** \u56DE\u8C03\u51FD\u6570 */
  onCallback?: (value: any) => void;
}
`,paraId:28,tocIndex:39},{value:`// \u2705 \u63A8\u8350\uFF1A\u4F7F\u7528 memo \u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u6E32\u67D3
const Component = memo<ComponentProps>(({ data, onCallback }) => {
  // \u7F13\u5B58\u56DE\u8C03\u51FD\u6570
  const handleClick = useCallback(() => {
    onCallback?.();
  }, [onCallback]);

  // \u7F13\u5B58\u8BA1\u7B97\u7ED3\u679C
  const processedData = useMemo(() => {
    return data.map(item => ({ ...item, processed: true }));
  }, [data]);

  return <div>{/* \u7EC4\u4EF6\u5185\u5BB9 */}</div>;
});
`,paraId:29,tocIndex:41},{value:`// \u7EDF\u4E00\u9519\u8BEF\u5904\u7406
import { useErrorHandler } from '../hooks/useErrorHandler';

const Component = () => {
  const { error, handleError, clearError } = useErrorHandler();

  const handleSubmit = async (data: any) => {
    try {
      await submitData(data);
    } catch (err) {
      handleError(err, '\u63D0\u4EA4\u5931\u8D25');
    }
  };

  return (
    <div>
      {error && (
        <Alert
          message={error}
          type="error"
          closable
          onClose={clearError}
        />
      )}
      {/* \u7EC4\u4EF6\u5185\u5BB9 */}
    </div>
  );
};
`,paraId:30,tocIndex:42},{value:`// \u4E25\u683C\u7684\u7C7B\u578B\u5B9A\u4E49
interface StrictComponentProps<T = any> {
  data: T[];
  columns: ColumnConfig<T>[];
  onRowClick?: (record: T, index: number) => void;
}

// \u6CDB\u578B\u7EC4\u4EF6
const TableComponent = <T extends Record<string, any>>(
  props: StrictComponentProps<T>
) => {
  // \u7EC4\u4EF6\u5B9E\u73B0
};
`,paraId:31,tocIndex:43},{value:"\u7EC4\u4EF6\u540D",paraId:32,tocIndex:45},{value:": \u4F7F\u7528 PascalCase\uFF0C\u5982 ",paraId:32,tocIndex:45},{value:"TablePro",paraId:32,tocIndex:45},{value:"\u6587\u4EF6\u540D",paraId:32,tocIndex:45},{value:": \u7EC4\u4EF6\u6587\u4EF6\u4F7F\u7528 ",paraId:32,tocIndex:45},{value:"index.tsx",paraId:32,tocIndex:45},{value:"\u7C7B\u578B\u540D",paraId:32,tocIndex:45},{value:": \u7EC4\u4EF6 Props \u4F7F\u7528 ",paraId:32,tocIndex:45},{value:"ComponentNameProps",paraId:32,tocIndex:45},{value:"\u6837\u5F0F\u7C7B",paraId:32,tocIndex:45},{value:": \u4F7F\u7528 BEM \u547D\u540D\u89C4\u8303",paraId:32,tocIndex:45},{value:`src/components/YourComponent/
\u251C\u2500\u2500 index.tsx              # \u4E3B\u7EC4\u4EF6\u6587\u4EF6
\u251C\u2500\u2500 index.md               # \u7EC4\u4EF6\u6587\u6863
\u251C\u2500\u2500 index.less             # \u7EC4\u4EF6\u6837\u5F0F
\u251C\u2500\u2500 hooks/                 # \u81EA\u5B9A\u4E49 Hooks
\u251C\u2500\u2500 components/            # \u5B50\u7EC4\u4EF6
\u251C\u2500\u2500 types.ts               # \u7C7B\u578B\u5B9A\u4E49
\u251C\u2500\u2500 constants.ts           # \u5E38\u91CF\u5B9A\u4E49
\u251C\u2500\u2500 utils.ts               # \u5DE5\u5177\u51FD\u6570
\u2514\u2500\u2500 __tests__/             # \u6D4B\u8BD5\u6587\u4EF6
`,paraId:33,tocIndex:46},{value:`# Commit Message \u683C\u5F0F
<type>[optional scope]: <description>

# \u7C7B\u578B\u8BF4\u660E
feat: \u65B0\u529F\u80FD
fix: \u4FEE\u590D bug
docs: \u6587\u6863\u66F4\u65B0
style: \u4EE3\u7801\u683C\u5F0F\u8C03\u6574
refactor: \u4EE3\u7801\u91CD\u6784
test: \u6D4B\u8BD5\u76F8\u5173
chore: \u6784\u5EFA\u5DE5\u5177\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8

# \u793A\u4F8B
git commit -m "feat(TablePro): \u6DFB\u52A0\u865A\u62DF\u6EDA\u52A8\u529F\u80FD"
git commit -m "fix(FormPro): \u4FEE\u590D\u8868\u5355\u9A8C\u8BC1\u95EE\u9898"
`,paraId:34,tocIndex:47},{value:`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Component from '../index';

describe('Component', () => {
  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
`,paraId:35,tocIndex:49},{value:`# \u8FD0\u884C\u6240\u6709\u6D4B\u8BD5
npm run test

# \u76D1\u542C\u6A21\u5F0F
npm run test:watch

# \u751F\u6210\u8986\u76D6\u7387\u62A5\u544A
npm run test:coverage
`,paraId:36,tocIndex:50},{value:`# \u6784\u5EFA\u7EC4\u4EF6\u5E93
npm run build

# \u6784\u5EFA\u6587\u6863
npm run docs:build

# \u53D1\u5E03\u5230 npm
npm publish
`,paraId:37,tocIndex:51},{value:"\u9879\u76EE\u4F7F\u7528 ESLint \u8FDB\u884C\u4EE3\u7801\u8D28\u91CF\u68C0\u67E5\uFF1A",paraId:38,tocIndex:53},{value:`# \u68C0\u67E5\u4EE3\u7801
npm run lint

# \u81EA\u52A8\u4FEE\u590D
npm run lint:fix
`,paraId:39,tocIndex:53},{value:`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "dist"
  }
}
`,paraId:40,tocIndex:54},{value:"\u5B89\u5168\u5347\u7EA7",paraId:41,tocIndex:56},{value:"\uFF1A\u65E0\u7834\u574F\u6027\u53D8\u66F4\u7684\u7248\u672C",paraId:41,tocIndex:56},{value:"\u529F\u80FD\u5347\u7EA7",paraId:41,tocIndex:56},{value:"\uFF1A\u65B0\u589E\u529F\u80FD\u7684\u7248\u672C",paraId:41,tocIndex:56},{value:"\u4E3B\u8981\u5347\u7EA7",paraId:41,tocIndex:56},{value:"\uFF1A\u53EF\u80FD\u6709\u7834\u574F\u6027\u53D8\u66F4\u7684\u7248\u672C",paraId:41,tocIndex:56},{value:`# \u68C0\u67E5\u8FC7\u65F6\u7684\u4F9D\u8D56
npm outdated

# \u66F4\u65B0\u4F9D\u8D56
npm update

# \u68C0\u67E5\u5B89\u5168\u6F0F\u6D1E
npm audit
`,paraId:42,tocIndex:57},{value:"React \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"TypeScript \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"Ant Design \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"Ant Design Pro \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"React \u6027\u80FD\u4F18\u5316",paraId:44,tocIndex:60},{value:"TypeScript \u6700\u4F73\u5B9E\u8DF5",paraId:44,tocIndex:60},{value:"\u7EC4\u4EF6\u5E93\u8BBE\u8BA1\u539F\u5219",paraId:44,tocIndex:60},{value:"Fork \u9879\u76EE",paraId:45,tocIndex:62},{value:"\u521B\u5EFA\u529F\u80FD\u5206\u652F",paraId:45,tocIndex:62},{value:"\u63D0\u4EA4\u4EE3\u7801",paraId:45,tocIndex:62},{value:"\u521B\u5EFA Pull Request",paraId:45,tocIndex:62},{value:"\u4EE3\u7801\u5BA1\u67E5",paraId:45,tocIndex:62},{value:"\u5408\u5E76\u4EE3\u7801",paraId:45,tocIndex:62},{value:"\u4EE3\u7801\u8D28\u91CF\u548C\u89C4\u8303",paraId:46,tocIndex:63},{value:"\u6D4B\u8BD5\u8986\u76D6\u7387",paraId:46,tocIndex:63},{value:"\u6587\u6863\u5B8C\u6574\u6027",paraId:46,tocIndex:63},{value:"\u6027\u80FD\u5F71\u54CD",paraId:46,tocIndex:63},{value:"\u5411\u540E\u517C\u5BB9\u6027",paraId:46,tocIndex:63},{value:"\u6B22\u8FCE\u6240\u6709\u5F62\u5F0F\u7684\u8D21\u732E\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A",paraId:47,tocIndex:63},{value:"\u65B0\u529F\u80FD\u5F00\u53D1",paraId:48,tocIndex:63},{value:"Bug \u4FEE\u590D",paraId:48,tocIndex:63},{value:"\u6587\u6863\u6539\u8FDB",paraId:48,tocIndex:63},{value:"\u6D4B\u8BD5\u7528\u4F8B",paraId:48,tocIndex:63},{value:"\u6027\u80FD\u4F18\u5316",paraId:48,tocIndex:63}]},40717:function(g,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u6240\u6709\u91CD\u8981\u7684\u9879\u76EE\u53D8\u66F4\u90FD\u4F1A\u8BB0\u5F55\u5728\u6B64\u6587\u4EF6\u4E2D\u3002",paraId:0,tocIndex:0},{value:"\u672C\u9879\u76EE\u9075\u5FAA ",paraId:1,tocIndex:0},{value:"\u8BED\u4E49\u5316\u7248\u672C",paraId:1,tocIndex:0},{value:" \u89C4\u8303\u3002",paraId:1,tocIndex:0},{value:"\u5B8C\u6574\u7684 TypeScript \u7C7B\u578B\u5B9A\u4E49\u7CFB\u7EDF",paraId:2,tocIndex:2},{value:"\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u673A\u5236 (",paraId:2,tocIndex:2},{value:"useErrorHandler",paraId:2,tocIndex:2},{value:", ",paraId:2,tocIndex:2},{value:"useAsyncOperation",paraId:2,tocIndex:2},{value:")",paraId:2,tocIndex:2},{value:"\u6027\u80FD\u4F18\u5316\u529F\u80FD\uFF08\u865A\u62DF\u6EDA\u52A8\u3001\u7F13\u5B58\u3001\u91CD\u8BD5\u673A\u5236\uFF09",paraId:2,tocIndex:2},{value:"\u53EF\u8BBF\u95EE\u6027\u589E\u5F3A\uFF08\u952E\u76D8\u5BFC\u822A\u3001ARIA \u652F\u6301\uFF09",paraId:2,tocIndex:2},{value:"\u56FD\u9645\u5316\u652F\u6301\u6846\u67B6",paraId:2,tocIndex:2},{value:"\u8C03\u8BD5\u548C\u6027\u80FD\u76D1\u63A7\u529F\u80FD",paraId:2,tocIndex:2},{value:"\u6240\u6709\u7EC4\u4EF6\u4F7F\u7528 ",paraId:3,tocIndex:3},{value:"React.memo",paraId:3,tocIndex:3},{value:" \u8FDB\u884C\u6027\u80FD\u4F18\u5316",paraId:3,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:3},{value:"useCallback",paraId:3,tocIndex:3},{value:" \u548C ",paraId:3,tocIndex:3},{value:"useMemo",paraId:3,tocIndex:3},{value:" \u4F18\u5316\u6E32\u67D3\u6027\u80FD",paraId:3,tocIndex:3},{value:"\u91CD\u6784\u7EC4\u4EF6\u67B6\u6784\uFF0C\u6D88\u9664\u5FAA\u73AF\u4F9D\u8D56",paraId:3,tocIndex:3},{value:"\u6539\u8FDB\u9519\u8BEF\u5904\u7406\u548C\u8FB9\u754C\u6761\u4EF6\u5904\u7406",paraId:3,tocIndex:3},{value:"\u4F18\u5316\u6784\u5EFA\u914D\u7F6E\u548C\u5F00\u53D1\u5DE5\u5177\u94FE",paraId:3,tocIndex:3},{value:"\u65B0\u589E\u67B6\u6784\u8BBE\u8BA1\u6587\u6863",paraId:4,tocIndex:4},{value:"\u65B0\u589E\u5F00\u53D1\u6307\u5357\u548C\u6700\u4F73\u5B9E\u8DF5",paraId:4,tocIndex:4},{value:"\u65B0\u589E\u529F\u80FD\u589E\u5F3A\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u65B0\u589E\u5347\u7EA7\u6307\u5357",paraId:4,tocIndex:4},{value:"\u5B8C\u5584 API \u6587\u6863\u548C\u4F7F\u7528\u793A\u4F8B",paraId:4,tocIndex:4},{value:"\u4FEE\u590D TablePro \u7EC4\u4EF6\u7684\u5FAA\u73AF\u4F9D\u8D56\u95EE\u9898",paraId:5,tocIndex:5},{value:"\u4FEE\u590D\u7C7B\u578B\u5B89\u5168\u95EE\u9898",paraId:5,tocIndex:5},{value:"\u4FEE\u590D FormPro \u7EC4\u4EF6\u7684\u8BED\u6CD5\u9519\u8BEF",paraId:5,tocIndex:5},{value:"\u4FEE\u590D TreePro \u7EC4\u4EF6\u7684\u91CD\u590D\u58F0\u660E\u95EE\u9898",paraId:5,tocIndex:5},{value:"\u4FEE\u590D LoginPro \u7EC4\u4EF6\u7684\u6A21\u5757\u5BFC\u5165\u9519\u8BEF",paraId:5,tocIndex:5},{value:"\u65E0\u7834\u574F\u6027\u53D8\u66F4\uFF0C\u4FDD\u6301 100% \u5411\u540E\u517C\u5BB9",paraId:6,tocIndex:6},{value:"\u6539\u8FDB\u5BC6\u7801\u52A0\u5BC6\u51FD\u6570\u7684\u9519\u8BEF\u5904\u7406",paraId:7,tocIndex:7},{value:"\u6DFB\u52A0\u8F93\u5165\u9A8C\u8BC1\u548C\u5B89\u5168\u68C0\u67E5",paraId:7,tocIndex:7},{value:"\u66F4\u65B0\u4F9D\u8D56\u5305\u4EE5\u4FEE\u590D\u5B89\u5168\u6F0F\u6D1E",paraId:7,tocIndex:7},{value:"TablePro \u9AD8\u7EA7\u8868\u683C\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"FormPro \u9AD8\u7EA7\u8868\u5355\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"ModalPro \u9AD8\u7EA7\u5F39\u7A97\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"LoginPro \u767B\u5F55\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"TreePro \u6811\u5F62\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"\u57FA\u4E8E Ant Design Pro \u7684\u7EC4\u4EF6\u5E93",paraId:9,tocIndex:10},{value:"\u652F\u6301\u5B8C\u6574\u7684 CRUD \u64CD\u4F5C",paraId:9,tocIndex:10},{value:"\u54CD\u5E94\u5F0F\u8BBE\u8BA1",paraId:9,tocIndex:10},{value:"\u4E3B\u9898\u5B9A\u5236\u652F\u6301",paraId:9,tocIndex:10},{value:"\u5F00\u7BB1\u5373\u7528\u7684\u4F01\u4E1A\u7EA7\u7EC4\u4EF6",paraId:9,tocIndex:10},{value:"React 18",paraId:10,tocIndex:11},{value:"TypeScript",paraId:10,tocIndex:11},{value:"Ant Design 5.x",paraId:10,tocIndex:11},{value:"Ant Design Pro Components",paraId:10,tocIndex:11},{value:"Father 4.x (\u6784\u5EFA\u5DE5\u5177)",paraId:10,tocIndex:11},{value:"Dumi 2.x (\u6587\u6863\u5DE5\u5177)",paraId:10,tocIndex:11},{value:"\u4E3B\u7248\u672C\u53F7",paraId:11,tocIndex:13},{value:"\uFF1A\u4E0D\u517C\u5BB9\u7684 API \u4FEE\u6539",paraId:11,tocIndex:13},{value:"\u6B21\u7248\u672C\u53F7",paraId:11,tocIndex:13},{value:"\uFF1A\u5411\u4E0B\u517C\u5BB9\u7684\u529F\u80FD\u6027\u65B0\u589E",paraId:11,tocIndex:13},{value:"\u4FEE\u8BA2\u53F7",paraId:11,tocIndex:13},{value:"\uFF1A\u5411\u4E0B\u517C\u5BB9\u7684\u95EE\u9898\u4FEE\u6B63",paraId:11,tocIndex:13},{value:"\u2728 \u65B0\u589E\u529F\u80FD",paraId:12,tocIndex:14},{value:"\u{1F680} \u6539\u8FDB\u4F18\u5316",paraId:12,tocIndex:14},{value:"\u{1F4DA} \u6587\u6863\u5B8C\u5584",paraId:12,tocIndex:14},{value:"\u{1F41B} \u4FEE\u590D\u95EE\u9898",paraId:12,tocIndex:14},{value:"\u26A0\uFE0F \u7834\u574F\u6027\u53D8\u66F4",paraId:12,tocIndex:14},{value:"\u{1F512} \u5B89\u5168\u66F4\u65B0",paraId:12,tocIndex:14},{value:"\u{1F3AF} \u7279\u6027",paraId:12,tocIndex:14},{value:"\u{1F6E0}\uFE0F \u6280\u672F\u6808",paraId:12,tocIndex:14},{value:"\u76F4\u63A5\u5347\u7EA7",paraId:13,tocIndex:16},{value:"\uFF1A\u73B0\u6709\u4EE3\u7801\u65E0\u9700\u4FEE\u6539",paraId:13,tocIndex:16},{value:"\u6E10\u8FDB\u5F0F\u91C7\u7528",paraId:13,tocIndex:16},{value:"\uFF1A\u53EF\u9009\u62E9\u6027\u542F\u7528\u65B0\u529F\u80FD",paraId:13,tocIndex:16},{value:"\u7C7B\u578B\u5B89\u5168",paraId:13,tocIndex:16},{value:"\uFF1A\u5EFA\u8BAE\u542F\u7528 TypeScript \u4E25\u683C\u6A21\u5F0F",paraId:13,tocIndex:16},{value:"\u6027\u80FD\u4F18\u5316",paraId:13,tocIndex:16},{value:"\uFF1A\u5EFA\u8BAE\u542F\u7528\u7F13\u5B58\u548C\u865A\u62DF\u6EDA\u52A8\u529F\u80FD",paraId:13,tocIndex:16},{value:"\u6240\u6709\u65B0\u529F\u80FD\u90FD\u662F\u53EF\u9009\u7684",paraId:14,tocIndex:17},{value:"\u4FDD\u6301\u5B8C\u5168\u7684\u5411\u540E\u517C\u5BB9\u6027",paraId:14,tocIndex:17},{value:"\u5EFA\u8BAE\u5728\u5347\u7EA7\u524D\u8FD0\u884C\u5B8C\u6574\u7684\u6D4B\u8BD5\u5957\u4EF6",paraId:14,tocIndex:17},{value:"\u8BE6\u7EC6\u5347\u7EA7\u6307\u5357\u8BF7\u53C2\u8003 ",paraId:14,tocIndex:17},{value:"\u5347\u7EA7\u6307\u5357",paraId:15,tocIndex:17},{value:"\u5982\u679C\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF1A",paraId:16,tocIndex:18},{value:"\u{1F4D6} ",paraId:17,tocIndex:18},{value:"\u67E5\u770B\u6587\u6863",paraId:18,tocIndex:18},{value:"\u{1F41B} ",paraId:17,tocIndex:18},{value:"\u63D0\u4EA4 Issue",paraId:17,tocIndex:18},{value:"\u{1F4AC} ",paraId:17,tocIndex:18},{value:"\u53C2\u4E0E\u8BA8\u8BBA",paraId:17,tocIndex:18},{value:"\u{1F4E7} ",paraId:17,tocIndex:18},{value:"\u8054\u7CFB\u7EF4\u62A4\u8005",paraId:17,tocIndex:18},{value:"\u6B22\u8FCE\u8D21\u732E\u4EE3\u7801\uFF01\u8BF7\u67E5\u770B\uFF1A",paraId:19,tocIndex:19},{value:"\u8D21\u732E\u6307\u5357",paraId:20,tocIndex:19},{value:"\u5F00\u53D1\u6307\u5357",paraId:21,tocIndex:19},{value:"\u6700\u4F73\u5B9E\u8DF5",paraId:22,tocIndex:19}]},81358:function(g,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Durians \u63D0\u4F9B\u4E86\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u7EC4\u4EF6\uFF0C\u57FA\u4E8E Ant Design Pro \u6784\u5EFA\uFF0C\u65E8\u5728\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u7EA7\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u4F01\u4E1A\u7EA7\u6570\u636E\u8868\u683C\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684 CRUD \u529F\u80FD\u3002",paraId:1,tocIndex:2},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:2,tocIndex:2},{value:"\u{1F4CA} \u5B8C\u6574\u7684 CRUD \u64CD\u4F5C\uFF08\u589E\u5220\u6539\u67E5\uFF09",paraId:3,tocIndex:2},{value:"\u{1F50D} \u5185\u7F6E\u641C\u7D22\u3001\u7B5B\u9009\u3001\u6392\u5E8F\u529F\u80FD",paraId:3,tocIndex:2},{value:"\u{1F4C4} \u667A\u80FD\u5206\u9875\u548C\u6570\u636E\u52A0\u8F7D",paraId:3,tocIndex:2},{value:"\u{1F333} \u652F\u6301\u6811\u5F62\u9009\u62E9\u548C\u6279\u91CF\u64CD\u4F5C",paraId:3,tocIndex:2},{value:"\u26A1 \u6027\u80FD\u4F18\u5316\uFF1A\u865A\u62DF\u6EDA\u52A8\u3001\u7F13\u5B58\u673A\u5236",paraId:3,tocIndex:2},{value:"\u{1F3A8} \u9AD8\u5EA6\u53EF\u5B9A\u5236\u7684\u5217\u914D\u7F6E",paraId:3,tocIndex:2},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:4,tocIndex:2},{value:"\u7528\u6237\u7BA1\u7406\u7CFB\u7EDF",paraId:5,tocIndex:2},{value:"\u6570\u636E\u5C55\u793A\u548C\u7BA1\u7406",paraId:5,tocIndex:2},{value:"\u540E\u53F0\u7BA1\u7406\u754C\u9762",paraId:5,tocIndex:2},{value:"\u62A5\u8868\u548C\u7EDF\u8BA1\u9875\u9762",paraId:5,tocIndex:2},{value:`import { TablePro } from 'durians';

<TablePro
  url="/api/users"
  addUrl="/api/users"
  editUrl="/api/users"
  deleteUrl="/api/users"
  fieldProps={{
    columns: [
      { title: '\u59D3\u540D', dataIndex: 'name', valueType: 'text' },
      { title: '\u90AE\u7BB1', dataIndex: 'email', valueType: 'text' },
      { title: '\u72B6\u6001', dataIndex: 'status', valueType: 'select' },
    ],
  }}
/>
`,paraId:6,tocIndex:2},{value:"\u7075\u6D3B\u7684\u8868\u5355\u7EC4\u4EF6\uFF0C\u652F\u6301\u6A21\u6001\u6846\u548C\u62BD\u5C49\u4E24\u79CD\u5E03\u5C40\u3002",paraId:7,tocIndex:3},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:8,tocIndex:3},{value:"\u{1F4DD} \u652F\u6301\u6A21\u6001\u6846\uFF08ModalForm\uFF09\u548C\u62BD\u5C49\uFF08DrawerForm\uFF09\u5E03\u5C40",paraId:9,tocIndex:3},{value:"\u2705 \u5185\u7F6E\u8868\u5355\u9A8C\u8BC1\u548C\u6570\u636E\u5904\u7406",paraId:9,tocIndex:3},{value:"\u{1F504} \u652F\u6301\u8868\u5355\u8054\u52A8\u548C\u52A8\u6001\u5B57\u6BB5",paraId:9,tocIndex:3},{value:"\u{1F3AF} \u81EA\u52A8\u6570\u636E\u7ED1\u5B9A\u548C\u63D0\u4EA4",paraId:9,tocIndex:3},{value:"\u{1F6E0}\uFE0F \u4E30\u5BCC\u7684\u8868\u5355\u7EC4\u4EF6\u652F\u6301",paraId:9,tocIndex:3},{value:"\u{1F4F1} \u54CD\u5E94\u5F0F\u8BBE\u8BA1",paraId:9,tocIndex:3},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:10,tocIndex:3},{value:"\u6570\u636E\u65B0\u589E\u548C\u7F16\u8F91",paraId:11,tocIndex:3},{value:"\u7528\u6237\u4FE1\u606F\u5F55\u5165",paraId:11,tocIndex:3},{value:"\u914D\u7F6E\u548C\u8BBE\u7F6E\u9875\u9762",paraId:11,tocIndex:3},{value:"\u591A\u6B65\u9AA4\u8868\u5355",paraId:11,tocIndex:3},{value:`import { FormPro } from 'durians';
import { Button } from 'antd';

<FormPro
  layoutType="ModalForm"
  url="/api/users"
  fieldProps={{
    columns: [
      { title: '\u59D3\u540D', dataIndex: 'name', valueType: 'text', formItemProps: { rules: [{ required: true }] } },
      { title: '\u90AE\u7BB1', dataIndex: 'email', valueType: 'text' },
      { title: '\u90E8\u95E8', dataIndex: 'department', valueType: 'select' },
    ],
  }}
>
  <Button type="primary">\u65B0\u589E\u7528\u6237</Button>
</FormPro>
`,paraId:12,tocIndex:3},{value:"\u589E\u5F3A\u7684\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002",paraId:13,tocIndex:4},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:14,tocIndex:4},{value:"\u{1F3A8} \u81EA\u5B9A\u4E49\u5185\u5BB9\u6E32\u67D3",paraId:15,tocIndex:4},{value:"\u2328\uFE0F \u952E\u76D8\u5BFC\u822A\u652F\u6301",paraId:15,tocIndex:4},{value:"\u{1F512} \u786E\u8BA4\u5173\u95ED\u673A\u5236",paraId:15,tocIndex:4},{value:"\u{1F3AF} \u81EA\u52A8\u805A\u7126\u529F\u80FD",paraId:15,tocIndex:4},{value:"\u{1F4F1} \u54CD\u5E94\u5F0F\u9002\u914D",paraId:15,tocIndex:4},{value:"\u267F \u53EF\u8BBF\u95EE\u6027\u589E\u5F3A",paraId:15,tocIndex:4},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:16,tocIndex:4},{value:"\u786E\u8BA4\u64CD\u4F5C\u63D0\u793A",paraId:17,tocIndex:4},{value:"\u8BE6\u60C5\u4FE1\u606F\u5C55\u793A",paraId:17,tocIndex:4},{value:"\u590D\u6742\u4EA4\u4E92\u754C\u9762",paraId:17,tocIndex:4},{value:"\u591A\u5A92\u4F53\u5185\u5BB9\u5C55\u793A",paraId:17,tocIndex:4},{value:`import { ModalPro } from 'durians';
import { Button } from 'antd';

<ModalPro
  title="\u7528\u6237\u8BE6\u60C5"
  Content={() => <UserDetail />}
  keyboardNavigation={true}
  confirmOnClose={true}
>
  <Button>\u67E5\u770B\u8BE6\u60C5</Button>
</ModalPro>
`,paraId:18,tocIndex:4},{value:"\u4F01\u4E1A\u7EA7\u767B\u5F55\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u767B\u5F55\u65B9\u5F0F\u3002",paraId:19,tocIndex:5},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:20,tocIndex:5},{value:"\u{1F510} \u8D26\u53F7\u5BC6\u7801\u767B\u5F55",paraId:21,tocIndex:5},{value:"\u{1F4F1} \u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55",paraId:21,tocIndex:5},{value:"\u{1F512} \u5BC6\u7801\u52A0\u5BC6\u5904\u7406",paraId:21,tocIndex:5},{value:"\u{1F4BE} \u81EA\u52A8\u767B\u5F55\u529F\u80FD",paraId:21,tocIndex:5},{value:"\u{1F6E1}\uFE0F \u5B89\u5168\u9A8C\u8BC1\u673A\u5236",paraId:21,tocIndex:5},{value:"\u{1F3A8} \u53EF\u5B9A\u5236\u7684 UI \u6837\u5F0F",paraId:21,tocIndex:5},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:22,tocIndex:5},{value:"\u7CFB\u7EDF\u767B\u5F55\u9875\u9762",paraId:23,tocIndex:5},{value:"\u7528\u6237\u8BA4\u8BC1\u754C\u9762",paraId:23,tocIndex:5},{value:"\u5B89\u5168\u9A8C\u8BC1\u6D41\u7A0B",paraId:23,tocIndex:5},{value:"\u591A\u79DF\u6237\u767B\u5F55",paraId:23,tocIndex:5},{value:`import { LoginPro } from 'durians';

<LoginPro
  url="/api/login"
  onSuccess={(data) => {
    // \u767B\u5F55\u6210\u529F\u5904\u7406
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard';
  }}
  enableAutoLogin={true}
  enableSmsLogin={true}
/>
`,paraId:24,tocIndex:5},{value:"\u9AD8\u6027\u80FD\u7684\u6811\u5F62\u6570\u636E\u5C55\u793A\u548C\u64CD\u4F5C\u7EC4\u4EF6\u3002",paraId:25,tocIndex:6},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:26,tocIndex:6},{value:"\u{1F333} \u6811\u5F62\u6570\u636E\u5C55\u793A\u548C\u64CD\u4F5C",paraId:27,tocIndex:6},{value:"\u26A1 \u61D2\u52A0\u8F7D\u548C\u6309\u9700\u6E32\u67D3",paraId:27,tocIndex:6},{value:"\u2705 \u652F\u6301\u9009\u62E9\u548C\u591A\u9009",paraId:27,tocIndex:6},{value:"\u{1F504} \u5B8C\u6574\u7684 CRUD \u64CD\u4F5C",paraId:27,tocIndex:6},{value:"\u{1F3AF} \u81EA\u5B9A\u4E49\u8282\u70B9\u6E32\u67D3",paraId:27,tocIndex:6},{value:"\u{1F4F1} \u79FB\u52A8\u7AEF\u9002\u914D",paraId:27,tocIndex:6},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:28,tocIndex:6},{value:"\u7EC4\u7EC7\u67B6\u6784\u7BA1\u7406",paraId:29,tocIndex:6},{value:"\u5206\u7C7B\u548C\u6807\u7B7E\u7BA1\u7406",paraId:29,tocIndex:6},{value:"\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784",paraId:29,tocIndex:6},{value:"\u6743\u9650\u6811\u914D\u7F6E",paraId:29,tocIndex:6},{value:`import { TreePro } from 'durians';

<TreePro
  title="\u7EC4\u7EC7\u67B6\u6784"
  url="/api/departments"
  addUrl="/api/departments"
  editUrl="/api/departments"
  deleteUrl="/api/departments"
  isLoadData={true}
  fieldProps={{
    fieldNames: { title: 'name', key: 'id', children: 'children' }
  }}
/>
`,paraId:30,tocIndex:6},{value:"\u5B89\u88C5\u4F9D\u8D56",paraId:31,tocIndex:8},{value:`npm install durians
# \u6216
yarn add durians
`,paraId:32,tocIndex:8},{value:"\u5F15\u5165\u7EC4\u4EF6",paraId:33,tocIndex:8},{value:`import { TablePro, FormPro, ModalPro } from 'durians';
`,paraId:34,tocIndex:8},{value:"\u4F7F\u7528\u7EC4\u4EF6",paraId:35,tocIndex:8},{value:`const App = () => {
  return (
    <div>
      <TablePro url="/api/data" />
    </div>
  );
};
`,paraId:36,tocIndex:8},{value:`interface User {
  id: number;
  name: string;
  email: string;
}

<TablePro<User>
  url="/api/users"
  fieldProps={{
    columns: [
      {
        title: '\u59D3\u540D',
        dataIndex: 'name', // \u7C7B\u578B\u5B89\u5168
        render: (name: string, record: User) => {
          return <span>{name}</span>;
        }
      }
    ]
  }}
/>
`,paraId:37,tocIndex:10},{value:`import { useErrorHandler } from 'durians';
import { Alert } from 'antd';

const MyComponent = () => {
  const { error, handleError } = useErrorHandler();

  return (
    <div>
      {error && <Alert message={error} type="error" />}
      <TablePro
        url="/api/users"
        onError={handleError}
      />
    </div>
  );
};
`,paraId:38,tocIndex:11},{value:`<TablePro
  url="/api/large-dataset"
  virtual={true} // \u542F\u7528\u865A\u62DF\u6EDA\u52A8
  cache={{ enabled: true, ttl: 5 * 60 * 1000 }} // \u542F\u7528\u7F13\u5B58
  errorRetry={{ enabled: true, maxRetries: 3 }} // \u9519\u8BEF\u91CD\u8BD5
/>
`,paraId:39,tocIndex:12},{value:"\u6240\u6709\u7EC4\u4EF6\u90FD\u63D0\u4F9B\u5408\u7406\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u800C\u65E0\u9700\u590D\u6742\u7684\u914D\u7F6E\u3002",paraId:40,tocIndex:14},{value:"\u901A\u8FC7\u4E30\u5BCC\u7684 props \u548C\u914D\u7F6E\u9009\u9879\uFF0C\u6EE1\u8DB3\u5404\u79CD\u4E1A\u52A1\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:41,tocIndex:15},{value:"\u5B8C\u6574\u7684 TypeScript \u652F\u6301\uFF0C\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u548C\u66F4\u597D\u7684\u5F00\u53D1\u4F53\u9A8C\u3002",paraId:42,tocIndex:16},{value:"\u5185\u7F6E\u6027\u80FD\u4F18\u5316\u673A\u5236\uFF0C\u652F\u6301\u5927\u6570\u636E\u91CF\u548C\u590D\u6742\u4EA4\u4E92\u573A\u666F\u3002",paraId:43,tocIndex:17},{value:"\u9075\u5FAA WCAG \u6807\u51C6\uFF0C\u63D0\u4F9B\u826F\u597D\u7684\u53EF\u8BBF\u95EE\u6027\u652F\u6301\u3002",paraId:44,tocIndex:18},{value:"\u67B6\u6784\u8BBE\u8BA1",paraId:45,tocIndex:19},{value:" - \u4E86\u89E3\u6280\u672F\u67B6\u6784\u548C\u8BBE\u8BA1\u7406\u5FF5",paraId:46,tocIndex:19},{value:"\u66F4\u65B0\u65E5\u5FD7",paraId:47,tocIndex:19},{value:" - \u67E5\u770B\u7248\u672C\u66F4\u65B0\u548C\u65B0\u529F\u80FD",paraId:46,tocIndex:19},{value:"GitHub",paraId:46,tocIndex:19},{value:" - \u6E90\u7801\u548C\u95EE\u9898\u53CD\u9988",paraId:46,tocIndex:19},{value:"\u793A\u4F8B\u9879\u76EE",paraId:46,tocIndex:19},{value:" - \u5B8C\u6574\u7684\u4F7F\u7528\u793A\u4F8B",paraId:46,tocIndex:19},{value:"\u6B22\u8FCE\u8D21\u732E\u4EE3\u7801\u548C\u63D0\u51FA\u5EFA\u8BAE\uFF01\u8BF7\u67E5\u770B\u6211\u4EEC\u7684\u8D21\u732E\u6307\u5357\u3002",paraId:48,tocIndex:20},{value:"MIT \xA9 ",paraId:49,tocIndex:21},{value:"ztao",paraId:49,tocIndex:21}]},51446:function(g,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:`# npm
npm install durians

# yarn
yarn add durians

# pnpm
pnpm add durians
`,paraId:0,tocIndex:0},{value:"\u5B8C\u6574\u7684 CRUD \u64CD\u4F5C",paraId:1,tocIndex:3},{value:"\u5206\u9875\u3001\u641C\u7D22\u3001\u6392\u5E8F",paraId:1,tocIndex:3},{value:"\u6279\u91CF\u64CD\u4F5C\u652F\u6301",paraId:1,tocIndex:3},{value:"\u6811\u5F62\u9009\u62E9\u96C6\u6210",paraId:1,tocIndex:3},{value:"\u6A21\u6001\u6846/\u62BD\u5C49\u5E03\u5C40",paraId:2,tocIndex:4},{value:"\u8868\u5355\u9A8C\u8BC1\u548C\u8054\u52A8",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u652F\u6301",paraId:2,tocIndex:4},{value:"\u6570\u636E\u5904\u7406\u7BA1\u9053",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6E32\u67D3",paraId:3,tocIndex:5},{value:"\u56DE\u8C03\u63A7\u5236\u673A\u5236",paraId:3,tocIndex:5},{value:"\u952E\u76D8\u5BFC\u822A\u652F\u6301",paraId:3,tocIndex:5},{value:"\u53EF\u8BBF\u95EE\u6027\u589E\u5F3A",paraId:3,tocIndex:5},{value:"\u591A\u79CD\u767B\u5F55\u65B9\u5F0F",paraId:4,tocIndex:6},{value:"\u5BC6\u7801\u52A0\u5BC6\u5904\u7406",paraId:4,tocIndex:6},{value:"\u9A8C\u8BC1\u7801\u96C6\u6210",paraId:4,tocIndex:6},{value:"\u81EA\u52A8\u767B\u5F55\u529F\u80FD",paraId:4,tocIndex:6},{value:"\u61D2\u52A0\u8F7D\u652F\u6301",paraId:5,tocIndex:7},{value:"CRUD \u64CD\u4F5C",paraId:5,tocIndex:7},{value:"\u9009\u62E9\u72B6\u6001\u7BA1\u7406",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:5,tocIndex:7},{value:"\u4F01\u4E1A\u7EA7",paraId:6,tocIndex:8},{value:": \u57FA\u4E8E Ant Design Pro\uFF0C\u6EE1\u8DB3\u4F01\u4E1A\u7EA7\u5E94\u7528\u9700\u6C42",paraId:6,tocIndex:8},{value:"\u4F4E\u4EE3\u7801",paraId:6,tocIndex:8},{value:": \u901A\u8FC7\u914D\u7F6E\u5316\u7684\u65B9\u5F0F\u5FEB\u901F\u6784\u5EFA\u590D\u6742\u529F\u80FD",paraId:6,tocIndex:8},{value:"\u7C7B\u578B\u5B89\u5168",paraId:6,tocIndex:8},{value:": \u5B8C\u6574\u7684 TypeScript \u652F\u6301\uFF0C\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u4FDD\u969C",paraId:6,tocIndex:8},{value:"\u9AD8\u6027\u80FD",paraId:6,tocIndex:8},{value:": \u5185\u7F6E\u6027\u80FD\u4F18\u5316\uFF0C\u652F\u6301\u865A\u62DF\u6EDA\u52A8\u3001\u7F13\u5B58\u7B49\u7279\u6027",paraId:6,tocIndex:8},{value:"\u53EF\u6269\u5C55",paraId:6,tocIndex:8},{value:": \u7075\u6D3B\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6269\u5C55",paraId:6,tocIndex:8},{value:"\u6587\u6863\u5B8C\u5584",paraId:6,tocIndex:8},{value:": \u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\uFF0C\u5FEB\u901F\u4E0A\u624B",paraId:6,tocIndex:8},{value:"\u{1F4D6} ",paraId:7,tocIndex:9},{value:"\u67E5\u770B\u6587\u6863",paraId:8,tocIndex:9},{value:"\u{1F41B} ",paraId:7,tocIndex:9},{value:"\u63D0\u4EA4 Issue",paraId:7,tocIndex:9},{value:"\u{1F4AC} ",paraId:7,tocIndex:9},{value:"\u53C2\u4E0E\u8BA8\u8BBA",paraId:7,tocIndex:9},{value:"\u6B22\u8FCE\u8D21\u732E\u4EE3\u7801\uFF01\u8BF7\u67E5\u770B ",paraId:9,tocIndex:10},{value:"\u8D21\u732E\u6307\u5357",paraId:9,tocIndex:10},{value:"\u3002",paraId:9,tocIndex:10},{value:"MIT",paraId:10,tocIndex:11},{value:" \xA9 ",paraId:10,tocIndex:11},{value:"ztao",paraId:10,tocIndex:11}]},29598:function(g,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Durians \u7EC4\u4EF6\u5E93\u5185\u7F6E\u4E86\u5B8C\u6574\u7684 Mock \u6570\u636E\u7CFB\u7EDF\uFF0C\u4E3A\u5F00\u53D1\u548C\u6F14\u793A\u63D0\u4F9B\u771F\u5B9E\u7684\u6570\u636E\u6A21\u62DF\u3002",paraId:0,tocIndex:0},{value:"\u5F00\u53D1\u73AF\u5883\u81EA\u52A8\u542F\u7528 Mock \u670D\u52A1",paraId:1,tocIndex:2},{value:"\u751F\u4EA7\u73AF\u5883\u81EA\u52A8\u7981\u7528",paraId:1,tocIndex:2},{value:"\u652F\u6301\u73AF\u5883\u53D8\u91CF\u63A7\u5236\uFF1A",paraId:1,tocIndex:2},{value:"REACT_APP_MOCK=true",paraId:1,tocIndex:2},{value:"\u652F\u6301\u589E\u5220\u6539\u67E5\u64CD\u4F5C",paraId:2,tocIndex:3},{value:"\u5206\u9875\u3001\u641C\u7D22\u3001\u6392\u5E8F\u529F\u80FD",paraId:2,tocIndex:3},{value:"\u6570\u636E\u6301\u4E45\u5316\uFF08\u4F1A\u8BDD\u7EA7\u522B\uFF09",paraId:2,tocIndex:3},{value:"\u771F\u5B9E\u7684\u7F51\u7EDC\u5EF6\u8FDF\u6A21\u62DF",paraId:2,tocIndex:3},{value:"\u7528\u6237\u7BA1\u7406\u6570\u636E",paraId:3,tocIndex:4},{value:"\u4EA7\u54C1\u7BA1\u7406\u6570\u636E",paraId:3,tocIndex:4},{value:"\u7EC4\u7EC7\u67B6\u6784\u6570\u636E",paraId:3,tocIndex:4},{value:"\u767B\u5F55\u8BA4\u8BC1\u6570\u636E",paraId:3,tocIndex:4},{value:`GET /api/users?current=1&pageSize=10&keyword=\u641C\u7D22\u5173\u952E\u8BCD
`,paraId:4,tocIndex:7},{value:"\u54CD\u5E94\u793A\u4F8B\uFF1A",paraId:5,tocIndex:7},{value:`{
  "code": 200,
  "success": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "\u5F20\u4E09",
        "email": "zhangsan@example.com",
        "phone": "13800138000",
        "department": "\u6280\u672F\u90E8",
        "position": "\u524D\u7AEF\u5DE5\u7A0B\u5E08",
        "status": 1,
        "createTime": "2024-01-01 10:00:00"
      }
    ],
    "total": 50,
    "current": 1,
    "pageSize": 10
  },
  "msg": "\u64CD\u4F5C\u6210\u529F"
}
`,paraId:6,tocIndex:7},{value:`POST /api/users
Content-Type: application/json

{
  "name": "\u674E\u56DB",
  "email": "lisi@example.com",
  "phone": "13900139000",
  "department": "\u4EA7\u54C1\u90E8",
  "position": "\u4EA7\u54C1\u7ECF\u7406"
}
`,paraId:7,tocIndex:8},{value:`PUT /api/users/1
Content-Type: application/json

{
  "name": "\u5F20\u4E09\uFF08\u66F4\u65B0\uFF09",
  "email": "zhangsan_new@example.com"
}
`,paraId:8,tocIndex:9},{value:`DELETE /api/users/1
`,paraId:9,tocIndex:10},{value:`DELETE /api/users/batch
Content-Type: application/json

{
  "idList": [1, 2, 3]
}
`,paraId:10,tocIndex:11},{value:`GET /api/products?current=1&pageSize=10&keyword=\u641C\u7D22\u5173\u952E\u8BCD&category=\u5206\u7C7B
`,paraId:11,tocIndex:13},{value:"\u54CD\u5E94\u793A\u4F8B\uFF1A",paraId:12,tocIndex:13},{value:`{
  "code": 200,
  "success": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "iPhone 15",
        "description": "\u82F9\u679C\u6700\u65B0\u6B3E\u667A\u80FD\u624B\u673A",
        "price": 5999.00,
        "category": "\u7535\u5B50\u4EA7\u54C1",
        "brand": "Apple",
        "stock": 100,
        "sales": 500,
        "rating": 4.8,
        "images": ["https://example.com/image1.jpg"],
        "status": 1
      }
    ],
    "total": 30,
    "current": 1,
    "pageSize": 10
  }
}
`,paraId:13,tocIndex:13},{value:`POST /api/products
Content-Type: application/json

{
  "name": "\u65B0\u4EA7\u54C1",
  "description": "\u4EA7\u54C1\u63CF\u8FF0",
  "price": 299.99,
  "category": "\u7535\u5B50\u4EA7\u54C1",
  "brand": "\u54C1\u724C\u540D\u79F0",
  "stock": 50
}
`,paraId:14,tocIndex:14},{value:`GET /api/departments
`,paraId:15,tocIndex:16},{value:"\u54CD\u5E94\u793A\u4F8B\uFF1A",paraId:16,tocIndex:16},{value:`{
  "code": 200,
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "\u6280\u672F\u90E8",
      "code": "TECH",
      "manager": "\u5F20\u4E09",
      "phone": "13800138000",
      "email": "tech@example.com",
      "children": [
        {
          "id": 2,
          "name": "\u524D\u7AEF\u7EC4",
          "code": "FE",
          "manager": "\u674E\u56DB",
          "parentId": 1
        }
      ]
    }
  ]
}
`,paraId:17,tocIndex:16},{value:`POST /api/departments
Content-Type: application/json

{
  "name": "\u65B0\u90E8\u95E8",
  "code": "NEW",
  "manager": "\u8D1F\u8D23\u4EBA",
  "parentId": 1
}
`,paraId:18,tocIndex:17},{value:`GET /api/tree?keyword=\u641C\u7D22\u5173\u952E\u8BCD
`,paraId:19,tocIndex:19},{value:"\u54CD\u5E94\u793A\u4F8B\uFF1A",paraId:20,tocIndex:19},{value:`{
  "code": 200,
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "\u6280\u672F\u90E8",
      "value": "1",
      "key": "1",
      "children": [
        {
          "id": 11,
          "title": "\u524D\u7AEF\u7EC4",
          "value": "11",
          "key": "11",
          "children": [
            {
              "id": 111,
              "title": "React \u56E2\u961F",
              "value": "111",
              "key": "111"
            }
          ]
        }
      ]
    }
  ]
}
`,paraId:21,tocIndex:19},{value:`GET /api/treeSelect?keyword=\u641C\u7D22\u5173\u952E\u8BCD
`,paraId:22,tocIndex:20},{value:"\u54CD\u5E94\u793A\u4F8B\uFF1A",paraId:23,tocIndex:20},{value:`{
  "code": 200,
  "success": true,
  "data": [
    {
      "label": "\u6280\u672F\u90E8",
      "value": "tech",
      "children": [
        {
          "label": "\u524D\u7AEF\u7EC4",
          "value": "frontend"
        }
      ]
    }
  ]
}
`,paraId:24,tocIndex:20},{value:`GET /api/orgTree
`,paraId:25,tocIndex:21},{value:"\u54CD\u5E94\u793A\u4F8B\uFF1A",paraId:26,tocIndex:21},{value:`{
  "code": 200,
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "\u603B\u516C\u53F8",
      "type": "company",
      "children": [
        {
          "id": "1-1",
          "name": "\u6280\u672F\u90E8",
          "type": "department",
          "children": [
            {
              "id": "1-1-1",
              "name": "\u5F20\u4E09",
              "type": "user",
              "position": "\u524D\u7AEF\u5DE5\u7A0B\u5E08",
              "email": "zhangsan@example.com"
            }
          ]
        }
      ]
    }
  ]
}
`,paraId:27,tocIndex:21},{value:`POST /api/login
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
`,paraId:28,tocIndex:23},{value:"\u6D4B\u8BD5\u8D26\u53F7\uFF1A",paraId:29,tocIndex:23},{value:"\u7BA1\u7406\u5458\uFF1A",paraId:30,tocIndex:23},{value:"admin",paraId:30,tocIndex:23},{value:" / ",paraId:30,tocIndex:23},{value:"123456",paraId:30,tocIndex:23},{value:"\u666E\u901A\u7528\u6237\uFF1A",paraId:30,tocIndex:23},{value:"user",paraId:30,tocIndex:23},{value:" / ",paraId:30,tocIndex:23},{value:"123456",paraId:30,tocIndex:23},{value:"\u54CD\u5E94\u793A\u4F8B\uFF1A",paraId:31,tocIndex:23},{value:`{
  "code": 200,
  "success": true,
  "data": {
    "id": 1,
    "username": "admin",
    "name": "\u7BA1\u7406\u5458",
    "email": "admin@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "roles": ["admin"],
    "permissions": ["*"],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "msg": "\u767B\u5F55\u6210\u529F"
}
`,paraId:32,tocIndex:23},{value:`GET /api/userinfo
Authorization: Bearer <token>
`,paraId:33,tocIndex:24},{value:`POST /api/logout
`,paraId:34,tocIndex:25},{value:"Mock \u6570\u636E\u4F1A\u81EA\u52A8\u62E6\u622A\u5BF9\u5E94\u7684 API \u8BF7\u6C42\uFF0C\u65E0\u9700\u989D\u5916\u914D\u7F6E\uFF1A",paraId:35,tocIndex:27},{value:"\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49 Mock \u6570\u636E\uFF0C\u53EF\u4EE5\u4FEE\u6539 ",paraId:36,tocIndex:28},{value:"src/mock/",paraId:36,tocIndex:28},{value:" \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF1A",paraId:36,tocIndex:28},{value:`// src/mock/api.ts
Mock.mock('/api/custom', 'get', () => {
  return createResponse({
    message: '\u81EA\u5B9A\u4E49\u6570\u636E'
  });
});
`,paraId:37,tocIndex:28},{value:"\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u63A7\u5236 Mock \u670D\u52A1\uFF1A",paraId:38,tocIndex:29},{value:`# \u542F\u7528 Mock
REACT_APP_MOCK=true npm run dev

# \u7981\u7528 Mock
REACT_APP_MOCK=false npm run dev
`,paraId:39,tocIndex:29},{value:`interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  department: string;
  position: string;
  status: 0 | 1; // 0: \u7981\u7528, 1: \u542F\u7528
  gender: 'male' | 'female';
  age: number;
  address: string;
  createTime: string;
  updateTime: string;
  salary: number;
  experience: number;
}
`,paraId:40,tocIndex:31},{value:`interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  sales: number;
  rating: number;
  images: string[];
  status: 0 | 1 | 2; // 0: \u4E0B\u67B6, 1: \u4E0A\u67B6, 2: \u7F3A\u8D27
  createTime: string;
  updateTime: string;
}
`,paraId:41,tocIndex:32},{value:`interface Department {
  id: number;
  name: string;
  code: string;
  manager: string;
  phone: string;
  email: string;
  description: string;
  createTime: string;
  parentId: number;
  sort: number;
  status: 0 | 1;
  children?: Department[];
}
`,paraId:42,tocIndex:33},{value:"\u4F7F\u7528 Mock.js \u751F\u6210\u771F\u5B9E\u7684\u4E2D\u6587\u59D3\u540D\u3001\u5730\u5740\u3001\u90AE\u7BB1\u7B49",paraId:43,tocIndex:35},{value:"\u7B26\u5408\u4E2D\u56FD\u7528\u6237\u4E60\u60EF\u7684\u6570\u636E\u683C\u5F0F",paraId:43,tocIndex:35},{value:"\u5408\u7406\u7684\u6570\u636E\u5173\u8054\u548C\u7EA6\u675F",paraId:43,tocIndex:35},{value:"\u652F\u6301\u5206\u9875\u3001\u641C\u7D22\u3001\u6392\u5E8F",paraId:44,tocIndex:36},{value:"\u6570\u636E\u9A8C\u8BC1\u548C\u9519\u8BEF\u5904\u7406",paraId:44,tocIndex:36},{value:"\u7B26\u5408 RESTful API \u89C4\u8303",paraId:44,tocIndex:36},{value:"\u81EA\u52A8\u542F\u7528\uFF0C\u65E0\u9700\u624B\u52A8\u914D\u7F6E",paraId:45,tocIndex:37},{value:"\u63A7\u5236\u53F0\u8F93\u51FA API \u5217\u8868",paraId:45,tocIndex:37},{value:"\u652F\u6301\u70ED\u66F4\u65B0\u548C\u5B9E\u65F6\u8C03\u8BD5",paraId:45,tocIndex:37},{value:"Mock \u6570\u636E\u7CFB\u7EDF\u8BA9\u60A8\u53EF\u4EE5\u5728\u6CA1\u6709\u540E\u7AEF API \u7684\u60C5\u51B5\u4E0B\uFF0C\u5B8C\u6574\u4F53\u9A8C Durians \u7EC4\u4EF6\u5E93\u7684\u6240\u6709\u529F\u80FD\uFF01",paraId:46,tocIndex:37}]},75325:function(g,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u8FD9\u4E2A\u9875\u9762\u7528\u4E8E\u6D4B\u8BD5 Mock \u6570\u636E\u7CFB\u7EDF\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u6D4B\u8BD5\u5404\u4E2A Mock API \u63A5\u53E3\uFF1A",paraId:1,tocIndex:1},{value:"\u6253\u5F00\u6D4F\u89C8\u5668\u5F00\u53D1\u8005\u5DE5\u5177",paraId:2,tocIndex:2},{value:" - \u67E5\u770B Network \u9762\u677F\u548C Console \u9762\u677F",paraId:2,tocIndex:2},{value:"\u70B9\u51FB\u6D4B\u8BD5\u6309\u94AE",paraId:2,tocIndex:2},{value:" - \u89C2\u5BDF Mock API \u7684\u8BF7\u6C42\u548C\u54CD\u5E94",paraId:2,tocIndex:2},{value:"\u68C0\u67E5\u63A7\u5236\u53F0\u65E5\u5FD7",paraId:2,tocIndex:2},{value:" - \u67E5\u770B Mock \u670D\u52A1\u7684\u65E5\u5FD7\u8F93\u51FA",paraId:2,tocIndex:2},{value:"\u9A8C\u8BC1\u6570\u636E",paraId:2,tocIndex:2},{value:" - \u786E\u8BA4\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\u6B63\u786E",paraId:2,tocIndex:2},{value:"\u5982\u679C Mock \u7CFB\u7EDF\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u60A8\u5E94\u8BE5\u770B\u5230\uFF1A",paraId:3,tocIndex:3},{value:"\u2705 \u63A7\u5236\u53F0\u8F93\u51FA Mock \u670D\u52A1\u542F\u52A8\u4FE1\u606F",paraId:4,tocIndex:3},{value:"\u2705 Network \u9762\u677F\u663E\u793A API \u8BF7\u6C42\u88AB\u62E6\u622A",paraId:4,tocIndex:3},{value:"\u2705 \u8FD4\u56DE\u6B63\u786E\u683C\u5F0F\u7684 JSON \u6570\u636E",paraId:4,tocIndex:3},{value:"\u2705 \u7528\u6237\u5217\u8868\u6B63\u5E38\u663E\u793A",paraId:4,tocIndex:3},{value:"\u2705 \u521B\u5EFA\u7528\u6237\u529F\u80FD\u6B63\u5E38",paraId:4,tocIndex:3},{value:"\u2705 \u767B\u5F55\u529F\u80FD\u6B63\u5E38",paraId:4,tocIndex:3},{value:"\u2705 \u6811\u5F62\u6570\u636E\u6B63\u5E38",paraId:4,tocIndex:3},{value:"\u5982\u679C\u9047\u5230\u95EE\u9898\uFF1A",paraId:5,tocIndex:4},{value:"\u68C0\u67E5\u63A7\u5236\u53F0",paraId:6,tocIndex:4},{value:" - \u67E5\u770B\u662F\u5426\u6709\u9519\u8BEF\u4FE1\u606F",paraId:6,tocIndex:4},{value:"\u5237\u65B0\u9875\u9762",paraId:6,tocIndex:4},{value:" - \u91CD\u65B0\u52A0\u8F7D Mock \u670D\u52A1",paraId:6,tocIndex:4},{value:"\u68C0\u67E5\u7F51\u7EDC\u8BF7\u6C42",paraId:6,tocIndex:4},{value:" - \u786E\u8BA4\u8BF7\u6C42 URL \u6B63\u786E",paraId:6,tocIndex:4},{value:"\u67E5\u770B\u54CD\u5E94",paraId:6,tocIndex:4},{value:" - \u68C0\u67E5 Mock \u6570\u636E\u683C\u5F0F",paraId:6,tocIndex:4},{value:"Mock \u7CFB\u7EDF\u6B63\u5E38\u5DE5\u4F5C\u540E\uFF0C\u6240\u6709\u7EC4\u4EF6\u7684\u6F14\u793A\u90FD\u5E94\u8BE5\u80FD\u591F\u6B63\u5E38\u8FD0\u884C\uFF01",paraId:7,tocIndex:4}]}}]);
