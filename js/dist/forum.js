module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=5)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(1),a=o.n(r);var i=o(2),u=o.n(i),c=(o(4),o(3)),s=o.n(c),l=function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var r=n.prototype;return r.view=function(){var t=this.props.discussion.data;return m("div",{className:"Dropdown ButtonGroup ElevatorMenu"},m("button",{title:"Discusses Elevator",className:"Dropdown-toggle Button","data-toggle":"dropdown"},s()("fas fa-caret-down",{className:"Button-icon"})," Elevator"),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},m("div",null,m("input",{id:"elevator-level",type:"text",placeholder:"輸入樓層",autocomplete:"off"}),m("button",{title:"Go",className:"Button",onclick:this.activeElevator.bind(this,t)},"Go "))))},r.activeElevator=function(t){var e="",o=$("#elevator-level").val();if(o>0){var n=t.relationships.posts.length;e=o>n?n.toString():o.toString()}location.href="/d/"+t.id+"/"+e},n}(u.a);app.initializers.add("elevator",(function(){Object(n.extend)(a.a.prototype,"sidebarItems",(function(t){if(app.session.user){var e=this.discussion;t.add("elevator",l.component({discussion:e}))}}))}))}]);
//# sourceMappingURL=forum.js.map