(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video-list_videos__3f2m7"}},29:function(e,t,a){},4:function(e,t,a){e.exports={container:"video-item_container__3sloL",list:"video-item_list__1shg2",grid:"video-item_grid__1uTq1",video:"video-item_video__2OsGg",thumbnail:"video-item_thumbnail__2Rovm",metadata:"video-item_metadata__3Aqvb",title:"video-item_title__37Pm3",channel:"video-item_channel__25E8c"}},5:function(e,t,a){e.exports={header:"search-header_header__2mNvO",logo:"search-header_logo__3TPmk",title:"search-header_title__3Yntq",input:"search-header_input__3MuFs",button:"search-header_button__3BdHi",buttonImg:"search-header_buttonImg__1vCuW"}},50:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),i=a.n(s),r=(a(29),a(3)),o=a.n(r),l=a(6),u=a(10),d=a(4),p=a.n(d),h=a(0),b=function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,c="list"===e.display?p.a.list:p.a.grid;return Object(h.jsx)("li",{className:"".concat(p.a.container," ").concat(c),onClick:function(){return n(t)},children:Object(h.jsxs)("div",{className:p.a.video,children:[Object(h.jsx)("img",{className:p.a.thumbnail,src:a.thumbnails.medium.url,alt:a.title}),Object(h.jsxs)("div",{className:p.a.metadata,children:[Object(h.jsx)("p",{className:p.a.title,children:a.title}),Object(h.jsx)("p",{className:p.a.channel,children:a.channelTitle})]})]})})},m=Object(n.memo)(b),j=a(21),v=a.n(j),_=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(h.jsx)("ul",{className:v.a.videos,children:t&&t.map((function(e){return Object(h.jsx)(m,{video:e,onVideoClick:a,display:n},e.id)}))})},f=a(7),O=a.n(f),x=a(5),g=a.n(x),y=function(e){var t=e.onSearch,a=e.onPopular,c=Object(n.useRef)(),s=function(){var e=c.current.value;t(e)};return Object(h.jsxs)("header",{className:g.a.header,children:[Object(h.jsxs)("div",{className:g.a.logo,onClick:function(){a()},children:[Object(h.jsx)("img",{className:g.a.img,src:"./images/logo.png",alt:"logo"}),Object(h.jsx)("h1",{className:g.a.title,children:"Youtube"})]}),Object(h.jsx)("input",{ref:c,className:g.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&s()}}),Object(h.jsx)("button",{className:g.a.button,type:"submit",onClick:function(e){s()},children:Object(h.jsx)("img",{className:g.a.buttonImg,src:"./images/search.png",alt:"search"})})]})},w=Object(n.memo)(y),k=a(8),N=a.n(k),C=function(e){e.video;var t=e.video,a=t.id,n=t.snippet,c=n.title,s=n.channelTitle,i=n.description;return Object(h.jsxs)("section",{className:N.a.detail,children:[Object(h.jsx)("iframe",{title:"youtube",className:N.a.video,src:"https://www.youtube.com/embed/".concat(a),frameBorder:"0",type:"text/html",width:"100%",height:"500px",allowFullScreen:!0}),Object(h.jsx)("h2",{children:c}),Object(h.jsx)("h3",{children:s}),Object(h.jsx)("pre",{className:N.a.description,children:i})]})};var S=function(e){var t=e.youtube,a=Object(n.useState)([]),c=Object(u.a)(a,2),s=c[0],i=c[1],r=Object(n.useState)(null),d=Object(u.a)(r,2),p=d[0],b=d[1],m=Object(n.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.search(a);case 3:n=e.sent,i(n),b(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]),j=Object(n.useCallback)(Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),e.prev=1,e.next=4,t.mostPopular();case 4:a=e.sent,i(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[t]);return Object(n.useEffect)((function(){j()}),[j]),Object(h.jsxs)("div",{className:O.a.app,children:[Object(h.jsx)(w,{onSearch:m,onPopular:j}),Object(h.jsxs)("section",{className:O.a.content,children:[p&&Object(h.jsx)("div",{className:O.a.detail,children:Object(h.jsx)(C,{video:p})}),Object(h.jsx)("div",{className:O.a.list,children:Object(h.jsx)(_,{display:p?"grid":"list",videos:s,onVideoClick:function(e){b(e)}})})]})]})},P=a(11),R=a(22),I=a(23),E=a(24),q=a.n(E),B=new(function(){function e(t){Object(R.a)(this,e),this.youtube=q.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:t}})}return Object(I.a)(e,[{key:"mostPopular",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("/videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,a=t.data.items,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("/search",{params:{part:"snippet",q:t,maxResults:25,type:"video"}});case 2:return a=e.sent,n=a.data.items,e.abrupt("return",n.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{id:e.id.videoId})})));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyDrO_SafYQHzcw8GL7nwfbewz493sRJfnE");i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{youtube:B})}),document.getElementById("root"))},7:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},8:function(e,t,a){e.exports={detail:"video-detail_detail__3RMAS",description:"video-detail_description__3woBR"}}},[[50,1,2]]]);
//# sourceMappingURL=main.68c6bfb0.chunk.js.map