(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[2],{138:function(e,t,n){"use strict";var r=function(){};e.exports=r},204:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function o(e){var t,n,o,i,a=e.enabled,f=e.enableEvents,s=e.placement,c=e.flip,u=e.offset,p=e.fixed,l=e.containerPadding,d=e.arrowElement,v=e.popperConfig,m=void 0===v?{}:v,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(m.modifiers);return Object.assign({},m,{placement:s,enabled:a,strategy:p?"fixed":m.strategy,modifiers:r(Object.assign({},h,{eventListeners:{enabled:f},preventOverflow:Object.assign({},h.preventOverflow,{options:l?Object.assign({padding:l},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:Object.assign({offset:u},null==(o=h.offset)?void 0:o.options)},arrow:Object.assign({},h.arrow,{enabled:!!d,options:Object.assign({},null==(i=h.arrow)?void 0:i.options,{element:d})}),flip:Object.assign({enabled:!!c},h.flip)}))})}n.d(t,"a",(function(){return o}))},205:function(e,t,n){"use strict";var r=n(235),o=n(284),i=n(167),a=n(0),f=n(113),s=n(138),c=n.n(s),u=function(){};function p(e){return 0===e.button}function l(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var d=function(e){return e&&("current"in e?e.current:e)};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.disabled,v=n.clickTrigger,m=void 0===v?"click":v,h=Object(a.useRef)(!1),b=t||u,g=Object(a.useCallback)((function(t){var n=d(e);c()(!!n,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),h.current=!n||l(t)||!p(t)||!!Object(r.a)(n,t.target)}),[e]),y=Object(f.a)((function(e){h.current||b(e)})),O=Object(f.a)((function(e){27===e.keyCode&&b(e)}));Object(a.useEffect)((function(){if(!s&&null!=e){var t=window.event,n=Object(i.a)(d(e)),r=Object(o.a)(n,m,g,!0),a=Object(o.a)(n,m,(function(e){e!==t?y(e):t=void 0})),f=Object(o.a)(n,"keyup",(function(e){e!==t?O(e):t=void 0})),c=[];return"ontouchstart"in n.documentElement&&(c=[].slice.call(n.body.children).map((function(e){return Object(o.a)(e,"mousemove",u)}))),function(){r(),a(),f(),c.forEach((function(e){return e()}))}}}),[e,s,m,g,y,O])}},208:function(e,t,n){"use strict";var r=n(31),o=n(23),i=n(0),a=n(52),f=Object.prototype.hasOwnProperty;function s(e,t,n){var r,o=Object(a.a)(e.keys());try{for(o.s();!(r=o.n()).done;)if(c(n=r.value,t))return n}catch(i){o.e(i)}finally{o.f()}}function c(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&c(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;var i,u=Object(a.a)(e);try{for(u.s();!(i=u.n()).done;){if((o=r=i.value)&&"object"===typeof o&&!(o=s(t,o)))return!1;if(!t.has(o))return!1}}catch(d){u.e(d)}finally{u.f()}return!0}if(n===Map){if(e.size!==t.size)return!1;var p,l=Object(a.a)(e);try{for(l.s();!(p=l.n()).done;){if((o=(r=p.value)[0])&&"object"===typeof o&&!(o=s(t,o)))return!1;if(!c(r[1],t.get(o)))return!1}}catch(d){l.e(d)}finally{l.f()}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(f.call(e,n)&&++r&&!f.call(t,n))return!1;if(!(n in t)||!c(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var u=n(122);var p=function(e){var t=Object(u.a)();return[e[0],Object(i.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function l(e){return e.split("-")[0]}function d(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof d(e).Element||e instanceof Element}function m(e){return e instanceof d(e).HTMLElement||e instanceof HTMLElement}function h(e){return"undefined"!==typeof ShadowRoot&&(e instanceof d(e).ShadowRoot||e instanceof ShadowRoot)}var b=Math.round;function g(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(m(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=n.width/a||1),i>0&&(o=n.height/i||1)}return{width:b(n.width/r),height:b(n.height/o),top:b(n.top/o),right:b(n.right/r),bottom:b(n.bottom/o),left:b(n.left/r),x:b(n.left/r),y:b(n.top/o)}}function y(e){var t=g(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function O(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&h(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function w(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return d(e).getComputedStyle(e)}function j(e){return["table","td","th"].indexOf(w(e))>=0}function E(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return"html"===w(e)?e:e.assignedSlot||e.parentNode||(h(e)?e.host:null)||E(e)}function k(e){return m(e)&&"fixed"!==x(e).position?e.offsetParent:null}function A(e){for(var t=d(e),n=k(e);n&&j(n)&&"static"===x(n).position;)n=k(n);return n&&("html"===w(n)||"body"===w(n)&&"static"===x(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&m(e)&&"fixed"===x(e).position)return null;for(var n=D(e);m(n)&&["html","body"].indexOf(w(n))<0;){var r=x(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function L(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var M=Math.max,P=Math.min,R=Math.round;function W(e,t,n){return M(e,P(t,n))}function B(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function C(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var S="top",T="bottom",H="right",q="left",U="auto",V=[S,T,H,q],z="start",I="end",N="viewport",K="popper",_=V.reduce((function(e,t){return e.concat([t+"-"+z,t+"-"+I])}),[]),F=[].concat(V,[U]).reduce((function(e,t){return e.concat([t,t+"-"+z,t+"-"+I])}),[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var X={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,f=l(n.placement),s=L(f),c=[q,H].indexOf(f)>=0?"height":"width";if(i&&a){var u=function(e,t){return B("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:C(e,V))}(o.padding,n),p=y(i),d="y"===s?S:q,v="y"===s?T:H,m=n.rects.reference[c]+n.rects.reference[s]-a[s]-n.rects.popper[c],h=a[s]-n.rects.reference[s],b=A(i),g=b?"y"===s?b.clientHeight||0:b.clientWidth||0:0,O=m/2-h/2,w=u[d],x=g-p[c]-u[v],j=g/2-p[c]/2+O,E=W(w,j,x),D=s;n.modifiersData[r]=((t={})[D]=E,t.centerOffset=E-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&O(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Y(e){return e.split("-")[1]}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,f=e.position,s=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:R(R(t*r)/r)||0,y:R(R(n*r)/r)||0}}(a):"function"===typeof u?u(a):a,l=p.x,v=void 0===l?0:l,m=p.y,h=void 0===m?0:m,b=a.hasOwnProperty("x"),g=a.hasOwnProperty("y"),y=q,O=S,w=window;if(c){var j=A(n),D="clientHeight",k="clientWidth";j===d(n)&&"static"!==x(j=E(n)).position&&"absolute"===f&&(D="scrollHeight",k="scrollWidth"),j=j,o!==S&&(o!==q&&o!==H||i!==I)||(O=T,h-=j[D]-r.height,h*=s?1:-1),o!==q&&(o!==S&&o!==T||i!==I)||(y=H,v-=j[k]-r.width,v*=s?1:-1)}var L,M=Object.assign({position:f},c&&G);return s?Object.assign({},M,((L={})[O]=g?"0":"",L[y]=b?"0":"",L.transform=(w.devicePixelRatio||1)<=1?"translate("+v+"px, "+h+"px)":"translate3d("+v+"px, "+h+"px, 0)",L)):Object.assign({},M,((t={})[O]=g?h+"px":"",t[y]=b?v+"px":"",t.transform="",t))}var Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,c={placement:l(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},$={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,s=d(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,$)})),f&&s.addEventListener("resize",n.update,$),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,$)})),f&&s.removeEventListener("resize",n.update,$)}},data:{}},te={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(e){return e.replace(/left|right|bottom|top/g,(function(e){return te[e]}))}var re={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return re[e]}))}function ie(e){var t=d(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ae(e){return g(E(e)).left+ie(e).scrollLeft}function fe(e){var t=x(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function se(e){return["html","body","#document"].indexOf(w(e))>=0?e.ownerDocument.body:m(e)&&fe(e)?e:se(D(e))}function ce(e,t){var n;void 0===t&&(t=[]);var r=se(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=d(r),a=o?[i].concat(i.visualViewport||[],fe(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(ce(D(a)))}function ue(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e,t){return t===N?ue(function(e){var t=d(e),n=E(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:a+ae(e),y:f}}(e)):m(t)?function(e){var t=g(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ue(function(e){var t,n=E(e),r=ie(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=M(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=M(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+ae(e),s=-r.scrollTop;return"rtl"===x(o||n).direction&&(f+=M(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:f,y:s}}(E(e)))}function le(e,t,n){var r="clippingParents"===t?function(e){var t=ce(D(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&m(e)?A(e):e;return v(n)?t.filter((function(e){return v(e)&&O(e,n)&&"body"!==w(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=pe(e,n);return t.top=M(r.top,t.top),t.right=P(r.right,t.right),t.bottom=P(r.bottom,t.bottom),t.left=M(r.left,t.left),t}),pe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function de(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?l(o):null,a=o?Y(o):null,f=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case S:t={x:f,y:n.y-r.height};break;case T:t={x:f,y:n.y+n.height};break;case H:t={x:n.x+n.width,y:s};break;case q:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var c=i?L(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case z:t[c]=t[c]-(n[u]/2-r[u]/2);break;case I:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}function ve(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,f=n.rootBoundary,s=void 0===f?N:f,c=n.elementContext,u=void 0===c?K:c,p=n.altBoundary,l=void 0!==p&&p,d=n.padding,m=void 0===d?0:d,h=B("number"!==typeof m?m:C(m,V)),b=u===K?"reference":K,y=e.rects.popper,O=e.elements[l?b:u],w=le(v(O)?O:O.contextElement||E(e.elements.popper),a,s),x=g(e.elements.reference),j=de({reference:x,element:y,strategy:"absolute",placement:o}),D=ue(Object.assign({},y,j)),k=u===K?D:x,A={top:w.top-k.top+h.top,bottom:k.bottom-w.bottom+h.bottom,left:w.left-k.left+h.left,right:k.right-w.right+h.right},L=e.modifiersData.offset;if(u===K&&L){var M=L[o];Object.keys(A).forEach((function(e){var t=[H,T].indexOf(e)>=0?1:-1,n=[S,T].indexOf(e)>=0?"y":"x";A[e]+=M[n]*t}))}return A}var me={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0===a||a,s=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,d=n.altBoundary,v=n.flipVariations,m=void 0===v||v,h=n.allowedAutoPlacements,b=t.options.placement,g=l(b),y=s||(g===b||!m?[ne(b)]:function(e){if(l(e)===U)return[];var t=ne(e);return[oe(e),t,oe(t)]}(b)),O=[b].concat(y).reduce((function(e,n){return e.concat(l(n)===U?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,f=n.flipVariations,s=n.allowedAutoPlacements,c=void 0===s?F:s,u=Y(r),p=u?f?_:_.filter((function(e){return Y(e)===u})):V,d=p.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=p);var v=d.reduce((function(t,n){return t[n]=ve(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[l(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,j=new Map,E=!0,D=O[0],k=0;k<O.length;k++){var A=O[k],L=l(A),M=Y(A)===z,P=[S,T].indexOf(L)>=0,R=P?"width":"height",W=ve(t,{placement:A,boundary:u,rootBoundary:p,altBoundary:d,padding:c}),B=P?M?H:q:M?T:S;w[R]>x[R]&&(B=ne(B));var C=ne(B),I=[];if(i&&I.push(W[L]<=0),f&&I.push(W[B]<=0,W[C]<=0),I.every((function(e){return e}))){D=A,E=!1;break}j.set(A,I)}if(E)for(var N=function(e){var t=O.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return D=t,"break"},K=m?3:1;K>0;K--){if("break"===N(K))break}t.placement!==D&&(t.modifiersData[r]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function he(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[S,H,T,q].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ve(t,{elementContext:"reference"}),f=ve(t,{altBoundary:!0}),s=he(a,r),c=he(f,o,i),u=be(s),p=be(c);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}};var ye={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=F.reduce((function(e,n){return e[n]=function(e,t,n){var r=l(e),o=[q,S].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],f=i[1];return a=a||0,f=(f||0)*o,[q,H].indexOf(r)>=0?{x:f,y:a}:{x:a,y:f}}(n,t.rects,i),e}),{}),f=a[t.placement],s=f.x,c=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var Oe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=de({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var we={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0!==a&&a,s=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,d=n.tether,v=void 0===d||d,m=n.tetherOffset,h=void 0===m?0:m,b=ve(t,{boundary:s,rootBoundary:c,padding:p,altBoundary:u}),g=l(t.placement),O=Y(t.placement),w=!O,x=L(g),j="x"===x?"y":"x",E=t.modifiersData.popperOffsets,D=t.rects.reference,k=t.rects.popper,R="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,B={x:0,y:0};if(E){if(i||f){var C="y"===x?S:q,U="y"===x?T:H,V="y"===x?"height":"width",I=E[x],N=E[x]+b[C],K=E[x]-b[U],_=v?-k[V]/2:0,F=O===z?D[V]:k[V],J=O===z?-k[V]:-D[V],X=t.elements.arrow,G=v&&X?y(X):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Z=Q[C],$=Q[U],ee=W(0,D[V],G[V]),te=w?D[V]/2-_-ee-Z-R:F-ee-Z-R,ne=w?-D[V]/2+_+ee+$+R:J+ee+$+R,re=t.elements.arrow&&A(t.elements.arrow),oe=re?"y"===x?re.clientTop||0:re.clientLeft||0:0,ie=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,ae=E[x]+te-ie-oe,fe=E[x]+ne-ie;if(i){var se=W(v?P(N,ae):N,I,v?M(K,fe):K);E[x]=se,B[x]=se-I}if(f){var ce="x"===x?S:q,ue="x"===x?T:H,pe=E[j],le=pe+b[ce],de=pe-b[ue],me=W(v?P(le,ae):le,pe,v?M(de,fe):de);E[j]=me,B[j]=me-pe}}t.modifiersData[r]=B}},requiresIfExists:["offset"]};function xe(e,t,n){void 0===n&&(n=!1);var r=m(t),o=m(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),i=E(t),a=g(e,o),f={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&(("body"!==w(t)||fe(i))&&(f=function(e){return e!==d(e)&&m(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:ie(e);var t}(t)),m(t)?((s=g(t,!0)).x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=ae(i))),{x:a.left+f.scrollLeft-s.x,y:a.top+f.scrollTop-s.y,width:a.width,height:a.height}}function je(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Ee(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var De={placement:"bottom",modifiers:[],strategy:"absolute"};function ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Ae(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?De:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},De,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,s={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,f),o.scrollParents={reference:v(e)?ce(e):e.contextElement?ce(e.contextElement):[],popper:ce(t)};var u=function(e){var t=je(e);return J.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var f=i({state:o,name:t,instance:s,options:r}),c=function(){};a.push(f||c)}})),s.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(ke(t,n)){o.rects={reference:xe(t,A(n),"fixed"===o.options.strategy),popper:y(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:s})||o)}else o.reset=!1,r=-1}}},update:Ee((function(){return new Promise((function(e){s.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!ke(e,t))return s;function c(){a.forEach((function(e){return e()})),a=[]}return s.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),s}}var Le=Ae({defaultModifiers:[ge,Oe,Z,ee,ye,me,we,X]}),Me=["enabled","placement","strategy","modifiers"];function Pe(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var Re={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},We={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?"".concat(a,",").concat(r.id):r.id)}}},Be=[];t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.enabled,f=void 0===a||a,s=n.placement,u=void 0===s?"bottom":s,l=n.strategy,d=void 0===l?"absolute":l,v=n.modifiers,m=void 0===v?Be:v,h=Pe(n,Me),b=Object(i.useRef)(m),g=Object(i.useRef)(),y=Object(i.useCallback)((function(){var e;null==(e=g.current)||e.update()}),[]),O=Object(i.useCallback)((function(){var e;null==(e=g.current)||e.forceUpdate()}),[]),w=p(Object(i.useState)({placement:u,update:y,forceUpdate:O,attributes:{},styles:{popper:{},arrow:{}}})),x=Object(o.a)(w,2),j=x[0],E=x[1],D=Object(i.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),E({state:t,styles:n,attributes:r,update:y,forceUpdate:O,placement:t.placement})}}}),[y,O,E]),k=Object(i.useMemo)((function(){return c(b.current,m)||(b.current=m),b.current}),[m]);return Object(i.useEffect)((function(){g.current&&f&&g.current.setOptions({placement:u,strategy:d,modifiers:[].concat(Object(r.a)(k),[D,Re])})}),[d,u,D,f,k]),Object(i.useEffect)((function(){if(f&&null!=e&&null!=t)return g.current=Le(e,t,Object.assign({},h,{placement:u,strategy:d,modifiers:[].concat(Object(r.a)(k),[We,D])})),function(){null!=g.current&&(g.current.destroy(),g.current=void 0,E((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[f,e,t]),j}},235:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=2.2e3401f8.chunk.js.map