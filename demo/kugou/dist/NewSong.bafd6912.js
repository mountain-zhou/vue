(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"/LMA":function(t,e,n){"use strict";var i=n("cVNK"),s=n.n(i);s.a},"7qNp":function(t,e,n){"use strict";var i=n("Txcr"),s=n.n(i);s.a},PxLW:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"music_list"},t._l(t.musicList,function(e,i){return n("li",{key:i,staticClass:"music_list__item main_border_bottom"},[n("div",{staticClass:"music_list__info",on:{click:function(n){t.wantPlay(e)}}},[t._t("index",null,{data:i}),n("div",{staticClass:"music_list__name"},[t._v(t._s(e.filename))])],2),n("button",{staticClass:"music_list__download"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-download"}})])])])}))},s=[],r={name:"AppMusicList",props:{musicList:{type:Array,default:function(){return[]}}},methods:{wantPlay:function(t){this.$store.commit("player/wantPlay",{music:t,musicList:this.$props.musicList})}}},o=r,a=(n("VvY7"),n("KHd+")),u=Object(a["a"])(o,i,s,!1,null,"39bf58b4",null);e["a"]=u.exports},Txcr:function(t,e,n){},VvY7:function(t,e,n){"use strict";var i=n("vVRU"),s=n.n(i);s.a},cVNK:function(t,e,n){},eRml:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new_song"},[n("Slider",{staticClass:"new_song__slider",attrs:{data:t.sliderData}}),n("AppMusicList",{staticClass:"new_song__music_list",attrs:{"music-list":t.newSongs}})],1)},s=[],r=n("yT7P"),o=(n("VRzm"),n("PxLW")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"slider",on:{touchstart:function(t){t.stopPropagation()}}},[n("div",{ref:"glide",staticClass:"glide slider__body"},[n("div",{staticClass:"glide__track slider__track",attrs:{"data-glide-el":"track"}},[n("ul",{staticClass:"glide__slides slider__slides"},t._l(t.data,function(t,e){return n("li",{key:e,staticClass:"glide__slide"},[n("a",{staticClass:"slider__link",attrs:{href:t.extra.tourl}},[n("img",{staticClass:"slider__img",attrs:{src:t.imgurl,alt:t.title}})])])}))]),n("div",{staticClass:"glide__bullets slider__bullets",attrs:{"data-glide-el":"controls[nav]"}},t._l(t.data,function(t,e){return n("button",{key:e,staticClass:"glide__bullet",attrs:{"data-glide-dir":"="+e}})}))])])},u=[],l={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function c(t){console.error("[Glide warn]: "+t)}var d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},v=function t(e,n,i){null===e&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,n);if(void 0===s){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in s)return s.value;var o=s.get;return void 0!==o?o.call(i):void 0},m=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},g=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e};function y(t){return parseInt(t)}function b(t){return parseFloat(t)}function _(t){return"string"===typeof t}function w(t){var e="undefined"===typeof t?"undefined":d(t);return"function"===e||"object"===e&&!!t}function k(t){return"number"===typeof t}function S(t){return"function"===typeof t}function x(t){return"undefined"===typeof t}function T(t){return t.constructor===Array}function L(t,e,n){var i={};for(var s in e)S(e[s])?i[s]=e[s](t,i,n):c("Extension must be a function");for(var r in i)S(i[r].mount)&&i[r].mount();return i}function C(t,e,n){Object.defineProperty(t,e,n)}function H(t,e){var n=p({},t,e);return e.hasOwnProperty("classes")&&(n.classes=p({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=p({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=p({},t.breakpoints,e.breakpoints)),n}var O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,t),this.events=e,this.hop=e.hasOwnProperty}return h(t,[{key:"on",value:function(t,e){if(T(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(T(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),t}(),P=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,t),this._c={},this._t=[],this._e=new O,this.disabled=!1,this.selector=e,this.settings=H(l,n),this.index=this.settings.startAt}return h(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),w(t)?this._c=L(this,t,this._e):c("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return T(t)?this._t=t:c("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=H(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){w(t)?this._o=t:c("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=y(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function A(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var s=this;t.disabled||(t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after(function(){(s.isOffset("<")||s.isOffset(">"))&&(s._o=!1,n.emit("run.offset",s.move)),n.emit("run.after",s.move),t.enable()}))},calculate:function(){var e=this.move,i=this.length,s=e.steps,r=e.direction,o=k(y(s))&&0!==y(s);switch(r){case">":">"===s?t.index=i:this.isEnd()?(t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0),n.emit("run.end",e)):o?t.index+=Math.min(i-t.index,-y(s)):t.index++;break;case"<":"<"===s?t.index=0:this.isStart()?(t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=i),n.emit("run.start",e)):o?t.index-=Math.min(t.index,y(s)):t.index--;break;case"=":t.index=s;break}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return C(i,"move",{get:function(){return this._m},set:function(t){this._m={direction:t.substr(0,1),steps:t.substr(1)?t.substr(1):0}}}),C(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?i-1-(y(n.perView)-1)+y(n.focusAt):i-1}}),C(i,"offset",{get:function(){return this._o}}),i}function M(){return(new Date).getTime()}function j(t,e,n){var i=void 0,s=void 0,r=void 0,o=void 0,a=0;n||(n={});var u=function(){a=!1===n.leading?0:M(),i=null,o=t.apply(s,r),i||(s=r=null)},l=function(){var l=M();a||!1!==n.leading||(a=l);var c=e-(l-a);return s=this,r=arguments,c<=0||c>e?(i&&(clearTimeout(i),i=null),a=l,o=t.apply(s,r),i||(s=r=null)):i||!1===n.trailing||(i=setTimeout(u,c)),o};return l.cancel=function(){clearTimeout(i),a=0,i=s=r=null},l}var z={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function E(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var s=t[n].style,r=e.Direction.value;s[z[r][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?s[z[r][1]]=this.value/2+"px":s[z[r][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return C(i,"value",{get:function(){return y(t.settings.gap)}}),C(i,"grow",{get:function(){return i.value*(e.Sizes.length-1)}}),C(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],j(function(){i.apply(e.Html.wrapper.children)},30)),n.on("destroy",function(){i.remove(e.Html.wrapper.children)}),i}function R(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function D(t){return!!(t&&t instanceof window.HTMLElement)}var N='[data-glide-el="track"]';function V(t,e){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector(N),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(e){return!e.classList.contains(t.settings.classes.cloneSlide)})}};return C(n,"root",{get:function(){return n._r},set:function(t){_(t)&&(t=document.querySelector(t)),D(t)?n._r=t:c("Root element must be a existing Html node")}}),C(n,"track",{get:function(){return n._t},set:function(t){D(t)?n._t=t:c("Could not find track element. Please use "+N+" attribute.")}}),C(n,"wrapper",{get:function(){return n.track.children[0]}}),n}function W(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return C(i,"value",{get:function(){return i._v},set:function(t){w(t)?(t.before=y(t.before),t.after=y(t.after)):t=y(t),i._v=t}}),C(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return w(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],function(){i.mount()}),i}function G(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after(function(){n.emit("move.after",{movement:t.value})})}};return C(i,"offset",{get:function(){return i._o},set:function(t){i._o=x(t)?0:y(t)}}),C(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),C(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],function(){i.make()}),i}function q(t,e,n){var i={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return C(i,"length",{get:function(){return e.Html.slides.length}}),C(i,"width",{get:function(){return e.Html.root.offsetWidth}}),C(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),C(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){i.setupSlides(),i.setupWrapper()}),n.on("destroy",function(){i.remove()}),i}function F(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),R(i).forEach(function(t){t.classList.remove(n.activeSlide)}))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach(function(t){t.classList.remove(n.activeSlide)})}};return n.on(["destroy","update"],function(){i.removeClasses()}),n.on(["resize","update"],function(){i.mount()}),n.on("move.after",function(){i.activeClass()}),i}function B(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,s=t.settings,r=s.perView,o=s.classes,a=+!!t.settings.peek,u=r+a,l=i.slice(0,u),c=i.slice(-u),d=0;d<Math.max(1,Math.floor(r/i.length));d++){for(var f=0;f<l.length;f++){var h=l[f].cloneNode(!0);h.classList.add(o.cloneSlide),n.push(h)}for(var p=0;p<c.length;p++){var v=c[p].cloneNode(!0);v.classList.add(o.cloneSlide),n.unshift(v)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,s=n.slides,r=Math.floor(t.length/2),o=t.slice(0,r).reverse(),a=t.slice(r,t.length),u=e.Sizes.slideWidth+"px",l=0;l<a.length;l++)i.appendChild(a[l]);for(var c=0;c<o.length;c++)i.insertBefore(o[c],s[0]);for(var d=0;d<t.length;d++)t[d].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return C(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",function(){i.remove(),i.mount(),i.append()}),n.on("build.before",function(){t.isType("carousel")&&i.append()}),n.on("destroy",function(){i.remove()}),i}var Y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,t),this.listeners=e}return h(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];_(t)&&(t=[t]);for(var s=0;s<t.length;s++)this.listeners[t[s]]=n,e.addEventListener(t[s],this.listeners[t[s]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();function $(t,e,n){var i=new Y,s={mount:function(){this.bind()},bind:function(){i.on("resize",window,j(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){s.unbind(),i.destroy()}),s}var I=["ltr","rtl"],J={">":"<","<":">","=":"="};function K(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(J[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return C(i,"value",{get:function(){return i._v},set:function(t){I.indexOf(t)>-1?i._v=t:c("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i}function U(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function X(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}}function Q(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function Z(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return w(i)?n-i.before:n-i}return n}}}function tt(t,e){return{modify:function(n){var i=e.Gaps.value,s=e.Sizes.width,r=t.settings.focusAt,o=e.Sizes.slideWidth;return"center"===r?n-(s/2-o/2):n-o*r-i*r}}}function et(t,e,n){var i=[X,Q,Z,tt].concat(t._t,[U]);return{mutate:function(s){for(var r=0;r<i.length;r++){var o=i[r];S(o)&&S(o().modify)?s=o(t,e,n).modify(s):c("Transformer should be a function that returns an object with `modify()` method")}return s}}}function nt(t,e,n){var i={set:function(n){var i=et(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",function(s){var r=e.Gaps.value,o=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(a*(o-1))}),i.set(-a-r*o)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(0)}),i.set(a*o+r*o)):i.set(s.movement)}),n.on("destroy",function(){i.remove()}),i}function it(t,e,n){var i=!1,s={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return C(s,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",function(){s.set()}),n.on(["build.before","resize","translate.jump"],function(){s.disable()}),n.on("run",function(){s.enable()}),n.on("destroy",function(){s.remove()}),s}var st=!1;try{var rt=Object.defineProperty({},"passive",{get:function(){st=!0}});window.addEventListener("testPassive",null,rt),window.removeEventListener("testPassive",null,rt)}catch(t){}var ot=st,at=["touchstart","mousedown"],ut=["touchmove","mousemove"],lt=["touchend","touchcancel","mouseup","mouseleave"],ct=["mousedown","mousemove","mouseup","mouseleave"];function dt(t,e,n){var i=new Y,s=0,r=0,o=0,a=!1,u=!!ot&&{passive:!0},l={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);s=null,r=y(i.pageX),o=y(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,l=a.touchRatio,c=a.classes,d=this.touches(i),f=y(d.pageX)-r,h=y(d.pageY)-o,p=Math.abs(f<<2),v=Math.abs(h<<2),m=Math.sqrt(p+v),g=Math.sqrt(v);if(s=Math.asin(g/m),!(180*s/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(f*b(l)),e.Html.root.classList.add(c.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var o=t.settings,a=this.touches(i),u=this.threshold(i),l=a.pageX-r,c=180*s/Math.PI,d=Math.round(l/e.Sizes.slideWidth);this.enable(),l>u&&c<o.touchAngle?(o.perTouch&&(d=Math.min(d,y(o.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve("<"+d))):l<-u&&c<o.touchAngle?(o.perTouch&&(d=Math.max(d,-y(o.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve(">"+d))):e.Move.make(),e.Html.root.classList.remove(o.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,s=t.settings;s.swipeThreshold&&i.on(at[0],e.Html.wrapper,function(t){n.start(t)},u),s.dragThreshold&&i.on(at[1],e.Html.wrapper,function(t){n.start(t)},u)},unbindSwipeStart:function(){i.off(at[0],e.Html.wrapper,u),i.off(at[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(ut,e.Html.wrapper,j(function(t){n.move(t)},t.settings.throttle),u)},unbindSwipeMove:function(){i.off(ut,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(lt,e.Html.wrapper,function(e){t.end(e)})},unbindSwipeEnd:function(){i.off(lt,e.Html.wrapper)},touches:function(t){return ct.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return ct.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",function(){e.Html.root.classList.add(t.settings.classes.swipeable)}),n.on("destroy",function(){l.unbindSwipeStart(),l.unbindSwipeMove(),l.unbindSwipeEnd(),i.destroy()}),l}var ft='[data-glide-el="controls[nav]"]',ht='[data-glide-el^="controls"]';function pt(t,e,n){var i=new Y,s=!!ot&&{passive:!0},r={mount:function(){this._n=e.Html.root.querySelectorAll(ft),this._c=e.Html.root.querySelectorAll(ht),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i.classList.add(n.classes.activeNav),R(i).forEach(function(t){t.classList.remove(n.classes.activeNav)})},removeClass:function(e){e[t.index]&&e[t.index].classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,s)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return C(r,"items",{get:function(){return r._c}}),n.on(["mount.after","move.after"],function(){r.setActive()}),n.on("destroy",function(){r.removeBindings(),r.removeActive(),i.destroy()}),r}function vt(t,e,n){var i=new Y,s={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&x(this._i)&&(this._i=setInterval(function(){n.stop(),e.Run.make(">"),n.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,function(){t.stop()}),i.on("mouseout",e.Html.root,function(){t.start()})},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return C(s,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return y(n||t.settings.autoplay)}}),n.on(["destroy","update"],function(){s.unbind()}),n.on(["run.before","pause","destroy","swipe.start","update"],function(){s.stop()}),n.on(["run.after","play","swipe.end"],function(){s.start()}),n.on("update",function(){s.mount()}),n.on("destroy",function(){i.destroy()}),s}var mt,gt={Html:V,Translate:nt,Transition:it,Direction:K,Peek:W,Sizes:q,Gaps:E,Move:G,Clones:B,Resize:$,Build:F,Run:A},yt=function(t){function e(){return f(this,e),g(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return m(e,t),h(e,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,p({},gt,t))}}]),e}(P),bt=yt,_t={name:"Slider",props:{data:{type:Array,default:function(){return[]}}},watch:{data:{handler:function(t){var e=this;0!==t.length&&this.$nextTick(function(){return e.initGlideVm()})},immediate:!0}},destroyed:function(){mt.destroy()},methods:{initGlideVm:function(){mt=new bt(".slider__body",{type:"carousel",autoplay:3e3,animationDuration:1e3}).mount({Autoplay:vt,Controls:pt,Swipe:dt})}}},wt=_t,kt=(n("zktV"),n("7qNp"),n("KHd+")),St=Object(kt["a"])(wt,a,u,!1,null,"4198fc9f",null),xt=St.exports,Tt=n("vDqi"),Lt=n.n(Tt),Ct=n("pHQ6"),Ht=n("L2JU"),Ot=n("eToF"),Pt={name:"NewSong",mixins:[Ot["a"]],computed:Object(r["a"])({},Object(Ht["d"])("newSong",["newSongs","sliderData"])),created:function(){0===this.newSongs.length&&(this.setLoadingExcludeNav(),this.startLoading(),this.getNewSong())},methods:Object(r["a"])({},Object(Ht["c"])(["replaceProperty"]),{getNewSong:function(){var t=this;Lt.a.get(Ct["a"].newSong).then(function(e){var n=e.data;t.replaceProperty({paths:"newSong.newSongs",data:n.data});var i=n.banner;t.replaceProperty({paths:"newSong.sliderData",data:i}),t.stopLoading()})}}),components:{AppMusicList:o["a"],Slider:xt}},At=Pt,Mt=(n("/LMA"),Object(kt["a"])(At,i,s,!1,null,"3eea1074",null));e["default"]=Mt.exports},eToF:function(t,e,n){"use strict";var i=n("yT7P"),s=n("L2JU");e["a"]={updated:function(){this.stopLoading()},methods:Object(i["a"])({},Object(s["c"])(["replaceProperty"]),{startLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!0})},stopLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!1})},setLoadingExcludeHeader:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_header"})},setLoadingExcludeNav:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_nav"})},setLoadingExcludeModuleTitle:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_module_title"})},setLoadingExcludeSearchForm:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_search_form"})}})}},vVRU:function(t,e,n){},x8TR:function(t,e,n){},zktV:function(t,e,n){"use strict";var i=n("x8TR"),s=n.n(i);s.a}}]);
//# sourceMappingURL=NewSong.bafd6912.js.map