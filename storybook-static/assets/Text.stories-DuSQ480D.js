import{R as o}from"./iframe-tjHw1kgP.js";import{d as l}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const i=l.p`
  color: ${e=>e.disabled?"#666":"black"};
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"transparent"};
  padding: 5px;
  border-radius: 2px;
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,a=({children:e,disabled:d=!1,backgroundColor:n,text:c})=>o.createElement(i,{disabled:d,backgroundColor:n},c||e);a.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Text",component:a,argTypes:{text:{control:"text"},backgroundColor:{control:"color"},disabled:{control:"boolean"}}},s=e=>o.createElement(a,{...e}),t=s.bind({});t.args={text:"Sample Text"};const r=s.bind({});r.args={text:"Disabled Text",disabled:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Text {...args} />",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Text {...args} />",...r.parameters?.docs?.source}}};const b=["Default","Disabled"];export{t as Default,r as Disabled,b as __namedExportsOrder,x as default};
