(this.webpackJsonpsleep_scheduler=this.webpackJsonpsleep_scheduler||[]).push([[0],{34:function(e,n,a){e.exports=a(47)},47:function(e,n,a){"use strict";a.r(n);var t,l=a(0),o=a.n(l),r=a(6),c=a.n(r),u=a(3),i=a(2),b=a(5),s=a(13);!function(e){e.CREATE_SCHEDULE="CREATE_SCHEDULE",e.DELETE_SCHEDULE="DELETE_SCHEDULE",e.COPIED_SCHEDULE="COPIED_SCHEDULE",e.POSITION_CHANGE_SCHEDULE="POSITION_CHANGE_SCHEDULE",e.SIZE_CHANGE_SCHEDULE="SIZE_CHANGE_SCHEDULE"}(t||(t={}));var d,p=t,v=Object(s.createAction)(p.CREATE_SCHEDULE)(),f=Object(s.createAction)(p.DELETE_SCHEDULE)(),m=Object(s.createAction)(p.COPIED_SCHEDULE)(),h=Object(s.createAction)(p.POSITION_CHANGE_SCHEDULE)(),E=Object(s.createAction)(p.SIZE_CHANGE_SCHEDULE)(),g=i.a.div((function(e){return"\n  grid-area: ".concat(e.area,";\n")}));!function(e){e.Gray="#424242",e.RoyalBlue="royalblue",e.LightGray="#70757a",e.WhiteSmoke="whitesmoke"}(d||(d={}));var y,O,x=d;function j(){var e=Object(u.a)(["\ncolor: ",";\nfont-size: ",";\nfont-family: ",";\nmargin-top: 20px;\n"]);return j=function(){return e},e}!function(e){e.Mairyo="Mairyo",e.Roboto="Roboto"}(y||(y={})),function(e){e[e.Small=13]="Small",e[e.Medium=16]="Medium",e[e.Large=20]="Large"}(O||(O={}));var S=function(e){var n=e.name;return o.a.createElement(k,null,n)},k=i.a.div(j(),x.LightGray,O.Small,y.Roboto),C=a(16),L=a(17),w=a(32);function D(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function _(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?D(a,!0).forEach((function(n){Object(C.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var H=function(e){var n=e.options,a=Object(l.useState)({value:null,label:null}),t=Object(L.a)(a,2),r=t[0],c=t[1];return o.a.createElement(w.a,{value:r,onChange:function(e){c(e)},options:n,styles:P})},P={option:function(e){return _({},e,{color:x.LightGray})},control:function(e){return _({},e,{fontFamily:y.Roboto,color:x.LightGray})},menu:function(e){return _({},e,{fontFamily:y.Roboto,color:x.LightGray})}},z=function(){return o.a.createElement("div",null,R.map((function(e,n){return o.a.createElement("div",{key:"question".concat(n)},o.a.createElement(S,{name:e.name}),o.a.createElement(H,{options:e.options}))})))},R=[{name:"\u300c\u3053\u306e\u6642\u9593\u306b\u5bdd\u308b\u305e\u300d\u3068\u6c7a\u3081\u305f\u6642\u9593\u306e60\u5206\u524d\u3001\u81ea\u5206\u306f\u3069\u3093\u306a\u6c17\u5206\u3060\u3063\u305f\u304b",options:[{value:"0",label:"\u30cf\u30c3\u30ad\u30ea\u76ee\u304c\u899a\u3081\u3066\u3044\u3066\u5143\u6c17\u3060\u3063\u305f"},{value:"1",label:"\u75b2\u308c\u3066\u306f\u3044\u305f\u304c\u30d8\u30c8\u30d8\u30c8\u3067\u306f\u306a\u3044"},{value:"2",label:"\u30cf\u30c3\u30ad\u30ea\u76ee\u304c\u899a\u3081\u3066\u3044\u305f\u304c\u30d8\u30c8\u30d8\u30c8\u3060\u3063\u305f"},{value:"3",label:"\u30cf\u30c3\u30ad\u30ea\u76ee\u304c\u899a\u3081\u3066\u3044\u3066\u5143\u6c17\u3060\u3063\u305f"},{value:"4",label:"\u3061\u3087\u3063\u3068\u3060\u3051\u7720\u6c17\u3092\u611f\u3058\u3066\u3044\u305f"},{value:"5",label:"\u8d77\u304d\u3066\u3044\u308b\u306e\u304c\u96e3\u3057\u3044\u3050\u3089\u3044\u7720\u304b\u3063\u305f"}]},{name:"\u6628\u591c\u306f\u30c8\u30fc\u30bf\u30eb\u3067\u4f55\u6642\u9593\u7720\u308c\u305f\u304b",options:[{value:"0",label:"\u301c2"},{value:"1",label:"2.5"},{value:"2",label:"3"},{value:"3",label:"3.5"},{value:"4",label:"4"},{value:"5",label:"4.5"},{value:"6",label:"5"},{value:"7",label:"5.5"},{value:"8",label:"6"},{value:"9",label:"6.5"},{value:"10",label:"7"},{value:"11",label:"7.5"},{value:"12",label:"8"},{value:"13",label:"8.5"},{value:"14",label:"9"},{value:"15",label:"9.5"},{value:"16",label:"10\u301c"}]},{name:"\u6628\u591c\u306f\u3069\u308c\u3050\u3089\u3044\u7c21\u5358\u306b\u5165\u7720\u3067\u304d\u305f\u304b",options:[{value:"0",label:"\u3068\u3066\u3082\u7c21\u5358\u3060\u3063\u305f"},{value:"1",label:"\u7c21\u5358\u3060\u3063\u305f"},{value:"2",label:"\u666e\u901a\u3060\u3063\u305f"},{value:"3",label:"\u96e3\u3057\u304b\u3063\u305f"},{value:"4",label:"\u3068\u3066\u3082\u96e3\u3057\u304b\u3063\u305f"}]},{name:"\u5bdd\u5e8a\u306b\u5165\u3063\u305f\u6642\u306e\u6c17\u5206\u306f\u3069\u3046\u3060\u3063\u305f\u304b",options:[{value:"0",label:"\u666e\u901a"},{value:"1",label:"\u8208\u596e\u72b6\u614b"},{value:"2",label:"\u4e0d\u5b89"},{value:"3",label:"\u30a4\u30e9\u30a4\u30e9"},{value:"4",label:"\u5e73\u9759"},{value:"5",label:"\u50b7\u3064\u3044\u305f\u72b6\u614b"},{value:"6",label:"\u7121\u611f\u60c5"},{value:"7",label:"\u5e78\u798f"},{value:"8",label:"\u6012\u308a"},{value:"9",label:"\u60b2\u3057\u307f"}]},{name:"\u591c\u4e2d\u306b\u4f55\u56de\u76ee\u304c\u899a\u3081\u305f\u304b",options:[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5~"}]},{name:"\u3069\u3093\u306a\u5922\u3092\u898b\u305f\u304b",options:[{value:"0",label:"\u898b\u3066\u306a\u3044/\u899a\u3048\u3066\u3044\u306a\u3044"},{value:"1",label:"\u5e78\u798f"},{value:"2",label:"\u9000\u5c48"},{value:"3",label:"\u6050\u6016"},{value:"4",label:"\u7570\u5e38"},{value:"5",label:"\u5947\u5999"},{value:"6",label:"\u660e\u6670\u5922"},{value:"7",label:"\u3044\u3064\u3082\u306e\u5922"},{value:"8",label:"\u6027\u7684"},{value:"9",label:"\u73fe\u5b9f\u7684"}]},{name:"\u76ee\u304c\u899a\u3081\u305f\u6642\u306e\u6c17\u5206\u306f\u3069\u3046\u3060\u3063\u305f\u304b",options:[{value:"0",label:"\u3059\u3063\u304d\u308a\u3068\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3057\u3066\u3044\u305f"},{value:"1",label:"\u76ee\u306f\u899a\u3081\u305f\u304c\u306a\u3093\u3068\u306a\u304f\u30c0\u30eb\u3044"},{value:"2",label:"\u75b2\u308c\u304c\u6b8b\u3063\u3066\u3044\u305f\u304c\u3059\u3050\u76ee\u304c\u899a\u3081\u305f"},{value:"3",label:"\u75b2\u308c\u3066\u3044\u3066\u30c0\u30eb\u3044"}]},{name:"\u8d77\u304d\u305f\u5f8c\u306e\u6c17\u5206\u306f\u3069\u3046\u3060\u3063\u305f\u304b",options:[{value:"0",label:"\u666e\u901a"},{value:"1",label:"\u8208\u596e\u72b6\u614b"},{value:"2",label:"\u4e0d\u5b89"},{value:"3",label:"\u30a4\u30e9\u30a4\u30e9"},{value:"4",label:"\u5e73\u9759"},{value:"5",label:"\u50b7\u3064\u3044\u305f\u72b6\u614b"},{value:"6",label:"\u7121\u611f\u60c5"},{value:"7",label:"\u5e78\u798f"},{value:"8",label:"\u6012\u308a"},{value:"9",label:"\u60b2\u3057\u307f"}]}],U=function(){return o.a.createElement(g,{area:pe.Feeling},o.a.createElement(z,null))};function G(){var e=Object(u.a)(["\n  width: 60px;\n  text-align: right;\n  font-family: ",";\n  color: ",";\n  font-size: ","px;\n"]);return G=function(){return e},e}function I(){var e=Object(u.a)(['\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  &::after {\n    content: "";\n    height: 1px;\n    width: 20vw;\n    display: block;\n    background: ',";\n    margin-left: .4em;\n  }\n"]);return I=function(){return e},e}var T=function(e){var n=e.time;return o.a.createElement(A,null,o.a.createElement(N,null,n))},A=i.a.span(I(),x.LightGray),N=i.a.span(G(),y.Roboto,x.LightGray,O.Small);function W(){var e=Object(u.a)(["\n  height: 100%;\n  overflow: scroll;\n  position: fixed;\n  left: 50%;\n  -webkit-transform : translateX(-50%);\n  transform : translateX(-50%);\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return W=function(){return e},e}var F=["\u5348\u524d0\u6642","\u5348\u524d1\u6642","\u5348\u524d2\u6642","\u5348\u524d3\u6642","\u5348\u524d4\u6642","\u5348\u524d5\u6642","\u5348\u524d6\u6642","\u5348\u524d7\u6642","\u5348\u524d8\u6642","\u5348\u524d9\u6642","\u5348\u524d10\u6642","\u5348\u524d11\u6642","\u5348\u5f8c0\u6642","\u5348\u5f8c1\u6642","\u5348\u5f8c2\u6642","\u5348\u5f8c3\u6642","\u5348\u5f8c4\u6642","\u5348\u5f8c5\u6642","\u5348\u5f8c6\u6642","\u5348\u5f8c7\u6642","\u5348\u5f8c8\u6642","\u5348\u5f8c9\u6642","\u5348\u5f8c10\u6642","\u5348\u5f8c11\u6642","\u5348\u5f8c12\u6642"],B=function(){return o.a.createElement(M,null,F.map((function(e,n){return o.a.createElement(T,{key:n,time:e})})))},M=i.a.div(W());function K(){var e=Object(u.a)(["\n  margin-top: 10px;\n"]);return K=function(){return e},e}var Z=function(){return o.a.createElement(g,{area:pe.TimeLine},o.a.createElement(J,null,o.a.createElement(B,null)))},J=i.a.div(K());function X(){var e=Object(u.a)(["\n  font-size: ","px;\n  color: ",";\n  font-family: ",";\n  border-radius: 3px;\n  text-decoration: none;\n  padding: 5px 7px 3px 7px;\n  margin-left: 5px;\n  &:focus {\n    outline: none;\n    background: ","\n  }\n  &:hover {\n    background: ","\n  }\n"]);return X=function(){return e},e}var q=function(e){var n=e.onClick;return o.a.createElement($,{onClick:n},"\uff0b \u4e88\u5b9a\u3092\u8ffd\u52a0")},$=i.a.button(X(),O.Small,x.LightGray,y.Roboto,x.WhiteSmoke,x.WhiteSmoke);function Q(){var e=Object(u.a)(["\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: ",";\n  font-size: ",";\n  font-family: ",";\n  border-radius: 3px;\n  padding: 5px 7px 5px 3px;\n  &:focus {\n    outline:none;\n    background: ","\n  }\n"]);return Q=function(){return e},e}var V=function(e){var n=e.onChange,a=e.value;return o.a.createElement(Y,{type:"text",onChange:n,value:a})},Y=i.a.input(Q(),x.LightGray,O.Small,y.Roboto,x.WhiteSmoke);function ee(){var e=Object(u.a)(["\n  margin-bottom: 10px;\n"]);return ee=function(){return e},e}var ne=function(){var e=Object(b.b)(),n=Object(l.useState)(""),a=Object(L.a)(n,2),t=a[0],r=a[1];return o.a.createElement(ae,null,o.a.createElement(V,{onChange:function(e){r(e.currentTarget.value)},value:t}),o.a.createElement(q,{onClick:function(n){n.preventDefault(),n.currentTarget.blur(),""!==t&&(e(v({schedule:{name:t,background:x.RoyalBlue,position:{x:0,y:0},size:{width:"auto",height:"auto"}}})),r(""))}}))},ae=i.a.div(ee()),te=a(28),le=function(e){var n=e.scheduleName,a=e.background,t=e.index,l=e.position,r=e.size,c=Object(b.b)();return o.a.createElement(oe,{tabIndex:0,onKeyDown:function(e){if(e.metaKey&&"c"===e.key)c(m({schedule:{name:n,background:a,position:l,size:r}}));else{if("Backspace"!==e.key)return;c(f({index:t}))}},background:a,position:l,size:r,onDragStop:function(e,n){l.x===n.x&&l.y===n.y||c(h({index:t,position:{x:n.x,y:n.y}}))},onResizeStop:function(e,n,a,l,o){r.width===a.style.width&&r.height===a.style.height||c(E({index:t,position:{x:o.x,y:o.y},size:{width:a.style.width,height:a.style.height}}))},enableResizing:{top:!1,right:!0,bottom:!0,left:!0,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1}},n)},oe=Object(i.a)(te.a)((function(e){return"\n  background: ".concat(e.background,";\n  font-family: ").concat(y.Roboto,";\n  color: white;\n  padding: 8px;\n  border-radius: 5px;\n  font-size: ").concat(O.Small,"px;\n  &:focus{\n    outline: none;\n    box-shadow: 3px 3px 5px ").concat(x.LightGray,";\n  }\n")}));function re(){var e=Object(u.a)(["\n\n"]);return re=function(){return e},e}var ce=function(){var e=Object(b.c)((function(e){return e.scheduleState.schedules}));return o.a.createElement(ue,null,e.map((function(e,n){return o.a.createElement(le,{key:"".concat(n,":").concat(e),scheduleName:e.name,background:e.background,index:n,position:e.position,size:e.size})})))},ue=i.a.div(re());function ie(){var e=Object(u.a)(["\n  margin-top: 10px;\n"]);return ie=function(){return e},e}var be=function(){return o.a.createElement(g,{area:pe.Schedule},o.a.createElement(se,null,o.a.createElement(ne,null),o.a.createElement(ce,null)))},se=i.a.div(ie());function de(){var e=Object(u.a)(['\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-areas: "\n  '," "," ",'"\n']);return de=function(){return e},e}var pe,ve=function(){return o.a.createElement(fe,null,o.a.createElement(U,null),o.a.createElement(Z,null),o.a.createElement(be,null))};!function(e){e.Feeling="Feeling",e.TimeLine="TimeLine",e.Schedule="Schedule"}(pe||(pe={}));var fe=i.a.div(de(),pe.Feeling,pe.TimeLine,pe.Schedule);function me(){var e=Object(u.a)(["\n  height: 100%;\n  outline: none; /* \u30d5\u30a9\u30fc\u30ab\u30b9\u6642\u306e\u9752\u67a0\u3092\u5916\u3059*/\n"]);return me=function(){return e},e}var he=function(){var e=Object(b.b)(),n=Object(b.c)((function(e){return e.scheduleState.copiedSchedule}));return o.a.createElement(Ee,{onKeyDown:function(a){a.metaKey&&"v"===a.key&&(console.log("command v"),""!==n.name&&e(v({schedule:{name:n.name,background:n.background,position:{x:0,y:0},size:{width:n.size.width,height:n.size.height}}})))},tabIndex:0},o.a.createElement(ve,null))},Ee=i.a.div(me());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(9),ye=a(10);function Oe(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function xe(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?Oe(a,!0).forEach((function(n){Object(C.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(a).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var je={schedules:[],copiedSchedule:{name:"",background:"",position:{x:0,y:0},size:{width:"auto",height:"auto"}}};var Se=Object(ge.combineReducers)({scheduleState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.CREATE_SCHEDULE:return xe({},e,{schedules:[].concat(Object(ye.a)(e.schedules),[n.payload.schedule])});case p.DELETE_SCHEDULE:return xe({},e,{schedules:[].concat(Object(ye.a)(e.schedules.slice(0,n.payload.index)),Object(ye.a)(e.schedules.slice(n.payload.index+1)))});case p.POSITION_CHANGE_SCHEDULE:return xe({},e,{schedules:[].concat(Object(ye.a)(e.schedules.slice(0,n.payload.index)),[{name:e.schedules[n.payload.index].name,background:e.schedules[n.payload.index].background,position:n.payload.position,size:e.schedules[n.payload.index].size}],Object(ye.a)(e.schedules.slice(n.payload.index+1)))});case p.SIZE_CHANGE_SCHEDULE:return xe({},e,{schedules:[].concat(Object(ye.a)(e.schedules.slice(0,n.payload.index)),[{name:e.schedules[n.payload.index].name,background:e.schedules[n.payload.index].background,position:n.payload.position,size:n.payload.size}],Object(ye.a)(e.schedules.slice(n.payload.index+1)))});case p.COPIED_SCHEDULE:return xe({},e,{copiedSchedule:xe({},n.payload.schedule)});default:return e}}}),ke=a(30),Ce=a(31),Le=Object(ke.composeWithDevTools)({}),we=[Object(Ce.createLogger)()],De=Object(ge.createStore)(Se,Le(ge.applyMiddleware.apply(void 0,we)));c.a.render(o.a.createElement(b.a,{store:De},o.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.928eb9db.chunk.js.map