(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"type":"AdaptiveCard","body":[{"type":"Container","items":[{"type":"TextBlock","wrap":true,"size":"Medium","weight":"Bolder","text":"Check the fiber connection "},{"type":"TextBlock","wrap":true,"text":"Let\'s check the fiber connection on your AT&T Wi-Fi Gateway. The video below demonstrates how."},{"profileId":"","deviceMac":"","preText":"","mimeType":"svg","id":"SVG","type":"Image","url":"https://d3adodch6dgzf3.cloudfront.net/VA/PA/checkFiberConnection/320_Bridge_connection.gif"},{"type":"TextBlock","wrap":true,"text":"Select Next once you have verified the connection."}]}],"actions":[{"type":"Action.Submit","title":"Next","data":{"value":"DONE"}},{"type":"Action.Submit","title":"No","data":{"value":"REJECTED"}}],"version":"1.5","$schema":"http://adaptivecards.io/schemas/adaptive-card.json"}')},31:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(17),i=a.n(c),s=a(2),o=(a(31),a(25)),r=a.n(o),l=a(23),d=a.n(l),h=a(24),u=a.n(h),j=a(6),b=a.n(j),p=a(3),v=a(0),g=function(e){return Object(v.jsxs)("div",{className:"options",children:[Object(v.jsx)("h1",{className:"options-header",children:e.title}),Object(v.jsx)("div",{className:"options-container",children:e.options.map((function(e){return Object(v.jsx)("div",{className:"option-item",onClick:e.handler,children:e.name},e.id)}))})]})},O=function(e){var t=[{name:"Show global statistics",handler:e.actionProvider.handleGlobalStats,id:1},{name:"Show local statistics",handler:e.actionProvider.handleLocalStats,id:2},{name:"Emergency contact",handler:e.actionProvider.handleContact,id:3},{name:"Clinical medicine delivery",handler:e.actionProvider.handleMedicine,id:4}];return Object(v.jsx)(g,Object(p.a)({options:t,title:"Options"},e))},m=a(4),f=a(7),x=a(11),w=a.n(x),y=function(){var e=Object(f.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.hpb.health.gov.lk/api/get-current-statistical");case 2:return t=e.sent,e.next=5,t.json();case 5:return t=e.sent,e.abrupt("return",t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(s.a)(i,2),r=o[0],l=o[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,c(t),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(v.jsxs)("div",{className:"stats",children:[Object(v.jsxs)("div",{className:"column-left",children:[Object(v.jsx)("p",{children:" Total Cases :"}),Object(v.jsx)("p",{children:" New Cases :"}),Object(v.jsx)("p",{children:" Recovered :"}),Object(v.jsx)("p",{children:" Deaths :"})]}),Object(v.jsxs)("div",{className:"column-right",children:[Object(v.jsx)(w.a,{color:"#fff",loading:r}),Object(v.jsx)("p",{children:a.global_total_cases}),Object(v.jsx)("p",{children:a.global_new_cases}),Object(v.jsx)("p",{children:a.global_recovered}),Object(v.jsx)("p",{children:a.global_deaths})]})]})},S=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(s.a)(i,2),r=o[0],l=o[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,c(t),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(v.jsxs)("div",{className:"stats",children:[Object(v.jsxs)("div",{className:"column-left",children:[Object(v.jsx)("p",{children:" Total Cases :"}),Object(v.jsx)("p",{children:" New Cases :"}),Object(v.jsx)("p",{children:" Recovered :"}),Object(v.jsx)("p",{children:" Total Deaths :"}),Object(v.jsx)("p",{children:" New Deaths :"}),Object(v.jsx)("p",{children:" Hospitalized :"})]}),Object(v.jsxs)("div",{className:"column-right",children:[Object(v.jsx)(w.a,{color:"#fff",loading:r}),Object(v.jsx)("p",{children:a.local_total_cases}),Object(v.jsx)("p",{children:a.local_new_cases}),Object(v.jsx)("p",{children:a.local_recovered}),Object(v.jsx)("p",{children:a.local_deaths}),Object(v.jsx)("p",{children:a.local_new_deaths}),Object(v.jsx)("p",{children:a.local_active_cases})]})]})},C=a.p+"static/media/call.0e879c44.svg",M=function(){return Object(v.jsxs)("a",{href:"tel:1999",className:"tel-link",children:[Object(v.jsx)("img",{className:"url-icon",alt:"CallIcon",src:C}),Object(v.jsx)("h1",{className:"tel-header",children:" Call 1999 "})]})},N=function(e){var t=e.url,a=e.title;return Object(v.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"url-link",children:[Object(v.jsxs)("svg",{width:"40px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(v.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),Object(v.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),Object(v.jsxs)("h1",{className:"url-header",children:["Go to ",a]})]})},T=function(){return Object(v.jsx)(N,{url:"https://www.hpb.health.gov.lk/en/covid-19#:~:text=Delivery%20of%20medicine%20from%20hospital%20clinics",title:"delivery of medicine from hospital clinics"})},B=a.p+"static/media/bot.f1377573.svg",P=function(){return Object(v.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar",children:Object(v.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar-container",style:{background:"none"},children:Object(v.jsx)("img",{alt:"BotAvatar",src:B})})})},A=function(e){var t=e.messages[e.messages.length-1],a=t.actions,c=(t.reply,Object(n.useState)(!1)),i=Object(s.a)(c,2),o=i[0],r=i[1];return o?"":Object(v.jsx)("div",{children:a.map((function(t){return Object(v.jsx)("button",{style:{display:"block",marginTop:10,backgroundColor:"teal",color:"white",width:"100%",padding:"10px 30px",borderWidth:0,borderRadius:100},onClick:function(){r(!0);var a=Object(j.createClientMessage)(t.data.value);e.actionProvider.addMessageToState(a)},children:t.title},t.title)}))})},_={lang:"no",botName:"CoBot",customStyles:{botMessageBox:{backgroundColor:"#04668a"},chatButton:{backgroundColor:"#0f5faf"}},initialMessages:[],state:{},customComponents:{botAvatar:function(e){return Object(v.jsx)(P,Object(p.a)({},e))}},widgets:[{widgetName:"overview",widgetFunc:function(e){return Object(v.jsx)(O,Object(p.a)({},e))},mapStateToProps:["messages"]},{widgetName:"globalStatistics",widgetFunc:function(e){return Object(v.jsx)(k,{})}},{widgetName:"localStatistics",widgetFunc:function(e){return Object(v.jsx)(S,{})}},{widgetName:"emergencyContact",widgetFunc:function(e){return Object(v.jsx)(M,{})}},{widgetName:"medicineDelivery",widgetFunc:function(e){return Object(v.jsx)(T,{})}},{widgetName:"actions",widgetFunc:function(e){return Object(v.jsx)(A,Object(p.a)({},e))},mapStateToProps:["messages"]}]},H=a(12),L=a(13),V=a(19),D=function(){function e(t,a){Object(H.a)(this,e),this.actionProvider=t,this.state=a}return Object(L.a)(e,[{key:"parse",value:function(e){var t=this;if(e.includes("hi")||e.includes("hi"))return this.actionProvider.handleText({text:"Welcome, Let's get started"});if(!e.includes("adapt"))return e.includes("options")||e.includes("help")||e.includes("do for me")?this.actionProvider.handleOptions({withAvatar:!0}):e.includes("talk")||e.includes("speak")||e.includes("real person")||e.includes("call")||e.includes("emergency")||e.includes("contact")?this.actionProvider.handleContact():e.includes("stats")||e.includes("statistics")||e.includes("deaths")?[this.actionProvider.handleGlobalStats(),this.actionProvider.handleLocalStats()]:e.includes("medicine")||e.includes("delivery")?this.actionProvider.handleMedicine():e.includes("joke")||e.includes("jokes")||e.includes("funny")?this.actionProvider.handleJoke():e.includes("thanks")||e.includes("thank you")?this.actionProvider.handleThanks():this.actionProvider.handleOptions({withAvatar:!0});var a=V.body,n=V.actions,c=a[0].items;c.forEach((function(e,a){if("TextBlock"===e.type)return a===c.length-1&&n.length>0?t.actionProvider.handleActionSubmit({actions:n,text:e.text}):t.actionProvider.handleText({text:e.text})}))}}]),e}(),E=a(26),I=Object(L.a)((function e(t,a){var n=this;Object(H.a)(this,e),this.handleText=function(e){var t=e.text,a=n.createChatBotMessage(t);n.addMessageToState(a)},this.handleActionSubmit=function(e){var t=e.text,a=e.actions,c=n.createChatBotMessage(t,{widget:"actions",loading:!0,terminateLoading:!0,actions:a,cardType:"actions",reply:function(e){return n.createClientMessage(e)}});n.addMessageToState(c)},this.handleOptions=function(e){var t=n.createChatBotMessage("How can I help you? Below are some possible options.",Object(p.a)({widget:"overview",loading:!0,terminateLoading:!0},e));n.addMessageToState(t)},this.handleGlobalStats=function(){var e=n.createChatBotMessage("Here's the latest global stats.",{widget:"globalStatistics",loading:!0,terminateLoading:!0,withAvatar:!0});n.addMessageToState(e)},this.handleLocalStats=function(){var e=n.createChatBotMessage("Here's the latest stats in Sri Lanka.",{widget:"localStatistics",loading:!0,terminateLoading:!0,withAvatar:!0});n.addMessageToState(e)},this.handleContact=function(){var e=n.createChatBotMessage("ola.",{widget:"emergencyContact",loading:!0,terminateLoading:!0,withAvatar:!0});n.addMessageToState(e)},this.handleMedicine=function(){var e=n.createChatBotMessage("To have clinical medicine safely delivered to your home, please refer to the link below.",{widget:"medicineDelivery",loading:!0,terminateLoading:!0,withAvatar:!0});n.addMessageToState(e)},this.handleJoke=function(){var e=["So many coronavirus jokes out there, it\u2019s a pundemic!","I\u2019ll tell you a coronavirus joke now, but you\u2019ll have to wait two weeks to see if you got it!","Did you hear the joke about coronavirus? Never mind, I don\u2019t want to spread it around!","What should you do if you don\u2019t understand a coronavirus joke? Be patient!","Why do they call it the novel coronavirus? It\u2019s a long story...","Since we\u2019re all in quarantine I guess we\u2019ll be making only inside jokes from now on!"],t=e[Math.floor(Math.random()*e.length)],a=n.createChatBotMessage(t);n.addMessageToState(a)},this.handleThanks=function(){var e=n.createChatBotMessage("You're welcome, and stay safe!");n.addMessageToState(e)},this.addMessageToState=function(e){n.setState((function(t){return Object(p.a)(Object(p.a)({},t),{},{messages:[].concat(Object(E.a)(t.messages),[e])})}))},this.createChatBotMessage=t,this.setState=a,this.createClientMessage=j.createClientMessage})),Z=(a(48),function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h3",{children:"Chat Bot"})})});function F(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)(r.a,{children:[Object(v.jsx)("title",{children:" Chatbot "}),Object(v.jsx)("meta",{name:"description",content:""})]}),Object(v.jsx)(Z,{}),a&&Object(v.jsx)(d.a,{big:!0,children:Object(v.jsx)("div",{className:"app-chatbot-container",children:Object(v.jsx)(b.a,{config:_,messageParser:D,actionProvider:I})})}),Object(v.jsx)(u.a,{left:!0,cascade:!0,children:Object(v.jsxs)("button",{className:"app-chatbot-button",onClick:function(){return c((function(e){return!e}))},children:[Object(v.jsx)("div",{children:"Bot"}),Object(v.jsx)("svg",{viewBox:"0 0 640 512",className:"app-chatbot-button-icon",children:Object(v.jsx)("path",{d:"M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"})})]})})]})}var G=document.getElementById("root");i.a.render(Object(v.jsx)(n.StrictMode,{children:Object(v.jsx)(F,{})}),G)}},[[51,1,2]]]);
//# sourceMappingURL=main.e89f7e4f.chunk.js.map