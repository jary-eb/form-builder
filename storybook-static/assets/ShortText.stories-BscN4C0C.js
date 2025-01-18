import{R as c}from"./index-DHo17Z-2.js";import{D as U,H as y,u as M}from"./useTranslation-CIlBtmPs.js";import{F as v}from"./Field-D0kn8ah3.js";import"./jsx-runtime-DKNAYBdV.js";import"./Add-Tg1wRw98.js";import"./GlobalStyles-KJ2eBfj0.js";import"./TextField-CrZXFGCP.js";import"./index-D79z27ER.js";import"./index-Bcm4Zk8L.js";import"./FormControlLabel-DOMja7zO.js";import"./context-BGp1BCy9.js";import"./i18nInstance-CnyO1Rew.js";import"./MultipleChoice-C64TKVAu.js";import"./Box-BLsYhM4q.js";import"./v4-CtRu48qb.js";import"./Checkbox-C2ofCMxJ.js";import"./SingleChoice-KyR9RStX.js";import"./Radio-BVPYsFBx.js";import"./Switch-B2uidYV1.js";const N={title:"Field Types/Short Text",component:v,decorators:[e=>c.createElement(U,{backend:y},c.createElement(e,null))],parameters:{layout:"padded"}},s=(e,{globals:{locale:o}})=>{const{i18n:d}=M();return c.useEffect(()=>{d.changeLanguage(o)},[o,d]),c.createElement(v,{...e})},t=s.bind({});t.args={field:{id:"1",type:"shortText",label:"text.short",required:!1},isSelected:!1,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const l=s.bind({});l.args={field:{id:"1",type:"shortText",label:"shortText.placeholder",required:!0,placeholder:"shortText.placeholder"},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const n=s.bind({});n.args={field:{id:"1",type:"shortText",label:"shortText.placeholder",required:!0,placeholder:"shortText.placeholder",minLength:3,maxLength:20},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const a=s.bind({});a.args={field:{id:"1",type:"shortText",label:"shortText.placeholder",required:!0,placeholder:"shortText.placeholder",multipleLines:!0,maxLength:200},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};const r=s.bind({});r.args={field:{id:"1",type:"shortText",label:"shortText.placeholder",required:!0,placeholder:"shortText.placeholder",defaultValue:"Acme Inc.",maxLength:50},isSelected:!0,onSelect:e=>console.log("Selected:",e),onUpdate:e=>console.log("Updated:",e),onDelete:e=>console.log("Deleted:",e),index:0,moveField:(e,o)=>console.log("Moved from",e,"to",o),totalFields:1};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`(args, {
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
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,x,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(args, {
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
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,F,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`(args, {
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
}`,...(b=(F=a.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var D,L,E;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`(args, {
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
}`,...(E=(L=r.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const Q=["Empty","WithPlaceholder","WithValidation","MultipleLines","WithDefaultValue"];export{t as Empty,a as MultipleLines,r as WithDefaultValue,l as WithPlaceholder,n as WithValidation,Q as __namedExportsOrder,N as default};
