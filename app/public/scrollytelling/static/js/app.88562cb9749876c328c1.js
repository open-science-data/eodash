webpackJsonp([1],{"6gke":function(e,t){},"7zck":function(e,t){},LqhC:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMmMxNDEuNCAwIDI1Ni0xMTQuNiAyNTYtMjU2UzM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NlMxMTQuNiA1MTIgMjU2IDUxMnpNMjMyIDM0NFYyODBIMTY4Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0aDY0VjE2OGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0djY0aDY0YzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0SDI4MHY2NGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNHoiLz48L3N2Zz4="},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),i=r("3EgV"),n=r.n(i),a=(r("7zck"),r("Gu7T")),o=r.n(a),c=r("pFYg"),u=r.n(c),l=r("xt7F"),d=r.n(l),m={name:"ImageWithTextOverlay",props:{item:Array,index:Number,progress:Number,text:String},methods:{parseMarkdown:function(e){return d.a.parse(e).replace("<a",'<a target="_blank" ')}},data:function(){return{textPlaceholders:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida maximus elit a venenatis. Mauris felis ipsum, placerat sit amet accumsan non, commodo ac arcu. Phasellus lorem urna, consectetur non ornare et, pharetra id risus.","Proin sit amet commodo velit. Ut vitae quam elit. Donec nulla dui, ullamcorper ac dui nec, pretium feugiat lectus. Nam vestibulum odio arcu, eu efficitur tellus maximus ac.","Ut vitae quam elit. Donec nulla dui, ullamcorper ac dui nec, pretium feugiat lectus. Nam vestibulum odio arcu, eu efficitur tellus maximus ac.","Mauris felis ipsum, placerat sit amet accumsan non, commodo ac arcu. Phasellus lorem urna, consectetur non ornare et, pharetra id risus."]}}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("article",{staticStyle:{"margin-bottom":"50px"}},[r("v-fade-transition",[r("v-img",{directives:[{name:"show",rawName:"v-show",value:e.progress>=0&&e.progress<=100,expression:"progress >= 0 && progress <= 100"}],style:"position: fixed; top: 0; right: 0; bottom: 0;\n          left: 0; pointer-events: none; filter: brightness(0.7)\n          hue-rotate("+3*e.progress+"deg); transform: scale("+(1+e.progress/100)+"); transform-origin: center",attrs:{src:e.item[0].image}})],1),e._v(" "),r("div",{staticClass:"white--text text-center pa-16",staticStyle:{position:"relative"}},[r("h1",{staticClass:"text-h1 mb-8"},[e._v("Hello World.")]),e._v(" "),r("h4",{staticClass:"text-h4 mb-8"},[e._v("Scroll to get started")]),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.parseMarkdown(e.text))}})])],1)])],1)},staticRenderFns:[]};var g=r("VU/8")(m,p,!1,function(e){r("ebUR")},"data-v-0064c195",null).exports,h={props:{text:{type:String,required:!0}},computed:{hasExpansibleSection:function(){return this.text.includes("<--EXPAND--\x3e")||this.text.includes("<--EXPAND-SMALL--\x3e")},isExpansibleSectionLarge:function(){return this.text.includes("<--EXPAND--\x3e")},sections:function(){return this.isExpansibleSectionLarge?this.text.split("<--EXPAND--\x3e"):this.text.split("<--EXPAND-SMALL--\x3e")}},methods:{parseMarkdown:function(e){return d.a.parse(e).replace("<a",'<a target="_blank" ')}},data:function(){return{isExpanded:!1}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"expansible-text-section"},[e.hasExpansibleSection?[s("p",{domProps:{innerHTML:e._s(e.parseMarkdown(e.sections[0]))}}),e._v(" "),s("img",{staticClass:"expandBtn",attrs:{src:r("LqhC"),"data-section":"4",width:"20"},on:{click:function(t){e.isExpanded=!e.isExpanded}}}),e._v(" "),s("v-fade-transition",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.isExpanded,expression:"isExpanded"}],staticClass:"expansible",class:{large:e.isExpansibleSectionLarge},domProps:{innerHTML:e._s(e.parseMarkdown(e.sections[1]))}})])]:s("div",{staticClass:"fill-width",domProps:{innerHTML:e._s(e.parseMarkdown(e.text))}})],2)},staticRenderFns:[]};var f=r("VU/8")(h,v,!1,function(e){r("6gke")},"data-v-927e3d82",null).exports,x={props:{item:{type:Object,required:!0}},components:{ExpansibleTextSection:f},data:function(){return{isExpanded:!1}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",[t("article",{staticClass:"full-text-block d-flex"},[this.item.video?t("video",{attrs:{src:this.item.video,controls:"",muted:"",autoplay:"",width:"100%"},domProps:{muted:!0}}):this.item.text?t("ExpansibleTextSection",{attrs:{text:this.item.text}}):this._e()],1)])],1)},staticRenderFns:[]};var w=r("VU/8")(x,b,!1,function(e){r("Vqlw")},"data-v-4cd32435",null).exports,y={props:{progress:Number,baseUrl:String,small:{type:Boolean,default:!1}},data:function(){return{frameCount:134,imageBase:"https://codesandbox-scrollytelling-demo.s3.eu-central-1.amazonaws.com",img:null,context:null,scrubConfig:null}},computed:{shouldRenderToCanvas:function(){return!this.baseUrl.includes(".mp4")}},mounted:function(){this.shouldRenderToCanvas?this.setupCanvasRendering():this.setupVideoRendering()},methods:{currentFrame:function(e){return this.baseUrl+"/"+e.toString().padStart(4,"0")+".jpg"},preloadImages:function(){for(var e=1;e<this.frameCount;e+=1){(new Image).src=this.currentFrame(e)}},parseMarkdown:function(e){return d.a.parse(e).replace("<a",'<a target="_blank" ')},setupVideoRendering:function(){var e=this;document.getElementById("scroll-target").addEventListener("scroll",function(){e.progress>0&&e.progress<100&&(e.$refs.scrubVideo.currentTime=e.$refs.scrubVideo.duration*e.progress/100)})},setupCanvasRendering:function(){var e=this;fetch(this.baseUrl+"/scrub.json").then(function(t){t.json().then(function(t){e.scrubConfig=t})});var t=this.$refs.hero;this.context=t.getContext("2d"),this.img=new Image,this.img.src=this.currentFrame(1),t.width=1920,t.height=1080,this.img.onload=function(){e.context.drawImage(e.img,0,0,window.innerWidth,window.innerHeight)},this.preloadImages()}},watch:{progress:function(e){var t=this;if(e>=0&&e<=100)if(this.shouldRenderToCanvas){var r=Math.floor(e*this.frameCount/100)+1;this.img.src=this.currentFrame(r),this.context.drawImage(this.img,0,0,window.innerWidth,window.innerHeight)}else{var s=this.$refs.scrubVideo;s.onloadedmetadata=function(){s.currentTime=s.duration*(t.progress/100)}}}}},M={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fill-width fill-height"},[r("v-fade-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.progress>=0&&e.progress<=100,expression:"progress >= 0 && progress <= 100"}],staticStyle:{position:"relative"}},[e.baseUrl.includes(".mp4")?r("video",{ref:"scrubVideo",attrs:{width:"100%",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:e.baseUrl,type:"video/mp4"}})]):r("canvas",{ref:"hero",staticStyle:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0","pointer-events":"none","z-index":"-1"}})])]),e._v(" "),e.scrubConfig?r("v-container",[r("v-col",{attrs:{cols:"6"}},[r("article",{staticClass:"black--text",staticStyle:{height:"1000px",padding:"400px 50px 300px 50px"},domProps:{innerHTML:e._s(e.parseMarkdown(e.scrubConfig.content))}})])],1):e._e()],1)},staticRenderFns:[]},N=r("VU/8")(y,M,!1,null,null,null).exports,I={props:{item:Array,index:Number,progress:Number},components:{ExpansibleTextSection:f,VideoScrubbingWindow:N}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"mx-0",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("article",{staticStyle:{"min-height":"800px"}},[r("ExpansibleTextSection",{attrs:{text:e.item[0].text}})],1)]),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-fade-transition",[r("figure",{directives:[{name:"show",rawName:"v-show",value:e.progress>=0&&e.progress<=100,expression:"progress >= 0 && progress <= 100"}]},[e.item[1].scrub?r("VideoScrubbingWindow",{attrs:{progress:e.progress,"base-url":e.item[1].scrub,small:""}}):e._e(),e._v(" "),e.item[1].video?r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:e.item[1].video,type:"video/mp4"}})]):r("img",{style:"filter: saturate("+(e.progress||0)/100+");",attrs:{src:e.item[1].image}}),e._v(" "),r("span",{staticClass:"white--text pa-2",staticStyle:{position:"absolute",left:"0"}},[e._v("\n          "+e._s(Math.round(e.progress)||0)+"%\n        ")])],1)])],1)],1)},staticRenderFns:[]};var _=r("VU/8")(I,C,!1,function(e){r("badz")},"data-v-c75b9632",null).exports,S={props:{item:Array,index:Number,progress:Number},components:{VideoScrubbingWindow:N},methods:{parseMarkdown:function(e){return d.a.parse(e).replace("<a",'<a target="_blank" ')}},data:function(){return{textPlaceholders:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida maximus elit a venenatis. Mauris felis ipsum, placerat sit amet accumsan non, commodo ac arcu. Phasellus lorem urna, consectetur non ornare et, pharetra id risus.","Proin sit amet commodo velit. Ut vitae quam elit. Donec nulla dui, ullamcorper ac dui nec, pretium feugiat lectus. Nam vestibulum odio arcu, eu efficitur tellus maximus ac.","Ut vitae quam elit. Donec nulla dui, ullamcorper ac dui nec, pretium feugiat lectus. Nam vestibulum odio arcu, eu efficitur tellus maximus ac.","Mauris felis ipsum, placerat sit amet accumsan non, commodo ac arcu. Phasellus lorem urna, consectetur non ornare et, pharetra id risus."]}}},E={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"mx-0",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-fade-transition",[r("figure",{directives:[{name:"show",rawName:"v-show",value:e.progress>=0&&e.progress<=100,expression:"progress >= 0 && progress <= 100"}]},[e.item[1].scrub?r("VideoScrubbingWindow",{attrs:{progress:e.progress,"base-url":e.item[1].scrub,small:""}}):e._e(),e._v(" "),e.item[1].video?r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:e.item[1].video,type:"video/mp4"}})]):r("img",{style:"filter: saturate("+(e.progress||0)/100+");",attrs:{src:e.item[1].image}}),e._v(" "),r("span",{staticClass:"white--text pa-2",staticStyle:{position:"absolute",right:"0"}},[e._v(e._s(Math.round(e.progress)||0)+"%")])],1)])],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("article",[r("p",{domProps:{innerHTML:e._s(e.parseMarkdown(e.item[1].text))}})])])],1)},staticRenderFns:[]};var k=r("VU/8")(S,E,!1,function(e){r("Q7E0")},"data-v-c9c0e6aa",null).exports,T={props:{progress:Number,baseUrl:String},data:function(){return{frameCount:134,imageBase:"https://codesandbox-scrollytelling-demo.s3.eu-central-1.amazonaws.com",img:null,context:null,scrubConfig:null}},mounted:function(){var e=this;fetch(this.baseUrl+"/scrub.json").then(function(t){t.json().then(function(t){e.scrubConfig=t})});var t=this.$refs.hero;this.context=t.getContext("2d"),this.img=new Image,this.img.src=this.currentFrame(1),t.width=1920,t.height=1080,this.img.onload=function(){e.context.drawImage(e.img,0,0,window.innerWidth,window.innerHeight)},this.preloadImages()},methods:{currentFrame:function(e){return this.baseUrl+"/"+e.toString().padStart(4,"0")+".jpg"},preloadImages:function(){for(var e=1;e<this.frameCount;e+=1){(new Image).src=this.currentFrame(e)}},parseMarkdown:function(e){return d.a.parse(e).replace("<a",'<a target="_blank" ')}},watch:{progress:function(e){if(e>=0&&e<=100){var t=Math.floor(e*this.frameCount/100)+1;this.img.src=this.currentFrame(t),this.context.drawImage(this.img,0,0,window.innerWidth,window.innerHeight)}}}},L={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-fade-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.progress>=0&&e.progress<=100,expression:"progress >= 0 && progress <= 100"}]},[e.baseUrl.includes(".mp4")?r("video",{attrs:{id:"scrubVideo",src:e.baseUrl,width:"100%",muted:""},domProps:{muted:!0}}):r("canvas",{ref:"hero",staticStyle:{position:"fixed",top:"0",right:"0",bottom:"0",left:"0","pointer-events":"none","z-index":"-1"}})])]),e._v(" "),e.scrubConfig?r("v-container",[r("v-col",{attrs:{cols:"6"}},[r("article",{staticClass:"black--text",staticStyle:{height:"1000px",padding:"400px 50px 300px 50px"},domProps:{innerHTML:e._s(e.parseMarkdown(e.scrubConfig.content))}})])],1):e._e()],1)},staticRenderFns:[]},U={components:{ImageWithTextOverlay:g,FullWidthBlock:w,StickyRight:_,StickyLeft:k,VideoScrubbingFullWidth:r("VU/8")(T,L,!1,null,null,null).exports},created:function(){var e=this;window.addEventListener("message",function(t){t&&"object"===u()(t.data)&&(e.items=t.data)})},data:function(){return{progress:{},items:[]}},methods:{onScroll:function(){var e=this,t=window.innerHeight;[].concat(o()(document.querySelectorAll("article"))).forEach(function(r,s){var i=r.clientHeight,n=r.getBoundingClientRect().top;e.$set(e.progress,s,(t-n-.33*i)/i*100)})}}},D={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",{directives:[{name:"scroll",rawName:"v-scroll.self",value:e.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"overflow-y-auto overflow-x-hidden mx-0",staticStyle:{height:"100vh","max-width":"100%",position:"fixed",top:"0",bottom:"0",left:"0",right:"0",padding:"0"},attrs:{id:"scroll-target"}},[e._l(e.items,function(t,s){return[4===t[0].width&&t[0].image?r("ImageWithTextOverlay",{key:s,attrs:{item:t,index:s,progress:e.progress[s]||0}}):4===t[0].width&&t[0].text||t[0].video?r("FullWidthBlock",{key:s,attrs:{item:t[0]}}):1===t[0].width?r("StickyRight",{key:s,attrs:{item:t,index:s,progress:e.progress[s]}}):3===t[0].width?r("StickyLeft",{key:s,attrs:{item:t,index:s,progress:e.progress[s]}}):t[0].scrub?r("VideoScrubbingFullWidth",{key:s,attrs:{progress:e.progress[s],"base-url":t[0].scrub}}):e._e()]}),e._v(" "),r("div",{attrs:{id:"scrolly-bottom-nav"}}),e._v(" "),r("div",{attrs:{id:"scrolly-footer"}})],2)],1)},staticRenderFns:[]};var A=r("VU/8")(U,D,!1,function(e){r("SD01")},null,null).exports;s.default.use(n.a),new s.default({vuetify:new n.a,render:function(e){return e(A)}}).$mount("#app")},Q7E0:function(e,t){},SD01:function(e,t){},Vqlw:function(e,t){},badz:function(e,t){},ebUR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.88562cb9749876c328c1.js.map