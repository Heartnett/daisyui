(window.webpackJsonp=window.webpackJsonp||[]).push([[86,10,42],{402:function(t,e,n){var o=n(18),l="["+n(403)+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(t,e,n){"use strict";var o=n(10),l=n(4),r=n(81),c=n(14),d=n(12),f=n(35),h=n(159),v=n(58),m=n(5),_=n(60),y=n(59).f,C=n(25).f,w=n(13).f,x=n(402).trim,I="Number",S=l.Number,E=S.prototype,N=f(_(E))==I,T=function(t){var e,n,o,l,r,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=x(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+f}for(c=(r=f.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>l)return NaN;return parseInt(r,o)}return+f};if(r(I,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var k,D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(N?m((function(){E.valueOf.call(n)})):f(n)!=I)?h(new S(T(e)),n,D):T(e)},O=o?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;O.length>A;A++)d(S,k=O[A])&&!d(D,k)&&w(D,k,C(S,k));D.prototype=E,E.constructor=D,c(l,I,D)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){"use strict";var o=n(2),l=n(402).trim;o({target:"String",proto:!0,forced:n(408)("trim")},{trim:function(){return l(this)}})},408:function(t,e,n){var o=n(5),l=n(403);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},409:function(t,e,n){"use strict";n.r(e);n(407),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,l=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+r),e.appendChild(o));return e}var e,div;this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim()+"\n",t(div,0).innerHTML)}},mounted:function(){this.setSrc()}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},458:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{DAISYUI_VERSION:"1.0.2"}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"mb-4"},[t._v("\n      DaisyUI can be configed from your "),n("span",{staticClass:"badge badge-outline"},[t._v("tailwind.config.js")]),t._v(" file\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("module.exports = {\n\n    "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("// add DaisyUI plugin")]),t._v("\n    plugins: [\n      require('daisyui'),\n    ],\n\n    "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("// config (optional)")]),t._v("\n    daisyui: {\n      styled: true,\n      themes: true,\n      resets: true,\n      utils: true,\n      logs: true,\n      rtl: false,\n    },\n\n  }")])])])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Config values explained:")])]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      You can add a `daisyUI` object and change default config:\n    ")]),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl font-bold"},[n("span",[t._v("styled")])]),t._v(" "),n("p",{staticClass:"badge badge-outline"},[t._v("\n      default: true\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      If it's true, components will have colors and style so you won't need to design anything.\n      "),n("br"),t._v("\n      If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.\n    ")]),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl font-bold"},[n("span",[t._v("themes")])]),t._v(" "),n("p",{staticClass:"badge badge-outline"},[t._v("\n      default: true\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      If it's true, all themes will be included.\n      "),n("br"),t._v("If it's false, DaisyUI will use the "),n("span",{staticClass:"badge badge-outline"},[t._v("light")]),t._v(" theme.\n      "),n("br"),t._v("Can also be an array of theme names:\n\n    ")]),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("daisyui: {\n    themes: ['emerald','forest','synthwave'],\n  },")])])])]),t._v(" "),n("NuxtLink",{staticClass:"link",attrs:{to:"/docs/default-themes"}},[t._v("read more about default themes")]),t._v(" "),n("p"),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl font-bold"},[n("span",[t._v("resets")])]),t._v(" "),n("p",{staticClass:"badge badge-outline"},[t._v("\n      default: true\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      If it's true, "),n("a",{staticClass:"link",attrs:{target:"_blank",href:"https://github.com/saadeghi/daisyui/blob/master/src/resets"}},[t._v("a very small reset style")]),t._v(" will be added\n    ")]),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl font-bold"},[n("span",[t._v("utils")])]),t._v(" "),n("p",{staticClass:"badge badge-outline"},[t._v("\n      default: true\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      If it's true, "),n("a",{staticClass:"link",attrs:{target:"_blank",href:"https://github.com/saadeghi/daisyui/tree/master/src/utilities"}},[t._v("a few utility classes")]),t._v(" will be added\n    ")]),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl font-bold"},[n("span",[t._v("logs")])]),t._v(" "),n("p",{staticClass:"badge badge-outline"},[t._v("\n      default: true\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      If it's true, DaisyUI shows logs in terminal while CSS is building\n    ")]),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl font-bold"},[n("span",[t._v("rtl")])]),t._v(" "),n("p",{staticClass:"badge badge-outline"},[t._v("\n      default: false\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      If it's true, your theme will be right-to-left. You need to add "),n("span",{staticClass:"badge badge-outline"},[t._v('dir="rtl"')]),t._v(" to your body tag. If you're using DaisyUI with RTL option, I also suggest using "),n("a",{staticClass:"link",attrs:{href:"https://github.com/cvrajeesh/tailwindcss-flip",target:"_blank"}},[t._v("tailwindcss-flip")]),t._v(" plugin. It flips all your tailwind utilities automatically.\n    ")])],1),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/docs/customize"}},[t._v("\n      Next: Customize components\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Config")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(409).default,Icon:n(161).default})}}]);