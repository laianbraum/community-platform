import{a as t}from"./jsx-runtime-913be41c.js";import{r as n}from"./index-2506bfc3.js";import{S as a}from"./Select-14502d64.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-11801e73.js";import"./setPrototypeOf-0bb37fbe.js";import"./isNativeReflectConstruct-98f790dd.js";import"./emotion-react.browser.esm-aba50b66.js";import"./theme-ui-css.esm-b19fe7ec.js";import"./index-0dfb046a.js";import"./theme-ui-components.esm-a8d58c50.js";const y={title:"Components/Select",component:a},r=()=>t(a,{value:"",placeholder:"A placeholder value",options:[{value:"value-one",label:"Value 1"},{value:"value-two",label:"Value 2"}]}),o=()=>{const[e,l]=n.useState();return t(a,{value:e,onChange:l,placeholder:"A placeholder value",isClearable:!0,options:[{value:"value-one",label:"Value 1"},{value:"value-two",label:"Value 2"}]})},u=()=>{const[e,l]=n.useState([{value:"value-three",label:"Value 3"}]);return t(a,{value:e,onChange:l,isMulti:!0,placeholder:"A placeholder value",options:[{value:"value-one",label:"Value 1"},{value:"value-two",label:"Value 2"},{value:"value-three",label:"Value 3"}]})},s=()=>{const[e,l]=n.useState();return t(a,{variant:"form",value:e,onChange:l,isMulti:!0,placeholder:"A placeholder value",options:[{value:"value-one",label:"Value 1"},{value:"value-two",label:"Value 2"}]})},i=()=>{const[e,l]=n.useState();return t(a,{variant:"icons",value:e,onChange:l,isMulti:!0,placeholder:"A placeholder value",options:[{label:"",options:[{imageElement:"",value:"verified",label:"Verified"}]},{label:"All Workspaces",options:[{imageElement:"",value:"verified",label:"Verified"}]},{label:"Others",options:[{imageElement:"",value:"verified",label:"Verified"}]}]})};var c,v,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Select value={''} placeholder="A placeholder value" options={[{
    value: 'value-one',
    label: 'Value 1'
  }, {
    value: 'value-two',
    label: 'Value 2'
  }]} />;
}`,...(p=(v=r.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var m,d,V;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [value, setValue] = useState();
  return <Select value={value} onChange={setValue} placeholder="A placeholder value" isClearable={true} options={[{
    value: 'value-one',
    label: 'Value 1'
  }, {
    value: 'value-two',
    label: 'Value 2'
  }]} />;
}`,...(V=(d=o.parameters)==null?void 0:d.docs)==null?void 0:V.source}}};var b,h,S;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([{
    value: 'value-three',
    label: 'Value 3'
  }]);
  return <Select value={value} onChange={setValue} isMulti={true} placeholder="A placeholder value" options={[{
    value: 'value-one',
    label: 'Value 1'
  }, {
    value: 'value-two',
    label: 'Value 2'
  }, {
    value: 'value-three',
    label: 'Value 3'
  }]} />;
}`,...(S=(h=u.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,g,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [value, setValue] = useState();
  return <Select variant="form" value={value} onChange={setValue} isMulti={true} placeholder="A placeholder value" options={[{
    value: 'value-one',
    label: 'Value 1'
  }, {
    value: 'value-two',
    label: 'Value 2'
  }]} />;
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var A,w,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [value, setValue] = useState();
  return <Select variant="icons" value={value} onChange={setValue} isMulti={true} placeholder="A placeholder value" options={[{
    label: '',
    options: [{
      imageElement: '',
      value: 'verified',
      label: 'Verified'
    }]
  }, {
    label: 'All Workspaces',
    options: [{
      imageElement: '',
      value: 'verified',
      label: 'Verified'
    }]
  }, {
    label: 'Others',
    options: [{
      imageElement: '',
      value: 'verified',
      label: 'Verified'
    }]
  }]} />;
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const z=["Default","Clearable","MultipleSelect","FormSelect","SelectWithIcons"];export{o as Clearable,r as Default,s as FormSelect,u as MultipleSelect,i as SelectWithIcons,z as __namedExportsOrder,y as default};
//# sourceMappingURL=Select.stories-a4660946.js.map
