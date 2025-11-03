import{R as t}from"./iframe-tjHw1kgP.js";import{d as o}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const p=o.div`
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"#fff"};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${e=>e.disabled?"0 2px 4px rgba(0, 0, 0, 0.1)":"0 4px 8px rgba(0, 0, 0, 0.15)"};
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`,m=o.h3`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`,u=o.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`,s=({children:e,disabled:l=!1,backgroundColor:c,title:d,content:n})=>t.createElement(p,{disabled:l,backgroundColor:c},d&&t.createElement(m,null,d),n&&t.createElement(u,null,n),e);s.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Card",component:s,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},title:{control:"text"},content:{control:"text"}}},i=e=>t.createElement(s,{...e}),r=i.bind({});r.args={title:"Card Title",content:"This is some card content."};const a=i.bind({});a.args={title:"Disabled Card",content:"This card is disabled.",disabled:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...a.parameters?.docs?.source}}};const C=["Default","Disabled"];export{r as Default,a as Disabled,C as __namedExportsOrder,x as default};
