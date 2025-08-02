(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[838],{32450:function(R,B,e){"use strict";var P;e.r(B),e.d(B,{demos:function(){return l}});var N=e(5574),D=e.n(N),j=e(97857),c=e.n(j),F=e(15009),p=e.n(F),f=e(99289),E=e.n(f),y=e(67294),T=e(66436),h=e(52202),v=e(61650),u=e(27484),d=e.n(u),l={"formpro-demo-0":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return n=x.sent,r=n.default,x.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return t=x.sent,s=t.FormPro,x.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return m=x.sent,a=m.Button,x.abrupt("return",{default:function(){return r.createElement(s,{layoutType:"ModalForm",url:"/api/users",fieldProps:{columns:[{title:"\u59D3\u540D",dataIndex:"name",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]}},{title:"\u90AE\u7BB1",dataIndex:"email",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F"}]}},{title:"\u90E8\u95E8",dataIndex:"department",valueType:"select",valueEnum:{\u6280\u672F\u90E8:{text:"\u6280\u672F\u90E8"},\u4EA7\u54C1\u90E8:{text:"\u4EA7\u54C1\u90E8"},\u8FD0\u8425\u90E8:{text:"\u8FD0\u8425\u90E8"},\u5E02\u573A\u90E8:{text:"\u5E02\u573A\u90E8"},\u4EBA\u4E8B\u90E8:{text:"\u4EBA\u4E8B\u90E8"}},formItemProps:{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u90E8\u95E8"}]}}]}},r.createElement(a,{type:"primary"},"\u65B0\u589E\u7528\u6237"))}});case 13:case"end":return x.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-0",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { FormPro } from 'durians';
import { Button } from 'antd';

export default () => {
  return (
    <FormPro
      layoutType="ModalForm"
      url="/api/users"
      fieldProps={{
        columns: [
          {
            title: '\u59D3\u540D',
            dataIndex: 'name',
            valueType: 'text',
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D' }],
            },
          },
          {
            title: '\u90AE\u7BB1',
            dataIndex: 'email',
            valueType: 'text',
            formItemProps: {
              rules: [
                { required: true, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1' },
                { type: 'email', message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F' },
              ],
            },
          },
          {
            title: '\u90E8\u95E8',
            dataIndex: 'department',
            valueType: 'select',
            valueEnum: {
              '\u6280\u672F\u90E8': { text: '\u6280\u672F\u90E8' },
              '\u4EA7\u54C1\u90E8': { text: '\u4EA7\u54C1\u90E8' },
              '\u8FD0\u8425\u90E8': { text: '\u8FD0\u8425\u90E8' },
              '\u5E02\u573A\u90E8': { text: '\u5E02\u573A\u90E8' },
              '\u4EBA\u4E8B\u90E8': { text: '\u4EBA\u4E8B\u90E8' },
            },
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u90E8\u95E8' }],
            },
          },
        ],
      }}
    >
      <Button type="primary">\u65B0\u589E\u7528\u6237</Button>
    </FormPro>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(y,2)),durians:T,antd:h},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-1":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return n=I.sent,r=n.default,I.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return t=I.sent,s=t.FormPro,I.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return m=I.sent,a=m.Button,i=m.message,I.abrupt("return",{default:function(){return r.createElement(s,{layoutType:"DrawerForm",url:"/api/products",fieldProps:{title:"\u65B0\u589E\u4EA7\u54C1",width:600,columns:[{title:"\u4EA7\u54C1\u540D\u79F0",dataIndex:"name",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"}]}},{title:"\u4EA7\u54C1\u63CF\u8FF0",dataIndex:"description",valueType:"textarea",fieldProps:{rows:4}},{title:"\u4EF7\u683C",dataIndex:"price",valueType:"money",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C"}]}},{title:"\u5206\u7C7B",dataIndex:"category",valueType:"select",valueEnum:{\u7535\u5B50\u4EA7\u54C1:{text:"\u7535\u5B50\u4EA7\u54C1"},\u670D\u88C5\u978B\u5E3D:{text:"\u670D\u88C5\u978B\u5E3D"},\u5BB6\u5C45\u7528\u54C1:{text:"\u5BB6\u5C45\u7528\u54C1"},\u56FE\u4E66\u97F3\u50CF:{text:"\u56FE\u4E66\u97F3\u50CF"},\u8FD0\u52A8\u6237\u5916:{text:"\u8FD0\u52A8\u6237\u5916"}},formItemProps:{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}]}},{title:"\u54C1\u724C",dataIndex:"brand",valueType:"text"},{title:"\u5E93\u5B58",dataIndex:"stock",valueType:"digit",fieldProps:{min:0}}]},finishFun:function(M,$){i.success("\u4EA7\u54C1\u521B\u5EFA\u6210\u529F"),console.log("\u521B\u5EFA\u7ED3\u679C:",M,$)}},r.createElement(a,{type:"primary"},"\u65B0\u589E\u4EA7\u54C1"))}});case 14:case"end":return I.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-1",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { FormPro } from 'durians';
import { Button, message } from 'antd';

export default () => {
  return (
    <FormPro
      layoutType="DrawerForm"
      url="/api/products"
      fieldProps={{
        title: '\u65B0\u589E\u4EA7\u54C1',
        width: 600,
        columns: [
          {
            title: '\u4EA7\u54C1\u540D\u79F0',
            dataIndex: 'name',
            valueType: 'text',
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0' }],
            },
          },
          {
            title: '\u4EA7\u54C1\u63CF\u8FF0',
            dataIndex: 'description',
            valueType: 'textarea',
            fieldProps: {
              rows: 4,
            },
          },
          {
            title: '\u4EF7\u683C',
            dataIndex: 'price',
            valueType: 'money',
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C' }],
            },
          },
          {
            title: '\u5206\u7C7B',
            dataIndex: 'category',
            valueType: 'select',
            valueEnum: {
              '\u7535\u5B50\u4EA7\u54C1': { text: '\u7535\u5B50\u4EA7\u54C1' },
              '\u670D\u88C5\u978B\u5E3D': { text: '\u670D\u88C5\u978B\u5E3D' },
              '\u5BB6\u5C45\u7528\u54C1': { text: '\u5BB6\u5C45\u7528\u54C1' },
              '\u56FE\u4E66\u97F3\u50CF': { text: '\u56FE\u4E66\u97F3\u50CF' },
              '\u8FD0\u52A8\u6237\u5916': { text: '\u8FD0\u52A8\u6237\u5916' },
            },
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u5206\u7C7B' }],
            },
          },
          {
            title: '\u54C1\u724C',
            dataIndex: 'brand',
            valueType: 'text',
          },
          {
            title: '\u5E93\u5B58',
            dataIndex: 'stock',
            valueType: 'digit',
            fieldProps: {
              min: 0,
            },
          },
        ],
      }}
      finishFun={(data, values) => {
        message.success('\u4EA7\u54C1\u521B\u5EFA\u6210\u529F');
        console.log('\u521B\u5EFA\u7ED3\u679C:', data, values);
      }}
    >
      <Button type="primary">\u65B0\u589E\u4EA7\u54C1</Button>
    </FormPro>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(y,2)),durians:T,antd:h},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-2":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=I.sent,r=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return t=I.sent,s=t.Button,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return m=I.sent,a=m.default,i=function(){return a.createElement(r,{url:"/api/submit",layoutType:"ModalForm",fieldProps:{title:"\u57FA\u7840\u8868\u5355",columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}},{title:"\u5E74\u9F84",dataIndex:"age",valueType:"digit",fieldProps:{min:0,max:100}}]}},a.createElement(s,{type:"primary"},"\u6253\u5F00\u8868\u5355"))},I.abrupt("return",{default:i});case 14:case"end":return I.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-2",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:h,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-3":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=i.sent,r=n.FormPro,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=i.sent,s=t.default,m=function(){return s.createElement(r,{fieldProps:{columns:[{title:"\u9009\u62E9\u7528\u6237",dataIndex:"users",valueType:"tableSelect",fieldProps:{title:"\u9009\u62E9\u7528\u6237",tableFieldProps:{url:"/api/users",columns:[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"department"}]}}}]}})},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-3",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-4":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=i.sent,r=n.FormPro,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=i.sent,s=t.default,m=function(){return s.createElement(r,{fieldProps:{columns:[{title:"\u90E8\u95E8\u9009\u62E9",dataIndex:"department",valueType:"treeSelect",fieldProps:{url:"/api/departments",params:function(g){return{parentId:g==null?void 0:g.id}},setData:function(g){return g.data},fieldNames:{label:"name",value:"id"}}}]}})},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-4",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-5":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=i.sent,r=n.FormPro,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=i.sent,s=t.default,m=function(){return s.createElement(r,{fieldProps:{columns:[{title:"\u9644\u4EF6",dataIndex:"files",valueType:"upload",fieldProps:{title:"\u4E0A\u4F20\u6587\u4EF6",url:"/api/upload",setData:function(g){return g.url},fieldPropsUpload:{multiple:!0,maxCount:5}}}]}})},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-5",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-6":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i,x,I,g;return p()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=M.sent,r=n.FormPro,M.next=6,Promise.resolve().then(e.bind(e,61650));case 6:return t=M.sent,s=t.ProFormList,m=t.ProFormText,M.next=11,Promise.resolve().then(e.bind(e,52202));case 11:return a=M.sent,i=a.Button,M.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return x=M.sent,I=x.default,g=function(){return I.createElement(r,{url:"/api/submit",fieldProps:{title:"\u81EA\u5B9A\u4E49\u8868\u5355",columns:[{title:"\u7528\u6237\u5217\u8868",dataIndex:"users",renderFormItem:function(){return I.createElement(s,{name:"users",initialValue:[{name:""}]},function(C,b){return I.createElement(m,{name:["name"],label:"\u7528\u6237 ".concat(b+1)})})}}]}},I.createElement(i,{type:"primary"},"\u6DFB\u52A0\u7528\u6237"))},M.abrupt("return",{default:g});case 19:case"end":return M.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-6",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},"@ant-design/pro-components":{type:"NPM",value:"2.8.10"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,"@ant-design/pro-components":v,antd:h,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-7":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=I.sent,r=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return t=I.sent,s=t.Button,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return m=I.sent,a=m.default,i=function(){return a.createElement(r,{fieldProps:{columns:[{title:"\u624B\u673A\u53F7",dataIndex:"mobile",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:/^1\d{10}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}]}}]}},a.createElement(s,null,"\u63D0\u4EA4"))},I.abrupt("return",{default:i});case 14:case"end":return I.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-7",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:h,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-8":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i,x,I;return p()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=A.sent,r=n.FormPro,A.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return t=A.sent,s=t.Button,A.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return m=A.sent,a=m.default,A.next=14,Promise.resolve().then(e.t.bind(e,27484,23));case 14:return i=A.sent,x=i.default,I=function(){return a.createElement(r,{url:"/api/submit",beforeSubmit:function(O){return c()(c()({},O),{},{birthday:x(O.birthday).format("YYYY-MM-DD"),age:Number(O.age)})}},a.createElement(s,null,"\u63D0\u4EA4"))},A.abrupt("return",{default:I});case 18:case"end":return A.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-8",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';
import dayjs from 'dayjs';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      beforeSubmit={(values) => ({
        ...values,
        birthday: dayjs(values.birthday).format('YYYY-MM-DD'),
        age: Number(values.age)
      })}
    >
      <Button>\u63D0\u4EA4</Button>
    </FormPro>
  );
};

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx"},context:{durians:T,antd:h,react:P||(P=e.t(y,2)),dayjs:u},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-9":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=I.sent,r=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return t=I.sent,s=t.Button,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return m=I.sent,a=m.default,i=function(){return a.createElement(r,{isEdit:!0,detailUrl:"/api/detail",record:{id:1},detailSetData:function(M){return c()(c()({},M.data),{},{files:JSON.parse(M.data.files)})}},a.createElement(s,null,"\u7F16\u8F91"))},I.abrupt("return",{default:i});case 14:case"end":return I.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-9",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:h,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-10":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i,x;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=g.sent,r=n.FormPro,g.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return t=g.sent,s=t.Input,m=t.Button,g.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return a=g.sent,i=a.default,x=function(){return i.createElement(r,{fieldProps:{columns:[{title:"\u81EA\u5B9A\u4E49\u8F93\u5165",dataIndex:"custom",renderFormItem:function(){return i.createElement(s.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxLength:100,showCount:!0})}}]}},i.createElement(m,null,"\u63D0\u4EA4"))},g.abrupt("return",{default:x});case 15:case"end":return g.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-10",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:h,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-11":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=i.sent,r=n.FormPro,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=i.sent,s=t.default,m=function(){return s.createElement(r,{layoutType:"DrawerForm",fieldProps:{grid:!0,colProps:{span:12},columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24}},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u90AE\u7BB1",dataIndex:"email"}]}})},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-11",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-12":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m,a,i;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=I.sent,r=n.FormPro,I.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return t=I.sent,s=t.message,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return m=I.sent,a=m.default,i=function(){var A=function(){var M=E()(p()().mark(function $(O,C,b){var L,K;return p()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.prev=0,S.next=3,fetch(O,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(C)});case 3:return L=S.sent,S.next=6,L.json();case 6:K=S.sent,K.code===0?b(K):s.error(K.msg||"\u8BF7\u6C42\u5931\u8D25"),S.next=14;break;case 10:S.prev=10,S.t0=S.catch(0),s.error("\u7F51\u7EDC\u9519\u8BEF"),console.error(S.t0);case 14:case"end":return S.stop()}},$,null,[[0,10]])}));return function(O,C,b){return M.apply(this,arguments)}}();return a.createElement(r,{url:"/api/submit",ajax:A,fieldProps:{columns:[{title:"\u7528\u6237\u540D",dataIndex:"username"}]}})},I.abrupt("return",{default:i});case 14:case"end":return I.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-12",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,antd:h,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-13":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=i.sent,r=n.FormPro,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=i.sent,s=t.default,m=function(){return s.createElement(r,{fieldProps:{columns:[{title:"\u7C7B\u578B",dataIndex:"type",valueType:"select",fieldProps:{options:[{label:"\u4E2A\u4EBA",value:"personal"},{label:"\u4F01\u4E1A",value:"company"}]}},{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"companyName",dependencies:["type"],formItemProps:function(g){var A=g.getFieldValue("type");return{hidden:A!=="company"}}}]}})},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-13",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}},"formpro-demo-14":{component:y.memo(y.lazy(E()(p()().mark(function o(){var n,r,t,s,m;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return n=i.sent,r=n.FormPro,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=i.sent,s=t.default,m=function(){return s.createElement(r,{url:"/api/submit",beforeSubmit:function(g,A,M){var $=new FormData;return Object.entries(g).forEach(function(O){var C=D()(O,2),b=C[0],L=C[1];Array.isArray(L)?$.append(b,JSON.stringify(L)):L instanceof File?$.append(b,L):$.append(b,String(L))}),$},fieldProps:{columns:[{title:"\u9644\u4EF6",dataIndex:"file",valueType:"upload"}]}})},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},o)})))),asset:{type:"BLOCK",id:"formpro-demo-14",refAtomIds:["FormPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { FormPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:T,react:P||(P=e.t(y,2))},renderOpts:{compile:function(){var o=E()(p()().mark(function r(){var t,s=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},r)}));function n(){return o.apply(this,arguments)}return n}()}}}},97389:function(R,B,e){"use strict";var P;e.r(B),e.d(B,{demos:function(){return h}});var N=e(15009),D=e.n(N),j=e(99289),c=e.n(j),F=e(67294),p=e(66436),f=e(52202),E=e(81354),y=e.n(E),T=e(1785),h={"loginpro-demo-0":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l,o,n,r;return D()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=s.sent,d=u.default,s.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return l=s.sent,o=l.LoginPro,s.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return n=s.sent,r=n.message,s.abrupt("return",{default:function(){return d.createElement("div",{style:{height:"100vh",background:"#f0f2f5"}},d.createElement(o,{url:"/api/login",onSuccess:function(i){r.success("\u767B\u5F55\u6210\u529F"),console.log("\u767B\u5F55\u7ED3\u679C:",i)},onError:function(i){r.error("\u767B\u5F55\u5931\u8D25: "+i.message)}}))}});case 13:case"end":return s.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-0",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { LoginPro } from 'durians';
import { message } from 'antd';

export default () => {
  return (
    <div style={{ height: '100vh', background: '#f0f2f5' }}>
      <LoginPro
        url="/api/login"
        onSuccess={(data) => {
          message.success('\u767B\u5F55\u6210\u529F');
          console.log('\u767B\u5F55\u7ED3\u679C:', data);
          // \u8FD9\u91CC\u53EF\u4EE5\u5904\u7406\u767B\u5F55\u6210\u529F\u540E\u7684\u903B\u8F91
          // \u6BD4\u5982\u8DF3\u8F6C\u5230\u9996\u9875\u6216\u4FDD\u5B58\u7528\u6237\u4FE1\u606F
        }}
        onError={(error) => {
          message.error('\u767B\u5F55\u5931\u8D25: ' + error.message);
        }}
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(F,2)),durians:p,antd:f},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"loginpro-demo-1":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l,o,n,r;return D()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=s.sent,d=u.default,s.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return l=s.sent,o=l.LoginPro,s.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return n=s.sent,r=n.message,s.abrupt("return",{default:function(){return d.createElement("div",{style:{height:"100vh",background:"#f0f2f5"}},d.createElement(o,{url:"/api/login",title:"Durians \u7BA1\u7406\u7CFB\u7EDF",subTitle:"\u57FA\u4E8E Ant Design Pro \u7684\u4F01\u4E1A\u7EA7\u7EC4\u4EF6\u5E93",logo:"https://img1.baidu.com/it/u=2018354835,1125004781&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",fieldProps:{username:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},{min:3,message:"\u7528\u6237\u540D\u81F3\u5C113\u4E2A\u5B57\u7B26"}]},password:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{min:6,message:"\u5BC6\u7801\u81F3\u5C116\u4E2A\u5B57\u7B26"}]}},onSuccess:function(i){r.success("\u6B22\u8FCE\u56DE\u6765\uFF0C".concat(i.name,"\uFF01")),console.log("\u7528\u6237\u4FE1\u606F:",i),localStorage.setItem("userInfo",JSON.stringify(i)),localStorage.setItem("token",i.token)},onError:function(i){r.error("\u767B\u5F55\u5931\u8D25: "+i.message)},rememberMe:!0,forgotPassword:!0,onForgotPassword:function(){r.info("\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u91CD\u7F6E\u5BC6\u7801")}}))}});case 13:case"end":return s.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-1",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { LoginPro } from 'durians';
import { message } from 'antd';

export default () => {
  return (
    <div style={{ height: '100vh', background: '#f0f2f5' }}>
      <LoginPro
        url="/api/login"
        title="Durians \u7BA1\u7406\u7CFB\u7EDF"
        subTitle="\u57FA\u4E8E Ant Design Pro \u7684\u4F01\u4E1A\u7EA7\u7EC4\u4EF6\u5E93"
        logo="https://img1.baidu.com/it/u=2018354835,1125004781&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
        fieldProps={{
          username: {
            placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
            rules: [
              { required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' },
              { min: 3, message: '\u7528\u6237\u540D\u81F3\u5C113\u4E2A\u5B57\u7B26' },
            ],
          },
          password: {
            placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
            rules: [
              { required: true, message: '\u8BF7\u8F93\u5165\u5BC6\u7801' },
              { min: 6, message: '\u5BC6\u7801\u81F3\u5C116\u4E2A\u5B57\u7B26' },
            ],
          },
        }}
        onSuccess={(data) => {
          message.success(\`\u6B22\u8FCE\u56DE\u6765\uFF0C\${data.name}\uFF01\`);
          console.log('\u7528\u6237\u4FE1\u606F:', data);
          // \u4FDD\u5B58\u7528\u6237\u4FE1\u606F\u5230\u672C\u5730\u5B58\u50A8
          localStorage.setItem('userInfo', JSON.stringify(data));
          localStorage.setItem('token', data.token);
        }}
        onError={(error) => {
          message.error('\u767B\u5F55\u5931\u8D25: ' + error.message);
        }}
        // \u663E\u793A\u8BB0\u4F4F\u6211\u9009\u9879
        rememberMe={true}
        // \u663E\u793A\u5FD8\u8BB0\u5BC6\u7801\u94FE\u63A5
        forgotPassword={true}
        onForgotPassword={() => {
          message.info('\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u91CD\u7F6E\u5BC6\u7801');
        }}
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(F,2)),durians:p,antd:f},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"loginpro-demo-2":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l,o,n;return D()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return u=t.sent,d=u.LoginPro,t.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return l=t.sent,o=l.message,n=function(){return F.createElement(d,{url:"/api/login",callback:function(a){o.success("\u767B\u5F55\u6210\u529F\uFF01"),console.log("\u767B\u5F55\u6570\u636E\uFF1A",a)}})},t.abrupt("return",{default:n});case 10:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-2",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{durians:p,antd:f},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"loginpro-demo-3":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l,o,n;return D()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return u=t.sent,d=u.LoginPro,t.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return l=t.sent,o=l.message,n=function(){return F.createElement(d,{hasSmsLogin:!0,hasAccountLogin:!0,url:"/api/login",captchaUrl:"/api/sendSms",loginFormFieldProps:{title:"\u7CFB\u7EDF\u767B\u5F55",subTitle:"\u6B22\u8FCE\u4F7F\u7528"},callback:function(a){o.success("\u767B\u5F55\u6210\u529F\uFF01")}})},t.abrupt("return",{default:n});case 10:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-3",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{durians:p,antd:f},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"loginpro-demo-4":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l,o,n;return D()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return u=t.sent,d=u.LoginPro,t.next=6,Promise.resolve().then(e.t.bind(e,81354,23));case 6:return l=t.sent,o=l.default,n=function(){return F.createElement(d,{url:"/api/login",secretKey:"your-secret-key",extraPasswordText:"_salt",encrypt:function(a){return o.MD5(a).toString()}})},t.abrupt("return",{default:n});case 10:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-4",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},"crypto-js":{type:"NPM",value:"4.2.0"}},entry:"index.tsx"},context:{durians:p,"crypto-js":E},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"loginpro-demo-5":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l,o,n;return D()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return u=t.sent,d=u.LoginPro,t.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return l=t.sent,o=l.message,n=function(){var m=function(i,x,I){fetch(i,{method:"POST",body:JSON.stringify(x)}).then(function(g){return g.json()}).then(function(g){g.code===0?I(g):o.error(g.msg||"\u767B\u5F55\u5931\u8D25")}).catch(function(g){o.error("\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5")})};return F.createElement(d,{url:"/api/login",ajax:m})},t.abrupt("return",{default:n});case 10:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-5",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{durians:p,antd:f},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"loginpro-demo-6":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l,o,n,r,t,s,m;return D()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return u=i.sent,d=u.LoginPro,i.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return l=i.sent,o=l.Space,n=l.Button,i.next=11,Promise.resolve().then(e.bind(e,1785));case 11:return r=i.sent,t=r.GithubOutlined,s=r.WechatOutlined,m=function(){return F.createElement(d,{url:"/api/login",BottomDom:function(){return F.createElement("div",{style:{textAlign:"center",marginTop:24}},F.createElement(o,null,F.createElement(n,{icon:F.createElement(t,null),onClick:function(){return window.location.href="/api/github/login"}},"Github \u767B\u5F55"),F.createElement(n,{icon:F.createElement(s,null),onClick:function(){return window.location.href="/api/wechat/login"}},"\u5FAE\u4FE1\u767B\u5F55")))}})},i.abrupt("return",{default:m});case 16:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-6",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},"@ant-design/icons":{type:"NPM",value:"6.0.0"}},entry:"index.tsx"},context:{durians:p,antd:f,"@ant-design/icons":T},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"loginpro-demo-7":{component:F.memo(F.lazy(c()(D()().mark(function v(){var u,d,l;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return u=n.sent,d=u.LoginPro,l=function(){return F.createElement(d,{url:"/api/login",callback:function(s){localStorage.setItem("token",s.token),localStorage.setItem("userInfo",JSON.stringify(s.userInfo)),axios.defaults.headers.common.Authorization="Bearer ".concat(s.token),window.location.href="/dashboard"},setData:function(s){return{token:s.data.accessToken,userInfo:s.data.userInfo}}})},n.abrupt("return",{default:l});case 6:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"loginpro-demo-7",refAtomIds:["LoginPro"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoginPro } from 'durians';

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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:p},renderOpts:{compile:function(){var v=c()(D()().mark(function d(){var l,o=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,o));case 3:case"end":return r.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},90026:function(R,B,e){"use strict";var P;e.r(B),e.d(B,{demos:function(){return T}});var N=e(5574),D=e.n(N),j=e(15009),c=e.n(j),F=e(99289),p=e.n(F),f=e(67294),E=e(66436),y=e(52202),T={"modalpro-demo-0":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o,n;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=t.sent,u=v.default,t.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return d=t.sent,l=d.ModalPro,t.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return o=t.sent,n=o.Button,t.abrupt("return",{default:function(){return u.createElement(l,{title:"\u7528\u6237\u8BE6\u60C5",Content:function(){return u.createElement("div",null,u.createElement("p",null,u.createElement("strong",null,"\u59D3\u540D:")," \u5F20\u4E09"),u.createElement("p",null,u.createElement("strong",null,"\u90AE\u7BB1:")," zhangsan@example.com"),u.createElement("p",null,u.createElement("strong",null,"\u90E8\u95E8:")," \u6280\u672F\u90E8"),u.createElement("p",null,u.createElement("strong",null,"\u804C\u4F4D:")," \u524D\u7AEF\u5DE5\u7A0B\u5E08"))}},u.createElement(n,{type:"primary"},"\u67E5\u770B\u8BE6\u60C5"))}});case 13:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-0",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { ModalPro } from 'durians';
import { Button } from 'antd';

export default () => {
  return (
    <ModalPro
      title="\u7528\u6237\u8BE6\u60C5"
      Content={() => (
        <div>
          <p><strong>\u59D3\u540D:</strong> \u5F20\u4E09</p>
          <p><strong>\u90AE\u7BB1:</strong> zhangsan@example.com</p>
          <p><strong>\u90E8\u95E8:</strong> \u6280\u672F\u90E8</p>
          <p><strong>\u804C\u4F4D:</strong> \u524D\u7AEF\u5DE5\u7A0B\u5E08</p>
        </div>
      )}
    >
      <Button type="primary">\u67E5\u770B\u8BE6\u60C5</Button>
    </ModalPro>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(f,2)),durians:E,antd:y},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-1":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o,n,r,t,s,m,a;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=x.sent,u=v.default,x.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return d=x.sent,l=d.ModalPro,x.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return o=x.sent,n=o.Button,r=o.Form,t=o.Input,s=o.Select,m=o.message,a=function(){var g=r.useForm(),A=D()(g,1),M=A[0],$=function(C){console.log("\u8868\u5355\u6570\u636E:",C),m.success("\u4FDD\u5B58\u6210\u529F")};return u.createElement(r,{form:M,layout:"vertical",onFinish:$,initialValues:{name:"\u674E\u56DB",email:"lisi@example.com",department:"\u4EA7\u54C1\u90E8"}},u.createElement(r.Item,{label:"\u59D3\u540D",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]},u.createElement(t,null)),u.createElement(r.Item,{label:"\u90AE\u7BB1",name:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F"}]},u.createElement(t,null)),u.createElement(r.Item,{label:"\u90E8\u95E8",name:"department",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u90E8\u95E8"}]},u.createElement(s,null,u.createElement(s.Option,{value:"\u6280\u672F\u90E8"},"\u6280\u672F\u90E8"),u.createElement(s.Option,{value:"\u4EA7\u54C1\u90E8"},"\u4EA7\u54C1\u90E8"),u.createElement(s.Option,{value:"\u8FD0\u8425\u90E8"},"\u8FD0\u8425\u90E8"),u.createElement(s.Option,{value:"\u5E02\u573A\u90E8"},"\u5E02\u573A\u90E8"))),u.createElement(r.Item,null,u.createElement(n,{type:"primary",htmlType:"submit"},"\u4FDD\u5B58")))},x.abrupt("return",{default:function(){return u.createElement(l,{title:"\u7F16\u8F91\u7528\u6237",Content:a,fieldProps:{width:600,footer:null}},u.createElement(n,null,"\u7F16\u8F91\u7528\u6237"))}});case 18:case"end":return x.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-1",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ModalPro } from 'durians';
import { Button, Form, Input, Select, message } from 'antd';

const UserForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('\u8868\u5355\u6570\u636E:', values);
    message.success('\u4FDD\u5B58\u6210\u529F');
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        name: '\u674E\u56DB',
        email: 'lisi@example.com',
        department: '\u4EA7\u54C1\u90E8',
      }}
    >
      <Form.Item
        label="\u59D3\u540D"
        name="name"
        rules={[{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="\u90AE\u7BB1"
        name="email"
        rules={[
          { required: true, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1' },
          { type: 'email', message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="\u90E8\u95E8"
        name="department"
        rules={[{ required: true, message: '\u8BF7\u9009\u62E9\u90E8\u95E8' }]}
      >
        <Select>
          <Select.Option value="\u6280\u672F\u90E8">\u6280\u672F\u90E8</Select.Option>
          <Select.Option value="\u4EA7\u54C1\u90E8">\u4EA7\u54C1\u90E8</Select.Option>
          <Select.Option value="\u8FD0\u8425\u90E8">\u8FD0\u8425\u90E8</Select.Option>
          <Select.Option value="\u5E02\u573A\u90E8">\u5E02\u573A\u90E8</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          \u4FDD\u5B58
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => {
  return (
    <ModalPro
      title="\u7F16\u8F91\u7528\u6237"
      Content={UserForm}
      fieldProps={{
        width: 600,
        footer: null, // \u9690\u85CF\u9ED8\u8BA4\u7684\u786E\u5B9A/\u53D6\u6D88\u6309\u94AE
      }}
    >
      <Button>\u7F16\u8F91\u7528\u6237</Button>
    </ModalPro>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(f,2)),durians:E,antd:y},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-2":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return v=r.sent,u=v.ModalPro,r.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return d=r.sent,l=d.Button,o=function(){return f.createElement(u,{title:"\u57FA\u7840\u5F39\u7A97",Content:function(){return f.createElement("div",null,"\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5F39\u7A97\u793A\u4F8B")}},f.createElement(l,{type:"primary"},"\u6253\u5F00\u5F39\u7A97"))},r.abrupt("return",{default:o});case 10:case"end":return r.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-2",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{durians:E,antd:y},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-3":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o,n,r,t,s,m;return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return v=i.sent,u=v.ModalPro,i.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return d=i.sent,l=d.Button,o=d.Form,n=d.Input,r=d.message,i.next=13,Promise.resolve().then(e.t.bind(e,67294,19));case 13:return t=i.sent,s=t.default,m=function(){return s.createElement(u,{title:"\u8868\u5355\u63D0\u4EA4",Content:function(g){var A=g.setIsModalOpen;return s.createElement(o,{onFinish:function($){console.log("\u8868\u5355\u503C\uFF1A",$),r.success("\u63D0\u4EA4\u6210\u529F"),A(!1)}},s.createElement(o.Item,{name:"username",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},s.createElement(n,null)),s.createElement(o.Item,{name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{type:"email",message:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1"}]},s.createElement(n,null)))},handleOk:function(g){g(!0)}},s.createElement(l,{type:"primary"},"\u6253\u5F00\u8868\u5355"))},i.abrupt("return",{default:m});case 17:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-3",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:E,antd:y,react:P||(P=e.t(f,2))},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-4":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o,n,r,t,s;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return v=a.sent,u=v.ModalPro,a.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return d=a.sent,l=d.Button,o=d.Spin,n=d.message,a.next=12,Promise.resolve().then(e.t.bind(e,67294,19));case 12:return r=a.sent,t=r.useState,s=function(){var x=t(!1),I=D()(x,2),g=I[0],A=I[1];return f.createElement(u,{title:"\u5F02\u6B65\u64CD\u4F5C",Content:function(){return f.createElement("div",{style:{textAlign:"center",padding:"20px"}},g?f.createElement(o,null):"\u70B9\u51FB\u786E\u5B9A\u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C")},handleOk:function(){var M=p()(c()().mark(function O(C){return c()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return A(!0),L.prev=1,L.next=4,new Promise(function(K){return setTimeout(K,2e3)});case 4:n.success("\u64CD\u4F5C\u6210\u529F"),C(!0),L.next=11;break;case 8:L.prev=8,L.t0=L.catch(1),n.error("\u64CD\u4F5C\u5931\u8D25");case 11:return L.prev=11,A(!1),L.finish(11);case 14:case"end":return L.stop()}},O,null,[[1,8,11,14]])}));function $(O){return M.apply(this,arguments)}return $}(),fieldProps:{confirmLoading:g}},f.createElement(l,{type:"primary"},"\u5F02\u6B65\u64CD\u4F5C"))},a.abrupt("return",{default:s});case 16:case"end":return a.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-4",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:E,antd:y,react:P||(P=e.t(f,2))},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-5":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o,n,r;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return v=s.sent,u=v.ModalPro,s.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return d=s.sent,l=d.Button,s.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return o=s.sent,n=o.useState,r=function(){var a=n(0),i=D()(a,2),x=i[0],I=i[1];return f.createElement(u,{Content:function(){return f.createElement("div",null,f.createElement("p",null,"\u5F53\u524D\u8BA1\u6570\uFF1A",x),f.createElement(l,{onClick:function(){return I(function(M){return M+1})}},"\u589E\u52A0"))}},f.createElement(l,null,"\u6253\u5F00\u5F39\u7A97"))},s.abrupt("return",{default:r});case 14:case"end":return s.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-5",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:E,antd:y,react:P||(P=e.t(f,2))},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-6":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return v=r.sent,u=v.ModalPro,r.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return d=r.sent,l=d.Button,o=function(){return f.createElement(u,{fieldProps:{okText:"\u786E\u8BA4\u63D0\u4EA4",cancelText:"\u53D6\u6D88\u64CD\u4F5C",okButtonProps:{type:"primary",danger:!0},cancelButtonProps:{type:"default"}}},f.createElement(l,null,"\u81EA\u5B9A\u4E49\u6309\u94AE"))},r.abrupt("return",{default:o});case 10:case"end":return r.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-6",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{durians:E,antd:y},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-7":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o,n,r,t;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return v=m.sent,u=v.ModalPro,m.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return d=m.sent,l=d.Button,o=d.Form,n=d.Input,r=d.message,t=function(){var i=o.useForm(),x=D()(i,1),I=x[0];return f.createElement(u,{Content:function(){return f.createElement(o,{form:I},f.createElement(o.Item,{name:"email",rules:[{required:!0},{type:"email"}]},f.createElement(n,null)))},handleOk:function(){var g=p()(c()().mark(function M($){return c()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.prev=0,C.next=3,I.validateFields();case 3:$(!0),C.next=9;break;case 6:C.prev=6,C.t0=C.catch(0),r.error("\u8BF7\u5B8C\u6210\u8868\u5355\u6821\u9A8C");case 9:case"end":return C.stop()}},M,null,[[0,6]])}));function A(M){return g.apply(this,arguments)}return A}()},f.createElement(l,null,"\u8868\u5355\u6821\u9A8C"))},m.abrupt("return",{default:t});case 13:case"end":return m.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-7",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{durians:E,antd:y},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"modalpro-demo-8":{component:f.memo(f.lazy(p()(c()().mark(function h(){var v,u,d,l,o,n,r;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return v=s.sent,u=v.ModalPro,s.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return d=s.sent,l=d.Button,s.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return o=s.sent,n=o.useState,r=function(){var a=n([]),i=D()(a,2),x=i[0],I=i[1];return f.createElement(u,{fieldProps:{afterClose:function(){return I([])},destroyOnClose:!0},Content:function(){return f.createElement("div",null,"\u5F53\u524D\u6570\u636E\uFF1A",JSON.stringify(x))}},f.createElement(l,null,"\u72B6\u6001\u91CD\u7F6E"))},s.abrupt("return",{default:r});case 14:case"end":return s.stop()}},h)})))),asset:{type:"BLOCK",id:"modalpro-demo-8",refAtomIds:["ModalPro"],dependencies:{"index.tsx":{type:"FILE",value:`import {ModalPro} from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{durians:E,antd:y,react:P||(P=e.t(f,2))},renderOpts:{compile:function(){var h=p()(c()().mark(function u(){var d,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,l));case 3:case"end":return n.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}}}},78893:function(R,B,e){"use strict";var P;e.r(B),e.d(B,{demos:function(){return v}});var N=e(97857),D=e.n(N),j=e(15009),c=e.n(j),F=e(99289),p=e.n(F),f=e(67294),E=e(66436),y=e(52202),T=e(1785),h=e(68216),v={"tablepro-demo-0":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o,n,r,t,s;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=a.sent,l=d.default,o=d.useEffect,a.next=7,Promise.resolve().then(e.bind(e,66436));case 7:return n=a.sent,r=n.TablePro,a.next=11,Promise.resolve().then(e.bind(e,52202));case 11:return t=a.sent,s=t.message,a.abrupt("return",{default:function(){return o(function(){console.log("\u{1F50D} TablePro \u57FA\u7840\u6F14\u793A\u5DF2\u52A0\u8F7D")},[]),l.createElement("div",{style:{padding:"20px"}},l.createElement("h3",null,"\u7528\u6237\u7BA1\u7406\u8868\u683C"),l.createElement(r,{url:"/api/users",fieldProps:{columns:[{title:"\u59D3\u540D",dataIndex:"name",valueType:"text",width:120},{title:"\u90AE\u7BB1",dataIndex:"email",valueType:"text",width:200},{title:"\u90E8\u95E8",dataIndex:"department",valueType:"text",width:120},{title:"\u804C\u4F4D",dataIndex:"position",valueType:"text",width:140},{title:"\u72B6\u6001",dataIndex:"status",valueType:"select",width:100,valueEnum:{0:{text:"\u7981\u7528",status:"Error"},1:{text:"\u542F\u7528",status:"Success"}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime",width:180,hideInSearch:!0}],pagination:{pageSize:10,showSizeChanger:!0,showQuickJumper:!0},search:{labelWidth:"auto"}},onError:function(I){console.error("\u8868\u683C\u52A0\u8F7D\u9519\u8BEF:",I),s.error("\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}}))}});case 14:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-0",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useEffect } from 'react';
import { TablePro } from 'durians';
import { message } from 'antd';

export default () => {
  useEffect(() => {
    // \u786E\u4FDD Mock \u670D\u52A1\u5DF2\u542F\u52A8
    console.log('\u{1F50D} TablePro \u57FA\u7840\u6F14\u793A\u5DF2\u52A0\u8F7D');
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>\u7528\u6237\u7BA1\u7406\u8868\u683C</h3>
      <TablePro
        url="/api/users"
        fieldProps={{
          columns: [
            {
              title: '\u59D3\u540D',
              dataIndex: 'name',
              valueType: 'text',
              width: 120,
            },
            {
              title: '\u90AE\u7BB1',
              dataIndex: 'email',
              valueType: 'text',
              width: 200,
            },
            {
              title: '\u90E8\u95E8',
              dataIndex: 'department',
              valueType: 'text',
              width: 120,
            },
            {
              title: '\u804C\u4F4D',
              dataIndex: 'position',
              valueType: 'text',
              width: 140,
            },
            {
              title: '\u72B6\u6001',
              dataIndex: 'status',
              valueType: 'select',
              width: 100,
              valueEnum: {
                0: { text: '\u7981\u7528', status: 'Error' },
                1: { text: '\u542F\u7528', status: 'Success' },
              },
            },
            {
              title: '\u521B\u5EFA\u65F6\u95F4',
              dataIndex: 'createTime',
              valueType: 'dateTime',
              width: 180,
              hideInSearch: true,
            },
          ],
          pagination: {
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          },
          search: {
            labelWidth: 'auto',
          },
        }}
        onError={(error) => {
          console.error('\u8868\u683C\u52A0\u8F7D\u9519\u8BEF:', error);
          message.error('\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5');
        }}
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(f,2)),durians:E,antd:y},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-1":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o,n,r,t,s,m;return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=i.sent,l=d.default,o=d.useRef,i.next=7,Promise.resolve().then(e.bind(e,66436));case 7:return n=i.sent,r=n.TablePro,i.next=11,Promise.resolve().then(e.bind(e,52202));case 11:return t=i.sent,s=t.message,m=t.Button,i.abrupt("return",{default:function(){var I=o(),g=function($,O,C){var b={add:"\u65B0\u589E",edit:"\u7F16\u8F91",delete:"\u5220\u9664"},L=b[C]||"\u64CD\u4F5C";s.success("".concat(L,"\u6210\u529F\uFF01")),console.log("".concat(L,"\u7ED3\u679C:"),{data:$,values:O,type:C})},A=function($,O){var C={add:"\u65B0\u589E",edit:"\u7F16\u8F91",delete:"\u5220\u9664"},b=C[O]||"\u64CD\u4F5C";console.error("".concat(b,"\u5931\u8D25:"),$),s.error("".concat(b,"\u5931\u8D25: ").concat($.message||"\u672A\u77E5\u9519\u8BEF"))};return l.createElement("div",{style:{padding:"20px"}},l.createElement("h3",null,"\u7528\u6237\u7BA1\u7406\u7CFB\u7EDF (\u5B8C\u6574 CRUD)"),l.createElement(r,{ref:I,url:"/api/users",addUrl:"/api/users",editUrl:"/api/users",deleteUrl:"/api/users",fieldProps:{columns:[{title:"\u59D3\u540D",dataIndex:"name",valueType:"text",width:120,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"},{min:2,message:"\u59D3\u540D\u81F3\u5C112\u4E2A\u5B57\u7B26"}]}},{title:"\u90AE\u7BB1",dataIndex:"email",valueType:"text",width:200,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F"}]}},{title:"\u624B\u673A\u53F7",dataIndex:"phone",valueType:"text",width:140,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:/^1[3-9]\d{9}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"}]}},{title:"\u90E8\u95E8",dataIndex:"department",valueType:"select",width:120,valueEnum:{\u6280\u672F\u90E8:{text:"\u6280\u672F\u90E8"},\u4EA7\u54C1\u90E8:{text:"\u4EA7\u54C1\u90E8"},\u8FD0\u8425\u90E8:{text:"\u8FD0\u8425\u90E8"},\u5E02\u573A\u90E8:{text:"\u5E02\u573A\u90E8"},\u4EBA\u4E8B\u90E8:{text:"\u4EBA\u4E8B\u90E8"}},formItemProps:{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u90E8\u95E8"}]}},{title:"\u72B6\u6001",dataIndex:"status",valueType:"select",width:100,valueEnum:{0:{text:"\u7981\u7528",status:"Error"},1:{text:"\u542F\u7528",status:"Success"}},initialValue:1},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime",width:180,hideInForm:!0,hideInSearch:!0,sorter:!0}],pagination:{pageSize:10,showSizeChanger:!0,showQuickJumper:!0},search:{labelWidth:"auto",defaultCollapsed:!1},options:{reload:!0,density:!0,setting:!0},rowSelection:{type:"checkbox"}},finishFun:g,onError:A,toolBarRender:function(){return[l.createElement(m,{key:"export",onClick:function(){s.info("\u5BFC\u51FA\u529F\u80FD\u6F14\u793A")}},"\u5BFC\u51FA\u6570\u636E")]}}))}});case 15:case"end":return i.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-1",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { TablePro } from 'durians';
import { message, Button } from 'antd';

export default () => {
  const tableRef = useRef();

  const handleSuccess = (data, values, type) => {
    const actionMap = {
      'add': '\u65B0\u589E',
      'edit': '\u7F16\u8F91',
      'delete': '\u5220\u9664'
    };
    const action = actionMap[type] || '\u64CD\u4F5C';
    message.success(\`\${action}\u6210\u529F\uFF01\`);
    console.log(\`\${action}\u7ED3\u679C:\`, { data, values, type });
  };

  const handleError = (error, type) => {
    const actionMap = {
      'add': '\u65B0\u589E',
      'edit': '\u7F16\u8F91',
      'delete': '\u5220\u9664'
    };
    const action = actionMap[type] || '\u64CD\u4F5C';
    console.error(\`\${action}\u5931\u8D25:\`, error);
    message.error(\`\${action}\u5931\u8D25: \${error.message || '\u672A\u77E5\u9519\u8BEF'}\`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>\u7528\u6237\u7BA1\u7406\u7CFB\u7EDF (\u5B8C\u6574 CRUD)</h3>
      <TablePro
        ref={tableRef}
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
              width: 120,
              formItemProps: {
                rules: [
                  { required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D' },
                  { min: 2, message: '\u59D3\u540D\u81F3\u5C112\u4E2A\u5B57\u7B26' },
                ],
              },
            },
            {
              title: '\u90AE\u7BB1',
              dataIndex: 'email',
              valueType: 'text',
              width: 200,
              formItemProps: {
                rules: [
                  { required: true, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1' },
                  { type: 'email', message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F' },
                ],
              },
            },
            {
              title: '\u624B\u673A\u53F7',
              dataIndex: 'phone',
              valueType: 'text',
              width: 140,
              formItemProps: {
                rules: [
                  { required: true, message: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' },
                  { pattern: /^1[3-9]\\d{9}$/, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7' },
                ],
              },
            },
            {
              title: '\u90E8\u95E8',
              dataIndex: 'department',
              valueType: 'select',
              width: 120,
              valueEnum: {
                '\u6280\u672F\u90E8': { text: '\u6280\u672F\u90E8' },
                '\u4EA7\u54C1\u90E8': { text: '\u4EA7\u54C1\u90E8' },
                '\u8FD0\u8425\u90E8': { text: '\u8FD0\u8425\u90E8' },
                '\u5E02\u573A\u90E8': { text: '\u5E02\u573A\u90E8' },
                '\u4EBA\u4E8B\u90E8': { text: '\u4EBA\u4E8B\u90E8' },
              },
              formItemProps: {
                rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u90E8\u95E8' }],
              },
            },
            {
              title: '\u72B6\u6001',
              dataIndex: 'status',
              valueType: 'select',
              width: 100,
              valueEnum: {
                0: { text: '\u7981\u7528', status: 'Error' },
                1: { text: '\u542F\u7528', status: 'Success' },
              },
              initialValue: 1,
            },
            {
              title: '\u521B\u5EFA\u65F6\u95F4',
              dataIndex: 'createTime',
              valueType: 'dateTime',
              width: 180,
              hideInForm: true,
              hideInSearch: true,
              sorter: true,
            },
          ],
          pagination: {
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          },
          search: {
            labelWidth: 'auto',
            defaultCollapsed: false,
          },
          options: {
            reload: true,
            density: true,
            setting: true,
          },
          rowSelection: {
            type: 'checkbox',
          },
        }}
        finishFun={handleSuccess}
        onError={handleError}
        toolBarRender={() => [
          <Button
            key="export"
            onClick={() => {
              message.info('\u5BFC\u51FA\u529F\u80FD\u6F14\u793A');
            }}
          >
            \u5BFC\u51FA\u6570\u636E
          </Button>,
        ]}
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(f,2)),durians:E,antd:y},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-2":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o,n,r,t,s;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=a.sent,l=d.default,a.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return o=a.sent,n=o.TablePro,a.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return r=a.sent,t=r.Tag,s=r.Image,a.abrupt("return",{default:function(){return l.createElement(n,{url:"/api/products",addUrl:"/api/products",editUrl:"/api/products",deleteUrl:"/api/products",fieldProps:{columns:[{title:"\u4EA7\u54C1\u56FE\u7247",dataIndex:"images",valueType:"image",hideInSearch:!0,render:function(I,g){var A;return l.createElement(s,{width:60,height:60,src:(A=g.images)===null||A===void 0?void 0:A[0],fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"})}},{title:"\u4EA7\u54C1\u540D\u79F0",dataIndex:"name",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"}]}},{title:"\u4EF7\u683C",dataIndex:"price",valueType:"money",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C"}]}},{title:"\u5206\u7C7B",dataIndex:"category",valueType:"select",valueEnum:{\u7535\u5B50\u4EA7\u54C1:{text:"\u7535\u5B50\u4EA7\u54C1"},\u670D\u88C5\u978B\u5E3D:{text:"\u670D\u88C5\u978B\u5E3D"},\u5BB6\u5C45\u7528\u54C1:{text:"\u5BB6\u5C45\u7528\u54C1"},\u56FE\u4E66\u97F3\u50CF:{text:"\u56FE\u4E66\u97F3\u50CF"},\u8FD0\u52A8\u6237\u5916:{text:"\u8FD0\u52A8\u6237\u5916"}}},{title:"\u54C1\u724C",dataIndex:"brand",valueType:"text"},{title:"\u5E93\u5B58",dataIndex:"stock",valueType:"digit",sorter:!0},{title:"\u9500\u91CF",dataIndex:"sales",valueType:"digit",hideInForm:!0,sorter:!0},{title:"\u8BC4\u5206",dataIndex:"rating",valueType:"rate",hideInForm:!0},{title:"\u72B6\u6001",dataIndex:"status",valueType:"select",valueEnum:{0:{text:"\u4E0B\u67B6",status:"Error"},1:{text:"\u4E0A\u67B6",status:"Success"},2:{text:"\u7F3A\u8D27",status:"Warning"}},render:function(I,g){var A={0:{color:"red",text:"\u4E0B\u67B6"},1:{color:"green",text:"\u4E0A\u67B6"},2:{color:"orange",text:"\u7F3A\u8D27"}},M=A[g.status];return l.createElement(t,{color:M==null?void 0:M.color},M==null?void 0:M.text)}}]}})}});case 14:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-2",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TablePro } from 'durians';
import { Tag, Image } from 'antd';

export default () => {
  return (
    <TablePro
      url="/api/products"
      addUrl="/api/products"
      editUrl="/api/products"
      deleteUrl="/api/products"
      fieldProps={{
        columns: [
          {
            title: '\u4EA7\u54C1\u56FE\u7247',
            dataIndex: 'images',
            valueType: 'image',
            hideInSearch: true,
            render: (_, record) => (
              <Image
                width={60}
                height={60}
                src={record.images?.[0]}
                fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
              />
            ),
          },
          {
            title: '\u4EA7\u54C1\u540D\u79F0',
            dataIndex: 'name',
            valueType: 'text',
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0' }],
            },
          },
          {
            title: '\u4EF7\u683C',
            dataIndex: 'price',
            valueType: 'money',
            sorter: true,
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C' }],
            },
          },
          {
            title: '\u5206\u7C7B',
            dataIndex: 'category',
            valueType: 'select',
            valueEnum: {
              '\u7535\u5B50\u4EA7\u54C1': { text: '\u7535\u5B50\u4EA7\u54C1' },
              '\u670D\u88C5\u978B\u5E3D': { text: '\u670D\u88C5\u978B\u5E3D' },
              '\u5BB6\u5C45\u7528\u54C1': { text: '\u5BB6\u5C45\u7528\u54C1' },
              '\u56FE\u4E66\u97F3\u50CF': { text: '\u56FE\u4E66\u97F3\u50CF' },
              '\u8FD0\u52A8\u6237\u5916': { text: '\u8FD0\u52A8\u6237\u5916' },
            },
          },
          {
            title: '\u54C1\u724C',
            dataIndex: 'brand',
            valueType: 'text',
          },
          {
            title: '\u5E93\u5B58',
            dataIndex: 'stock',
            valueType: 'digit',
            sorter: true,
          },
          {
            title: '\u9500\u91CF',
            dataIndex: 'sales',
            valueType: 'digit',
            hideInForm: true,
            sorter: true,
          },
          {
            title: '\u8BC4\u5206',
            dataIndex: 'rating',
            valueType: 'rate',
            hideInForm: true,
          },
          {
            title: '\u72B6\u6001',
            dataIndex: 'status',
            valueType: 'select',
            valueEnum: {
              0: { text: '\u4E0B\u67B6', status: 'Error' },
              1: { text: '\u4E0A\u67B6', status: 'Success' },
              2: { text: '\u7F3A\u8D27', status: 'Warning' },
            },
            render: (_, record) => {
              const statusMap = {
                0: { color: 'red', text: '\u4E0B\u67B6' },
                1: { color: 'green', text: '\u4E0A\u67B6' },
                2: { color: 'orange', text: '\u7F3A\u8D27' },
              };
              const status = statusMap[record.status];
              return <Tag color={status?.color}>{status?.text}</Tag>;
            },
          },
        ],
      }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(f,2)),durians:E,antd:y},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-3":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o,n,r,t;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,66436));case 2:for(d=m.sent,l=d.TablePro,o=[{title:"\u59D3\u540D",dataIndex:"name",width:100,sorter:!0,fixed:"left"},{title:"\u5E74\u9F84",dataIndex:"age",width:100},{title:"\u5730\u5740",dataIndex:"address"}],n=[],r=0;r<10;r++)n.push({id:r,name:"\u7528\u6237".concat(r),age:Math.floor(Math.random()*100),address:"\u5730\u5740".concat(r)});return t=function(){return f.createElement(l,{fieldProps:{rowKey:"id",columns:o,dataSource:n},addUrl:"/api/add",editUrl:"/api/edit",deleteUrl:"/api/delete"})},m.abrupt("return",{default:t});case 9:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-3",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-4":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return d=r.sent,l=d.TablePro,o=function(){return f.createElement(l,{url:"/api/list",treeFieldProps:{url:"/api/tree",fieldProps:{fieldNames:{title:"name",key:"id",children:"children"}}},fieldProps:{columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u72B6\u6001",dataIndex:"status",valueEnum:{0:{text:"\u7981\u7528",status:"Error"},1:{text:"\u542F\u7528",status:"Success"}}}]}})},r.abrupt("return",{default:o});case 6:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-4",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-5":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o,n,r,t,s;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return d=a.sent,l=d.TablePro,a.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return o=a.sent,n=o.Button,a.next=10,Promise.resolve().then(e.bind(e,1785));case 10:return r=a.sent,t=r.DownloadOutlined,s=function(){return f.createElement(l,{fieldProps:{toolBarRender:function(){return[f.createElement(n,{key:"export",icon:f.createElement(t,null),onClick:function(){return console.log("\u5BFC\u51FA")}},"\u5BFC\u51FA\u6570\u636E")]},columns:[]}})},a.abrupt("return",{default:s});case 14:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-5",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"},"@ant-design/icons":{type:"NPM",value:"6.0.0"}},entry:"index.tsx"},context:{durians:E,antd:y,"@ant-design/icons":T},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-6":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o,n,r;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return d=s.sent,l=d.TablePro,s.next=6,Promise.resolve().then(e.bind(e,68216));case 6:return o=s.sent,n=o.default,r=function(){var a=function(){var i=p()(c()().mark(function x(I,g,A){var M;return c()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.prev=0,O.next=3,n.post(I,g);case 3:M=O.sent,M.data.code===0&&A(M.data),O.next=10;break;case 7:O.prev=7,O.t0=O.catch(0),console.error(O.t0);case 10:case"end":return O.stop()}},x,null,[[0,7]])}));return function(I,g,A){return i.apply(this,arguments)}}();return f.createElement(l,{ajax:a,url:"/api/list",fieldProps:{columns:[]}})},s.abrupt("return",{default:r});case 10:case"end":return s.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-6",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},axios:{type:"NPM",value:"1.11.0"}},entry:"index.tsx"},context:{durians:E,axios:h},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-7":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return d=r.sent,l=d.TablePro,o=function(){return f.createElement(l,{url:"/api/list",setData:function(m){return m.data.list.map(function(a){return D()(D()({},a),{},{fullName:"".concat(a.firstName," ").concat(a.lastName)})})},setTotal:function(m){return m.data.total},fieldProps:{columns:[]}})},r.abrupt("return",{default:o});case 6:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-7",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-8":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o,n,r,t;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return d=m.sent,l=d.TablePro,m.next=6,Promise.resolve().then(e.bind(e,52202));case 6:return o=m.sent,n=o.Button,r=o.message,t=function(){return f.createElement(l,{actionBar:[function(i){return f.createElement(n,{type:"link",onClick:function(){return r.success("\u67E5\u770B\u8BE6\u60C5\uFF1A".concat(i.id))}},"\u67E5\u770B")},function(i){return f.createElement(n,{type:"link",danger:!0,onClick:function(){return r.success("\u5220\u9664\uFF1A".concat(i.id))}},"\u5220\u9664")}],actionWidth:150,fieldProps:{columns:[]}})},m.abrupt("return",{default:t});case 11:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-8",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';
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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{durians:E,antd:y},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-9":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return d=r.sent,l=d.TablePro,o=function(){return f.createElement(l,{url:"/api/list",treeFieldProps:{url:"/api/tree",fieldProps:{fieldNames:{title:"name",key:"id",children:"children"}}},treeParamsFun:function(m){return{departmentId:m[0]}},fieldProps:{columns:[]}})},r.abrupt("return",{default:o});case 6:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-9",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}},"tablepro-demo-10":{component:f.memo(f.lazy(p()(c()().mark(function u(){var d,l,o;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66436));case 2:return d=r.sent,l=d.TablePro,o=function(){return f.createElement(l,{keywordField:"keyword",keywordPlaceholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",fieldProps:{columns:[{title:"\u540D\u79F0",dataIndex:"name",proConfig:{isKeyword:!0}}]}})},r.abrupt("return",{default:o});case 6:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"tablepro-demo-10",refAtomIds:["TablePro"],dependencies:{"index.tsx":{type:"FILE",value:`import { TablePro } from 'durians';

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

export default Demo;`},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{durians:E},renderOpts:{compile:function(){var u=p()(c()().mark(function l(){var o,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,n));case 3:case"end":return t.stop()}},l)}));function d(){return u.apply(this,arguments)}return d}()}}}},16568:function(R,B,e){"use strict";var P;e.r(B),e.d(B,{demos:function(){return E}});var N=e(15009),D=e.n(N),j=e(99289),c=e.n(j),F=e(67294),p=e(66436),f=e(52202),E={"treepro-demo-0":{component:F.memo(F.lazy(c()(D()().mark(function y(){var T,h,v,u;return D()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return T=l.sent,h=T.default,l.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return v=l.sent,u=v.TreePro,l.abrupt("return",{default:function(){return h.createElement(u,{title:"\u7EC4\u7EC7\u67B6\u6784",url:"/api/departments",fieldProps:{fieldNames:{title:"name",key:"id",children:"children"}}})}});case 9:case"end":return l.stop()}},y)})))),asset:{type:"BLOCK",id:"treepro-demo-0",refAtomIds:["TreePro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TreePro } from 'durians';

export default () => {
  return (
    <TreePro
      title="\u7EC4\u7EC7\u67B6\u6784"
      url="/api/departments"
      fieldProps={{
        fieldNames: {
          title: 'name',
          key: 'id',
          children: 'children'
        }
      }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{react:P||(P=e.t(F,2)),durians:p},renderOpts:{compile:function(){var y=c()(D()().mark(function h(){var v,u=arguments;return D()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(250).then(e.bind(e,90250));case 2:return l.abrupt("return",(v=l.sent).default.apply(v,u));case 3:case"end":return l.stop()}},h)}));function T(){return y.apply(this,arguments)}return T}()}},"treepro-demo-1":{component:F.memo(F.lazy(c()(D()().mark(function y(){var T,h,v,u,d,l;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return T=n.sent,h=T.default,n.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return v=n.sent,u=v.TreePro,n.next=10,Promise.resolve().then(e.bind(e,52202));case 10:return d=n.sent,l=d.message,n.abrupt("return",{default:function(){return h.createElement(u,{title:"\u90E8\u95E8\u7BA1\u7406",url:"/api/departments",addUrl:"/api/departments",editUrl:"/api/departments",deleteUrl:"/api/departments",isLoadData:!0,fieldProps:{fieldNames:{title:"name",key:"id",children:"children"},columns:[{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"name",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"}]}},{title:"\u90E8\u95E8\u7F16\u7801",dataIndex:"code",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u7F16\u7801"}]}},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"manager",valueType:"text"},{title:"\u8054\u7CFB\u7535\u8BDD",dataIndex:"phone",valueType:"text",formItemProps:{rules:[{pattern:/^1[3-9]\d{9}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"}]}},{title:"\u90AE\u7BB1",dataIndex:"email",valueType:"text",formItemProps:{rules:[{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F"}]}},{title:"\u63CF\u8FF0",dataIndex:"description",valueType:"textarea",fieldProps:{rows:3}},{title:"\u72B6\u6001",dataIndex:"status",valueType:"select",valueEnum:{0:{text:"\u7981\u7528",status:"Error"},1:{text:"\u542F\u7528",status:"Success"}}}]},finishFun:function(s,m){l.success("\u64CD\u4F5C\u6210\u529F"),console.log("\u64CD\u4F5C\u7ED3\u679C:",s,m)}})}});case 13:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"treepro-demo-1",refAtomIds:["TreePro"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TreePro } from 'durians';
import { message } from 'antd';

export default () => {
  return (
    <TreePro
      title="\u90E8\u95E8\u7BA1\u7406"
      url="/api/departments"
      addUrl="/api/departments"
      editUrl="/api/departments"
      deleteUrl="/api/departments"
      isLoadData={true}
      fieldProps={{
        fieldNames: {
          title: 'name',
          key: 'id',
          children: 'children'
        },
        columns: [
          {
            title: '\u90E8\u95E8\u540D\u79F0',
            dataIndex: 'name',
            valueType: 'text',
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0' }],
            },
          },
          {
            title: '\u90E8\u95E8\u7F16\u7801',
            dataIndex: 'code',
            valueType: 'text',
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u90E8\u95E8\u7F16\u7801' }],
            },
          },
          {
            title: '\u8D1F\u8D23\u4EBA',
            dataIndex: 'manager',
            valueType: 'text',
          },
          {
            title: '\u8054\u7CFB\u7535\u8BDD',
            dataIndex: 'phone',
            valueType: 'text',
            formItemProps: {
              rules: [
                { pattern: /^1[3-9]\\d{9}$/, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7' },
              ],
            },
          },
          {
            title: '\u90AE\u7BB1',
            dataIndex: 'email',
            valueType: 'text',
            formItemProps: {
              rules: [
                { type: 'email', message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F' },
              ],
            },
          },
          {
            title: '\u63CF\u8FF0',
            dataIndex: 'description',
            valueType: 'textarea',
            fieldProps: {
              rows: 3,
            },
          },
          {
            title: '\u72B6\u6001',
            dataIndex: 'status',
            valueType: 'select',
            valueEnum: {
              0: { text: '\u7981\u7528', status: 'Error' },
              1: { text: '\u542F\u7528', status: 'Success' },
            },
          },
        ],
      }}
      finishFun={(data, values) => {
        message.success('\u64CD\u4F5C\u6210\u529F');
        console.log('\u64CD\u4F5C\u7ED3\u679C:', data, values);
      }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"},antd:{type:"NPM",value:"5.26.7"}},entry:"index.tsx"},context:{react:P||(P=e.t(F,2)),durians:p,antd:f},renderOpts:{compile:function(){var y=c()(D()().mark(function h(){var v,u=arguments;return D()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(250).then(e.bind(e,90250));case 2:return l.abrupt("return",(v=l.sent).default.apply(v,u));case 3:case"end":return l.stop()}},h)}));function T(){return y.apply(this,arguments)}return T}()}},"treepro-demo-2":{component:F.memo(F.lazy(c()(D()().mark(function y(){var T,h,v,u,d,l;return D()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return T=n.sent,h=T.default,n.next=6,Promise.resolve().then(e.bind(e,66436));case 6:return v=n.sent,u=v.TreePro,d=[{title:"\u8282\u70B91",key:"0-0",children:[{title:"\u5B50\u8282\u70B91",key:"0-0-0"}]},{title:"\u8282\u70B92",key:"0-1",children:[{title:"\u5B50\u8282\u70B92",key:"0-1-0"}]}],l=function(){var t=function(a,i){console.log("\u9009\u4E2D",a,i)},s=function(a,i){console.log("\u52FE\u9009",a,i)};return h.createElement(u,{fieldProps:{treeData:d}})},n.abrupt("return",{default:l});case 11:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"treepro-demo-2",refAtomIds:["TreePro"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
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

export default TreeProExample;`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"}},entry:"index.jsx",title:"\u57FA\u672C TreePro \u793A\u4F8B"},context:{react:P||(P=e.t(F,2)),durians:p},renderOpts:{compile:function(){var y=c()(D()().mark(function h(){var v,u=arguments;return D()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(250).then(e.bind(e,90250));case 2:return l.abrupt("return",(v=l.sent).default.apply(v,u));case 3:case"end":return l.stop()}},h)}));function T(){return y.apply(this,arguments)}return T}()}}}},45637:function(R,B,e){"use strict";e.r(B),e.d(B,{texts:function(){return P}});const P=[{value:"FormPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Components",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u5C01\u88C5\u4E86\u5E38\u89C1\u7684\u8868\u5355\u573A\u666F\uFF0C\u652F\u6301\u6A21\u6001\u6846\u3001\u62BD\u5C49\u7B49\u591A\u79CD\u5E03\u5C40\u5F62\u5F0F\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u914D\u7F6E\u9879\u548C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u6A21\u6001\u6846\u8868\u5355\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u4F7F\u7528\u62BD\u5C49\u5E03\u5C40\u7684\u8868\u5355\u793A\u4F8B\u3002",paraId:2,tocIndex:2},{value:"\u9700\u8981\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u6A21\u6001\u6846\u6216\u62BD\u5C49\u5F62\u5F0F\u7684\u8868\u5355",paraId:3,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u8868\u5355\u63D0\u4EA4\u3001\u6570\u636E\u83B7\u53D6\u7B49\u590D\u6742\u903B\u8F91",paraId:3,tocIndex:3},{value:"\u9700\u8981\u7EDF\u4E00\u7BA1\u7406\u8868\u5355\u9A8C\u8BC1\u548C\u63D0\u4EA4\u884C\u4E3A",paraId:3,tocIndex:3},{value:"\u9700\u8981\u7075\u6D3B\u914D\u7F6E\u8868\u5355\u5B57\u6BB5\u548C\u5E03\u5C40",paraId:3,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u5F02\u6B65\u6570\u636E\u52A0\u8F7D\u548C\u63D0\u4EA4",paraId:3,tocIndex:3},{value:`import type { FormProProps } from 'durians';

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
`,paraId:4,tocIndex:6},{value:"\u53C2\u6570",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"layoutType",paraId:5,tocIndex:6},{value:"\u8868\u5355\u5E03\u5C40\u7C7B\u578B\uFF0C\u652F\u6301\u6A21\u6001\u6846\u6216\u62BD\u5C49\u5F62\u5F0F",paraId:5,tocIndex:6},{value:"'ModalForm' | 'DrawerForm'",paraId:5,tocIndex:6},{value:"'ModalForm'",paraId:5,tocIndex:6},{value:"children",paraId:5,tocIndex:6},{value:"\u89E6\u53D1\u8868\u5355\u663E\u793A\u7684\u5143\u7D20\uFF0C\u901A\u5E38\u662F\u4E00\u4E2A\u6309\u94AE",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"<Button>\u70B9\u51FB\u6211</Button>",paraId:5,tocIndex:6},{value:"fieldProps",paraId:5,tocIndex:6},{value:"\u8868\u5355\u5B57\u6BB5\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA ",paraId:5,tocIndex:6},{value:"BetaSchemaForm",paraId:5,tocIndex:6},{value:" \u7684\u6240\u6709\u5C5E\u6027",paraId:5,tocIndex:6},{value:"BetaSchemaFormProps",paraId:5,tocIndex:6},{value:"{}",paraId:5,tocIndex:6},{value:"url",paraId:5,tocIndex:6},{value:"\u8868\u5355\u63D0\u4EA4\u7684\u63A5\u53E3\u5730\u5740",paraId:5,tocIndex:6},{value:"string",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"detailUrl",paraId:5,tocIndex:6},{value:"\u83B7\u53D6\u8868\u5355\u8BE6\u60C5\u6570\u636E\u7684\u63A5\u53E3\u5730\u5740\uFF0C\u7F16\u8F91\u6A21\u5F0F\u65F6\u4F7F\u7528",paraId:5,tocIndex:6},{value:"string",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"record",paraId:5,tocIndex:6},{value:"\u8868\u5355\u521D\u59CB\u503C\uFF0C\u7528\u4E8E\u7F16\u8F91\u6A21\u5F0F\u4E0B\u7684\u6570\u636E\u56DE\u663E",paraId:5,tocIndex:6},{value:"Record<string, any>",paraId:5,tocIndex:6},{value:"{}",paraId:5,tocIndex:6},{value:"ajax",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8986\u76D6\u9ED8\u8BA4\u7684\u8BF7\u6C42\u5B9E\u73B0",paraId:5,tocIndex:6},{value:"(url: string, params: any, callback: (data: any) => void) => Promise<void>",paraId:5,tocIndex:6},{value:"ajaxCommon",paraId:5,tocIndex:6},{value:"finishFun",paraId:5,tocIndex:6},{value:"\u8868\u5355\u63D0\u4EA4\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570",paraId:5,tocIndex:6},{value:"(data: any, values: any) => void",paraId:5,tocIndex:6},{value:"() => {}",paraId:5,tocIndex:6},{value:"setMsg",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u63D0\u793A\u6D88\u606F\u5904\u7406\u51FD\u6570",paraId:5,tocIndex:6},{value:"(data: any) => string",paraId:5,tocIndex:6},{value:"(data) => data.msg",paraId:5,tocIndex:6},{value:"detailSetData",paraId:5,tocIndex:6},{value:"\u5904\u7406\u8BE6\u60C5\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u4E8E\u8F6C\u6362\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F",paraId:5,tocIndex:6},{value:"(data: any) => any",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"isEdit",paraId:5,tocIndex:6},{value:"\u662F\u5426\u4E3A\u7F16\u8F91\u6A21\u5F0F\uFF0Ctrue \u65F6\u4F1A\u81EA\u52A8\u52A0\u8F7D\u8BE6\u60C5\u6570\u636E",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"beforeSubmit",paraId:5,tocIndex:6},{value:"\u8868\u5355\u63D0\u4EA4\u524D\u7684\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:5,tocIndex:6},{value:"(values: any, record: any, originValues: any) => any",paraId:5,tocIndex:6},{value:"(data) => data",paraId:5,tocIndex:6},{value:"FormPro \u5185\u7F6E\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u7279\u6B8A\u7684\u8868\u5355\u7EC4\u4EF6\uFF1A",paraId:6,tocIndex:7},{value:"\u8868\u683C\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u7EE7\u627F\u81EA ",paraId:7,tocIndex:8},{value:"TablePro",paraId:8,tocIndex:8},{value:"\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:9},{value:"\u8BF4\u660E",paraId:9},{value:"\u7C7B\u578B",paraId:9},{value:"\u9ED8\u8BA4\u503C",paraId:9},{value:"title",paraId:9},{value:"\u9009\u62E9\u6309\u94AE\u6587\u5B57",paraId:9},{value:"string",paraId:9},{value:"'\u9009\u62E9'",paraId:9},{value:"tableFieldProps",paraId:9},{value:"TablePro \u7684\u914D\u7F6E\u9879",paraId:9},{value:"TableProProps",paraId:9},{value:"-",paraId:9},{value:"modalFieldProps",paraId:9},{value:"ModalPro \u7684\u914D\u7F6E\u9879",paraId:9},{value:"ModalProProps",paraId:9},{value:"-",paraId:9},{value:"\u6811\u5F62\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u3002",paraId:10,tocIndex:9},{value:"\u53C2\u6570",paraId:11},{value:"\u8BF4\u660E",paraId:11},{value:"\u7C7B\u578B",paraId:11},{value:"\u9ED8\u8BA4\u503C",paraId:11},{value:"url",paraId:11},{value:"\u6570\u636E\u63A5\u53E3\u5730\u5740",paraId:11},{value:"string",paraId:11},{value:"-",paraId:11},{value:"params",paraId:11},{value:"\u8BF7\u6C42\u53C2\u6570\u5904\u7406\u51FD\u6570",paraId:11},{value:"(node: any) => object",paraId:11},{value:"() => ({})",paraId:11},{value:"setData",paraId:11},{value:"\u54CD\u5E94\u6570\u636E\u5904\u7406\u51FD\u6570",paraId:11},{value:"(res: any) => any[]",paraId:11},{value:"-",paraId:11},{value:"fieldNames",paraId:11},{value:"\u81EA\u5B9A\u4E49\u8282\u70B9\u5B57\u6BB5",paraId:11},{value:"object",paraId:11},{value:"-",paraId:11},{value:"\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u57FA\u4E8E ",paraId:12,tocIndex:10},{value:"Ant Design Upload",paraId:12,tocIndex:10},{value:"\u3002",paraId:12,tocIndex:10},{value:"\u53C2\u6570",paraId:13},{value:"\u8BF4\u660E",paraId:13},{value:"\u7C7B\u578B",paraId:13},{value:"\u9ED8\u8BA4\u503C",paraId:13},{value:"url",paraId:13},{value:"\u4E0A\u4F20\u63A5\u53E3\u5730\u5740",paraId:13},{value:"string",paraId:13},{value:"/upload",paraId:13},{value:"setData",paraId:13},{value:"\u5904\u7406\u4E0A\u4F20\u54CD\u5E94\u6570\u636E",paraId:13},{value:"(res: any) => string",paraId:13},{value:"-",paraId:13},{value:"fieldPropsUpload",paraId:13},{value:"Upload \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:13},{value:"UploadProps",paraId:13},{value:"-",paraId:13},{value:`// \u8868\u5355\u5B57\u6BB5\u5B9A\u4E49
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
`,paraId:14,tocIndex:12}]},54394:function(R,B,e){"use strict";e.r(B),e.d(B,{texts:function(){return P}});const P=[{value:"LoginPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Components",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u767B\u5F55\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u548C\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\u4E24\u79CD\u65B9\u5F0F\uFF0C\u5E76\u96C6\u6210\u4E86\u81EA\u52A8\u767B\u5F55\u3001\u5BC6\u7801\u52A0\u5BC6\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u767B\u5F55\u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u767B\u5F55\u8868\u5355\u7684\u5B57\u6BB5\u548C\u9A8C\u8BC1\u89C4\u5219\u3002",paraId:2,tocIndex:2},{value:"\u4E3A\u4E86\u65B9\u4FBF\u6D4B\u8BD5\uFF0CMock \u670D\u52A1\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u6D4B\u8BD5\u8D26\u53F7\uFF1A",paraId:3,tocIndex:3},{value:"\u7BA1\u7406\u5458\u8D26\u53F7",paraId:4,tocIndex:3},{value:":",paraId:4,tocIndex:3},{value:"\u7528\u6237\u540D: ",paraId:5,tocIndex:3},{value:"admin",paraId:5,tocIndex:3},{value:"\u5BC6\u7801: ",paraId:5,tocIndex:3},{value:"123456",paraId:5,tocIndex:3},{value:"\u6743\u9650: \u7BA1\u7406\u5458\u6743\u9650",paraId:5,tocIndex:3},{value:"\u666E\u901A\u7528\u6237\u8D26\u53F7",paraId:6,tocIndex:3},{value:":",paraId:6,tocIndex:3},{value:"\u7528\u6237\u540D: ",paraId:7,tocIndex:3},{value:"user",paraId:7,tocIndex:3},{value:"\u5BC6\u7801: ",paraId:7,tocIndex:3},{value:"123456",paraId:7,tocIndex:3},{value:"\u6743\u9650: \u666E\u901A\u7528\u6237\u6743\u9650",paraId:7,tocIndex:3},{value:"\u9700\u8981\u5FEB\u901F\u6784\u5EFA\u4F01\u4E1A\u7EA7\u767B\u5F55\u9875\u9762",paraId:8,tocIndex:4},{value:"\u9700\u8981\u540C\u65F6\u652F\u6301\u8D26\u53F7\u5BC6\u7801\u548C\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55",paraId:8,tocIndex:4},{value:"\u9700\u8981\u5BF9\u5BC6\u7801\u8FDB\u884C\u52A0\u5BC6\u5904\u7406",paraId:8,tocIndex:4},{value:"\u9700\u8981\u652F\u6301\u81EA\u52A8\u767B\u5F55\u529F\u80FD",paraId:8,tocIndex:4},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u767B\u5F55\u8868\u5355\u5E03\u5C40\u548C\u6837\u5F0F",paraId:8,tocIndex:4},{value:"\u6700\u57FA\u672C\u7684\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u529F\u80FD\u5C55\u793A\u3002",paraId:9,tocIndex:6},{value:"\u5C55\u793A\u5982\u4F55\u542F\u7528\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55\u529F\u80FD\u3002",paraId:10,tocIndex:7},{value:"\u5C55\u793A\u5982\u4F55\u4F7F\u7528 AES \u52A0\u5BC6\u6216\u81EA\u5B9A\u4E49\u52A0\u5BC6\u65B9\u5F0F\u3002",paraId:11,tocIndex:8},{value:"\u53C2\u6570",paraId:12,tocIndex:10},{value:"\u8BF4\u660E",paraId:12,tocIndex:10},{value:"\u7C7B\u578B",paraId:12,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:10},{value:"url",paraId:12,tocIndex:10},{value:"\u767B\u5F55\u63A5\u53E3\u5730\u5740",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"captchaUrl",paraId:12,tocIndex:10},{value:"\u9A8C\u8BC1\u7801\u53D1\u9001\u63A5\u53E3\u5730\u5740",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"ajax",paraId:12,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5",paraId:12,tocIndex:10},{value:"(url: string, params: object, callback: Function, isApi?: boolean) => void",paraId:12,tocIndex:10},{value:"ajaxCommon",paraId:12,tocIndex:10},{value:"loginFormFieldProps",paraId:12,tocIndex:10},{value:"LoginForm \u7684\u5C5E\u6027\u914D\u7F6E\uFF0C\u7EE7\u627F\u81EA ",paraId:12,tocIndex:10},{value:"Ant Design Pro LoginForm",paraId:12,tocIndex:10},{value:"object",paraId:12,tocIndex:10},{value:"{}",paraId:12,tocIndex:10},{value:"hasSmsLogin",paraId:12,tocIndex:10},{value:"\u662F\u5426\u542F\u7528\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55\u6A21\u5F0F",paraId:12,tocIndex:10},{value:"boolean",paraId:12,tocIndex:10},{value:"false",paraId:12,tocIndex:10},{value:"hasAccountLogin",paraId:12,tocIndex:10},{value:"\u662F\u5426\u542F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u6A21\u5F0F",paraId:12,tocIndex:10},{value:"boolean",paraId:12,tocIndex:10},{value:"true",paraId:12,tocIndex:10},{value:"phoneField",paraId:12,tocIndex:10},{value:"\u624B\u673A\u53F7\u5B57\u6BB5\u540D\uFF0C\u53D1\u9001\u9A8C\u8BC1\u7801\u65F6\u4F7F\u7528",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"'mobile'",paraId:12,tocIndex:10},{value:"usernameField",paraId:12,tocIndex:10},{value:"\u7528\u6237\u540D\u5B57\u6BB5\u540D",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"'username'",paraId:12,tocIndex:10},{value:"passwordField",paraId:12,tocIndex:10},{value:"\u5BC6\u7801\u5B57\u6BB5\u540D",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"'password'",paraId:12,tocIndex:10},{value:"captchaField",paraId:12,tocIndex:10},{value:"\u9A8C\u8BC1\u7801\u5B57\u6BB5\u540D",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"'captcha'",paraId:12,tocIndex:10},{value:"extraPasswordText",paraId:12,tocIndex:10},{value:"\u5BC6\u7801\u52A0\u5BC6\u65F6\u7684\u6DF7\u6DC6\u6587\u672C",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"''",paraId:12,tocIndex:10},{value:"secretKey",paraId:12,tocIndex:10},{value:"AES \u52A0\u5BC6\u5BC6\u94A5",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"encryption",paraId:12,tocIndex:10},{value:"CryptoJS \u7684\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u652F\u6301 MD5\u3001SHA-1\u3001SHA-256 \u7B49",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"'SHA256'",paraId:12,tocIndex:10},{value:"encrypt",paraId:12,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u5BC6\u7801\u52A0\u5BC6\u51FD\u6570",paraId:12,tocIndex:10},{value:"(password: string) => string",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"tokenField",paraId:12,tocIndex:10},{value:"\u767B\u5F55\u6210\u529F\u540E token \u7684\u5B57\u6BB5\u540D",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"'token'",paraId:12,tocIndex:10},{value:"setData",paraId:12,tocIndex:10},{value:"\u5904\u7406\u767B\u5F55\u63A5\u53E3\u8FD4\u56DE\u6570\u636E",paraId:12,tocIndex:10},{value:"(response: any) => any",paraId:12,tocIndex:10},{value:"(data) => data.data",paraId:12,tocIndex:10},{value:"callback",paraId:12,tocIndex:10},{value:"\u767B\u5F55\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570",paraId:12,tocIndex:10},{value:"(data: any) => void",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"BottomDom",paraId:12,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u989D\u5916\u7EC4\u4EF6",paraId:12,tocIndex:10},{value:"ReactNode",paraId:12,tocIndex:10},{value:"() => </>",paraId:12,tocIndex:10},{value:"ForGetPassword",paraId:12,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u5FD8\u8BB0\u5BC6\u7801\u7EC4\u4EF6",paraId:12,tocIndex:10},{value:"ReactNode",paraId:12,tocIndex:10},{value:"\u9ED8\u8BA4\u5FD8\u8BB0\u5BC6\u7801\u7EC4\u4EF6",paraId:12,tocIndex:10},{value:`// \u767B\u5F55\u8BF7\u6C42\u53C2\u6570
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
`,paraId:13,tocIndex:11},{value:"Ant Design",paraId:14,tocIndex:12},{value:" ^5.0.0",paraId:14,tocIndex:12},{value:"@ant-design/pro-components",paraId:14,tocIndex:12},{value:` ^2.0.0
`,paraId:14,tocIndex:12},{value:"LoginForm: ",paraId:15,tocIndex:12},{value:"API \u6587\u6863",paraId:15,tocIndex:12},{value:"crypto-js",paraId:14,tocIndex:12},{value:" ^4.1.1",paraId:14,tocIndex:12},{value:`import { LoginPro } from 'durians';

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
`,paraId:16,tocIndex:15}]},23876:function(R,B,e){"use strict";e.r(B),e.d(B,{texts:function(){return P}});const P=[{value:"ModalPro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Modal",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u66F4\u4FBF\u6377\u7684\u4F7F\u7528\u65B9\u5F0F\u548C\u66F4\u7075\u6D3B\u7684\u63A7\u5236\u65B9\u6CD5\u3002\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5373\u53EF\u5B9E\u73B0\u590D\u6742\u7684\u5F39\u7A97\u4EA4\u4E92\u903B\u8F91\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u5F39\u7A97\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u53EF\u4EE5\u4F20\u5165\u4EFB\u4F55 React \u7EC4\u4EF6\u4F5C\u4E3A\u5F39\u7A97\u5185\u5BB9\u3002",paraId:2,tocIndex:2},{value:"\u9700\u8981\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u53EF\u63A7\u7684\u5F39\u7A97\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"\u9700\u8981\u5728\u5F39\u7A97\u5185\u90E8\u52A8\u6001\u63A7\u5236\u5F39\u7A97\u7684\u663E\u793A\u72B6\u6001",paraId:3,tocIndex:3},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u5F39\u7A97\u7684\u89E6\u53D1\u5143\u7D20",paraId:3,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u5F39\u7A97\u7684\u5F02\u6B65\u64CD\u4F5C\u548C\u8868\u5355\u63D0\u4EA4",paraId:3,tocIndex:3},{value:"\u9700\u8981\u5BF9\u5F39\u7A97\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u548C\u6269\u5C55",paraId:3,tocIndex:3},{value:"\u6700\u7B80\u5355\u7684\u5F39\u7A97\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u5728\u5F39\u7A97\u4E2D\u4F7F\u7528\u8868\u5355\uFF0C\u5E76\u63A7\u5236\u63D0\u4EA4\u540E\u7684\u5F39\u7A97\u5173\u95ED\u3002",paraId:5,tocIndex:6},{value:"\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\u5E76\u63A7\u5236\u5F39\u7A97\u72B6\u6001\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u7C7B\u578B",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"title",paraId:7,tocIndex:9},{value:"\u5F39\u7A97\u6807\u9898",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"'\u57FA\u7840'",paraId:7,tocIndex:9},{value:"handleOk",paraId:7,tocIndex:9},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570\u3002\u63A5\u6536\u4E00\u4E2A callback \u53C2\u6570\uFF0C\u6267\u884C callback(true) \u5173\u95ED\u5F39\u7A97\uFF0Ccallback(false) \u4FDD\u6301\u5F39\u7A97\u6253\u5F00",paraId:7,tocIndex:9},{value:"(callback: (close?: boolean) => void) => void",paraId:7,tocIndex:9},{value:"(callback) => callback()",paraId:7,tocIndex:9},{value:"Content",paraId:7,tocIndex:9},{value:"\u5F39\u7A97\u5185\u5BB9\u7EC4\u4EF6\u3002\u53EF\u4EE5\u662F ReactNode \u6216\u51FD\u6570\u7EC4\u4EF6\uFF0C\u51FD\u6570\u7EC4\u4EF6\u4F1A\u63A5\u6536 isModalOpen \u548C setIsModalOpen \u4F5C\u4E3A\u53C2\u6570",paraId:7,tocIndex:9},{value:"ReactNode | ((props: ContentProps) => ReactNode)",paraId:7,tocIndex:9},{value:"() => <div>\u793A\u4F8B</div>",paraId:7,tocIndex:9},{value:"children",paraId:7,tocIndex:9},{value:"\u89E6\u53D1\u5F39\u7A97\u663E\u793A\u7684\u5143\u7D20",paraId:7,tocIndex:9},{value:"ReactNode",paraId:7,tocIndex:9},{value:"<div>\u70B9\u51FB</div>",paraId:7,tocIndex:9},{value:"fieldProps",paraId:7,tocIndex:9},{value:"Modal \u7EC4\u4EF6\u7684\u5C5E\u6027\u914D\u7F6E\uFF0C\u5B8C\u6574\u7EE7\u627F\u81EA antd Modal \u7684\u6240\u6709\u5C5E\u6027",paraId:7,tocIndex:9},{value:"ModalProps",paraId:7,tocIndex:9},{value:"{}",paraId:7,tocIndex:9},{value:`interface ContentProps {
  /**
   * \u5F53\u524D\u5F39\u7A97\u7684\u663E\u793A\u72B6\u6001
   */
  isModalOpen: boolean;
  /**
   * \u63A7\u5236\u5F39\u7A97\u663E\u793A/\u9690\u85CF\u7684\u51FD\u6570
   */
  setIsModalOpen: (open: boolean) => void;
}
`,paraId:8,tocIndex:10},{value:`import {ReactNode} from 'react';
import {ModalProps} from 'antd';

interface ModalProProps {
  title?: string;
  handleOk?: (callback: (close?: boolean) => void) => void;
  Content?: ReactNode | ((props: ContentProps) => ReactNode);
  children?: ReactNode;
  fieldProps?: ModalProps;
}
`,paraId:9,tocIndex:11},{value:"Ant Design",paraId:10,tocIndex:12},{value:` ^5.0.0
`,paraId:10,tocIndex:12},{value:"Modal \u7EC4\u4EF6\uFF1A",paraId:11,tocIndex:12},{value:"\u8BE6\u7EC6\u6587\u6863",paraId:11,tocIndex:12}]},53308:function(R,B,e){"use strict";e.r(B),e.d(B,{texts:function(){return P}});const P=[{value:"TablePro \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Ant Design Pro Table",paraId:0,tocIndex:0},{value:" \u7684\u9AD8\u7EA7\u8868\u683C\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u66F4\u4E30\u5BCC\u7684\u529F\u80FD\u548C\u66F4\u7B80\u4FBF\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u96C6\u6210\u4E86\u5206\u9875\u3001\u641C\u7D22\u3001\u7B5B\u9009\u3001\u6811\u5F62\u9009\u62E9\u3001\u6279\u91CF\u64CD\u4F5C\u7B49\u7279\u6027\uFF0C\u7B80\u5316\u4E86\u8868\u683C\u7684\u5F00\u53D1\u6D41\u7A0B\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u8868\u683C\u4F7F\u7528\u65B9\u5F0F\uFF0C\u53EA\u9700\u8981\u914D\u7F6E URL \u548C\u5217\u5B9A\u4E49\u3002",paraId:1,tocIndex:1},{value:"\u5305\u542B\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u529F\u80FD\u7684\u5B8C\u6574\u793A\u4F8B\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u9519\u8BEF\u5904\u7406\u3002",paraId:2,tocIndex:2},{value:"\u5C55\u793A\u4EA7\u54C1\u6570\u636E\u7684\u8868\u683C\u793A\u4F8B\uFF0C\u5305\u542B\u56FE\u7247\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u7B49\u5B57\u6BB5\u3002",paraId:3,tocIndex:3},{value:"\u9700\u8981\u5C55\u793A\u5927\u91CF\u7ED3\u6784\u5316\u6570\u636E",paraId:4,tocIndex:4},{value:"\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u641C\u7D22\u3001\u7B5B\u9009\u7B49\u64CD\u4F5C",paraId:4,tocIndex:4},{value:"\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539\u67E5",paraId:4,tocIndex:4},{value:"\u9700\u8981\u652F\u6301\u6811\u5F62\u7ED3\u6784\u7684\u6570\u636E\u5C55\u793A",paraId:4,tocIndex:4},{value:"\u9700\u8981\u652F\u6301\u6279\u91CF\u64CD\u4F5C\u529F\u80FD",paraId:4,tocIndex:4},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u683C\u64CD\u4F5C\u5217",paraId:4,tocIndex:4},{value:"\u9700\u8981\u4E0E\u670D\u52A1\u7AEF\u8FDB\u884C\u6570\u636E\u4EA4\u4E92",paraId:4,tocIndex:4},{value:"\u7EE7\u627F\u81EA ",paraId:5,tocIndex:10},{value:"ProTable",paraId:5,tocIndex:10},{value:"\uFF0C\u4EE5\u4E0B\u4E3A\u989D\u5916\u589E\u52A0\u6216\u4FEE\u6539\u7684\u5C5E\u6027\uFF1A",paraId:5,tocIndex:10},{value:"\u53C2\u6570",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"ajax",paraId:6,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5",paraId:6,tocIndex:10},{value:"(url: string, params: object, callback: Function, isApi?: boolean) => void",paraId:6,tocIndex:10},{value:"ajaxCommon",paraId:6,tocIndex:10},{value:"url",paraId:6,tocIndex:10},{value:"\u6570\u636E\u63A5\u53E3\u5730\u5740",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"addUrl",paraId:6,tocIndex:10},{value:"\u65B0\u589E\u8868\u5355\u63D0\u4EA4\u5730\u5740",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"editUrl",paraId:6,tocIndex:10},{value:"\u7F16\u8F91\u8868\u5355\u63D0\u4EA4\u5730\u5740",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"deleteUrl",paraId:6,tocIndex:10},{value:"\u5220\u9664\u63A5\u53E3\u5730\u5740",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"deleteField",paraId:6,tocIndex:10},{value:"\u5355\u4E2A\u5220\u9664\u65F6\u7684\u5B57\u6BB5\u540D",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"\u4F7F\u7528 rowKey \u503C",paraId:6,tocIndex:10},{value:"deleteFields",paraId:6,tocIndex:10},{value:"\u6279\u91CF\u5220\u9664\u7684\u5B57\u6BB5\u540D",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"'idList'",paraId:6,tocIndex:10},{value:"deleteFieldIsArr",paraId:6,tocIndex:10},{value:"\u5355\u4E2A\u5220\u9664\u65F6\u662F\u5426\u4F7F\u7528\u6570\u7EC4\u683C\u5F0F",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"false",paraId:6,tocIndex:10},{value:"deleteParams",paraId:6,tocIndex:10},{value:"\u5220\u9664\u63A5\u53E3\u7684\u989D\u5916\u53C2\u6570",paraId:6,tocIndex:10},{value:"object",paraId:6,tocIndex:10},{value:"{}",paraId:6,tocIndex:10},{value:"deleteBatchHidden",paraId:6,tocIndex:10},{value:"\u662F\u5426\u9690\u85CF\u6279\u91CF\u5220\u9664\u529F\u80FD",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"false",paraId:6,tocIndex:10},{value:"fieldProps",paraId:6,tocIndex:10},{value:"\u8868\u683C\u76F8\u5173\u914D\u7F6E\uFF0C\u7EE7\u627F ProTable \u7684 props",paraId:6,tocIndex:10},{value:"ProTableProps & { columns: Columns }",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"addFormProFieldProps",paraId:6,tocIndex:10},{value:"\u65B0\u589E/\u7F16\u8F91\u8868\u5355\u7684\u914D\u7F6E\u9879",paraId:6,tocIndex:10},{value:"FormProProps",paraId:6,tocIndex:10},{value:"{}",paraId:6,tocIndex:10},{value:"setData",paraId:6,tocIndex:10},{value:"\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E",paraId:6,tocIndex:10},{value:"(response: any) => any[]",paraId:6,tocIndex:10},{value:"(data) => data?.data?.records",paraId:6,tocIndex:10},{value:"setTotal",paraId:6,tocIndex:10},{value:"\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u7684\u603B\u6570",paraId:6,tocIndex:10},{value:"(response: any) => number",paraId:6,tocIndex:10},{value:"(data) => data?.data?.total",paraId:6,tocIndex:10},{value:"setMsg",paraId:6,tocIndex:10},{value:"\u5904\u7406\u64CD\u4F5C\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:10},{value:"(response: any) => string",paraId:6,tocIndex:10},{value:"(data) => data?.msg",paraId:6,tocIndex:10},{value:"actionBar",paraId:6,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u5217",paraId:6,tocIndex:10},{value:"((record: any) => ReactNode)[]",paraId:6,tocIndex:10},{value:"[]",paraId:6,tocIndex:10},{value:"actionWidth",paraId:6,tocIndex:10},{value:"\u64CD\u4F5C\u5217\u5BBD\u5EA6",paraId:6,tocIndex:10},{value:"number",paraId:6,tocIndex:10},{value:"100",paraId:6,tocIndex:10},{value:"paginationAlias",paraId:6,tocIndex:10},{value:"\u5206\u9875\u53C2\u6570\u522B\u540D",paraId:6,tocIndex:10},{value:"{ pageIndex: string; pageSize: string }",paraId:6,tocIndex:10},{value:"{ pageIndex: 'pageIndex', pageSize: 'pageSize' }",paraId:6,tocIndex:10},{value:"tableAlertOptionRenderPro",paraId:6,tocIndex:10},{value:"\u9009\u4E2D\u9879\u5DE5\u5177\u680F",paraId:6,tocIndex:10},{value:"((props: { selectedRowKeys: any[], selectedRows: any[] }) => ReactNode)[]",paraId:6,tocIndex:10},{value:"[]",paraId:6,tocIndex:10},{value:"treeFieldProps",paraId:6,tocIndex:10},{value:"\u6811\u5F62\u9009\u62E9\u5668\u914D\u7F6E\uFF0C\u53C2\u8003 TreePro \u7EC4\u4EF6",paraId:6,tocIndex:10},{value:"TreeProProps",paraId:6,tocIndex:10},{value:"null",paraId:6,tocIndex:10},{value:"treeWidth",paraId:6,tocIndex:10},{value:"\u6811\u5F62\u9009\u62E9\u5668\u5BBD\u5EA6",paraId:6,tocIndex:10},{value:"number",paraId:6,tocIndex:10},{value:"200",paraId:6,tocIndex:10},{value:"paramsFun",paraId:6,tocIndex:10},{value:"\u8BF7\u6C42\u53C2\u6570\u5904\u7406\u51FD\u6570",paraId:6,tocIndex:10},{value:"(params: any) => any",paraId:6,tocIndex:10},{value:"(params) => params",paraId:6,tocIndex:10},{value:"treeParamsFun",paraId:6,tocIndex:10},{value:"\u6811\u9009\u62E9\u53C2\u6570\u5904\u7406\u51FD\u6570",paraId:6,tocIndex:10},{value:"(selectedKeys: string[]) => any",paraId:6,tocIndex:10},{value:"(keys) => ({ treeId: keys })",paraId:6,tocIndex:10},{value:"keywordField",paraId:6,tocIndex:10},{value:"\u5173\u952E\u8BCD\u641C\u7D22\u5B57\u6BB5",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"keywordPlaceholder",paraId:6,tocIndex:10},{value:"\u5173\u952E\u8BCD\u641C\u7D22\u5360\u4F4D\u6587\u6848",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:`interface TableProColumn extends ProColumns {
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
`,paraId:7,tocIndex:11},{value:"antd",paraId:8,tocIndex:12},{value:" ^5.0.0",paraId:8,tocIndex:12},{value:"@ant-design/pro-components",paraId:8,tocIndex:12},{value:" ^2.0.0",paraId:8,tocIndex:12},{value:"lodash-es",paraId:8,tocIndex:12},{value:" ^4.17.21",paraId:8,tocIndex:12}]},29859:function(R,B,e){"use strict";e.r(B),e.d(B,{texts:function(){return P}});const P=[{value:"TreePro \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design Tree \u7684\u9AD8\u7EA7\u6811\u5F62\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u529F\u80FD\u548C\u914D\u7F6E\u9009\u9879\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u6811\u5F62\u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u5305\u542B\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u529F\u80FD\u7684\u5B8C\u6574\u793A\u4F8B\u3002",paraId:2,tocIndex:2}]},42480:function(){}}]);
