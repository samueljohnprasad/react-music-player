(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(12),s=a.n(r),i=(a(17),a(4)),o=a.n(i),u=a(6),l=a(3),p=a(8),d=(a(19),a(7)),b=a(5),h=a(0),j=function(e){var t=e.setSongInfo,a=e.songInfo,n=e.audioref,c=e.currentSong,r=e.isPlaying,s=e.setIsPlaying,i=e.songs,p=e.setCurrentSong,j=e.setSongs,f=function(e){var t=i.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));j(t)},m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=i.findIndex((function(e){return e.id===c.id})),"skip-forward"!==t){e.next=5;break}return e.next=4,p(i[(a+1)%i.length]);case 4:f(i[(a+1)%i.length]);case 5:if("skip-back"!==t){e.next=15;break}if((a-1)%i.length!==-1){e.next=12;break}return e.next=9,p(i[i.length-1]);case 9:return f(i[i.length-1]),r&&n.current.play(),e.abrupt("return");case 12:return e.next=14,p(i[(a-1)%i.length]);case 14:f(i[(a-1)%i.length]);case 15:r&&n.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(a.animationPercentage,"%)")};return Object(h.jsxs)("div",{className:"player",children:[Object(h.jsxs)("div",{className:"time-control",children:[Object(h.jsx)("p",{children:m(a.currentTime)}),Object(h.jsxs)("div",{style:{background:"linear-gradient(to right,".concat(c.color[0],",").concat(c.color[1],")")},className:"track",children:[Object(h.jsx)("input",{min:0,max:a.duration||0,value:a.currentTime,onChange:function(e){var c=e.target.value;n.current.currentTime=e.target.value,t(Object(l.a)(Object(l.a)({},a),{},{currentTime:c}))},type:"range"}),Object(h.jsx)("div",{style:v,className:"animate-track"})]}),Object(h.jsx)("p",{children:a.duration?m(a.duration):"0:00"})]}),Object(h.jsxs)("div",{className:"play-control",children:[Object(h.jsx)(d.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(h.jsx)(d.a,{onClick:function(){r?(n.current.pause(),s(!r)):(n.current.play(),s(!r))},className:"play",size:"2x",icon:r?b.d:b.e}),Object(h.jsx)(d.a,{onClick:function(){return g("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},f=function(e){var t=e.currentSong;return Object(h.jsxs)("div",{className:"song-container",children:[Object(h.jsx)("img",{alt:t.name,src:t.cover}),Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("h3",{children:t.artist})]})},m=a(28);var g=function(){return[{name:"Sunrise Hike",artist:"Ruck P",cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=12133",id:Object(m.a)(),active:!0,color:["#AACEB0","#C6D7B5"]},{name:"By Chance",artist:"SwuM",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=15224",id:Object(m.a)(),active:!1,color:["#AACEB0","#C6D7B5"]},{name:"Roses n Flames",artist:"C Y G N",cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=14984",id:Object(m.a)(),active:!1,color:["#A958BE","#DD87E6"]},{name:"Sunrise Hike",artist:"Ruck P",cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=12133",id:Object(m.a)(),active:!1,color:["#AACEB0","#C6D7B5"]},{name:"By Chance",artist:"SwuM",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=15224",id:Object(m.a)(),active:!1,color:["#AACEB0","#C6D7B5"]},{name:"Roses n Flames",artist:"C Y G N",cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=14984",id:Object(m.a)(),active:!1,color:["#AACEB0","#C6D7B5"]},{name:"Sunrise Hike",artist:"Ruck P",cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=12133",id:Object(m.a)(),active:!1,color:["#AACEB0","#C6D7B5"]},{name:"By Chance",artist:"SwuM",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=15224",id:Object(m.a)(),active:!1,color:["#AACEB0","#C6D7B5"]},{name:"Roses n Flames",artist:"C Y G N",cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=14984",id:Object(m.a)(),active:!1,color:["#AACEB0","#C6D7B5"]}]};var v=function(e,t,a){t(a.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})})))},O=function(e){var t=e.isPlaying,a=e.audioref,n=e.song,c=e.songs,r=(e.audio,e.setCurrentSong),s=(e.id,e.setSongs),i=e.setIsPlaying,l=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:v(n,s,c),t||i(!t),a.current.play(),t&&a.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{onClick:l,className:"library-song ".concat(n.active?"selected":""),children:[Object(h.jsx)("img",{alt:n.name,src:n.cover}),Object(h.jsxs)("div",{className:"song-description",children:[Object(h.jsx)("h3",{children:n.name}),Object(h.jsx)("h4",{children:n.artist})]})]})},x=function(e){var t=e.setIsPlaying,a=e.libraryStatus,n=e.isPlaying,c=e.audioref,r=e.songs,s=e.setCurrentSong,i=e.setSongs;return Object(h.jsxs)("div",{className:"library ".concat(a?"active-library":""),children:[Object(h.jsx)("h2",{children:"Library"}),Object(h.jsx)("div",{className:"library-songs",children:r.map((function(e){return Object(h.jsx)(O,{songs:r,setCurrentSong:s,song:e,id:e.id,audioref:c,isPlaying:n,setSongs:i,setIsPlaying:t},e.id)}))})]})},y=function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(h.jsxs)("nav",{children:[Object(h.jsx)("h1",{children:"SamuelJohnPrasad"}),Object(h.jsxs)("button",{onClick:function(){return a(!t)},children:["Library",Object(h.jsx)(d.a,{icon:b.c})]})]})};var S=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(!0),a=Object(p.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(g()),i=Object(p.a)(s,2),d=i[0],b=i[1],m=Object(n.useState)(d[0]),O=Object(p.a)(m,2),S=O[0],C=O[1],k=Object(n.useState)(!1),w=Object(p.a)(k,2),B=w[0],P=w[1],A=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),N=Object(p.a)(A,2),I=N[0],E=N[1],D=function(e){var t=e.target.currentTime,a=e.target.duration,n=Math.round(t),c=Math.round(a),r=Math.round(n/c*100);E(Object(l.a)(Object(l.a)({},I),{},{currentTime:t,duration:a,animationPercentage:r}))},M=function(){var t=Object(u.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.findIndex((function(e){return e.id===S.id})),n=d[(a+1)%d.length],t.next=4,C(n);case 4:v(n,b,d),PluginArray&&e.current.play();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App ".concat(c?"library-active":""),children:[Object(h.jsx)(y,{libraryStatus:c,setLibraryStatus:r}),Object(h.jsx)(f,{currentSong:S}),Object(h.jsx)(j,{audioref:e,setIsPlaying:P,isPlaying:B,currentSong:S,setSongInfo:E,songInfo:I,songs:d,setCurrentSong:C,setSongs:b}),Object(h.jsx)(x,{songs:d,audioref:e,setCurrentSong:C,isPlaying:B,setIsPlaying:P,setSongs:b,libraryStatus:c}),Object(h.jsx)("audio",{audioref:e,onTimeUpdate:D,onLoadedMetadata:D,ref:e,src:S.audio,onEnded:M})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()}},[[26,1,2]]]);
//# sourceMappingURL=main.ddc721fa.chunk.js.map