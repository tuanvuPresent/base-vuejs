(function(e){function n(n){for(var r,i,c=n[0],u=n[1],l=n[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0abc2b":"a5d5fe83","chunk-2d0af83c":"9c7be3cf","chunk-2d0b1684":"4c1bb488","chunk-2d0cf6b2":"2fb942f6","chunk-2d21ee52":"76857729"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;o=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var p=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},aced:function(e){e.exports=JSON.parse('{"$vuetify":{"badge":"Huy hiệu","close":"Đóng","dataIterator":{"noResultsText":"Không tìm thấy kết quả","loadingText":"Đang tải các mục ..."},"dataTable":{"itemsPerPageText":"Hàng trên trang:","ariaLabel":{"sortDescending":"Sorted descending.","sortAscending":"Sorted ascending.","sortNone":"Not sorted.","activateNone":"Activate to remove sorting.","activateDescending":"Activate to sort descending.","activateAscending":"Activate to sort ascending."},"sortBy":"Sort by"},"dataFooter":{"itemsPerPageText":"Hàng trên trang:","itemsPerPageAll":"Tất cả","nextPage":"Next page","prevPage":"Previous page","firstPage":"First page","lastPage":"Last page","pageText":"{0}-{1} của {2}"},"datePicker":{"itemsSelected":"{0} selected","nextMonthAriaLabel":"Next month","nextYearAriaLabel":"Next year","prevMonthAriaLabel":"Previous month","prevYearAriaLabel":"Previous year"},"noDataText":"Không có dữ liệu","carousel":{"prev":"Previous visual","next":"Next visual","ariaLabel":{"delimiter":"Carousel slide {0} of {1}"}},"calendar":{"moreEvents":"{0} more"},"fileInput":{"counter":"{0} files","counterSize":"{0} files ({1} in total)"},"timePicker":{"am":"AM","pm":"PM"},"pagination":{"ariaLabel":{"wrapper":"Pagination Navigation","next":"Next page","previous":"Previous page","page":"Goto Page {0}","currentPage":"Current Page, Page {0}"}},"rating":{"ariaLabel":{"icon":"Rating {0} of {1}"}}},"hello":"Xin chào bạn"}')},cd49:function(e,n,t){"use strict";t.r(n);t("e623"),t("e379"),t("5dc8"),t("37e1");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},o=[],i=t("750b"),c=Object(i["a"])({setup:function(){return Object(i["c"])((function(){})),{}},components:{}}),u=c,l=t("2877"),s=Object(l["a"])(u,a,o,!1,null,"453b41fe",null),p=s.exports,d=t("f309");r["a"].use(d["a"]);var f=new d["a"]({}),h=(t("d3b7"),t("8c4f"));r["a"].use(h["a"]);var g=[{path:"/",component:function(){return t.e("chunk-2d21ee52").then(t.bind(null,"d808"))},children:[{path:"",component:function(){return t.e("chunk-2d0b1684").then(t.bind(null,"205e"))}}]},{path:"/",component:function(){return t.e("chunk-2d0af83c").then(t.bind(null,"0f3c"))},children:[{path:"network-error",component:function(){return t.e("chunk-2d0cf6b2").then(t.bind(null,"6442"))}},{path:"*",component:function(){return t.e("chunk-2d0abc2b").then(t.bind(null,"173b"))}}]}],b=new h["a"]({mode:"history",routes:g}),v=b,m=t("7bb1"),y={locale:"",dictionary:{vi:{messages:{required:function(e,n){return"Trường này là bắt buộc"},min_value:function(e,n){return"Giá trị phải lớn hơn hoặc bằng "+n},max_value:function(e,n){return"Giá trị phải nhỏ hơn hoặc bằng "+n}},custom:{username:{required:"Bạn chưa nhập tên đăng nhập",min:"Tên đăng nhập phải trên 4 ký tự"},password:{required:"Bạn chưa nhập mật khẩu",min:"Độ dài mật khẩu ngắn nhất cho phép là 4",max:"Độ dài mật khẩu dài nhất cho phép là 32"}}},en:{custom:{}}}};m["a"].localize("vi");var P=y,x=t("a925"),k=t("aced"),w=t("edd4");r["a"].use(x["a"]);var O={vi:k,en:w},T=new x["a"]({locale:"vi",messages:O,fallbackLocale:"vi"}),j=T;r["a"].config.productionTip=!1,r["a"].use(i["b"]),r["a"].use(m["b"],P),new r["a"]({i18n:j,router:v,vuetify:f,render:function(e){return e(p)}}).$mount("#app")},edd4:function(e){e.exports=JSON.parse('{"hello":"Hello"}')}});
//# sourceMappingURL=app.421ee9bc.js.map