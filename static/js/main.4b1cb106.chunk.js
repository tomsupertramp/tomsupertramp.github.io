(window["webpackJsonpnext2u-test"]=window["webpackJsonpnext2u-test"]||[]).push([[0],{19:function(e,t,n){"use strict";var a={GET_USERS_REQUEST:"GET_USERS_REQUEST",GET_ALL_USERS_SUCCESS:"GET_ALL_USERS_SUCCESS",GET_USER_SUCCESS:"GET_USER_SUCCESS",GET_USERS_FAILURE:"GET_USERS_FAILURE",GET_TASKS_REQUEST:"GET_TASKS_REQUEST",GET_ALL_TASKS_SUCCESS:"GET_ALL_TASKS_SUCCESS",GET_USER_TASKS_SUCCESS:"GET_USER_TASKS_SUCCESS",GET_TASKS_FAILURE:"GET_TASKS_FAILURE",UPDATE_PROFILE:"UPDATE_PROFILE"},r={getUsers:function(e){return{type:a.GET_USERS_REQUEST,params:e}},getTasks:function(e){return{type:a.GET_TASKS_REQUEST,params:e}},updateProfile:function(e){return{type:a.UPDATE_PROFILE,values:e}}},c=n(37);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={profile:window.__DATA__.user||{},allTasks:[],userTasks:window.__DATA__.tasks||[],allUsers:{}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_USER_SUCCESS:return s({},e,{profile:t.data});case a.GET_ALL_USERS_SUCCESS:return s({},e,{allUsers:t.data});case a.GET_ALL_TASKS_SUCCESS:return s({},e,{allTasks:t.data});case a.GET_USER_TASKS_SUCCESS:return s({},e,{userTasks:t.data});case a.UPDATE_PROFILE:return s({},e,{profile:s({},e.profile,{},t.values)});default:return e}},l=n(15),E=n.n(l),S=n(12),p=n(21),_=n(31),d=n(49),T=n.n(d),f="get",m={tasks:{method:f,url:"todos"},profile:{method:f,url:"users"},updateProfile:{method:"put",url:"users"}},b=function(e,t){var n=Object(p.get)(m,e,""),a={url:"put"===n.method?"https://jsonplaceholder.typicode.com/".concat(n.url,"/").concat(t.id):"https://jsonplaceholder.typicode.com/".concat(n.url),method:n.method,data:JSON.stringify(t),params:"get"===n.method&&t?t:null,headers:{"Content-type":"application/json; charset=UTF-8"}};return T.a.request(a).then((function(e){return e.data})).catch((function(e){return e}))},U=E.a.mark(j),v=E.a.mark(A),O=E.a.mark(R),h=new _.b.Entity("users",{},{idAttribute:"id"});function j(e){var t,n,r,c;return E.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.params,n=Object(p.get)(t,"id",null),o.prev=2,o.next=5,Object(S.b)(b,"profile",n&&{id:n});case 5:if(!(r=o.sent)){o.next=15;break}if(!n){o.next=12;break}return o.next=10,Object(S.d)({type:a.GET_USER_SUCCESS,data:r[0]});case 10:o.next=15;break;case 12:return c=Object(_.a)(r,[h]),o.next=15,Object(S.d)({type:a.GET_ALL_USERS_SUCCESS,data:c.entities.users});case 15:o.next=21;break;case 17:return o.prev=17,o.t0=o.catch(2),o.next=21,Object(S.d)({type:a.GET_PROFILE_FAILURE});case 21:case"end":return o.stop()}}),U,null,[[2,17]])}function A(e){var t,n,r;return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.params,n=Object(p.get)(t,"id",null),c.prev=2,c.next=5,Object(S.b)(b,"tasks",n&&{id:n});case 5:if(!(r=c.sent)){c.next=9;break}return c.next=9,Object(S.d)({type:n?a.GET_USER_TASKS_SUCCESS:a.GET_ALL_TASKS_SUCCESS,data:r});case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(2),c.next=15,Object(S.d)({type:a.GET_TASKS_FAILURE});case 15:case"end":return c.stop()}}),v,null,[[2,11]])}function R(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.e)(a.GET_USERS_REQUEST,j);case 2:return e.next=4,Object(S.e)(a.GET_TASKS_REQUEST,A);case 4:case"end":return e.stop()}}),O)}n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return R}))},53:function(e,t,n){e.exports=n(81)},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),s=n(16),i=n(22),u=n(14),l=n(51),E=n(9),S=n(47),p=n(15),_=n.n(p),d=n(12),T=n(19),f=_.a.mark(m);function m(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)([Object(d.c)(T.b)]);case 2:case"end":return e.stop()}}),f)}var b,U=Object(l.a)(),v=Object(E.a)(),O=[Object(S.a)(v),U],h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,j=Object(u.e)((b=v,Object(u.c)({router:Object(i.b)(b),app:T.c})),h(u.a.apply(void 0,O)));U.run(m);var A=j,R=n(30),w=n(13),C=n(35),g=n.n(C),G=n(27),y=function(e){var t=e.name;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(G.a,{className:"nav-link",to:"/",activeClassName:"active",exact:!0},"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(G.a,{className:"nav-link",to:"/profile",activeClassName:"active"},"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438"))),r.a.createElement("span",{className:"navbar-text"},t)))},L=Object(s.c)((function(e){return{name:e.app.profile.name}}))(y),x=function(){return r.a.createElement("div",null,"Loading...")},k=g()({loader:function(){return n.e(5).then(n.bind(null,95))},loading:x}),P=g()({loader:function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,96))},loading:x}),I=function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(w.c,{location:t},r.a.createElement(w.a,{path:"/",component:k,exact:!0}),r.a.createElement(w.a,{path:"/profile",component:P})))},K=Object(R.a)(Object(s.c)((function(e){var t=e.router,n=e.app;return{location:t.location,ownId:n.profile.id}}),(function(e){return{getUsers:function(t){return e(T.a.getUsers(t))}}})),Object(R.b)({componentDidMount:function(){var e=this.props,t=e.getUsers;e.ownId||t({id:1}),t()}}))(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,{store:A},r.a.createElement(i.a,{history:v},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.4b1cb106.chunk.js.map