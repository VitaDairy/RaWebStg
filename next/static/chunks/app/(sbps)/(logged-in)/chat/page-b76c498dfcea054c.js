(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8201],{5843:function(e,t,n){Promise.resolve().then(n.bind(n,1263))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=n(9920),i=n(497),s=n(8173),o=r._(n(1241));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=s.Image},1263:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7437),i=n(506),s=n(3056),o=n(6463),l=n(2265);function a(){let e=(0,o.useRouter)(),t=(0,o.usePathname)(),{user:n={},isLoggedIn:a}=(0,s.Z)(),[c,u]=(0,l.useState)(!1);if((0,l.useEffect)(()=>{u(!0)},[]),(0,l.useEffect)(()=>{!a&&c&&e.push("/")},[a,e,c]),(0,l.useEffect)(()=>("/chat"===t&&(document.body.style.overscrollBehaviorY="contain",document.body.style.overflowY="hidden"),()=>{document.body.style.overscrollBehaviorY="",document.body.style.overflowY=""}),[t]),!c)return(0,r.jsx)("div",{});let d=n.phoneNumber,f=n.name,h=n.point;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{title:"Nhắn tin",inputSearch:!1,showPoint:!1,showBack:!0,backUrl:"/home"}),(0,r.jsx)("div",{className:"overflow-hidden",style:{width:"".concat(window.innerWidth,"px"),height:"calc(".concat(window.innerHeight,"px - 80px)")},children:(0,r.jsx)("iframe",{src:"".concat("https://vitadairy-webview.vinbase.ai/staging","?username=").concat((null==f?void 0:f.trim())||"","&userphone=").concat(d,"&gender=1&coinra=").concat(h),className:"w-full h-full overflow-hidden"})})]})}},506:function(e,t,n){"use strict";var r=n(7437),i=n(6514),s=n(4380),o=n(6648),l=n(6463);t.Z=e=>{let{title:t,inputSearch:n=!0,showPoint:a=!0,showBack:c=!1,backUrl:u="",onClickBackURl:d=null,showInputVoucher:f=!1,onClickShowInputVoucher:h}=e,m=(0,l.useRouter)(),x=(0,l.usePathname)();return(0,r.jsxs)("header",{className:"".concat(x.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 sticky top-0 left-0 z-10"),children:[(0,r.jsx)("div",{className:"flex justify-between items-center"}),(0,r.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,r.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[c&&(0,r.jsx)(i.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(d){d();return}if(u){m.push(u);return}m.back()}}),t]}),a&&(0,r.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,r.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,r.jsx)(o.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),f&&(0,r.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,r.jsx)("button",{onClick:()=>{h&&h(),m.push("/qr/detail")},children:(0,r.jsx)(o.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),n&&(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,r.jsx)(s.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,r.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},6514:function(e,t,n){"use strict";var r=n(2265);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...s}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},s),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=i},4380:function(e,t,n){"use strict";var r=n(2265);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...s}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},s),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=i}},function(e){e.O(0,[8173,8461,4498,2971,7023,1744],function(){return e(e.s=5843)}),_N_E=e.O()}]);