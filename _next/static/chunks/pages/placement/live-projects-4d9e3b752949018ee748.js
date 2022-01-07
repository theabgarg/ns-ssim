(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{1093:function(e,t,n){"use strict";var r=n(5893),a=n(9008),o=n(1664);t.Z=function(e){var t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsxs)("title",{className:"capitalize",children:["SSIM - ",(t=e.title,t.toUpperCase())]})}),(0,r.jsxs)("div",{className:"relative h-[100px] sm:h-[150px] md:h-[200px] w-full bg-gray-800 flex items-center",children:[(0,r.jsx)("img",{className:"h-full opacity-30",src:e.src||"https://source.unsplash.com/1920x200/?education",alt:""}),(0,r.jsx)("div",{className:"absolute px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]",children:(0,r.jsxs)("p",{className:"text-xl sm:text-2xl text-green-500 tracking-widest",children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"",children:"HOME"})}),"\xa0\xa0"," > ","\xa0\xa0",(0,r.jsx)("a",{className:"uppercase",children:e.title})]})})]})]})}},3402:function(e,t,n){"use strict";n.d(t,{HA:function(){return a},k8:function(){return o},OC:function(){return s},MJ:function(){return c},_N:function(){return i}});var r=n(5893),a=function(e){return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center ".concat(e.className),children:e.children})},o=function(e){return(0,r.jsx)("div",{className:"mx-auto prose max-w-none md:w-5/6 px-6 text-justify ".concat(e.className),children:e.children})},s=function(e){return(0,r.jsxs)(a,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,r.jsx)("img",{className:"order-1 lg:order-2 rounded-3xl h-[300px] w-full max-w-[400px] shadow-xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,r.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify order-2 lg:order-1 w-full lg:pr-12",children:[(0,r.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,r.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},c=function(e){return(0,r.jsxs)(a,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,r.jsx)("img",{className:"rounded-3xl h-[300px] w-full max-w-[400px] shadow-2xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,r.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify w-full lg:pl-12",children:[(0,r.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,r.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},i=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"h-[150px] w-[150px] m-3 border-2 border-gray-300 rounded-2xl",children:(0,r.jsx)("img",{className:"object-contain p-1.5 w-full h-full",src:e.src||"https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e",alt:e.alt||"couldn't load"})})})}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,s=void 0!==o&&o;return n||a&&s}},2775:function(e,t,n){"use strict";var r=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(o=n(3244))&&o.__esModule?o:{default:o},i=n(3398),l=n(1165),u=n(6393);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,l=h.length;i<l;i++){var u=h[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var p=a.props[u],d=r[u]||new Set;"name"===u&&s||!d.has(p)?(d.add(p),r[u]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,s.default.cloneElement(e,c)}return s.default.cloneElement(e,{key:o})}))}var x=function(e){var t=e.children,n=(0,s.useContext)(i.AmpStateContext),r=(0,s.useContext)(l.HeadManagerContext);return s.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};t.default=x},3244:function(e,t,n){"use strict";var r=n(3115),a=n(2553),o=n(2012),s=(n(450),n(9807)),c=n(7690),i=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),p=function(e){s(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=p},164:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1093),o=n(3402);t.default=function(){for(var e=[],t=29;t<=53;t++)e.push("/images/recruiters/".concat(t,".jpg"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"Live Projects"}),(0,r.jsxs)(o.k8,{className:"pt-24",children:[(0,r.jsx)("p",{children:"Live projects play a significant role in providing real-time management education to the students. During live projects, students are encouraged to identify the domain they want to work in and select the relevant project. They also get to meet working professionals or organizations and discuss with them about the project. Live projects are about bringing professional management experience to young students which help them in the beginning of their career as well as in the long-run. It provides a right mix of practical exposure to the students and allows them to explore the professional work culture in the corporate world much before they actually get into it."}),(0,r.jsx)("h3",{className:"text-center",children:"Live Projects / Winter Live Projects Companies"})]}),(0,r.jsx)("div",{className:"container mx-auto px-6 py-24 pt-12",children:(0,r.jsx)("div",{className:"flex flex-wrap justify-center",children:e.map((function(e,t){return(0,r.jsx)(o._N,{src:e},t)}))})})]})}},395:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/placement/live-projects",function(){return n(164)}])},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),a=n(7381),o=n(3585),s=n(5725);e.exports=function(e){return r(e)||a(e)||o(e)||s()}}},function(e){e.O(0,[774,888,179],(function(){return t=395,e(e.s=t);var t}));var t=e.O();_N_E=t}]);