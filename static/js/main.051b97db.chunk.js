(this["webpackJsonpswipe-test"]=this["webpackJsonpswipe-test"]||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),c=n(5),r=n.n(c),s=(n(4),n(2)),u=n(0);var a=function(e){var t=e.onCreate,n=Object(i.useState)(""),o=Object(s.a)(n,2),c=o[0],r=o[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.trim()&&(t(c),r(""))},children:[Object(u.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",className:"textField","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442",value:c,onChange:function(e){return r(e.target.value)},type:"text"}),Object(u.jsx)("button",{className:"addTodo point",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},l=o.a.createContext(),d={input:{marginRight:"1rem"}};var m=function(e){var t=e.todo,n=e.index,o=e.toggleTodo,c=Object(i.useContext)(l).removeTodo,r=[];return t.completed&&r.push("done"),Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{className:r.join(" "),children:[Object(u.jsx)("input",{className:"point",style:d.input,type:"checkbox",checked:t.completed,onChange:function(){return o(t.id)}}),Object(u.jsx)("strong",{children:n+1}),"\xa0",t.title]}),Object(u.jsx)("button",{className:"remove point",onClick:c.bind(null,t.id),children:"\xd7"})]})};var j=function(e){return Object(u.jsx)("ul",{children:e.todos.map((function(t,n){return Object(u.jsx)(m,{todo:t,index:n,toggleTodo:e.onToggle},t.id)}))})},b=n(6),p=n.n(b);var x=function(){var e=Object(i.useState)([{id:1,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u0425\u043b\u0435\u0431"},{id:2,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u0430\u0441\u043b\u043e"},{id:3,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e"}]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=function(){var e;return Object(u.jsxs)("div",{children:[Object(u.jsxs)(p.a,{className:"carousel",swipeOptions:{continuous:!1},ref:function(t){return e=t},children:[Object(u.jsxs)("div",{className:"first-screen",children:[" ",Object(u.jsx)("h1",{id:"todos-label",children:"\u041f\u0435\u0440\u0432\u044b\u0439 \u044d\u043a\u0440\u0430\u043d"}),Object(u.jsx)(a,{onCreate:d}),n.length?Object(u.jsx)(j,{todos:n,onToggle:r}):Object(u.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0442\u0435\u043a\u0441\u0442!"})]}),Object(u.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper. Ut sem viverra aliquet eget. Faucibus turpis in eu mi bibendum neque egestas. Laoreet sit amet cursus sit amet. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Viverra orci sagittis eu volutpat. Pellentesque sit amet porttitor eget dolor morbi non arcu. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus."})]}),Object(u.jsx)("button",{onClick:function(){return e.prev()},children:"Previous"}),Object(u.jsx)("button",{onClick:function(){return e.next()},children:"Next"})]})};function r(e){o(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}function d(e){o(n.concat([{title:e,id:Date.now(),completed:!1}]))}return Object(u.jsx)(l.Provider,{value:{removeTodo:function(e){o(n.filter((function(t){return t.id!==e})))}},children:Object(u.jsx)("section",{"aria-labelledby":"todos-label",className:"App wrapper",children:Object(u.jsx)(c,{})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),v()},4:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.051b97db.chunk.js.map