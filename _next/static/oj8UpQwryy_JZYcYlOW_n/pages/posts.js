(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{51:function(e,t,n){e.exports=n(145)},613:function(e,t,n){__NEXT_REGISTER_PAGE("/posts",function(){return e.exports=n(649),{page:e.exports.default}})},649:function(e,t,n){"use strict";n.r(t);var r=n(51),s=n.n(r),o=n(42),a=n.n(o),u=n(0),c=n.n(u),i=n(82),l=n.n(i),f=n(32),p=n(50),d=n.n(p),h=function(e){var t=e.show;return c.a.createElement("li",{className:"jsx-1341333550"},c.a.createElement(d.a,{as:"/p/".concat(t.id),href:"/post?id=".concat(t.id)},c.a.createElement("a",{className:"jsx-1341333550"},t.name)),c.a.createElement(a.a,{styleId:"1341333550",css:"li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}"}))};function m(e,t,n,r,s,o,a){try{var u=e[o](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,s)}function w(e){return function(){var t=this,n=arguments;return new Promise(function(r,s){var o=e.apply(t,n);function a(e){m(o,r,s,a,u,"next",e)}function u(e){m(o,r,s,a,u,"throw",e)}a(void 0)})}}var x=function(e){return c.a.createElement(f.a,null,c.a.createElement("h1",{className:"jsx-2671586309"},"Batman TV Shows"),c.a.createElement("ul",{className:"jsx-2671586309"},e.shows.map(function(e){var t=e.show;return c.a.createElement(h,{key:t.id,show:t})})),c.a.createElement(a.a,{styleId:"2671586309",css:"h1.jsx-2671586309{font-family:'Arial';}ul.jsx-2671586309{padding:0;}"}))};x.getInitialProps=w(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("Show data fetched. Count: ".concat(n.length)),e.abrupt("return",{shows:n});case 8:case"end":return e.stop()}},e,this)}));t.default=x},81:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var s=new XMLHttpRequest;for(var o in s.open(t.method||"get",e,!0),t.headers)s.setRequestHeader(o,t.headers[o]);function a(){var e,t=[],n=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(s,o,a){t.push(o=o.toLowerCase()),n.push([o,a]),r[o]=(e=r[o])?e+","+a:a}),{ok:2==(s.status/100|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:a,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}s.withCredentials="include"==t.credentials,s.onload=function(){n(a())},s.onerror=r,s.send(t.body||null)})}},82:function(e,t,n){e.exports=window.fetch||(window.fetch=n(81).default||n(81))}},[[613,1,0]]]);