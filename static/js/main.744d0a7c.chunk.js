(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{131:function(e,t,n){"use strict";var s=n(5),a=n.n(s),c=n(11),r=n(17),i=n(6),o=n(22).create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"});function l(e){return o.put("/dialogs/".concat(e))}n.d(t,"a",(function(){return d}));var m="dialogsReducer/SEND-MESSAGE",u={count:0},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:t.sent.status;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)({},e,{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:1,message:t.text}])});case"dialogsReducer/SET-MEMBERS-DATA":return Object(i.a)({},e,{membersData:t.members});default:return e}}},161:function(e,t,n){e.exports=n(298)},247:function(e,t,n){},248:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/news-blocker.28978814.jpg"},297:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);n(96),n(97),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(9),a=n(94),c=n(131),r=n(5),i=n.n(r),o=n(11),l=n(17),m=n(6),u=n(22),d=u.create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),p=function(e,t){return d.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},f="usersReducer/FOLLOW-CHANGE",w="usersReducer/SET-USERS",E="usersReducer/SET-COUNT",h={users:[],currentPage:1,countSize:5,totalCount:null,isLoading:!1,statusFollowing:[]},g=function(e){return{type:f,userID:e}},v=function(e){return{type:f,userID:e}},b=function(e){return{type:w,users:e}},N=function(e){return{type:E,count:e}},O=function(e){return{type:"usersReducer/SET-LOADING-STATUS",status:e}},j=function(e){return{type:"usersReducer/CHANGE-FOLLOWING-PROGRESS-STATUS",id:e}},S=function(){var e=Object(o.a)(i.a.mark((function e(t,n,s,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(n)),e.next=3,s;case 3:0===e.sent.data.resultCode&&t(a),t(j(n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,a){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(m.a)({},e,{followed:!e.followed}):e}))});case w:return Object(m.a)({},e,{users:[].concat(Object(l.a)(e.users),Object(l.a)(t.users))});case"usersReducer/SET-DEFAULT-PAGE":return{users:[],currentPage:1,countSize:5,totalCount:null,isLoading:!1,statusFollowing:[]};case"usersReducer/SET-CURRENT-PAGE":return Object(m.a)({},e,{currentPage:t.currentPage});case E:return Object(m.a)({},e,{totalCount:t.count});case"usersReducer/CHANGE-FOLLOWING-PROGRESS-STATUS":return Object(m.a)({},e,{statusFollowing:e.statusFollowing.some((function(e){return e===t.id}))?e.statusFollowing.filter((function(e){return e!==t.id})):[].concat(Object(l.a)(e.statusFollowing),[t.id])});case"usersReducer/SET-LOADING-STATUS":return Object(m.a)({},e,{isLoading:t.status});default:return e}},T=u.create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"});function k(){return T.get("auth/me")}var P={id:null,login:null,email:null,isAuth:null,pathRedirect:null},C=function(e,t,n,s){return{type:"authReducer/SET_AUTH_STATUS",data:{id:e,login:t,email:n,isAuth:s}}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"authReducer/SET_AUTH_STATUS":return Object(m.a)({},e,{},t.data,{isAuth:t.data.isAuth});case"authReducer/SET-SUCCESS-STATUS":return Object(m.a)({},e,{pathRedirect:t.pathRedirect});default:return e}},R=n(132),A=n(130),U=n(38),x="loginReducer/SET-LOADING",I="loginReducer/SET-CAPTCHA",D={isLoading:!1,captcha:null},F=function(e){return{type:x,status:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(m.a)({},e,{isLoading:t.status});case I:return Object(m.a)({},e,{captcha:t.url});default:return e}},G=Object(s.c)({profilePage:a.b,messagesPage:c.b,usersPage:y,authPage:L,loginPage:M,form:A.a}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,_=Object(s.e)(G,H(Object(s.a)(R.a)));window.store=_;var z=_,K=n(0),W=n.n(K),Y=n(63),B=n.n(Y),V=n(14),J=n(10),X=n(23),$=n(24),q=n(26),Q=n(25),Z=n(27),ee=(n(247),n(34)),te=n(71),ne=(n(248),u.create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"})),se=function(){var e=Object(K.useState)(0),t=Object(te.a)(e,2),n=t[0],s=t[1],a=Object(K.useState)(!1),c=Object(te.a)(a,2),r=c[0],l=c[1],m=setTimeout((function(){l(!r)}),15e3);return Object(K.useEffect)((function(){return function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/dialogs/messages/new/count");case 2:200===(t=e.sent).status&&s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){clearTimeout(m)}}),[r]),W.a.createElement("div",{className:"col-sm-3 fixed-left"},W.a.createElement("nav",{className:"section-menu"},W.a.createElement("ul",null,W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/profile"},"Profile")),n?W.a.createElement(W.a.Fragment,null,W.a.createElement("div",{className:"wrapper"},W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/dialogs"},"Messages")),W.a.createElement("span",{className:"updated"},n))):W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/dialogs"},"Messages")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/users"},"Users")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/news"},"News")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/music"},"Music")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/groups"},"Groups")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(J.c,{className:"section-menu-li-url",to:"/home/settings"},"Setting")))))},ae=(n(250),n(29)),ce=n.n(ae),re=function(e){return W.a.createElement("div",{className:"section-news"},W.a.createElement("div",{className:"section-news-header"},W.a.createElement("span",null,"News")),W.a.createElement("div",{className:"section-news-elements"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""}))),W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""})),W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))),W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""}))),W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""})),W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))),W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""}))),W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""})),W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))),W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""}))),W.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},W.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},W.a.createElement("img",{className:"img-responsive",src:ce.a,alt:""})),W.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},W.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),W.a.createElement("div",{className:"section-news-elements-item-content-description"},W.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))))))},ie=(n(251),function(e){return W.a.createElement("div",{className:"section-music"},W.a.createElement("h1",null,"Soon"))}),oe=(n(252),function(e){return W.a.createElement("div",{className:"section-groups"},W.a.createElement("h1",null,"Soon"))}),le=(n(253),function(e){return W.a.createElement("div",{className:"section-settings"},W.a.createElement("h1",null,"Soon"))}),me=(n(254),n(95)),ue=n.n(me),de=n(53),pe=function(e){function t(){return Object(X.a)(this,t),Object(q.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setDefaultPage()}},{key:"render",value:function(){var e=this,t=this.props.users.map((function(t){return W.a.createElement("div",{key:t.id+Math.random(),className:"section-users-elements-item col-sm-12"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"section-users-elements-item-right col-sm-3"},W.a.createElement(J.c,{to:"/home/users/"+t.id}," ",W.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ue.a,alt:"",className:"img-responsive img-circle center-block"})),t.followed?W.a.createElement("button",{disabled:e.props.statusFollowing.some((function(e){return e===t.id})),onClick:function(){e.props.unfollowUser(t.id)}},"unfollow"):W.a.createElement("button",{disabled:e.props.statusFollowing.some((function(e){return e===t.id})),onClick:function(){e.props.followUser(t.id)}},"follow")),W.a.createElement("div",{className:"section-users-elements-item-text col-sm-6"},W.a.createElement("h1",null,t.name),W.a.createElement("p",null,t.status)),W.a.createElement("div",{className:"section-users-elements-item-location col-sm-3"},W.a.createElement("h4",null,"user.location.city",", ","user.location.country"))))}));return W.a.createElement("div",{className:"section-users"},W.a.createElement("div",{className:"section-users-elements"},W.a.createElement("div",{className:"section-users-elements-header"},W.a.createElement("span",null,"\u0412\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",this.props.totalCount)),W.a.createElement("div",{className:"row"},t,W.a.createElement("div",{className:"col-sm-12 section-users-elements-status"},W.a.createElement(de.a,{isLoading:this.props.isLoading})),W.a.createElement("div",{className:"section-users-elements-showbutton col-sm-12"},W.a.createElement("div",{className:"col-sm-4 col-sm-offset-4"},W.a.createElement("button",{onClick:function(){e.props.showMore(e.props.currentPage)}},"Show more"))))))}}]),t}(W.a.Component),fe=function(e){return e.usersPage.users},we=function(e){return e.usersPage.currentPage},Ee=function(e){return e.usersPage.countSize},he=function(e){return e.usersPage.isLoading},ge=function(e){return e.usersPage.statusFollowing},ve=function(e){return e.usersPage.totalCount},be=function(e){function t(){var e,n;Object(X.a)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(n=Object(q.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(a)))).showMore=function(e){var t=e+1;n.props.showMore(t),n.props.getUsers(t,n.props.countSize)},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(1,this.props.countSize)}},{key:"render",value:function(){return W.a.createElement(pe,{totalCount:this.props.totalCount,isLoading:this.props.isLoading,statusFollowing:this.props.statusFollowing,followUser:this.props.followUser,unfollowUser:this.props.unfollowUser,setDefaultPage:this.props.setDefaultPage,showMore:this.showMore,users:this.props.users,currentPage:this.props.currentPage})}}]),t}(W.a.Component),Ne=Object(V.b)((function(e){return{users:fe(e),currentPage:we(e),countSize:Ee(e),isLoading:he(e),statusFollowing:ge(e),totalCount:ve(e)}}),{followingCurrentProgress:j,setDefaultPage:function(){return{type:"usersReducer/SET-DEFAULT-PAGE"}},getUsers:function(e,t){return function(){var n=Object(o.a)(i.a.mark((function n(s){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(O(!0)),n.next=3,p(e,t);case 3:a=n.sent,s(O(!1)),s(b(a.items)),s(N(a.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},unfollowUser:function(e){return function(t){S(t,e,function(e){return d.delete("follow/".concat(e))}(e),v(e))}},followUser:function(e){return function(t){S(t,e,function(e){return d.post("follow/".concat(e))}(e),g(e))}},follow:g,showMore:function(e){return{type:"usersReducer/SET-CURRENT-PAGE",currentPage:e}},unfollow:v,setUsers:b,setTotalUserCount:N,setPreloader:O})(be),Oe=(n(255),n(66)),je=n.n(Oe),Se=function(e){var t=e.profile,n=e.UserLogout;return W.a.createElement("div",{className:"section-outer"},W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"section-header"},W.a.createElement("div",{className:"section-header-logo"},W.a.createElement(J.c,{to:"/home"},W.a.createElement("img",{className:"img-responsive",src:je.a,alt:""}))),W.a.createElement("div",{className:"section-header-button"},W.a.createElement("div",{className:"section-header-profile"},W.a.createElement(J.c,{to:"/home/profile"},t.login)),W.a.createElement("button",{onClick:n},"Log out")))))},ye=n(93),Te=Object(V.b)((function(e){return{profile:Object(ye.b)(e)}}),{UserLogout:function(e,t,n){return function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.delete("/auth/login");case 2:0===e.sent.data.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),ke=n(41),Pe=n.n(ke),Ce=(n(256),function(e){var t=e.isLoading;return W.a.createElement("div",{className:"preloader"},t?W.a.createElement("img",{src:Pe.a,alt:""}):null)}),Le=W.a.lazy((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,327))})),Re=W.a.lazy((function(){return n.e(3).then(n.bind(null,326))})),Ae=function(e){function t(){return Object(X.a)(this,t),Object(q.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.history.push(this.props.url),"/login"===this.props.url&&this.props.history.push("/home")}},{key:"render",value:function(){return W.a.createElement(W.a.Fragment,null,W.a.createElement(Te,null),W.a.createElement("div",{className:"outer-section"},W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"row"},W.a.createElement(se,null),W.a.createElement("div",{className:"col-sm-8 relative-content"},W.a.createElement("div",{className:"section-inner"},W.a.createElement(W.a.Suspense,{fallback:W.a.createElement(Ce,{isLoading:!0})},W.a.createElement(ee.b,{path:"/home/dialogs",render:function(){return W.a.createElement(Le,null)}}),W.a.createElement(ee.b,{exact:!0,path:"/home",render:function(){return W.a.createElement(Re,null)}}),W.a.createElement(ee.b,{exact:!0,path:"/home/profile",render:function(){return W.a.createElement(Re,null)}}),W.a.createElement(ee.b,{exact:!0,path:"/home/users/:userId",render:function(){return W.a.createElement(Re,null)}}),W.a.createElement(ee.b,{exact:!0,path:"/home/users",render:function(){return W.a.createElement(Ne,null)}}),W.a.createElement(ee.b,{exact:!0,path:"/home/news",component:re}),W.a.createElement(ee.b,{exact:!0,path:"/home/music",component:ie}),W.a.createElement(ee.b,{exact:!0,path:"/home/groups",component:oe}),W.a.createElement(ee.b,{exact:!0,path:"/home/settings",component:le}))))))))}}]),t}(W.a.Component),Ue=Object(ee.f)(Ae),xe=(n(257),n(128)),Ie=n(129),De=n(51),Fe=n(67),Me=function(e){function t(){return Object(X.a)(this,t),Object(q.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.history.replace("/login")}},{key:"render",value:function(){return W.a.createElement("div",null,W.a.createElement(_e,this.props))}}]),t}(W.a.Component),Ge=Object(De.a)(30),He=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,s=e.captcha,a=e.isLoading;return W.a.createElement("form",{onSubmit:t,className:"section-login-form"},W.a.createElement(xe.a,{name:"email",validate:[De.b,Ge],component:Fe.a,placeholder:"Email",type:"text"}),W.a.createElement(xe.a,{name:"password",validate:[De.b,Ge],component:Fe.a,placeholder:"Password",type:"password"}),W.a.createElement("div",{className:"col-sm-12 section-login-form-checkbox"},W.a.createElement(xe.a,{name:"rememberMe",component:"input",type:"checkbox"}),W.a.createElement("h5",null,"Remember me")),n&&W.a.createElement("span",{className:"errorValidation"},n),s?W.a.createElement(W.a.Fragment,null,W.a.createElement("img",{className:"captchaLogin",src:s,alt:""}),W.a.createElement(xe.a,{name:"captcha",validate:[De.b],component:Fe.a,className:"captchaInput"})):null,W.a.createElement(de.a,{isLoading:a}),W.a.createElement("button",{disabled:a},"Sign In"))})),_e=function(e){var t=e.setLoadingStatus,n=e.UserLogin,s=e.isLoading,a=e.captcha;return W.a.createElement("div",{className:"main"},W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"col-sm-12 header"},W.a.createElement(J.c,{to:"/login"},W.a.createElement("img",{className:"img-responsive",src:je.a,alt:""})),W.a.createElement("div",{className:"header-button"},W.a.createElement("a",{href:"https://social-network.samuraijs.com/signUp"},W.a.createElement("button",null,"Sign Up")))))),W.a.createElement("div",{className:"section-login"},W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"col-sm-4 col-sm-offset-4"},W.a.createElement("div",{className:"section-login-title"},W.a.createElement("h2",null,"Login Form")),W.a.createElement(He,{captcha:a,isLoading:s,onSubmit:function(e){t(!0),n(e)}}))))))},ze=Me,Ke=Object(V.b)((function(e){return{isLoading:e.loginPage.isLoading,captcha:e.loginPage.captcha}}),{setLoadingStatus:F,UserLogin:function(e){var t=e.email,n=e.password,s=e.rememberMe,a=e.captcha;return function(e){e(F(!0)),function(e,t,n,s){return T.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:s})}(t,n,s,a).then((function(t){0===t.data.resultCode?k().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.login,c=n.email;e(C(s,a,c,!0))}})):10===t.data.resultCode?T.post("/security/get-captcha-url").then((function(t){var n;e((n=t.data.url,{type:I,url:n}))})):t.data.messages.length>0&&e(Object(U.a)("login",{_error:t.data.messages[0]})),e(F(!1))}))}}})(Object(ee.f)(ze)),We=(n(297),function(e){var t=e.isLoading;return W.a.createElement("div",{className:"spinner-main"},t?W.a.createElement("img",{src:Pe.a,alt:""}):null)}),Ye=function(e){function t(){var e,n;Object(X.a)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(n=Object(q.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(a)))).state={url:null},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.getAuthStatus(),null==this.props.isAuth&&this.setState({url:this.props.location.pathname})}},{key:"getAuthStatus",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getAuthStatus();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.props.component;return e=null==this.props.isAuth?W.a.createElement(We,{isLoading:!0}):this.props.isAuth?W.a.createElement(Ue,{url:this.state.url}):W.a.createElement(Ke,null),W.a.createElement(ee.b,{path:t,render:function(){return e}})}}]),t}(W.a.Component),Be=Object(s.d)(ee.f,Object(V.b)((function(e){return{isAuth:e.authPage.isAuth}}),{setRedirectUrl:function(e){return{type:"authReducer/SET-SUCCESS-STATUS",pathRedirect:e}},getAuthStatus:function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n,s,a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:0===(n=e.sent).data.resultCode?(s=n.data.data,a=s.id,c=s.login,r=s.email,t(C(a,c,r,!0))):t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Ye);B.a.render(W.a.createElement(J.b,null,W.a.createElement(V.a,{store:z},W.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){e.exports=n.p+"static/media/spinner.5b11b33e.svg"},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return r}));var s=function(e){return e?void 0:"Field is empty"},a=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," symbols or less"):void 0}},c=function(e){return e&&"true"!==e&&"false"!==e?"Must be 'true' or 'false'":void 0},r=function(e){return e&&(e.includes("http://")||e.includes("https://"))?"Wrong format of domain (\u0431\u0435\u0437 http(s)://)":void 0}},53:function(e,t,n){"use strict";var s=n(0),a=n.n(s),c=n(41),r=n.n(c);t.a=function(e){var t=e.isLoading;return a.a.createElement("div",null,t?a.a.createElement("img",{src:r.a,alt:""}):null)}},66:function(e,t,n){e.exports=n.p+"static/media/logoin.ff1e30d7.png"},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var s=n(6),a=n(86),c=n(0),r=n.n(c),i=(n(258),function(e){var t=e.input,n=e.element,c=e.meta,i=c.touched,o=c.error,l=Object(a.a)(e,["input","element","meta"]),m=function(){return r.a.createElement("".concat(n),Object(s.a)({},t,{},l),null)};return i&&o?r.a.createElement("div",{className:"formControl-error"},m(),r.a.createElement("span",null,o)):r.a.createElement("div",{className:"formControl"},m())}),o=function(e){return r.a.createElement(i,Object.assign({element:"input"},e))},l=function(e){var t=e.input,n=e.meta,c=n.touched,i=n.error,o=Object(a.a)(e,["input","meta"]),l=function(){return r.a.createElement("input",Object(s.a)({},t,{},o),null)};return c&&i?r.a.createElement("div",{className:"formControlEdit-error"},l(),r.a.createElement("span",null,i)):r.a.createElement("div",{className:"formControlEdit"},l())}},93:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return l}));var s=function(e){return e.profilePage.profile},a=function(e){return e.authPage.id},c=function(e){return e.profilePage.isLoading},r=function(e){return e.profilePage.status},i=function(e){return e.profilePage.postsData},o=function(e){return e.profilePage.profile.photos},l=function(e){return e.authPage}},94:function(e,t,n){"use strict";var s=n(62),a=n(5),c=n.n(a),r=n(11),i=n(17),o=n(6),l=n(22).create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),m=function(e){return l.get("profile/status/".concat(e))},u=function(e){var t=new FormData;return t.append("image",e),l.put("profile/photo",t,{"Content-Type":"multipart/form-data"})},d=function(e){return l.get("profile/".concat(e)).then((function(e){return e.data}))},p=function(e){return l.put("profile/status",{status:e})},f=n(38);n.d(t,"a",(function(){return N})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return T})),n.d(t,"g",(function(){return k})),n.d(t,"j",(function(){return P})),n.d(t,"e",(function(){return C})),n.d(t,"h",(function(){return L})),n.d(t,"f",(function(){return R})),n.d(t,"i",(function(){return A}));var w="profileReducer/ADD-POST",E="profileReducer/DELETE-POST",h="profileReducer/SET-AVATAR",g="profileReducer/LIKE-POST",v="profileReducer/DISLIKE-POST",b={postsData:[{id:1,likesCount:232,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 1",blockedId:[]},{id:2,likesCount:15,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 2",blockedId:[]},{id:3,likesCount:24,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 3",blockedId:[]},{id:4,likesCount:55,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 4",blockedId:[]},{id:5,likesCount:125,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 5",blockedId:[]}],profile:null,status:"",isLoading:!1},N=function(e){return{type:w,post:e}},O=function(e){return{type:"profileReducer/SET-USER-PROFILE",profile:e}},j=function(e){return{type:"profileReducer/SET-LOADING-STATUS",status:e}},S=function(e){return{type:"profileReducer/SET-PROFILE-STATUS",status:e}},y=function(e){return{type:E,id:e}},T=function(e,t){return{type:v,id:e,userId:t}},k=function(e,t){return{type:g,id:e,userId:t}},P=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:0===(s=t.sent).data.resultCode&&n((a=s.data.data.photos,{type:h,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(j(!0)),t.next=3,d(e);case 3:s=t.sent,n(j(!1)),n(O(s));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n,a){var r,i,m,u,p,w,E;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().authPage.id,t.next=3,c=e,l.put("profile",c);case 3:if(0!==(i=t.sent).data.resultCode){t.next=11;break}return t.next=7,d(r);case 7:m=t.sent,n(O(m)),t.next=15;break;case 11:for(u={contacts:{}},p=0;p<i.data.messages.length;p++)w=i.data.messages[p].replace("(Contacts->","").replace(")",""),E=(E=w.replace("Invalid url format ","")).toLowerCase(),u={contacts:Object(o.a)({},u.contacts,Object(s.a)({},E,w))};return n(Object(f.a)("edit",u)),t.abrupt("return",Promise.reject());case 15:case"end":return t.stop()}var c}),t)})));return function(e,n){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:200===(s=t.sent).status&&n(S(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:0===t.sent.data.resultCode&&n(S(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)({},e,{postsData:[].concat(Object(i.a)(e.postsData),[{id:1e3*Math.random(0),likesCount:0,message:t.post,blockedId:[]}])});case"profileReducer/SET-USER-PROFILE":return Object(o.a)({},e,{profile:t.profile});case"profileReducer/SET-LOADING-STATUS":return Object(o.a)({},e,{isLoading:t.status});case g:return Object(o.a)({},e,{postsData:Object(i.a)(e.postsData.map((function(e){return e.id===t.id&&(e.likesCount++,e.blockedId=[].concat(Object(i.a)(e.blockedId),[t.userId])),e})))});case v:return Object(o.a)({},e,{postsData:Object(i.a)(e.postsData.map((function(e){return e.id===t.id&&(e.likesCount--,e.blockedId=Object(i.a)(e.blockedId.filter((function(e){return e!==t.userId})))),e})))});case h:return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});case E:return Object(o.a)({},e,{postsData:Object(i.a)(e.postsData.filter((function(e){return e.id!==t.id})))});case"profileReducer/SET-PROFILE-STATUS":return Object(o.a)({},e,{status:t.status});default:return e}}},95:function(e,t,n){e.exports=n.p+"static/media/default-avatar.d2c893f5.png"},97:function(e,t,n){}},[[161,1,2]]]);
//# sourceMappingURL=main.744d0a7c.chunk.js.map