(this["webpackJsonpshreyu-react-appgit"]=this["webpackJsonpshreyu-react-appgit"]||[]).push([[56],{130:function(e,a,l){"use strict";var t=l(0),s=function(e){return e&&"function"!==typeof e?function(a){e.current=a}:e};a.a=function(e,a){return Object(t.useMemo)((function(){return function(e,a){var l=s(e),t=s(a);return function(e){l&&l(e),t&&t(e)}}(e,a)}),[e,a])}},166:function(e,a,l){"use strict";function t(e){return e&&e.ownerDocument||document}l.d(a,"a",(function(){return t}))},175:function(e,a,l){"use strict";var t=l(210),s=!1,n=!1;try{var r={get passive(){return s=!0},get once(){return n=s=!0}};t.a&&(window.addEventListener("test",r,r),window.removeEventListener("test",r,!0))}catch(i){}a.a=function(e,a,l,t){if(t&&"boolean"!==typeof t&&!n){var r=t.once,i=t.capture,c=l;!n&&r&&(c=l.__once||function e(t){this.removeEventListener(a,e,i),l.call(this,t)},l.__once=c),e.addEventListener(a,c,s?t:i)}e.addEventListener(a,l,t)}},185:function(e,a,l){"use strict";var t=l(3),s=l(35),n=(l(0),l(291)),r=l(1);a.a=function(e){var a=e.className,l=e.style,i=e.children,c=Object(s.a)(e,["className","style","children"]);return Object(r.jsx)(n.a,Object(t.a)(Object(t.a)({className:a,style:l},c),{},{children:i}))}},210:function(e,a,l){"use strict";a.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},284:function(e,a,l){"use strict";var t=l(175),s=l(285);a.a=function(e,a,l,n){return Object(t.a)(e,a,l,n),function(){Object(s.a)(e,a,l,n)}}},285:function(e,a,l){"use strict";a.a=function(e,a,l,t){var s=t&&"boolean"!==typeof t?t.capture:t;e.removeEventListener(a,l,s),l.__once&&e.removeEventListener(a,l.__once,s)}},542:function(e,a,l){"use strict";l.d(a,"d",(function(){return i})),l.d(a,"c",(function(){return c})),l.d(a,"e",(function(){return p})),l.d(a,"a",(function(){return o})),l.d(a,"b",(function(){return b}));var t=l(31),s=[{key:"dashboards",label:"Dashboards",isTitle:!1,icon:"home",badge:{variant:"success",text:"02"},children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"},{key:"ds-analytics",label:"Analytics",url:"/dashboard/analytics",parentKey:"dashboards"}]},{key:"apps",label:"Apps",isTitle:!0},{key:"apps-calendar",label:"Calendrier",isTitle:!1,icon:"calendar",url:"/apps/calendar"},{key:"apps-chat",label:"Chat",isTitle:!1,icon:"message-square",url:"/apps/chat"},{key:"apps-email",label:"Email",isTitle:!1,icon:"mail",children:[{key:"email-inbox",label:"Inbox",url:"/apps/email/inbox",parentKey:"apps-email"},{key:"email-read-email",label:"Read Email",url:"/apps/email/details",parentKey:"apps-email"},{key:"email-compose-email",label:"Compose Email",url:"/apps/email/compose",parentKey:"apps-email"}]},{key:"apps-projects",label:"Projets",isTitle:!1,icon:"briefcase",children:[{key:"project-list",label:"List",url:"/apps/projects/list",parentKey:"apps-projects"},{key:"project-details",label:"Details",url:"/apps/projects/details",parentKey:"apps-projects"}]},{key:"apps-tasks",label:"Taches",isTitle:!1,icon:"clipboard",children:[{key:"task-list",label:"List",url:"/apps/tasks/list",parentKey:"apps-tasks"},{key:"task-kanban",label:"Kanban Board",url:"/apps/tasks/kanban",parentKey:"apps-tasks"}]},{key:"apps-file-manager",label:"Gestionnaire de fichiers",isTitle:!1,icon:"file-plus",url:"/apps/file-manager"},{key:"custom",label:"Custom",isTitle:!0},{key:"extra-pages",label:"Pages",isTitle:!1,icon:"file-text",children:[{key:"page-starter",label:"Entr\xe9e",url:"/pages/starter",parentKey:"extra-pages"},{key:"page-profile",label:"Profile",url:"/pages/profile",parentKey:"extra-pages"},{key:"page-activity",label:"Activitt\xe9s",url:"/pages/activity",parentKey:"extra-pages"},{key:"page-invoice",label:"Facture",url:"/pages/invoice",parentKey:"extra-pages"},{key:"page-pricing",label:"Tarifs",url:"/pages/pricing",parentKey:"extra-pages"},{key:"page-maintenance",label:"Maintenance",url:"/maintenance",target:"_blank",parentKey:"extra-pages"},{key:"page-error-404",label:"Error - 404",url:"/error-404",parentKey:"extra-pages"},{key:"page-error-500",label:"Error - 500",url:"/error-500",parentKey:"extra-pages"}]},{key:"components",label:"Components",isTitle:!0},{key:"ui-elements",label:"UI Elements",isTitle:!1,icon:"package",url:"/components/ui-elements"},{key:"widgets",label:"Widgets",isTitle:!1,icon:"gift",url:"/components/widgets"},{key:"icons",label:"Icons",isTitle:!1,icon:"cpu",children:[{key:"icon-unicons",label:"Unicons",url:"/icons/unicons",parentKey:"icons"},{key:"icon-feather",label:"Feather",url:"/icons/feather",parentKey:"icons"},{key:"icon-bootstrap",label:"Bootstrap",url:"/icons/bootstrap",parentKey:"icons"}]},{key:"forms",label:"Forms",isTitle:!1,icon:"bookmark",children:[{key:"form-basic",label:"Basic Elements",url:"/forms/basic",parentKey:"forms"},{key:"form-advanced",label:"Advanced",url:"/forms/advanced",parentKey:"forms"},{key:"form-validation",label:"Validation",url:"/forms/validation",parentKey:"forms"},{key:"form-wizard",label:"Wizard",url:"/forms/wizard",parentKey:"forms"},{key:"form-editors",label:"Editeurs",url:"/forms/editors",parentKey:"forms"},{key:"form-upload",label:"T\xe9l\xe9chargements de fichiers",url:"/forms/upload",parentKey:"forms"}]},{key:"charts",label:"Charts",isTitle:!1,icon:"bar-chart-2",url:"/components/charts"},{key:"tables",label:"Tables",isTitle:!1,icon:"grid",children:[{key:"table-basic",label:"Basic Tables",url:"/tables/basic",parentKey:"tables"},{key:"table-advanced",label:"Advanced Tables",url:"/tables/advanced",parentKey:"tables"}]},{key:"maps",label:"Carte",isTitle:!1,icon:"map",children:[{key:"maps-googlemaps",label:"Google Maps",url:"/maps/googlemaps",parentKey:"maps"},{key:"maps-vectormaps",label:"Vector Maps",url:"/maps/vectormaps",parentKey:"maps"}]},{key:"menu-levels",label:"Niveaux de menus",isTitle:!1,icon:"share-2",children:[{key:"menu-levels-1-1",label:"Level 1.1",url:"/",parentKey:"menu-levels",children:[{key:"menu-levels-2-1",label:"Level 2.1",url:"/",parentKey:"menu-levels-1-1",children:[{key:"menu-levels-3-1",label:"Level 3.1",url:"/",parentKey:"menu-levels-2-1"},{key:"menu-levels-3-2",label:"Level 3.2",url:"/",parentKey:"menu-levels-2-1"}]},{key:"menu-levels-2-2",label:"Level 2.2",url:"/",parentKey:"menu-levels-1-1"}]},{key:"menu-levels-1-2",label:"Level 1.2",url:"/",parentKey:"menu-levels"}]}],n=[{key:"dashboards",icon:"home",label:"Dashboards",isTitle:!0,children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"},{key:"ds-analytics",label:"Analytics",url:"/dashboard/analytics",parentKey:"dashboards"}]},{key:"apps",icon:"layers",label:"Apps",isTitle:!0,children:[{key:"apps-calendar",label:"Calendar",isTitle:!1,url:"/apps/calendar",parentKey:"apps"},{key:"apps-chat",label:"Chat",isTitle:!1,url:"/apps/chat",parentKey:"apps"},{key:"apps-email",label:"Email",isTitle:!1,parentKey:"apps",children:[{key:"email-inbox",label:"Inbox",url:"/apps/email/inbox",parentKey:"apps-email"},{key:"email-read-email",label:"Read Email",url:"/apps/email/details",parentKey:"apps-email"},{key:"email-compose-email",label:"Compose Email",url:"/apps/email/compose",parentKey:"apps-email"}]},{key:"apps-projects",label:"Projets",isTitle:!1,parentKey:"apps",children:[{key:"project-list",label:"List",url:"/apps/projects/list",parentKey:"apps-projects"},{key:"project-details",label:"Details",url:"/apps/projects/details",parentKey:"apps-projects"}]},{key:"apps-tasks",label:"Taches",isTitle:!1,parentKey:"apps",children:[{key:"task-list",label:"List",url:"/apps/tasks/list",parentKey:"apps-tasks"},{key:"task-kanban",label:"Kanban Board",url:"/apps/tasks/kanban",parentKey:"apps-tasks"}]},{key:"apps-file-manager",label:"Gestionnaire de fichiers",isTitle:!1,url:"/apps/file-manager",parentKey:"apps"}]},{key:"components",icon:"briefcase",label:"Composantes",isTitle:!0,children:[{key:"ui-elements",label:"UI Elements",isTitle:!1,url:"/components/ui-elements",parentKey:"components"},{key:"widgets",label:"Widgets",isTitle:!1,url:"/components/widgets",parentKey:"components"},{key:"forms",label:"questionnaires",isTitle:!1,parentKey:"components",children:[{key:"form-basic",label:"\xc9l\xe9ments basiques",url:"/forms/basic",parentKey:"forms"},{key:"form-advanced",label:"Avanc\xe9",url:"/forms/advanced",parentKey:"forms"},{key:"form-validation",label:"Validation",url:"/forms/validation",parentKey:"forms"},{key:"form-wizard",label:"Assistant",url:"/forms/wizard",parentKey:"forms"},{key:"form-editors",label:"Editeurs",url:"/forms/editors",parentKey:"forms"},{key:"form-upload",label:"T\xe9l\xe9chargements de fichiers",url:"/forms/upload",parentKey:"forms"}]},{key:"charts",label:"Charts",isTitle:!1,url:"/components/charts",parentKey:"components"},{key:"tables",label:"Tables",isTitle:!1,parentKey:"components",children:[{key:"table-basic",label:"Basic Tables",url:"/tables/basic",parentKey:"tables"},{key:"table-advanced",label:"Advanced Tables",url:"/tables/advanced",parentKey:"tables"}]},{key:"icons",label:"Icons",isTitle:!1,parentKey:"components",children:[{key:"icon-unicons",label:"Unicons",url:"/icons/unicons",parentKey:"icons"},{key:"icon-feather",label:"Feather",url:"/icons/feather",parentKey:"icons"},{key:"icon-bootstrap",label:"Bootstrap",url:"/icons/bootstrap",parentKey:"icons"}]},{key:"maps",label:"Maps",isTitle:!1,parentKey:"components",children:[{key:"maps-googlemaps",label:"Google Maps",url:"/maps/googlemaps",parentKey:"maps"},{key:"maps-vectormaps",label:"Vector Maps",url:"/maps/vectormaps",parentKey:"maps"}]}]},{key:"extra-pages",label:"Pages",isTitle:!1,icon:"file-text",children:[{key:"page-starter",label:"Starter",url:"/pages/starter",parentKey:"extra-pages"},{key:"page-profile",label:"Profile",url:"/pages/profile",parentKey:"extra-pages"},{key:"page-activity",label:"Activity",url:"/pages/activity",parentKey:"extra-pages"},{key:"page-invoice",label:"Invoice",url:"/pages/invoice",parentKey:"extra-pages"},{key:"page-pricing",label:"Pricing",url:"/pages/pricing",parentKey:"extra-pages"},{key:"page-maintenance",label:"Maintenance",url:"/maintenance",target:"_blank",parentKey:"extra-pages"},{key:"page-error-404",label:"Error - 404",url:"/error-404",parentKey:"extra-pages"},{key:"page-error-500",label:"Error - 500",url:"/error-500",parentKey:"extra-pages"}]}],r=[{key:"dashboards",label:"Dashboards",isTitle:!0,icon:"home",children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"},{key:"ds-analytics",label:"Analytics",url:"/dashboard/analytics",parentKey:"dashboards"}]},{key:"apps",icon:"grid",label:"Apps",isTitle:!0,children:[{key:"apps-calendar",label:"Calendar",isTitle:!1,icon:"calendar",url:"/apps/calendar",parentKey:"apps"},{key:"apps-chat",label:"Chat",isTitle:!1,icon:"message-square",url:"/apps/chat",parentKey:"apps"},{key:"apps-email",label:"Email",isTitle:!1,icon:"mail",parentKey:"apps",children:[{key:"email-inbox",label:"Inbox",url:"/apps/email/inbox",parentKey:"apps-email"},{key:"email-read-email",label:"Read Email",url:"/apps/email/details",parentKey:"apps-email"},{key:"email-compose-email",label:"Compose Email",url:"/apps/email/compose",parentKey:"apps-email"}]},{key:"apps-projects",label:"Projects",isTitle:!1,icon:"briefcase",parentKey:"apps",children:[{key:"project-list",label:"List",url:"/apps/projects/list",parentKey:"apps-projects"},{key:"project-details",label:"Details",url:"/apps/projects/details",parentKey:"apps-projects"}]},{key:"apps-tasks",label:"Tasks",isTitle:!1,icon:"clipboard",parentKey:"apps",children:[{key:"task-list",label:"List",url:"/apps/tasks/list",parentKey:"apps-tasks"},{key:"task-kanban",label:"Kanban Board",url:"/apps/tasks/kanban",parentKey:"apps-tasks"}]},{key:"apps-file-manager",label:"File Manager",isTitle:!1,icon:"file-plus",url:"/apps/file-manager",parentKey:"apps"}]},{key:"extra-pages",icon:"file-text",label:"Pages",isTitle:!0,children:[{key:"page-starter",label:"Starter",url:"/pages/starter",parentKey:"extra-pages"},{key:"page-profile",label:"Profile",url:"/pages/profile",parentKey:"extra-pages"},{key:"page-activity",label:"Activity",url:"/pages/activity",parentKey:"extra-pages"},{key:"page-invoice",label:"Invoice",url:"/pages/invoice",parentKey:"extra-pages"},{key:"page-pricing",label:"Pricing",url:"/pages/pricing",parentKey:"extra-pages"},{key:"page-maintenance",label:"Maintenance",url:"/maintenance",target:"_blank",parentKey:"extra-pages"},{key:"page-error-404",label:"Error - 404",url:"/error-404",parentKey:"extra-pages"},{key:"page-error-500",label:"Error - 500",url:"/error-500",parentKey:"extra-pages"}]},{key:"components",icon:"package",label:"Components",isTitle:!0,children:[{key:"base-ui",label:"UI Elements",isTitle:!1,icon:"package",url:"/components/ui-elements",parentKey:"components"},{key:"icons",label:"Icons",isTitle:!1,icon:"cpu",parentKey:"components",children:[{key:"icon-unicons",label:"Unicons",url:"/icons/unicons",parentKey:"icons"},{key:"icon-feather",label:"Feather",url:"/icons/feather",parentKey:"icons"},{key:"icon-bootstrap",label:"Bootstrap",url:"/icons/bootstrap",parentKey:"icons"}]},{key:"charts",label:"Charts",isTitle:!1,icon:"bar-chart-2",url:"/components/charts",parentKey:"components"},{key:"forms",label:"Forms",isTitle:!1,icon:"bookmark",parentKey:"components",children:[{key:"form-basic",label:"Basic Elements",url:"/forms/basic",parentKey:"forms"},{key:"form-advanced",label:"Advanced",url:"/forms/advanced",parentKey:"forms"},{key:"form-validation",label:"Validation",url:"/forms/validation",parentKey:"forms"},{key:"form-wizard",label:"Wizard",url:"/forms/wizard",parentKey:"forms"},{key:"form-editors",label:"Editors",url:"/forms/editors",parentKey:"forms"},{key:"form-upload",label:"File Uploads",url:"/forms/upload",parentKey:"forms"}]},{key:"tables",label:"Tables",isTitle:!1,icon:"grid",parentKey:"components",children:[{key:"table-basic",label:"Basic Tables",url:"/tables/basic",parentKey:"tables"},{key:"table-advanced",label:"Advanced Tables",url:"/tables/advanced",parentKey:"tables"}]},{key:"maps",label:"Maps",isTitle:!1,icon:"map",parentKey:"components",children:[{key:"maps-googlemaps",label:"Google Maps",url:"/maps/googlemaps",parentKey:"maps"},{key:"maps-vectormaps",label:"Vector Maps",url:"/maps/vectormaps",parentKey:"maps"}]},{key:"menu-levels",label:"Menu Levels",isTitle:!1,icon:"share-2",parentKey:"components",children:[{key:"menu-levels-1-1",label:"Level 1.1",url:"/",parentKey:"menu-levels",children:[{key:"menu-levels-2-1",label:"Level 2.1",url:"/",parentKey:"menu-levels-1-1",children:[{key:"menu-levels-3-1",label:"Level 3.1",url:"/",parentKey:"menu-levels-2-1"},{key:"menu-levels-3-2",label:"Level 3.2",url:"/",parentKey:"menu-levels-2-1"}]},{key:"menu-levels-2-2",label:"Level 2.2",url:"/",parentKey:"menu-levels-1-1"}]},{key:"menu-levels-1-2",label:"Level 1.2",url:"/",parentKey:"menu-levels"}]}]},{key:"widgets",label:"Widgets",isTitle:!1,icon:"gift",url:"/components/widgets"}],i=function(){return s},c=function(){return n},p=function(){return r},o=function e(a,l){var s=[],n=b(a,l.parentKey);return n&&(s.push(n.key),n.parentKey&&(s=[].concat(Object(t.a)(s),Object(t.a)(e(a,n))))),s},b=function e(a,l){if(a&&l)for(var t=0;t<a.length;t++){if(a[t].key===l)return a[t];var s=e(a[t].children,l);if(s)return s}return null}},973:function(e,a,l){"use strict";l.r(a);var t=l(31),s=l(23),n=l(0),r=l.n(n),i=l(12),c=l(15),p=l(26),o=l(14),b=l(542),m=l(30),u=l(165),y=l.n(u),d=l(48),k=l.n(d),g=l(185),h=l(1),v=function(e){var a=e.menuItems,l=e.toggleMenu,t=e.activeMenuItems;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"sidebar-icon-menu h-100",children:Object(h.jsxs)(g.a,{style:{maxHeight:"100%"},timeout:500,scrollbarMaxSize:320,children:[Object(h.jsx)(m.b,{to:"/",className:"logo",children:Object(h.jsx)("span",{children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAwCAYAAAB0WahSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNjAzNUUyQTA4QTExRUFCRTVFRUU3NTQzNjhFQTdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdFNjAzNUUzQTA4QTExRUFCRTVFRUU3NTQzNjhFQTdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0U2MDM1RTBBMDhBMTFFQUJFNUVFRTc1NDM2OEVBN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0U2MDM1RTFBMDhBMTFFQUJFNUVFRTc1NDM2OEVBN0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TJne4AAADY0lEQVR42ryZy29MURzHZ9pq9UU82plppxppLCnVekTiD8COFbElEhv/gy68tdFUF7UQKdJW9YmykChVVc+IhYVXFQkRgkTQ6/tLzk1ujt/vnnPPzPSXfDZzzz33c+95/ybueV7MMdJgP9gMfoER0AG+OdVGIg40gJfe/3ELJF3qdJV468lxFyRyLbLWIBGUSeZKpBFMMw9tBb3M7xMglW0RSaJFXS8Bw8z1e7YyNhJN4B3zkJNauVIwxJSbtJExSawTJE4I5UlmUJCpchUhiZkIEiaZ+6A6qsh6QeK4ZZ+iPjPA3D8lyUgS75lKjkUc6iTTbyuj37wBfGBuPuo4A5PMZaa+ByAtiWzMskQkGdOXOJKhhE8x6GPqfwhqfJE6Ydo+bKh8ETgAusAZsB3MM8hcYp4zTiONCnQwFw8ZJNJqbtCjRz0wTIZbDvbRxUfajwcNEjXMPcEYNMjkMzLn87Al+a1tUWpBQchmaAjUh2xxtoFuUCxcXwxS2m9/yLCZeatuUKi9yTLw2LOPYebLpNQ8oscOurhE9V6uvQsdJfwYUcM3ptYaToKaKS/Y+Z4whS6AFYY+YYp+VceE0J9K9Qktzbz1X/DFyyxmwXdBokSa4qsdmyBqDAQlpEVvaY5l+riJL48ZXoWx3AbVn2861ywHz+agaUZBmdQ0JPGc6ayfs9BZv5pkfIk6RoLirJrSJzMQuQhq1eKmx3VQ7otUgqdMoa7AhJYUJiNT0Go7X9VRqY4XetDOvyCmVlpOQu/ZSbUBto3egIRPhSCzM6Z2SsHopClXWDkTljK0PBSF7GPG9C7ADd9PYFYYeh/BFjAVMjx7wC6VquDih3pGMIrI8JTDsSHBvBXFOaY5gpQJx4w9/rB943iQ2g1Og3awNaRJY2p0cAevmyQfPGTPWJxvXSkPORdX6RNakyDTkgUJKVNQJS16jcKhuzUDiRGbdIWUFZrOgswCW4mwQ3iDIEMjLG4pcSVKFsmUtONk2gwyJHFVyKulXBM1UgaxTSi/UJAYN2Uabdp6jTDP6F+GJK4x5e7YpDttO95qQaY90ByjLl/CJb0pyXQI0/btKInfqPNCPXhtsfqOqf1HTlPgq8Arg0TFXOTiiZXgBSNxw0WCiGfwN0kS7AWb1N5jFHSCny6V/RNgAMM7rguv/isAAAAAAElFTkSuQmCC",alt:"",height:"28"})})}),Object(h.jsx)("nav",{className:"nav flex-column",id:"two-col-sidenav-main",children:(a||[]).map((function(e,a){var s=t&&t.length&&t[t.length-1]===e.key;return Object(h.jsx)(m.b,{className:k()("nav-link","nav-link-ref",{active:s}),to:e.children?"/#":e.url,title:e.label,"data-menu-key":e.key,onClick:function(a){!function(e,a){a.children&&a.children.length&&e.preventDefault(),l(a,!0)}(a,e)},children:Object(h.jsx)(y.a,{icon:e.icon})},a)}))})]})})})},f=l(543),j=function e(a){var l=a.item,t=a.linkClassName,i=a.subMenuClassNames,c=a.activeMenuItems,p=a.toggleMenu,o=Object(n.useState)(c.includes(l.key)),b=Object(s.a)(o,2),u=b[0],y=b[1];Object(n.useEffect)((function(){y(c.includes(l.key))}),[c,l]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("li",{className:k()("nav-item",{"menuitem-active":u}),children:[Object(h.jsxs)(m.b,{to:"#",onClick:function(e){e.preventDefault();var a=!u;return y(a),p&&p(l,a),!1},"data-menu-key":l.key,"aria-expanded":u,className:k()(t,{"menuitem-active":c.includes(l.key)?"active":""}),children:[l.badge?Object(h.jsx)("span",{className:"badge bg-".concat(l.badge.variant," rounded-pill float-end"),children:l.badge.text}):Object(h.jsx)("span",{className:"menu-arrow"}),Object(h.jsxs)("span",{children:[" ",l.label," "]})]}),Object(h.jsx)(f.a,{in:u,children:Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:k()(i),children:(l.children||[]).map((function(a,l){return Object(h.jsx)(r.a.Fragment,{children:a.children?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(e,{item:a,linkClassName:c.includes(a.key)?"active":"",activeMenuItems:c,subMenuClassNames:"nav-second-level",toggleMenu:p})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(K,{item:a,className:c.includes(a.key)?"menuitem-active":"",linkClassName:c.includes(a.key)?"active":""})})},l)}))})})})]})})},K=function(e){var a=e.item,l=e.className,t=e.linkClassName;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("li",{className:k()("nav-item",l),children:Object(h.jsx)(x,{item:a,className:t})})})},x=function(e){var a=e.item,l=e.className;return Object(h.jsxs)(m.b,{to:a.url,target:a.target,className:k()("nav-link-ref",l),"data-menu-key":a.key,children:[a.badge&&Object(h.jsx)("span",{className:"badge bg-".concat(a.badge.variant," float-end"),children:a.badge.text}),Object(h.jsxs)("span",{children:[" ",a.label," "]})]})},T=function(e){var a=e.menuItems,l=e.toggleMenu,t=e.activeMenuItems;return Object(h.jsx)(h.Fragment,{children:t&&Object(h.jsx)("div",{className:"sidebar-main-menu",children:Object(h.jsx)("div",{id:"two-col-menu",className:"h-100",children:Object(h.jsx)(g.a,{style:{maxHeight:"100%"},children:(a||[]).map((function(e,a){var s=t&&t.length&&t[t.length-1]===e.key;return Object(h.jsx)("div",{className:k()("twocolumn-menu-item",{"d-block":s}),children:Object(h.jsxs)("div",{className:"title-box",children:[e.isTitle&&Object(h.jsx)("h5",{className:"menu-title",children:e.label}),Object(h.jsx)("ul",{className:"nav flex-column",children:(e.children||[]).map((function(e,a){return Object(h.jsx)(r.a.Fragment,{children:e.children?Object(h.jsx)(j,{item:e,toggleMenu:l,subMenuClassNames:"nav-second-level",activeMenuItems:t,linkClassName:"nav-link"}):Object(h.jsx)(K,{item:e,linkClassName:"nav-link",className:t.includes(e.key)?"menuitem-active":""})},a)}))})]})},a)}))})})})})};a.default=function(){var e=Object(i.g)(),a=Object(c.c)(),l=Object(b.e)(),r=Object(n.useState)([]),m=Object(s.a)(r,2),u=m[0],y=m[1],d=Object(c.d)((function(e){return{leftSideBarType:e.Layout.leftSideBarType}})).leftSideBarType,k=function(e,s){e.children&&"condensed"===d&&a(Object(p.e)(o.e.LEFT_SIDEBAR_TYPE_DEFAULT)),s&&y([e.key].concat(Object(t.a)(Object(b.a)(l,e))))},g=Object(n.useCallback)((function(){var a=document.getElementById("sidebar-content"),s=null;if(a){for(var n=a.getElementsByClassName("nav-link-ref"),r=0;r<n.length;++r)if(e.pathname===n[r].pathname){s=n[r];break}if(s){var i=s.getAttribute("data-menu-key"),c=Object(b.b)(l,i);c&&y([c.key].concat(Object(t.a)(Object(b.a)(l,c))))}}}),[e,l]);return Object(n.useEffect)((function(){g()}),[g]),Object(n.useEffect)((function(){if(u&&u.length&&1===u.length){var e=Object(b.b)(l,u[0]),t=e&&e.children&&e.children.length;a(t||"default"!==d&&"compact"!==d?Object(p.e)(d):Object(p.e)(o.e.LEFT_SIDEBAR_TYPE_CONDENSED))}}),[u,d,a,l]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"left-side-menu",children:Object(h.jsxs)("div",{className:"h-100",children:[Object(h.jsxs)("div",{className:"sidebar-content",id:"sidebar-content",children:[Object(h.jsx)(v,{menuItems:Object(b.e)(),toggleMenu:k,activeMenuItems:u}),Object(h.jsx)(T,{menuItems:l,activeMenuItems:u,toggleMenu:k})]}),Object(h.jsx)("div",{className:"clearfix"})]})})})}}}]);
//# sourceMappingURL=56.a1f126d7.chunk.js.map