(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[4],{298:function(e,a,t){},299:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},319:function(e,a,t){"use strict";t.r(a);var n=t(14),s=t(0),i=t.n(s),c=(t(298),t(299),t(300),t(10)),r=function(e){var a=e.id,t=e.name;return i.a.createElement("li",{className:"section-dialogs-inner-members-li"},i.a.createElement(c.c,{className:"section-dialogs-inner-members-li-url",to:"/dialogs/"+a},t))},m=function(e){var a=e.membersData.map((function(e){return i.a.createElement(r,{id:e.id,name:e.name})}));return i.a.createElement("ul",{className:"section-dialogs-inner-members"},a)},l=(t(301),function(e){var a=e.messagesData,t=e.id,n=a.map((function(e){return e.id===t?i.a.createElement("div",{className:"section-dialogs-inner-active-message"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-2"},i.a.createElement("div",{className:"section-dialogs-inner-active-message-avatar"},i.a.createElement("img",{className:"rounded-circle",src:"https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg",alt:""}))),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("div",{className:"section-dialogs-inner-active-message-item center-block"},e.message)))):null}));return i.a.createElement("div",{className:"section-dialogs-inner-active"},n)}),o=t(33),d=t(103),u=(t(302),t(127)),g=t(128),v=Object(g.a)({form:"SendMessageFormn"})((function(e){var a=e.handleSubmit;return i.a.createElement("form",{onSubmit:a,name:"SendMessage"},i.a.createElement("div",{className:"section-dialogs-inner-newmessage"},i.a.createElement(u.a,{name:"message",component:"textarea",className:"section-dialogs-inner-newmessage-input",id:"",rows:"2"}),i.a.createElement("button",{className:"section-dialogs-inner-newmessage-button"},"Send Message")))})),E=function(e){var a=e.addMessageActionCreater;return i.a.createElement(v,{onSubmit:function(e){var t=e.message;a(t)}})},f=Object(n.b)((function(e){return{newMessageText:e.messagesPage.messagesData}}),{addMessageActionCreater:d.a})(E),b=function(e){var a=e.dialogsData,t=e.membersData,n=e.messagesData,s=a.map((function(e){return i.a.createElement(o.a,{exact:!0,path:"/dialogs/"+e.id,render:function(){return i.a.createElement(l,{id:e.id,messagesData:n})}})}));return i.a.createElement(c.a,null,i.a.createElement("div",{className:"section-dialogs"},i.a.createElement("div",{className:"section-dialogs-inner"},i.a.createElement("div",{className:"col-sm-3"},i.a.createElement(m,{membersData:t})),i.a.createElement("div",{className:"col-sm-9"},i.a.createElement("div",{className:"section-dialogs-inner-active"},s),i.a.createElement(f,null)))))},N=function(e){return e.messagesPage.dialogsData},p=function(e){return e.messagesPage.membersData},D=function(e){return e.messagesPage.messagesData},w=Object(n.b)((function(e){return{dialogsData:N(e),membersData:p(e),messagesData:D(e)}}))(b);a.default=w}}]);
//# sourceMappingURL=4.ad4625dd.chunk.js.map