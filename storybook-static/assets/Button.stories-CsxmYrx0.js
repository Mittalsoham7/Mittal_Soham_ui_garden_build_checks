import{R as s}from"./iframe-tjHw1kgP.js";import{d as l}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const p=l.button`
  background-color: ${e=>e.disabled?"#ccc":e.backgroundColor||"#007bff"};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  font-size: 16px;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  &:hover {
    background-color: ${e=>e.disabled?"#ccc":"#0056b3"};
  }
`,r=({children:e,onClick:d,disabled:a=!1,backgroundColor:c,text:i})=>s.createElement(p,{onClick:a?void 0:d,disabled:a,backgroundColor:c},i||e);r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Components/Button",component:r,argTypes:{text:{control:"text"},backgroundColor:{control:"color"},disabled:{control:"boolean"}}},n=e=>s.createElement(r,{...e}),o=n.bind({});o.args={text:"Click me"};const t=n.bind({});t.args={text:"Disabled",disabled:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...t.parameters?.docs?.source}}};const f=["Default","Disabled"];export{o as Default,t as Disabled,f as __namedExportsOrder,g as default};
