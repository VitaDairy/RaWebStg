(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7590],{6588:function(e,t,a){Promise.resolve().then(a.bind(a,2294))},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return i.a}});var n=a(5601),i=a.n(n)},6463:function(e,t,a){"use strict";var n=a(1169);a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}}),a.o(n,"useSearchParams")&&a.d(t,{useSearchParams:function(){return n.useSearchParams}})},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return l},getImageProps:function(){return s}});let n=a(9920),i=a(497),o=a(8173),r=n._(a(1241));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let l=o.Image},2294:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(7437),i=a(506),o=a(4088),r=a(3874),s=a(2265);function l(){let[e,t]=(0,s.useState)(null),[a,l]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{(async()=>{l(!0);try{let e=await r.ZP.getWebappLinkRule();t(null==e?void 0:e.response[0])}catch(e){console.log(e)}finally{l(!1)}})()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{title:"Thể lệ",inputSearch:!1,showPoint:!1,showBack:!0}),a?(0,n.jsx)("div",{className:"w-full h-[calc(100vh-80px)] flex items-center justify-center",children:(0,n.jsx)(o.P.spinner,{className:"w-10 h-10 animate-spin"})}):e?(0,n.jsx)("div",{className:"overflow-hidden",style:{width:"".concat(window.innerWidth,"px"),height:"calc(".concat(window.innerHeight,"px - 80px)")},children:(0,n.jsx)("iframe",{src:e.deepLink,className:"w-full h-full"})}):(0,n.jsx)("div",{className:"w-full h-[calc(100vh-80px)] flex items-center justify-center",children:(0,n.jsx)("span",{className:"text-black",children:"Kh\xf4ng c\xf3 th\xf4ng tin"})})]})}},506:function(e,t,a){"use strict";var n=a(7437),i=a(6514),o=a(4380),r=a(6648),s=a(6463);t.Z=e=>{let{title:t,inputSearch:a=!0,showPoint:l=!0,showBack:c=!1,backUrl:u="",onClickBackURl:d=null,showInputVoucher:h=!1,onClickShowInputVoucher:p}=e,v=(0,s.useRouter)(),m=(0,s.usePathname)();return(0,n.jsxs)("header",{className:"".concat(m.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 sticky top-0 left-0 z-10"),children:[(0,n.jsx)("div",{className:"flex justify-between items-center"}),(0,n.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,n.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[c&&(0,n.jsx)(i.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(d){d();return}if(u){v.push(u);return}v.back()}}),t]}),l&&(0,n.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,n.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,n.jsx)(r.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),h&&(0,n.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,n.jsx)("button",{onClick:()=>{p&&p(),v.push("/qr/detail")},children:(0,n.jsx)(r.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),a&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,n.jsx)(o.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,n.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},4088:function(e,t,a){"use strict";a.d(t,{P:function(){return i}});var n=a(7437);let i={spinner:e=>(0,n.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e,width:"16",height:"16",children:(0,n.jsxs)("g",{fill:"#00acd6","fill-rule":"evenodd","clip-rule":"evenodd",children:[(0,n.jsx)("path",{d:"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z",fill:"white"}),(0,n.jsx)("path",{d:"M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"})]})}),pin:e=>(0,n.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.5 8.49478C8.604 8.49478 9.5 7.59934 9.5 6.49606C9.5 5.39278 8.604 4.49738 7.5 4.49738C6.396 4.49738 5.5 5.39278 5.5 6.49606C5.5 7.59934 6.396 8.49478 7.5 8.49478Z",stroke:"#000000","stroke-linecap":"square"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.5 6.49606C13.5 11.4928 8.5 14.4909 7.5 14.4909C6.5 14.4909 1.5 11.4928 1.5 6.49606C1.5 3.18522 4.187 0.5 7.5 0.5C10.813 0.5 13.5 3.18522 13.5 6.49606Z",stroke:"#000000","stroke-linecap":"square"})]})}},3874:function(e,t,a){"use strict";a.d(t,{ZP:function(){return u}});let n=new Map,i=async e=>{let{url:t,method:a,body:o,authorization:r,headers:s={},isGetCache:l=!1,isUpdateCache:c=!1,ttl:u=9e4}=e;try{let e={"Content-Type":"application/json",...s};r&&(e.Authorization=r),c&&(e.Priority="low");let d=t;("GET"===a||"DELETE"===a)&&(o&&Object.keys(o).length>0&&(d="".concat(t,"?").concat(new URLSearchParams(o).toString())),o=void 0);let h=o?JSON.stringify(o):void 0,p=Date.now();if(l&&n.has(t)){let{response:e,timestamp:l}=n.get(t),c=p-l;if(c<u)return console.log("Serving cached response for ".concat(t)),c>6e4&&i({url:t,method:a,body:o,authorization:r,headers:s,isGetCache:!1,isUpdateCache:!0}),e}let v=await fetch(d,{method:a,headers:e,body:h});return c&&n.set(d,{response:v,timestamp:p}),null==v?void 0:v.json()}catch(e){return console.log(e),{error:e,status:500}}},o="https://api-stg-v2.vitadairyvietnam.vn",r=()=>{try{var e,t;let a=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",n=JSON.parse(a);return(null==n?void 0:null===(t=n.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},s=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],l=0,c=async e=>{var t,a,n,s;let{page:l=0,size:c=10,body:u}=e,d=await i({url:"".concat(o,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:0,size:c,eventCode:621,...u}}),h=null==d?void 0:null===(a=d.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.data,p=[];for(let e=1;e<=(null==d?void 0:null===(s=d.response)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:n.total);e+=1)p.push(i({url:"".concat(o,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:e,size:10,eventCode:621,...u},isGetCache:!0,isUpdateCache:!0}).then(e=>{var t,a;h=h.concat(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.data)}));return await Promise.all(p),h&&(d.response.data.data=h),d};var u={getUser:async e=>{let{isGetCache:t=!0,isUpdateCache:a=!0}=e;return await i({url:"".concat(o,"/api-v3/loyalty/v1/user"),method:"GET",authorization:r(),isGetCache:t,isUpdateCache:a})},getNotificationUnread:async()=>await i({url:"".concat(o,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0}),getMyRewards:async()=>await i({url:"".concat(o,"/v4/gs/user-gifts"),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0}),sendOTP:async(e,t)=>"LOGIN"===t?await i({url:"".concat(o,"/api-v3/loyalty/send-zalo"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phone:e,source:"LOGIN_WA"}}):await i({url:"".concat(o,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:r()}),verifyOTP:async(e,t)=>await i({url:"".concat(o,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:r()}),getNotifications:async e=>{let{page:t=1,size:a=20}=e;return await i({url:"".concat(o,"/api-v3/noti/user/noti"),method:"GET",authorization:r(),body:{page:t,size:a},isGetCache:!0,isUpdateCache:!0})},getDetailNotifications:async e=>{let{id:t,page:a=1,size:n=20}=e;return await i({url:"".concat(o,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:r()})},readDetailNotifications:async e=>{let{id:t}=e;return await i({url:"".concat(o,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:r(),body:{id:t}})},getAddress:async e=>{let{auth:t,isGetCache:a=!0,isUpdateCache:n=!0}=e;return await i({url:"".concat(o,"/api/recipient/me"),method:"GET",authorization:t||r(),isGetCache:a,isUpdateCache:n})},logout:async()=>await i({url:"".concat(o,"/api/user/logout"),method:"POST",authorization:r()}),verifyPhoneNumber:async e=>await i({url:"".concat(o,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:r(),body:{phoneNumber:e}}),getProvinces:async()=>await i({url:"".concat(o,"/api/province/vn"),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0}),getWardsAndDistricts:async e=>{let{code:t}=e;return await i({url:"".concat(o,"/api/province/parent/").concat(t),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0})},register:async e=>await i({url:"".concat(o,"/api/user/register"),method:"POST",body:e,headers:{webappname:"WA_SBPS_24",appversioncode:12,appversionname:"3.1.2"}}),login:async(e,t)=>await i({url:"".concat(o,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t,otpType:"LOGIN_WA"},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await i({url:"".concat(o,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:r()}),getQrCode:async e=>{let{qrCode:t}=e;return await i({url:"".concat(o,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:r(),body:{qrCode:t},headers:{appversioncode:12,appversionname:"3.1.2",webappname:"WA_SBPS_24"},isGetCache:!0,isUpdateCache:!0})},validateProduct:async e=>{let{qrCode:t,sku:a,mock:n=!0}=e;return n?((l+=1)>=s.length&&(l=0),{response:null,meta:{status:1e3},notification:{code:s[l]}}):await i({url:"".concat(o,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:r(),body:{qrCode:t,sku:a},headers:{Accept:"application/json",appversionname:"3.2.23",webappname:"WA_SBPS_24"}})},getGifts:async()=>await c({page:0,size:10,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>c({page:0,size:10,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:c,orderGift:async e=>{let{recipientSnapshot:t,userGiftSnapshot:a,userId:n}=e;return await i({url:"".concat(o,"/v4/os/orders"),method:"POST",body:{recipientSnapshot:t,userGiftSnapshot:a,userId:n},authorization:r()})},getEvents:async()=>await i({url:"".concat(o,"/api/system-feature"),method:"GET",body:{group:"WHEEL"},authorization:r(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"},isGetCache:!0,isUpdateCache:!0}),updateProfile:async e=>await i({url:"".concat(o,"/api/user/update-profile"),method:"PUT",body:e,authorization:r(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"}}),useVoucher:async e=>{let{userGiftId:t}=e;return await i({url:"".concat(o,"/v4/gs/user-gifts/reuse"),method:"POST",authorization:r(),body:{userGiftId:t}})},reSendSMS:async(e,t)=>await i({url:"".concat(o,"/api-v3/loyalty/send-sms"),method:"POST",body:{phone:e,source:"REGISTER"===t?"REGISTER":"CHANGE_PASSWORD"},authorization:r(),headers:{appversioncode:12,appversionname:"3.2.27"}}),getPartnerStatus:async()=>await i({url:"".concat(o,"/api-v3/loyalty/v1/user/notification/partner/status"),method:"GET",authorization:r(),body:null}),getWebappGuideline:async()=>await i({url:"".concat(o,"/api-v3/loyalty/v1/webapp/guideline/active"),method:"GET",authorization:r(),body:null}),getWebappLinkRule:async()=>await i({url:"".concat(o,"/api-v3/loyalty/v1/webapp/link-rule/active"),method:"GET",authorization:r(),body:null}),getWebappBanner:async()=>await i({url:"".concat(o,"/api-v3/loyalty/v1/webapp/banner/active"),method:"GET",authorization:r(),body:null})}},6514:function(e,t,a){"use strict";var n=a(2265);let i=n.forwardRef(function(e,t){let{title:a,titleId:i,...o}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),a?n.createElement("title",{id:i},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=i},4380:function(e,t,a){"use strict";var n=a(2265);let i=n.forwardRef(function(e,t){let{title:a,titleId:i,...o}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),a?n.createElement("title",{id:i},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=i}},function(e){e.O(0,[8173,2971,7023,1744],function(){return e(e.s=6588)}),_N_E=e.O()}]);