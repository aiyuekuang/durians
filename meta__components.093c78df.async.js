"use strict";(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[838],{60880:function(p,t,n){n.r(t),n.d(t,{demos:function(){return y}});var s=n(15009),o=n.n(s),v=n(99289),c=n.n(v),a=n(67294),y={"loginpro-demo-0":{component:a.memo(a.lazy(c()(o()().mark(function u(){var d,l,r,i;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,51660));case 2:return d=e.sent,l=d.LoginPro,e.next=6,Promise.resolve().then(n.t.bind(n,67294,19));case 6:return r=e.sent,i=r.useEffect,e.abrupt("return",{default:function(){return a.createElement("div",{style:{width:"100%",overflow:"hidden"}},a.createElement(l,{loginFormFieldProps:{title:"\u5185\u90E8\u7BA1\u7406\u5E73\u53F0"}}))}});case 9:case"end":return e.stop()}},u)})))),asset:{type:"BLOCK",id:"loginpro-demo-0",refAtomIds:["LoginPro"],dependencies:{"index.jsx":{type:"FILE",value:`import {LoginPro} from "durians";
import {useEffect} from "react";


/** \u6309\u94AE\u7EC4 */
export default () => {

  return (
    <div style={{
      width: "100%",
      overflow: "hidden"
    }}>
      <LoginPro
        loginFormFieldProps={{
          title: "\u5185\u90E8\u7BA1\u7406\u5E73\u53F0"
        }}
      />
    </div>
  );
};`},durians:{type:"NPM",value:"0.0.26"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx",title:"demo\u9884\u89C8"},context:{durians:n(51660),react:n(67294)},renderOpts:{compile:function(){var u=c()(o()().mark(function l(){var r,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,i));case 3:case"end":return e.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}}}},2043:function(p,t,n){n.r(t),n.d(t,{demos:function(){return y}});var s=n(15009),o=n.n(s),v=n(99289),c=n.n(v),a=n(67294),y={"modalpro-demo-0":{component:a.memo(a.lazy(c()(o()().mark(function u(){var d,l,r,i,h,e;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(n.bind(n,51660));case 2:return d=m.sent,l=d.ModalPro,m.next=6,Promise.resolve().then(n.t.bind(n,67294,19));case 6:return r=m.sent,i=r.useEffect,m.next=10,Promise.resolve().then(n.bind(n,52378));case 10:return h=m.sent,e=h.Button,m.abrupt("return",{default:function(){return a.createElement("div",{style:{width:"100%",overflow:"hidden"}},a.createElement(l,{Content:function(P){return a.createElement("div",null,"\u6211\u662F\u5185\u5BB9")}},a.createElement(e,{type:"primary"},"\u70B9\u51FA\u51FA\u5F39\u7A97")))}});case 13:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"modalpro-demo-0",refAtomIds:["ModalPro"],dependencies:{"index.jsx":{type:"FILE",value:`import {ModalPro} from "durians";
import {useEffect} from "react";
import {Button} from "antd"


export default () => {

  return (
    <div style={{
      width: "100%",
      overflow: "hidden"
    }}>
      <ModalPro
        Content={(props) => {
          return (<div>\u6211\u662F\u5185\u5BB9</div>)
        }}
      >
        <Button type="primary">\u70B9\u51FA\u51FA\u5F39\u7A97</Button>
      </ModalPro>
    </div>
  );
};`},durians:{type:"NPM",value:"0.0.26"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.3"}},entry:"index.jsx",title:"\u57FA\u7840\u4F7F\u7528"},context:{durians:n(51660),react:n(67294),antd:n(52378)},renderOpts:{compile:function(){var u=c()(o()().mark(function l(){var r,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,i));case 3:case"end":return e.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}}}},83402:function(p,t,n){n.r(t),n.d(t,{demos:function(){return y}});var s=n(15009),o=n.n(s),v=n(99289),c=n.n(v),a=n(67294),y={"tablepro-demo-0":{component:a.memo(a.lazy(c()(o()().mark(function u(){var d,l,r,i;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,51660));case 2:return d=e.sent,l=d.TablePro,e.next=6,Promise.resolve().then(n.t.bind(n,67294,19));case 6:return r=e.sent,i=r.useEffect,e.abrupt("return",{default:function(){for(var m=function(){console.log("\u53D6\u6D88")},I=function(){console.log("\u786E\u5B9A")},g=function(){console.log("\u70B9\u51FB")},P=[],f=0;f<50;f++)P.push({key:f,name:"Edward ".concat(f),age:f,address:"London Park no. ".concat(f),name1:"London Park no. ".concat(f,"1111"),name2:"London Park no. ".concat(f,"2222"),name3:"London Park no. ".concat(f,"2222")});return a.createElement("div",{style:{width:"100%",overflow:"hidden"}},a.createElement(l,{className:"xlb_table_demo",bordered:!0,rowKey:"key",columns:[{title:"Full Name",dataIndex:"name",width:100,key:"name",sorter:!0,fixed:"left",align:"center"},{title:"Age",width:100,dataIndex:"age",key:"age",sorter:!0,children:[{title:"Name1",width:100,dataIndex:"name1",key:"name",sorter:!0,children:[{title:"Name3",width:100,dataIndex:"name3",key:"name",sorter:!0}]},{title:"Name2",width:100,dataIndex:"name2",key:"name"}]},{title:"Column 1",dataIndex:"address",key:"1",width:500}],dataSource:P}))}});case 9:case"end":return e.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-0",refAtomIds:["TablePro"],dependencies:{"index.jsx":{type:"FILE",value:`import {TablePro} from "durians";
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
        // rowHeight={200}
        bordered={true}
        rowKey={"key"}
        columns={[
          {
            title: 'Full Name',
            dataIndex: 'name',
            width: 100,
            key: 'name',
            sorter: true,
            fixed: 'left',
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
          // {
          //   title: 'Column 2',
          //   dataIndex: '2',
          //   key: '2',
          //   width: 150,
          // },
          // {
          //   title: 'Column 3',
          //   dataIndex: '3',
          //   key: '3',
          //   width: 150,
          // },
          // {
          //   title: 'Column 4',
          //   dataIndex: '4',
          //   key: '4',
          //   width: 150,
          // },
          // {
          //   title: 'Column 5',
          //   dataIndex: '5',
          //   key: '5',
          //   width: 150,
          // },
          // {
          //   title: 'Column 6',
          //   dataIndex: '6',
          //   key: '6',
          //   width: 150,
          // },
          // {
          //   title: 'Column 7',
          //   dataIndex: '7',
          //   key: '7',
          //   width: 150,
          // },
          // {title: 'Column 8', dataIndex: '8', key: '8'},
          // {
          //   title: 'Action',
          //   dataIndex: 'operation',
          //   key: 'operation',
          //   width: 100,
          //   render: () => <a>action</a>,
          // },
        ]}
        dataSource={data}
      />
    </div>
  );
};`},durians:{type:"NPM",value:"0.0.26"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx",title:"demo\u9884\u89C8"},context:{durians:n(51660),react:n(67294)},renderOpts:{compile:function(){var u=c()(o()().mark(function l(){var r,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,i));case 3:case"end":return e.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}}}},79868:function(p,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"\u5BC6\u7801\u7684\u52A0\u5BC6\u4F7F\u7528\u7684\u662FCryptoJS.SHA256",paraId:0,tocIndex:0},{value:"\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7684\u5B57\u6BB5\u662Fmobile",paraId:1,tocIndex:0}]},76406:function(p,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[]},77869:function(p,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[]}}]);
