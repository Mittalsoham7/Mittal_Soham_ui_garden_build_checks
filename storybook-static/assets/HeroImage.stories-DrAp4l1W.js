import{R as t}from"./iframe-tjHw1kgP.js";import{d as a}from"./styled-components.browser.esm-D8yuYqBQ.js";import"./preload-helper-PPVm8Dsz.js";const p=a.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${e=>e.disabled?"#f0f0f0":e.backgroundColor||"#000"};
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`,u=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,g=a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`,f=a.h1`
  font-size: 3rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,b=a.p`
  font-size: 1.5rem;
  margin: 0.5rem 0 0 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,n=({src:e,alt:c,disabled:d=!1,backgroundColor:m,title:s,subtitle:i})=>t.createElement(p,{disabled:d,backgroundColor:m},t.createElement(u,{src:e,alt:c}),(s||i)&&t.createElement(g,null,s&&t.createElement(f,null,s),i&&t.createElement(b,null,i)));n.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"Components/HeroImage",component:n,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},l=e=>t.createElement(n,{...e}),r=l.bind({});r.args={src:"https://via.placeholder.com/1200x400",alt:"Hero Image",title:"Welcome",subtitle:"To our component library"};const o=l.bind({});o.args={src:"https://via.placeholder.com/1200x400",alt:"Disabled Hero Image",title:"Disabled",subtitle:"This is disabled",disabled:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <HeroImage {...args} />",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <HeroImage {...args} />",...o.parameters?.docs?.source}}};const H=["Default","Disabled"];export{r as Default,o as Disabled,H as __namedExportsOrder,T as default};
