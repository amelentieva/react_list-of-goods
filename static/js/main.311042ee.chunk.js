(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n,r=s(3),c=s.n(r),a=s(4),o=s(5),i=s(8),u=s(6),l=s(7),p=s(1),b=s.n(p),d=(s(13),s(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="NONE",t.ALPABET="ALPABET",t.LENGTH="LENGTH"}(n||(n={}));var j=function(t){Object(i.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(a.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!1,isReversed:!1,sortType:n.NONE},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this,e=function(t,e,s){var r=Object(l.a)(t);switch(e){case n.ALPABET:r.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:r.sort((function(t,e){return t.length-e.length}))}return s?r.reverse():r}(h,this.state.sortType,this.state.isReversed);return Object(d.jsxs)("div",{className:"App",children:[!this.state.isStarted&&Object(d.jsx)("button",{className:"App__button",type:"button",onClick:function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},children:"Start"}),this.state.isStarted&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"App__buttons",children:[Object(d.jsx)("button",{className:"App__button",type:"button",onClick:function(){t.setState({sortType:n.ALPABET})},children:"Sort alphabetically"}),Object(d.jsx)("button",{className:"App__button",type:"button",onClick:function(){t.setState({sortType:n.LENGTH})},children:"Sort by length"}),Object(d.jsx)("button",{className:"App__button",type:"button",onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),Object(d.jsx)("button",{className:"App__button App__button--reset",type:"button",onClick:function(){t.setState({isReversed:!1,sortType:n.NONE})},children:"Reset"})]}),Object(d.jsx)("ul",{className:"Goods",children:e.map((function(t){return Object(d.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})}}]),s}(b.a.Component);c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.311042ee.chunk.js.map