(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{1093:function(e,t,a){"use strict";var s=a(5893),n=a(9008),r=a(1664);t.Z=function(e){var t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{children:(0,s.jsxs)("title",{className:"capitalize",children:["SSIM - ",(t=e.title,t.toUpperCase())]})}),(0,s.jsxs)("div",{className:"relative h-[100px] sm:h-[150px] md:h-[200px] w-full bg-gray-800 flex items-center",children:[(0,s.jsx)("img",{className:"h-full opacity-30",src:e.src||"https://source.unsplash.com/1920x200/?education",alt:""}),(0,s.jsx)("div",{className:"absolute px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]",children:(0,s.jsxs)("p",{className:"text-xl sm:text-2xl text-green-500 tracking-widest",children:[(0,s.jsx)(r.default,{href:"/",children:(0,s.jsx)("a",{className:"",children:"HOME"})}),"\xa0\xa0"," > ","\xa0\xa0",(0,s.jsx)("a",{className:"uppercase",children:e.title})]})})]})]})}},3398:function(e,t,a){"use strict";var s;t.__esModule=!0,t.AmpStateContext=void 0;var n=((s=a(7294))&&s.__esModule?s:{default:s}).default.createContext({});t.AmpStateContext=n},6393:function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(n.default.useContext(r.AmpStateContext))};var s,n=(s=a(7294))&&s.__esModule?s:{default:s},r=a(3398);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,s=e.hybrid,n=void 0!==s&&s,r=e.hasQuery,l=void 0!==r&&r;return a||n&&l}},2775:function(e,t,a){"use strict";var s=a(1682);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}t.__esModule=!0,t.defaultHead=x,t.default=void 0;var r,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=s?Object.getOwnPropertyDescriptor(e,n):null;r&&(r.get||r.set)?Object.defineProperty(a,n,r):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a(7294)),i=(r=a(3244))&&r.__esModule?r:{default:r},m=a(3398),o=a(1165),c=a(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function x(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function u(e,t){return e.reduce((function(e,t){var a=l.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(f,[]).reverse().concat(x(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,s={};return function(n){var r=!0,l=!1;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){l=!0;var i=n.key.slice(n.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(n.type){case"title":case"base":t.has(n.type)?r=!1:t.add(n.type);break;case"meta":for(var m=0,o=p.length;m<o;m++){var c=p[m];if(n.props.hasOwnProperty(c))if("charSet"===c)a.has(c)?r=!1:a.add(c);else{var d=n.props[c],x=s[c]||new Set;"name"===c&&l||!x.has(d)?(x.add(d),s[c]=x):r=!1}}}return r}}()).reverse().map((function(e,a){var r=e.key||a;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,l.default.cloneElement(e,i)}return l.default.cloneElement(e,{key:r})}))}var h=function(e){var t=e.children,a=(0,l.useContext)(m.AmpStateContext),s=(0,l.useContext)(o.HeadManagerContext);return l.default.createElement(i.default,{reduceComponentsToState:u,headManager:s,inAmpMode:(0,c.isInAmpMode)(a)},t)};t.default=h},3244:function(e,t,a){"use strict";var s=a(3115),n=a(2553),r=a(2012),l=(a(450),a(9807)),i=a(7690),m=a(9828);function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=m(e);if(t){var n=m(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return i(this,a)}}t.__esModule=!0,t.default=void 0;var c=a(7294),d=function(e){l(a,e);var t=o(a);function a(e){var r;return n(this,a),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(s(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(c.Component);t.default=d},1662:function(e,t,a){"use strict";a.r(t);var s=a(5893),n=a(7294),r=a(1093),l=a(9669),i=a.n(l),m=a(4573),o=function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mt-4 w-full ".concat(e.className),children:[(0,s.jsxs)("label",{className:"m-1",children:[e.name," ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:e.type,name:e.fieldName,placeholder:e.placeholder||"",required:!0})]})})},c=function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mt-4 w-full ".concat(e.className),children:[(0,s.jsx)("label",{className:"m-1",children:e.name}),(0,s.jsx)("input",{type:e.type,name:e.fieldName,placeholder:e.placeholder||""})]})})},d=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("label",{className:"m-1 mt-4",children:[e.name," ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("textarea",{name:e.type})]})},x=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{className:"m-1 mt-4",children:e.name}),(0,s.jsx)("textarea",{name:e.type})]})},f=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mt-4 flex items-center",children:[(0,s.jsxs)("label",{className:"m-1 mr-4",children:["Gender ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsxs)("span",{className:"mr-4 flex items-center",children:[(0,s.jsx)("input",{className:"mr-2",type:"radio",name:"gender",value:"Male"}),(0,s.jsx)("label",{children:"Male"})]}),(0,s.jsxs)("span",{className:"mr-4 flex items-center",children:[(0,s.jsx)("input",{className:"mr-2",type:"radio",name:"gender",value:"Female"}),(0,s.jsx)("label",{children:"Female"})]})]})})},p=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mt-4 flex items-center",children:[(0,s.jsxs)("label",{className:"m-1 mr-4",children:["Marital Status ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsxs)("span",{className:"mr-4 flex items-center",children:[(0,s.jsx)("input",{className:"mr-2",type:"radio",name:"marital",value:"Married"}),(0,s.jsx)("label",{children:"Married"})]}),(0,s.jsxs)("span",{className:"mr-4 flex items-center",children:[(0,s.jsx)("input",{className:"mr-2",type:"radio",name:"marital",value:"Single"}),(0,s.jsx)("label",{children:"Single"})]})]})})},u=function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mt-4 text-justify",children:[(0,s.jsx)("input",{className:"mr-3 mb-1",type:"checkbox",value:"Yes"}),(0,s.jsx)("label",{children:e.name})]})})};t.default=function(){var e=!0,t=(0,n.useState)(!1),a=t[0],l=t[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Z,{isSubmit:a,setIsSubmit:l}),(0,s.jsx)(r.Z,{title:"Apply Now"}),(0,s.jsx)("form",{name:"onlineForm",onSubmit:function(t){return function(t){if(t.preventDefault(),e){e=!1,setTimeout((function(){e=!0}),3e3);var a=document.forms.namedItem("onlineForm"),s=new FormData(a);i().post("https://formsubmit.co/ajax/application.ssimdwarka@gmail.com",s).then((function(e){200===e.status&&l(!0)})).catch((function(e){alert("Form Not Submitted")})),i().post("https://formsubmit.co/ajax/ea008567375f98fb0ece50498539a9ec",s)}}(t)},children:(0,s.jsxs)("div",{className:"container mx-auto prose my-12 px-5 flex flex-col max-w-[600px]",children:[(0,s.jsx)("h2",{children:"Basic Information"}),(0,s.jsx)("input",{type:"hidden",name:"_subject",value:"Admission Form"}),(0,s.jsx)("input",{type:"hidden",name:"Type",value:"Admission Form"}),(0,s.jsx)("input",{type:"hidden",name:"_template",value:"box"}),(0,s.jsx)(o,{name:"NAME (MR./MS.)",fieldName:"Name",type:"text",className:"mt-0"}),(0,s.jsx)(o,{name:"E-mail Id",fieldName:"email",type:"email"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Aadhaar Card No",type:"text",fieldName:"aadhar",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Mobile No",type:"text",fieldName:"mobile",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h2",{children:"Father's Information"}),(0,s.jsx)(o,{name:"FATHER\u2019S NAME",type:"text",fieldName:"father name",className:"mt-0"}),(0,s.jsx)(d,{name:"Organization Name & Address"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Designation",type:"text",fieldName:"fathers-Designation",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Mobile No",type:"text",fieldName:"fathers-mobile",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h2",{children:"Mother's Information"}),(0,s.jsx)(o,{name:"MOTHER'S NAME",fieldName:"mothers-name",type:"text",className:"mt-0"}),(0,s.jsx)(x,{name:"Organization Name & Address"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Designation",type:"text",fieldName:"mothers-designation",className:"sm:w-1/2 mr-2"}),(0,s.jsx)(c,{name:"Mobile No",type:"text",fieldName:"mothers-mobile",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h2",{children:"Other Information"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Date of Birth",type:"date",fieldName:"DOB",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Religion",type:"text",fieldName:"Relegion",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Category (SC/ST/OBC/Genral)",type:"text",fieldName:"category",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Nationality",type:"text",fieldName:"nationality",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)(p,{}),(0,s.jsx)(f,{}),(0,s.jsx)(d,{name:"Permanent Address (with City)"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"State",type:"text",fieldName:"permanent_state",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Pin Code",type:"text",fieldName:"permanent_pin_code",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)(x,{name:"Present Address (with City)"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"State",type:"text",fieldName:"present_state",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(c,{name:"Pin Code",type:"text",fieldName:"present_pin_code",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h2",{children:"Qualification"}),(0,s.jsx)("h3",{className:"italic",children:"1. High School"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Board / University",type:"text",fieldName:"high_school_board",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Year of Passing",type:"text",fieldName:"high_school_year_of_passing",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Percentage / Grade",type:"text",fieldName:"high_school_precentage",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Specialization/Stream",type:"text",fieldName:"high_school_specialization",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h3",{className:"italic",children:"2. Intermediate"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Board / University",type:"text",fieldName:"intermediate_board",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Year of Passing",type:"text",fieldName:"intermediate_year_of_passing",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Percentage / Grade",type:"text",fieldName:"intermediate_passing_percentage",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Specialization/Stream",type:"text",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h3",{className:"italic",children:"3. Graduation"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Board / University",type:"text",fieldName:"graduation_board",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Year of Passing",type:"text",fieldName:"graduation_year_of_passing",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(o,{name:"Percentage / Grade",type:"text",fieldName:"graduation_percentage",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(o,{name:"Specialization/Stream",type:"text",fieldName:"graduation_specialization",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h3",{className:"italic",children:"Any other qualification"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Board / University",type:"text",fieldName:"other_board",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(c,{name:"Year of Passing",type:"text",fieldName:"other_year_of_passing",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Percentage / Grade",type:"text",fieldName:"other_percentage",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(c,{name:"Specialization/Stream",type:"text",fieldName:"other_specialization",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h2",{children:"Entrance Examination Details"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Exam Name",type:"text",fieldName:"Entrance_exam_name",className:"sm:w-1/2 sm:mr-2",placeholder:"CAT / MAT / C-MAT / Other"}),(0,s.jsx)(c,{name:"Reg./Roll No.",type:"text",fieldName:"entrance_exam_roll_no",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Score",type:"text",fieldName:"entrance_score",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(c,{name:"Percentile",type:"text",fieldName:"entrance_percentile",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("h3",{className:"italic",children:"Professional Experience (if Any)"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Name of the Company",type:"text",fieldName:"name_of_company",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(c,{name:"Designation",type:"text",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,s.jsx)(c,{name:"Period From-To",type:"text",fieldName:"period_from_to",className:"sm:w-1/2 sm:mr-2"}),(0,s.jsx)(c,{name:"Exp. in Year(s)",type:"text",fieldName:"experience_in_years",className:"sm:w-1/2 sm:ml-2"})]}),(0,s.jsx)("div",{className:"flex flex-col sm:flex-row",children:(0,s.jsx)(c,{name:"Responsibilities",type:"text",fieldName:"responsibilities",className:"sm:w-1/2 sm:mr-2"})}),(0,s.jsx)("h2",{children:"Submission"}),(0,s.jsx)(o,{name:"Where did you come to know about the Institute and the program?",fieldName:"referral_details",type:"text"}),(0,s.jsx)(u,{name:"I confirm that to the best of my knowledge the information contained in this application form is true and accurate. I have gone through the contents of the Prospectus and agree to all the conditions stipulated therein and if admitted, will also abide by the rules and regulations SSIM as may be in force from time to time."}),(0,s.jsx)("button",{className:"mt-12 bg-yellow-500 border-0 py-3 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white",children:"SUBMIT"})]})})]})}},226:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admission/online-form",function(){return a(1662)}])},9008:function(e,t,a){e.exports=a(2775)},8164:function(e,t,a){var s=a(4360);e.exports=function(e){if(Array.isArray(e))return s(e)}},1682:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,a){var s=a(8164),n=a(7381),r=a(3585),l=a(5725);e.exports=function(e){return s(e)||n(e)||r(e)||l()}}},function(e){e.O(0,[774,888,179],(function(){return t=226,e(e.s=t);var t}));var t=e.O();_N_E=t}]);