"use strict";(self.webpackChunkdurians=self.webpackChunkdurians||[]).push([[904],{795:function(r,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},36750:function(r,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},36163:function(r,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},11171:function(r,e,a){var n;a.r(e),a.d(e,{demos:function(){return f}});var t=a(15009),u=a.n(t),m=a(99289),i=a.n(m),v=a(67294),P=a(66436),f={"docs-demo-0":{component:v.memo(v.lazy(i()(u()().mark(function x(){var p,I,l,c,s;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return p=d.sent,I=p.default,d.next=6,Promise.resolve().then(a.bind(a,66436));case 6:return l=d.sent,c=l.TablePro,s=function(){return I.createElement("div",null,I.createElement(c,{url:"/api/users",addUrl:"/api/users",editUrl:"/api/users",deleteUrl:"/api/users",fieldProps:{columns:[{title:"\u59D3\u540D",dataIndex:"name",valueType:"text"},{title:"\u90AE\u7BB1",dataIndex:"email",valueType:"text"}]}}))},d.abrupt("return",{default:s});case 10:case"end":return d.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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

export default App;`},react:{type:"NPM",value:"18.3.1"},durians:{type:"NPM",value:"0.0.103"}},entry:"index.tsx"},context:{react:n||(n=a.t(v,2)),durians:P},renderOpts:{compile:function(){var x=i()(u()().mark(function I(){var l,c=arguments;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([a.e(250),a.e(764)]).then(a.bind(a,90250));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,c));case 3:case"end":return o.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}}}},72143:function(r,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"Durians \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design Pro \u7684\u4F01\u4E1A\u7EA7\u4F4E\u4EE3\u7801\u7EC4\u4EF6\u5E93\uFF0C\u65E8\u5728\u4E3A\u4F01\u4E1A\u7EA7\u5E94\u7528\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u7EA7\u7EC4\u4EF6\uFF0C\u51CF\u5C11\u91CD\u590D\u5F00\u53D1\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002",paraId:0,tocIndex:2},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:3},{value:"\uFF1A\u63D0\u4F9B\u5B8C\u6574\u7684 CRUD \u529F\u80FD\u7EC4\u4EF6\uFF0C\u65E0\u9700\u91CD\u590D\u5F00\u53D1",paraId:1,tocIndex:3},{value:"\u4F01\u4E1A\u7EA7",paraId:1,tocIndex:3},{value:"\uFF1A\u57FA\u4E8E Ant Design Pro\uFF0C\u6EE1\u8DB3\u4F01\u4E1A\u7EA7\u5E94\u7528\u9700\u6C42",paraId:1,tocIndex:3},{value:"\u4F4E\u4EE3\u7801",paraId:1,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u914D\u7F6E\u5316\u7684\u65B9\u5F0F\u5FEB\u901F\u6784\u5EFA\u590D\u6742\u529F\u80FD",paraId:1,tocIndex:3},{value:"\u7C7B\u578B\u5B89\u5168",paraId:1,tocIndex:3},{value:"\uFF1A\u5B8C\u6574\u7684 TypeScript \u652F\u6301\uFF0C\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u4FDD\u969C",paraId:1,tocIndex:3},{value:"\u53EF\u6269\u5C55",paraId:1,tocIndex:3},{value:"\uFF1A\u7075\u6D3B\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6269\u5C55",paraId:1,tocIndex:3},{value:"\u7EC4\u4EF6",paraId:2,tocIndex:5},{value:"\u4E3B\u8981\u529F\u80FD",paraId:2,tocIndex:5},{value:"\u9002\u7528\u573A\u666F",paraId:2,tocIndex:5},{value:"\u6838\u5FC3\u7279\u6027",paraId:2,tocIndex:5},{value:"TablePro",paraId:2,tocIndex:5},{value:"\u6570\u636E\u8868\u683C\u5C55\u793A\u4E0E\u64CD\u4F5C",paraId:2,tocIndex:5},{value:"\u6570\u636E\u7BA1\u7406\u9875\u9762",paraId:2,tocIndex:5},{value:"CRUD\u3001\u5206\u9875\u3001\u641C\u7D22\u3001\u6392\u5E8F",paraId:2,tocIndex:5},{value:"FormPro",paraId:2,tocIndex:5},{value:"\u8868\u5355\u6570\u636E\u5F55\u5165",paraId:2,tocIndex:5},{value:"\u65B0\u589E/\u7F16\u8F91\u6570\u636E",paraId:2,tocIndex:5},{value:"\u6A21\u6001\u6846/\u62BD\u5C49\u3001\u9A8C\u8BC1\u3001\u8054\u52A8",paraId:2,tocIndex:5},{value:"ModalPro",paraId:2,tocIndex:5},{value:"\u5F39\u7A97\u4EA4\u4E92",paraId:2,tocIndex:5},{value:"\u786E\u8BA4\u64CD\u4F5C\u3001\u4FE1\u606F\u5C55\u793A",paraId:2,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u56DE\u8C03\u63A7\u5236",paraId:2,tocIndex:5},{value:"LoginPro",paraId:2,tocIndex:5},{value:"\u7528\u6237\u8BA4\u8BC1",paraId:2,tocIndex:5},{value:"\u767B\u5F55\u9875\u9762",paraId:2,tocIndex:5},{value:"\u591A\u79CD\u767B\u5F55\u65B9\u5F0F\u3001\u52A0\u5BC6",paraId:2,tocIndex:5},{value:"TreePro",paraId:2,tocIndex:5},{value:"\u6811\u5F62\u6570\u636E\u5C55\u793A",paraId:2,tocIndex:5},{value:"\u7EC4\u7EC7\u67B6\u6784\u3001\u5206\u7C7B\u7BA1\u7406",paraId:2,tocIndex:5},{value:"\u61D2\u52A0\u8F7D\u3001CRUD\u3001\u9009\u62E9",paraId:2,tocIndex:5},{value:"React 18",paraId:3,tocIndex:8},{value:": \u73B0\u4EE3\u5316\u7684\u524D\u7AEF\u6846\u67B6\uFF0C\u652F\u6301\u5E76\u53D1\u7279\u6027",paraId:3,tocIndex:8},{value:"TypeScript",paraId:3,tocIndex:8},{value:": \u7C7B\u578B\u5B89\u5168\uFF0C\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\u548C\u4EE3\u7801\u8D28\u91CF",paraId:3,tocIndex:8},{value:"Ant Design 5.x",paraId:3,tocIndex:8},{value:": \u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C\u7EC4\u4EF6\u5E93",paraId:3,tocIndex:8},{value:"Ant Design Pro Components",paraId:3,tocIndex:8},{value:": \u9AD8\u7EA7\u4E1A\u52A1\u7EC4\u4EF6",paraId:3,tocIndex:8},{value:"Father 4.x",paraId:4,tocIndex:9},{value:": \u57FA\u4E8E Rollup \u7684\u7EC4\u4EF6\u5E93\u6784\u5EFA\u5DE5\u5177",paraId:4,tocIndex:9},{value:"Dumi 2.x",paraId:4,tocIndex:9},{value:": \u7EC4\u4EF6\u5E93\u6587\u6863\u751F\u6210\u5DE5\u5177",paraId:4,tocIndex:9},{value:"Jest",paraId:4,tocIndex:9},{value:": \u5355\u5143\u6D4B\u8BD5\u6846\u67B6",paraId:4,tocIndex:9},{value:"ESLint + Prettier",paraId:4,tocIndex:9},{value:": \u4EE3\u7801\u8D28\u91CF\u548C\u683C\u5F0F\u5316\u5DE5\u5177",paraId:4,tocIndex:9},{value:"\u6BCF\u4E2A\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u4E00\u4E2A\u7279\u5B9A\u7684\u529F\u80FD\u9886\u57DF\uFF0C\u4FDD\u6301\u7EC4\u4EF6\u7684\u7B80\u6D01\u548C\u4E13\u6CE8\u3002",paraId:5,tocIndex:11},{value:"\u7EC4\u4EF6\u5BF9\u6269\u5C55\u5F00\u653E\uFF0C\u5BF9\u4FEE\u6539\u5C01\u95ED\u3002\u901A\u8FC7 props \u914D\u7F6E\u5B9E\u73B0\u529F\u80FD\u6269\u5C55\u3002",paraId:6,tocIndex:12},{value:"\u9AD8\u5C42\u6A21\u5757\u4E0D\u4F9D\u8D56\u4F4E\u5C42\u6A21\u5757\uFF0C\u90FD\u4F9D\u8D56\u4E8E\u62BD\u8C61\u3002\u901A\u8FC7\u63A5\u53E3\u548C\u7C7B\u578B\u5B9A\u4E49\u5B9E\u73B0\u89E3\u8026\u3002",paraId:7,tocIndex:13},{value:"\u7EC4\u4EF6\u7684\u884C\u4E3A\u5E94\u8BE5\u7B26\u5408\u7528\u6237\u7684\u76F4\u89C9\u548C\u9884\u671F\uFF0CAPI \u8BBE\u8BA1\u7B80\u6D01\u660E\u4E86\u3002",paraId:8,tocIndex:14},{value:"\u63D0\u4F9B\u5408\u7406\u7684\u9ED8\u8BA4\u503C\uFF0C\u652F\u6301\u9010\u6B65\u914D\u7F6E\u548C\u5B9A\u5236\u3002",paraId:9,tocIndex:15},{value:"\u4F7F\u7528 ",paraId:10,tocIndex:17},{value:"React.memo",paraId:10,tocIndex:17},{value:" \u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u6E32\u67D3",paraId:10,tocIndex:17},{value:"\u5408\u7406\u4F7F\u7528 ",paraId:10,tocIndex:17},{value:"useCallback",paraId:10,tocIndex:17},{value:" \u548C ",paraId:10,tocIndex:17},{value:"useMemo",paraId:10,tocIndex:17},{value:"\u907F\u514D\u5728\u6E32\u67D3\u51FD\u6570\u4E2D\u521B\u5EFA\u5BF9\u8C61",paraId:10,tocIndex:17},{value:"\u5B9E\u73B0\u9632\u6296\u548C\u8282\u6D41\u673A\u5236",paraId:11,tocIndex:18},{value:"\u652F\u6301\u865A\u62DF\u6EDA\u52A8\uFF08\u5927\u6570\u636E\u91CF\u573A\u666F\uFF09",paraId:11,tocIndex:18},{value:"\u667A\u80FD\u5206\u9875\u548C\u61D2\u52A0\u8F7D",paraId:11,tocIndex:18},{value:"\u8BF7\u6C42\u53BB\u91CD\u548C\u7F13\u5B58",paraId:12,tocIndex:19},{value:"\u9519\u8BEF\u91CD\u8BD5\u673A\u5236",paraId:12,tocIndex:19},{value:"\u8BF7\u6C42\u53D6\u6D88\u652F\u6301",paraId:12,tocIndex:19},{value:"\u652F\u6301\u901A\u8FC7\u63D2\u4EF6\u6269\u5C55\u7EC4\u4EF6\u529F\u80FD\uFF0C\u4E0D\u4FEE\u6539\u6838\u5FC3\u4EE3\u7801\u3002",paraId:13,tocIndex:21},{value:"\u652F\u6301\u4E3B\u9898\u5B9A\u5236\u548C\u52A8\u6001\u5207\u6362\u3002",paraId:14,tocIndex:22},{value:"\u5185\u7F6E\u56FD\u9645\u5316\u673A\u5236\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u3002",paraId:15,tocIndex:23},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u6EE1\u8DB3\u7279\u6B8A\u9700\u6C42\u3002",paraId:16,tocIndex:24},{value:"TypeScript \u7C7B\u578B\u68C0\u67E5",paraId:17,tocIndex:26},{value:"ESLint \u4EE3\u7801\u89C4\u8303\u68C0\u67E5",paraId:17,tocIndex:26},{value:"Prettier \u4EE3\u7801\u683C\u5F0F\u5316",paraId:17,tocIndex:26},{value:"Husky Git Hooks",paraId:17,tocIndex:26},{value:"\u5355\u5143\u6D4B\u8BD5\uFF1AJest + React Testing Library",paraId:18,tocIndex:27},{value:"\u96C6\u6210\u6D4B\u8BD5\uFF1A\u7EC4\u4EF6\u95F4\u4EA4\u4E92\u6D4B\u8BD5",paraId:18,tocIndex:27},{value:"E2E \u6D4B\u8BD5\uFF1A\u7528\u6237\u573A\u666F\u6D4B\u8BD5",paraId:18,tocIndex:27},{value:"\u89C6\u89C9\u56DE\u5F52\u6D4B\u8BD5\uFF1AUI \u4E00\u81F4\u6027\u6D4B\u8BD5",paraId:18,tocIndex:27},{value:"API \u6587\u6863\uFF1A\u81EA\u52A8\u751F\u6210\u7684\u63A5\u53E3\u6587\u6863",paraId:19,tocIndex:28},{value:"\u4F7F\u7528\u6307\u5357\uFF1A\u8BE6\u7EC6\u7684\u4F7F\u7528\u8BF4\u660E",paraId:19,tocIndex:28},{value:"\u6700\u4F73\u5B9E\u8DF5\uFF1A\u5F00\u53D1\u5EFA\u8BAE\u548C\u89C4\u8303",paraId:19,tocIndex:28},{value:"\u53D8\u66F4\u65E5\u5FD7\uFF1A\u7248\u672C\u66F4\u65B0\u8BB0\u5F55",paraId:19,tocIndex:28},{value:"\u5B8C\u5584\u73B0\u6709\u7EC4\u4EF6\u529F\u80FD",paraId:20,tocIndex:30},{value:"\u63D0\u5347\u6D4B\u8BD5\u8986\u76D6\u7387",paraId:20,tocIndex:30},{value:"\u4F18\u5316\u6027\u80FD\u548C\u4F53\u9A8C",paraId:20,tocIndex:30},{value:"\u6269\u5C55\u7EC4\u4EF6\u5E93\u89C4\u6A21",paraId:21,tocIndex:31},{value:"\u652F\u6301\u66F4\u591A\u4E1A\u52A1\u573A\u666F",paraId:21,tocIndex:31},{value:"\u5EFA\u7ACB\u8BBE\u8BA1\u7CFB\u7EDF",paraId:21,tocIndex:31},{value:"\u6784\u5EFA\u5B8C\u6574\u7684\u4F4E\u4EE3\u7801\u5E73\u53F0",paraId:22,tocIndex:32},{value:"\u652F\u6301\u53EF\u89C6\u5316\u914D\u7F6E",paraId:22,tocIndex:32},{value:"\u5EFA\u7ACB\u751F\u6001\u7CFB\u7EDF",paraId:22,tocIndex:32},{value:"\u786E\u4FDD\u4F60\u7684\u5F00\u53D1\u73AF\u5883\u6EE1\u8DB3\u4EE5\u4E0B\u8981\u6C42\uFF1A",paraId:23,tocIndex:34},{value:"Node.js",paraId:24,tocIndex:34},{value:": >= 16.0.0",paraId:24,tocIndex:34},{value:"npm",paraId:24,tocIndex:34},{value:": >= 7.0.0 \u6216 ",paraId:24,tocIndex:34},{value:"yarn",paraId:24,tocIndex:34},{value:": >= 1.22.0",paraId:24,tocIndex:34},{value:"Git",paraId:24,tocIndex:34},{value:": \u6700\u65B0\u7248\u672C",paraId:24,tocIndex:34},{value:`# \u514B\u9686\u9879\u76EE
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
`,paraId:42,tocIndex:57},{value:"React \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"TypeScript \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"Ant Design \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"Ant Design Pro \u5B98\u65B9\u6587\u6863",paraId:43,tocIndex:59},{value:"React \u6027\u80FD\u4F18\u5316",paraId:44,tocIndex:60},{value:"TypeScript \u6700\u4F73\u5B9E\u8DF5",paraId:44,tocIndex:60},{value:"\u7EC4\u4EF6\u5E93\u8BBE\u8BA1\u539F\u5219",paraId:44,tocIndex:60},{value:"Fork \u9879\u76EE",paraId:45,tocIndex:62},{value:"\u521B\u5EFA\u529F\u80FD\u5206\u652F",paraId:45,tocIndex:62},{value:"\u63D0\u4EA4\u4EE3\u7801",paraId:45,tocIndex:62},{value:"\u521B\u5EFA Pull Request",paraId:45,tocIndex:62},{value:"\u4EE3\u7801\u5BA1\u67E5",paraId:45,tocIndex:62},{value:"\u5408\u5E76\u4EE3\u7801",paraId:45,tocIndex:62},{value:"\u4EE3\u7801\u8D28\u91CF\u548C\u89C4\u8303",paraId:46,tocIndex:63},{value:"\u6D4B\u8BD5\u8986\u76D6\u7387",paraId:46,tocIndex:63},{value:"\u6587\u6863\u5B8C\u6574\u6027",paraId:46,tocIndex:63},{value:"\u6027\u80FD\u5F71\u54CD",paraId:46,tocIndex:63},{value:"\u5411\u540E\u517C\u5BB9\u6027",paraId:46,tocIndex:63},{value:"\u6B22\u8FCE\u6240\u6709\u5F62\u5F0F\u7684\u8D21\u732E\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A",paraId:47,tocIndex:63},{value:"\u65B0\u529F\u80FD\u5F00\u53D1",paraId:48,tocIndex:63},{value:"Bug \u4FEE\u590D",paraId:48,tocIndex:63},{value:"\u6587\u6863\u6539\u8FDB",paraId:48,tocIndex:63},{value:"\u6D4B\u8BD5\u7528\u4F8B",paraId:48,tocIndex:63},{value:"\u6027\u80FD\u4F18\u5316",paraId:48,tocIndex:63}]},40717:function(r,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u6240\u6709\u91CD\u8981\u7684\u9879\u76EE\u53D8\u66F4\u90FD\u4F1A\u8BB0\u5F55\u5728\u6B64\u6587\u4EF6\u4E2D\u3002",paraId:0,tocIndex:0},{value:"\u672C\u9879\u76EE\u9075\u5FAA ",paraId:1,tocIndex:0},{value:"\u8BED\u4E49\u5316\u7248\u672C",paraId:1,tocIndex:0},{value:" \u89C4\u8303\u3002",paraId:1,tocIndex:0},{value:"\u5B8C\u6574\u7684 TypeScript \u7C7B\u578B\u5B9A\u4E49\u7CFB\u7EDF",paraId:2,tocIndex:2},{value:"\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u673A\u5236 (",paraId:2,tocIndex:2},{value:"useErrorHandler",paraId:2,tocIndex:2},{value:", ",paraId:2,tocIndex:2},{value:"useAsyncOperation",paraId:2,tocIndex:2},{value:")",paraId:2,tocIndex:2},{value:"\u6027\u80FD\u4F18\u5316\u529F\u80FD\uFF08\u865A\u62DF\u6EDA\u52A8\u3001\u7F13\u5B58\u3001\u91CD\u8BD5\u673A\u5236\uFF09",paraId:2,tocIndex:2},{value:"\u53EF\u8BBF\u95EE\u6027\u589E\u5F3A\uFF08\u952E\u76D8\u5BFC\u822A\u3001ARIA \u652F\u6301\uFF09",paraId:2,tocIndex:2},{value:"\u56FD\u9645\u5316\u652F\u6301\u6846\u67B6",paraId:2,tocIndex:2},{value:"\u8C03\u8BD5\u548C\u6027\u80FD\u76D1\u63A7\u529F\u80FD",paraId:2,tocIndex:2},{value:"\u6240\u6709\u7EC4\u4EF6\u4F7F\u7528 ",paraId:3,tocIndex:3},{value:"React.memo",paraId:3,tocIndex:3},{value:" \u8FDB\u884C\u6027\u80FD\u4F18\u5316",paraId:3,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:3},{value:"useCallback",paraId:3,tocIndex:3},{value:" \u548C ",paraId:3,tocIndex:3},{value:"useMemo",paraId:3,tocIndex:3},{value:" \u4F18\u5316\u6E32\u67D3\u6027\u80FD",paraId:3,tocIndex:3},{value:"\u91CD\u6784\u7EC4\u4EF6\u67B6\u6784\uFF0C\u6D88\u9664\u5FAA\u73AF\u4F9D\u8D56",paraId:3,tocIndex:3},{value:"\u6539\u8FDB\u9519\u8BEF\u5904\u7406\u548C\u8FB9\u754C\u6761\u4EF6\u5904\u7406",paraId:3,tocIndex:3},{value:"\u4F18\u5316\u6784\u5EFA\u914D\u7F6E\u548C\u5F00\u53D1\u5DE5\u5177\u94FE",paraId:3,tocIndex:3},{value:"\u65B0\u589E\u67B6\u6784\u8BBE\u8BA1\u6587\u6863",paraId:4,tocIndex:4},{value:"\u65B0\u589E\u5F00\u53D1\u6307\u5357\u548C\u6700\u4F73\u5B9E\u8DF5",paraId:4,tocIndex:4},{value:"\u65B0\u589E\u529F\u80FD\u589E\u5F3A\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u65B0\u589E\u5347\u7EA7\u6307\u5357",paraId:4,tocIndex:4},{value:"\u5B8C\u5584 API \u6587\u6863\u548C\u4F7F\u7528\u793A\u4F8B",paraId:4,tocIndex:4},{value:"\u4FEE\u590D TablePro \u7EC4\u4EF6\u7684\u5FAA\u73AF\u4F9D\u8D56\u95EE\u9898",paraId:5,tocIndex:5},{value:"\u4FEE\u590D\u7C7B\u578B\u5B89\u5168\u95EE\u9898",paraId:5,tocIndex:5},{value:"\u4FEE\u590D FormPro \u7EC4\u4EF6\u7684\u8BED\u6CD5\u9519\u8BEF",paraId:5,tocIndex:5},{value:"\u4FEE\u590D TreePro \u7EC4\u4EF6\u7684\u91CD\u590D\u58F0\u660E\u95EE\u9898",paraId:5,tocIndex:5},{value:"\u4FEE\u590D LoginPro \u7EC4\u4EF6\u7684\u6A21\u5757\u5BFC\u5165\u9519\u8BEF",paraId:5,tocIndex:5},{value:"\u65E0\u7834\u574F\u6027\u53D8\u66F4\uFF0C\u4FDD\u6301 100% \u5411\u540E\u517C\u5BB9",paraId:6,tocIndex:6},{value:"\u6539\u8FDB\u5BC6\u7801\u52A0\u5BC6\u51FD\u6570\u7684\u9519\u8BEF\u5904\u7406",paraId:7,tocIndex:7},{value:"\u6DFB\u52A0\u8F93\u5165\u9A8C\u8BC1\u548C\u5B89\u5168\u68C0\u67E5",paraId:7,tocIndex:7},{value:"\u66F4\u65B0\u4F9D\u8D56\u5305\u4EE5\u4FEE\u590D\u5B89\u5168\u6F0F\u6D1E",paraId:7,tocIndex:7},{value:"TablePro \u9AD8\u7EA7\u8868\u683C\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"FormPro \u9AD8\u7EA7\u8868\u5355\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"ModalPro \u9AD8\u7EA7\u5F39\u7A97\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"LoginPro \u767B\u5F55\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"TreePro \u6811\u5F62\u7EC4\u4EF6",paraId:8,tocIndex:9},{value:"\u57FA\u4E8E Ant Design Pro \u7684\u7EC4\u4EF6\u5E93",paraId:9,tocIndex:10},{value:"\u652F\u6301\u5B8C\u6574\u7684 CRUD \u64CD\u4F5C",paraId:9,tocIndex:10},{value:"\u54CD\u5E94\u5F0F\u8BBE\u8BA1",paraId:9,tocIndex:10},{value:"\u4E3B\u9898\u5B9A\u5236\u652F\u6301",paraId:9,tocIndex:10},{value:"\u5F00\u7BB1\u5373\u7528\u7684\u4F01\u4E1A\u7EA7\u7EC4\u4EF6",paraId:9,tocIndex:10},{value:"React 18",paraId:10,tocIndex:11},{value:"TypeScript",paraId:10,tocIndex:11},{value:"Ant Design 5.x",paraId:10,tocIndex:11},{value:"Ant Design Pro Components",paraId:10,tocIndex:11},{value:"Father 4.x (\u6784\u5EFA\u5DE5\u5177)",paraId:10,tocIndex:11},{value:"Dumi 2.x (\u6587\u6863\u5DE5\u5177)",paraId:10,tocIndex:11},{value:"\u4E3B\u7248\u672C\u53F7",paraId:11,tocIndex:13},{value:"\uFF1A\u4E0D\u517C\u5BB9\u7684 API \u4FEE\u6539",paraId:11,tocIndex:13},{value:"\u6B21\u7248\u672C\u53F7",paraId:11,tocIndex:13},{value:"\uFF1A\u5411\u4E0B\u517C\u5BB9\u7684\u529F\u80FD\u6027\u65B0\u589E",paraId:11,tocIndex:13},{value:"\u4FEE\u8BA2\u53F7",paraId:11,tocIndex:13},{value:"\uFF1A\u5411\u4E0B\u517C\u5BB9\u7684\u95EE\u9898\u4FEE\u6B63",paraId:11,tocIndex:13},{value:"\u2728 \u65B0\u589E\u529F\u80FD",paraId:12,tocIndex:14},{value:"\u{1F680} \u6539\u8FDB\u4F18\u5316",paraId:12,tocIndex:14},{value:"\u{1F4DA} \u6587\u6863\u5B8C\u5584",paraId:12,tocIndex:14},{value:"\u{1F41B} \u4FEE\u590D\u95EE\u9898",paraId:12,tocIndex:14},{value:"\u26A0\uFE0F \u7834\u574F\u6027\u53D8\u66F4",paraId:12,tocIndex:14},{value:"\u{1F512} \u5B89\u5168\u66F4\u65B0",paraId:12,tocIndex:14},{value:"\u{1F3AF} \u7279\u6027",paraId:12,tocIndex:14},{value:"\u{1F6E0}\uFE0F \u6280\u672F\u6808",paraId:12,tocIndex:14},{value:"\u76F4\u63A5\u5347\u7EA7",paraId:13,tocIndex:16},{value:"\uFF1A\u73B0\u6709\u4EE3\u7801\u65E0\u9700\u4FEE\u6539",paraId:13,tocIndex:16},{value:"\u6E10\u8FDB\u5F0F\u91C7\u7528",paraId:13,tocIndex:16},{value:"\uFF1A\u53EF\u9009\u62E9\u6027\u542F\u7528\u65B0\u529F\u80FD",paraId:13,tocIndex:16},{value:"\u7C7B\u578B\u5B89\u5168",paraId:13,tocIndex:16},{value:"\uFF1A\u5EFA\u8BAE\u542F\u7528 TypeScript \u4E25\u683C\u6A21\u5F0F",paraId:13,tocIndex:16},{value:"\u6027\u80FD\u4F18\u5316",paraId:13,tocIndex:16},{value:"\uFF1A\u5EFA\u8BAE\u542F\u7528\u7F13\u5B58\u548C\u865A\u62DF\u6EDA\u52A8\u529F\u80FD",paraId:13,tocIndex:16},{value:"\u6240\u6709\u65B0\u529F\u80FD\u90FD\u662F\u53EF\u9009\u7684",paraId:14,tocIndex:17},{value:"\u4FDD\u6301\u5B8C\u5168\u7684\u5411\u540E\u517C\u5BB9\u6027",paraId:14,tocIndex:17},{value:"\u5EFA\u8BAE\u5728\u5347\u7EA7\u524D\u8FD0\u884C\u5B8C\u6574\u7684\u6D4B\u8BD5\u5957\u4EF6",paraId:14,tocIndex:17},{value:"\u8BE6\u7EC6\u5347\u7EA7\u6307\u5357\u8BF7\u53C2\u8003 ",paraId:14,tocIndex:17},{value:"\u5347\u7EA7\u6307\u5357",paraId:15,tocIndex:17},{value:"\u5982\u679C\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF1A",paraId:16,tocIndex:18},{value:"\u{1F4D6} ",paraId:17,tocIndex:18},{value:"\u67E5\u770B\u6587\u6863",paraId:18,tocIndex:18},{value:"\u{1F41B} ",paraId:17,tocIndex:18},{value:"\u63D0\u4EA4 Issue",paraId:17,tocIndex:18},{value:"\u{1F4AC} ",paraId:17,tocIndex:18},{value:"\u53C2\u4E0E\u8BA8\u8BBA",paraId:17,tocIndex:18},{value:"\u{1F4E7} ",paraId:17,tocIndex:18},{value:"\u8054\u7CFB\u7EF4\u62A4\u8005",paraId:17,tocIndex:18},{value:"\u6B22\u8FCE\u8D21\u732E\u4EE3\u7801\uFF01\u8BF7\u67E5\u770B\uFF1A",paraId:19,tocIndex:19},{value:"\u8D21\u732E\u6307\u5357",paraId:20,tocIndex:19},{value:"\u5F00\u53D1\u6307\u5357",paraId:21,tocIndex:19},{value:"\u6700\u4F73\u5B9E\u8DF5",paraId:22,tocIndex:19}]},81358:function(r,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"Durians \u63D0\u4F9B\u4E86\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u7EC4\u4EF6\uFF0C\u57FA\u4E8E Ant Design Pro \u6784\u5EFA\uFF0C\u65E8\u5728\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u7EA7\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u4F01\u4E1A\u7EA7\u6570\u636E\u8868\u683C\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684 CRUD \u529F\u80FD\u3002",paraId:1,tocIndex:2},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:2,tocIndex:2},{value:"\u{1F4CA} \u5B8C\u6574\u7684 CRUD \u64CD\u4F5C\uFF08\u589E\u5220\u6539\u67E5\uFF09",paraId:3,tocIndex:2},{value:"\u{1F50D} \u5185\u7F6E\u641C\u7D22\u3001\u7B5B\u9009\u3001\u6392\u5E8F\u529F\u80FD",paraId:3,tocIndex:2},{value:"\u{1F4C4} \u667A\u80FD\u5206\u9875\u548C\u6570\u636E\u52A0\u8F7D",paraId:3,tocIndex:2},{value:"\u{1F333} \u652F\u6301\u6811\u5F62\u9009\u62E9\u548C\u6279\u91CF\u64CD\u4F5C",paraId:3,tocIndex:2},{value:"\u26A1 \u6027\u80FD\u4F18\u5316\uFF1A\u865A\u62DF\u6EDA\u52A8\u3001\u7F13\u5B58\u673A\u5236",paraId:3,tocIndex:2},{value:"\u{1F3A8} \u9AD8\u5EA6\u53EF\u5B9A\u5236\u7684\u5217\u914D\u7F6E",paraId:3,tocIndex:2},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:4,tocIndex:2},{value:"\u7528\u6237\u7BA1\u7406\u7CFB\u7EDF",paraId:5,tocIndex:2},{value:"\u6570\u636E\u5C55\u793A\u548C\u7BA1\u7406",paraId:5,tocIndex:2},{value:"\u540E\u53F0\u7BA1\u7406\u754C\u9762",paraId:5,tocIndex:2},{value:"\u62A5\u8868\u548C\u7EDF\u8BA1\u9875\u9762",paraId:5,tocIndex:2},{value:`import { TablePro } from 'durians';

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
`,paraId:30,tocIndex:6},{value:"\u589E\u5F3A\u7684\u8868\u5355\u9879\u7EC4\u4EF6\u96C6\u5408\uFF0C\u63D0\u4F9B\u66F4\u4E30\u5BCC\u7684\u8F93\u5165\u63A7\u4EF6\u3002",paraId:31,tocIndex:7},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:32,tocIndex:7},{value:"\u{1F333} TreeSelectPro - \u6811\u5F62\u9009\u62E9\u5668",paraId:33,tocIndex:7},{value:"\u{1F4E4} UploadPro - \u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6",paraId:33,tocIndex:7},{value:"\u{1F4CA} TableSelect - \u8868\u683C\u9009\u62E9\u5668",paraId:33,tocIndex:7},{value:"\u{1F510} \u9A8C\u8BC1\u7801\u7EC4\u4EF6",paraId:33,tocIndex:7},{value:"\u{1F3A8} \u9AD8\u5EA6\u53EF\u5B9A\u5236",paraId:33,tocIndex:7},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:34,tocIndex:7},{value:"\u590D\u6742\u8868\u5355\u8F93\u5165",paraId:35,tocIndex:7},{value:"\u6587\u4EF6\u4E0A\u4F20\u7BA1\u7406",paraId:35,tocIndex:7},{value:"\u6570\u636E\u9009\u62E9\u754C\u9762",paraId:35,tocIndex:7},{value:"\u9A8C\u8BC1\u7801\u9A8C\u8BC1",paraId:35,tocIndex:7},{value:`import { TreeSelectPro, UploadPro, TableSelect } from 'durians';

// \u6811\u5F62\u9009\u62E9
<TreeSelectPro
  treeData={treeData}
  multiple={true}
  searchable={true}
/>

// \u6587\u4EF6\u4E0A\u4F20
<UploadPro
  action="/api/upload"
  listType="picture-card"
  maxCount={5}
/>

// \u8868\u683C\u9009\u62E9
<TableSelect
  columns={columns}
  dataSource={dataSource}
  multiple={true}
/>
`,paraId:36,tocIndex:7},{value:"\u4E3A ProForm \u63D0\u4F9B\u989D\u5916\u7684 valueType \u652F\u6301\u3002",paraId:37,tocIndex:8},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:38,tocIndex:8},{value:"\u{1F527} \u96C6\u6210\u81EA\u5B9A\u4E49 valueType",paraId:39,tocIndex:8},{value:"\u{1F4DD} \u652F\u6301 treeSelectPro\u3001uploadPro\u3001tableSelect",paraId:39,tocIndex:8},{value:"\u{1F510} \u5185\u7F6E\u9A8C\u8BC1\u7801\u7EC4\u4EF6",paraId:39,tocIndex:8},{value:"\u{1F3AF} \u7B80\u5316\u8868\u5355\u914D\u7F6E",paraId:39,tocIndex:8},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:40,tocIndex:8},{value:"\u590D\u6742\u8868\u5355\u6784\u5EFA",paraId:41,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u8868\u5355\u9879",paraId:41,tocIndex:8},{value:"\u7EDF\u4E00\u8868\u5355\u914D\u7F6E",paraId:41,tocIndex:8},{value:`import { ProProviderPro } from 'durians';

<ProProviderPro>
  <ProForm>
    <ProForm.Item
      name="tree"
      label="\u6811\u5F62\u9009\u62E9"
      valueType="treeSelectPro"
    />
    <ProForm.Item
      name="upload"
      label="\u6587\u4EF6\u4E0A\u4F20"
      valueType="uploadPro"
    />
  </ProForm>
</ProProviderPro>
`,paraId:42,tocIndex:8},{value:"\u7B80\u5355\u7684\u811A\u624B\u67B6\u793A\u4F8B\u7EC4\u4EF6\u3002",paraId:43,tocIndex:9},{value:"\u6838\u5FC3\u7279\u6027\uFF1A",paraId:44,tocIndex:9},{value:"\u{1F3AF} \u7B80\u5355\u7684\u6B22\u8FCE\u9875\u9762",paraId:45,tocIndex:9},{value:"\u{1F3A8} \u53EF\u81EA\u5B9A\u4E49\u540D\u79F0",paraId:45,tocIndex:9},{value:"\u{1F4F1} \u54CD\u5E94\u5F0F\u8BBE\u8BA1",paraId:45,tocIndex:9},{value:"\u9002\u7528\u573A\u666F\uFF1A",paraId:46,tocIndex:9},{value:"\u7EC4\u4EF6\u5F00\u53D1\u793A\u4F8B",paraId:47,tocIndex:9},{value:"\u5FEB\u901F\u539F\u578B\u5F00\u53D1",paraId:47,tocIndex:9},{value:"\u5B66\u4E60\u53C2\u8003",paraId:47,tocIndex:9},{value:`import { YB } from 'durians';

<YB name="Durians" />
`,paraId:48,tocIndex:9},{value:"\u5B89\u88C5\u4F9D\u8D56",paraId:49,tocIndex:11},{value:`npm install durians
# \u6216
yarn add durians
`,paraId:50,tocIndex:11},{value:"\u5F15\u5165\u7EC4\u4EF6",paraId:51,tocIndex:11},{value:`import { TablePro, FormPro, ModalPro } from 'durians';
`,paraId:52,tocIndex:11},{value:"\u4F7F\u7528\u7EC4\u4EF6",paraId:53,tocIndex:11},{value:`const App = () => {
  return (
    <div>
      <TablePro url="/api/data" />
    </div>
  );
};
`,paraId:54,tocIndex:11},{value:`interface User {
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
`,paraId:55,tocIndex:13},{value:`import { useErrorHandler } from 'durians';
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
`,paraId:56,tocIndex:14},{value:`<TablePro
  url="/api/large-dataset"
  virtual={true} // \u542F\u7528\u865A\u62DF\u6EDA\u52A8
  cache={{ enabled: true, ttl: 5 * 60 * 1000 }} // \u542F\u7528\u7F13\u5B58
  errorRetry={{ enabled: true, maxRetries: 3 }} // \u9519\u8BEF\u91CD\u8BD5
/>
`,paraId:57,tocIndex:15},{value:"\u6240\u6709\u7EC4\u4EF6\u90FD\u63D0\u4F9B\u5408\u7406\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u800C\u65E0\u9700\u590D\u6742\u7684\u914D\u7F6E\u3002",paraId:58,tocIndex:17},{value:"\u901A\u8FC7\u4E30\u5BCC\u7684 props \u548C\u914D\u7F6E\u9009\u9879\uFF0C\u6EE1\u8DB3\u5404\u79CD\u4E1A\u52A1\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:59,tocIndex:18},{value:"\u5B8C\u6574\u7684 TypeScript \u652F\u6301\uFF0C\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u548C\u66F4\u597D\u7684\u5F00\u53D1\u4F53\u9A8C\u3002",paraId:60,tocIndex:19},{value:"\u5185\u7F6E\u6027\u80FD\u4F18\u5316\u673A\u5236\uFF0C\u652F\u6301\u5927\u6570\u636E\u91CF\u548C\u590D\u6742\u4EA4\u4E92\u573A\u666F\u3002",paraId:61,tocIndex:20},{value:"\u9075\u5FAA WCAG \u6807\u51C6\uFF0C\u63D0\u4F9B\u826F\u597D\u7684\u53EF\u8BBF\u95EE\u6027\u652F\u6301\u3002",paraId:62,tocIndex:21},{value:"useAsyncOperation",paraId:63,tocIndex:23},{value:" - \u5F02\u6B65\u64CD\u4F5C\u7BA1\u7406",paraId:64,tocIndex:23},{value:"useErrorHandler",paraId:65,tocIndex:23},{value:" - \u9519\u8BEF\u5904\u7406",paraId:64,tocIndex:23},{value:"common",paraId:66,tocIndex:24},{value:" - \u901A\u7528\u5DE5\u5177\u51FD\u6570",paraId:67,tocIndex:24},{value:"storage",paraId:68,tocIndex:24},{value:" - \u672C\u5730\u5B58\u50A8\u5DE5\u5177",paraId:67,tocIndex:24},{value:"constants",paraId:69,tocIndex:24},{value:" - \u5E38\u91CF\u5B9A\u4E49",paraId:67,tocIndex:24},{value:"format",paraId:70,tocIndex:24},{value:" - \u683C\u5F0F\u5316\u5DE5\u5177",paraId:67,tocIndex:24},{value:"\u67B6\u6784\u8BBE\u8BA1",paraId:71,tocIndex:25},{value:" - \u4E86\u89E3\u6280\u672F\u67B6\u6784\u548C\u8BBE\u8BA1\u7406\u5FF5",paraId:72,tocIndex:25},{value:"\u66F4\u65B0\u65E5\u5FD7",paraId:73,tocIndex:25},{value:" - \u67E5\u770B\u7248\u672C\u66F4\u65B0\u548C\u65B0\u529F\u80FD",paraId:72,tocIndex:25},{value:"Hooks \u6587\u6863",paraId:74,tocIndex:25},{value:" - \u67E5\u770B\u6240\u6709 Hooks \u7528\u6CD5",paraId:72,tocIndex:25},{value:"\u5DE5\u5177\u51FD\u6570",paraId:75,tocIndex:25},{value:" - \u67E5\u770B\u6240\u6709\u5DE5\u5177\u51FD\u6570",paraId:72,tocIndex:25},{value:"GitHub",paraId:72,tocIndex:25},{value:" - \u6E90\u7801\u548C\u95EE\u9898\u53CD\u9988",paraId:72,tocIndex:25},{value:"\u793A\u4F8B\u9879\u76EE",paraId:72,tocIndex:25},{value:" - \u5B8C\u6574\u7684\u4F7F\u7528\u793A\u4F8B",paraId:72,tocIndex:25},{value:"\u6B22\u8FCE\u8D21\u732E\u4EE3\u7801\u548C\u63D0\u51FA\u5EFA\u8BAE\uFF01\u8BF7\u67E5\u770B\u6211\u4EEC\u7684\u8D21\u732E\u6307\u5357\u3002",paraId:76,tocIndex:26},{value:"MIT \xA9 ",paraId:77,tocIndex:27},{value:"ztao",paraId:77,tocIndex:27}]},51446:function(r,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:`# npm
npm install durians

# yarn
yarn add durians

# pnpm
pnpm add durians
`,paraId:0,tocIndex:0},{value:"\u5B8C\u6574\u7684 CRUD \u64CD\u4F5C",paraId:1,tocIndex:3},{value:"\u5206\u9875\u3001\u641C\u7D22\u3001\u6392\u5E8F",paraId:1,tocIndex:3},{value:"\u6279\u91CF\u64CD\u4F5C\u652F\u6301",paraId:1,tocIndex:3},{value:"\u6811\u5F62\u9009\u62E9\u96C6\u6210",paraId:1,tocIndex:3},{value:"\u6A21\u6001\u6846/\u62BD\u5C49\u5E03\u5C40",paraId:2,tocIndex:4},{value:"\u8868\u5355\u9A8C\u8BC1\u548C\u8054\u52A8",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u652F\u6301",paraId:2,tocIndex:4},{value:"\u6570\u636E\u5904\u7406\u7BA1\u9053",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6E32\u67D3",paraId:3,tocIndex:5},{value:"\u56DE\u8C03\u63A7\u5236\u673A\u5236",paraId:3,tocIndex:5},{value:"\u952E\u76D8\u5BFC\u822A\u652F\u6301",paraId:3,tocIndex:5},{value:"\u53EF\u8BBF\u95EE\u6027\u589E\u5F3A",paraId:3,tocIndex:5},{value:"\u591A\u79CD\u767B\u5F55\u65B9\u5F0F",paraId:4,tocIndex:6},{value:"\u5BC6\u7801\u52A0\u5BC6\u5904\u7406",paraId:4,tocIndex:6},{value:"\u9A8C\u8BC1\u7801\u96C6\u6210",paraId:4,tocIndex:6},{value:"\u81EA\u52A8\u767B\u5F55\u529F\u80FD",paraId:4,tocIndex:6},{value:"\u61D2\u52A0\u8F7D\u652F\u6301",paraId:5,tocIndex:7},{value:"CRUD \u64CD\u4F5C",paraId:5,tocIndex:7},{value:"\u9009\u62E9\u72B6\u6001\u7BA1\u7406",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:5,tocIndex:7},{value:"\u4F01\u4E1A\u7EA7",paraId:6,tocIndex:8},{value:": \u57FA\u4E8E Ant Design Pro\uFF0C\u6EE1\u8DB3\u4F01\u4E1A\u7EA7\u5E94\u7528\u9700\u6C42",paraId:6,tocIndex:8},{value:"\u4F4E\u4EE3\u7801",paraId:6,tocIndex:8},{value:": \u901A\u8FC7\u914D\u7F6E\u5316\u7684\u65B9\u5F0F\u5FEB\u901F\u6784\u5EFA\u590D\u6742\u529F\u80FD",paraId:6,tocIndex:8},{value:"\u7C7B\u578B\u5B89\u5168",paraId:6,tocIndex:8},{value:": \u5B8C\u6574\u7684 TypeScript \u652F\u6301\uFF0C\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u4FDD\u969C",paraId:6,tocIndex:8},{value:"\u9AD8\u6027\u80FD",paraId:6,tocIndex:8},{value:": \u5185\u7F6E\u6027\u80FD\u4F18\u5316\uFF0C\u652F\u6301\u865A\u62DF\u6EDA\u52A8\u3001\u7F13\u5B58\u7B49\u7279\u6027",paraId:6,tocIndex:8},{value:"\u53EF\u6269\u5C55",paraId:6,tocIndex:8},{value:": \u7075\u6D3B\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6269\u5C55",paraId:6,tocIndex:8},{value:"\u6587\u6863\u5B8C\u5584",paraId:6,tocIndex:8},{value:": \u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\uFF0C\u5FEB\u901F\u4E0A\u624B",paraId:6,tocIndex:8},{value:"\u{1F4D6} ",paraId:7,tocIndex:9},{value:"\u67E5\u770B\u6587\u6863",paraId:8,tocIndex:9},{value:"\u{1F41B} ",paraId:7,tocIndex:9},{value:"\u63D0\u4EA4 Issue",paraId:7,tocIndex:9},{value:"\u{1F4AC} ",paraId:7,tocIndex:9},{value:"\u53C2\u4E0E\u8BA8\u8BBA",paraId:7,tocIndex:9},{value:"\u6B22\u8FCE\u8D21\u732E\u4EE3\u7801\uFF01\u8BF7\u67E5\u770B ",paraId:9,tocIndex:10},{value:"\u8D21\u732E\u6307\u5357",paraId:9,tocIndex:10},{value:"\u3002",paraId:9,tocIndex:10},{value:"MIT",paraId:10,tocIndex:11},{value:" \xA9 ",paraId:10,tocIndex:11},{value:"ztao",paraId:10,tocIndex:11}]}}]);
