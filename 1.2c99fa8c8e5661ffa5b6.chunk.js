webpackJsonp([1],{TYKr:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=function(){},i=function(){function l(l,n){this.vcRef=l,this.renderer=n}return Object.defineProperty(l.prototype,"visible",{set:function(l){var n=this.vcRef.element.nativeElement.previousElementSibling;n&&(l?n.classList.remove("hide"):n.classList.add("hide"))},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(l){for(var n in console.log(l),l)if(l.hasOwnProperty(n)){var e=l[n];e.firstChange||(this.visible=e.currentValue.show)}},l.prototype.ngOnInit=function(){var l=this.renderer.createElement("div");if(l.classList.add("busy-indicator","hide"),this.appBusy.fullPageBackdrop)l.classList.add("full-page");else{var n=this.vcRef.element.nativeElement,e=n.scrollHeight,t=n.scrollWidth;l.style.height=e+"px",l.style.width=t+"px",l.style.backgroundSize=Math.round(e<t?.2*e:.2*t)+"px"}this.appBusy.backdropColor&&(l.style.backgroundColor=this.appBusy.backdropColor);var u=this.renderer.createElement("div");u.classList.add("spinner"),this.appBusy.color&&(u.style.backgroundColor=this.appBusy.color),this.renderer.appendChild(l,u),this.renderer.insertBefore(this.vcRef.element.nativeElement.parentElement,l,this.vcRef.element.nativeElement),this.visible=this.appBusy.show||!1},l}(),o=e("uc9p"),s=e("oqco"),r=e("9iV4"),d=function(){function l(l){this.http=l}return l.prototype.getBEData=function(){return this.http.get("/api/posts")},l}(),p=e("jVFd"),a=function(){function l(l,n){this.service=l,this.appState=n,this.showBusy=!0}return l.prototype.ngOnInit=function(){var l=this;this.appState.counterVal.subscribe(function(n){console.log("data",n),l.counterValue=n})},l.prototype.ngAfterViewInit=function(){var l=this;s.debug("debug"),s.warn("warning!"),this.showBusy=!0,this.posts$=this.service.getBEData().subscribe(function(n){s.debug(n),l.showBusy=!1})},l.prototype.toggle=function(){this.appState.incCounter()},l}(),c=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](2,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,['Viewable List of Experts here.. accessible to permission "listExperts"'])),(l()(),t["\u0275ted"](-1,null,["\n    "]))],null,null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](2,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,['Delete Expert button accessible only via permission "deleteExpert"'])),(l()(),t["\u0275ted"](-1,null,["\n    "]))],null,null)}function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](2,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Only Guest can see this!! \n        You seem to be New here.. Please Sign up to edit the expert!!\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "]))],null,null)}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n\n  "])),(l()(),t["\u0275eld"](2,16777216,null,null,3,"div",[["style","height: 100px; width:400px; border:1px solid #666;"]],null,null,null,null,null)),t["\u0275did"](3,606208,null,0,i,[t.ViewContainerRef,t.Renderer2],{appBusy:[0,"appBusy"]},null),t["\u0275pod"](4,{color:0,show:1,backdropColor:2}),(l()(),t["\u0275ted"](-1,null,["\n    This section should be hidden behind busy indication!\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  \n  "])),(l()(),t["\u0275eld"](7,0,null,null,1,"h2",[["style","padding: 10px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](10,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggle()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Increase Counter (global) and get notified"])),(l()(),t["\u0275ted"](-1,null,["\n\n  "])),(l()(),t["\u0275eld"](13,0,null,null,12,"div",[["style","height: 2000px; width:400px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    Really long content.. height of 2000px in home.component.html.\n    "])),(l()(),t["\u0275and"](16777216,null,null,2,null,m)),t["\u0275did"](16,212992,null,0,o.NgxPermissionsDirective,[o.NgxPermissionsService,o.NgxRolesService,t.ViewContainerRef,t.TemplateRef],{ngxPermissionsOnly:[0,"ngxPermissionsOnly"]},null),t["\u0275pad"](17,1),(l()(),t["\u0275ted"](-1,null,["\n    \n    "])),(l()(),t["\u0275and"](16777216,null,null,2,null,h)),t["\u0275did"](20,212992,null,0,o.NgxPermissionsDirective,[o.NgxPermissionsService,o.NgxRolesService,t.ViewContainerRef,t.TemplateRef],{ngxPermissionsOnly:[0,"ngxPermissionsOnly"]},null),t["\u0275pad"](21,1),(l()(),t["\u0275ted"](-1,null,["\n   \n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](24,212992,null,0,o.NgxPermissionsDirective,[o.NgxPermissionsService,o.NgxRolesService,t.ViewContainerRef,t.TemplateRef],{ngxPermissionsExcept:[0,"ngxPermissionsExcept"]},null),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,3,0,l(n,4,0,"blue",n.component.showBusy,"#ff99ff88")),l(n,16,0,l(n,17,0,"listExperts")),l(n,20,0,l(n,21,0,"deleteExpert")),l(n,24,0,"editExpert")},function(l,n){l(n,8,0,n.component.counterValue)})}var v=t["\u0275ccf"]("app-home",a,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,g,c)),t["\u0275did"](1,4308992,null,0,a,[d,p.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=e("Un6q"),b=e("Yh0i"),x=e("7POh"),R=e("UHIZ"),E=function(){};e.d(n,"HomeModuleNgFactory",function(){return C});var C=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[v]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,y.NgLocalization,y.NgLocaleLocalization,[t.LOCALE_ID,[2,y["\u0275a"]]]),t["\u0275mpd"](4608,r.h,r.m,[y.DOCUMENT,t.PLATFORM_ID,r.k]),t["\u0275mpd"](4608,r.n,r.n,[r.h,r.l]),t["\u0275mpd"](5120,r.a,function(l){return[l]},[r.n]),t["\u0275mpd"](4608,r.j,r.j,[]),t["\u0275mpd"](6144,r.i,null,[r.j]),t["\u0275mpd"](4608,r.g,r.g,[r.i]),t["\u0275mpd"](6144,r.b,null,[r.g]),t["\u0275mpd"](5120,r.f,r.o,[r.b,[2,r.a]]),t["\u0275mpd"](4608,r.c,r.c,[r.f]),t["\u0275mpd"](4608,p.a,p.a,[]),t["\u0275mpd"](4608,b.a,b.a,[r.c]),t["\u0275mpd"](4608,d,d,[r.c]),t["\u0275mpd"](512,y.CommonModule,y.CommonModule,[]),t["\u0275mpd"](512,r.e,r.e,[]),t["\u0275mpd"](512,r.d,r.d,[]),t["\u0275mpd"](512,o.NgxPermissionsModule,o.NgxPermissionsModule,[]),t["\u0275mpd"](512,x.a,x.a,[]),t["\u0275mpd"](512,R.RouterModule,R.RouterModule,[[2,R["\u0275a"]],[2,R.Router]]),t["\u0275mpd"](512,E,E,[]),t["\u0275mpd"](512,u,u,[]),t["\u0275mpd"](256,r.k,"XSRF-TOKEN",[]),t["\u0275mpd"](256,r.l,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,R.ROUTES,function(){return[[{path:"",component:a}]]},[])])})}});