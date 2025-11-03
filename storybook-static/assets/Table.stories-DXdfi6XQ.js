import{R as t}from"./iframe-tjHw1kgP.js";import{d as s}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const c=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"white"};
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,n=({children:e,disabled:l=!1,backgroundColor:o})=>t.createElement(c,{disabled:l,backgroundColor:o},e);n.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/Table",component:n,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},d=e=>t.createElement(n,{...e},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Header 1"),t.createElement("th",null,"Header 2"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,"Data 1"),t.createElement("td",null,"Data 2")))),r=d.bind({});r.args={};const a=d.bind({});a.args={disabled:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Table {...args}>\r
    <thead>\r
      <tr>\r
        <th>Header 1</th>\r
        <th>Header 2</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr>\r
        <td>Data 1</td>\r
        <td>Data 2</td>\r
      </tr>\r
    </tbody>\r
  </Table>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Table {...args}>\r
    <thead>\r
      <tr>\r
        <th>Header 1</th>\r
        <th>Header 2</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr>\r
        <td>Data 1</td>\r
        <td>Data 2</td>\r
      </tr>\r
    </tbody>\r
  </Table>`,...a.parameters?.docs?.source}}};const p=["Default","Disabled"];export{r as Default,a as Disabled,p as __namedExportsOrder,b as default};
