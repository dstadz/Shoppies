(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{32:function(e,t,n){e.exports=n(80)},37:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(10),r=n.n(l),o=(n(37),n(1)),i=n(4),u=n(28),m=n.n(u),s=Object(o.atom)({key:"nominatedState",default:[]}),f=Object(o.atom)({key:"searchTermState",default:""}),d=Object(o.atom)({key:"searchResultState",default:[]}),b=n(5),p=n(6);function h(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  background: green;\n  input {\n\n  }\n"]);return h=function(){return e},e}function E(){var e=Object(b.a)(["\n  text-align: top;\n\n"]);return E=function(){return e},e}function v(){var e=Object(b.a)(["\n  width: 300px;\n  flex-direction: column;\n  border: solid 1px grey;\n  align-self: flex-start;\n\n"]);return v=function(){return e},e}function j(){var e=Object(b.a)(["\n  display:flex;\n  flex-direction: column;\n  text-align: center;\n  margin: auto;\n  width: 75%;\n\n  div{\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch;\n  }\n"]);return j=function(){return e},e}var O=p.a.section(j()),g=p.a.div(v()),w=p.a.li(E()),x=p.a.form(h()),y=function(){var e=Object(o.useRecoilState)(f),t=Object(i.a)(e,2),n=t[0],l=t[1],r=Object(o.useSetRecoilState)(d);return Object(a.useEffect)((function(){m.a.get("http://www.omdbapi.com/?s=".concat(n,"&apikey=").concat("d44de205")).then((function(e){r(e.data.Search)})).catch((function(e){console.log(e)}))}),[n]),c.a.createElement(x,null,c.a.createElement("label",null," Movie Title "),c.a.createElement("input",{type:"text",value:n,placeholder:"Movie Title",onChange:function(e){return l(e.target.value)}}))},R=n(3),k=function(e){var t=e.props,n=t.Title,l=t.Year,r=t.imdbID,u=t.action,m=Object(o.useRecoilState)(s),f=Object(i.a)(m,2),d=f[0],b=f[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),E=h[0],v=h[1];return Object(a.useEffect)((function(){d.some((function(e){return e.imdbID===r}))||v(!1)}),[d]),c.a.createElement(w,null,c.a.createElement("h5",null,n),c.a.createElement("span",null,l),c.a.createElement("button",{disabled:E&&"Nominate"===u,onClick:function(){return function(){if("Nominate"===u&&d.length<5&&!d.some((function(e){return e.imdbID===r}))&&(b(d.concat(t)),v(!0)),"Remove"===u){v(!1);var e=d.filter((function(e){return r!==e.imdbID}));b(e)}}()}},u))},S=function(){var e=Object(o.useRecoilValue)(d),t=Object(o.useRecoilValue)(f);return c.a.createElement(g,null,c.a.createElement("h3",null,' Results for "',t,'" '),c.a.createElement("ul",null," ",e&&e.map((function(e){return c.a.createElement(k,{props:Object(R.a)(Object(R.a)({},e),{},{action:"Nominate"}),key:e.imdbID})}))," "))},I=function(){var e=Object(o.useRecoilValue)(s);return c.a.createElement(g,null,c.a.createElement("h3",null," Nominated "),c.a.createElement("ul",null," ",e.map((function(e){return c.a.createElement(k,{props:Object(R.a)(Object(R.a)({},e),{},{action:"Remove"}),key:e.imdbID})}))," "))},D=function(){return c.a.createElement("div",null)},T=function(){var e=Object(o.useRecoilValue)(s);return c.a.createElement(O,null,c.a.createElement("h1",null," The Shoppies "),c.a.createElement(y,null),5===e.length&&c.a.createElement(D,null),c.a.createElement("div",null,c.a.createElement(S,null),c.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(o.RecoilRoot,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.73a106eb.chunk.js.map