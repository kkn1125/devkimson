(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{59715:function(e,t,n){Promise.resolve().then(n.bind(n,20240)),Promise.resolve().then(n.bind(n,66587)),Promise.resolve().then(n.bind(n,91845)),Promise.resolve().then(n.bind(n,37388)),Promise.resolve().then(n.bind(n,26016)),Promise.resolve().then(n.t.bind(n,85935,23)),Promise.resolve().then(n.t.bind(n,29039,23)),Promise.resolve().then(n.t.bind(n,35631,23)),Promise.resolve().then(n.t.bind(n,73649,23)),Promise.resolve().then(n.bind(n,89097)),Promise.resolve().then(n.bind(n,81496)),Promise.resolve().then(n.bind(n,90749)),Promise.resolve().then(n.bind(n,86440)),Promise.resolve().then(n.bind(n,96604))},89097:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(57437);let o=["dalle-til-cover-edit.png","dalle-til-cover.png","PORTFOLIO-cover.png","prj-1.png","TIL-batch.png","TIL-bun.png","TIL-center.png","TIL-django.png","TIL-docker.png","TIL-express.png","TIL-fastify-adminjs-2.png","TIL-fastify-adminjs.png","TIL-git.png","TIL-java.png","TIL-javascript.png","TIL-jenkins.png","TIL-mariadb.png","TIL-mysql.png","TIL-nest.png","TIL-nest2.png","TIL-network.png","TIL-next.png","TIL-nginx.png","TIL-node.png","TIL-podman.png","TIL-python.png","TIL-react.png","TIL-redis.png","TIL-shell.png","TIL-spring-boot.png","TIL-spring.png","TIL-terminal.png","TIL-three.png","TIL-thymeleaf.png","TIL-vue.png","TIL.png","TIM-none.png","https://github.com/kkn1125/portfolio-renew/assets/71887242/fe2526d1-4d0b-49da-a2bc-340f08e90925","https://kkn1125.github.io/portfolio-renew/images/typoz/anyrequest.github.io_typoz_.png","https://github.com/kkn1125/kkn1125.github.io/assets/71887242/28c96bdb-5cc9-4eb9-82ec-712172fc538d","https://github.com/kkn1125/new-solitaire/assets/71887242/d49cf751-3b1c-4607-9c2d-09670005691e","https://github.com/kkn1125/portfolio-renew/assets/71887242/2f1eca26-9dfb-4e49-9ef0-9241b059b085","https://github.com/kkn1125/portfolio-renew/assets/71887242/2d8a4639-3ac0-476a-a538-cd695205e4b5","https://github.com/kkn1125/kkn1125.github.io/assets/71887242/633a5cd9-d596-452e-9bf9-8db809723b0e"];var i=n(21740),a=n(60304),l=n(29835),s=n(2265),c=function(){return(0,r.jsx)(a.Z,{sx:{backgroundColor:"inherit",p:3,"*":{color:e=>e.palette.text.primary}},children:(0,r.jsxs)(l.Z,{className:"noto-sans",component:"div",variant:"body2",align:"center",sx:{fontWeight:200},children:["Copyright 2021.",(0,r.jsx)(l.Z,{className:"noto-sans",component:"span",variant:"body2",textTransform:"uppercase",sx:{mx:1},children:i.S7}),"All rights reserved."]})})},d=n(13038);let u=async()=>{let{data:e}=await d.u.get("/v2/visitant");return e},h=async()=>{let{data:e}=await d.u.post("/v2/visitant");return e};var p=n(86440),m=n(91101),g=n(58493),f=n(94346),x=n(99148),v=n(65681),b=n(12794),j=n(48740),I=n(64862),Z=n(37681),k=n(368),y=n(47963),T=n(10470),L=n(70895),C=n(48205),w=n(43206),F=n(98351),E=n(93050),S=n(43850),P=n(87993),O=n(20703),z=n(8792);let M=[{name:"Blog",url:"/blog",target:null},{name:"Article",url:"/article",target:null},{name:"About",url:"/about",target:""},{name:"Portfolio",url:"https://kkn1125.github.io/portfolio-renew/",target:"_blank"}],B=[];var _=function(){let{hasNewBlogPost:e,hasNewArticle:t}=(0,m.Z)(),[n,o,c,d]=(0,g.Z)(),[_,A]=(0,s.useState)(!1),N=(0,k.Z)(),R=(0,s.useContext)(p.ColorModeContext),D=(0,y.Z)(N.breakpoints.up("md")),[G,q]=(0,s.useState)({yesterday:0,today:0,stack:0}),[K,U]=(0,s.useState)(null),H=()=>{U(null)};(0,s.useEffect)(()=>{B.includes(1)||(B.push(1),u().then(e=>{let{yesterday:t,today:n,total:r}=e;q({yesterday:t,today:n,stack:r})}).catch(e=>{}))},[]),(0,s.useEffect)(()=>{d?o>=150&&A(e=>!e||e):A(e=>!e&&e)},[o,d]),(0,s.useEffect)(()=>{h().then(e=>{let{yesterday:t,today:n,total:r}=e;q({yesterday:t,today:n,stack:r})}).catch(e=>{});let e=setInterval(()=>{u().then(e=>{let{yesterday:t,today:n,total:r}=e;q({yesterday:t,today:n,stack:r})}).catch(e=>{})},3e5);return()=>clearInterval(e)},[]);let V=(0,s.useMemo)(()=>G.yesterday.toLocaleString("ko")+"명",[G.yesterday]),W=(0,s.useMemo)(()=>G.today.toLocaleString("ko")+"명",[G.today]),X=(0,s.useMemo)(()=>G.stack.toLocaleString("ko")+"명",[G.stack]);return(0,r.jsxs)(T.Z,{component:L.Z,direction:"row",gap:2,elevation:5,sx:{p:1,position:"fixed",top:_?"-100%":5,left:"50%",transform:"translateX(-50%)",zIndex:5,transition:"0.5s ease-in-out"},children:[D&&(0,r.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(C.Z,{title:"어제 방문자",placement:"bottom",children:(0,r.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(Z.Z,{})}),(0,r.jsx)(l.Z,{variant:"caption",color:"text.secondary",children:V})]})}),(0,r.jsx)(C.Z,{title:"오늘 방문자",placement:"bottom",children:(0,r.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(I.Z,{})}),(0,r.jsx)(l.Z,{variant:"caption",color:"text.secondary",children:W})]})}),(0,r.jsx)(C.Z,{title:"누적 방문자",placement:"bottom",children:(0,r.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(x.Z,{})}),(0,r.jsx)(l.Z,{variant:"caption",color:"text.secondary",children:X})]})})]}),(0,r.jsx)(C.Z,{title:"DARK MODE",placement:"bottom",children:(0,r.jsx)(w.Z,{onClick:function(){R.toggleColorMode()},size:"large",children:"dark"===N.palette.mode?(0,r.jsx)(b.Z,{}):(0,r.jsx)(f.Z,{})})}),(0,r.jsx)(C.Z,{title:"HOME",placement:"bottom",children:(0,r.jsx)(w.Z,{component:z.default,href:"/",size:"large",children:(0,r.jsx)(O.default,{width:24,height:24,src:i.Sz+"/logo_color.png",alt:"logo"})})}),(0,r.jsxs)(a.Z,{sx:{position:"relative",flexGrow:1,display:{xs:"flex",md:"none"},zIndex:5},children:[(0,r.jsx)(w.Z,{size:"large",onClick:e=>{U(e.currentTarget)},color:"inherit",children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(F.Z,{id:"menu-appbar",anchorEl:K,tabIndex:1,anchorOrigin:{vertical:"bottom",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!K,onClose:H,sx:{display:{xs:"block",md:"none"}},children:[...M,{name:"어제: "+V,url:null,target:null},{name:"오늘: "+W,url:null,target:null},{name:"누적: "+X,url:null,target:null}].map(n=>{let{name:o,url:i,target:s}=n;return(0,r.jsx)(E.Z,{onClick:H,sx:{justifyContent:"flex-end"},children:i?(0,r.jsxs)(L.Z,{component:z.default,direction:"row",alignItems:"center",href:i,target:null!=s?s:"_self",sx:{textDecoration:"none"},children:[(0,r.jsx)(S.Z,{color:"error",variant:"dot",invisible:!("blog"===o.toLowerCase()&&e()||"article"===o.toLowerCase()&&t()),children:(0,r.jsx)(l.Z,{component:"span",color:"text.primary",children:o})}),s&&(0,r.jsx)(v.Z,{sx:{color:"text.primary"}})]}):(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{color:"text.primary",children:o})})},o)})})]}),(0,r.jsxs)(a.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[(0,r.jsx)(C.Z,{title:"BLOG",placement:"bottom",children:(0,r.jsx)(P.Z,{size:"small",component:z.default,href:"/blog",sx:{color:"text.secondary"},children:(0,r.jsx)(S.Z,{color:"error",variant:"dot",invisible:!e(),children:(0,r.jsx)(l.Z,{variant:"caption",children:"Blog"})})})}),(0,r.jsx)(C.Z,{title:"ARTICLE",placement:"bottom",children:(0,r.jsx)(P.Z,{size:"small",component:z.default,href:"/article",sx:{color:"text.secondary"},children:(0,r.jsx)(S.Z,{color:"error",variant:"dot",invisible:!t(),children:(0,r.jsx)(l.Z,{variant:"caption",children:"Article"})})})}),(0,r.jsx)(C.Z,{title:"ABOUT",placement:"bottom",children:(0,r.jsx)(P.Z,{size:"small",component:z.default,href:"/about",sx:{color:"text.secondary"},children:(0,r.jsx)(l.Z,{variant:"caption",children:"About"})})}),(0,r.jsx)(C.Z,{title:"PORTFOLIO",placement:"bottom",children:(0,r.jsx)(P.Z,{size:"small",component:z.default,href:"/portfolio-renew/",target:"_blank",startIcon:(0,r.jsx)(v.Z,{fontSize:"inherit"}),sx:{color:"text.secondary"},children:(0,r.jsx)(l.Z,{variant:"caption",children:"Portfolio"})})})]})]})},A=n(88700),N=n(99940),R=n(76676),D=n(47907),G=function(e){let{children:t}=e,n=(0,D.usePathname)();return(0,s.useLayoutEffect)(()=>{o.map(e=>{new Image().src=e.startsWith("http")?e:"/assets/images/post/covers/"+e})},[]),(0,s.useEffect)(()=>{let e=document.querySelector("main");e&&e.scrollTo({left:0,top:0,behavior:"instant"})},[n]),(0,s.useEffect)(()=>{(null===localStorage.getItem("ChannelIO.UserName")||""===localStorage.getItem("ChannelIO.UserName"))&&localStorage.setItem("ChannelIO.UserName","devkimson-blog-user-"+(0,A.k$)()),N.ve(),N.xr({pluginKey:i.lg})},[]),(0,r.jsxs)(a.Z,{id:"app",sx:{backgroundColor:e=>e.palette.background.default},children:[(0,r.jsx)(_,{}),(0,r.jsx)(R.Z,{}),(0,r.jsx)(L.Z,{id:"container",sx:{position:"relative","&::before":{zIndex:1,pointerEvents:"none",position:"absolute",top:0,left:0,content:'""',display:"block",width:"100%",height:"100%",backgroundImage:e=>{let t=e.palette.background.default;return"linear-gradient(".concat(t,"ff 5px, ").concat(t,"00 25px, ").concat(t,"00 calc(100% - 25px), ").concat(t,"ff calc(100% - 5px))")}}},children:(0,r.jsx)(a.Z,{component:"main",sx:{flex:1,backgroundColor:"inherit"},children:t})}),(0,r.jsx)(c,{})]})}},81496:function(e,t,n){"use strict";n.r(t),n.d(t,{BlogCoverContext:function(){return a},BlogCoverDispatchContext:function(){return l},InitializeValue:function(){return i}});var r=n(57437),o=n(2265);let i={cover:""},a=(0,o.createContext)(i),l=(0,o.createContext)(e=>{}),s=(e,t)=>{switch(t.type){case"update":return{...e,cover:t.image||""};case"remove":return{...e,cover:""};default:return e}};t.default=function(e){let{children:t}=e,[n,c]=(0,o.useReducer)(s,i);return(0,r.jsx)(l.Provider,{value:c,children:(0,r.jsx)(a.Provider,{value:n,children:t})})}},86440:function(e,t,n){"use strict";n.r(t),n.d(t,{ColorModeContext:function(){return u},default:function(){return h}});var r=n(57437),o={background:{default:"#0A1929",paper:"#0D2137"},primary:{main:"#3F51B5"},secondary:{main:"#7986CB",dark:"#303F9F"},info:{main:"#64B5F6"},success:{main:"#4CAF50",dark:"#2E7D32"},danger:{main:"#FF5252"},error:{main:"#F44336"},warning:{main:"#FFC107"},dark:{main:"#212121",contrastText:"#FFFFFF"},white:{main:"#FFFFFF"},text:{primary:"#FFFFFF",secondary:"#B0BEC5"},GrayText:"#9E9E9E",divider:"#37474F",contrastThreshold:3,tonalOffset:.2,typography:{fontFamily:'"Gowun Batang", "Noto Sans KR", serif'}};let i={primary:{main:"#5A67EE"},secondary:{main:"#DC57D0",dark:"#518071"},info:{main:"#0094C6"},success:{main:"#008F66",dark:"#296668"},danger:{main:"#FF686E"},error:{main:"#E3263E"},warning:{main:"#FFC55A"},dark:{main:"#777777",contrastText:"#ffffff"},white:{main:"#ffffff"},text:{primary:"#000000",secondary:"#565656"},GrayText:"#b1b1b1",divider:n(54090).Z[700],contrastThreshold:3,tonalOffset:.2,background:{default:"#ffffff"},typography:{fontFamily:'"Gowun Batang", "Noto Sans KR", serif'}};var a=n(21740),l=n(2990),s=n(62935),c=n(7155),d=n(2265);let u=(0,d.createContext)({toggleColorMode:()=>{},mode:Function()});var h=function(e){var t,n;let{children:h}=e,[p,m]=(0,d.useState)("light");(0,d.useLayoutEffect)(()=>{let e=()=>window.localStorage.getItem(a.bw),t=e()||"light";m(t),t||localStorage.setItem(a.bw,t);let n=window.matchMedia("(prefers-color-scheme: dark)"),r=t=>{if(!e()){let e=t.matches?"dark":"light";m(e),localStorage.setItem(a.bw,e)}};return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]);let g=e=>({palette:{mode:e,..."light"===e?i:o}}),f=(0,d.useMemo)(()=>(0,l.Z)((0,s.Z)(g(p))),[p]);return(0,r.jsxs)(u.Provider,{value:{toggleColorMode:()=>{m(e=>{let t="light"===e?"dark":"light";return localStorage.setItem(a.bw,t),t})},mode:()=>p},children:[(0,r.jsx)("meta",{name:"theme-color",content:null==f?void 0:null===(n=f.palette)||void 0===n?void 0:null===(t=n.primary)||void 0===t?void 0:t.main}),(0,r.jsx)(c.Z,{theme:f,children:h})]})}},96604:function(e,t,n){"use strict";n.r(t),n.d(t,{VISITOR_INIT:function(){return r},VisitorProvider:function(){return d},visitorContext:function(){return l},visitorDispatchContext:function(){return s}});var r,o=n(57437),i=n(2265);let a={user:null,visitCount:0,readInfo:{sawList:[]}};(r||(r={})).INIT="visitor/initial";let l=(0,i.createContext)({}),s=(0,i.createContext)(Function()),c=(e,t)=>(t.type,e),d=e=>{let{children:t}=e,[n,r]=(0,i.useReducer)(c,a);return(0,o.jsx)(s.Provider,{value:r,children:(0,o.jsx)(l.Provider,{value:n,children:t})})}},58493:function(e,t,n){"use strict";var r=n(2265);t.Z=function(){let e=(0,r.useRef)(0),[t,n]=(0,r.useState)(0),[o,i]=(0,r.useState)(0),[a,l]=(0,r.useState)(0),[s,c]=(0,r.useState)(0);function d(){let t=document.body.querySelector("main"),r=t.scrollTop,o=t.scrollHeight-t.clientHeight;e.current<r?n(()=>1):n(()=>0),l(()=>o),i(()=>r),e.current=r}return(0,r.useEffect)(()=>{let e=document.querySelector("main");return d(),e.addEventListener("scroll",d),()=>{e.removeEventListener("scroll",d)}},[]),(0,r.useEffect)(()=>{c(Math.floor(100*(o/a||0)))},[o,a]),(0,r.useMemo)(()=>[s,o,a,t],[s,o,a,t])}},35631:function(){},29039:function(){}},function(e){e.O(0,[8377,5722,6772,9568,6878,3204,7740,3236,7796,298,6868,7437,9558,1101,2971,8069,1744],function(){return e(e.s=59715)}),_N_E=e.O()}]);