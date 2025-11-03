import{R as o}from"./iframe-tjHw1kgP.js";import{d as m}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const g=m.img`
  width: ${e=>e.width||"auto"};
  height: ${e=>e.height||"auto"};
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"transparent"};
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  border-radius: 4px;

  @media (max-width: 768px) {
    width: ${e=>e.width?`calc(${e.width} * 0.8)`:"auto"};
    height: ${e=>e.height?`calc(${e.height} * 0.8)`:"auto"};
  }
`,a=({src:e,alt:d,disabled:i=!1,backgroundColor:c,width:l,height:n})=>o.createElement(g,{src:e,alt:d,disabled:i,backgroundColor:c,width:l,height:n});a.__docgenInfo={description:"",methods:[],displayName:"Img",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/Img",component:a,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},width:{control:"text"},height:{control:"text"}}},s=e=>o.createElement(a,{...e}),t=s.bind({});t.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image"};const r=s.bind({});r.args={src:"https://via.placeholder.com/150",alt:"Disabled Image",disabled:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Img {...args} />",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Img {...args} />",...r.parameters?.docs?.source}}};const f=["Default","Disabled"];export{t as Default,r as Disabled,f as __namedExportsOrder,b as default};
