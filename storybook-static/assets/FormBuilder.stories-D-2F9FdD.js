import{r as E,R as r}from"./index-DHo17Z-2.js";import{u as k,D,H as R}from"./useTranslation-CIlBtmPs.js";import{A as _}from"./Add-Tg1wRw98.js";import{F as L}from"./Field-D0kn8ah3.js";import{s as c,P as M}from"./TextField-CrZXFGCP.js";import{B as u}from"./Box-BLsYhM4q.js";import{B as V,T as I}from"./FormControlLabel-DOMja7zO.js";import{v as x}from"./v4-CtRu48qb.js";import"./jsx-runtime-DKNAYBdV.js";import"./GlobalStyles-KJ2eBfj0.js";import"./context-BGp1BCy9.js";import"./i18nInstance-CnyO1Rew.js";import"./MultipleChoice-C64TKVAu.js";import"./Checkbox-C2ofCMxJ.js";import"./SingleChoice-KyR9RStX.js";import"./Radio-BVPYsFBx.js";import"./Switch-B2uidYV1.js";import"./index-D79z27ER.js";import"./index-Bcm4Zk8L.js";const H=c(u)(({theme:e})=>({height:"100vh",display:"flex",flexDirection:"column",backgroundColor:e.palette.grey[100]})),N=c(u)(({theme:e})=>({flex:1,display:"flex",overflow:"hidden",gap:e.spacing(3),padding:e.spacing(3)})),U=c(M)(({theme:e})=>({flex:1,display:"flex",flexDirection:"column",overflow:"hidden",borderRadius:e.shape.borderRadius})),W=c(u)(({theme:e})=>({flex:1,overflow:"auto",padding:e.spacing(2),display:"flex",flexDirection:"column",gap:e.spacing(2)})),j=c(V)(({theme:e})=>({width:"160px",padding:e.spacing(2),justifyContent:"flex-start",color:"#005EF9"})),y=({initialFields:e=[{id:x(),type:"shortText",label:"",required:!1,description:"",validationMessage:"",defaultValue:""}],onChange:a})=>{var F;const{t:i}=k(),[l,m]=E.useState(e.map(t=>({...t,label:t.label||i("common.untitledQuestion")}))),[g,f]=E.useState(((F=e[0])==null?void 0:F.id)||null),A=()=>{const t={id:x(),type:"",label:i("common.untitledQuestion"),required:!1,description:"",validationMessage:"",defaultValue:""},n=[...l,t];m(n),f(t.id),a==null||a(n)},h=t=>{const n=l.map(o=>o.id===t.id?t:o);m(n),a==null||a(n)},P=t=>{const n=l.filter(o=>o.id!==t);m(n),g===t&&f(null),a==null||a(n)},Q=(t,n)=>{const o=l[t],p=[...l];p.splice(t,1),p.splice(n,0,o),m(p),a==null||a(p)};return r.createElement(D,{backend:R},r.createElement(H,null,r.createElement(N,null,r.createElement(U,null,r.createElement(W,null,l.map((t,n)=>r.createElement(L,{key:t.id,field:t,isSelected:g===t.id,onSelect:f,onUpdate:h,onDelete:P,index:n,moveField:Q,totalFields:l.length})),l.length===0&&r.createElement(u,{sx:{p:3,textAlign:"center",backgroundColor:"grey.50",borderRadius:1}},r.createElement(I,{color:"textSecondary"},i("common.addQuestion"))),r.createElement(j,{startIcon:r.createElement(_,null),onClick:A},i("common.addQuestion")))))))};y.__docgenInfo={description:"",methods:[],displayName:"FormBuilder",props:{initialFields:{required:!1,tsType:{name:"Array",elements:[{name:"FieldType"}],raw:"FieldType[]"},description:"",defaultValue:{value:`[
  {
    id: uuidv4(),
    type: 'shortText',
    label: '',
    required: false,
    description: '',
    validationMessage: '',
    defaultValue: '',
  }
]`,computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(fields: FieldType[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"FieldType"}],raw:"FieldType[]"},name:"fields"}],return:{name:"void"}}},description:""},onFormDataChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},defaultRendererType:{required:!1,tsType:{name:"union",raw:"'material' | 'vanilla'",elements:[{name:"literal",value:"'material'"},{name:"literal",value:"'vanilla'"}]},description:""}}};const de={title:"Components/Form Builder",component:y,decorators:[e=>r.createElement(D,{backend:R},r.createElement(e,null))],parameters:{layout:"padded"}},S=(e,{globals:{locale:a}})=>{const{i18n:i}=k();return r.useEffect(()=>{i.changeLanguage(a)},[a,i]),r.createElement(y,{...e})},s=S.bind({});s.args={};const d=S.bind({});d.args={initialFields:[{id:"1",type:"shortText",label:"Name",required:!0,placeholder:"Enter your name"},{id:"2",type:"email",label:"Email",required:!0,placeholder:"Enter your email"},{id:"3",type:"longText",label:"Comments",required:!1,placeholder:"Enter your comments"}]};var v,T,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args, {
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
  return <FormBuilder {...args} />;
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var B,q,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(args, {
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
  return <FormBuilder {...args} />;
}`,...(w=(q=d.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const ce=["Empty","WithFields"];export{s as Empty,d as WithFields,ce as __namedExportsOrder,de as default};
