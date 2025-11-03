import{R as a}from"./iframe-tjHw1kgP.js";import{d as n}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const c=n.td`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"transparent"};
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};

  @media (max-width: 768px) {
    padding: 4px;
    font-size: 14px;
  }
`,t=({children:e,disabled:d=!1,backgroundColor:s})=>a.createElement(c,{disabled:d,backgroundColor:s},e);t.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const m={title:"Components/TableCell",component:t,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},o=e=>a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement(t,{...e},"Cell Data")))),r=o.bind({});r.args={};const l=o.bind({});l.args={disabled:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <table>\r
    <tbody>\r
      <tr>\r
        <TableCell {...args}>Cell Data</TableCell>\r
      </tr>\r
    </tbody>\r
  </table>`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <table>\r
    <tbody>\r
      <tr>\r
        <TableCell {...args}>Cell Data</TableCell>\r
      </tr>\r
    </tbody>\r
  </table>`,...l.parameters?.docs?.source}}};const u=["Default","Disabled"];export{r as Default,l as Disabled,u as __namedExportsOrder,m as default};
