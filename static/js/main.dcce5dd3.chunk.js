(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{11:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(5),r=c.n(n),a=(c(11),c(3)),i=c.n(a),l=c(6),d=c(4),j=(c(13),c(0)),h=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)([]),a=Object(d.a)(r,2),h=a[0],o=a[1],x=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return t=e.sent,e.next=9,t.statewise;case 9:return h=e.sent,o(h),console.log(h.length),e.next=14,t.statewise[0];case 14:t=e.sent,n(t),console.log(t),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return x()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsx)("div",{className:"container-fluid d-flex justify-content-center my-5",children:Object(j.jsx)("div",{className:"text-center my-1",children:Object(j.jsxs)("div",{class:"content",children:[Object(j.jsx)("h2",{children:"India"}),Object(j.jsx)("h2",{children:"India"})]})})}),Object(j.jsx)("div",{className:"covid-text d-flex justify-content-center",children:Object(j.jsx)("h2",{"data-text":"Covind-19 Live...",className:"text-danger",children:"Covid-19 Live\ud83d\udd34"})}),Object(j.jsxs)("div",{className:"container-fluid row flex-column text-center",children:[Object(j.jsxs)("div",{className:"row  ",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-warning mx-5 text-white ",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{style:{fontSize:"15px"},children:"Total"}),"Confirmed Cases"]}),Object(j.jsx)("h2",{children:c.confirmed})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-primary mx-5 text-white ",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{style:{fontSize:"15px"},children:"Total"})," Active Cases"]}),Object(j.jsx)("h2",{children:c.active})]})]}),Object(j.jsxs)("div",{className:"row  ",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-success mx-5 text-white ",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{style:{fontSize:"15px"},children:"Total"}),"Recovered Cases"]}),Object(j.jsx)("h2",{children:c.recovered})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-danger mx-5 text-white ",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{style:{fontSize:"15px"},children:"Total"}),"Total Deaths"]}),Object(j.jsx)("h2",{children:c.deaths})]})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-secondary mx-5 text-white",children:[Object(j.jsx)("h3",{children:"Last Upaded At"}),Object(j.jsx)("h4",{children:c.lastupdatedtime})]})})]}),Object(j.jsx)("div",{className:"container-fluid mt-5",children:Object(j.jsxs)("table",{class:"table ",children:[Object(j.jsx)("thead",{className:"bg-dark text-white",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"State"}),Object(j.jsx)("th",{scope:"col",children:"confirmed"}),Object(j.jsx)("th",{scope:"col",children:"Recovered"}),Object(j.jsx)("th",{scope:"col",children:"Deaths"}),Object(j.jsx)("th",{scope:"col",children:"Active"}),Object(j.jsx)("th",{scope:"col",children:"Updated"})]})}),Object(j.jsx)("tbody",{children:h.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",className:"text-primary",children:e.state}),Object(j.jsx)("th",{scope:"col",className:"text-warning",children:e.confirmed}),Object(j.jsx)("th",{scope:"col",className:"text-success",children:e.recovered}),Object(j.jsx)("th",{scope:"col",className:"text-danger",children:e.deaths}),Object(j.jsx)("th",{scope:"col",className:"text-primary",children:e.active}),Object(j.jsx)("th",{scope:"col",className:"text-secondary",children:e.lastupdatedtime})]},t)}))})]})})]}),Object(j.jsx)("div",{className:"bg-primary text-white d-flex justify-content-center align-items-center",style:{height:"50px"},children:Object(j.jsx)("h4",{children:"Made with Bhartendu Sharma \xa9 2021"})})]})};r.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dcce5dd3.chunk.js.map