(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{1093:function(e,t,n){"use strict";var a=n(5893),r=n(9008),s=n(1664);t.Z=function(e){var t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsxs)("title",{className:"capitalize",children:["SSIM - ",(t=e.title,t.toUpperCase())]})}),(0,a.jsxs)("div",{className:"relative h-[100px] sm:h-[150px] md:h-[200px] w-full bg-gray-800 flex items-center",children:[(0,a.jsx)("img",{className:"h-full opacity-30",src:e.src||"https://source.unsplash.com/1920x200/?education",alt:""}),(0,a.jsx)("div",{className:"absolute px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]",children:(0,a.jsxs)("p",{className:"text-xl sm:text-2xl text-green-500 tracking-widest",children:[(0,a.jsx)(s.default,{href:"/",children:(0,a.jsx)("a",{className:"",children:"HOME"})}),"\xa0\xa0"," > ","\xa0\xa0",(0,a.jsx)("a",{className:"uppercase",children:e.title})]})})]})]})}},3402:function(e,t,n){"use strict";n.d(t,{HA:function(){return r},k8:function(){return s},OC:function(){return o},MJ:function(){return i},_N:function(){return c}});var a=n(5893),r=function(e){return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center ".concat(e.className),children:e.children})},s=function(e){return(0,a.jsx)("div",{className:"mx-auto prose max-w-none md:w-5/6 px-6 text-justify ".concat(e.className),children:e.children})},o=function(e){return(0,a.jsxs)(r,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,a.jsx)("img",{className:"order-1 lg:order-2 rounded-3xl h-[300px] w-full max-w-[400px] shadow-xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,a.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify order-2 lg:order-1 w-full lg:pr-12",children:[(0,a.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,a.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},i=function(e){return(0,a.jsxs)(r,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,a.jsx)("img",{className:"rounded-3xl h-[300px] w-full max-w-[400px] shadow-2xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,a.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify w-full lg:pl-12",children:[(0,a.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,a.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},c=function(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"h-[150px] w-[150px] m-3 border-2 border-gray-300 rounded-2xl",children:(0,a.jsx)("img",{className:"object-contain p-1.5 w-full h-full",src:e.src||"https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e",alt:e.alt||"couldn't load"})})})}},3398:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(s.AmpStateContext))};var a,r=(a=n(7294))&&a.__esModule?a:{default:a},s=n(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,s=e.hasQuery,o=void 0!==s&&s;return n||r&&o}},2775:function(e,t,n){"use strict";var a=n(1682);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var s,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(s=n(3244))&&s.__esModule?s:{default:s},c=n(3398),l=n(1165),u=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var s=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?s=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?s=!1:t.add(r.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var d=r.props[u],p=a[u]||new Set;"name"===u&&o||!p.has(d)?(p.add(d),a[u]=p):s=!1}}}return s}}()).reverse().map((function(e,n){var s=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,o.default.cloneElement(e,i)}return o.default.cloneElement(e,{key:s})}))}var x=function(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),a=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,u.isInAmpMode)(n)},t)};t.default=x},3244:function(e,t,n){"use strict";var a=n(3115),r=n(2553),s=n(2012),o=(n(450),n(9807)),i=n(7690),c=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){o(n,e);var t=l(n);function n(e){var s;return r(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(a(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},5869:function(e,t,n){"use strict";n.r(t);var a=n(5893),r=n(1093),s=n(3402);t.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Corporate Edge Certifications"}),(0,a.jsxs)("div",{className:"mx-auto md:w-5/6 px-6 pb-8",children:[(0,a.jsx)(s.MJ,{imgClassName:"object-right",pClassName:"text-sm xl:text-base",className:"pt-24",title:"ERP Training ",src:"/images/corporate_edge/1.JPG",children:"NSE course on personal finance teach school students the value of investing, provide an introduction to the Indian capital markets and help to develop new market professionals. Our NSE workshop in Financial Markets, is a program that tests the practical knowledge and skills required to operate in the financial markets."}),(0,a.jsx)(s.OC,{pClassName:"text-sm xl:text-base",title:"National Stock Exchange (NSE)",src:"/images/corporate_edge/2.JPG",children:"The SSIM Institute has a well-equipped state of the art computer lab, with well-equipped systems of the latest technical configuration. The required legal softwares are also installed in each system. High-speed internet connectivity provides extended access to vast intellectual resources."}),(0,a.jsx)(s.MJ,{pClassName:"text-sm xl:text-base",title:"Security Exchange Board of India (SEBI)",src:"/images/corporate_edge/4.JPG",children:"The scope of this workshop lies within a few questions, as to why you should invest, what should be your investment objectives, investment options, the do\u2019s and don\u2019ts of investing, grievance and redressal."}),(0,a.jsx)(s.OC,{pClassName:"text-sm xl:text-base",title:"Digital Marketing",src:"/images/corporate_edge/6.PNG",children:"There are several manners in which a person can advantage from getting marketing knowhow, and it\u2019s one of the major perk for attending a workshop in Digital Marketing. Digital Marketing certification cover the skills which are fundamental to the globe of business. These skills include how to convey the viably via written communication means or oral, how to give presentations in an executive events and pitch thoughts. What is more, members find out how to analyze info, shopper requirements and marketing patterns."}),(0,a.jsx)(s.MJ,{imgClassName:"object-left",pClassName:"text-sm xl:text-base",title:"PGL (Personal Grooming Lab)",src:"/images/corporate_edge/5.JPG",children:"Personal Grooming Lab has an understated but powerful influence on one\u2019s progress. It helps to build a lasting image of an individual based solely on appearance which gives out a message of professionalism, sophistication, credibility etc. Many do feel that a person should not be defined by looks alone, however one responds positively to someone who is well kempt as opposed to someone who is shabby. Since looks are a visual medium, not just clothes and make up but healthy skin and hair, clipped nails along with good smell send out a subconscious signal about the person."}),(0,a.jsx)(s.OC,{pClassName:"text-sm xl:text-base",title:"Six Sigma ",src:"/images/corporate_edge/3.JPG",children:"Six Sigma is a set of methods and tools for process improvement. Developed in 1986, Six Sigma has become a global phenomenon with companies around the world. Companies and individuals are using six sigma methodologies to improve operational efficiencies. Six Sigma Certification is a great way to improve your capabilities as a leader in your organization. It helps in renovating the business processes."}),(0,a.jsx)("div",{className:"h-12"})]})]})}},9263:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pgdm/value-added-courses",function(){return n(5869)}])},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var a=n(4360);e.exports=function(e){if(Array.isArray(e))return a(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var a=n(8164),r=n(7381),s=n(3585),o=n(5725);e.exports=function(e){return a(e)||r(e)||s(e)||o()}}},function(e){e.O(0,[774,888,179],(function(){return t=9263,e(e.s=t);var t}));var t=e.O();_N_E=t}]);