(this["webpackJsonpportfolio-create-react-app"]=this["webpackJsonpportfolio-create-react-app"]||[]).push([[0],{128:function(e,n,t){"use strict";t.r(n);var a,r,l,c,o,i,m,u,s,d,p,b,E,f,h,g,v,y,j,w,O,k,x,F,I,M,P,S,D=t(0),N=t.n(D),W=t(53),z=t.n(W),C=(t(66),t(32)),_=t(22),A=t(13),H=t(23),T=t(8),q=t(9),B=Object(q.a)(H.SideNav)(a||(a=Object(T.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n    font-family: 'Merriweather', serif;\n\n"]))),J=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Work",path:"/work"},{name:"Education",path:"/education"}],L=function(){var e=Object(A.f)();return N.a.createElement(B,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},N.a.createElement(H.SideNavItems,null,J.map((function(n){return N.a.createElement(H.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:_.b,to:n.path,key:n.name},n.name)}))))},R=t(2),V=q.a.div(r||(r=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n    background-color: #4a4b46;\nfont-family: 'Merriweather', serif"])),(function(e){return e.isHome?"flex":"none"})),Y=q.a.div(l||(l=Object(T.a)(["\n  display: flex;\n\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n  background-color: #4a4b46;\n  font-family: 'Merriweather', serif;\n  color: white;\n\n"]))),K=q.a.img(c||(c=Object(T.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n\n"]))),Q=q.a.a(o||(o=Object(T.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #FFFFF;\n  background-color: #4a4b46;\n  transition: background-color 250ms ease;\n  font-family: 'Merriweather', serif;\n  \n\n\n  &:hover {\n    background-color: #050505;\n  }\n\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n  \n"]))),Z=function(e){var n=e.user,t=Object(A.f)();return N.a.createElement(V,{isHome:"/"===t.pathname},N.a.createElement(Y,null,N.a.createElement(K,{src:n.basics.picture}),N.a.createElement("div",null,N.a.createElement("h2",null,n.basics.name),N.a.createElement("h4",null,N.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),N.a.createElement("p",null,n.basics.label),N.a.createElement("p",null,"From ",n.basics.region),N.a.createElement("p",null,n.basics.yearsOfExperience," years of computer science experience"),N.a.createElement("p",null,"Email: riya_dulepet@brown.edu"),N.a.createElement("p",null,"Cell: 818-585-1657"))),N.a.createElement("div",null,N.a.createElement(Q,{href:"https://drive.google.com/file/d/1Nqr-DTKMrCFVE4rvDqRZY-zuTw1QSAcY/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},N.a.createElement("span",null,"View Resume"),N.a.createElement(R.Eb,null))))},$=t(6),G=t(3),U=t(5),X=t(4),ee=t(38),ne=t.n(ee),te=q.a.div(i||(i=Object(T.a)(["\n  display: none;\n\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]))),ae=q.a.div(m||(m=Object(T.a)(["\n  height: 48px;\n"]))),re=q.a.div(u||(u=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]))),le=Object(q.a)(_.b)(s||(s=Object(T.a)(["\n  width: 25%;\n"]))),ce=Object(q.a)(ne.a)(d||(d=Object(T.a)(["\n  width: 100%;\n  justify-content: center;\n"]))),oe=function(){return N.a.createElement(te,null,N.a.createElement(ae,null),N.a.createElement(re,null,N.a.createElement(le,{to:"/"},N.a.createElement(ce,{hasIconOnly:!0,renderIcon:$.be,iconDescription:"Me",tooltipPosition:"bottom"})),N.a.createElement(le,{to:"/projects"},N.a.createElement(ce,{hasIconOnly:!0,renderIcon:G.L,iconDescription:"Projects",tooltipPosition:"bottom"})),N.a.createElement(le,{to:"/work"},N.a.createElement(ce,{hasIconOnly:!0,renderIcon:U.yc,iconDescription:"Work",tooltipPosition:"bottom"})),N.a.createElement(le,{to:"/education"},N.a.createElement(ce,{hasIconOnly:!0,renderIcon:X.td,iconDescription:"Education",tooltipPosition:"bottom"}))))},ie=Object(q.a)(H.Content)(p||(p=Object(T.a)(["\n  min-height: 100vh;\n\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n    background-color: #FFFFFF;\n  font-family: 'Merriweather', serif;\ncolor: black\n\n"]))),me=function(e){var n=e.user,t=e.children;return N.a.createElement(N.a.Fragment,null,N.a.createElement(oe,null),N.a.createElement(L,null),N.a.createElement(ie,null,N.a.createElement(Z,{user:n}),N.a.createElement("div",null,t)))},ue=t(25),se=q.a.h3(b||(b=Object(T.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]))),de=q.a.p(E||(E=Object(T.a)(["\n  white-space: pre-wrap;\n"]))),pe=q.a.span(f||(f=Object(T.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border-radius: 2px;\n  font-weight: bold;\n"])),ue.a[20],ue.a[70]),be=q.a.li(h||(h=Object(T.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n  color: black\n\n\na {\n    color: black\n\n}\n\n"]))),Ee=q.a.p(g||(g=Object(T.a)(["\n  margin-top: 1.5rem;\n  font-family: 'Merriweather', serif;\n  font-style: italic;\n\n  font-size: x-large;\n"]))),fe=function(e){var n=e.user;return N.a.createElement(me,{user:n},N.a.createElement("div",null,N.a.createElement(Ee,null,n.basics.headline)),N.a.createElement("div",null,N.a.createElement(se,null,"About Me"),N.a.createElement(de,null,n.basics.summary)),N.a.createElement("div",null,N.a.createElement(se,null,"Skills"),N.a.createElement("div",null,n.skills.map((function(e){return N.a.createElement(pe,{key:e.name,title:e.level},e.name)})))),N.a.createElement("div",null,N.a.createElement(se,null,"Profiles"),N.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return N.a.createElement(be,{key:e.network},0!==n&&" | ",N.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},he=t(42),ge=q.a.li(v||(v=Object(T.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 6px dotted gray;\n\n"]))),ve=q.a.h4(y||(y=Object(T.a)(["\n  font-weight: bold;\n"]))),ye=q.a.div(j||(j=Object(T.a)(["\n  margin-top: 1.2rem;\n\n  \n  \n"]))),je=(q.a.img(w||(w=Object(T.a)(["\n  width: 25%;\n  height: auto;\n  margin-right: 1rem;\n  border-radius: 2px;\n  float: right;\n  \n\n"]))),q.a.div(O||(O=Object(T.a)(["\n    display:flex; \n    justify-content: space-between;\n\n\n\n\n\n"])))),we=q.a.div(k||(k=Object(T.a)(["\n  width: 100%;\n  height: auto;\n  border-radius: 2px;\n\n"]))),Oe=t(58),ke=t.n(Oe),xe=function(e){var n=e.user;return Object(D.useEffect)((function(){n.projects.map((function(e,n){return e.videos.map((function(e,n){return console.log(e.url)}))}))}),[]),N.a.createElement(me,{user:n},N.a.createElement("div",null,N.a.createElement(se,null,"Projects"),N.a.createElement("ul",null,n.projects.map((function(e,n){return N.a.createElement(ge,{key:n},N.a.createElement(ve,null,e.displayName),N.a.createElement(ye,null,[].concat(Object(he.a)(e.languages),Object(he.a)(e.libraries)).map((function(e,n){return N.a.createElement(pe,{key:n},e)}))),N.a.createElement(je,null,N.a.createElement("div",null,N.a.createElement("p",null,e.summary)),e.videos.map((function(e,n){return e.url.length?N.a.createElement("div",null,N.a.createElement(we,null," ",N.a.createElement(ke.a,{url:e.url}))):null}))))})))))},Fe=q.a.li(x||(x=Object(T.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 6px dotted gray;\n"]))),Ie=q.a.h4(F||(F=Object(T.a)(["\n  font-weight: bold;\n"]))),Me=q.a.p(I||(I=Object(T.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]))),Pe=function(e){var n=e.user;return N.a.createElement(me,{user:n},N.a.createElement("div",null,N.a.createElement(se,null,"Work"),N.a.createElement("ul",null,n.work.map((function(e,n){return N.a.createElement(Fe,{key:n},N.a.createElement(Ie,null,e.position),N.a.createElement("div",null,N.a.createElement(Me,null,e.company)," ",N.a.createElement("span",null,e.location),N.a.createElement("span",null," \u22c5 "),N.a.createElement("span",null,e.start.year," to ",e.end.year)),N.a.createElement(de,null,e.summary))})))))},Se=q.a.li(M||(M=Object(T.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 6px dotted gray;\n"]))),De=q.a.h4(P||(P=Object(T.a)(["\n  font-weight: bold;\n"]))),Ne=q.a.p(S||(S=Object(T.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]))),We=function(e){var n=e.user;return N.a.createElement(me,{user:n},N.a.createElement("div",null,N.a.createElement(se,null,"Education"),N.a.createElement("ul",null,n.education.map((function(e,n){return N.a.createElement(Se,{key:n},N.a.createElement(De,null,e.position),N.a.createElement("div",null,N.a.createElement(Ne,null,N.a.createElement("h4",null,e.institution,", ",e.studyType),N.a.createElement("h5",null,e.area," ",e.score," | ",e.start.year," to ",e.end.year))," "),N.a.createElement("span",null," "),N.a.createElement(de,null,e.activities.replace("\n\n","\n")))})))))},ze=function(e){var n=e.user;return N.a.createElement(_.a,null,N.a.createElement(A.c,null,N.a.createElement(A.a,{exact:!0,path:"/"},N.a.createElement(fe,{user:n})),N.a.createElement(A.a,{path:"/projects"},N.a.createElement(xe,{user:n})),N.a.createElement(A.a,{path:"/work"},N.a.createElement(Pe,{user:n})),N.a.createElement(A.a,{path:"/education"},N.a.createElement(We,{user:n}))))};var Ce=function(){var e=Object(D.useState)(null),n=Object(C.a)(e,2),t=n[0],a=n[1];return Object(D.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/riya-dulepet").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),t?N.a.createElement(ze,{user:t}):N.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));z.a.render(N.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,n,t){e.exports=t(128)},66:function(e,n,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.dbcdf285.chunk.js.map