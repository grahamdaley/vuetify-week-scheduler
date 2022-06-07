(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vuetify-week-scheduler/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push(["8c94","chunk-vendors"]),n()})({"8c94":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-container",[n("h1",[n("v-icon",[t._v("mdi-calendar")]),t._v(" Vuetify Week Scheduler")],1),n("v-row",{staticClass:"ml-5 mt-5",attrs:{justify:"start",align:"center"}},[n("v-checkbox",{attrs:{label:"Editable"},model:{value:t.editable,callback:function(e){t.editable=e},expression:"editable"}}),n("v-btn",{staticClass:"ml-2",attrs:{color:"warning"},on:{click:function(e){t.events=[]}}},[t._v(" Clear all ")])],1),n("v-row",{staticClass:"ml-5 mb-5"},[n("small",[t._v("* Right click on an event to edit it")])]),n("vuetify-week-scheduler",{attrs:{config:t.config,editable:t.editable},on:{edit:t.onEdit},model:{value:t.events,callback:function(e){t.events=e},expression:"events"}})],1),t.editEvent?n("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("Edit event")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.editEvent.title,callback:function(e){t.$set(t.editEvent,"title",e)},expression:"editEvent.title"}})],1),n("v-col",{attrs:{cols:"12"}},t._l(t.colors,(function(e){return n("v-icon",{key:e,style:{border:t.editEvent.backgroundColor===e?"1px solid #ccc":""},attrs:{color:e,size:"50px"},on:{click:function(n){t.editEvent.backgroundColor=e}}},[t._v("mdi-square")])})),1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.editDialog=!1}}},[t._v(" Close ")])],1)],1)],1):t._e()],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vws vws-mode-edit vws-mode-7"},[n("table",{staticClass:"vws-table"},[n("tbody",[n("tr",t._l(t.daysPeriods,(function(e){return n("td",{key:"day-"+e.day},[n("div",{ref:"day",refInFor:!0,staticClass:"vws-day",on:{touchstart:function(n){return t.onDayDown(e.day,n)},mousedown:function(n){return t.onDayDown(e.day,n)}}},[t._l(e.periods,(function(r,o){return n("scheduler-period",{key:o,attrs:{period:r,settings:t.settings,blockHeight:t.blockHeight},on:{"position-change":function(n){return t.onPositionChange(e.day,r.index,n)},delete:function(n){return t.deletePeriod(e.day,r.index)},clone:function(n){return t.clonePeriod(e.day,r.index)},edit:function(n){return t.editPeriod(e.day,r.index)}}})})),t.newPeriod&&t.newPeriod.day===e.day?n("div",{staticClass:"vws-period-helper",style:{top:t.newPeriod.top+"px",height:t.newPeriod.height+"px"}},[n("div",{staticClass:"vws-period-helper-time"},[t._v(" "+t._s(t.newPeriod.start)+" - "+t._s(t.newPeriod.end)+" ")])]):t._e()],2)])})),0)])]),n("div",{staticClass:"vws-grid"},[n("div",{staticClass:"vws-grid-head"},t._l(t.settings.days,(function(e){return n("div",{key:e,staticClass:"vws-grid-day"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("div",[n("strong",[t._v(" "+t._s(t.isMobile?t.settings.daysList[e-1].slice(0,3):t.settings.daysList[e-1])+" ")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.editable&&(o||t.isMobile),expression:"editable && (hover || isMobile)"}],attrs:{icon:"","x-small":"",title:t.settings.periodRemoveButton},on:{click:function(n){return t.clearDayPeriods(e-1)}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-close")])],1),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.editable&&(o||t.isMobile),expression:"editable && (hover || isMobile)"}],attrs:{icon:"","x-small":"",title:t.settings.periodDuplicateButton},on:{click:function(n){return t.cloneDayPeriods(e-1)}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-content-copy")])],1)],1)]}}],null,!0)})],1)})),0),t._l(25,(function(e){return n("div",{key:e,staticClass:"vws-grid-line"},[n("div",{staticClass:"vws-grid-hour"},[t._v(t._s(t.formatHour(e-1)))])])}))],2)])},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("div",{staticClass:"vws-period",style:{backgroundColor:t.options.backgroundColor,outlineColor:t.options.borderColor,textColor:t.options.textColor,color:t.options.textColor,top:t.period.top+"px",height:t.period.height+"px"}},[n("div",{staticClass:"vws-period-container"},[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.$parent.editable&&(r||t.$parent.isMobile),expression:"$parent.editable && (hover || $parent.isMobile)"}],staticClass:"vws-handle",attrs:{small:""}},[t._v(" mdi-chevron-up ")]),n("div",{staticClass:"vws-period-time"},[t._v(" "+t._s(t.options.start)+" - "+t._s(t.options.end)+" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.shortPeriod,expression:"shortPeriod"}],staticClass:"text--caption ml-2"},[t._v(t._s(t.options.title))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.shortPeriod,expression:"!shortPeriod"}],staticClass:"vws-period-title text-truncate"},[t._v(" "+t._s(t.options.title)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.editable&&(r||t.$parent.isMobile),expression:"$parent.editable && (hover || $parent.isMobile)"}],staticClass:"vws-period-buttons",attrs:{justify:"end"}},[n("v-btn",{attrs:{icon:"","x-small":"",title:t.settings.periodRemoveButton},on:{click:function(e){return e.stopPropagation(),t.$emit("delete")},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-close")])],1),n("v-btn",{attrs:{icon:"","x-small":"",title:t.settings.periodDuplicateButton},on:{click:function(e){return e.stopPropagation(),t.$emit("clone")},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-content-copy")])],1)],1),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.$parent.editable&&(r||t.$parent.isMobile),expression:"$parent.editable && (hover || $parent.isMobile)"}],staticClass:"vws-handle",staticStyle:{bottom:"0"},attrs:{small:""}},[t._v(" mdi-chevron-down ")])],1)])]}}])})},l=[];function u(t,e){return v(t)||f(t,e)||h(t,e)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done);a=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){s=!0,o=c}finally{try{a||null==n["return"]||n["return"]()}finally{if(s)throw o}}return i}}function v(t){if(Array.isArray(t))return t}var y={name:"vuetify-week-scheduler-period",props:{period:Object,settings:Object,blockHeight:Number},data:function(){return{events:[],edited:!1}},mounted:function(){this.handleDrag(),this.handleResize()},beforeDestroy:function(){this.events.forEach((function(t){t.element.removeEventListener(t.event,t.callback)}))},computed:{options:function(){return this.period.options},shortPeriod:function(){return this.period.height<=30}},methods:{handleDrag:function(){var t=this,e=this.$el,n=!1,r=0,o=0,i=e.parentElement.clientHeight,a=function(i){i.stopPropagation(),n=t.$parent.editable,r=t.$parent.getY(i,!1),o=e.offsetTop,t.edited=!1},s=function(e){e.preventDefault(),n&&(e.stopPropagation(),n=!1,t.onPositionChange(!0))},c=function(a){if(a.preventDefault(),n){var s=r-t.$parent.getY(a,!0),c=t.roundBlock(o-s);c+e.clientHeight<=i&&c>=0&&(e.style.top="".concat(c,"px"),t.onPositionChange())}};this.addListener(e,"mousedown",a),this.addListener(e,"touchstart",a,{passive:!0}),this.addListener(e,"contextmenu",s),this.addListener(e,"touchend",s),this.addListener(document,"mouseup",s),this.addListener(document,"touchmove",c),this.addListener(document,"mousemove",c)},handleResize:function(){var t=this,e=this.$el,n=e.getElementsByClassName("vws-handle"),r=u(n,2),o=r[0],i=r[1],a=!1,s=e.parentElement.clientHeight,c=0,l=0,d=!1,h=0,p=function(n){n.stopPropagation(),d=n.target===o,a=t.$parent.editable,c=t.$parent.getY(n,!1),l=e.clientHeight,h=e.offsetTop,t.edited=!1},f=function(){a&&(a=!1,t.onPositionChange(!0))},v=function(n){if(n.preventDefault(),a){var r=t.roundBlock(c-t.$parent.getY(n,!0)),o=d?t.roundBlock(h-r):e.offsetTop,i=t.roundBlock(l+(d?r:-r));i=Math.max(i,t.blockHeight),o+i<=s&&o>=0&&(e.style.height="".concat(i,"px"),d&&(e.style.top="".concat(o,"px")),t.onPositionChange())}};this.addListener(o,"mousedown",p),this.addListener(o,"touchstart",p,{passive:!0}),this.addListener(i,"mousedown",p),this.addListener(i,"touchstart",p,{passive:!0}),this.addListener(document,"mouseup",f),this.addListener(document,"touchend",f),this.addListener(document,"mousemove",v),this.addListener(document,"touchmove",v)},addListener:function(t,e,n,r){this.events.push({element:t,event:e,callback:n}),t.addEventListener(e,n,r)},roundBlock:function(t){return this.$parent.roundBlock(t)},onPositionChange:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t&&!this.edited)this.$emit("edit");else{var e=this.$el;this.edited=!0;var n=e.offsetTop,r=e.clientHeight;n===this.period.top&&r===this.period.height||this.$emit("position-change",{top:n,height:r})}}},watch:{}},m=y,g=n("2877"),b=n("6544"),w=n.n(b),x=n("8336"),k=n("ce87"),P=n("132d"),C=Object(g["a"])(m,c,l,!1,null,null,null),_=C.exports;function E(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */E=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(L){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=c;var u={};function d(){}function h(){}function p(){}var f={};s(f,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(C([])));y&&y!==e&&n.call(y,o)&&(f=y);var m=p.prototype=d.prototype=Object.create(f);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==S(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,s(m,"constructor",p),s(p,"constructor",h),h.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),s(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),s(m,a,"Generator"),s(m,o,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}function L(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,o)}function O(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){L(i,r,o,a,s,"next",t)}function s(t){L(i,r,o,a,s,"throw",t)}a(void 0)}))}}function j(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=D(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function D(t,e){if(t){if("string"===typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}w()(C,{VBtn:x["a"],VHover:k["a"],VIcon:P["a"]});var V={name:"vuetify-week-scheduler",components:{SchedulerPeriod:_},props:{config:{type:Object,default:function(){}},value:{type:Array,required:!0},editable:{type:Boolean,default:!1}},data:function(){return{settings:{},counter:0,blocksEachHour:0,maxBlocks:0,blockHeight:0,events:[],newPeriod:null}},mounted:function(){this.settings=H(H({},this.getDefaults()),this.config),this.init(),this.handleCreate()},beforeDestroy:function(){this.events.forEach((function(t){t.element.removeEventListener(t.event,t.callback)}))},computed:{data:{get:function(){var t=this.value;if(this.value.length!==this.settings.days){t=[];for(var e=0;e<this.settings.days;e++)t.push({day:e,periods:[]});this.$emit("input",t)}return t},set:function(t){this.$emit("input",t)}},daysPeriods:function(){for(var t=[],e=0;e<this.settings.days;e++){var n,r={day:e,periods:[]};t.push(r);var o=null===(n=this.data)||void 0===n?void 0:n[e];if(o)for(var i=0;i<o.periods.length;i++){var a=o.periods[i],s=this.positionFormat(a.start),c=this.positionFormat(a.end);r.periods.push({options:this.addDefaults(a),index:i,top:s*this.blockHeight,height:(c-s)*this.blockHeight})}}return t},isMobile:function(){return this.$vuetify.breakpoint.mdAndDown}},methods:{getDefaults:function(){return{hour:24,days:7,periodDuration:15,periodTitle:"",periodBackgroundColor:"#F44336FF",periodBorderColor:"transparent",periodTextColor:"#000",periodRemoveButton:"Remove",periodDuplicateButton:"Duplicate",daysList:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},onDayDown:function(t,e){if(this.editable){var n=e.currentTarget.getBoundingClientRect(),r=this.getY(e,!0)-n.top,o=Math.floor(r/this.blockHeight),i=this.blocksToTime(o),a=this.blocksToTime(o+2),s=2*this.blockHeight;this.newPeriod={dragStart:this.getY(e,!0),startHeight:s,maxHeight:e.currentTarget.clientHeight,day:t,start:i,end:a,top:o*this.blockHeight,height:s}}},addDefaults:function(t){return H({title:this.settings.periodTitle,backgroundColor:this.settings.periodBackgroundColor,borderColor:this.settings.periodBorderColor,textColor:this.settings.periodTextColor},t)},handleCreate:function(){var t=this,e=function(){t.newPeriod&&(t.addPeriod(t.newPeriod.day,{start:t.newPeriod.start,end:t.newPeriod.end}),t.newPeriod=null)},n=function(e){if(e.preventDefault(),t.newPeriod){var n=t.roundBlock(t.newPeriod.dragStart-t.getY(e,!0)),r=t.roundBlock(t.newPeriod.startHeight-n);if(r>t.blockHeight&&t.newPeriod.top+r<=t.newPeriod.maxHeight){var o=t.positionToInterval(t.newPeriod),i=o.start,a=o.end,s=t.data[t.newPeriod.day].periods;t.isValid({start:i,end:a},s)&&Object.assign(t.newPeriod,{height:r,start:i,end:a})}}};this.addListener(document,"mouseup",e),this.addListener(document,"touchend",e),this.addListener(document,"mousemove",n),this.addListener(document,"touchmove",n)},addPeriod:function(t,e){this.data[t]||(this.data[t]={day:t,periods:[]});var n=this.data[t].periods;e=this.addDefaults(e),this.isValid(e,n)&&n.push(e)},init:function(){var t=this;try{if(![15,30,60].includes(this.settings.periodDuration))throw new Error("Invalide period duration");this.blocksEachHour=60/this.settings.periodDuration,this.maxBlocks=24*this.blocksEachHour,this.blockHeight=40/this.blocksEachHour,this.data.forEach((function(e){null===e||void 0===e||e.periods.forEach((function(n,r){t.isValid(n,e.periods)||(e.periods.splice(r,1),console.error("Invalid period duration",n))}))}))}catch(e){this.$emit("error",e)}},deletePeriod:function(t,e){this.data[t].periods.splice(e,1)},clonePeriod:function(t,e){var n,r="object"===S(e)?e:this.data[t].periods[e],o=j(this.data);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.day!==t&&this.isValid(r,i.periods)&&i.periods.push(H({},r))}}catch(a){o.e(a)}finally{o.f()}},clearDayPeriods:function(t){this.data[t]&&(this.data[t].periods=[])},cloneDayPeriods:function(t){if(this.data[t]){var e,n=this.data[t].periods,r=j(this.data);try{for(r.s();!(e=r.n()).done;){var o=e.value;if(o.day!==t){var i,a=j(n);try{for(a.s();!(i=a.n()).done;){var s=i.value;this.clonePeriod(t,s)}}catch(c){a.e(c)}finally{a.f()}}}}catch(c){r.e(c)}finally{r.f()}}},onPositionChange:function(t,e,n){var r=this;return O(E().mark((function o(){var i,a,s,c,l,u,d,h;return E().wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t=null===(i=r.data)||void 0===i?void 0:i[t],s=null===(a=t)||void 0===a?void 0:a.periods[e],!s){o.next=10;break}return c=r.positionToInterval(n),l=c.start,u=c.end,d=s.start,h=s.end,Object.assign(s,{start:l,end:u}),o.next=9,r.$nextTick();case 9:r.isValid(s,t.periods)||Object.assign(s,{start:d,end:h});case 10:case"end":return o.stop()}}),o)})))()},roundBlock:function(t){return Math.round(t/this.blockHeight)*this.blockHeight},positionToInterval:function(t){return{start:this.blocksToTime(t.top/this.blockHeight),end:this.blocksToTime(Math.floor((t.top+t.height)/this.blockHeight))}},blocksToTime:function(t){t>this.maxBlocks&&(t=0),t<0&&(t=0);var e=Math.floor(t/this.blocksEachHour),n=60*(t/this.blocksEachHour-e);if(12===this.settings.hour){var r=e,o="";return e>=12&&(o="p"),e>12&&(r=e-12),0!==e&&24!==e||(o="",r=12),0!==n&&(r+=":".concat(n)),r+o}return e<10&&(e="0".concat(e)),n<10&&(n="0".concat(n)),23===e&&59===n&&(e="24",n="00"),"".concat(e,":").concat(n)},formatHour:function(t){if(12===this.settings.hour)switch(t){case 0:case 24:t="12am";break;case 12:t="12pm";break;default:t>12?t="".concat(t-12,"pm"):t+="am"}else t>24&&(t=0),t<10&&(t="0".concat(t)),t+=":00";return t},positionFormat:function(t){var e=t.split(":"),n=parseInt(e[0],10),r=parseInt(e[1],10);if(12===this.settings.hour){var o=t.match(/([0-1]?[0-9]):?([0-5][0-9])?\s?(am|pm|p)?/),i=o[3];i||(i="am"),n=parseInt(o[1],10),r=parseInt(o[2],10),r||(r=0),12===n&&"am"===i&&(n=0),12!==n||"pm"!==i&&"p"!==i||(i="am"),"pm"!==i&&"p"!==i||(n+=12)}var a=0;return a+=n*this.blocksEachHour,a+=r/60*this.blocksEachHour,a},isValid:function(t,e){var n,r=this.positionFormat(t.start),o=this.positionFormat(t.end),i=0,a=0,s=!0,c=j(e);try{for(c.s();!(n=c.n()).done;){var l=n.value;if(l!==t&&(i=this.positionFormat(l.start),a=this.positionFormat(l.end),i>r&&i<o&&(s=!1),a>r&&a<o&&(s=!1),i<r&&a>o&&(s=!1),i!==r&&a!==o||(s=!1),!s))break}}catch(u){c.e(u)}finally{c.f()}return s},addListener:function(t,e,n,r){this.events.push({element:t,event:e,callback:n}),t.addEventListener(e,n,r)},editPeriod:function(t,e){var n=this;return O(E().mark((function r(){return E().wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.editable&&n.$emit("edit",{day:t,index:e});case 1:case"end":return r.stop()}}),r)})))()},getY:function(t,e){var n=null;if("touchstart"===t.type||"touchmove"===t.type||"touchend"===t.type||"touchcancel"===t.type){e&&t.preventDefault();var r=t.touches[0]||t.changedTouches[0];n=r.pageY}else"mousedown"!==t.type&&"mouseup"!==t.type&&"mousemove"!==t.type&&"mouseover"!==t.type&&"mouseout"!==t.type&&"mouseenter"!==t.type&&"mouseleave"!==t.type||(n=t.clientY);return n}}},F=V,M=Object(g["a"])(F,a,s,!1,null,null,null),I=M.exports;w()(M,{VBtn:x["a"],VHover:k["a"],VIcon:P["a"]});var A=r["a"].extend({components:{VuetifyWeekScheduler:I},data:function(){return{events:[],editable:!0,config:{periodBackgroundColor:"#F44336",periodTitle:0,periodTextColor:"#fff",periodBorderColor:"#ccc"},editDialog:!1,editEvent:null,colors:["#F44336","#3F51B5","#9C27B0","#FF9800","#4CAF50","#FFEB3B"]}},methods:{onEdit:function(t){var e=t.day,n=t.index,r=this.events[e].periods;this.editEvent=r[n],this.editDialog=!0}}}),N=A,Y=n("7496"),R=n("b0af"),G=n("99d9"),q=n("ac7c"),z=n("62ad"),W=n("a523"),J=n("169a"),U=n("0fd9"),K=n("2fa4"),Q=n("8654"),X=Object(g["a"])(N,o,i,!1,null,null,null),Z=X.exports;w()(X,{VApp:Y["a"],VBtn:x["a"],VCard:R["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VCheckbox:q["a"],VCol:z["a"],VContainer:W["a"],VDialog:J["a"],VIcon:P["a"],VRow:U["a"],VSpacer:K["a"],VTextField:Q["a"]});n("5363");var tt=n("f309");r["a"].use(tt["a"]);var et=new tt["a"]({theme:{dark:!0},icons:{iconFont:"mdi"}});n("bf40");r["a"].config.productionTip=!1,new r["a"]({vuetify:et,render:function(t){return t(Z)}}).$mount("#app")}});
//# sourceMappingURL=app.9c9bd524.js.map