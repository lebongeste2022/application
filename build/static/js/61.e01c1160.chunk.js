(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[61],{135:function(e,t,a){"use strict";a(0);var c=a(168),l=a(155),s=a(169),n=a(1);t.a=function(e){return Object(n.jsx)(c.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"page-title-box",children:[Object(n.jsx)("h4",{className:"page-title",children:e.title}),Object(n.jsx)("div",{className:"page-title-right",children:Object(n.jsxs)(s.a,{listProps:{className:"m-0"},children:[Object(n.jsx)(s.a.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,t){return e.active?Object(n.jsx)(s.a.Item,{active:!0,children:e.label},t):Object(n.jsx)(s.a.Item,{href:e.path,children:e.label},t)}))]})})]})})})}},492:function(e,t,a){"use strict";var c=a(0),l=a(493),s=a.n(l),n=a(48),r=a.n(n),i=a(1),j=Object(c.forwardRef)((function(e,t){return Object(i.jsx)("input",{type:"text",className:r()("form-control",e.inputClass),onClick:e.onClick,value:e.value,onChange:function(){console.log("date value changed")},ref:t})})),d=Object(c.forwardRef)((function(e,t){return Object(i.jsxs)("div",{className:"input-group input-group-sm",ref:t,children:[Object(i.jsx)("input",{type:"text",className:r()("form-control",e.inputClass),onClick:e.onClick,value:e.value,readOnly:!0}),Object(i.jsx)("span",{className:"input-group-text bg-blue border-blue text-white",children:Object(i.jsx)("i",{className:"mdi mdi-calendar-range"})})]})}));t.a=function(e){var t=!0===(e.hideAddon||!1)?Object(i.jsx)(j,{inputClass:e.inputClass}):Object(i.jsx)(d,{inputClass:e.inputClass});return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s.a,{calendarClassName:e.calendarClassName||"shadow",selectsRange:e.selectsRange,startDate:e.startDate,endDate:e.endDate,selected:e.value,onChange:function(t){return e.onChange(t)},customInput:t,timeIntervals:e.tI,showTimeSelect:e.showTimeSelect,timeFormat:e.timeFormat||"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})}},951:function(e,t,a){"use strict";a.r(t);var c=a(23),l=a(0),s=a.n(l),n=a(162),r=a(168),i=a(155),j=a(30),d=a(835),b=a(929),m=(a(884),a(885)),o=a.n(m),h=a(135),x=a(492),O=a(1),u=function(){return Object(O.jsx)(n.a,{children:Object(O.jsxs)(n.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:Object(O.jsx)(j.b,{rel:"noreferrer",to:{pathname:"https://github.com/JedWatson/react-select"},target:"_blank",children:"React select"})}),Object(O.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Single Selection"}),Object(O.jsx)("p",{className:"text-muted fs-14",children:"React-Select based Select element"}),Object(O.jsx)(d.a,{className:"react-select react-select-container",classNamePrefix:"react-select",options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]}),Object(O.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Multiple Selection"}),Object(O.jsx)("p",{className:"text-muted fs-14",children:"React-Select based Select (Multiple) element"}),Object(O.jsx)(d.a,{isMulti:!0,options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],className:"react-select react-select-container",classNamePrefix:"react-select"})]})})},p=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)([]),i=Object(c.a)(r,2),d=i[0],m=i[1],o=[{id:1,value:"chocolate",label:"Chocolate"},{id:2,value:"strawberry",label:"Strawberry"},{id:3,value:"vanilla",label:"Vanilla"}];return Object(O.jsx)(n.a,{children:Object(O.jsxs)(n.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:Object(O.jsx)(j.b,{rel:"noreferrer",to:{pathname:"http://ericgio.github.io/react-bootstrap-typeahead/"},target:"_blank",children:"Typeahead"})}),Object(O.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Single Selection"}),Object(O.jsx)("p",{className:"text-muted fs-14",children:"Typeahead based Select element"}),Object(O.jsx)(b.a,{id:"select2",labelKey:"label",multiple:!1,onChange:function(e){s(e)},options:o,placeholder:"Choose a state...",selected:a}),Object(O.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Multiple Selection"}),Object(O.jsx)("p",{className:"text-muted fs-14",children:"Typeahead based Select (Multiple) element"}),Object(O.jsx)(b.a,{id:"select3",labelKey:"label",multiple:!0,onChange:function(e){m(e)},options:o,placeholder:"Choose a state...",selected:d})]})})},f=function(){var e=Object(l.useState)(new Date),t=Object(c.a)(e,2),a=t[0],s=t[1],d=function(e){e&&s(e)};return Object(O.jsx)(n.a,{children:Object(O.jsxs)(n.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Date & Time Picker"}),Object(O.jsxs)("p",{className:"text-muted fs-14",children:["A simple date picker using"," ",Object(O.jsx)(j.b,{target:"_blank",rel:"noreferrer",to:{pathname:"https://reactdatepicker.com/"},children:"ReactJS Datepicker"})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Single Date"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(x.a,{hideAddon:!0,value:a,onChange:function(e){d(e)}})]})}),Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Single Date with multiple months"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(x.a,{hideAddon:!0,monthsShown:2,value:a,onChange:function(e){d(e)}})]})})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Custom date format"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(x.a,{hideAddon:!0,dateFormat:"yyyy-MM-dd",value:a,onChange:function(e){d(e)}})]})}),Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Specific date range"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(x.a,{hideAddon:!0,minDate:new Date,maxDate:new Date((new Date).setDate((new Date).getDate()+7)),value:a,onChange:function(e){d(e)}})]})})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Select Time"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(x.a,{hideAddon:!0,showTimeSelect:!0,timeFormat:"HH:mm",tI:60,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time",value:a,onChange:function(e){d(e)}})]})}),Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Time only"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(x.a,{hideAddon:!0,showTimeSelect:!0,showTimeSelectOnly:!0,tI:60,dateFormat:"h:mm aa",timeCaption:"Time",value:a,onChange:function(e){d(e)}})]})})]})]})})},N=function(){return Object(O.jsx)(n.a,{children:Object(O.jsxs)(n.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Input Masks"}),Object(O.jsxs)("p",{className:"text-muted fs-14",children:["Input masks by"," ",Object(O.jsx)(j.b,{target:"_blank",rel:"noreferrer",to:{pathname:"https://github.com/text-mask/text-mask/tree/master/react#readme"},children:"react-text-mask"})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Phone Number with Area Code"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(o.a,{mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(__) ____-____",className:"form-control"})]})}),Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"US Phone Number"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(o.a,{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(___) ___-____",className:"form-control"})]})})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Date"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(o.a,{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],placeholder:"__/__/____",className:"form-control"})]})}),Object(O.jsx)(i.a,{lg:6,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Time"})," ",Object(O.jsx)("br",{}),Object(O.jsx)(o.a,{mask:[/\d/,/\d/,":",/\d/,/\d/,":",/\d/,/\d/],placeholder:"__:__:__",className:"form-control"})]})})]})]})})};t.default=function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(h.a,{breadCrumbItems:[{label:"Forms",path:"/forms/advanced"},{label:"Form Advanced",path:"/forms/advanced",active:!0}],title:"Form Advanced"}),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.a,{lg:6,children:Object(O.jsx)(u,{})}),Object(O.jsx)(i.a,{lg:6,children:Object(O.jsx)(p,{})})]}),Object(O.jsx)(r.a,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(f,{})})}),Object(O.jsx)(r.a,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(N,{})})})]})}}}]);
//# sourceMappingURL=61.e01c1160.chunk.js.map