(this["webpackJsonprcs-labs-test"]=this["webpackJsonprcs-labs-test"]||[]).push([[0],{1685:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),s=n(46),u=n(24),i=n.n(u),l=n(47),o=n(53),m=n(28),p=n(48),d=n.n(p).a.create({baseURL:"https://rcslabs.ru/locations.json"}),_=function(){return d.get("").then((function(e){return e.data}))},f="./recs-labs-test/SET_TREE_DATA",M={treeData:[],isFetching:!1},b=function(e){return{type:f,treeData:e}},v=function(e){return{type:"./recs-labs-test/IS_FETCHING_SUCCESS",isFetching:e}},h=Object(c.c)({Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)({},e,{treeData:Object(o.a)(t.treeData)});case"./recs-labs-test/IS_FETCHING_SUCCESS":return Object(m.a)({},e,{isFetching:t.isFetching});default:return e}}}),E=Object(c.d)(h,Object(c.a)(s.a)),O=(n(75),n(4)),g=n.n(O),S=n(11),T=n(50),D=Object(a.memo)((function(){var e=Object(S.c)((function(e){return e})).Reducer.treeData,t=function(e){document.querySelectorAll("li").forEach((function(e){return e.classList.remove(g.a.activeListItem)})),e.currentTarget.classList.contains(g.a.MenuItem)&&e.currentTarget.classList.add(g.a.activeListItem)},n=function(e){var t=e.currentTarget.getElementsByClassName("anticon")[0];t.classList.contains(g.a.arrowOpen)?(t.classList.remove(g.a.arrowOpen),t.classList.add(g.a.arrowClose)):(t.classList.remove(g.a.arrowClose),t.classList.add(g.a.arrowOpen)),e.currentTarget.parentNode.querySelector("ul").classList.toggle(g.a.hideMenuItem)};return r.a.createElement("div",{className:g.a.TreeDataMenu},r.a.createElement("ul",{className:"".concat(g.a.Menu)},0!==e.length&&function e(a,c){return a.map((function(a,s){var u;return 0!==(null===(u=a.children)||void 0===u?void 0:u.length)?r.a.createElement("li",{key:a.id,className:g.a.wrapSubMenu},r.a.createElement("div",{className:"".concat(g.a.SubMenu," ").concat(null===a.parent_id&&g.a.MainSubMenu),style:{paddingLeft:"".concat(c,"px")},onClick:n},r.a.createElement("span",null,a.title),r.a.createElement(T.UpOutlined,null)),r.a.createElement("ul",{className:"".concat(g.a.UnOrderedlist," ").concat(g.a.hideMenuItem)},e(a.children,c+30))):r.a.createElement("li",{key:"".concat(a.id).concat(s),className:g.a.MenuItem,style:{paddingLeft:"".concat(c,"px")},onClick:t},a.title)}))}(e,20)))})),I=n(1687),w=n(27),j=n.n(w);function L(){return r.a.createElement("div",{className:j.a.spitWrap},r.a.createElement(I.a,{className:j.a.Spin}))}var C=Object(a.memo)((function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.Reducer.isFetching}));return Object(a.useEffect)((function(){e(function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(v(!0));case 2:return e.prev=2,e.next=5,_();case 5:return n=e.sent,a=Object.values(n),r=a.map((function(e){return e.children=a.filter((function(t){return t.parent_id===e.id})).sort((function(e,t){return e.srt!==t.srt?e.srt>t.srt?1:-1:0})),e})).filter((function(e){return null===e.parent_id})),console.log(r),e.next=11,t(b(r));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0.message);case 16:return e.next=18,t(v(!1));case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement("div",{className:"App"},t?r.a.createElement(L,null):r.a.createElement(D,null))})),y=n(16);n.n(y).a.render(r.a.createElement(S.a,{store:E},r.a.createElement(C,null)),document.getElementById("root"))},27:function(e,t,n){e.exports={spitWrap:"Preloader_spitWrap__tdVHO",Spin:"Preloader_Spin__21CvI"}},4:function(e,t,n){e.exports={TreeDataMenu:"TreeDataMenu_TreeDataMenu__OFGOj",Menu:"TreeDataMenu_Menu__3iq3o",wrapSubMenu:"TreeDataMenu_wrapSubMenu__30oBX",SubMenu:"TreeDataMenu_SubMenu__1Vbkt",arrowOpen:"TreeDataMenu_arrowOpen__2WnA8",arrowClose:"TreeDataMenu_arrowClose__3KeV1",MenuItem:"TreeDataMenu_MenuItem__3nCeD",MainSubMenu:"TreeDataMenu_MainSubMenu__3AFie",hideMenuItem:"TreeDataMenu_hideMenuItem__2yZlD",activeListItem:"TreeDataMenu_activeListItem__1WYKz"}},54:function(e,t,n){e.exports=n(1685)},75:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.fa35eead.chunk.js.map