(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9005],{3226:function(e,t,a){Promise.resolve().then(a.bind(a,7688))},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return n.a}});var o=a(5601),n=a.n(o)},6463:function(e,t,a){"use strict";var o=a(1169);a.o(o,"usePathname")&&a.d(t,{usePathname:function(){return o.usePathname}}),a.o(o,"useRouter")&&a.d(t,{useRouter:function(){return o.useRouter}}),a.o(o,"useSearchParams")&&a.d(t,{useSearchParams:function(){return o.useSearchParams}})},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return c},getImageProps:function(){return s}});let o=a(9920),n=a(497),i=a(8173),r=o._(a(1241));function s(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let c=i.Image},7688:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var o=a(7437),n=a(506),i=a(3874),r=a(6463),s=a(2265);function c(){let e=(0,r.useSearchParams)().get("id"),[t,a]=(0,s.useState)();return(0,s.useEffect)(()=>{i.ZP.getDetailNotifications({id:e}).then(t=>{var o;(null==t?void 0:null===(o=t.response)||void 0===o?void 0:o.readAt)||i.ZP.readDetailNotifications({id:e}),a(t.response)})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Z,{title:null==t?void 0:t.title,inputSearch:!1,showPoint:!1,showBack:!0}),(0,o.jsx)("div",{className:"flex flex-col p-2 text-center",children:(0,o.jsx)("div",{className:"text-sm text-black font-light block text-left",dangerouslySetInnerHTML:{__html:null==t?void 0:t.desc}})})]})}},506:function(e,t,a){"use strict";var o=a(7437),n=a(6514),i=a(4380),r=a(6648),s=a(6463);t.Z=e=>{let{title:t,inputSearch:a=!0,showPoint:c=!0,showBack:l=!1,backUrl:u="",onClickBackURl:d=null,showInputVoucher:h=!1,onClickShowInputVoucher:p}=e,m=(0,s.useRouter)(),v=(0,s.usePathname)();return(0,o.jsxs)("header",{className:"".concat(v.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 sticky top-0 left-0 z-10"),children:[(0,o.jsx)("div",{className:"flex justify-between items-center"}),(0,o.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,o.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[l&&(0,o.jsx)(n.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(d){d();return}if(u){m.push(u);return}m.back()}}),t]}),c&&(0,o.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,o.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,o.jsx)(r.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),h&&(0,o.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,o.jsx)("button",{onClick:()=>{p&&p(),m.push("/qr/detail")},children:(0,o.jsx)(r.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),a&&(0,o.jsx)("div",{className:"mt-6",children:(0,o.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,o.jsx)(i.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,o.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3874:function(e,t,a){"use strict";a.d(t,{ZP:function(){return u}});let o=new Map,n=async e=>{let{url:t,method:a,body:i,authorization:r,headers:s={},isGetCache:c=!1,isUpdateCache:l=!1,ttl:u=9e4}=e;try{let e={"Content-Type":"application/json",...s};r&&(e.Authorization=r),l&&(e.Priority="low");let d=t;("GET"===a||"DELETE"===a)&&(i&&Object.keys(i).length>0&&(d="".concat(t,"?").concat(new URLSearchParams(i).toString())),i=void 0);let h=i?JSON.stringify(i):void 0,p=Date.now();if(c&&o.has(t)){let{response:e,timestamp:c}=o.get(t),l=p-c;if(l<u)return console.log("Serving cached response for ".concat(t)),l>6e4&&n({url:t,method:a,body:i,authorization:r,headers:s,isGetCache:!1,isUpdateCache:!0}),e}let m=await fetch(d,{method:a,headers:e,body:h});return l&&o.set(d,{response:m,timestamp:p}),null==m?void 0:m.json()}catch(e){return console.log(e),{error:e,status:500}}},i="https://api-stg-v2.vitadairyvietnam.vn",r=()=>{try{var e,t;let a=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",o=JSON.parse(a);return(null==o?void 0:null===(t=o.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},s=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],c=0,l=async e=>{var t,a,o,s;let{page:c=0,size:l=10,body:u}=e,d=await n({url:"".concat(i,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:0,size:l,eventCode:621,...u}}),h=null==d?void 0:null===(a=d.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.data,p=[];for(let e=1;e<=(null==d?void 0:null===(s=d.response)||void 0===s?void 0:null===(o=s.data)||void 0===o?void 0:o.total);e+=1)p.push(n({url:"".concat(i,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:e,size:10,eventCode:621,...u},isGetCache:!0,isUpdateCache:!0}).then(e=>{var t,a;h=h.concat(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.data)}));return await Promise.all(p),h&&(d.response.data.data=h),d};var u={getUser:async e=>{let{isGetCache:t=!0,isUpdateCache:a=!0}=e;return await n({url:"".concat(i,"/api-v3/loyalty/v1/user"),method:"GET",authorization:r(),isGetCache:t,isUpdateCache:a})},getNotificationUnread:async()=>await n({url:"".concat(i,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0}),getMyRewards:async()=>await n({url:"".concat(i,"/v4/gs/user-gifts"),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0}),sendOTP:async(e,t)=>"LOGIN"===t?await n({url:"".concat(i,"/api-v3/loyalty/send-zalo"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phone:e,source:"LOGIN_WA"}}):await n({url:"".concat(i,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:r()}),verifyOTP:async(e,t)=>await n({url:"".concat(i,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:r()}),getNotifications:async e=>{let{page:t=1,size:a=20}=e;return await n({url:"".concat(i,"/api-v3/noti/user/noti"),method:"GET",authorization:r(),body:{page:t,size:a},isGetCache:!0,isUpdateCache:!0})},getDetailNotifications:async e=>{let{id:t,page:a=1,size:o=20}=e;return await n({url:"".concat(i,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:r()})},readDetailNotifications:async e=>{let{id:t}=e;return await n({url:"".concat(i,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:r(),body:{id:t}})},getAddress:async e=>{let{auth:t,isGetCache:a=!0,isUpdateCache:o=!0}=e;return await n({url:"".concat(i,"/api/recipient/me"),method:"GET",authorization:t||r(),isGetCache:a,isUpdateCache:o})},logout:async()=>await n({url:"".concat(i,"/api/user/logout"),method:"POST",authorization:r()}),verifyPhoneNumber:async e=>await n({url:"".concat(i,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:r(),body:{phoneNumber:e}}),getProvinces:async()=>await n({url:"".concat(i,"/api/province/vn"),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0}),getWardsAndDistricts:async e=>{let{code:t}=e;return await n({url:"".concat(i,"/api/province/parent/").concat(t),method:"GET",authorization:r(),isGetCache:!0,isUpdateCache:!0})},register:async e=>await n({url:"".concat(i,"/api/user/register"),method:"POST",body:e,headers:{webappname:"WA_SBPS_24",appversioncode:12,appversionname:"3.1.2"}}),login:async(e,t)=>await n({url:"".concat(i,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t,otpType:"LOGIN_WA"},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await n({url:"".concat(i,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:r()}),getQrCode:async e=>{let{qrCode:t}=e;return await n({url:"".concat(i,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:r(),body:{qrCode:t},headers:{appversioncode:12,appversionname:"3.1.2",webappname:"WA_SBPS_24"},isGetCache:!0,isUpdateCache:!0})},validateProduct:async e=>{let{qrCode:t,sku:a,mock:o=!0}=e;return o?((c+=1)>=s.length&&(c=0),{response:null,meta:{status:1e3},notification:{code:s[c]}}):await n({url:"".concat(i,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:r(),body:{qrCode:t,sku:a},headers:{Accept:"application/json",appversionname:"3.2.23",webappname:"WA_SBPS_24"}})},getGifts:async()=>await l({page:0,size:15,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>l({page:0,size:15,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:l,orderGift:async e=>{let{recipientSnapshot:t,userGiftSnapshot:a,userId:o}=e;return await n({url:"".concat(i,"/v4/os/orders"),method:"POST",body:{recipientSnapshot:t,userGiftSnapshot:a,userId:o},authorization:r()})},getEvents:async()=>await n({url:"".concat(i,"/api/system-feature"),method:"GET",body:{group:"WHEEL"},authorization:r(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"},isGetCache:!0,isUpdateCache:!0}),updateProfile:async e=>await n({url:"".concat(i,"/api/user/update-profile"),method:"PUT",body:e,authorization:r(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"}}),useVoucher:async e=>{let{userGiftId:t}=e;return await n({url:"".concat(i,"/v4/gs/user-gifts/reuse"),method:"POST",authorization:r(),body:{userGiftId:t}})},reSendSMS:async(e,t)=>await n({url:"".concat(i,"/api-v3/loyalty/send-sms"),method:"POST",body:{phone:e,source:"REGISTER"===t?"REGISTER":"CHANGE_PASSWORD"},authorization:r(),headers:{appversioncode:12,appversionname:"3.2.27"}})}},6514:function(e,t,a){"use strict";var o=a(2265);let n=o.forwardRef(function(e,t){let{title:a,titleId:n,...i}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),a?o.createElement("title",{id:n},a):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=n},4380:function(e,t,a){"use strict";var o=a(2265);let n=o.forwardRef(function(e,t){let{title:a,titleId:n,...i}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),a?o.createElement("title",{id:n},a):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=n}},function(e){e.O(0,[8173,2971,7023,1744],function(){return e(e.s=3226)}),_N_E=e.O()}]);