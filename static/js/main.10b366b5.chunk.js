(this.webpackJsonpquestionnaire=this.webpackJsonpquestionnaire||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var n=c(4),a=c.n(n),i=c(8),s=c.n(i),r=(c(15),c(16),"Markku Sukanen"),j=c(1),o=function(t){var e=t.title;return Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("h1",{children:e}),Object(j.jsxs)("p",{children:["2021 by ",Object(j.jsx)("em",{children:r})]})]})};o.defaultProps={title:"JSQuestionnaire w/React"};var b=o,u=c(3),O=c(10),h=c(9),l=c(6),d=c(7),v=c(0),f=c(2),x=function(t){var e=t.text,c=t.onClick;return Object(j.jsx)("button",{className:"btn",onClick:c,children:e})},p=function(t){var e=t.title,c=t.content;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:e}),c]})},m=Object(f.a)("text"),y=Object(f.a)("answers"),k=Object(f.a)("pts4correct"),g=Object(f.a)("correctIdx"),w=Object(f.a)("userAnsIdx"),P=function(){function t(e){var c=this;Object(l.a)(this,t),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:void 0}),Object.defineProperty(this,w,{writable:!0,value:void 0}),Object(v.a)(this,w)[w]=void 0,Object(v.a)(this,m)[m]=e.t,Object(v.a)(this,y)[y]=[],e.a.forEach((function(t){Object(v.a)(c,y)[y].push(t)})),Object(v.a)(this,k)[k]=void 0===e.p?0:e.p,Object(v.a)(this,g)[g]=e.c}return Object(d.a)(t,[{key:"text",get:function(){return Object(v.a)(this,m)[m]}},{key:"answers",get:function(){return Object(v.a)(this,y)[y]}},{key:"pts4correct",get:function(){return Object(v.a)(this,k)[k]}},{key:"correct",get:function(){return void 0===Object(v.a)(this,g)[g]?Object(j.jsx)("i",{children:"\u2014 ei oikeaa tai v\xe4\xe4r\xe4\xe4 vastausta"}):"="===Object(v.a)(this,m)[m][Object(v.a)(this,m)[m].length-1]?Object(v.a)(this,y)[y][Object(v.a)(this,g)[g]]:": "+Object(v.a)(this,y)[y][Object(v.a)(this,g)[g]]}},{key:"userAnswer",get:function(){return void 0!==Object(v.a)(this,g)[g]&&Object(v.a)(this,w)[w]!==Object(v.a)(this,g)[g]?'...mutta arvasit "'.concat(Object(v.a)(this,y)[y][Object(v.a)(this,w)[w]],'"'):""},set:function(t){void 0!==t&&(t<0||t>=Object(v.a)(this,y)[y].length)&&(console.log('ERR: USER INP "'.concat(t,'" out of bounds or completely invalid.')),t=void 0),Object(v.a)(this,w)[w]=t}},{key:"userPoints",get:function(){return void 0===Object(v.a)(this,g)[g]||Object(v.a)(this,g)[g]===Object(v.a)(this,w)[w]?Object(v.a)(this,k)[k]:0}}]),t}(),N=Object(f.a)("summaryID"),S=Object(f.a)("questionData"),A=Object(f.a)("qs"),C=Object(f.a)("maxPts"),E=function(t){Object(O.a)(c,t);var e=Object(h.a)(c);function c(t){var n;return Object(l.a)(this,c),n=e.call(this,t),Object.defineProperty(Object(u.a)(n),A,{writable:!0,value:[]}),Object.defineProperty(Object(u.a)(n),C,{writable:!0,value:0}),Object(v.a)(c,S)[S].forEach((function(t){var e=new P(t);Object(v.a)(Object(u.a)(n),C)[C]+=e.pts4correct,Object(v.a)(Object(u.a)(n),A)[A].push(e)})),n.next=n.next.bind(Object(u.a)(n)),n.state={stage:void 0},n}return Object(d.a)(c,[{key:"render",value:function(){switch(this.state.stage){case void 0:return Object(j.jsx)(p,{title:"Questionnaire",content:Object(j.jsx)(x,{text:"\u2026start\u2026",onClick:this.next})});case Object(v.a)(c,N)[N]:return Object(j.jsx)(p,{title:"Summary",content:this._contentSummary()});default:return Object(j.jsx)(p,{title:Object(v.a)(this,A)[A][this.state.stage].text,content:this._contentQ(this.state.stage)})}}},{key:"_contentSummary",value:function(){var t=0;return Object(v.a)(this,A)[A].forEach((function(e){t+=e.userPoints})),Object(j.jsxs)("div",{id:"summary-text",children:[Object(j.jsx)("div",{children:Object(v.a)(this,A)[A].map((function(t){return Object(j.jsxs)("p",{children:[t.text," ",t.correct,Object(j.jsx)("br",{}),t.userAnswer]})}))}),Object(j.jsxs)("p",{children:["Pisteet: ",t," / ",Object(v.a)(this,C)[C]]}),Object(j.jsx)(x,{text:"uudestaan?!",onClick:this.next})]})}},{key:"_contentQ",value:function(t){var e=this;return Object(j.jsx)("div",{className:"table",children:Object(v.a)(this,A)[A][t].answers.map((function(c,n){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:c}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)(x,{text:"valitse",onClick:function(){return e._answerAndProceed(t,n)}})})]})}))})}},{key:"_answerAndProceed",value:function(t,e){Object(v.a)(this,A)[A][this.state.stage].userAnswer=e,this.next()}},{key:"next",value:function(){this.setState((function(t){var e=void 0===t.stage?0:t.stage+1;return e>=Object(v.a)(c,S)[S].length&&(e=Object(v.a)(c,N)[N]),{stage:e}}))}}]),c}(a.a.Component);Object.defineProperty(E,N,{writable:!0,value:-1}),Object.defineProperty(E,S,{writable:!0,value:[{t:"Paljonko kello on",a:["Paljon","Aika v\xe4h\xe4n","Onhan se"]},{t:"1+1 =",a:["Numero","Laskentoa",2],p:5,c:2},{t:"T\xe4m\xe4 on soitin",a:["Puhelin","Kitara","Kitaro"],p:2,c:1}]});var I=E;var _=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{title:"JSQuestionnaire w/React"}),Object(j.jsx)(I,{})]})},Q=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),i(t),s(t)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),Q()}},[[18,1,2]]]);
//# sourceMappingURL=main.10b366b5.chunk.js.map