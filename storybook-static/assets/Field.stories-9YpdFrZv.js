import{R as a}from"./index-DHo17Z-2.js";import{D as T,H as x,u as y}from"./useTranslation-CIlBtmPs.js";import{F as E}from"./Field-D0kn8ah3.js";import"./jsx-runtime-DKNAYBdV.js";import"./Add-Tg1wRw98.js";import"./GlobalStyles-KJ2eBfj0.js";import"./TextField-CrZXFGCP.js";import"./index-D79z27ER.js";import"./index-Bcm4Zk8L.js";import"./FormControlLabel-DOMja7zO.js";import"./context-BGp1BCy9.js";import"./i18nInstance-CnyO1Rew.js";import"./MultipleChoice-C64TKVAu.js";import"./Box-BLsYhM4q.js";import"./v4-CtRu48qb.js";import"./Checkbox-C2ofCMxJ.js";import"./SingleChoice-KyR9RStX.js";import"./Radio-BVPYsFBx.js";import"./Switch-B2uidYV1.js";const z={title:"Components/Field",component:E,decorators:[e=>a.createElement(T,{backend:x},a.createElement(e,null))],parameters:{layout:"padded"}},s=(e,{globals:{locale:o}})=>{const{i18n:i}=y();return a.useEffect(()=>{i.changeLanguage(o)},[o,i]),a.createElement(E,{...e})},l=s.bind({});l.args={field:{id:"1",type:"shortText",label:"",required:!1},isSelected:!1,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};const n=s.bind({});n.args={field:{id:"1",type:"shortText",label:"What is your name?",description:"Please enter your full name",required:!0,placeholder:"John Doe"},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};const t=s.bind({});t.args={field:{id:"1",type:"multipleChoice",label:"What are your favorite colors?",description:"Select all that apply",required:!0,options:[{id:"1",label:"Red",value:"red"},{id:"2",label:"Blue",value:"blue"},{id:"3",label:"Green",value:"green"}]},isSelected:!1,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};const r=s.bind({});r.args={field:{id:"1",type:"shortText",label:"",required:!0},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o)};var c,d,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`(args, {
  globals: {
    locale
  }
}) => {
  const {
    i18n
  } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  return <Field {...args} />;
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  globals: {
    locale
  }
}) => {
  const {
    i18n
  } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  return <Field {...args} />;
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`(args, {
  globals: {
    locale
  }
}) => {
  const {
    i18n
  } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  return <Field {...args} />;
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,F,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(args, {
  globals: {
    locale
  }
}) => {
  const {
    i18n
  } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  return <Field {...args} />;
}`,...(v=(F=r.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};const A=["Empty","ShortTextField","MultipleChoiceField","WithValidationError"];export{l as Empty,t as MultipleChoiceField,n as ShortTextField,r as WithValidationError,A as __namedExportsOrder,z as default};
