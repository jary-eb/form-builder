import{R as c}from"./index-DHo17Z-2.js";import{D as v,H as U,u as W}from"./useTranslation-CIlBtmPs.js";import{F as E}from"./Field-D0kn8ah3.js";import"./jsx-runtime-DKNAYBdV.js";import"./Add-Tg1wRw98.js";import"./GlobalStyles-KJ2eBfj0.js";import"./TextField-CrZXFGCP.js";import"./index-D79z27ER.js";import"./index-Bcm4Zk8L.js";import"./FormControlLabel-DOMja7zO.js";import"./context-BGp1BCy9.js";import"./i18nInstance-CnyO1Rew.js";import"./MultipleChoice-C64TKVAu.js";import"./Box-BLsYhM4q.js";import"./v4-CtRu48qb.js";import"./Checkbox-C2ofCMxJ.js";import"./SingleChoice-KyR9RStX.js";import"./Radio-BVPYsFBx.js";import"./Switch-B2uidYV1.js";const N={title:"Field Types/Long Text",component:E,decorators:[e=>c.createElement(v,{backend:U},c.createElement(e,null))],parameters:{layout:"padded"}},s=(e,{globals:{locale:o}})=>{const{i18n:i}=W();return c.useEffect(()=>{i.changeLanguage(o)},[o,i]),c.createElement(E,{...e})},n=s.bind({});n.args={field:{id:"1",type:"longText",label:"Description",required:!1},isSelected:!1,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const t=s.bind({});t.args={field:{id:"1",type:"longText",label:"About Me",required:!0,placeholder:"Tell us about yourself..."},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const l=s.bind({});l.args={field:{id:"1",type:"longText",label:"Essay",required:!0,placeholder:"Write your essay here...",minLength:100,maxLength:1e3},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const a=s.bind({});a.args={field:{id:"1",type:"longText",label:"Project Description",required:!0,placeholder:"Describe your project",defaultValue:"This project aims to...",maxLength:500},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const r=s.bind({});r.args={field:{id:"1",type:"longText",label:"Article Content",required:!0,placeholder:"Write your article",minLength:500,maxLength:5e3},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};var d,g,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args, {
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
  return <FieldComponent {...args} />;
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
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
  return <FieldComponent {...args} />;
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,b,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
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
  return <FieldComponent {...args} />;
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var F,L,T;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`(args, {
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
  return <FieldComponent {...args} />;
}`,...(T=(L=a.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var x,D,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`(args, {
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
  return <FieldComponent {...args} />;
}`,...(y=(D=r.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const Q=["Empty","WithPlaceholder","WithValidation","WithDefaultValue","WithLargeLimit"];export{n as Empty,a as WithDefaultValue,r as WithLargeLimit,t as WithPlaceholder,l as WithValidation,Q as __namedExportsOrder,N as default};
