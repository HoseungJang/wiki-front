(this["webpackJsonpwiki-front"]=this["webpackJsonpwiki-front"]||[]).push([[0],{228:function(n,e,t){"use strict";t.r(e);var r,c=t(6),o=t(86),i=t(26),a=t(2),s=t(7);!function(n){n.Blue300="#58ACFA",n.Blue200="#81BEF7",n.Blue100="#A9D0F5",n.Purple300="#8258FA",n.Purple200="#9F81F7",n.Purple100="#BCA9F5",n.White="#FFFFFF",n.Grey50="#F2F2F2"}(r||(r={}));var u,l=t(0),b=t(1);function h(){var n=Object(a.f)();return Object(l.useEffect)((function(){return n.listen((function(){"POP"!==n.action&&window.scrollTo(0,0)}))}),[n]),Object(b.jsx)(b.Fragment,{})}var j,d={Container:s.b.div(u||(u=Object(c.a)(["\n    position: fixed;\n\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    > p {\n      font-size: 20px;\n    }\n  "])))};function p(){return Object(b.jsx)(O.Container,{})}var x,f,O={Container:s.b.div(j||(j=Object(c.a)(["\n    position: absolute;\n\n    top: 0;\n    left: 0;\n    right: 0;\n\n    z-index: 1;\n\n    width: 100%;\n    height: ","px;\n\n    display: flex;\n    align-items: center;\n\n    padding: 0 40px;\n\n    box-sizing: border-box;\n\n    background-color: ",";\n\n    box-shadow: 1px 1px 10px ",";\n  "])),60,r.White,r.Grey50)},g=t(90),v=t.n(g);function m(n){var e=n.level,t=n.children,r=t[0].replace(/\?/g,"").replace(/ /g,"-");return Object(l.createElement)("h".concat(e),{id:r},t)}function w(n){return n.href.startsWith("#")?Object(b.jsx)(F.Hash,{href:n.href,children:n.children}):Object(b.jsx)(F.Path,{to:n.href,children:n.children})}var F={Path:Object(s.b)(i.b)(x||(x=Object(c.a)(["\n    font-weight: bold;\n    color: ",";\n    text-decoration: none;\n\n    &:hover {\n      color: ",";\n    }\n  "])),r.Blue300,r.Blue100),Hash:s.b.a(f||(f=Object(c.a)(["\n    font-weight: bold;\n    color: ",";\n    text-decoration: none;\n\n    &:hover {\n      color: ",";\n    }\n  "])),r.Purple300,r.Purple100)};function C(n){var e=n.content;return Object(b.jsx)(v.a,{components:{h1:m,h2:m,h3:m,h4:m,a:w},children:e})}var y,k=t(22),P=t.n(k),B=t(34),E=t(94),A=t(91),z=t(92),R=t(93),W=t.n(R),D=function(){function n(){Object(A.a)(this,n)}return Object(z.a)(n,null,[{key:"getContent",value:function(){var n=Object(B.a)(P.a.mark((function n(e){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.instance.get(e);case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()}]),n}();function G(n){var e=Object(a.f)(),t=Object(E.a)(n,Object(B.a)(P.a.mark((function t(){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.getContent(n);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),e.replace("/not-found");case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),{shouldRetryOnError:!1}).data;return null!==t&&void 0!==t?t:null}function H(){var n=G("/README.md");return Object(b.jsx)(U.Container,{children:n?Object(b.jsx)(C,{content:n}):null})}D.instance=W.a.create({baseURL:"https://raw.githubusercontent.com/HoseungJang/wiki-base/master"});var J,U={Container:s.b.div(y||(y=Object(c.a)([""])))};function I(){var n=Object(a.g)(),e=G(decodeURIComponent(n.pathname));return Object(b.jsx)(T.Container,{children:e?Object(b.jsx)(C,{content:e}):null})}var N,T={Container:s.b.div(J||(J=Object(c.a)([""])))};var L,M={Container:s.b.main(N||(N=Object(c.a)(["\n    flex: 1;\n\n    position: relative;\n\n    width: 800px;\n    max-width: 800px;\n\n    display: flex;\n    flex-direction: column;\n\n    padding: ","px 40px 20px;\n\n    box-sizing: border-box;\n\n    background-color: ",";\n  "])),60,r.White)},q=Object(s.a)(L||(L=Object(c.a)(["\n  html, body {\n    width: 100%;\n    height: 100%;\n\n    margin: 0;\n    padding: 0;\n\n    background-color: ",";\n\n    > #root {\n      width: 100%;\n      height: 100%;\n\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"])),r.Grey50);Object(o.render)(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{}),Object(b.jsxs)(i.a,{basename:"/wiki-front",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{exact:!0,path:"/not-found",component:function(){return Object(b.jsx)(d.Container,{children:Object(b.jsx)("p",{children:"NOT FOUND"})})}}),Object(b.jsx)(a.a,{component:function(){return Object(b.jsxs)(M.Container,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{exact:!0,path:"/",component:H}),Object(b.jsx)(a.a,{component:I})]})]})}})]})]})]}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.8446dcdb.chunk.js.map