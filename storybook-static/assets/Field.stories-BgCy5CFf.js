import{R as d}from"./index-DSS4ElxF.js";import{F as v,D as x,H as y}from"./Field-DGkQe9fd.js";import"./jsx-runtime-DjN6Ymlz.js";import"./context-X1H7efR9.js";import"./v4-CtRu48qb.js";import"./index-DZcotkr4.js";import"./index-C2lUTbq6.js";const W={title:"Components/Field",component:v,decorators:[e=>d.createElement(x,{backend:y},d.createElement(e,null))],parameters:{layout:"padded"}},s=e=>d.createElement(v,{...e}),l=s.bind({});l.args={field:{id:"1",type:"shortText",label:"",required:!1},isSelected:!1,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};const r=s.bind({});r.args={field:{id:"1",type:"shortText",label:"What is your name?",description:"Please enter your full name",required:!0,placeholder:"John Doe"},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};const t=s.bind({});t.args={field:{id:"1",type:"multipleChoice",label:"What are your favorite colors?",description:"Select all that apply",required:!0,options:[{id:"1",label:"Red",value:"red"},{id:"2",label:"Blue",value:"blue"},{id:"3",label:"Green",value:"green"}]},isSelected:!1,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};const a=s.bind({});a.args={field:{id:"1",type:"shortText",label:"",required:!0},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};var i,c,n;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Field {...args} />",...(n=(c=l.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Field {...args} />",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,S,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Field {...args} />",...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var F,h,b;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Field {...args} />",...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const R=["Empty","ShortTextField","MultipleChoiceField","WithValidationError"];export{l as Empty,t as MultipleChoiceField,r as ShortTextField,a as WithValidationError,R as __namedExportsOrder,W as default};