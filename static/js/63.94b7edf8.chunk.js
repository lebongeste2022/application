(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[63],{135:function(e,t,a){"use strict";a(0);var s=a(169),r=a(156),c=a(170),l=a(1);t.a=function(e){return Object(l.jsx)(s.a,{children:Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"page-title-box",children:[Object(l.jsx)("h4",{className:"page-title",children:e.title}),Object(l.jsx)("div",{className:"page-title-right",children:Object(l.jsxs)(c.a,{listProps:{className:"m-0"},children:[Object(l.jsx)(c.a.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,t){return e.active?Object(l.jsx)(c.a.Item,{active:!0,children:e.label},t):Object(l.jsx)(c.a.Item,{href:e.path,children:e.label},t)}))]})})]})})})}},201:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return O}));var s=a(3),r=a(0),c=a.n(r),l=a(202),n=a(1),i=function(e){var t=e.defaultValues,a=e.resolver,r=e.children,i=e.onSubmit,o=e.formClass,b=Object(l.d)({defaultValues:t,resolver:a}),j=b.handleSubmit,d=b.register,m=b.control,u=b.formState.errors;return Object(n.jsx)("form",{onSubmit:j(i),className:o,noValidate:!0,children:Array.isArray(r)?r.map((function(e){return e.props&&e.props.name?c.a.createElement(e.type,Object(s.a)({},Object(s.a)(Object(s.a)({},e.props),{},{register:d,key:e.props.name,errors:u,control:m}))):e})):r})},o=a(35),b=a(701),j=a(816),d=function(e){var t=e.type,a=e.name,r=e.placeholder,c=e.register,l=e.errors,i=e.comp,j=e.rows,d=e.className,m=e.refCallback,u=Object(o.a)(e,["type","name","placeholder","register","errors","comp","rows","className","refCallback"]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Control,Object(s.a)(Object(s.a)({type:t,placeholder:r,name:a,as:i,id:a,ref:function(e){m&&m(e)},className:d,isInvalid:!(!l||!l[a])},c?c(a):{}),{},{rows:j},u)),l&&l[a]?Object(n.jsx)(b.a.Control.Feedback,{type:"invalid",className:"d-block",children:l[a].message}):null]})},m=function(e){var t=e.type,a=e.label,r=e.name,c=(e.placeholder,e.register),l=e.errors,i=(e.comp,e.rows,e.className),j=e.refCallback,d=Object(o.a)(e,["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Check,Object(s.a)(Object(s.a)({type:t,label:a,name:r,id:r,ref:function(e){j&&j(e)},className:i,isInvalid:!(!l||!l[r])},c?c(r):{}),d)),l&&l[r]?Object(n.jsx)(b.a.Control.Feedback,{type:"invalid",children:l[r].message}):null]})},u=function(e){var t=e.type,a=e.label,r=e.name,c=(e.placeholder,e.register),l=e.errors,i=(e.comp,e.rows,e.className),j=e.refCallback,d=Object(o.a)(e,["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Select,Object(s.a)(Object(s.a)({type:t,label:a,name:r,id:r,ref:function(e){j&&j(e)},className:i,isInvalid:!(!l||!l[r])},c?c(r):{}),d)),l&&l[r]?Object(n.jsx)(b.a.Control.Feedback,{type:"invalid",children:l[r].message}):null]})},p=function(e){var t=e.startIcon,a=e.type,r=e.name,c=e.placeholder,l=e.comp,i=e.register,b=e.errors,m=e.rows,p=e.className,O=e.textClassName,h=e.refCallback,x=Object(o.a)(e,["startIcon","type","name","placeholder","comp","register","errors","rows","className","textClassName","refCallback"]);return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(j.a.Text,{className:O,children:t}),"select"===a?Object(n.jsx)(u,Object(s.a)({type:a,name:r,placeholder:c,refCallback:h,comp:l,errors:b,register:i,className:p,rows:m},x)):Object(n.jsx)(d,Object(s.a)({type:a,name:r,placeholder:c,refCallback:h,comp:l,errors:b,register:i,className:p,rows:m},x))]})},O=function(e){var t=e.startIcon,a=e.label,r=e.type,c=e.name,l=e.placeholder,i=e.register,j=e.errors,O=(e.control,e.className),h=e.labelClassName,x=e.containerClass,v=e.textClassName,f=e.refCallback,g=e.action,N=e.rows,y=Object(o.a)(e,["startIcon","label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","textClassName","refCallback","action","rows"]),C="textarea"===r?"textarea":"select"===r?"select":"input";return Object(n.jsx)(n.Fragment,{children:"hidden"===r?Object(n.jsx)("input",Object(s.a)(Object(s.a)({type:r,name:c},i?i(c):{}),y)):Object(n.jsx)(n.Fragment,{children:"checkbox"===r||"radio"===r?Object(n.jsx)(b.a.Group,{className:x,children:Object(n.jsx)(m,Object(s.a)({type:r,label:a,name:c,placeholder:l,refCallback:f,errors:j,register:i,comp:C,className:O,rows:N},y))}):"select"===r?Object(n.jsxs)(b.a.Group,{className:x,children:[a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Label,{className:h,children:a}),g&&g]}):null,t?Object(n.jsx)(p,Object(s.a)({type:r,startIcon:t,name:c,comp:C,textClassName:v,placeholder:l,refCallback:f,errors:j,register:i,className:O,rows:N},y)):Object(n.jsx)(u,Object(s.a)({type:r,name:c,placeholder:l,refCallback:f,errors:j,register:i,comp:C,className:O,rows:N},y))]}):Object(n.jsxs)(b.a.Group,{className:x,children:[a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Label,{className:h,children:a}),g&&g]}):null,t?Object(n.jsx)(p,Object(s.a)({type:r,startIcon:t,name:c,comp:C,textClassName:v,placeholder:l,refCallback:f,errors:j,register:i,className:O,rows:N},y)):Object(n.jsx)(d,Object(s.a)({type:r,name:c,placeholder:l,refCallback:f,errors:j,register:i,comp:C,className:O,rows:N},y))]})})})}},976:function(e,t,a){"use strict";a.r(t);var s=a(31),r=a(23),c=a(0),l=a(169),n=a(156),i=a(217),o=a(163),b=a(858),j=a(135),d=a(842),m=a(863),u=a(864),p=a(866),O=a(868),h=a(1),x=function(e){var t=e.onDateClick,a=e.onEventClick,s=e.events;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{id:"calendar",children:Object(h.jsx)(b.a,{initialView:"dayGridMonth",plugins:[d.b,m.a,u.a,p.a,O.a],handleWindowResize:!0,themeSystem:"bootstrap",buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List",prev:"Prev",next:"Next"},headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},dayMaxEventRows:1,editable:!0,selectable:!0,droppable:!0,events:s,dateClick:function(e){t(e)},eventClick:function(e){a(e)}})})})},v=a(202),f=a(840),g=a(290),N=a(292),y=a(201),C=function(e){var t=e.isOpen,a=e.onClose,s=e.isEditable,o=e.eventData,b=e.onRemoveEvent,j=e.onUpdateEvent,d=e.onAddEvent,m=Object(c.useState)(o),u=Object(r.a)(m,1)[0],p=Object(N.a)(g.b().shape({title:g.d().required("Please enter event name"),className:g.d().required("Please select category")})),O=Object(v.d)({defaultValues:u,resolver:p}),x=O.handleSubmit,C=O.register,w=O.control,k=O.formState.errors;return Object(h.jsxs)(f.a,{show:t,onHide:a,backdrop:"static",keyboard:!1,children:[Object(h.jsx)(f.a.Header,{className:"pb-2 px-4 border-bottom-0",closeButton:!0,children:Object(h.jsx)(f.a.Title,{id:"modal-title",children:Object(h.jsxs)("h5",{children:[" ",s?"Edit Event":"Add New Event"," "]})})}),Object(h.jsx)(f.a.Body,{className:"px-4 pb-4 pt-0",children:Object(h.jsxs)("form",{noValidate:!0,name:"chat-form",id:"chat-form",onSubmit:x((function(e){s?j(e):d(e)})),children:[Object(h.jsxs)(l.a,{children:[Object(h.jsx)(n.a,{sm:12,children:Object(h.jsx)(y.a,{type:"text",label:"Event Name",name:"title",className:"form-control",placeholder:"Insert Event Name",containerClass:"mb-3",register:C,errors:k,control:w},"title")}),Object(h.jsx)(n.a,{sm:12,children:Object(h.jsxs)(y.a,{type:"select",label:"Category",name:"className",className:"form-control",containerClass:"mb-3",register:C,errors:k,control:w,children:[Object(h.jsx)("option",{value:"bg-danger",children:"Danger"}),Object(h.jsx)("option",{value:"bg-success",children:"Success"}),Object(h.jsx)("option",{value:"bg-primary",children:"Primary"}),Object(h.jsx)("option",{value:"bg-info",children:"Info"}),Object(h.jsx)("option",{value:"bg-dark",children:"Dark"}),Object(h.jsx)("option",{value:"bg-warning",children:"Warning"})]},"className")})]}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(n.a,{xs:4,children:s?Object(h.jsx)(i.a,{variant:"danger",onClick:b,children:"Delete"}):null}),Object(h.jsxs)(n.a,{xs:8,className:"text-end",children:[Object(h.jsx)(i.a,{className:"btn btn-light me-1",onClick:a,children:"Close"}),Object(h.jsx)(i.a,{variant:"success",type:"submit",className:"btn btn-success",children:"Save"})]})]})]})})]})},w=[{id:"1",title:"Interview - Backend Engineer",start:new Date,className:"bg-success"},{id:"2",title:"Phone Screen - Frontend Engineer",start:(new Date).setDate((new Date).getDate()+2),className:"bg-info"},{id:"3",title:"Meeting with John Deo",start:(new Date).setDate((new Date).getDate()+2),end:(new Date).setDate((new Date).getDate()+4),className:"bg-warning"},{id:"4",title:"Buy a Theme",start:(new Date).setDate((new Date).getDate()+4),end:(new Date).setDate((new Date).getDate()+5),className:"bg-primary"}],k=a.p+"static/media/cal.80fd7ea4.png",D=function(e){var t=e.createNewEvent;return Object(h.jsxs)(l.a,{className:"align-items-center",children:[Object(h.jsx)(n.a,{xl:2,lg:3,xs:6,children:Object(h.jsx)("img",{src:k,className:"me-4 align-self-center img-fluid",alt:""})}),Object(h.jsx)(n.a,{xl:10,lg:9,children:Object(h.jsxs)("div",{className:"mt-4 mt-lg-0",children:[Object(h.jsx)("h5",{className:"mt-0 mb-1 fw-bold",children:"Bienvenue dans votre calendrier"}),Object(h.jsx)("p",{className:"text-muted mb-2",children:"Le calendrier affiche les \xe9v\xe9nements synchronis\xe9s \xe0 partir de tous vos calendriers li\xe9s. Cliquez sur l'\xe9v\xe9nement pour voir ou modifier les d\xe9tails. Vous pouvez cr\xe9er un nouvel \xe9v\xe9nement en cliquant sur le bouton \"Cr\xe9er un nouvel \xe9v\xe9nement\" ou sur n'importe quelle cellule disponible dans le calendrier ci-dessous."}),Object(h.jsxs)(i.a,{variant:"primary",className:"mt-2 me-1",id:"btn-new-event",onClick:t,children:[Object(h.jsx)("i",{className:"uil-plus-circle"})," Cr\xe9er un nouveau \xe9v\xe9nement"]}),Object(h.jsxs)(i.a,{variant:"white",className:"mt-2",children:[Object(h.jsx)("i",{className:"uil-sync"})," Lier les calendriers"]})]})})]})};t.default=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],b=function(){i(!1),S({}),G({})},d=function(){return i(!0)},m=Object(c.useState)(!1),u=Object(r.a)(m,2),p=u[0],O=u[1],v=Object(c.useState)(Object(s.a)(w)),f=Object(r.a)(v,2),g=f[0],N=f[1],y=Object(c.useState)({}),k=Object(r.a)(y,2),E=k[0],S=k[1],I=Object(c.useState)({}),F=Object(r.a)(I,2),B=F[0],G=F[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{breadCrumbItems:[{label:"Apps",path:"/apps/calendar"},{label:"Calendar",path:"/apps/calendar",active:!0}],title:"Calendar"}),Object(h.jsx)(l.a,{children:Object(h.jsx)(n.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(o.a.Body,{children:Object(h.jsx)(D,{createNewEvent:function(){O(!1),d()}})})})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(n.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(o.a.Body,{children:Object(h.jsx)(x,{onDateClick:function(e){G(e),d(),O(!1)},onEventClick:function(e){var t={id:String(e.event.id),title:e.event.title,className:e.event.classNames[0]};S(t),d(),O(!0)},events:g})})})})}),a?Object(h.jsx)(C,{isOpen:a,onClose:b,isEditable:p,eventData:E,onUpdateEvent:function(e){var t=Object(s.a)(g),a=t.findIndex((function(e){return e.id===E.id}));t[a].title=e.title,t[a].className=e.className,N(t),b(),O(!1)},onRemoveEvent:function(){var e=Object(s.a)(g),t=e.findIndex((function(e){return e.id===E.id}));e.splice(t,1),N(e),b()},onAddEvent:function(e){var t=Object(s.a)(g),a={id:String(t.length+1),title:e.title,start:0!==Object.keys(B).length?B.date:new Date,className:e.className};t.push(a),N(t),b()}}):null]})}}}]);
//# sourceMappingURL=63.94b7edf8.chunk.js.map