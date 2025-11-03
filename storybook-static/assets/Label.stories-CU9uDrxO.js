import{R as o}from"./iframe-tjHw1kgP.js";import{d as i}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const p=i.label`
  color: ${e=>e.disabled?"#666":"black"};
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"transparent"};
  padding: 5px;
  border-radius: 2px;
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,t=({children:e,htmlFor:d,disabled:l=!1,backgroundColor:n,text:c})=>o.createElement(p,{htmlFor:d,disabled:l,backgroundColor:n},c||e);t.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const f={title:"Components/Label",component:t,argTypes:{text:{control:"text"},backgroundColor:{control:"color"},disabled:{control:"boolean"}}},s=e=>o.createElement(t,{...e}),a=s.bind({});a.args={text:"Label Text"};const r=s.bind({});r.args={text:"Disabled Label",disabled:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <Label {...args} />",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Label {...args} />",...r.parameters?.docs?.source}}};const g=["Default","Disabled"];export{a as Default,r as Disabled,g as __namedExportsOrder,f as default};
