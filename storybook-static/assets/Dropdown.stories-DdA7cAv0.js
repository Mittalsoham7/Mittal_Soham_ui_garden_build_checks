import{R as a}from"./iframe-tjHw1kgP.js";import{d as l}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const u=l.select`
  background-color: ${e=>e.disabled?"#ccc":e.backgroundColor||"#fff"};
  color: ${e=>e.disabled?"#666":"#000"};
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,s=({options:e,selected:i,onChange:n,disabled:p=!1,backgroundColor:c})=>a.createElement(u,{value:i,onChange:o=>n&&n(o.target.value),disabled:p,backgroundColor:c},e.map(o=>a.createElement("option",{key:o,value:o},o)));s.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selected:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/Dropdown",component:s,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},d=e=>a.createElement(s,{...e}),r=d.bind({});r.args={options:["Option 1","Option 2","Option 3"],selected:"Option 1"};const t=d.bind({});t.args={options:["Option 1","Option 2","Option 3"],selected:"Option 1",disabled:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Dropdown {...args} />",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Dropdown {...args} />",...t.parameters?.docs?.source}}};const y=["Default","Disabled"];export{r as Default,t as Disabled,y as __namedExportsOrder,b as default};
