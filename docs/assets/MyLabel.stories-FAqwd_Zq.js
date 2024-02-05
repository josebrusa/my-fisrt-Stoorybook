import{j as q}from"./jsx-runtime-vNq4Oc-g.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const n=({label:s,size:k="normal",allCaps:S=!1,color:B,fontColor:h,backgroundColor:z})=>q.jsx("span",{className:`
                ${k}
                ${B}
                label
            `,style:{color:h,backgroundColor:z},children:S?s.toUpperCase():s});try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalizar todas las letras",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font Color",name:"fontColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"background Color",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const M={title:"UI/labels/MyLabel",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},o={args:{label:"Custom Color label",fontColor:"#5517ac"}},l={args:{label:"Background Color label",size:"h1",fontColor:"#eeeeee",backgroundColor:"#000000"}};var t,c,u;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    allCaps: true
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,b,C;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    fontColor: '#5517ac'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,x,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Background Color label',
    size: 'h1',
    fontColor: '#eeeeee',
    backgroundColor: '#000000'
  }
}`,...(_=(x=l.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const j=["Basic","AllCaps","Secondary","CustomColor","BackgroundColor"];export{a as AllCaps,l as BackgroundColor,e as Basic,o as CustomColor,r as Secondary,j as __namedExportsOrder,M as default};
