(this.webpackJsonpmanagement=this.webpackJsonpmanagement||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),a=c(9),i=c.n(a),l=c(3),j=(c(23),c(24),c(2)),o=(c(27),c(17)),d=c(6),b="CREATE_EVENT",u="DELETE_EVENT",O="DELETE_ALL_EVENTS",h="CHANGE_COMP_TO_INCOMP",m="CHANGE_INCOMP_TO_COMP",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var c={title:t.title,num:t.num,body:t.body,progress:t.progress},s=e.length,n=0===s?1:e[s-1].id+1;return[].concat(Object(d.a)(e),[Object(o.a)({id:n},c)]);case u:return e.filter((function(e){return e.id!==t.id}));case O:return[];case m:var r={progress:"\u5b8c\u4e86"};return Object.assign.apply(Object,Object(d.a)(e).concat([r])),Object(d.a)(e);case h:var a={progress:"\u672a\u5b8c\u4e86"};return Object.assign.apply(Object,Object(d.a)(e).concat([a])),Object(d.a)(e);default:return e}},p=Object(n.createContext)(),f=function(e){var t=e.task,c=Object(n.useContext)(p).dispatch;return Object(s.jsxs)("li",{href:"#",className:"list-group-item list-group-item-action flex-column align-items-start",children:[Object(s.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(s.jsx)("h5",{className:"mb-1",children:t.title}),Object(s.jsx)("small",{children:t.lastdate})]}),Object(s.jsx)("p",{className:"mb-1",children:t.body}),Object(s.jsxs)("div",{className:"list-small",children:[Object(s.jsx)("small",{alt:"\u696d\u52d9No.",children:t.num}),Object(s.jsx)("small",{className:"on-click",onClick:function(e){var s=t.id;switch(t.progress){case"\u672a\u5b8c\u4e86":window.confirm("\u3053\u306e\u30bf\u30b9\u30af\u306f\u672a\u5b8c\u4e86\u306e\u30bf\u30b9\u30af\u3067\u3059\u3002\u5b8c\u4e86\u306b\u5909\u66f4\u3057\u307e\u3059\u304b\uff1f")&&c({type:m,id:s});break;case"\u5b8c\u4e86":window.confirm("\u3053\u306e\u30bf\u30b9\u30af\u306f\u5b8c\u4e86\u3057\u305f\u30bf\u30b9\u30af\u3067\u3059\u3002\u672a\u5b8c\u4e86\u306b\u5909\u66f4\u3057\u307e\u3059\u304b\uff1f")&&c({type:h,id:s})}},children:t.progress})]})]})},g=function(){var e=Object(n.useContext)(p),t=e.state,c=e.dispatch;return Object(s.jsx)("ul",{children:Array.isArray(t)&&t.map((function(e,n){return Object(s.jsx)(f,{task:e,state:t,dispatch:c},n)}))})},v=function(){var e=Object(n.useContext)(p),t=e.state,c=e.dispatch;return Object(s.jsx)("ul",{children:Array.isArray(t)&&t.map((function(e,n){return"\u672a\u5b8c\u4e86"===e.progress?Object(s.jsx)(f,{task:e,state:t,dispatch:c},n):void 0}))})},N=function(){var e=Object(n.useContext)(p),t=e.state,c=e.dispatch;return Object(s.jsx)("ul",{children:Array.isArray(t)&&t.map((function(e,n){return"\u5b8c\u4e86"===e.progress?Object(s.jsx)(f,{task:e,state:t,dispatch:c},n):void 0}))})},E=function(e){var t=e.task,c=Object(n.useContext)(p).dispatch;return Object(s.jsx)("li",{href:"#",className:"list-group-item list-group-item-action flex-column align-items-start on-click",children:Object(s.jsxs)("div",{onClick:function(){var e=t.id;window.confirm("\u3053\u306e\u30bf\u30b9\u30af\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f")&&c({type:u,id:e})},children:[Object(s.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(s.jsx)("h5",{className:"mb-1",children:t.title}),Object(s.jsx)("small",{children:t.lastdate})]}),Object(s.jsx)("p",{className:"mb-1",children:t.body}),Object(s.jsxs)("div",{className:"list-small",children:[Object(s.jsx)("small",{children:t.num}),Object(s.jsx)("small",{children:t.progress})]})]})})},y=function(){var e=Object(n.useContext)(p),t=e.state,c=e.dispatch;return Object(s.jsx)(s.Fragment,{children:Array.isArray(t)&&t.map((function(e,n){return Object(s.jsx)("div",{className:"list-group",children:Object(s.jsx)("ul",{children:Object(s.jsx)(E,{task:e,state:t,dispatch:c},n)})})}))})},C=c(16),w=function(){var e=Object(n.useContext)(p),t=e.state,c=e.dispatch,r=Object(n.useState)(""),a=Object(l.a)(r,2),i=a[0],j=a[1],o=Object(n.useState)(""),d=Object(l.a)(o,2),u=d[0],h=d[1],m=Object(n.useState)(""),x=Object(l.a)(m,2),f=x[0],g=x[1],v=Object(n.useState)("\u9078\u629e\u3057\u3066\u4e0b\u3055\u3044"),N=Object(l.a)(v,2),E=N[0],y=N[1],w=Object(n.useState)(!1),k=Object(l.a)(w,2),A=k[0],T=k[1],_=""===i||""===f||"\u9078\u629e\u3057\u3066\u4e0b\u3055\u3044"===E,D=0===t.length;return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){return T(!0)},children:"\u30bf\u30b9\u30af\u3092\u4f5c\u6210\u3059\u308b"}),A?Object(s.jsxs)(C.a,{className:"RndStyle",default:{x:300,y:50,width:800,minHeight:300},children:[Object(s.jsx)("form",{children:Object(s.jsxs)("div",{className:"form-window",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"formEventTitle",children:"\u30bf\u30b9\u30af\u540d"}),Object(s.jsx)("input",{className:"form-control",id:"formEventTitle",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"formEventNum",children:"\u30bf\u30b9\u30afNo."}),Object(s.jsx)("input",{className:"form-control",id:"formEventNum",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"formEventBody",children:"\u30bf\u30b9\u30af\u5185\u5bb9"}),Object(s.jsx)("textarea",{className:"form-control",id:"formEventBody",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"formEventPnrogress",children:"\u9032\u6357"}),Object(s.jsxs)("select",{className:"form-control form-control-sm",id:"formEventProgress",value:E,onChange:function(e){return y(e.target.value)},children:[Object(s.jsx)("option",{children:"\u9078\u629e\u3057\u3066\u4e0b\u3055\u3044"}),Object(s.jsx)("option",{children:"\u672a\u5b8c\u4e86"}),Object(s.jsx)("option",{children:"\u5b8c\u4e86"})]})]})]})}),Object(s.jsx)("button",{className:"btn btn-info",disabled:_,onClick:function(e){e.preventDefault();c({type:b,title:i,num:u,body:f,progress:E,lastdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e instanceof Date?e:new Date,c=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"];return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate(),"(").concat(c[t.getDay()],")")}()}),j(""),h(""),g("")},children:"\u4f5c\u6210"}),Object(s.jsx)("button",{onClick:function(){return T(!1)},className:"btn btn-secondary",children:"\u9589\u3058\u308b"})]}):Object(s.jsx)(s.Fragment,{}),Object(s.jsx)("button",{className:"btn btn-danger",disabled:D,onClick:function(){window.confirm("\u5168\u3066\u306e\u30bf\u30b9\u30af\u3092\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&c({type:O})},children:"\u5168\u3066\u306e\u30bf\u30b9\u30af\u3092\u524a\u9664\u3059\u308b"})]})})},k=function(){var e=Object(n.useReducer)(x,[]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=0!==c.length&&Object(s.jsx)("p",{children:"\u300c\u5b8c\u4e86\u300d\u307e\u305f\u306f\u300c\u672a\u5b8c\u4e86\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u30bf\u30b9\u30af\u306e\u9032\u6357\u3092\u5909\u66f4\u3067\u304d\u307e\u3059"});return Object(s.jsxs)(p.Provider,{value:{state:c,dispatch:r},children:[Object(s.jsx)(w,{}),Object(s.jsxs)(j.d,{children:[Object(s.jsxs)(j.b,{children:[Object(s.jsx)(j.a,{children:"ALL"}),Object(s.jsx)(j.a,{children:"INCOMPLETE"}),Object(s.jsx)(j.a,{children:"COMPLETE"}),Object(s.jsx)(j.a,{color:"red",children:"DELETE MODE"})]}),0===c.length&&Object(s.jsx)("p",{children:"\u73fe\u5728\u3001\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30bf\u30b9\u30af\u306f\u3042\u308a\u307e\u305b\u3093"}),Object(s.jsx)(j.c,{children:Object(s.jsxs)("div",{className:"list-group",children:[a,Object(s.jsx)(g,{})]})}),Object(s.jsxs)(j.c,{children:[a,Object(s.jsx)("div",{className:"list-group",children:Object(s.jsx)(v,{})})]}),Object(s.jsxs)(j.c,{children:[a,Object(s.jsx)("div",{className:"list-group",children:Object(s.jsx)(N,{})})]}),Object(s.jsxs)(j.c,{children:[0!==c.length&&Object(s.jsx)("p",{className:"delete-message",children:"\u3000\u524a\u9664\u3057\u305f\u3044\u30bf\u30b9\u30af\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e0b\u3055\u3044\u3002"}),Object(s.jsx)(y,{})]})]})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9aa9d54b.chunk.js.map