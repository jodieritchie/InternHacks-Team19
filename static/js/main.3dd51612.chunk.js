(this.webpackJsonpbudgetbutler=this.webpackJsonpbudgetbutler||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(27),s=c.n(r),i=(c(89),c(90),c(0),c(131)),o=c(126),l=c(133),d=c(74),j=(c(28),c(11)),u=c(50),b=(c(91),c(109),u.a.initializeApp({apiKey:"AIzaSyDU3m77ICfjOgfMYXpQvK53zvTCAU-ILnc",authDomain:"budgetbutlerlogin.firebaseapp.com",projectId:"budgetbutlerlogin",storageBucket:"budgetbutlerlogin.appspot.com",messagingSenderId:"727666401221",appId:"1:727666401221:web:f8101f5a85a3892e3035ac"})),h=u.a.firestore(),O=b.auth(),x=c(3),m=n.a.createContext();function p(){return Object(a.useContext)(m)}function g(e){var t=e.children,c=Object(a.useState)(),n=Object(j.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(!0),o=Object(j.a)(i,2),l=o[0],d=o[1];Object(a.useEffect)((function(){return O.onAuthStateChanged((function(e){s(e),d(!1)}))}),[]);var u={currentUser:r,login:function(e,t){return O.signInWithEmailAndPassword(e,t)},signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},logout:function(){return O.signOut()}};return Object(x.jsx)(m.Provider,{value:u,children:!l&&t})}var f=c(15);var v=function(){var e=Object(f.f)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{collapseOnSelect:!0,expand:"md",variant:"dark",class:"navbar",children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(i.a.Brand,{className:"site-name",href:"/",children:"Budget Butler"}),Object(x.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(i.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-center",children:Object(x.jsxs)(l.a,{className:"me-auto",id:"subList",children:[Object(x.jsx)(l.a.Link,{id:"animate",href:"/overview",children:"Overview"}),Object(x.jsx)(l.a.Link,{id:"animate",href:"/groceries",children:"Grocery"}),Object(x.jsx)(l.a.Link,{id:"animate",href:"/profile",children:"Profile"}),Object(x.jsx)(d.a,{variant:"dark",onClick:function(){e.push("/login"),u.a.auth().signOut().then((function(){})).catch((function(e){}))},children:"Log Out"})]})})]})}),Object(x.jsx)("div",{class:"custom-shape-divider-top-1626500503",children:Object(x.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(x.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",class:"shape-fill"}),Object(x.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",class:"shape-fill"}),Object(x.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",class:"shape-fill"})]})})]})},y=c(22),C=c(16),w=c.n(C),k=c(23);c(101);var N=c(127),S=c(75),L=c(132),P=c.p+"static/media/group170.c38ae353.png";function I(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=p().login,n=Object(a.useState)(""),r=Object(j.a)(n,2),s=(r[0],r[1]),i=Object(a.useState)(!1),l=Object(j.a)(i,2),u=l[0],b=l[1],h=Object(f.f)();function O(){return(O=Object(k.a)(w.a.mark((function a(n){return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,s(""),b(!0),a.next=6,c(e.current.value,t.current.value);case 6:h.push("/profile"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),s("Failed to log in");case 12:b(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)("div",{className:"leftCol",lg:7,md:6,sm:12,children:Object(x.jsx)(S.a,{className:"logoCompName",children:Object(x.jsx)("img",{className:"w-50 p-3",id:"logo",src:P,alt:"Logo"})})}),Object(x.jsx)(S.a,{lg:5,md:6,sm:12,className:"text-left mt-5 p-3",children:Object(x.jsx)(L.a,{className:"login-form",id:"login-form",onSubmit:function(e){return O.apply(this,arguments)},children:Object(x.jsxs)(o.a,{style:{paddingTop:"12vh",paddingRight:"10vw",paddingLeft:"5vw"},children:[Object(x.jsx)(L.a.Group,{children:Object(x.jsx)(L.a.Label,{children:Object(x.jsx)("h2",{className:"registerDir",children:"Login to Account"})})}),Object(x.jsx)(L.a.Label,{children:"Email Address *"}),Object(x.jsx)(L.a.Group,{controlId:"formBasicEmail",children:Object(x.jsx)(L.a.Control,{type:"email",className:"text-left",placeholder:"Enter email address",ref:e,required:!0})}),Object(x.jsx)(L.a.Label,{children:"Password *"}),Object(x.jsx)(L.a.Group,{controlId:"formBasicPassword",children:Object(x.jsx)(L.a.Control,{type:"password",className:"text-left",placeholder:"Password",ref:t,required:!0})}),Object(x.jsxs)(d.a,{variant:"dark btn-block",disabled:u,type:"submit",children:[" ","Login"]}),Object(x.jsx)(L.a.Group,{className:"mb-3",children:Object(x.jsx)(L.a.Row,{children:Object(x.jsx)(y.b,{to:"/signup",className:"link",children:Object(x.jsx)(L.a.Label,{column:"lg",lg:12,children:Object(x.jsx)("h6",{children:"Don't have an account? Sign Up"})})})})})]})})})]})})}function B(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=p().signup,r=Object(a.useState)(""),s=Object(j.a)(r,2),i=(s[0],s[1]),l=Object(a.useState)(!1),u=Object(j.a)(l,2),b=(u[0],u[1]),h=Object(f.f)();function O(){return(O=Object(k.a)(w.a.mark((function a(r){return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),t.current.value===c.current.value){a.next=3;break}return a.abrupt("return",i("Passwords do not match"));case 3:return a.prev=3,i(""),b(!0),a.next=8,n(e.current.value,t.current.value);case 8:h.push("/register"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),i("Failed to create an account");case 14:b(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)("div",{className:"leftCol",lg:7,md:6,sm:12,children:Object(x.jsx)(S.a,{className:"logoCompName",children:Object(x.jsx)("img",{className:"w-50 p-3",id:"logo",src:P,alt:"Logo"})})}),Object(x.jsx)(S.a,{lg:5,md:6,sm:12,className:"text-left mt-5 p-3",children:Object(x.jsx)(L.a,{className:"login-form",id:"login-form",children:Object(x.jsxs)(o.a,{style:{paddingTop:"5vh",paddingRight:"10vw",paddingLeft:"5vw"},children:[Object(x.jsx)(L.a.Group,{children:Object(x.jsx)(L.a.Label,{children:Object(x.jsx)("h2",{className:"registerDir",children:"Create Account"})})}),Object(x.jsx)(L.a.Label,{children:"Email Address *"}),Object(x.jsx)(L.a.Group,{controlId:"validationCustom01",children:Object(x.jsx)(L.a.Control,{required:!0,type:"email",id:"email",ref:e,className:"text-left",placeholder:"Enter email address"})}),Object(x.jsx)(L.a.Label,{id:"password-label",children:"Create Password *"}),Object(x.jsx)(L.a.Group,{controlId:"validationCustom02",children:Object(x.jsx)(L.a.Control,{required:!0,type:"password",id:"password",className:"text-left",ref:t,placeholder:"Password"})}),Object(x.jsx)(L.a.Label,{id:"conpassword-label",children:"Confirm Password *"}),Object(x.jsx)(L.a.Group,{controlId:"validationCustom03",children:Object(x.jsx)(L.a.Control,{required:!0,ref:c,id:"conpassword",type:"password",className:"text-left",placeholder:"Repeat password"})}),Object(x.jsx)(L.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(x.jsx)(L.a.Check,{required:!0,type:"radio",label:"I agree to terms and conditions"})}),Object(x.jsxs)(d.a,{variant:"dark btn-block",type:"submit",onClick:function(e){return O.apply(this,arguments)},children:["Sign Up"," "]})," ",Object(x.jsx)(L.a.Group,{className:"mb-3",children:Object(x.jsx)(L.a.Row,{children:Object(x.jsx)(y.b,{to:"/login",className:"link",children:Object(x.jsx)(L.a.Label,{column:"lg",lg:12,children:Object(x.jsx)("h6",{children:"Already have an account? Log In "})})})})})]})})})]})})}c(102);var F=function(){return Object(x.jsx)(x.Fragment,{})},G=c(54),E=c(30),T=c(136);var A,q,U,D,R,H=function(e){var t=e.macroData,c=e.price;return console.log("I'm in Grocery.js",JSON.stringify(t)),Object(x.jsxs)(T.a.Body,{children:[Object(x.jsxs)(T.a.Title,{variant:"dark",className:"text-center p-4",children:["Price $ ",c]}),t.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h5",{children:e.name}),Object(x.jsxs)(T.a.Text,{children:["Amount: ",e.amount," ",e.unit]})]})}))]})},M=(c(103),c(128)),W=c(43),V=c(76),z=c(135),J=c(134),$=c(130);function K(e){var t=e.groceryProductData,c=u.a.auth().currentUser,n=Object(a.useState)([]),r=Object(j.a)(n,2),s=r[0],i=r[1];Object(a.useEffect)((function(){l()}),[]),Object(a.useEffect)((function(){s.length>0&&s&&s.map((function(e){console.log("info: "+JSON.stringify(e)),A=e.totalPrice,q=e.totalCarbs,U=e.totalCalories,D=e.totalFats,R=e.totalProt}))}));var o=Object(f.f)(),l=function(){var e=Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=h.collection("users").doc(c.uid),e.next=4,t.get();case 4:a=e.sent,i([].concat(Object(E.a)(s),[a.data()])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o.push("/login");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),d=t.map((function(e){return e.title})),b=t.map((function(e){return e.id})),O=t.map((function(e){return e.image})),m={};function p(e){var t=b[e];console.log(e);var c="https://api.spoonacular.com/food/products/".concat(t,"?apiKey=").concat("dd786f84c8b14492ba7452922944720f");fetch(c).then((function(e){return e.json()})).then((function(e){var t=e.nutrition.nutrients.map((function(e){return e})),c=e.price;console.log("price ".concat(c)),B(c),C(t.filter((function(e){return"Fat"===e.name||"Carbohydrates"===e.name||"Protein"===e.name||"Calories"===e.name})))})).catch((function(){console.log("#2 get request error")}))}d.forEach((function(e,t){return m[e]=b[t]}));var g=Object(a.useState)(""),v=Object(j.a)(g,2),y=v[0],C=v[1],L=Object(a.useState)(0),P=Object(j.a)(L,2),I=P[0],B=P[1],F=0;return Object(x.jsx)("main",{children:Object(x.jsx)("section",{className:"groceries",children:Object(x.jsx)(M.a,{style:{paddingTop:"5vh",paddingBottom:"5vh",paddingRight:"15vw",paddingLeft:"15vw"},className:"even",children:Object.entries(m).map((function(e,t){return Object(x.jsxs)(T.a,{bg:"light",className:"text-center p-4",id:"cardBg",children:[Object(x.jsx)(T.a.Text,{id:"cardName",children:e[0]}),Object(x.jsx)(T.a.Img,{className:"w-50",id:"cardPic",variant:"top",src:O[F++],alt:"Image"}),Object(x.jsxs)(T.a.Body,{children:[Object(x.jsx)(N.a,{children:Object(x.jsx)(S.a,{children:Object(x.jsxs)(z.a,{children:[Object(x.jsx)(J.a,{expandIcon:Object(x.jsx)(V.a,{id:"nutrButton",variant:"dark",size:45,onClick:function(){return p(t)}}),children:Object(x.jsx)(T.a.Text,{id:"subCartName",children:"View Nutrients"})}),Object(x.jsx)($.a,{children:y&&Object(x.jsx)(H,{macroData:y,price:I})})]})})}),Object(x.jsx)("br",{}),Object(x.jsx)(N.a,{children:Object(x.jsx)(S.a,{children:Object(x.jsx)(z.a,{children:Object(x.jsx)(J.a,{expandIcon:Object(x.jsx)(W.a,{id:"nutrButton",variant:"dark",size:45,onClick:function(){return function(e,t,a){var n=e[0];console.log(t),t.push({price:a}),h.collection("groceries").doc(c.uid).set(Object(G.a)({},n,t),{merge:!0}),A+=a;for(var r=0;r<t.length;r++)"Carbohydrates"===t[r].name?q+=t[r].amount:"Calories"===t[r].name?U+=t[r].amount:"Fat"===t[r].name?D+=t[r].amount:"Protein"===t[r].name&&(R+=t[r].amount);h.collection("users").doc(c.uid).set({totalPrice:A},{merge:!0}),h.collection("users").doc(c.uid).set({totalCarbs:q},{merge:!0}),h.collection("users").doc(c.uid).set({totalCalories:U},{merge:!0}),h.collection("users").doc(c.uid).set({totalFats:D},{merge:!0}),h.collection("users").doc(c.uid).set({totalProt:R},{merge:!0})}(e,y,I)}}),children:Object(x.jsx)(T.a.Text,{id:"subCartName",children:"Add to Cart"})})})})})]})]})}))})})})}c(104);var Z=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"grocerySetup",children:[Object(x.jsx)("section",{className:"controls",children:Object(x.jsx)("input",{id:"search",type:"text",placeholder:"Search for Grocery",autoComplete:"off"})}),Object(x.jsx)(d.a,{variant:"dark",onClick:function(){var e=document.getElementById("search").value,t="https://api.spoonacular.com/food/products/search?apiKey=".concat("dd786f84c8b14492ba7452922944720f","&query=").concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){n(e.products)})).catch((function(){console.log("#1 get request error")}))},children:"Get Grocery Items"})," ",c&&Object(x.jsx)(K,{groceryProductData:c})]})})},Q=c(137),X=c(77);var Y=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(j.a)(r,2),i=s[0],l=s[1],b=Object(f.f)();Object(a.useEffect)((function(){m()}),[]),Object(a.useEffect)((function(){p()}),[]);var O=u.a.auth().currentUser,m=function(){var e=Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=h.collection("groceries").doc(O.uid),e.next=4,t.get();case 4:a=e.sent,console.log("data: "+JSON.stringify(a)),n([].concat(Object(E.a)(c),[a.data()])),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b.push("/login");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(k.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=h.collection("users").doc(O.uid),e.next=4,t.get();case 4:c=e.sent,l([].concat(Object(E.a)(i),[c.data()])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b.push("/login");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),g=Object(a.useState)(0),v=Object(j.a)(g,2),y=v[0],C=v[1],L=Object(a.useState)(0),P=Object(j.a)(L,2),I=P[0],B=P[1],F=Object(a.useState)(""),T=Object(j.a)(F,2),A=T[0],q=T[1],U=Object(a.useState)(""),D=Object(j.a)(U,2),R=D[0],H=D[1],M=Object(a.useState)(0),V=Object(j.a)(M,2),K=V[0],Z=V[1],Y=Object(a.useState)(0),_=Object(j.a)(Y,2),ee=_[0],te=_[1],ce=Object(a.useState)(""),ae=Object(j.a)(ce,2),ne=ae[0],re=ae[1],se=Object(a.useState)(0),ie=Object(j.a)(se,2),oe=ie[0],le=ie[1],de=Object(a.useState)(0),je=Object(j.a)(de,2),ue=je[0],be=je[1],he=Object(a.useState)(0),Oe=Object(j.a)(he,2),xe=Oe[0],me=Oe[1],pe=Object(a.useState)(0),ge=Object(j.a)(pe,2),fe=ge[0],ve=ge[1];Object(a.useEffect)((function(){i.length>0&&(console.log(JSON.stringify(i)),i&&i.map((function(e){C(e.totalPrice.toFixed(2)),q("1"===e.femSex?"female":"male"),H(e.birthday),ve(e.budget),B(e.totalCalories),Z(Number(e.height)),te(Number(e.weight)),re(e.activityLevel),le(e.totalCarbs),be(e.totalFats),me(e.totalProt),console.log("sumTotal: "+y+"  definedBudget: "+fe)}))),console.log("sumTotal: "+y)}),[i]);var ye,Ce=function(e,t,c,a,n){console.log(e,t,c,a,n);var r=2.54*c,s=.45359237*a,i=0,o=Math.floor((new Date-new Date(t).getTime())/315576e5);"male"===e&&(i=10*s+6.25*r-5*o+5),"female"===e&&(i=10*s+6.25*r-5*o-161);var l=0;return"sedentary"===n&&(l=1.2*i),"lightly active"===n&&(l=1.375*i),"moderately active"===n&&(l=1.55*i),"very active"===n&&(l=1.725*i),"extremely active"===n&&(l=1.9*i),100*Math.round(7*l)/100}(A,R,K,ee,ne),we={minCarbs:.45*(ye=Ce),maxCarbs:.65*ye,minProteins:.2*ye,maxProteins:.3*ye,minFat:.2*ye,maxFat:.35*ye};function ke(){var e=u.a.auth().currentUser;h.collection("groceries").doc(e.uid).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)})),n([]),h.collection("users").doc(e.uid).set({totalCalories:0,totalCarbs:0,totalFats:0,totalProt:0,totalPrice:0},{merge:!0})}function Ne(e,t){return e<t?"warning":e>t?"danger":"success"}function Se(e,t,c){return e>=t&&e<=c?"success":"danger"}function Le(){return Object(x.jsxs)(o.a,{className:"mt-5 p-3",children:[Object(x.jsx)("h1",{children:"Please add more groceries to your cart. Currently, there are no items added."}),Object(x.jsxs)(d.a,{variant:"dark",href:"/groceries",children:[" ","Grocery Shopping"]})]})}try{return c.length>0?function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsxs)(N.a,{className:"mt-5 p-3",children:[Object(x.jsxs)(S.a,{lg:6,md:6,sm:12,children:[Object(x.jsx)("h4",{children:"Budget:"}),Object(x.jsx)("h6",{children:"$".concat(y," out of $").concat(fe)}),Object(x.jsx)(Q.a,{now:y,max:fe,label:"$".concat(y," out of $").concat(fe),variant:(e=y,t=fe,e>t?"danger":"success")}),Object(x.jsx)("br",{}),Object(x.jsx)("h4",{children:"Calories (based on User Profile):"}),Object(x.jsx)("h6",{children:"".concat(I,"kcal out of ").concat(Ce,"kcal")}),Object(x.jsx)(Q.a,{now:I,max:Ce,label:"".concat(I,"kcal out of ").concat(Ce,"kcal"),variant:Ne(I,Ce)}),Object(x.jsx)("br",{}),Object(x.jsx)("h4",{children:"Carbohydrates:"}),Object(x.jsx)("h6",{children:"".concat(oe,"g Carbs consumed")}),Object(x.jsx)(Q.a,{now:oe,min:we[0],max:we[1],label:"".concat(oe,"g Carbs consumed"),variant:Se(oe,we[0],we[1])}),Object(x.jsx)("br",{}),Object(x.jsx)("h4",{children:"Protein:"}),Object(x.jsx)("h6",{children:"".concat(xe,"g Protein consumed")}),Object(x.jsx)(Q.a,{now:xe,min:we[2],max:we[3],label:"".concat(xe,"g Protein consumed"),variant:Se(xe,we[2],we[3])}),Object(x.jsx)("br",{}),Object(x.jsx)("h4",{children:"Fats:"}),Object(x.jsx)("h6",{children:"".concat(ue,"g Fats consumed")}),Object(x.jsx)(Q.a,{now:ue,min:we[4],max:we[5],label:"".concat(ue,"g Fats consumed"),variant:Se(ue,we[4],we[5])})]}),Object(x.jsx)(S.a,{lg:6,md:6,sm:12,children:Object.keys(c).map((function(e){return Object(x.jsx)("div",{children:Object.keys(c[e]).map((function(t){return Object(x.jsxs)(z.a,{children:[Object(x.jsxs)(J.a,{className:"text-center",expandIcon:Object(x.jsx)(W.b,{}),children:[Object(x.jsx)("h5",{children:t}),Object(x.jsx)(d.a,{variant:"dark",onClick:function(){return function(e){var t=c[0][e].length-1,a=c[0][e][t].price,n=y-a;h.collection("users").doc(O.uid).update({totalPrice:n}),Object.keys(c[0][e]).map((function(t){if("Carbohydrates"===c[0][e][t].name){var a=oe-c[0][e][0].amount;h.collection("users").doc(O.uid).update({totalCarbs:a})}else if("Calories"===c[0][e][t].name){var n=I-c[0][e][1].amount;h.collection("users").doc(O.uid).update({totalCalories:n})}else if("Protein"===c[0][e][t].name){var r=xe-c[0][e][3].amount;h.collection("users").doc(O.uid).update({totalProt:r})}else if("Fat"===c[0][e][t].name){var s=ue-c[0][e][2].amount;h.collection("users").doc(O.uid).update({totalFats:s})}})),h.collection("groceries").doc(O.uid).set(Object(G.a)({},e,u.a.firestore.FieldValue.delete()),{merge:!0})}(t)},children:Object(x.jsx)(X.a,{})})]}),Object.keys(c[e][t]).map((function(a){return Object(x.jsx)($.a,{className:"justify-content-md-center",children:Object(x.jsxs)("h5",{children:[c[e][t][a].name," ",c[e][t][a].amount,c[e][t][a].unit,c[e][t][a].price]})})}))]})}))})}))})]}),Object(x.jsx)(o.a,{className:"mt-3 p-3",children:Object(x.jsx)(d.a,{variant:"dark",type:"submit",onClick:ke,children:"Clear Grocery List"})})]})});var e,t}():Le()}catch(Pe){return console.log(Pe),Le()}},_=(c(105),c.p+"static/media/dancing.0afa9653.png"),ee=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){s()}),[]);var r=Object(f.f)(),s=function(){var e=Object(k.a)(w.a.mark((function e(){var t,a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=u.a.auth().currentUser,a=h.collection("users").doc(t.uid),e.next=5,a.get();case 5:s=e.sent,n([].concat(Object(E.a)(c),[s.data()])),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r.push("/login");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){r.push("/overview")};console.log(c);var l={padding:{paddingTop:"4vh",paddingBottom:"2vh"}},b={height:"22vh",borderRadius:"15% 15% 15% 15% / 12% 12% 12% 12%"};return Object(x.jsx)("section",{children:Object(x.jsx)(o.a,{style:l.padding,children:c&&c.map((function(e){return Object(x.jsx)("div",{className:"blog-container",children:Object(x.jsxs)(o.a,{style:l.padding,children:[Object(x.jsxs)(N.a,{children:[Object(x.jsx)(S.a,{id:"logoProfile",lg:6,md:6,sm:12,children:Object(x.jsx)("img",{src:_,alt:"logo",id:"logoProfile"})}),Object(x.jsxs)(S.a,{lg:6,md:6,sm:12,children:[Object(x.jsx)("h3",{className:"text-center",id:"myName",children:e.name.toUpperCase()}),Object(x.jsx)(d.a,{id:"profileBtn",variant:"dark",onClick:i,className:"text-center",children:"Go To Dashboard"})]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(S.a,{lg:6,md:6,sm:12,style:{height:"33vh"},children:[Object(x.jsx)("h5",{className:"text-center",id:"subInfo",children:"Health Information"}),Object(x.jsx)(T.a,{style:b,className:"text-center p-4",bg:"light",children:Object(x.jsxs)(T.a.Text,{children:[Object(x.jsxs)("h6",{id:"editableHeight",contenteditable:"true",children:["Height(in): ",e.height]}),Object(x.jsxs)("h6",{id:"editableWeight",contenteditable:"true",children:["Weight(lbs): ",e.weight]}),Object(x.jsxs)("h6",{children:["Activity Level: ",e.activityLevel]}),Object(x.jsxs)("h6",{children:["Sex: ","1"===e.femSex?"Female":"Male"]}),Object(x.jsx)(d.a,{onClick:function(){return function(){console.log("saveEdits function successfuly called");var e,t=(e=document.getElementById("editableHeight").innerHTML).indexOf(" "),c=e.substr(t+1,e.length-1);h.collection("users").doc(u.a.auth().currentUser.uid).set({height:c},{merge:!0}),t=(e=document.getElementById("editableWeight").innerHTML).indexOf(" "),c=e.substr(t+1,e.length-1),h.collection("users").doc(u.a.auth().currentUser.uid).set({weight:c},{merge:!0})}()},variant:"dark",children:"Change Height/ Weight"})]})})]}),Object(x.jsxs)(S.a,{lg:6,md:6,sm:12,style:{height:"33vh"},children:[Object(x.jsx)("h5",{className:"text-center",id:"subInfo",children:"General Information"}),Object(x.jsx)(T.a,{style:b,className:"text-center p-4",bg:"light",children:Object(x.jsxs)(T.a.Text,{children:[Object(x.jsxs)("h6",{children:["Budget: ",e.budget]}),Object(x.jsxs)("h6",{children:["Birthday: ",e.birthday]}),Object(x.jsxs)("h6",{children:["Username: ",e.username]}),Object(x.jsxs)("h6",{children:["Email: ",e.email]}),Object(x.jsx)(d.a,{onClick:function(){return r.push("/register")},variant:"dark",children:"Change Profile"})]})})]})]})]})})}))})})},te=(c(106),function(){var e=Object(f.f)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(o.a,{style:{paddingTop:"3.5vh",paddingRight:"10vw",paddingLeft:"5vw",paddingBottom:"3.5vh"},id:"registerContainer",children:Object(x.jsxs)(L.a,{onSubmit:function(t){t.preventDefault();var c=Object(E.a)(t.target.elements).reduce((function(e,t){return t.id&&(e[t.id]=t.value),console.log(e),e}),{}),a=u.a.auth().currentUser;c.totalPrice=0,c.totalCarbs=0,c.totalFats=0,c.totalProt=0,c.totalCalories=0,h.collection("users").doc(a.uid).set(c),e.push("/groceries")},children:[Object(x.jsxs)(L.a.Text,{children:[Object(x.jsx)("h1",{id:"registerHeader",children:"Welcome! Let's get started."}),Object(x.jsx)("h4",{className:"text-center",children:"Enter the following information: "}),Object(x.jsx)("br",{})]}),Object(x.jsx)(o.a,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(L.a.Group,{as:S.a,controlId:"username",children:[Object(x.jsx)(L.a.Label,{id:"username",children:"Username"}),Object(x.jsx)(L.a.Control,{required:!0})]}),Object(x.jsxs)(L.a.Group,{as:S.a,controlId:"name",children:[Object(x.jsx)(L.a.Label,{id:"name",children:"Name"}),Object(x.jsx)(L.a.Control,{})]})]})}),Object(x.jsx)(o.a,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(L.a.Group,{as:S.a,controlId:"birthday",children:[Object(x.jsx)(L.a.Label,{id:"birthday",children:"Birthday"}),Object(x.jsx)(L.a.Control,{type:"date",required:!0})]}),Object(x.jsxs)(L.a.Group,{as:S.a,controlId:"height",children:[Object(x.jsx)(L.a.Label,{id:"height",children:"Height (inches)"}),Object(x.jsx)(L.a.Control,{type:"number",required:!0})]})]})}),Object(x.jsx)(o.a,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(L.a.Group,{as:S.a,controlId:"weight",children:[Object(x.jsx)(L.a.Label,{id:"weight",children:"Weight (pounds)"}),Object(x.jsx)(L.a.Control,{type:"number",required:!0})]}),Object(x.jsxs)(L.a.Group,{as:S.a,children:[Object(x.jsx)(L.a.Label,{children:"Gender"}),Object(x.jsx)(o.a,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(L.a.Check,{required:!0,type:"radio",label:"Male\u2003\u2003",id:"malSex",name:"group1",value:"0"}),Object(x.jsx)(L.a.Check,{required:!0,type:"radio",label:"Female \u2003\u2003",id:"femSex",name:"group1",value:"1"})]})})]})]})}),Object(x.jsxs)(o.a,{children:[Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(L.a.Group,{as:S.a,controlId:"exampleForm.SelectCustomSizeSm",children:[Object(x.jsx)(L.a.Label,{children:"Physical Activity Level"}),Object(x.jsxs)(L.a.Control,{required:!0,as:"select",id:"activityLevel",custom:!0,children:[Object(x.jsx)("option",{value:"sedentary",children:"sedentary"}),Object(x.jsx)("option",{value:"lightly active",children:"lightly active"}),Object(x.jsx)("option",{value:"moderately active",children:"moderately active"}),Object(x.jsx)("option",{value:"very active",children:"very active"}),Object(x.jsx)("option",{value:"extremely active",children:"extremely active"})]})]}),Object(x.jsxs)(L.a.Group,{as:S.a,controlId:"budget",children:[Object(x.jsx)(L.a.Label,{id:"budget",children:"Weekly Budget (dollars)"}),Object(x.jsx)(L.a.Control,{type:"number",required:!0})]})]}),Object(x.jsxs)(L.a.Group,{controlId:"email",children:[Object(x.jsx)(L.a.Label,{id:"email",children:"Email Address"}),Object(x.jsx)(L.a.Control,{type:"email",required:!0})]})]}),Object(x.jsx)(d.a,{variant:"dark",type:"submit",children:"Submit Profile"})]})})})});c(107);function ce(){var e=Object(f.f)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(o.a,{className:"mt-5",children:[Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(S.a,{lg:5,md:6,sm:12,className:"text-left mt-4 p-3",children:[Object(x.jsx)("h2",{id:"descHeader",children:"Want to eat healthy but don\u2019t know where to start?"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{id:"desc",children:"Treat your body and not worry about breaking the bank. Budget Butler helps you ensure that you\u2019re getting all the fruits and veggies you need, all without spending more than you can afford."}),Object(x.jsx)("br",{}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)(d.a,{onClick:function(){e.push("/signup")},variant:"dark",type:"submit",id:"landingBtn",children:"Create an Account"}),Object(x.jsx)(d.a,{onClick:function(){e.push("/login")},variant:"dark",type:"submit",id:"landingBtn",children:"Login to Account"})]})]}),Object(x.jsx)(S.a,{lg:7,md:6,sm:12,children:Object(x.jsx)("img",{id:"homePg",src:_,alt:"Logo"})})]}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(S.a,{lg:12,md:12,sm:12,className:"text-center mt-5 p-3",children:[Object(x.jsx)("h2",{id:"descHeader",children:"About Us"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{id:"desc",children:"Budget Butler is a passion-motivated organization dedicated to helping everyday people eat healthily and budget for their groceries. Bridging the gap between healthy eating and reasonable budgeting for free, for everyone."})]})})]}),Object(x.jsx)(F,{})]})}var ae=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(v,{}),Object(x.jsx)(g,{children:Object(x.jsxs)(f.c,{children:[Object(x.jsx)(f.a,{exact:!0,path:"/",component:ce}),Object(x.jsx)(f.a,{exact:!0,path:"/login",component:I}),Object(x.jsx)(f.a,{exact:!0,path:"/signup",component:B}),Object(x.jsx)(f.a,{exact:!0,path:"/register",component:te}),Object(x.jsx)(f.a,{exact:!0,path:"/profile",component:ee}),Object(x.jsx)(f.a,{exact:!0,path:"/overview",component:Y}),Object(x.jsx)(f.a,{exact:!0,path:"/groceries",component:Z})]})})]})})};s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ae,{})}),document.getElementById("root"))},89:function(e,t,c){},90:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.3dd51612.chunk.js.map