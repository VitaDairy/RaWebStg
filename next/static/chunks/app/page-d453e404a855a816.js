(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6714:function(e,t,n){Promise.resolve().then(n.bind(n,4359))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var l=n(5601),i=n.n(l)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},getImageProps:function(){return a}});let l=n(9920),i=n(497),s=n(8173),r=l._(n(1241));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=s.Image},1847:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var l=n(7437),i=n(6648);function s(e){let{isOpen:t,togglePopup:n,pagePersonal:s=!1}=e;return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 w-full  ".concat(s?"mb-[30%]":""," z-10"),onClick:n,children:(0,l.jsxs)("div",{className:"mt-6 space-y-2 w-full p-4 z-[10000]",children:[(0,l.jsxs)("button",{onClick:()=>{window.location.href="tel:1900633559"},className:"w-full px-4 py-2 bg-white rounded-lg text-[#1F86F6] text-sm h-11 flex justify-between items-center ",children:[(0,l.jsx)(i.default,{src:"/static/sbps/icons/support.svg",alt:"Call",width:24,height:24,className:"pl-0"}),(0,l.jsx)("span",{className:"mx-auto text-sm font-medium",children:"Call 1900 633559"})]}),(0,l.jsx)("button",{onClick:n,className:"w-full px-4 py-2 bg-white rounded-lg h-11 font-semibold text-[#1F86F6]",children:"Cancel"})]})})})}},4359:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(7437),i=n(795),s=n(1292),r=n(1555),a=n(6981),c=n(6463),u=n(2265),o=n(1847);n(6648);let f={image_url:"/static/sbps/banner/banner_main.jpeg",image_alt:"Banner",width:343,height:180,key:"banner-join"};function d(){let e=(0,c.useRouter)(),t=()=>{e.push("/login")};(0,u.useEffect)(()=>{e.prefetch("/login"),e.prefetch("/instruct"),e.prefetch("/rules"),e.prefetch("/home"),e.prefetch("/register"),e.prefetch("/terms-of-service"),e.prefetch("/guide")},[]);let[n,d]=(0,u.useState)(!1),h=()=>{d(!n)};return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen bg-surface02 gap-8",children:[(0,l.jsx)(r.$T,{}),(0,l.jsx)(i.Z,{banner:f}),(0,l.jsxs)("h2",{className:"font-bold text-3xl text-center text-primary500",children:["T\xecm ‘M\xe3 dự thưởng’ ",(0,l.jsx)("br",{}),"X\xe1c thực ",(0,l.jsx)("br",{})," Nhận ngay 01 lượt quay ",(0,l.jsx)("br",{}),"May mắn"]}),(0,l.jsx)("div",{className:"w-full px-5",children:(0,l.jsx)("button",{className:"bg-gradient-button text-white font-bold h-12 px-4 rounded-full transition duration-300 min-w-full",onClick:()=>{t(),(0,a.QV)()},children:"THAM GIA NGAY"})}),(0,l.jsx)(s.default,{items:[{image_url:"/static/sbps/icons/medal.svg",imag_alt:"QR Code",name:"Hướng dẫn",url:"",key:"guide",onClick:()=>{e.push("/instruct"),(0,a.hy)()}},{image_url:"/static/sbps/icons/earth.svg",imag_alt:"QR Code",name:"Thể lệ ",url:"",key:"rules",onClick:()=>{e.push("/rules"),(0,a.rf)()}},{image_url:"/static/sbps/icons/call.svg",imag_alt:"QR Code",name:"Hotline",url:"",key:"hotline",onClick:()=>{(0,a.vP)(),h()}}]}),n&&(0,l.jsx)(o.Z,{isOpen:n,togglePopup:h})]})}},795:function(e,t,n){"use strict";var l=n(7437),i=n(6648);t.Z=e=>{let{banner:t}=e;return(0,l.jsx)(i.default,{src:t.image_url,alt:t.image_alt,width:t.width,height:t.height,className:"rounded-xl"})}},1292:function(e,t,n){"use strict";var l=n(7437),i=n(6648),s=n(6463);t.default=e=>{let{items:t=[]}=e,n=(0,s.useRouter)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex flex-row items-center justify-center min-w-full gap-12",children:null==t?void 0:t.map(e=>(0,l.jsxs)("div",{className:"items-center justify-center flex flex-col",onClick:()=>{if(e.url){n.push(e.url);return}e.onClick&&(null==e||e.onClick())},children:[(0,l.jsx)(i.default,{src:e.image_url,alt:e.imag_alt,width:52,height:52}),(0,l.jsx)("h2",{className:"text-primary500 text-[10px]",children:e.name})]},e.key))})})}},1555:function(e,t,n){"use strict";n.d(t,{$T:function(){return s},tq:function(){return r}});var l=n(7437),i=n(6648);let s=()=>(0,l.jsx)(i.default,{src:"/static/logo/logo.svg",alt:"LogoVTD",width:162,height:78}),r=()=>(0,l.jsx)(i.default,{src:"/static/logo/logo_white.svg",alt:"LogoWhiteVTD",width:78,height:78})}},function(e){e.O(0,[173,461,498,971,23,744],function(){return e(e.s=6714)}),_N_E=e.O()}]);