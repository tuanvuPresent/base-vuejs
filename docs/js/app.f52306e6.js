(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0abc2b":"87a8b3bc","chunk-2d0af83c":"9f664667","chunk-2d0b1684":"cf3f518e","chunk-2d0cf6b2":"5418b2dc","chunk-607115d2":"bb4cfe95"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-607115d2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0abc2b":"31d6cfe0","chunk-2d0af83c":"31d6cfe0","chunk-2d0b1684":"31d6cfe0","chunk-2d0cf6b2":"31d6cfe0","chunk-607115d2":"17f89b20"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/base-source-vuejs/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},aced:function(e){e.exports=JSON.parse('{"$vuetify":{"badge":"Huy hiệu","close":"Đóng","dataIterator":{"noResultsText":"Không tìm thấy kết quả","loadingText":"Đang tải các mục ..."},"dataTable":{"itemsPerPageText":"Hàng trên trang:","ariaLabel":{"sortDescending":"Sorted descending.","sortAscending":"Sorted ascending.","sortNone":"Not sorted.","activateNone":"Activate to remove sorting.","activateDescending":"Activate to sort descending.","activateAscending":"Activate to sort ascending."},"sortBy":"Sort by"},"dataFooter":{"itemsPerPageText":"Hàng trên trang:","itemsPerPageAll":"Tất cả","nextPage":"Next page","prevPage":"Previous page","firstPage":"First page","lastPage":"Last page","pageText":"{0}-{1} của {2}"},"datePicker":{"itemsSelected":"{0} selected","nextMonthAriaLabel":"Next month","nextYearAriaLabel":"Next year","prevMonthAriaLabel":"Previous month","prevYearAriaLabel":"Previous year"},"noDataText":"Không có dữ liệu","carousel":{"prev":"Previous visual","next":"Next visual","ariaLabel":{"delimiter":"Carousel slide {0} of {1}"}},"calendar":{"moreEvents":"{0} more"},"fileInput":{"counter":"{0} files","counterSize":"{0} files ({1} in total)"},"timePicker":{"am":"AM","pm":"PM"},"pagination":{"ariaLabel":{"wrapper":"Pagination Navigation","next":"Next page","previous":"Previous page","page":"Goto Page {0}","currentPage":"Current Page, Page {0}"}},"rating":{"ariaLabel":{"icon":"Rating {0} of {1}"}}},"hello":"Xin chào bạn"}')},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],i=n("750b"),c=Object(i["a"])({setup:function(){return Object(i["c"])((function(){})),{}},components:{}}),u=c,s=n("2877"),l=Object(s["a"])(u,a,o,!1,null,"453b41fe",null),d=l.exports,p=n("f309");r["a"].use(p["a"]);var h=new p["a"]({}),f=(n("d3b7"),n("8c4f"));r["a"].use(f["a"]);var g=[{path:"/",component:function(){return n.e("chunk-607115d2").then(n.bind(null,"d808"))},children:[{path:"",component:function(){return n.e("chunk-2d0b1684").then(n.bind(null,"205e"))}}]},{path:"/",component:function(){return n.e("chunk-2d0af83c").then(n.bind(null,"0f3c"))},children:[{path:"network-error",component:function(){return n.e("chunk-2d0cf6b2").then(n.bind(null,"6442"))}},{path:"*",component:function(){return n.e("chunk-2d0abc2b").then(n.bind(null,"173b"))}}]}],b=new f["a"]({mode:"hash",routes:g}),v=b,m=n("7bb1"),y={locale:"",dictionary:{vi:{messages:{required:function(e,t){return"Trường này là bắt buộc"},min_value:function(e,t){return"Giá trị phải lớn hơn hoặc bằng "+t},max_value:function(e,t){return"Giá trị phải nhỏ hơn hoặc bằng "+t}},custom:{username:{required:"Bạn chưa nhập tên đăng nhập",min:"Tên đăng nhập phải trên 4 ký tự"},password:{required:"Bạn chưa nhập mật khẩu",min:"Độ dài mật khẩu ngắn nhất cho phép là 4",max:"Độ dài mật khẩu dài nhất cho phép là 32"}}},en:{custom:{}}}};m["a"].localize("vi");var k=y,P=n("a925"),x=n("aced"),w=n("edd4");r["a"].use(P["a"]);var T={vi:x,en:w},A=new P["a"]({locale:"vi",messages:T,fallbackLocale:"vi"}),O=A;r["a"].config.productionTip=!1,r["a"].use(i["b"]),r["a"].use(m["b"],k),new r["a"]({i18n:O,router:v,vuetify:h,render:function(e){return e(d)}}).$mount("#app")},edd4:function(e){e.exports=JSON.parse('{"hello":"Hello"}')}});
//# sourceMappingURL=app.f52306e6.js.map