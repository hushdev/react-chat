(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{1:function(e,t,a){e.exports={msg:"Message_msg__2R95b",msg_wrap:"Message_msg_wrap__LUVdI",msg_user:"Message_msg_user__2dXOZ",msg_text:"Message_msg_text__SPgm4",msg_time:"Message_msg_time__1x4VT"}},16:function(e,t,a){e.exports=a.p+"static/media/send.6850c1de.svg"},17:function(e,t,a){e.exports={header:"Header_header__2XAj3"}},18:function(e,t,a){e.exports={signIn:"SignIn_signIn__PGjkH"}},20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),s=(a(25),a(3)),i=(a(26),a(8)),m=a.n(i),u=a(14),l=a(9),p=a.n(l),g=a(1),h=a.n(g),d=function(e){var t=e.incoming?"incoming":"outgoing",a=e.incoming?r.a.createElement("img",{src:e.photo,alt:""}):null;return r.a.createElement("div",{className:"".concat(h.a.msg," ").concat(t)},a,r.a.createElement("div",{className:h.a.msg_wrap},r.a.createElement("p",{className:h.a.msg_user},e.name),r.a.createElement("p",{className:h.a.msg_text},e.message),r.a.createElement("p",{className:h.a.msg_time},e.time)))},f=a(15),_=a(16),E=a.n(_),v=function(e){var t=Object(n.useRef)(),a=e.firestore.collection("messages"),c=a.orderBy("createdAt"),o=Object(f.a)(c,{idField:"id"}),i=Object(s.a)(o,1)[0],l=Object(n.useState)(""),g=Object(s.a)(l,2),h=g[0],_=g[1],v=function(){var t=Object(u.a)(m.a.mark((function t(n){var r,c,o,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=e.auth.currentUser,c=r.uid,o=r.photoURL,s=r.displayName,t.next=4,a.add({text:h,createdAt:e.firebase.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:o,displayName:s});case 4:_(""),console.log(i);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.a.chatroom},r.a.createElement(d,{incoming:!0,message:"Hello. I'm happy to meet you in this chatroom.",name:"Admin"}),i&&i.map((function(e){return r.a.createElement(d,{key:e.id,message:e.text,name:e.displayName,photo:e.photoURL})})),r.a.createElement("span",{ref:t})),r.a.createElement("form",{className:p.a.input_form},r.a.createElement("input",{type:"text",placeholder:"Message...",value:h,onChange:function(e){return _(e.target.value)}}),r.a.createElement("button",{onClick:v},r.a.createElement("img",{src:E.a,alt:""}))))},b=a(17),w=a.n(b),x=function(e){return r.a.createElement("header",{className:w.a.header},r.a.createElement("span",null,"Chat-room"),r.a.createElement(y,{auth:e.auth}))},y=function(e){return e.auth.currentUser&&r.a.createElement("button",{onClick:function(){return e.auth.signOut()}},"Sign Out")},I=a(18),N=a.n(I),j=function(e){return r.a.createElement("button",{onClick:function(){var t=e.provider;e.auth.signInWithPopup(t)},className:N.a.signIn},"Sign In with google")},k=a(2),O=a.n(k),S=(a(28),a(32),a(19));O.a.initializeApp({apiKey:"AIzaSyACZH4pfHj3yUHLdStsruXOPk4u_MJVuI4",authDomain:"http://pirrol.000webhostapp.com/",databaseURL:"https://react-chat-e26a1.firebaseio.com",projectId:"react-chat-e26a1",storageBucket:"react-chat-e26a1.appspot.com",messagingSenderId:"450504077203",appId:"1:450504077203:web:8119f72ff6dbd5b0a8c266"});var A=O.a.auth(),M=O.a.firestore(),U=function(){var e=Object(S.a)(A),t=Object(s.a)(e,1)[0],a=new O.a.auth.GoogleAuthProvider;return t?t?r.a.createElement("div",{className:"chat"},r.a.createElement(x,{auth:A}),r.a.createElement(v,{auth:A,firestore:M,firebase:O.a})):void 0:r.a.createElement("div",{className:"chat"},r.a.createElement(j,{provider:a,auth:A}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={chatroom:"Chat_chatroom__2KQXD"}}},[[20,1,2]]]);
//# sourceMappingURL=main.550a03fd.chunk.js.map