import{R as r}from"./iframe-tjHw1kgP.js";import{d}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const c=d.tfoot`
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"#f9f9f9"};
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,a=({children:e,disabled:s=!1,backgroundColor:n})=>r.createElement(c,{disabled:s,backgroundColor:n},e);a.__docgenInfo={description:"",methods:[],displayName:"TableFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const u={title:"Components/TableFooter",component:a,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},l=e=>r.createElement("table",null,r.createElement(a,{...e},r.createElement("tr",null,r.createElement("td",null,"Footer Data")))),t=l.bind({});t.args={};const o=l.bind({});o.args={disabled:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <table>\r
    <TableFooter {...args}>\r
      <tr>\r
        <td>Footer Data</td>\r
      </tr>\r
    </TableFooter>\r
  </table>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <table>\r
    <TableFooter {...args}>\r
      <tr>\r
        <td>Footer Data</td>\r
      </tr>\r
    </TableFooter>\r
  </table>`,...o.parameters?.docs?.source}}};const p=["Default","Disabled"];export{t as Default,o as Disabled,p as __namedExportsOrder,u as default};
