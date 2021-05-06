(this["webpackJsonpwiki-front"]=this["webpackJsonpwiki-front"]||[]).push([[0],{532:function(n,t,e){"use strict";e.r(t);var r,c=e(5),a=e(126),i=e(23),o=e(3),l=e(6),s=e(141),u=e(1),h=e(2);!function(n){n.Light="light",n.Dark="dark"}(r||(r={}));var d,b,j=Object(u.createContext)(null),x="__CURRENT_THEME";function f(n){var t=n.children,e=Object(u.useState)((function(){try{var n;return null!==(n=window.localStorage.getItem(x))&&void 0!==n?n:r.Light}catch(t){return r.Light}})),c=Object(s.a)(e,2),a=c[0],i=c[1],o=Object(u.useCallback)((function(n){i(n);try{window.localStorage.setItem(x,n)}catch(t){}}),[]);return Object(h.jsx)(j.Provider,{value:{currentTheme:a,changeTheme:o},children:t})}function g(){var n=Object(u.useContext)(j);if(!n)throw new Error("context must be provided before using");return n}function p(n){var t=n.children,e=g().currentTheme;return Object(h.jsx)(v.Container,{t:e,children:t})}!function(n){n.Blue300="#58ACFA",n.Blue200="#81BEF7",n.Blue100="#A9D0F5",n.Purple300="#8258FA",n.Purple200="#9F81F7",n.Purple100="#BCA9F5",n.White="#FFFFFF",n.Black50="#585858",n.Black100="#222222",n.Black200="#1A1A1A",n.Black="#000000",n.Grey300="#CACACA",n.Grey200="#D8D8D8",n.Grey50="#F2F2F2",n.Orange100="#FFBF00",n.Orange50="#F7D358"}(d||(d={}));var O,v={Container:l.b.div(b||(b=Object(c.a)(["\n    flex: 1;\n\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    background-color: ",";\n\n    color: ",";\n  "])),(function(n){var t=n.t;return{light:d.Grey50,dark:d.Black50}[t]}),(function(n){var t=n.t;return{light:d.Black,dark:d.Grey300}[t]}))};function m(){var n=Object(o.f)();return Object(u.useEffect)((function(){return n.listen((function(){"POP"!==n.action&&window.scrollTo(0,0)}))}),[n]),Object(h.jsx)(h.Fragment,{})}var k,w={Container:l.b.div(O||(O=Object(c.a)(["\n    position: fixed;\n\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    > p {\n      font-size: 20px;\n    }\n  "])))},C=e(67),y=e(68);function B(){var n=g(),t=n.currentTheme,e=n.changeTheme;return Object(h.jsxs)(A.Container,{t:t,children:[Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)(i.b,{className:"link",to:"/",children:Object(h.jsx)(C.b,{className:"icon"})}),Object(h.jsx)("a",{className:"link",href:"https://github.com/HoseungJang/wiki-front",children:Object(h.jsx)(C.a,{className:"icon"})})]}),Object(h.jsx)("button",{className:"theme-change-button",onClick:function(){return e({light:r.Dark,dark:r.Light}[t])},children:{light:function(){return Object(h.jsx)(y.b,{className:"icon"})},dark:function(){return Object(h.jsx)(y.a,{className:"icon"})}}[t]()})]})}var F,A={Container:l.b.div(k||(k=Object(c.a)(["\n    position: absolute;\n\n    top: 0;\n    left: 0;\n    right: 0;\n\n    z-index: 1;\n\n    width: 100%;\n    height: ","px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 40px;\n\n    box-sizing: border-box;\n\n    background-color: ",";\n\n    box-shadow: 1px 1px 10px\n      ",";\n\n    > .links {\n      display: flex;\n\n      > .link {\n        width: 30px;\n        height: 30px;\n\n        &:not(:last-child) {\n          margin-right: 10px;\n        }\n\n        > .icon {\n          width: 100%;\n          height: 100%;\n\n          color: ",";\n\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n    }\n\n    > .theme-change-button {\n      display: flex;\n\n      background-color: transparent;\n\n      border: none;\n\n      cursor: pointer;\n\n      > .icon {\n        width: 30px;\n        height: 30px;\n\n        color: ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n  "])),60,(function(n){var t=n.t;return{light:d.White,dark:d.Black200}[t]}),(function(n){var t=n.t;return{light:d.Grey50,dark:d.Black}[t]}),(function(n){var t=n.t;return{light:d.Blue300,dark:d.Grey300}[t]}),(function(n){var t=n.t;return{light:d.Blue200,dark:d.Grey50}[t]}),(function(n){var t=n.t;return{light:d.Orange100,dark:d.Grey300}[t]}),(function(n){var t=n.t;return{light:d.Orange50,dark:d.Grey50}[t]}))},G=e(130),N=e.n(G),E=e(131),T=e.n(E),D=e(132),R=e.n(D);function I(n){return n.href.startsWith("#")||n.href.startsWith("http")?Object(h.jsx)(P.Container,{href:n.href,children:n.children}):Object(h.jsx)(P.Container,{as:i.b,to:n.href,children:n.children})}var L,P={Container:l.b.a(F||(F=Object(c.a)(["\n    font-weight: bold;\n    color: ",";\n    text-decoration: none;\n\n    &:hover {\n      color: ",";\n    }\n  "])),d.Blue300,d.Blue200)},U=e(27),z=e.n(U),W=e(44),J=e(133),H=e(134),S=e(135),_=e.n(S),M=function(){function n(){Object(J.a)(this,n)}return Object(H.a)(n,null,[{key:"getContent",value:function(){var n=Object(W.a)(z.a.mark((function n(t){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.axiosInstance.get(t);case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getContentURL",value:function(n){return"".concat(this.axiosInstance.defaults.baseURL).concat(n)}}]),n}();function q(n){return Object(h.jsx)(Q.Container,{src:M.getContentURL(n.src),alt:""})}M.axiosInstance=_.a.create({baseURL:"https://raw.githubusercontent.com/HoseungJang/wiki/master"});var K,Q={Container:l.b.img(L||(L=Object(c.a)(["\n    max-width: 100%;\n\n    object-fit: contain;\n  "])))},V=e(536),X=e(535);function Y(n){var t=n.className,e=n.children;return Object(h.jsx)(V.a,{language:null===t||void 0===t?void 0:t.replace("language-",""),style:X.a,children:e})}function Z(n){var t=n.children,e=g().currentTheme;return Object(h.jsx)($.Container,{t:e,children:t})}var $={Container:l.b.table(K||(K=Object(c.a)(["\n    border-spacing: 0;\n\n    > thead {\n      > tr {\n        > th {\n          padding: 6px 13px;\n\n          box-sizing: border-box;\n\n          border: 1px solid\n            ",";\n\n          &:not(:last-child) {\n            border-right: none;\n          }\n        }\n      }\n    }\n\n    > tbody {\n      > tr {\n        > td {\n          padding: 6px 13px;\n\n          box-sizing: border-box;\n\n          border: 1px solid\n            ",";\n          border-top: none;\n\n          &:not(:last-child) {\n            border-right: none;\n          }\n        }\n      }\n    }\n  "])),(function(n){var t=n.t;return{light:d.Grey200,dark:d.Black50}[t]}),(function(n){var t=n.t;return{light:d.Grey200,dark:d.Black50}[t]}))};function nn(n){var t=n.content;return Object(h.jsx)(N.a,{remarkPlugins:[T.a,R.a],components:{a:I,img:q,code:Y,table:Z},children:t})}var tn,en=e(140);function rn(n){var t=Object(o.f)(),e=Object(en.a)(n,Object(W.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.getContent(n);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),t.replace("/not-found");case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),{dedupingInterval:216e3,shouldRetryOnError:!1}).data;return Object(u.useEffect)((function(){""!==t.location.hash&&e&&(window.location.hash="",window.location.hash=t.location.hash)}),[t,e]),null!==e&&void 0!==e?e:null}function cn(){var n=rn("/README.md");return Object(h.jsx)(on.Container,{children:n?Object(h.jsx)(nn,{content:n}):null})}var an,on={Container:l.b.div(tn||(tn=Object(c.a)([""])))};function ln(){var n=Object(o.g)(),t=rn(decodeURIComponent(n.pathname));return Object(h.jsx)(un.Container,{children:t?Object(h.jsx)(nn,{content:t}):null})}var sn,un={Container:l.b.div(an||(an=Object(c.a)([""])))};var hn,dn={Container:l.b.main(sn||(sn=Object(c.a)(["\n    flex: 1;\n\n    position: relative;\n\n    width: 100%;\n    max-width: 800px;\n\n    display: flex;\n    flex-direction: column;\n\n    padding: ","px 40px 20px;\n\n    box-sizing: border-box;\n\n    background-color: ",";\n\n    overflow-x: hidden;\n  "])),60,(function(n){var t=n.t;return{light:d.White,dark:d.Black100}[t]}))},bn=Object(l.a)(hn||(hn=Object(c.a)(["\n  html, body {\n    width: 100%;\n    height: 100%;\n\n    margin: 0;\n    padding: 0;\n\n    > #root {\n      width: 100%;\n      min-height: 100%;\n\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      * {\n        transition: background-color 0.3s;\n      }\n    }\n  }\n"])));Object(a.render)(Object(h.jsx)(f,{children:Object(h.jsxs)(i.a,{basename:"/wiki-front",children:[Object(h.jsx)(bn,{}),Object(h.jsxs)(p,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/not-found",component:function(){return Object(h.jsx)(w.Container,{children:Object(h.jsx)("p",{children:"NOT FOUND"})})}}),Object(h.jsx)(o.a,{component:function(){var n=g().currentTheme;return Object(h.jsxs)(dn.Container,{t:n,children:[Object(h.jsx)(B,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:cn}),Object(h.jsx)(o.a,{component:ln})]})]})}})]})]})]})}),document.getElementById("root"))}},[[532,1,2]]]);
//# sourceMappingURL=main.4de8e644.chunk.js.map