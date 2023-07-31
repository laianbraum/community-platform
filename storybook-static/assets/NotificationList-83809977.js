import{a as t,j as c,F as d}from"./jsx-runtime-913be41c.js";import{r as f}from"./index-2506bfc3.js";import{n as m}from"./emotion-styled.browser.esm-09c6e9f5.js";import{B as p}from"./Button-c5e128ed.js";import{N as x}from"./NotificationItem-238a2565.js";import{a as u,C as y,T as N}from"./theme-ui-components.esm-a8d58c50.js";const g=m(u)`
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 10px 30px 10px 30px;
  text-align: center;
  width: 100%;
  }
`,o=e=>{const{notifications:i,markAllRead:a,markAllNotified:n}=e,r=e.sx||{};return f.useEffect(()=>{i.length&&n&&n()},[]),t(y,{sx:{padding:2,maxHeight:310,overflowY:"auto",...r},children:i.length?c(d,{children:[t(g,{style:{textAlign:"center"},children:"Notifications"}),i.map((l,s)=>t(x,{...l},s)),t(p,{style:{width:"100%",textAlign:"center",display:"flex",justifyContent:"center"},variant:"secondary","data-cy":"clear-notifications",onClick:()=>a&&a(),children:"Clear notifications"})]}):t(N,{sx:{display:"block",textAlign:"center"},"data-cy":"NotificationList: empty state",children:"Nada, no new notifications"})})};try{o.displayName="NotificationList",o.__docgenInfo={description:"",displayName:"NotificationList",props:{notifications:{defaultValue:null,description:"",name:"notifications",required:!0,type:{name:"UserNotificationList"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"any"}},markAllRead:{defaultValue:null,description:"",name:"markAllRead",required:!1,type:{name:"(() => void)"}},markAllNotified:{defaultValue:null,description:"",name:"markAllNotified",required:!1,type:{name:"(() => void)"}}}}}catch{}export{o as N};
//# sourceMappingURL=NotificationList-83809977.js.map
