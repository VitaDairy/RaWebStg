"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4343],{9795:function(t,n,e){e.d(n,{I:function(){return s},O:function(){return a}});var i=e(7437);let s=t=>{let{name:n,onClick:e}=t;return(0,i.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out",onClick:e,children:[(0,i.jsx)("span",{className:"absolute inset-0 rounded-full bg-white bg-clip-padding"}),(0,i.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:n})]})},a=t=>{let{name:n,onClick:e}=t;return(0,i.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent bg-gradient-button border-0 border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out w-full h-10",onClick:e,children:[(0,i.jsx)("span",{className:"absolute inset-0 rounded-full border border-transparent bg-white bg-clip-padding"}),(0,i.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:n})]})}},506:function(t,n,e){var i=e(7437),s=e(6514),a=e(4380),l=e(6648),c=e(6463);n.Z=t=>{let{title:n,inputSearch:e=!0,showPoint:r=!0,showBack:o=!1,backUrl:h="",onClickBackURl:g=null,showInputVoucher:m=!1,onClickShowInputVoucher:d}=t,u=(0,c.useRouter)(),b=(0,c.usePathname)();return(0,i.jsxs)("header",{className:"".concat(b.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,i.jsx)("div",{className:"flex justify-between items-center"}),(0,i.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,i.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[o&&(0,i.jsx)(s.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(g){g();return}if(h){u.push(h);return}u.back()}}),n]}),r&&(0,i.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,i.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,i.jsx)(l.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),m&&(0,i.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,i.jsx)("button",{onClick:()=>{d&&d(),u.push("/qr/detail")},children:(0,i.jsx)(l.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),e&&(0,i.jsx)("div",{className:"mt-6",children:(0,i.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,i.jsx)(a.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,i.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},7630:function(t,n,e){e.d(n,{Z:function(){return h}});var i=e(7437),s=e(6648),a=e(6463),l=e(9795);let c={image:"/static/sbps/banner/banner_login.png",contentHTML:"<p class='text-neutral900 text-sm mt-2 font-light' >Qu\xfd kh\xe1ch vui l\xf2ng <span class='text-neutral900 font-bold'>‘THỬ LẠI’</span> </p>",btn:{text:"THỬ LẠI",className:"bg-gradient-button text-white"},btn3:{text:"TRANG CHỦ",className:"bg-gradient-button text-white",link:"/home"}},r={text:"XEM QU\xc0 CỦA T\xd4I",className:"bg-gift text-white",link:"/gift"},o={error:{image:"/static/sbps/banner/banner_main.jpeg",title:"Th\xf4ng b\xe1o",content:"Cảm ơn qu\xfd kh\xe1ch h\xe0ng đ\xe3 mua h\xe0ng v\xe0 tham gia x\xe1c thự thẻ. Rất tiếc, m\xe3 thẻ n\xe0y sẽ được tham gia Chương tr\xecnh V\xf2ng quay may"},SBPS_BLOCK_ADDPOINT:{image:"/static/sbps/banner/banner_login.png",title:"T\xednh năng t\xedch m\xe3 tạm kho\xe1 24h",content:"Bạn đ\xe3 nhập sai m\xe3 thẻ 5 lần li\xean tiếp của c\xf9ng một m\xe3 QR. Vui l\xf2ng quay lại v\xe0o ng\xe0y mai để tiếp tục t\xedch xu.",btn:{text:"X\xc1C NHẬN",className:"bg-gradient-button text-white"},btn3:{text:"TRANG CHỦ",className:"bg-gradient-button text-white",link:"/home"}},SBPS_QR_NOEXIST:{...c,title:"QR Kh\xf4ng tồn tại"},SBPS_QR_USED:{...c,title:"QR đ\xe3 sử dụng"},SBPS_EXPIRE:{...c,title:"Lỗi QR hết hạn t\xedch xu"},SBPS_DEFAULT_ERROR:{...c,title:"Lỗi hệ thống"},SBPS_0110_WEBAPP:{image:"/static/sbps/banner/banner_login.png",title:"Bạn c\xf3 cơ hội được t\xedch xu v\xe0 tham gia V\xf2ng quay may mắn tr\xean ứng đụng VitaDairy - Đổi muỗng nhận qu\xe0",titleClass:"text-gift",content:"Tải ứng dụng để t\xedch xu ngay bạn nh\xe9.",type:"gift",btn:{text:"TẢI ỨNG DỤNG",className:"bg-gradient-button text-white",link:"http://onelink.to/vitadairy"},btn3:{text:"VỀ TRANG CHỦ",className:"bg-gradient-button text-white",link:"/home"}},"2024_SBPS_OTO":{image:"/static/sbps/gift/oto.png",title:"TR\xdaNG GIẢI ĐẶC BIỆT",titleClass:"text-gift font-semibold",content:"Ch\xfac mừng bạn tr\xfang Xe \xf4 t\xf4 con 5 chỗ Mazda 2 từ chương tr\xecnh V\xd2NG QUAY MAY MẮN RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0.",subContent:(0,i.jsxs)("p",{children:["Vui l\xf2ng v\xe0o mục ",(0,i.jsx)("span",{className:"font-bold",children:"Qu\xe0 của t\xf4i"})," để kiểm tra. Hoặc li\xean hệ hotline 1900 633 559 để được hỗ trợ."]}),type:"gift",btn:r},"2024_SBPS_IPHONE":{image:"/static/sbps/gift/iphone.png",title:"TR\xdaNG GIẢI NHẤT",titleClass:"text-gift font-semibold",content:"Ch\xfac mừng bạn tr\xfang Điện thoại iPhone 16 Pro 256GB từ chương tr\xecnh V\xd2NG QUAY MAY MẮN RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0.",subContent:(0,i.jsxs)("p",{children:["Vui l\xf2ng v\xe0o mục ",(0,i.jsx)("span",{className:"font-bold",children:"Qu\xe0 của t\xf4i"})," để kiểm tra. Hoặc li\xean hệ hotline 1900 633 559 để được hỗ trợ."]}),type:"gift",btn:r},"2024_SBPS_10TR":{image:"/static/sbps/gift/10tr.png",title:"TR\xdaNG GIẢI NH\xcc",titleClass:"text-gift font-semibold",content:"Ch\xfac mừng bạn tr\xfang Voucher Got It Evoucher 10.000.000 VNĐ từ chương tr\xecnh V\xd2NG QUAY MAY MẮN RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0.",subContent:(0,i.jsxs)("p",{children:["Vui l\xf2ng v\xe0o mục ",(0,i.jsx)("span",{className:"font-bold",children:"Qu\xe0 của t\xf4i"})," để kiểm tra. Hoặc li\xean hệ hotline 1900 633 559 để được hỗ trợ."]}),type:"gift",btn:r},"2024_SBPS_5TR":{image:"/static/sbps/gift/5tr.png",title:"TR\xdaNG GIẢI BA",titleClass:"text-gift font-semibold",content:"Ch\xfac mừng bạn tr\xfang Voucher Got It Evoucher 5.000.000 VNĐ từ chương tr\xecnh V\xd2NG QUAY MAY MẮN RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0.",subContent:(0,i.jsxs)("p",{children:["Vui l\xf2ng v\xe0o mục ",(0,i.jsx)("span",{className:"font-bold",children:"Qu\xe0 của t\xf4i"})," để kiểm tra. Hoặc li\xean hệ hotline 1900 633 559 để được hỗ trợ."]}),type:"gift",btn:r},"2024_SBPS_THE20K":{image:"/static/sbps/gift/20k.png",title:"TR\xdaNG GIẢI TƯ",titleClass:"text-gift font-semibold",content:"Ch\xfac mừng bạn tr\xfang Voucher Got It Thẻ điện thoại 20.000 VND từ chương tr\xecnh V\xd2NG QUAY MAY MẮN RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0.",subContent:(0,i.jsxs)("p",{children:["Vui l\xf2ng v\xe0o mục ",(0,i.jsx)("span",{className:"font-bold",children:"Qu\xe0 của t\xf4i"})," để kiểm tra. Hoặc li\xean hệ hotline 1900 633 559 để được hỗ trợ."]}),type:"gift",btn:r,btn2:{text:"T\xcdCH ĐIỂM TIẾP",className:"bg-white text-gift border border-gift",link:"/qr"}},"2024_SBPS_THE10K":{image:"/static/sbps/gift/10k.png",title:"TR\xdaNG GIẢI KHUYẾN KH\xcdCH",titleClass:"text-gift font-semibold",content:"Ch\xfac mừng bạn tr\xfang Voucher Got It Thẻ điện thoại 10.000 VND từ chương tr\xecnh V\xd2NG QUAY MAY MẮN RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0.",subContent:(0,i.jsxs)("p",{children:["Vui l\xf2ng v\xe0o mục ",(0,i.jsx)("span",{className:"font-bold",children:"Qu\xe0 của t\xf4i"})," để kiểm tra. Hoặc li\xean hệ hotline 1900 633 559 để được hỗ trợ."]}),type:"no-gift",btn:r,btn2:{text:"T\xcdCH ĐIỂM TIẾP",className:"bg-white text-gift border border-gift",link:"/qr"}},"2024_SBPS_CHUCMAYMAN":{image:"/static/sbps/gift/mayman.png",title:"Ch\xfac bạn may mắn lần sau",titleClass:"text-neutral900",content:"Đừng bỏ lỡ cơ hội tr\xfang giải, h\xe3y tiếp tục tham gia ngay!",subContent:(0,i.jsxs)("p",{children:["Chọn ",(0,i.jsx)("span",{className:"font-bold",children:"Tham gia tiếp"}),"để tiếp tục tham gia chương tr\xecnh v\xe0 c\xf3 cơ hội tr\xfang c\xe1c phần qu\xe0 hấp dẫn."]}),type:"no-gift",btn:{text:"THAM GIA TIẾP",className:"bg-gift text-white",link:"/qr"},btn2:{text:"VỀ TRANG CHỦ",className:"bg-white text-gift border border-gift",link:"/gift"}},"2024_SBPS_HETGIAI":{image:"/static/sbps/gift/hetqua.png",title:"Rất tiếc!",titleClass:"text-neutral900",content:"Chương tr\xecnh đ\xe3 kết th\xfac. Hẹn gặp lại bạn ở những chương tr\xecnh kh\xe1c.",contentClass:"text-neutral900",subContent:"",subContentClass:"",type:"no-gift",btn:{text:"VỀ TRANG CHỦ",className:"bg-white text-gift border border-gift",link:"/home"}}};function h(t){let{isOpen:n,togglePopup:e,code:c}=t,r=(0,a.useRouter)(),{image:h,title:g,content:m,btn:d,btn2:u,btn3:b,titleClass:x,contentClass:p,subContent:N,subContentClass:f,contentHTML:C}=o[c]||{};return(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,i.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,i.jsx)("div",{className:"flex justify-center mb-4 rounded-lg",children:(0,i.jsx)(s.default,{src:h,alt:"OTP Error",width:300,height:182,className:"rounded-lg"})}),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("p",{className:"text-error400 font-semibold ".concat(x),children:g}),m&&(0,i.jsx)("div",{className:"text-neutral900 text-sm mt-2 font-light ".concat(p),children:m}),C&&(0,i.jsx)("div",{className:"text-neutral900 text-sm mt-2 font-light ".concat(p),dangerouslySetInnerHTML:{__html:C}}),N&&(0,i.jsx)("div",{className:"text-neutral900 text-sm mt-2 font-light ".concat(f),children:N})]}),(0,i.jsx)("div",{className:"mt-6",children:d&&(0,i.jsx)("button",{onClick:()=>{e(),d.link&&r.push(d.link)},className:"w-full py-2 rounded-full text-sm font-bold h-10 ".concat(d.className),children:d.text})}),u&&(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("button",{onClick:()=>{e(),u.link&&r.push(u.link)},className:"w-full py-2 rounded-full text-sm font-bold h-10 ".concat(u.className),children:u.text})}),b&&(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)(l.O,{onClick:()=>{e(),b.link&&r.push(b.link)},name:b.text})})]})})})}},4191:function(t,n,e){e.d(n,{D:function(){return i}});function i(t,n){let e;return function(){for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];e&&clearTimeout(e),e=setTimeout(()=>{t.apply(this,s)},n)}}}}]);