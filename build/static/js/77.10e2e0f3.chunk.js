(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[77],{135:function(e,a,n){"use strict";n(0);var o=n(168),i=n(155),c=n(169),t=n(1);a.a=function(e){return Object(t.jsx)(o.a,{children:Object(t.jsx)(i.a,{children:Object(t.jsxs)("div",{className:"page-title-box",children:[Object(t.jsx)("h4",{className:"page-title",children:e.title}),Object(t.jsx)("div",{className:"page-title-right",children:Object(t.jsxs)(c.a,{listProps:{className:"m-0"},children:[Object(t.jsx)(c.a.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,a){return e.active?Object(t.jsx)(c.a.Item,{active:!0,children:e.label},a):Object(t.jsx)(c.a.Item,{href:e.path,children:e.label},a)}))]})})]})})})}},976:function(e,a,n){"use strict";n.r(a);var o=n(0),i=n.n(o),c=n(168),t=n(155),s=n(162),m=n(135),r=n(31),l=n(3),p=n(35),d=n(23),g=n(911),h=n(48),u=n.n(h),b=n(30),j=n(1),y=function(e){var a=e.tableProps,n=e.sizePerPageList,c=Object(o.useState)(a.pageCount),t=Object(d.a)(c,2),s=t[0],m=t[1],r=Object(o.useState)(a.state.pageIndex),l=Object(d.a)(r,2),p=l[0],g=l[1];Object(o.useEffect)((function(){m(a.pageCount),g(a.state.pageIndex)}),[a.pageCount,a.state.pageIndex]);var h=Object(o.useCallback)((function(e,a){return e.filter((function(e){return e<=s}))}),[s]),y=Object(o.useCallback)((function(e,a){return a<7?h([1,2,3,4,5,6],a):e%5>=0&&e>4&&e+2<a?[1,e-1,e,e+1,a]:e%5>=0&&e>4&&e+2>=a?[1,a-3,a-2,a-1,a]:[1,2,3,4,5,a]}),[h]),x=function(e){if(e!==p+1){var n=y(e,s);v(h(n,s)),a.gotoPage(e-1)}};Object(o.useEffect)((function(){var e=y(null,s);v(e)}),[s,y]);var O=Object(o.useState)(y(null,s)),f=Object(d.a)(O,2),w=f[0],v=f[1],B=p+1;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&Object(j.jsxs)("div",{className:"d-inline-block me-3",children:[Object(j.jsx)("label",{className:"me-1",children:"Display :"}),Object(j.jsx)("select",{value:a.state.pageSize,onChange:function(e){a.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map((function(e,a){return Object(j.jsx)("option",{value:e.value,children:e.text},a)}))})]}),Object(j.jsxs)("span",{className:"me-3",children:["Page"," ",Object(j.jsxs)("strong",{children:[p+1," of ",a.pageOptions.length]})," "]}),Object(j.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[Object(j.jsx)("label",{children:"Go to page : "}),Object(j.jsx)("input",{type:"number",value:p+1,min:"1",onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;a.gotoPage(n),g(a.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),Object(j.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto",children:[Object(j.jsx)("li",{className:u()("page-item","paginate_button","previous",{disabled:1===B}),onClick:function(){1!==B&&x(B-1)},children:Object(j.jsx)(b.b,{to:"#",className:"page-link",children:Object(j.jsx)("i",{className:"uil uil-angle-left"})})},"prevpage"),(w||[]).map((function(e,a,n){return n[a-1]+1<e?Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:Object(j.jsx)(b.b,{to:"#",className:"page-link",children:"..."})}),Object(j.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:B===e}),onClick:function(a){return x(e)},children:Object(j.jsx)(b.b,{to:"#",className:"page-link",children:e})})]},e):Object(j.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:B===e}),onClick:function(a){return x(e)},children:Object(j.jsx)(b.b,{to:"#",className:"page-link",children:e})},e)})),Object(j.jsx)("li",{className:u()("page-item","paginate_button","next",{disabled:B===a.pageCount}),onClick:function(){B!==a.pageCount&&x(B+1)},children:Object(j.jsx)(b.b,{to:"#",className:"page-link",children:Object(j.jsx)("i",{className:"uil uil-angle-right"})})},"nextpage")]})]})})},x=function(e){var a=e.preGlobalFilteredRows,n=e.globalFilter,i=e.setGlobalFilter,c=e.searchBoxClass,t=a.length,s=Object(o.useState)(n),m=Object(d.a)(s,2),r=m[0],l=m[1],p=Object(g.useAsyncDebounce)((function(e){i(e||void 0)}),200);return Object(j.jsx)("div",{className:u()(c),children:Object(j.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",Object(j.jsx)("input",{type:"search",value:r||"",onChange:function(e){l(e.target.value),p(e.target.value)},placeholder:"".concat(t," records..."),className:"form-control w-auto ms-1"})]})})},O=Object(o.forwardRef)((function(e,a){var n=e.indeterminate,i=Object(p.a)(e,["indeterminate"]),c=Object(o.useRef)(),t=a||c;return Object(o.useEffect)((function(){t.current.indeterminate=n}),[t,n]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("input",Object(l.a)({type:"checkbox",className:"form-check-input",ref:t},i)),Object(j.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),f=function(e){var a=e.isSearchable||!1,n=e.isSortable||!1,o=e.pagination||!1,i=e.isSelectable||!1,c=e.isExpandable||!1,t=e.sizePerPageList||[],s={};a&&(s.useGlobalFilter=g.useGlobalFilter),n&&(s.useSortBy=g.useSortBy),c&&(s.useExpanded=g.useExpanded),o&&(s.usePagination=g.usePagination),i&&(s.useRowSelect=g.useRowSelect);var m=Object(g.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},s.hasOwnProperty("useGlobalFilter")&&s.useGlobalFilter,s.hasOwnProperty("useSortBy")&&s.useSortBy,s.hasOwnProperty("useExpanded")&&s.useExpanded,s.hasOwnProperty("usePagination")&&s.usePagination,s.hasOwnProperty("useRowSelect")&&s.useRowSelect,(function(e){i&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var a=e.getToggleAllPageRowsSelectedProps;return Object(j.jsx)("div",{children:Object(j.jsx)(O,Object(l.a)({},a()))})},Cell:function(e){var a=e.row;return Object(j.jsx)("div",{children:Object(j.jsx)(O,Object(l.a)({},a.getToggleRowSelectedProps()))})}}].concat(Object(r.a)(e))})),c&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var a=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return Object(j.jsx)("span",Object(l.a)(Object(l.a)({},a()),{},{children:n?"-":"+"}))},Cell:function(e){var a=e.row;return a.canExpand?Object(j.jsx)("span",Object(l.a)(Object(l.a)({},a.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*a.depth,"rem")}})),{},{children:a.isExpanded?"-":"+"})):null}}].concat(Object(r.a)(e))}))})),p=o?m.page:m.rows;return Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsx)(x,{preGlobalFilteredRows:m.preGlobalFilteredRows,globalFilter:m.state.globalFilter,setGlobalFilter:m.setGlobalFilter,searchBoxClass:e.searchBoxClass}),Object(j.jsx)("div",{className:"table-responsive",children:Object(j.jsxs)("table",Object(l.a)(Object(l.a)({},m.getTableProps()),{},{className:u()("table table-centered react-table",e.tableClass),children:[Object(j.jsx)("thead",{className:e.theadClass,children:(m.headerGroups||[]).map((function(e){return Object(j.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:(e.headers||[]).map((function(e){return Object(j.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:u()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),Object(j.jsx)("tbody",Object(l.a)(Object(l.a)({},m.getTableBodyProps()),{},{children:(p||[]).map((function(e,a){return m.prepareRow(e),Object(j.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:(e.cells||[]).map((function(e){return Object(j.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}))}))}))}))}))]}))}),o&&Object(j.jsx)(y,{tableProps:m,sizePerPageList:t})]})},w=[{id:1,age:32,name:"Burt",company:"Kaggle",phone:"+1 (823) 532-2427"},{id:2,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"},{id:3,age:31,name:"Alvarado",company:"Translink",phone:"+1 (975) 468-3875"},{id:4,age:24,name:"Lilia",company:"Digitalus",phone:"+1 (891) 537-3461"},{id:5,age:25,name:"Amanda",company:"Bunga",phone:"+1 (916) 522-3747"},{id:6,age:20,name:"Alexandra",company:"Conjurica",phone:"+1 (876) 492-3181"},{id:7,age:27,name:"Diana",company:"Extragen",phone:"+1 (977) 417-3038"},{id:8,age:26,name:"Goodman",company:"Aquamate",phone:"+1 (930) 545-2289"},{id:9,age:26,name:"Edith",company:"Pyrami",phone:"+1 (854) 506-3468"},{id:10,age:29,name:"Juana",company:"Singavera",phone:"+1 (872) 560-2324"},{id:11,age:21,name:"Fitzgerald",company:"Dancerity",phone:"+1 (813) 573-2507"},{id:12,age:38,name:"Madden",company:"Corpulse",phone:"+1 (935) 534-3876"},{id:13,age:40,name:"Jewell",company:"Frenex",phone:"+1 (886) 516-3262"},{id:14,age:32,name:"Kerr",company:"Artiq",phone:"+1 (807) 561-3077"},{id:15,age:20,name:"Washington",company:"Organica",phone:"+1 (948) 458-3517"},{id:16,age:20,name:"Audrey",company:"Softmicro",phone:"+1 (900) 592-3841"},{id:17,age:39,name:"Allison",company:"Playce",phone:"+1 (998) 478-3810"},{id:18,age:25,name:"Holder",company:"Paragonia",phone:"+1 (850) 536-2708"},{id:19,age:26,name:"Atkinson",company:"Scentric",phone:"+1 (850) 467-2761"},{id:20,age:35,name:"Delaney",company:"Telpod",phone:"+1 (934) 468-2218"},{id:21,age:20,name:"Myrna",company:"Zanity",phone:"+1 (953) 565-3836"},{id:22,age:30,name:"Erna",company:"Techade",phone:"+1 (872) 574-3879"},{id:23,age:36,name:"Fannie",company:"Cubix",phone:"+1 (843) 576-2904"},{id:24,age:38,name:"Melody",company:"Talae",phone:"+1 (817) 424-3500"},{id:25,age:27,name:"Letitia",company:"Enjola",phone:"+1 (857) 441-2917"},{id:26,age:33,name:"Nina",company:"Eventex",phone:"+1 (917) 599-2793"},{id:27,age:40,name:"Byrd",company:"Obones",phone:"+1 (846) 422-2064"},{id:28,age:34,name:"Chen",company:"Dadabase",phone:"+1 (956) 474-3409"},{id:29,age:25,name:"Alexandria",company:"Turnabout",phone:"+1 (964) 415-2278"},{id:30,age:37,name:"Page",company:"Metroz",phone:"+1 (897) 541-2460"},{id:31,age:24,name:"Clare",company:"Zilch",phone:"+1 (832) 591-3814"},{id:32,age:38,name:"Lindsey",company:"Roughies",phone:"+1 (942) 579-2920"},{id:33,age:32,name:"Oconnor",company:"Kinetica",phone:"+1 (899) 599-3206"},{id:34,age:35,name:"Maldonado",company:"Zentime",phone:"+1 (955) 419-2815"},{id:35,age:25,name:"Day",company:"Eargo",phone:"+1 (895) 555-2916"},{id:36,age:20,name:"Collier",company:"Phuel",phone:"+1 (998) 468-2079"},{id:37,age:40,name:"Jeannette",company:"Entogrok",phone:"+1 (904) 567-2078"},{id:38,age:33,name:"Wallace",company:"Nurali",phone:"+1 (877) 566-3957"},{id:39,age:39,name:"Mcfadden",company:"Cincyr",phone:"+1 (949) 405-3992"},{id:40,age:21,name:"Chrystal",company:"Futurize",phone:"+1 (988) 458-3032"},{id:41,age:31,name:"Leila",company:"Zensure",phone:"+1 (902) 447-2419"},{id:42,age:24,name:"Madelyn",company:"Egypto",phone:"+1 (881) 538-3081"},{id:43,age:39,name:"Peck",company:"Tellifly",phone:"+1 (803) 452-3922"},{id:44,age:32,name:"Garrett",company:"Aquasure",phone:"+1 (876) 475-2185"},{id:45,age:21,name:"Kramer",company:"Terrago",phone:"+1 (912) 404-2597"},{id:46,age:35,name:"Lane",company:"Anivet",phone:"+1 (911) 495-3587"},{id:47,age:21,name:"Merritt",company:"Inear",phone:"+1 (856) 519-3838"},{id:48,age:25,name:"Margarita",company:"Unq",phone:"+1 (931) 558-3156"},{id:49,age:28,name:"Leigh",company:"Marqet",phone:"+1 (918) 526-2007"},{id:50,age:31,name:"Coleman",company:"Insuresys",phone:"+1 (827) 449-3786"},{id:51,age:31,name:"Alexander",company:"Portico",phone:"+1 (854) 576-2455"},{id:52,age:38,name:"Tanisha",company:"Earthwax",phone:"+1 (994) 494-3496"},{id:53,age:23,name:"Crane",company:"Pushcart",phone:"+1 (924) 497-3347"},{id:54,age:26,name:"Carmella",company:"Acusage",phone:"+1 (898) 575-2585"},{id:55,age:27,name:"Rosalind",company:"Isologica",phone:"+1 (838) 572-2994"},{id:56,age:37,name:"Duran",company:"Gazak",phone:"+1 (991) 446-3820"},{id:57,age:27,name:"Bernard",company:"Zoinage",phone:"+1 (824) 585-2197"},{id:58,age:29,name:"Tate",company:"Endipine",phone:"+1 (896) 448-2084"},{id:59,age:39,name:"Pearlie",company:"Progenex",phone:"+1 (805) 545-2585"},{id:60,age:20,name:"Manning",company:"Handshake",phone:"+1 (917) 405-3406"}],v=[{id:1,age:32,name:"Burt",company:"Kaggle",phone:"+1 (823) 532-2427",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:2,age:23,name:"Long",company:"Magmina",phone:"+1 (813) 583-2089",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:3,age:31,name:"Alvarado",company:"Translink",phone:"+1 (975) 468-3875",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:4,age:24,name:"Lilia",company:"Digitalus",phone:"+1 (891) 537-3461",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:5,age:25,name:"Amanda",company:"Bunga",phone:"+1 (916) 522-3747",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:6,age:20,name:"Alexandra",company:"Conjurica",phone:"+1 (876) 492-3181",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:7,age:27,name:"Diana",company:"Extragen",phone:"+1 (977) 417-3038",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:8,age:26,name:"Goodman",company:"Aquamate",phone:"+1 (930) 545-2289",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:9,age:26,name:"Edith",company:"Pyrami",phone:"+1 (854) 506-3468",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:10,age:29,name:"Juana",company:"Singavera",phone:"+1 (872) 560-2324",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:11,age:21,name:"Fitzgerald",company:"Dancerity",phone:"+1 (813) 573-2507",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:12,age:38,name:"Madden",company:"Corpulse",phone:"+1 (935) 534-3876",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:13,age:40,name:"Jewell",company:"Frenex",phone:"+1 (886) 516-3262",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:14,age:32,name:"Kerr",company:"Artiq",phone:"+1 (807) 561-3077",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:15,age:20,name:"Washington",company:"Organica",phone:"+1 (948) 458-3517",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:16,age:20,name:"Audrey",company:"Softmicro",phone:"+1 (900) 592-3841",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:17,age:39,name:"Allison",company:"Playce",phone:"+1 (998) 478-3810",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:18,age:25,name:"Holder",company:"Paragonia",phone:"+1 (850) 536-2708",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:19,age:26,name:"Atkinson",company:"Scentric",phone:"+1 (850) 467-2761",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:20,age:35,name:"Delaney",company:"Telpod",phone:"+1 (934) 468-2218",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:21,age:20,name:"Myrna",company:"Zanity",phone:"+1 (953) 565-3836",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:22,age:30,name:"Erna",company:"Techade",phone:"+1 (872) 574-3879",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:23,age:36,name:"Fannie",company:"Cubix",phone:"+1 (843) 576-2904",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:24,age:38,name:"Melody",company:"Talae",phone:"+1 (817) 424-3500",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:25,age:27,name:"Letitia",company:"Enjola",phone:"+1 (857) 441-2917",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:26,age:33,name:"Nina",company:"Eventex",phone:"+1 (917) 599-2793",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:27,age:40,name:"Byrd",company:"Obones",phone:"+1 (846) 422-2064",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:28,age:34,name:"Chen",company:"Dadabase",phone:"+1 (956) 474-3409",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:29,age:25,name:"Alexandria",company:"Turnabout",phone:"+1 (964) 415-2278",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:30,age:37,name:"Page",company:"Metroz",phone:"+1 (897) 541-2460",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:31,age:24,name:"Clare",company:"Zilch",phone:"+1 (832) 591-3814",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:32,age:38,name:"Lindsey",company:"Roughies",phone:"+1 (942) 579-2920",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:33,age:32,name:"Oconnor",company:"Kinetica",phone:"+1 (899) 599-3206",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:34,age:35,name:"Maldonado",company:"Zentime",phone:"+1 (955) 419-2815",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:35,age:25,name:"Day",company:"Eargo",phone:"+1 (895) 555-2916",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:36,age:20,name:"Collier",company:"Phuel",phone:"+1 (998) 468-2079",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:37,age:40,name:"Jeannette",company:"Entogrok",phone:"+1 (904) 567-2078",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:38,age:33,name:"Wallace",company:"Nurali",phone:"+1 (877) 566-3957",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:39,age:39,name:"Mcfadden",company:"Cincyr",phone:"+1 (949) 405-3992",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:40,age:21,name:"Chrystal",company:"Futurize",phone:"+1 (988) 458-3032",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]}],B=[{Header:"ID",accessor:"id",sort:!0},{Header:"Name",accessor:"name",sort:!0},{Header:"Phone Number",accessor:"phone",sort:!1},{Header:"Age",accessor:"age",sort:!0},{Header:"Company",accessor:"company",sort:!1}],R=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:w.length}];a.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.a,{breadCrumbItems:[{label:"Tables",path:"/features/tables/advanced"},{label:"Advanced Tables",path:"/features/tables/advanced",active:!0}],title:"Advanced Tables"}),Object(j.jsx)(c.a,{children:Object(j.jsx)(t.a,{children:Object(j.jsx)(s.a,{children:Object(j.jsxs)(s.a.Body,{children:[Object(j.jsx)("h4",{className:"header-title",children:"Pagination & Sort"}),Object(j.jsx)("p",{className:"text-muted fs-14 mb-4",children:"A simple example of table with pagination and column sorting"}),Object(j.jsx)(f,{columns:B,data:w,pageSize:5,sizePerPageList:R,isSortable:!0,pagination:!0})]})})})}),Object(j.jsx)(c.a,{children:Object(j.jsx)(t.a,{children:Object(j.jsx)(s.a,{children:Object(j.jsxs)(s.a.Body,{children:[Object(j.jsx)("h4",{className:"header-title",children:"Search"}),Object(j.jsx)("p",{className:"text-muted fs-14 mb-4",children:"A Table allowing search"}),Object(j.jsx)(f,{columns:B,data:w,pageSize:5,sizePerPageList:R,isSortable:!0,pagination:!0,isSearchable:!0})]})})})}),Object(j.jsx)(c.a,{children:Object(j.jsx)(t.a,{children:Object(j.jsx)(s.a,{children:Object(j.jsxs)(s.a.Body,{children:[Object(j.jsx)("h4",{className:"header-title",children:"Multiple Row Selection"}),Object(j.jsx)("p",{className:"text-muted fs-14 mb-4",children:"This table allowing selection of multiple rows"}),Object(j.jsx)(f,{columns:B,data:w,pageSize:5,sizePerPageList:R,isSortable:!0,pagination:!0,isSelectable:!0})]})})})}),Object(j.jsx)(c.a,{children:Object(j.jsx)(t.a,{children:Object(j.jsx)(s.a,{children:Object(j.jsxs)(s.a.Body,{children:[Object(j.jsx)("h4",{className:"header-title",children:"Expand Row"}),Object(j.jsx)("p",{className:"text-muted fs-14 mb-4",children:"Expand row to see more additional details"}),Object(j.jsx)(f,{columns:B,data:v,pageSize:5,sizePerPageList:R,isSortable:!0,pagination:!0,isExpandable:!0})]})})})})]})}}}]);
//# sourceMappingURL=77.10e2e0f3.chunk.js.map