"use strict";(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[838],{32450:function(S,B,e){var g;e.r(B),e.d(B,{demos:function(){return s}});var D=e(5574),R=e.n(D),y=e(97857),v=e.n(y),$=e(15009),i=e.n($),h=e(99289),E=e.n(h),P=e(67294),A=e(34986),T=e(65388),f=e(91894),p=e(90480),u=e(30381),o=e.n(u),s={"formpro-demo-0":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c,r,m;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=I.sent,a=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return d=I.sent,l=d.Button,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return c=I.sent,r=c.default,m=function(){return r.createElement(a,{url:"/api/submit",layoutType:"ModalForm",fieldProps:{title:"\u57FA\u7840\u8868\u5355",columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}},{title:"\u5E74\u9F84",dataIndex:"age",valueType:"digit",fieldProps:{min:0,max:100}}]}},r.createElement(l,{type:"primary"},"\u6253\u5F00\u8868\u5355"))},I.abrupt("return",{default:m});case 14:case"end":return I.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-0",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      layoutType="ModalForm"
      fieldProps={{
        title: '\u57FA\u7840\u8868\u5355',
        columns: [
          {
            title: '\u7528\u6237\u540D',
            dataIndex: 'username',
            valueType: 'text',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                }
              ]
            }
          },
          {
            title: '\u5E74\u9F84',
            dataIndex: 'age',
            valueType: 'digit',
            fieldProps: {
              min: 0,
              max: 100
            }
          }
        ]
      }}
    >
      <Button type="primary">\u6253\u5F00\u8868\u5355</Button>
    </FormPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:f,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-1":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=m.sent,a=n.FormPro,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,l=d.default,c=function(){return l.createElement(a,{fieldProps:{columns:[{title:"\u9009\u62E9\u7528\u6237",dataIndex:"users",valueType:"tableSelect",fieldProps:{title:"\u9009\u62E9\u7528\u6237",tableFieldProps:{url:"/api/users",columns:[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"department"}]}}}]}})},m.abrupt("return",{default:c});case 10:case"end":return m.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-1",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
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
                  { title: '\u90E8\u95E8', dataIndex: 'department' }
                ]
              }
            }
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-2":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=m.sent,a=n.FormPro,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,l=d.default,c=function(){return l.createElement(a,{fieldProps:{columns:[{title:"\u90E8\u95E8\u9009\u62E9",dataIndex:"department",valueType:"treeSelect",fieldProps:{url:"/api/departments",params:function(x){return{parentId:x==null?void 0:x.id}},setData:function(x){return x.data},fieldNames:{label:"name",value:"id"}}}]}})},m.abrupt("return",{default:c});case 10:case"end":return m.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-2",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '\u90E8\u95E8\u9009\u62E9',
            dataIndex: 'department',
            valueType: 'treeSelect',
            fieldProps: {
              url: '/api/departments',
              params: (node) => ({ parentId: node?.id }),
              setData: (res) => res.data,
              fieldNames: {
                label: 'name',
                value: 'id'
              }
            }
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-3":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=m.sent,a=n.FormPro,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,l=d.default,c=function(){return l.createElement(a,{fieldProps:{columns:[{title:"\u9644\u4EF6",dataIndex:"files",valueType:"upload",fieldProps:{title:"\u4E0A\u4F20\u6587\u4EF6",url:"/api/upload",setData:function(x){return x.url},fieldPropsUpload:{multiple:!0,maxCount:5}}}]}})},m.abrupt("return",{default:c});case 10:case"end":return m.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-3",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
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
              setData: (res) => res.url,
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-4":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c,r,m,M,I,x;return i()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=O.sent,a=n.FormPro,O.next=6,Promise.resolve().then(e.bind(e,90480));case 6:return d=O.sent,l=d.ProFormList,c=d.ProFormText,O.next=11,Promise.resolve().then(e.bind(e,91894));case 11:return r=O.sent,m=r.Button,O.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return M=O.sent,I=M.default,x=function(){return I.createElement(a,{url:"/api/submit",fieldProps:{title:"\u81EA\u5B9A\u4E49\u8868\u5355",columns:[{title:"\u7528\u6237\u5217\u8868",dataIndex:"users",renderFormItem:function(){return I.createElement(l,{name:"users",initialValue:[{name:""}]},function(b,j){return I.createElement(c,{name:["name"],label:"\u7528\u6237 ".concat(j+1)})})}}]}},I.createElement(m,{type:"primary"},"\u6DFB\u52A0\u7528\u6237"))},O.abrupt("return",{default:x});case 19:case"end":return O.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-4",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { ProForm, ProFormList, ProFormText } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      fieldProps={{
        title: '\u81EA\u5B9A\u4E49\u8868\u5355',
        columns: [
          {
            title: '\u7528\u6237\u5217\u8868',
            dataIndex: 'users',
            renderFormItem: () => (
              <ProFormList
                name="users"
                initialValue={[{ name: '' }]}
              >
                {(f, index) => (
                  <ProFormText
                    name={['name']}
                    label={\`\u7528\u6237 \${index + 1}\`}
                  />
                )}
              </ProFormList>
            )
          }
        ]
      }}
    >
      <Button type="primary">\u6DFB\u52A0\u7528\u6237</Button>
    </FormPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},"@ant-design/pro-components":{type:"NPM",value:"2.8.7"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,"@ant-design/pro-components":p,antd:f,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-5":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c,r,m;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=I.sent,a=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return d=I.sent,l=d.Button,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return c=I.sent,r=c.default,m=function(){return r.createElement(a,{fieldProps:{columns:[{title:"\u624B\u673A\u53F7",dataIndex:"mobile",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:/^1\d{10}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}]}}]}},r.createElement(l,null,"\u63D0\u4EA4"))},I.abrupt("return",{default:m});case 14:case"end":return I.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-5",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '\u624B\u673A\u53F7',
            dataIndex: 'mobile',
            formItemProps: {
              rules: [
                { required: true, message: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' },
                { pattern: /^1\\d{10}$/, message: '\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E' }
              ]
            }
          }
        ]
      }}
    >
      <Button>\u63D0\u4EA4</Button>
    </FormPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:f,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-6":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c,r,m,M,I;return i()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=F.sent,a=n.FormPro,F.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return d=F.sent,l=d.Button,F.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return c=F.sent,r=c.default,F.next=14,Promise.resolve().then(e.t.bind(e,30381,23));case 14:return m=F.sent,M=m.default,I=function(){return r.createElement(a,{url:"/api/submit",beforeSubmit:function(N){return v()(v()({},N),{},{birthday:M(N.birthday).format("YYYY-MM-DD"),age:Number(N.age)})}},r.createElement(l,null,"\u63D0\u4EA4"))},F.abrupt("return",{default:I});case 18:case"end":return F.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-6",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';
import moment from 'moment';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      beforeSubmit={(values) => ({
        ...values,
        birthday: moment(values.birthday).format('YYYY-MM-DD'),
        age: Number(values.age)
      })}
    >
      <Button>\u63D0\u4EA4</Button>
    </FormPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"},moment:{type:"NPM",value:"2.30.1"}},entry:"index.tsx"},context:{durians:T,antd:f,react:g||(g=e.t(P,2)),moment:u},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-7":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c,r,m;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=I.sent,a=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return d=I.sent,l=d.Button,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return c=I.sent,r=c.default,m=function(){return r.createElement(a,{isEdit:!0,detailUrl:"/api/detail",record:{id:1},detailSetData:function(O){return v()(v()({},O.data),{},{files:JSON.parse(O.data.files)})}},r.createElement(l,null,"\u7F16\u8F91"))},I.abrupt("return",{default:m});case 14:case"end":return I.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-7",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      isEdit={true}
      detailUrl="/api/detail"
      record={{ id: 1 }}
      detailSetData={(response) => ({
        ...response.data,
        files: JSON.parse(response.data.files)
      })}
    >
      <Button>\u7F16\u8F91</Button>
    </FormPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:f,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-8":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c,r,m,M;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=x.sent,a=n.FormPro,x.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return d=x.sent,l=d.Input,c=d.Button,x.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return r=x.sent,m=r.default,M=function(){return m.createElement(a,{fieldProps:{columns:[{title:"\u81EA\u5B9A\u4E49\u8F93\u5165",dataIndex:"custom",renderFormItem:function(){return m.createElement(l.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxLength:100,showCount:!0})}}]}},m.createElement(c,null,"\u63D0\u4EA4"))},x.abrupt("return",{default:M});case 15:case"end":return x.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-8",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { Input, Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '\u81EA\u5B9A\u4E49\u8F93\u5165',
            dataIndex: 'custom',
            renderFormItem: () => (
              <Input.TextArea
                placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
                maxLength={100}
                showCount
              />
            )
          }
        ]
      }}
    >
      <Button>\u63D0\u4EA4</Button>
    </FormPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:f,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-9":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=m.sent,a=n.FormPro,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,l=d.default,c=function(){return l.createElement(a,{layoutType:"DrawerForm",fieldProps:{grid:!0,colProps:{span:12},columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24}},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u90AE\u7BB1",dataIndex:"email"}]}})},m.abrupt("return",{default:c});case 10:case"end":return m.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-9",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      layoutType="DrawerForm"
      fieldProps={{
        grid: true,
        colProps: { span: 12 },
        columns: [
          {
            title: '\u7528\u6237\u540D',
            dataIndex: 'username',
            colProps: { span: 24 }
          },
          {
            title: '\u5E74\u9F84',
            dataIndex: 'age'
          },
          {
            title: '\u90AE\u7BB1',
            dataIndex: 'email'
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-10":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c,r,m;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=I.sent,a=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return d=I.sent,l=d.message,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return c=I.sent,r=c.default,m=function(){var F=function(){var O=E()(i()().mark(function C(N,b,j){var L,U;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.prev=0,K.next=3,fetch(N,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(b)});case 3:return L=K.sent,K.next=6,L.json();case 6:U=K.sent,U.code===0?j(U):l.error(U.msg||"\u8BF7\u6C42\u5931\u8D25"),K.next=14;break;case 10:K.prev=10,K.t0=K.catch(0),l.error("\u7F51\u7EDC\u9519\u8BEF"),console.error(K.t0);case 14:case"end":return K.stop()}},C,null,[[0,10]])}));return function(N,b,j){return O.apply(this,arguments)}}();return r.createElement(a,{url:"/api/submit",ajax:F,fieldProps:{columns:[{title:"\u7528\u6237\u540D",dataIndex:"username"}]}})},I.abrupt("return",{default:m});case 14:case"end":return I.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-10",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { message } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  const customAjax = async (url: string, params: any, callback: (data: any) => void) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${localStorage.getItem('token')}\`
        },
        body: JSON.stringify(params)
      });
      const data = await response.json();
      
      if (data.code === 0) {
        callback(data);
      } else {
        message.error(data.msg || '\u8BF7\u6C42\u5931\u8D25');
      }
    } catch (error) {
      message.error('\u7F51\u7EDC\u9519\u8BEF');
      console.error(error);
    }
  };

  return (
    <FormPro
      url="/api/submit"
      ajax={customAjax}
      fieldProps={{
        columns: [
          {
            title: '\u7528\u6237\u540D',
            dataIndex: 'username'
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:f,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-11":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=m.sent,a=n.FormPro,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,l=d.default,c=function(){return l.createElement(a,{fieldProps:{columns:[{title:"\u7C7B\u578B",dataIndex:"type",valueType:"select",fieldProps:{options:[{label:"\u4E2A\u4EBA",value:"personal"},{label:"\u4F01\u4E1A",value:"company"}]}},{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"companyName",dependencies:["type"],formItemProps:function(x){var F=x.getFieldValue("type");return{hidden:F!=="company"}}}]}})},m.abrupt("return",{default:c});case 10:case"end":return m.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-11",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '\u7C7B\u578B',
            dataIndex: 'type',
            valueType: 'select',
            fieldProps: {
              options: [
                { label: '\u4E2A\u4EBA', value: 'personal' },
                { label: '\u4F01\u4E1A', value: 'company' }
              ]
            }
          },
          {
            title: '\u4F01\u4E1A\u540D\u79F0',
            dataIndex: 'companyName',
            dependencies: ['type'],
            formItemProps: (form) => {
              const type = form.getFieldValue('type');
              return {
                hidden: type !== 'company'
              };
            }
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}},"formpro-demo-12":{component:P.memo(P.lazy(E()(i()().mark(function t(){var n,a,d,l,c;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return n=m.sent,a=n.FormPro,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,l=d.default,c=function(){return l.createElement(a,{url:"/api/submit",beforeSubmit:function(x,F,O){var C=new FormData;return Object.entries(x).forEach(function(N){var b=R()(N,2),j=b[0],L=b[1];Array.isArray(L)?C.append(j,JSON.stringify(L)):L instanceof File?C.append(j,L):C.append(j,String(L))}),C},fieldProps:{columns:[{title:"\u9644\u4EF6",dataIndex:"file",valueType:"upload"}]}})},m.abrupt("return",{default:c});case 10:case"end":return m.stop()}},t)})))),asset:{type:"BLOCK",id:"formpro-demo-12",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      beforeSubmit={(values, record, originalValues) => {
        // \u8F6C\u6362\u63D0\u4EA4\u6570\u636E
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else if (value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, String(value));
          }
        });
        return formData;
      }}
      fieldProps={{
        columns: [
          {
            title: '\u9644\u4EF6',
            dataIndex: 'file',
            valueType: 'upload'
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:g||(g=e.t(P,2))},renderOpts:{compile:function(){var t=E()(i()().mark(function a(){var d,l=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},a)}));function n(){return t.apply(this,arguments)}return n}()}}}},97389:function(S,B,e){e.r(B),e.d(B,{demos:function(){return T}});var g=e(15009),D=e.n(g),R=e(99289),y=e.n(R),v=e(67294),$=e(37738),i=e(65388),h=e(91894),E=e(81354),P=e.n(E),A=e(27076),T={"loginpro-demo-0":{component:v.memo(v.lazy(y()(D()().mark(function f(){var p,u,o,s,t;return D()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=a.sent,u=p.LoginPro,a.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=a.sent,s=o.message,t=function(){return v.createElement(u,{url:"/api/login",callback:function(c){s.success("\u767B\u5F55\u6210\u529F\uFF01"),console.log("\u767B\u5F55\u6570\u636E\uFF1A",c)}})},a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-0",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
import { message } from 'antd';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      callback={(data) => {
        message.success('\u767B\u5F55\u6210\u529F\uFF01');
        console.log('\u767B\u5F55\u6570\u636E\uFF1A', data);
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"}},entry:"index.tsx"},context:{durians:i,antd:h},renderOpts:{compile:function(){var f=y()(D()().mark(function u(){var o,s=arguments;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"loginpro-demo-1":{component:v.memo(v.lazy(y()(D()().mark(function f(){var p,u,o,s,t;return D()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=a.sent,u=p.LoginPro,a.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=a.sent,s=o.message,t=function(){return v.createElement(u,{hasSmsLogin:!0,hasAccountLogin:!0,url:"/api/login",captchaUrl:"/api/sendSms",loginFormFieldProps:{title:"\u7CFB\u7EDF\u767B\u5F55",subTitle:"\u6B22\u8FCE\u4F7F\u7528"},callback:function(c){s.success("\u767B\u5F55\u6210\u529F\uFF01")}})},a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-1",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
import { message } from 'antd';

const Demo = () => {
  return (
    <LoginPro
      hasSmsLogin={true}
      hasAccountLogin={true}
      url="/api/login"
      captchaUrl="/api/sendSms"
      loginFormFieldProps={{
        title: "\u7CFB\u7EDF\u767B\u5F55",
        subTitle: "\u6B22\u8FCE\u4F7F\u7528"
      }}
      callback={(data) => {
        message.success('\u767B\u5F55\u6210\u529F\uFF01');
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"}},entry:"index.tsx"},context:{durians:i,antd:h},renderOpts:{compile:function(){var f=y()(D()().mark(function u(){var o,s=arguments;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"loginpro-demo-2":{component:v.memo(v.lazy(y()(D()().mark(function f(){var p,u,o,s,t;return D()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=a.sent,u=p.LoginPro,a.next=6,Promise.resolve().then(e.t.bind(e,81354,23));case 6:return o=a.sent,s=o.default,t=function(){return v.createElement(u,{url:"/api/login",secretKey:"your-secret-key",extraPasswordText:"_salt",encrypt:function(c){return s.MD5(c).toString()}})},a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-2",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
import CryptoJS from 'crypto-js';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      secretKey="your-secret-key" // \u4F7F\u7528 AES \u52A0\u5BC6
      extraPasswordText="_salt" // \u5BC6\u7801\u52A0\u76D0
      // \u6216\u4F7F\u7528\u81EA\u5B9A\u4E49\u52A0\u5BC6
      encrypt={(password) => {
        return CryptoJS.MD5(password).toString();
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},"crypto-js":{type:"NPM",value:"4.2.0"}},entry:"index.tsx"},context:{durians:i,"crypto-js":E},renderOpts:{compile:function(){var f=y()(D()().mark(function u(){var o,s=arguments;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"loginpro-demo-3":{component:v.memo(v.lazy(y()(D()().mark(function f(){var p,u,o,s,t;return D()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=a.sent,u=p.LoginPro,a.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=a.sent,s=o.message,t=function(){var l=function(r,m,M){fetch(r,{method:"POST",body:JSON.stringify(m)}).then(function(I){return I.json()}).then(function(I){I.code===0?M(I):s.error(I.msg||"\u767B\u5F55\u5931\u8D25")}).catch(function(I){s.error("\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5")})};return v.createElement(u,{url:"/api/login",ajax:l})},a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-3",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
import { message } from 'antd';

const Demo = () => {
  const customAjax = (url, params, callback) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(data => {
        if (data.code === 0) {
          callback(data);
        } else {
          message.error(data.msg || '\u767B\u5F55\u5931\u8D25');
        }
      })
      .catch(err => {
        message.error('\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5');
      });
  };

  return (
    <LoginPro
      url="/api/login"
      ajax={customAjax}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"}},entry:"index.tsx"},context:{durians:i,antd:h},renderOpts:{compile:function(){var f=y()(D()().mark(function u(){var o,s=arguments;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"loginpro-demo-4":{component:v.memo(v.lazy(y()(D()().mark(function f(){var p,u,o,s,t,n,a,d,l;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=r.sent,u=p.LoginPro,r.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=r.sent,s=o.Space,t=o.Button,r.next=11,Promise.resolve().then(e.bind(e,27076));case 11:return n=r.sent,a=n.GithubOutlined,d=n.WechatOutlined,l=function(){return v.createElement(u,{url:"/api/login",BottomDom:function(){return v.createElement("div",{style:{textAlign:"center",marginTop:24}},v.createElement(s,null,v.createElement(t,{icon:v.createElement(a,null),onClick:function(){return window.location.href="/api/github/login"}},"Github \u767B\u5F55"),v.createElement(t,{icon:v.createElement(d,null),onClick:function(){return window.location.href="/api/wechat/login"}},"\u5FAE\u4FE1\u767B\u5F55")))}})},r.abrupt("return",{default:l});case 16:case"end":return r.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-4",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
import { Space, Button } from 'antd';
import { GithubOutlined, WechatOutlined } from '@ant-design/icons';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      BottomDom={() => (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Space>
            <Button icon={<GithubOutlined />} onClick={() => window.location.href = '/api/github/login'}>
              Github \u767B\u5F55
            </Button>
            <Button icon={<WechatOutlined />} onClick={() => window.location.href = '/api/wechat/login'}>
              \u5FAE\u4FE1\u767B\u5F55
            </Button>
          </Space>
        </div>
      )}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},"@ant-design/icons":{type:"NPM",value:"5.6.1"}},entry:"index.tsx"},context:{durians:i,antd:h,"@ant-design/icons":A},renderOpts:{compile:function(){var f=y()(D()().mark(function u(){var o,s=arguments;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"loginpro-demo-5":{component:v.memo(v.lazy(y()(D()().mark(function f(){var p,u,o;return D()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=t.sent,u=p.LoginPro,o=function(){return v.createElement(u,{url:"/api/login",callback:function(d){localStorage.setItem("token",d.token),localStorage.setItem("userInfo",JSON.stringify(d.userInfo)),axios.defaults.headers.common.Authorization="Bearer ".concat(d.token),window.location.href="/dashboard"},setData:function(d){return{token:d.data.accessToken,userInfo:d.data.userInfo}}})},t.abrupt("return",{default:o});case 6:case"end":return t.stop()}},f)})))),asset:{type:"BLOCK",id:"loginpro-demo-5",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      callback={(data) => {
        // \u5B58\u50A8\u767B\u5F55\u4FE1\u606F
        localStorage.setItem('token', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        
        // \u8BBE\u7F6E\u8BF7\u6C42\u5934
        axios.defaults.headers.common['Authorization'] = \`Bearer \${data.token}\`;
        
        // \u8DF3\u8F6C\u9996\u9875
        window.location.href = '/dashboard';
      }}
      setData={(response) => {
        // \u5904\u7406\u54CD\u5E94\u6570\u636E
        return {
          token: response.data.accessToken,
          userInfo: response.data.userInfo
        };
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:i},renderOpts:{compile:function(){var f=y()(D()().mark(function u(){var o,s=arguments;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}}}},90026:function(S,B,e){var g;e.r(B),e.d(B,{demos:function(){return T}});var D=e(5574),R=e.n(D),y=e(15009),v=e.n(y),$=e(99289),i=e.n($),h=e(67294),E=e(42460),P=e(65388),A=e(91894),T={"modalpro-demo-0":{component:h.memo(h.lazy(i()(v()().mark(function f(){var p,u,o,s,t;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=a.sent,u=p.ModalPro,a.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=a.sent,s=o.Button,t=function(){return h.createElement(u,{title:"\u57FA\u7840\u5F39\u7A97",Content:function(){return h.createElement("div",null,"\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5F39\u7A97\u793A\u4F8B")}},h.createElement(s,{type:"primary"},"\u6253\u5F00\u5F39\u7A97"))},a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},f)})))),asset:{type:"BLOCK",id:"modalpro-demo-0",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
import {Button} from 'antd';

const Demo = () => {
  return (
    <ModalPro
      title="\u57FA\u7840\u5F39\u7A97"
      Content={() => <div>\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5F39\u7A97\u793A\u4F8B</div>}
    >
      <Button type="primary">\u6253\u5F00\u5F39\u7A97</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"}},entry:"index.tsx"},context:{durians:P,antd:A},renderOpts:{compile:function(){var f=i()(v()().mark(function u(){var o,s=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"modalpro-demo-1":{component:h.memo(h.lazy(i()(v()().mark(function f(){var p,u,o,s,t,n,a,d,l,c;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=m.sent,u=p.ModalPro,m.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=m.sent,s=o.Button,t=o.Form,n=o.Input,a=o.message,m.next=13,Promise.resolve().then(e.t.bind(e,67294,19));case 13:return d=m.sent,l=d.default,c=function(){return l.createElement(u,{title:"\u8868\u5355\u63D0\u4EA4",Content:function(x){var F=x.setIsModalOpen;return l.createElement(t,{onFinish:function(C){console.log("\u8868\u5355\u503C\uFF1A",C),a.success("\u63D0\u4EA4\u6210\u529F"),F(!1)}},l.createElement(t.Item,{name:"username",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},l.createElement(n,null)),l.createElement(t.Item,{name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{type:"email",message:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1"}]},l.createElement(n,null)))},handleOk:function(x){x(!0)}},l.createElement(s,{type:"primary"},"\u6253\u5F00\u8868\u5355"))},m.abrupt("return",{default:c});case 17:case"end":return m.stop()}},f)})))),asset:{type:"BLOCK",id:"modalpro-demo-1",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
import {Button, Form, Input, message} from 'antd';
import React, {FC} from 'react';

const Demo: FC = () => {
  return (
    <ModalPro
      title="\u8868\u5355\u63D0\u4EA4"
      Content={({setIsModalOpen}) => (
        <Form
          onFinish={(values) => {
            console.log('\u8868\u5355\u503C\uFF1A', values);
            message.success('\u63D0\u4EA4\u6210\u529F');
            setIsModalOpen(false);
          }}>
          <Form.Item
            name="username"
            label="\u7528\u6237\u540D"
            rules={[{required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="email"
            label="\u90AE\u7BB1"
            rules={[
              {required: true, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1'},
              {type: 'email', message: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1'}
            ]}
          >
            <Input/>
          </Form.Item>
        </Form>
      )}
      handleOk={(callback) => {
        // \u8868\u5355\u901A\u8FC7 Content \u5185\u90E8\u63D0\u4EA4\uFF0C\u8FD9\u91CC\u53EA\u9700\u5173\u95ED\u5F39\u7A97
        callback(true);
      }}
    >
      <Button type="primary">\u6253\u5F00\u8868\u5355</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:P,antd:A,react:g||(g=e.t(h,2))},renderOpts:{compile:function(){var f=i()(v()().mark(function u(){var o,s=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"modalpro-demo-2":{component:h.memo(h.lazy(i()(v()().mark(function f(){var p,u,o,s,t,n,a,d,l;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=r.sent,u=p.ModalPro,r.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=r.sent,s=o.Button,t=o.Spin,n=o.message,r.next=12,Promise.resolve().then(e.t.bind(e,67294,19));case 12:return a=r.sent,d=a.useState,l=function(){var M=d(!1),I=R()(M,2),x=I[0],F=I[1];return h.createElement(u,{title:"\u5F02\u6B65\u64CD\u4F5C",Content:function(){return h.createElement("div",{style:{textAlign:"center",padding:"20px"}},x?h.createElement(t,null):"\u70B9\u51FB\u786E\u5B9A\u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C")},handleOk:function(){var O=i()(v()().mark(function N(b){return v()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return F(!0),L.prev=1,L.next=4,new Promise(function(U){return setTimeout(U,2e3)});case 4:n.success("\u64CD\u4F5C\u6210\u529F"),b(!0),L.next=11;break;case 8:L.prev=8,L.t0=L.catch(1),n.error("\u64CD\u4F5C\u5931\u8D25");case 11:return L.prev=11,F(!1),L.finish(11);case 14:case"end":return L.stop()}},N,null,[[1,8,11,14]])}));function C(N){return O.apply(this,arguments)}return C}(),fieldProps:{confirmLoading:x}},h.createElement(s,{type:"primary"},"\u5F02\u6B65\u64CD\u4F5C"))},r.abrupt("return",{default:l});case 16:case"end":return r.stop()}},f)})))),asset:{type:"BLOCK",id:"modalpro-demo-2",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
import {Button, Spin, message} from 'antd';
import {useState} from 'react';

const Demo = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ModalPro
      title="\u5F02\u6B65\u64CD\u4F5C"
      Content={() => (
        <div style={{textAlign: 'center', padding: '20px'}}>
          {loading ? <Spin/> : '\u70B9\u51FB\u786E\u5B9A\u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C'}
        </div>
      )}
      handleOk={async (callback) => {
        setLoading(true);
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          message.success('\u64CD\u4F5C\u6210\u529F');
          callback(true);
        } catch (error) {
          message.error('\u64CD\u4F5C\u5931\u8D25');
        } finally {
          setLoading(false);
        }
      }}
      fieldProps={{
        confirmLoading: loading
      }}
    >
      <Button type="primary">\u5F02\u6B65\u64CD\u4F5C</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:P,antd:A,react:g||(g=e.t(h,2))},renderOpts:{compile:function(){var f=i()(v()().mark(function u(){var o,s=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"modalpro-demo-3":{component:h.memo(h.lazy(i()(v()().mark(function f(){var p,u,o,s,t,n,a;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=l.sent,u=p.ModalPro,l.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=l.sent,s=o.Button,l.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return t=l.sent,n=t.useState,a=function(){var r=n(0),m=R()(r,2),M=m[0],I=m[1];return h.createElement(u,{Content:function(){return h.createElement("div",null,h.createElement("p",null,"\u5F53\u524D\u8BA1\u6570\uFF1A",M),h.createElement(s,{onClick:function(){return I(function(O){return O+1})}},"\u589E\u52A0"))}},h.createElement(s,null,"\u6253\u5F00\u5F39\u7A97"))},l.abrupt("return",{default:a});case 14:case"end":return l.stop()}},f)})))),asset:{type:"BLOCK",id:"modalpro-demo-3",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
import {Button} from 'antd';
import {useState} from 'react';

const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <ModalPro
      Content={() => (
        <div>
          <p>\u5F53\u524D\u8BA1\u6570\uFF1A{count}</p>
          <Button onClick={() => setCount(c => c + 1)}>\u589E\u52A0</Button>
        </div>
      )}
    >
      <Button>\u6253\u5F00\u5F39\u7A97</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:P,antd:A,react:g||(g=e.t(h,2))},renderOpts:{compile:function(){var f=i()(v()().mark(function u(){var o,s=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"modalpro-demo-4":{component:h.memo(h.lazy(i()(v()().mark(function f(){var p,u,o,s,t;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=a.sent,u=p.ModalPro,a.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=a.sent,s=o.Button,t=function(){return h.createElement(u,{fieldProps:{okText:"\u786E\u8BA4\u63D0\u4EA4",cancelText:"\u53D6\u6D88\u64CD\u4F5C",okButtonProps:{type:"primary",danger:!0},cancelButtonProps:{type:"default"}}},h.createElement(s,null,"\u81EA\u5B9A\u4E49\u6309\u94AE"))},a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},f)})))),asset:{type:"BLOCK",id:"modalpro-demo-4",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
import {Button} from 'antd';

const Demo = () => {
  return (
    <ModalPro
      fieldProps={{
        okText: '\u786E\u8BA4\u63D0\u4EA4',
        cancelText: '\u53D6\u6D88\u64CD\u4F5C',
        okButtonProps: {
          type: 'primary',
          danger: true
        },
        cancelButtonProps: {
          type: 'default'
        }
      }}
    >
      <Button>\u81EA\u5B9A\u4E49\u6309\u94AE</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"}},entry:"index.tsx"},context:{durians:P,antd:A},renderOpts:{compile:function(){var f=i()(v()().mark(function u(){var o,s=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"modalpro-demo-5":{component:h.memo(h.lazy(i()(v()().mark(function f(){var p,u,o,s,t,n,a,d;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=c.sent,u=p.ModalPro,c.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=c.sent,s=o.Button,t=o.Form,n=o.Input,a=o.message,d=function(){var m=t.useForm(),M=R()(m,1),I=M[0];return h.createElement(u,{Content:function(){return h.createElement(t,{form:I},h.createElement(t.Item,{name:"email",rules:[{required:!0},{type:"email"}]},h.createElement(n,null)))},handleOk:function(){var x=i()(v()().mark(function O(C){return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,I.validateFields();case 3:C(!0),b.next=9;break;case 6:b.prev=6,b.t0=b.catch(0),a.error("\u8BF7\u5B8C\u6210\u8868\u5355\u6821\u9A8C");case 9:case"end":return b.stop()}},O,null,[[0,6]])}));function F(O){return x.apply(this,arguments)}return F}()},h.createElement(s,null,"\u8868\u5355\u6821\u9A8C"))},c.abrupt("return",{default:d});case 13:case"end":return c.stop()}},f)})))),asset:{type:"BLOCK",id:"modalpro-demo-5",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
import {Button, Form, Input, message} from 'antd';

const Demo = () => {
  const [form] = Form.useForm();

  return (
    <ModalPro
      Content={() => (
        <Form form={form}>
          <Form.Item
            name="email"
            rules={[
              {required: true},
              {type: 'email'}
            ]}
          >
            <Input/>
          </Form.Item>
        </Form>
      )}
      handleOk={async (callback) => {
        try {
          await form.validateFields();
          callback(true);
        } catch {
          message.error('\u8BF7\u5B8C\u6210\u8868\u5355\u6821\u9A8C');
        }
      }}
    >
      <Button>\u8868\u5355\u6821\u9A8C</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"}},entry:"index.tsx"},context:{durians:P,antd:A},renderOpts:{compile:function(){var f=i()(v()().mark(function u(){var o,s=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}},"modalpro-demo-6":{component:h.memo(h.lazy(i()(v()().mark(function f(){var p,u,o,s,t,n,a;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return p=l.sent,u=p.ModalPro,l.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return o=l.sent,s=o.Button,l.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return t=l.sent,n=t.useState,a=function(){var r=n([]),m=R()(r,2),M=m[0],I=m[1];return h.createElement(u,{fieldProps:{afterClose:function(){return I([])},destroyOnClose:!0},Content:function(){return h.createElement("div",null,"\u5F53\u524D\u6570\u636E\uFF1A",JSON.stringify(M))}},h.createElement(s,null,"\u72B6\u6001\u91CD\u7F6E"))},l.abrupt("return",{default:a});case 14:case"end":return l.stop()}},f)})))),asset:{type:"BLOCK",id:"modalpro-demo-6",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
import {Button} from 'antd';
import {useState} from 'react';

const Demo = () => {
  const [data, setData] = useState([]);

  return (
    <ModalPro
      fieldProps={{
        afterClose: () => setData([]),
        destroyOnClose: true
      }}
      Content={() => (
        <div>\u5F53\u524D\u6570\u636E\uFF1A{JSON.stringify(data)}</div>
      )}
    >
      <Button>\u72B6\u6001\u91CD\u7F6E</Button>
    </ModalPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:P,antd:A,react:g||(g=e.t(h,2))},renderOpts:{compile:function(){var f=i()(v()().mark(function u(){var o,s=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,s));case 3:case"end":return n.stop()}},u)}));function p(){return f.apply(this,arguments)}return p}()}}}},78893:function(S,B,e){e.r(B),e.d(B,{demos:function(){return f}});var g=e(97857),D=e.n(g),R=e(15009),y=e.n(R),v=e(99289),$=e.n(v),i=e(67294),h=e(47117),E=e(65388),P=e(91894),A=e(27076),T=e(68216),f={"tablepro-demo-0":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s,t,n,a;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,65388));case 2:for(u=l.sent,o=u.TablePro,s=[{title:"\u59D3\u540D",dataIndex:"name",width:100,sorter:!0,fixed:"left"},{title:"\u5E74\u9F84",dataIndex:"age",width:100},{title:"\u5730\u5740",dataIndex:"address"}],t=[],n=0;n<10;n++)t.push({id:n,name:"\u7528\u6237".concat(n),age:Math.floor(Math.random()*100),address:"\u5730\u5740".concat(n)});return a=function(){return i.createElement(o,{fieldProps:{rowKey:"id",columns:s,dataSource:t},addUrl:"/api/add",editUrl:"/api/edit",deleteUrl:"/api/delete"})},l.abrupt("return",{default:a});case 9:case"end":return l.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-0",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    width: 100,
    sorter: true,  
    fixed: 'left'
  },
  {
    title: '\u5E74\u9F84', 
    dataIndex: 'age',
    width: 100
  },
  {
    title: '\u5730\u5740',
    dataIndex: 'address'
  }
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    id: i,
    name: \`\u7528\u6237\${i}\`,
    age: Math.floor(Math.random() * 100),
    address: \`\u5730\u5740\${i}\`
  });
}

const Demo = () => {
  return (
    <TablePro
      fieldProps={{
        rowKey: 'id',
        columns,
        dataSource: data
      }}
      addUrl="/api/add"
      editUrl="/api/edit"
      deleteUrl="/api/delete"
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}},"tablepro-demo-1":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return u=n.sent,o=u.TablePro,s=function(){return i.createElement(o,{url:"/api/list",treeFieldProps:{url:"/api/tree",fieldProps:{fieldNames:{title:"name",key:"id",children:"children"}}},fieldProps:{columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u72B6\u6001",dataIndex:"status",valueEnum:{0:{text:"\u7981\u7528",status:"Error"},1:{text:"\u542F\u7528",status:"Success"}}}]}})},n.abrupt("return",{default:s});case 6:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-1",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

const Demo = () => {
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
            title: '\u72B6\u6001',
            dataIndex: 'status',
            valueEnum: {
              0: { text: '\u7981\u7528', status: 'Error' },
              1: { text: '\u542F\u7528', status: 'Success' }
            }
          }
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}},"tablepro-demo-2":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s,t,n,a,d;return y()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return u=c.sent,o=u.TablePro,c.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return s=c.sent,t=s.Button,c.next=10,Promise.resolve().then(e.bind(e,27076));case 10:return n=c.sent,a=n.DownloadOutlined,d=function(){return i.createElement(o,{fieldProps:{toolBarRender:function(){return[i.createElement(t,{key:"export",icon:i.createElement(a,null),onClick:function(){return console.log("\u5BFC\u51FA")}},"\u5BFC\u51FA\u6570\u636E")]},columns:[]}})},c.abrupt("return",{default:d});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-2",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Demo = () => {
  return (
    <TablePro
      fieldProps={{
        toolBarRender: () => [
          <Button 
            key="export" 
            icon={<DownloadOutlined />}
            onClick={() => console.log('\u5BFC\u51FA')}
          >
            \u5BFC\u51FA\u6570\u636E
          </Button>
        ],
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"},"@ant-design/icons":{type:"NPM",value:"5.6.1"}},entry:"index.tsx"},context:{durians:E,antd:P,"@ant-design/icons":A},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}},"tablepro-demo-3":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s,t,n;return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return u=d.sent,o=u.TablePro,d.next=6,Promise.resolve().then(e.bind(e,68216));case 6:return s=d.sent,t=s.default,n=function(){var c=function(){var r=$()(y()().mark(function m(M,I,x){var F;return y()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.prev=0,C.next=3,t.post(M,I);case 3:F=C.sent,F.data.code===0&&x(F.data),C.next=10;break;case 7:C.prev=7,C.t0=C.catch(0),console.error(C.t0);case 10:case"end":return C.stop()}},m,null,[[0,7]])}));return function(M,I,x){return r.apply(this,arguments)}}();return i.createElement(o,{ajax:c,url:"/api/list",fieldProps:{columns:[]}})},d.abrupt("return",{default:n});case 10:case"end":return d.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-3",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';
import axios from 'axios';

const Demo = () => {
  const customRequest = async (url, params, callback) => {
    try {
      const res = await axios.post(url, params);
      if (res.data.code === 0) {
        callback(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TablePro
      ajax={customRequest}
      url="/api/list"
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},axios:{type:"NPM",value:"1.9.0"}},entry:"index.tsx"},context:{durians:E,axios:T},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}},"tablepro-demo-4":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return u=n.sent,o=u.TablePro,s=function(){return i.createElement(o,{url:"/api/list",setData:function(l){return l.data.list.map(function(c){return D()(D()({},c),{},{fullName:"".concat(c.firstName," ").concat(c.lastName)})})},setTotal:function(l){return l.data.total},fieldProps:{columns:[]}})},n.abrupt("return",{default:s});case 6:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-4",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

const Demo = () => {
  return (
    <TablePro
      url="/api/list"
      setData={(response) => {
        return response.data.list.map(item => ({
          ...item,
          fullName: \`\${item.firstName} \${item.lastName}\`
        }));
      }}
      setTotal={(response) => response.data.total}
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}},"tablepro-demo-5":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s,t,n,a;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return u=l.sent,o=u.TablePro,l.next=6,Promise.resolve().then(e.bind(e,91894));case 6:return s=l.sent,t=s.Button,n=s.message,a=function(){return i.createElement(o,{actionBar:[function(r){return i.createElement(t,{type:"link",onClick:function(){return n.success("\u67E5\u770B\u8BE6\u60C5\uFF1A".concat(r.id))}},"\u67E5\u770B")},function(r){return i.createElement(t,{type:"link",danger:!0,onClick:function(){return n.success("\u5220\u9664\uFF1A".concat(r.id))}},"\u5220\u9664")}],actionWidth:150,fieldProps:{columns:[]}})},l.abrupt("return",{default:a});case 11:case"end":return l.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-5",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';
import { Button, message } from 'antd';

const Demo = () => {
  return (
    <TablePro
      actionBar={[
        (record) => (
          <Button 
            type="link" 
            onClick={() => message.success(\`\u67E5\u770B\u8BE6\u60C5\uFF1A\${record.id}\`)}
          >
            \u67E5\u770B
          </Button>
        ),
        (record) => (
          <Button
            type="link"
            danger
            onClick={() => message.success(\`\u5220\u9664\uFF1A\${record.id}\`)}
          >
            \u5220\u9664
          </Button>
        )
      ]}
      actionWidth={150}
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.25.0"}},entry:"index.tsx"},context:{durians:E,antd:P},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}},"tablepro-demo-6":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return u=n.sent,o=u.TablePro,s=function(){return i.createElement(o,{url:"/api/list",treeFieldProps:{url:"/api/tree",fieldProps:{fieldNames:{title:"name",key:"id",children:"children"}}},treeParamsFun:function(l){return{departmentId:l[0]}},fieldProps:{columns:[]}})},n.abrupt("return",{default:s});case 6:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-6",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

const Demo = () => {
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
      treeParamsFun={(selectedKeys) => ({
        departmentId: selectedKeys[0]
      })}
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}},"tablepro-demo-7":{component:i.memo(i.lazy($()(y()().mark(function p(){var u,o,s;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,65388));case 2:return u=n.sent,o=u.TablePro,s=function(){return i.createElement(o,{keywordField:"keyword",keywordPlaceholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",fieldProps:{columns:[{title:"\u540D\u79F0",dataIndex:"name",proConfig:{isKeyword:!0}}]}})},n.abrupt("return",{default:s});case 6:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"tablepro-demo-7",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

const Demo = () => {
  return (
    <TablePro
      keywordField="keyword"
      keywordPlaceholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
      fieldProps={{
        columns: [
          {
            title: '\u540D\u79F0',
            dataIndex: 'name',
            proConfig: {
              isKeyword: true
            }
          }
          // ...other columns
        ]
      }}
    />
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var p=$()(y()().mark(function o(){var s,t=arguments;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return p.apply(this,arguments)}return u}()}}}},16568:function(S,B,e){var g;e.r(B),e.d(B,{demos:function(){return E}});var D=e(15009),R=e.n(D),y=e(99289),v=e.n(y),$=e(67294),i=e(16677),h=e(65388),E={"treepro-demo-0":{component:$.memo($.lazy(v()(R()().mark(function P(){var A,T,f,p,u,o;return R()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return A=t.sent,T=A.default,t.next=6,Promise.resolve().then(e.bind(e,65388));case 6:return f=t.sent,p=f.TreePro,u=[{title:"\u8282\u70B91",key:"0-0",children:[{title:"\u5B50\u8282\u70B91",key:"0-0-0"}]},{title:"\u8282\u70B92",key:"0-1",children:[{title:"\u5B50\u8282\u70B92",key:"0-1-0"}]}],o=function(){var a=function(c,r){console.log("\u9009\u4E2D",c,r)},d=function(c,r){console.log("\u52FE\u9009",c,r)};return T.createElement(p,{fieldProps:{treeData:u}})},t.abrupt("return",{default:o});case 11:case"end":return t.stop()}},P)})))),asset:{type:"BLOCK",id:"treepro-demo-0",refAtomIds:["TreePro"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
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

export default TreeProExample;`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"}},entry:"index.jsx",title:"\u57FA\u672C TreePro \u793A\u4F8B"},context:{react:g||(g=e.t($,2)),durians:h},renderOpts:{compile:function(){var P=v()(R()().mark(function T(){var f,p=arguments;return R()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(335).then(e.bind(e,37335));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,p));case 3:case"end":return o.stop()}},T)}));function A(){return P.apply(this,arguments)}return A}()}}}},45637:function(S,B,e){e.r(B),e.d(B,{texts:function(){return D}});var g=e(34986);const D=[{value:"FormPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Components",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u5C01\u88C5\u4E86\u5E38\u89C1\u7684\u8868\u5355\u573A\u666F\uFF0C\u652F\u6301\u6A21\u6001\u6846\u3001\u62BD\u5C49\u7B49\u591A\u79CD\u5E03\u5C40\u5F62\u5F0F\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u914D\u7F6E\u9879\u548C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u6A21\u6001\u6846\u6216\u62BD\u5C49\u5F62\u5F0F\u7684\u8868\u5355",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5904\u7406\u8868\u5355\u63D0\u4EA4\u3001\u6570\u636E\u83B7\u53D6\u7B49\u590D\u6742\u903B\u8F91",paraId:1,tocIndex:1},{value:"\u9700\u8981\u7EDF\u4E00\u7BA1\u7406\u8868\u5355\u9A8C\u8BC1\u548C\u63D0\u4EA4\u884C\u4E3A",paraId:1,tocIndex:1},{value:"\u9700\u8981\u7075\u6D3B\u914D\u7F6E\u8868\u5355\u5B57\u6BB5\u548C\u5E03\u5C40",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5904\u7406\u5F02\u6B65\u6570\u636E\u52A0\u8F7D\u548C\u63D0\u4EA4",paraId:1,tocIndex:1},{value:`import type { FormProProps } from 'durians';

interface FormProProps {
  layoutType?: 'ModalForm' | 'DrawerForm';
  children?: React.ReactNode;
  fieldProps?: BetaSchemaFormProps;
  url?: string;
  detailUrl?: string;
  record?: Record<string, any>;
  ajax?: (url: string, params: any, callback: (data: any) => void) => Promise<void>;
  finishFun?: (data: any, values: any) => void;
  setMsg?: (data: any) => string;
  detailSetData?: (data: any) => any;
  isEdit?: boolean;
  beforeSubmit?: (values: any, record: any, originValues: any) => any;
}
`,paraId:2,tocIndex:4},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"layoutType",paraId:3,tocIndex:4},{value:"\u8868\u5355\u5E03\u5C40\u7C7B\u578B\uFF0C\u652F\u6301\u6A21\u6001\u6846\u6216\u62BD\u5C49\u5F62\u5F0F",paraId:3,tocIndex:4},{value:"'ModalForm' | 'DrawerForm'",paraId:3,tocIndex:4},{value:"'ModalForm'",paraId:3,tocIndex:4},{value:"children",paraId:3,tocIndex:4},{value:"\u89E6\u53D1\u8868\u5355\u663E\u793A\u7684\u5143\u7D20\uFF0C\u901A\u5E38\u662F\u4E00\u4E2A\u6309\u94AE",paraId:3,tocIndex:4},{value:"ReactNode",paraId:3,tocIndex:4},{value:"<Button>\u70B9\u51FB\u6211</Button>",paraId:3,tocIndex:4},{value:"fieldProps",paraId:3,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA ",paraId:3,tocIndex:4},{value:"BetaSchemaForm",paraId:3,tocIndex:4},{value:" \u7684\u6240\u6709\u5C5E\u6027",paraId:3,tocIndex:4},{value:"BetaSchemaFormProps",paraId:3,tocIndex:4},{value:"{}",paraId:3,tocIndex:4},{value:"url",paraId:3,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u7684\u63A5\u53E3\u5730\u5740",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"detailUrl",paraId:3,tocIndex:4},{value:"\u83B7\u53D6\u8868\u5355\u8BE6\u60C5\u6570\u636E\u7684\u63A5\u53E3\u5730\u5740\uFF0C\u7F16\u8F91\u6A21\u5F0F\u65F6\u4F7F\u7528",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"record",paraId:3,tocIndex:4},{value:"\u8868\u5355\u521D\u59CB\u503C\uFF0C\u7528\u4E8E\u7F16\u8F91\u6A21\u5F0F\u4E0B\u7684\u6570\u636E\u56DE\u663E",paraId:3,tocIndex:4},{value:"Record<string, any>",paraId:3,tocIndex:4},{value:"{}",paraId:3,tocIndex:4},{value:"ajax",paraId:3,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8986\u76D6\u9ED8\u8BA4\u7684\u8BF7\u6C42\u5B9E\u73B0",paraId:3,tocIndex:4},{value:"(url: string, params: any, callback: (data: any) => void) => Promise<void>",paraId:3,tocIndex:4},{value:"ajaxCommon",paraId:3,tocIndex:4},{value:"finishFun",paraId:3,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570",paraId:3,tocIndex:4},{value:"(data: any, values: any) => void",paraId:3,tocIndex:4},{value:"() => {}",paraId:3,tocIndex:4},{value:"setMsg",paraId:3,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u63D0\u793A\u6D88\u606F\u5904\u7406\u51FD\u6570",paraId:3,tocIndex:4},{value:"(data: any) => string",paraId:3,tocIndex:4},{value:"(data) => data.msg",paraId:3,tocIndex:4},{value:"detailSetData",paraId:3,tocIndex:4},{value:"\u5904\u7406\u8BE6\u60C5\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u4E8E\u8F6C\u6362\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F",paraId:3,tocIndex:4},{value:"(data: any) => any",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"isEdit",paraId:3,tocIndex:4},{value:"\u662F\u5426\u4E3A\u7F16\u8F91\u6A21\u5F0F\uFF0Ctrue \u65F6\u4F1A\u81EA\u52A8\u52A0\u8F7D\u8BE6\u60C5\u6570\u636E",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"beforeSubmit",paraId:3,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u524D\u7684\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:3,tocIndex:4},{value:"(values: any, record: any, originValues: any) => any",paraId:3,tocIndex:4},{value:"(data) => data",paraId:3,tocIndex:4},{value:"FormPro \u5185\u7F6E\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u7279\u6B8A\u7684\u8868\u5355\u7EC4\u4EF6\uFF1A",paraId:4,tocIndex:5},{value:"\u8868\u683C\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u7EE7\u627F\u81EA ",paraId:5,tocIndex:6},{value:"TablePro",paraId:6,tocIndex:6},{value:"\u3002",paraId:5,tocIndex:6},{value:"\u53C2\u6570",paraId:7},{value:"\u8BF4\u660E",paraId:7},{value:"\u7C7B\u578B",paraId:7},{value:"\u9ED8\u8BA4\u503C",paraId:7},{value:"title",paraId:7},{value:"\u9009\u62E9\u6309\u94AE\u6587\u5B57",paraId:7},{value:"string",paraId:7},{value:"'\u9009\u62E9'",paraId:7},{value:"tableFieldProps",paraId:7},{value:"TablePro \u7684\u914D\u7F6E\u9879",paraId:7},{value:"TableProProps",paraId:7},{value:"-",paraId:7},{value:"modalFieldProps",paraId:7},{value:"ModalPro \u7684\u914D\u7F6E\u9879",paraId:7},{value:"ModalProProps",paraId:7},{value:"-",paraId:7},{value:"\u6811\u5F62\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u3002",paraId:8,tocIndex:7},{value:"\u53C2\u6570",paraId:9},{value:"\u8BF4\u660E",paraId:9},{value:"\u7C7B\u578B",paraId:9},{value:"\u9ED8\u8BA4\u503C",paraId:9},{value:"url",paraId:9},{value:"\u6570\u636E\u63A5\u53E3\u5730\u5740",paraId:9},{value:"string",paraId:9},{value:"-",paraId:9},{value:"params",paraId:9},{value:"\u8BF7\u6C42\u53C2\u6570\u5904\u7406\u51FD\u6570",paraId:9},{value:"(node: any) => object",paraId:9},{value:"() => ({})",paraId:9},{value:"setData",paraId:9},{value:"\u54CD\u5E94\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:9},{value:"(res: any) => any[]",paraId:9},{value:"-",paraId:9},{value:"fieldNames",paraId:9},{value:"\u81EA\u5B9A\u4E49\u8282\u70B9\u5B57\u6BB5",paraId:9},{value:"object",paraId:9},{value:"-",paraId:9},{value:"\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u57FA\u4E8E ",paraId:10,tocIndex:8},{value:"Ant Design Upload",paraId:10,tocIndex:8},{value:"\u3002",paraId:10,tocIndex:8},{value:"\u53C2\u6570",paraId:11},{value:"\u8BF4\u660E",paraId:11},{value:"\u7C7B\u578B",paraId:11},{value:"\u9ED8\u8BA4\u503C",paraId:11},{value:"url",paraId:11},{value:"\u4E0A\u4F20\u63A5\u53E3\u5730\u5740",paraId:11},{value:"string",paraId:11},{value:"/upload",paraId:11},{value:"setData",paraId:11},{value:"\u5904\u7406\u4E0A\u4F20\u54CD\u5E94\u6570\u636E",paraId:11},{value:"(res: any) => string",paraId:11},{value:"-",paraId:11},{value:"fieldPropsUpload",paraId:11},{value:"Upload \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:11},{value:"UploadProps",paraId:11},{value:"-",paraId:11},{value:`// \u8868\u5355\u5B57\u6BB5\u5B9A\u4E49
interface FormColumn {
  title: string;
  dataIndex: string;
  valueType?: string;
  formItemProps?: any;
  fieldProps?: any;
  renderFormItem?: () => React.ReactNode;
}

// \u8868\u5355\u63A5\u53E3\u54CD\u5E94\u6570\u636E
interface ApiResponse {
  code: number;
  msg?: string;
  data?: any;
}

// \u8868\u5355\u63D0\u4EA4\u53C2\u6570
interface SubmitParams {
  [key: string]: any;
}
`,paraId:12,tocIndex:10}]},54394:function(S,B,e){e.r(B),e.d(B,{texts:function(){return D}});var g=e(37738);const D=[{value:"LoginPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Components",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u767B\u5F55\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u548C\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\u4E24\u79CD\u65B9\u5F0F\uFF0C\u5E76\u96C6\u6210\u4E86\u81EA\u52A8\u767B\u5F55\u3001\u5BC6\u7801\u52A0\u5BC6\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5FEB\u901F\u6784\u5EFA\u4F01\u4E1A\u7EA7\u767B\u5F55\u9875\u9762",paraId:1,tocIndex:1},{value:"\u9700\u8981\u540C\u65F6\u652F\u6301\u8D26\u53F7\u5BC6\u7801\u548C\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u5BC6\u7801\u8FDB\u884C\u52A0\u5BC6\u5904\u7406",paraId:1,tocIndex:1},{value:"\u9700\u8981\u652F\u6301\u81EA\u52A8\u767B\u5F55\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u767B\u5F55\u8868\u5355\u5E03\u5C40\u548C\u6837\u5F0F",paraId:1,tocIndex:1},{value:"\u6700\u57FA\u672C\u7684\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u529F\u80FD\u5C55\u793A\u3002",paraId:2,tocIndex:3},{value:"\u5C55\u793A\u5982\u4F55\u542F\u7528\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55\u529F\u80FD\u3002",paraId:3,tocIndex:4},{value:"\u5C55\u793A\u5982\u4F55\u4F7F\u7528 AES \u52A0\u5BC6\u6216\u81EA\u5B9A\u4E49\u52A0\u5BC6\u65B9\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u53C2\u6570",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"url",paraId:5,tocIndex:7},{value:"\u767B\u5F55\u63A5\u53E3\u5730\u5740",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"captchaUrl",paraId:5,tocIndex:7},{value:"\u9A8C\u8BC1\u7801\u53D1\u9001\u63A5\u53E3\u5730\u5740",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"ajax",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5",paraId:5,tocIndex:7},{value:"(url: string, params: object, callback: Function, isApi?: boolean) => void",paraId:5,tocIndex:7},{value:"ajaxCommon",paraId:5,tocIndex:7},{value:"loginFormFieldProps",paraId:5,tocIndex:7},{value:"LoginForm \u7684\u5C5E\u6027\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA ",paraId:5,tocIndex:7},{value:"Ant Design Pro LoginForm",paraId:5,tocIndex:7},{value:"object",paraId:5,tocIndex:7},{value:"{}",paraId:5,tocIndex:7},{value:"hasSmsLogin",paraId:5,tocIndex:7},{value:"\u662F\u5426\u542F\u7528\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55\u6A21\u5F0F",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"hasAccountLogin",paraId:5,tocIndex:7},{value:"\u662F\u5426\u542F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u6A21\u5F0F",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"true",paraId:5,tocIndex:7},{value:"phoneField",paraId:5,tocIndex:7},{value:"\u624B\u673A\u53F7\u5B57\u6BB5\u540D\uFF0C\u53D1\u9001\u9A8C\u8BC1\u7801\u65F6\u4F7F\u7528",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"'mobile'",paraId:5,tocIndex:7},{value:"usernameField",paraId:5,tocIndex:7},{value:"\u7528\u6237\u540D\u5B57\u6BB5\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"'username'",paraId:5,tocIndex:7},{value:"passwordField",paraId:5,tocIndex:7},{value:"\u5BC6\u7801\u5B57\u6BB5\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"'password'",paraId:5,tocIndex:7},{value:"captchaField",paraId:5,tocIndex:7},{value:"\u9A8C\u8BC1\u7801\u5B57\u6BB5\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"'captcha'",paraId:5,tocIndex:7},{value:"extraPasswordText",paraId:5,tocIndex:7},{value:"\u5BC6\u7801\u52A0\u5BC6\u65F6\u7684\u6DF7\u6DC6\u6587\u672C",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"''",paraId:5,tocIndex:7},{value:"secretKey",paraId:5,tocIndex:7},{value:"AES \u52A0\u5BC6\u5BC6\u94A5",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"encryption",paraId:5,tocIndex:7},{value:"CryptoJS \u7684\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u652F\u6301 MD5\u3001SHA-1\u3001SHA-256 \u7B49",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"'SHA256'",paraId:5,tocIndex:7},{value:"encrypt",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u5BC6\u7801\u52A0\u5BC6\u51FD\u6570",paraId:5,tocIndex:7},{value:"(password: string) => string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"tokenField",paraId:5,tocIndex:7},{value:"\u767B\u5F55\u6210\u529F\u540E token \u7684\u5B57\u6BB5\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"'token'",paraId:5,tocIndex:7},{value:"setData",paraId:5,tocIndex:7},{value:"\u5904\u7406\u767B\u5F55\u63A5\u53E3\u8FD4\u56DE\u6570\u636E",paraId:5,tocIndex:7},{value:"(response: any) => any",paraId:5,tocIndex:7},{value:"(data) => data.data",paraId:5,tocIndex:7},{value:"callback",paraId:5,tocIndex:7},{value:"\u767B\u5F55\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570",paraId:5,tocIndex:7},{value:"(data: any) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"BottomDom",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u989D\u5916\u7EC4\u4EF6",paraId:5,tocIndex:7},{value:"ReactNode",paraId:5,tocIndex:7},{value:"() => </>",paraId:5,tocIndex:7},{value:"ForGetPassword",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u5FD8\u8BB0\u5BC6\u7801\u7EC4\u4EF6",paraId:5,tocIndex:7},{value:"ReactNode",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u5FD8\u8BB0\u5BC6\u7801\u7EC4\u4EF6",paraId:5,tocIndex:7},{value:`// \u767B\u5F55\u8BF7\u6C42\u53C2\u6570
interface LoginParams {
  [usernameField]: string; // \u7528\u6237\u540D
  [passwordField]: string; // \u5BC6\u7801
  [phoneField]?: string;   // \u624B\u673A\u53F7\uFF08\u77ED\u4FE1\u767B\u5F55\u65F6\uFF09
  [captchaField]?: string; // \u9A8C\u8BC1\u7801\uFF08\u77ED\u4FE1\u767B\u5F55\u65F6\uFF09
  autoLogin?: boolean;     // \u662F\u5426\u81EA\u52A8\u767B\u5F55
}

// \u767B\u5F55\u54CD\u5E94\u6570\u636E
interface LoginResponse {
  code: number;      // \u72B6\u6001\u7801
  msg?: string;      // \u63D0\u793A\u4FE1\u606F
  data: {
    [tokenField]: string; // token
    [key: string]: any;   // \u5176\u4ED6\u6570\u636E
  }
}
`,paraId:6,tocIndex:8},{value:"Ant Design",paraId:7,tocIndex:9},{value:" ^5.0.0",paraId:7,tocIndex:9},{value:"@ant-design/pro-components",paraId:7,tocIndex:9},{value:` ^2.0.0
`,paraId:7,tocIndex:9},{value:"LoginForm: ",paraId:8,tocIndex:9},{value:"API \u6587\u6863",paraId:8,tocIndex:9},{value:"crypto-js",paraId:7,tocIndex:9},{value:" ^4.1.1",paraId:7,tocIndex:9},{value:`import { LoginPro } from 'durians';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      loginFormFieldProps={{
        form: {
          validateMessages: {
            required: \`\${label}\u4E0D\u80FD\u4E3A\u7A7A\`,
            types: {
              email: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u5730\u5740',
              number: '\u8BF7\u8F93\u5165\u6570\u5B57'
            }
          }
        }
      }}
    />
  );
};

export default Demo;
`,paraId:9,tocIndex:12}]},23876:function(S,B,e){e.r(B),e.d(B,{texts:function(){return D}});var g=e(42460);const D=[{value:"ModalPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Modal",paraId:0,tocIndex:0},{value:`
\u7684\u9AD8\u7EA7\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u66F4\u4FBF\u6377\u7684\u4F7F\u7528\u65B9\u5F0F\u548C\u66F4\u7075\u6D3B\u7684\u63A7\u5236\u65B9\u6CD5\u3002\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5373\u53EF\u5B9E\u73B0\u590D\u6742\u7684\u5F39\u7A97\u4EA4\u4E92\u903B\u8F91\u3002`,paraId:0,tocIndex:0},{value:"\u9700\u8981\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u53EF\u63A7\u7684\u5F39\u7A97\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5728\u5F39\u7A97\u5185\u90E8\u52A8\u6001\u63A7\u5236\u5F39\u7A97\u7684\u663E\u793A\u72B6\u6001",paraId:1,tocIndex:1},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u5F39\u7A97\u7684\u89E6\u53D1\u5143\u7D20",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5904\u7406\u5F39\u7A97\u7684\u5F02\u6B65\u64CD\u4F5C\u548C\u8868\u5355\u63D0\u4EA4",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u5F39\u7A97\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u548C\u6269\u5C55",paraId:1,tocIndex:1},{value:"\u6700\u7B80\u5355\u7684\u5F39\u7A97\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:2,tocIndex:3},{value:"\u5728\u5F39\u7A97\u4E2D\u4F7F\u7528\u8868\u5355\uFF0C\u5E76\u63A7\u5236\u63D0\u4EA4\u540E\u7684\u5F39\u7A97\u5173\u95ED\u3002",paraId:3,tocIndex:4},{value:"\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\u5E76\u63A7\u5236\u5F39\u7A97\u72B6\u6001\u3002",paraId:4,tocIndex:5},{value:"\u53C2\u6570",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"title",paraId:5,tocIndex:7},{value:"\u5F39\u7A97\u6807\u9898",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"'\u57FA\u7840'",paraId:5,tocIndex:7},{value:"handleOk",paraId:5,tocIndex:7},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570\u3002\u63A5\u6536\u4E00\u4E2A callback \u53C2\u6570\uFF0C\u6267\u884C callback(true) \u5173\u95ED\u5F39\u7A97\uFF0Ccallback(false) \u4FDD\u6301\u5F39\u7A97\u6253\u5F00",paraId:5,tocIndex:7},{value:"(callback: (close?: boolean) => void) => void",paraId:5,tocIndex:7},{value:"(callback) => callback()",paraId:5,tocIndex:7},{value:"Content",paraId:5,tocIndex:7},{value:"\u5F39\u7A97\u5185\u5BB9\u7EC4\u4EF6\u3002\u53EF\u4EE5\u662F ReactNode \u6216\u51FD\u6570\u7EC4\u4EF6\uFF0C\u51FD\u6570\u7EC4\u4EF6\u4F1A\u63A5\u6536 isModalOpen \u548C setIsModalOpen \u4F5C\u4E3A\u53C2\u6570",paraId:5,tocIndex:7},{value:"ReactNode | ((props: ContentProps) => ReactNode)",paraId:5,tocIndex:7},{value:"() => <div>\u793A\u4F8B</div>",paraId:5,tocIndex:7},{value:"children",paraId:5,tocIndex:7},{value:"\u89E6\u53D1\u5F39\u7A97\u663E\u793A\u7684\u5143\u7D20",paraId:5,tocIndex:7},{value:"ReactNode",paraId:5,tocIndex:7},{value:"<div>\u70B9\u51FB</div>",paraId:5,tocIndex:7},{value:"fieldProps",paraId:5,tocIndex:7},{value:"Modal \u7EC4\u4EF6\u7684\u5C5E\u6027\u914D\u7F6E\uFF0C\u5B8C\u6574\u7EE7\u627F\u81EA antd Modal \u7684\u6240\u6709\u5C5E\u6027",paraId:5,tocIndex:7},{value:"ModalProps",paraId:5,tocIndex:7},{value:"{}",paraId:5,tocIndex:7},{value:`interface ContentProps {
  /**
   * \u5F53\u524D\u5F39\u7A97\u7684\u663E\u793A\u72B6\u6001
   */
  isModalOpen: boolean;
  /**
   * \u63A7\u5236\u5F39\u7A97\u663E\u793A/\u9690\u85CF\u7684\u51FD\u6570
   */
  setIsModalOpen: (open: boolean) => void;
}
`,paraId:6,tocIndex:8},{value:`import {ReactNode} from 'react';
import {ModalProps} from 'antd';

interface ModalProProps {
  title?: string;
  handleOk?: (callback: (close?: boolean) => void) => void;
  Content?: ReactNode | ((props: ContentProps) => ReactNode);
  children?: ReactNode;
  fieldProps?: ModalProps;
}
`,paraId:7,tocIndex:9},{value:"Ant Design",paraId:8,tocIndex:10},{value:` ^5.0.0
`,paraId:8,tocIndex:10},{value:"Modal \u7EC4\u4EF6\uFF1A",paraId:9,tocIndex:10},{value:"\u8BE6\u7EC6\u6587\u6863",paraId:9,tocIndex:10}]},53308:function(S,B,e){e.r(B),e.d(B,{texts:function(){return D}});var g=e(47117);const D=[{value:"TablePro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Table",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u8868\u683C\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u66F4\u4E30\u5BCC\u7684\u529F\u80FD\u548C\u66F4\u7B80\u4FBF\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u96C6\u6210\u4E86\u5206\u9875\u3001\u641C\u7D22\u3001\u7B5B\u9009\u3001\u6811\u5F62\u9009\u62E9\u3001\u6279\u91CF\u64CD\u4F5C\u7B49\u7279\u6027\uFF0C\u7B80\u5316\u4E86\u8868\u683C\u7684\u5F00\u53D1\u6D41\u7A0B\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5C55\u793A\u5927\u91CF\u7ED3\u6784\u5316\u6570\u636E",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u641C\u7D22\u3001\u7B5B\u9009\u7B49\u64CD\u4F5C",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539\u67E5",paraId:1,tocIndex:1},{value:"\u9700\u8981\u652F\u6301\u6811\u5F62\u7ED3\u6784\u7684\u6570\u636E\u5C55\u793A",paraId:1,tocIndex:1},{value:"\u9700\u8981\u652F\u6301\u6279\u91CF\u64CD\u4F5C\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u683C\u64CD\u4F5C\u5217",paraId:1,tocIndex:1},{value:"\u9700\u8981\u4E0E\u670D\u52A1\u7AEF\u8FDB\u884C\u6570\u636E\u4EA4\u4E92",paraId:1,tocIndex:1},{value:"\u7EE7\u627F\u81EA ",paraId:2,tocIndex:7},{value:"ProTable",paraId:2,tocIndex:7},{value:"\uFF0C\u4EE5\u4E0B\u4E3A\u989D\u5916\u589E\u52A0\u6216\u4FEE\u6539\u7684\u5C5E\u6027\uFF1A",paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"ajax",paraId:3,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5",paraId:3,tocIndex:7},{value:"(url: string, params: object, callback: Function, isApi?: boolean) => void",paraId:3,tocIndex:7},{value:"ajaxCommon",paraId:3,tocIndex:7},{value:"url",paraId:3,tocIndex:7},{value:"\u6570\u636E\u63A5\u53E3\u5730\u5740",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"addUrl",paraId:3,tocIndex:7},{value:"\u65B0\u589E\u8868\u5355\u63D0\u4EA4\u5730\u5740",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"editUrl",paraId:3,tocIndex:7},{value:"\u7F16\u8F91\u8868\u5355\u63D0\u4EA4\u5730\u5740",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"deleteUrl",paraId:3,tocIndex:7},{value:"\u5220\u9664\u63A5\u53E3\u5730\u5740",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"deleteField",paraId:3,tocIndex:7},{value:"\u5355\u4E2A\u5220\u9664\u65F6\u7684\u5B57\u6BB5\u540D",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"\u4F7F\u7528 rowKey \u503C",paraId:3,tocIndex:7},{value:"deleteFields",paraId:3,tocIndex:7},{value:"\u6279\u91CF\u5220\u9664\u7684\u5B57\u6BB5\u540D",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"'idList'",paraId:3,tocIndex:7},{value:"deleteFieldIsArr",paraId:3,tocIndex:7},{value:"\u5355\u4E2A\u5220\u9664\u65F6\u662F\u5426\u4F7F\u7528\u6570\u7EC4\u683C\u5F0F",paraId:3,tocIndex:7},{value:"boolean",paraId:3,tocIndex:7},{value:"false",paraId:3,tocIndex:7},{value:"deleteParams",paraId:3,tocIndex:7},{value:"\u5220\u9664\u63A5\u53E3\u7684\u989D\u5916\u53C2\u6570",paraId:3,tocIndex:7},{value:"object",paraId:3,tocIndex:7},{value:"{}",paraId:3,tocIndex:7},{value:"deleteBatchHidden",paraId:3,tocIndex:7},{value:"\u662F\u5426\u9690\u85CF\u6279\u91CF\u5220\u9664\u529F\u80FD",paraId:3,tocIndex:7},{value:"boolean",paraId:3,tocIndex:7},{value:"false",paraId:3,tocIndex:7},{value:"fieldProps",paraId:3,tocIndex:7},{value:"\u8868\u683C\u76F8\u5173\u914D\u7F6E\uFF0C\u7EE7\u627F ProTable \u7684 props",paraId:3,tocIndex:7},{value:"ProTableProps & { columns: Columns }",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"addFormProFieldProps",paraId:3,tocIndex:7},{value:"\u65B0\u589E/\u7F16\u8F91\u8868\u5355\u7684\u914D\u7F6E\u9879",paraId:3,tocIndex:7},{value:"FormProProps",paraId:3,tocIndex:7},{value:"{}",paraId:3,tocIndex:7},{value:"setData",paraId:3,tocIndex:7},{value:"\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E",paraId:3,tocIndex:7},{value:"(response: any) => any[]",paraId:3,tocIndex:7},{value:"(data) => data?.data?.records",paraId:3,tocIndex:7},{value:"setTotal",paraId:3,tocIndex:7},{value:"\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u7684\u603B\u6570",paraId:3,tocIndex:7},{value:"(response: any) => number",paraId:3,tocIndex:7},{value:"(data) => data?.data?.total",paraId:3,tocIndex:7},{value:"setMsg",paraId:3,tocIndex:7},{value:"\u5904\u7406\u64CD\u4F5C\u63D0\u793A\u4FE1\u606F",paraId:3,tocIndex:7},{value:"(response: any) => string",paraId:3,tocIndex:7},{value:"(data) => data?.msg",paraId:3,tocIndex:7},{value:"actionBar",paraId:3,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u5217",paraId:3,tocIndex:7},{value:"((record: any) => ReactNode)[]",paraId:3,tocIndex:7},{value:"[]",paraId:3,tocIndex:7},{value:"actionWidth",paraId:3,tocIndex:7},{value:"\u64CD\u4F5C\u5217\u5BBD\u5EA6",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"100",paraId:3,tocIndex:7},{value:"paginationAlias",paraId:3,tocIndex:7},{value:"\u5206\u9875\u53C2\u6570\u522B\u540D",paraId:3,tocIndex:7},{value:"{ pageIndex: string; pageSize: string }",paraId:3,tocIndex:7},{value:"{ pageIndex: 'pageIndex', pageSize: 'pageSize' }",paraId:3,tocIndex:7},{value:"tableAlertOptionRenderPro",paraId:3,tocIndex:7},{value:"\u9009\u4E2D\u9879\u5DE5\u5177\u680F",paraId:3,tocIndex:7},{value:"((props: { selectedRowKeys: any[], selectedRows: any[] }) => ReactNode)[]",paraId:3,tocIndex:7},{value:"[]",paraId:3,tocIndex:7},{value:"treeFieldProps",paraId:3,tocIndex:7},{value:"\u6811\u5F62\u9009\u62E9\u5668\u914D\u7F6E\uFF0C\u53C2\u8003 TreePro \u7EC4\u4EF6",paraId:3,tocIndex:7},{value:"TreeProProps",paraId:3,tocIndex:7},{value:"null",paraId:3,tocIndex:7},{value:"treeWidth",paraId:3,tocIndex:7},{value:"\u6811\u5F62\u9009\u62E9\u5668\u5BBD\u5EA6",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"200",paraId:3,tocIndex:7},{value:"paramsFun",paraId:3,tocIndex:7},{value:"\u8BF7\u6C42\u53C2\u6570\u5904\u7406\u51FD\u6570",paraId:3,tocIndex:7},{value:"(params: any) => any",paraId:3,tocIndex:7},{value:"(params) => params",paraId:3,tocIndex:7},{value:"treeParamsFun",paraId:3,tocIndex:7},{value:"\u6811\u9009\u62E9\u53C2\u6570\u5904\u7406\u51FD\u6570",paraId:3,tocIndex:7},{value:"(selectedKeys: string[]) => any",paraId:3,tocIndex:7},{value:"(keys) => ({ treeId: keys })",paraId:3,tocIndex:7},{value:"keywordField",paraId:3,tocIndex:7},{value:"\u5173\u952E\u8BCD\u641C\u7D22\u5B57\u6BB5",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"keywordPlaceholder",paraId:3,tocIndex:7},{value:"\u5173\u952E\u8BCD\u641C\u7D22\u5360\u4F4D\u6587\u6848",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:`interface TableProColumn extends ProColumns {
  proConfig?: {
    url?: string;
    setData?: (response: any) => any;
    isKeyword?: boolean;
  }
}

interface TableProProps {
  columns: TableProColumn[];
  dataSource?: any[];
  rowKey?: string | ((record: any) => string);
  pagination?: false | TablePaginationConfig;
  loading?: boolean | SpinProps;
  search?: false | SearchConfig;
  // ...\u7EE7\u627F\u81EA ProTable \u7684\u5176\u4ED6\u5C5E\u6027
}
`,paraId:4,tocIndex:8},{value:"antd",paraId:5,tocIndex:9},{value:" ^5.0.0",paraId:5,tocIndex:9},{value:"@ant-design/pro-components",paraId:5,tocIndex:9},{value:" ^2.0.0",paraId:5,tocIndex:9},{value:"lodash-es",paraId:5,tocIndex:9},{value:" ^4.17.21",paraId:5,tocIndex:9}]},29859:function(S,B,e){e.r(B),e.d(B,{texts:function(){return D}});var g=e(16677);const D=[]}}]);
