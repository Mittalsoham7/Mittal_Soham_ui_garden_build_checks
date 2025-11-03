import{R as a}from"./iframe-tjHw1kgP.js";import{d as n}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const c=n.tr`
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"transparent"};
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,o=({children:e,disabled:d=!1,backgroundColor:s})=>a.createElement(c,{disabled:d,backgroundColor:s},e);o.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const u={title:"Components/TableRow",component:o,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},l=e=>a.createElement("table",null,a.createElement("tbody",null,a.createElement(o,{...e},a.createElement("td",null,"Data 1"),a.createElement("td",null,"Data 2")))),t=l.bind({});t.args={};const r=l.bind({});r.args={disabled:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <table>\r
    <tbody>\r
      <TableRow {...args}>\r
        <td>Data 1</td>\r
        <td>Data 2</td>\r
      </TableRow>\r
    </tbody>\r
  </table>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <table>\r
    <tbody>\r
      <TableRow {...args}>\r
        <td>Data 1</td>\r
        <td>Data 2</td>\r
      </TableRow>\r
    </tbody>\r
  </table>`,...r.parameters?.docs?.source}}};const p=["Default","Disabled"];export{t as Default,r as Disabled,p as __namedExportsOrder,u as default};
