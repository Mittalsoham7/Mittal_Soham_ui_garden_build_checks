import{R as r}from"./iframe-tjHw1kgP.js";import{d as n}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const c=n.thead`
  background-color: ${e=>e.disabled?"#e0e0e0":e.backgroundColor||"#f5f5f5"};
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,o=({children:e,disabled:d=!1,backgroundColor:s})=>r.createElement(c,{disabled:d,backgroundColor:s},e);o.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const u={title:"Components/TableHeader",component:o,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},l=e=>r.createElement("table",null,r.createElement(o,{...e},r.createElement("tr",null,r.createElement("th",null,"Header 1"),r.createElement("th",null,"Header 2")))),a=l.bind({});a.args={};const t=l.bind({});t.args={disabled:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <table>\r
    <TableHeader {...args}>\r
      <tr>\r
        <th>Header 1</th>\r
        <th>Header 2</th>\r
      </tr>\r
    </TableHeader>\r
  </table>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <table>\r
    <TableHeader {...args}>\r
      <tr>\r
        <th>Header 1</th>\r
        <th>Header 2</th>\r
      </tr>\r
    </TableHeader>\r
  </table>`,...t.parameters?.docs?.source}}};const p=["Default","Disabled"];export{a as Default,t as Disabled,p as __namedExportsOrder,u as default};
