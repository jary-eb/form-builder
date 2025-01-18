import{R as n}from"./index-DHo17Z-2.js";import{B as m}from"./Box-BLsYhM4q.js";import{T as o}from"./TextField-CrZXFGCP.js";import{S as s,i as S,a as F}from"./i18n-BSRr5oZY.js";import L from"./en_US-B04Omr2O.js";import v from"./zh_CN-Bvbmh0V0.js";import"./GlobalStyles-KJ2eBfj0.js";import"./jsx-runtime-DKNAYBdV.js";import"./index-D79z27ER.js";import"./index-Bcm4Zk8L.js";import"./iframe-B04lK_MR.js";import"../sb-preview/runtime.js";import"./i18nInstance-CnyO1Rew.js";const u=({field:e,onChange:t})=>{const x=a=>{t({...e,placeholder:a})},y=a=>{t({...e,minTime:a||void 0})},_=a=>{t({...e,maxTime:a||void 0})};return n.createElement(m,null,n.createElement(o,{fullWidth:!0,label:"Placeholder Text",value:e.placeholder||"",onChange:a=>x(a.target.value),placeholder:"Enter placeholder text",variant:"outlined",size:"small",sx:{mb:2}}),n.createElement(m,{display:"flex",gap:2,mb:2},n.createElement(o,{label:"Minimum Time",type:"time",value:e.minTime||"",onChange:a=>y(a.target.value),variant:"outlined",size:"small",InputLabelProps:{shrink:!0},inputProps:{step:300}}),n.createElement(o,{label:"Maximum Time",type:"time",value:e.maxTime||"",onChange:a=>_(a.target.value),variant:"outlined",size:"small",InputLabelProps:{shrink:!0},inputProps:{step:300}})))};u.__docgenInfo={description:"",methods:[],displayName:"TimeField",props:{field:{required:!0,tsType:{name:"Field"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(field: Field) => void",signature:{arguments:[{type:{name:"Field"},name:"field"}],return:{name:"void"}}},description:""}}};S.use(F).init({resources:{en_US:{translation:L},zh_CN:{translation:v}},lng:s.EN_US,fallbackLng:s.EN_US,interpolation:{escapeValue:!1}});const V={title:"Field Types/Time",component:u,parameters:{layout:"padded"},argTypes:{language:{control:"select",options:Object.values(s),defaultValue:s.EN_US}}},g=({language:e=s.EN_US,...t})=>(n.useEffect(()=>{S.changeLanguage(e)},[e]),n.createElement(u,{field:t.field,onChange:t.onChange})),r=g.bind({});r.args={field:{id:"1",type:"time",label:"time.label",required:!1},onChange:e=>console.log("Field updated:",e)};const i=g.bind({});i.args={field:{id:"1",type:"time",label:"time.label",required:!0},onChange:e=>console.log("Field updated:",e)};const l=g.bind({});l.args={field:{id:"1",type:"time",label:"time.label",required:!0,minTime:"09:00",maxTime:"17:00"},onChange:e=>console.log("Field updated:",e)};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  language = SupportedLanguages.EN_US,
  ...args
}) => {
  // Change language when it updates
  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return <TimeField field={args.field} onChange={args.onChange} />;
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var h,f,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`({
  language = SupportedLanguages.EN_US,
  ...args
}) => {
  // Change language when it updates
  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return <TimeField field={args.field} onChange={args.onChange} />;
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var C,E,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`({
  language = SupportedLanguages.EN_US,
  ...args
}) => {
  // Change language when it updates
  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return <TimeField field={args.field} onChange={args.onChange} />;
}`,...(b=(E=l.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const j=["Basic","Required","WithLimits"];export{r as Basic,i as Required,l as WithLimits,j as __namedExportsOrder,V as default};
