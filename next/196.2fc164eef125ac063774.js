(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return Q}));var i=n("An66"),c=n("3kIJ"),o=n("1VvW"),a=n("SVIu"),s=n("l4xa"),r=n("Qq0t"),l=n("dvRg"),u=n("kZht"),d=n("4C5Q");const p=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],{LARGE:m,NORMAL:f}=function(){const e=[],t=[],n=new Set(p);for(const i in d)n.has(i)||"tuiCoreIcons"===i||"tuiKitIcons"===i||(i.includes("Large")?e.push(i):t.push(i));return{LARGE:e,NORMAL:t}}(),g={"Description and examples":{[`Normal interface icons / 16px (${f.length})`]:f,[`Large interface icons / 24px (${m.length})`]:m,[`Payment systems (${p.length})`]:p}},b=new u.InjectionToken("Icons",{factory:()=>g});var h=n("OZlg"),y=n("e0eB"),v=n("yZWP"),C=n("D57K"),O=n("wdR4"),x=n("GdrL"),S=n("71sB"),I=n("RlDx"),M=n("2wTY"),w=n("gEyt"),E=n("buny"),k=n("zV1d");let P=(()=>{class e{transform(e,t){return t.length>1&&Object(s.I)(e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u["\u0275\u0275definePipe"]({name:"iconHighlight",type:e,pure:!0}),e})();var $,T,A;$=$localize`:␟fd963df1746a55d8fa0fc7610df4df991f847660␟1715668600566441269: Search by name
`,T=$localize`:␟c8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2␟696084215486677597: Input icon name to highlight
`,A=$localize`:␟3667a49e915032e25a65bf86bb7c9300aec2ec9f␟8631333072499018459: ${"\ufffd0\ufffd"}:INTERPOLATION: `;const L=["title",$localize`:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`];function _(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",5),u["\u0275\u0275i18nAttributes"](1,L),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit;return u["\u0275\u0275nextContext"](2).copyPath(n)})),u["\u0275\u0275pipe"](2,"iconHighlight"),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=u["\u0275\u0275nextContext"](2);u["\u0275\u0275classProp"]("icon_highlighted",u["\u0275\u0275pipeBind2"](2,4,e,n.search)),u["\u0275\u0275property"]("icon",e),u["\u0275\u0275attribute"]("aria-label",e)}}function z(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275elementStart"](1,"h2",0),u["\u0275\u0275i18n"](2,A),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"div",3),u["\u0275\u0275template"](4,_,3,7,"button",4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275i18nExp"](e),u["\u0275\u0275i18nApply"](2),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiForAsyncOf",n.iconsValues[e])}}let F=(()=>{class e{constructor(e,t){this.clipboard=e,this.alertService=t,this.iconsValues={},this.keys=[],this.search=""}set icons(e){this.keys=Object.keys(e),this.iconsValues=e}copyPath(e){this.clipboard.copy(e),this.alertService.open(`The name ${e} copied`,{status:"success"}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](O.b),u["\u0275\u0275directiveInject"](r.Y))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["icons-group"]],inputs:{icons:"icons"},decls:5,vars:3,consts:[[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[4,"tuiForAsync","tuiForAsyncOf"],[1,"icons"],["tuiIconButton","","type","button","size","m","appearance","icon","class","icon",3,"icon_highlighted","icon","click",4,"tuiForAsync","tuiForAsyncOf",6,"title"],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"h2",0),u["\u0275\u0275i18n"](1,$),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-input",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search=e})),u["\u0275\u0275i18n"](3,T),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,z,5,2,"ng-container",2)),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",t.search),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiForAsyncOf",t.keys))},directives:[x.a,S.a,I.a,M.b,w.b,c.NgControlStatus,c.NgModel,E.a,k.a],pipes:[P],styles:[".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:1.875rem 0 .75rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem}.icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}.icon_highlighted[_ngcontent-%COMP%]{transform:scale(1.6);filter:drop-shadow(.125rem .0625rem 0 var(--tui-primary))}"],changeDetection:0}),Object(C.b)([Object(s.td)()],e.prototype,"icons",null),e})();var j=n("iyc4"),N=n("ONKv");function V(){return e=>e.startsWith("icons8::")?`assets/icons8/${e.replace("icons8::","")}.svg`:e}let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["customization-icons-example"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:r.N,useFactory:V}])],decls:10,vars:0,consts:[[1,"icons8"],[1,"icons8-label","icons8-label-violet"],["src","icons8::android",1,"icons8-icon","icons8-violet"],["src","icons8::ios",1,"icons8-icon","icons8-violet"],[1,"icons8-label","icons8-label-blue"],["src","icons8::android",1,"icons8-icon","icons8-blue"],["src","icons8::ios",1,"icons8-icon","icons8-blue"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"p",1),u["\u0275\u0275text"](2,"Violet color"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](3,"tui-svg",2),u["\u0275\u0275element"](4,"tui-svg",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"div",0),u["\u0275\u0275elementStart"](6,"p",4),u["\u0275\u0275text"](7,"Blue color"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](8,"tui-svg",5),u["\u0275\u0275element"](9,"tui-svg",6),u["\u0275\u0275elementEnd"]())},directives:[N.a],styles:[".icons8[_ngcontent-%COMP%]{margin-bottom:1.5rem}.icons8-icon[_ngcontent-%COMP%]{width:4rem;height:4rem}.icons8-label[_ngcontent-%COMP%]{font-weight:700;display:inline-block;padding:.25rem .625rem;color:#fff;border-radius:.25rem}.icons8-label-violet[_ngcontent-%COMP%]{background:#a340f1}.icons8-label-blue[_ngcontent-%COMP%]{background:#316df6}.icons8-violet[_ngcontent-%COMP%]{color:#a340f1}.icons8-blue[_ngcontent-%COMP%]{color:#316df6}"]}),e})();const B=["header",$localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`];var K;function D(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,K),u["\u0275\u0275element"](2,"a",4),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](3,"icons-group",5)),2&e){const e=u["\u0275\u0275nextContext"]().$implicit,t=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("icons",t.icons[e])}}function G(e,t){1&e&&u["\u0275\u0275template"](0,D,4,1,"ng-template",3),2&e&&u["\u0275\u0275property"]("pageTab",t.$implicit)}K=$localize`:␟839dd4cb6fbcbf0e53e486e5aaa3fa92826a5fe6␟1756857398819821600: These icons can be used by name in ${"\ufffd#2\ufffd"}:START_LINK: Svg ${"\ufffd/#2\ufffd"}:CLOSE_LINK: component and all Taiga UI component accepting icons as input. `;const Y=["heading",$localize`:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`];function H(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-example",6),u["\u0275\u0275i18nAttributes"](1,Y),u["\u0275\u0275element"](2,"customization-icons-example"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("content",e.example1)}}let J=(()=>{class e{constructor(e){this.icons=e,this.keys=Object.keys(this.icons),this.example1={TypeScript:n.e(1682).then(n.bind(null,"a37g")),HTML:n.e(1684).then(n.bind(null,"tKQf")),LESS:n.e(1683).then(n.bind(null,"UtTG"))}}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](b))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["icons"]],decls:4,vars:1,consts:[[6,"header"],[4,"ngFor","ngForOf"],["pageTab","SVG Processing"],[3,"pageTab"],["tuiLink","","routerLink","/components/svg"],[3,"icons"],["id","base","description","You can customize the path to your icons and inherit color",3,"content",6,"heading"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,B),u["\u0275\u0275template"](2,G,1,1,void 0,1),u["\u0275\u0275template"](3,H,3,1,"ng-template",2),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",t.keys))},directives:[h.a,i.s,y.a,v.a,o.e,F,j.a,R],encapsulation:2,changeDetection:0}),e})(),Q=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.ReactiveFormsModule,c.FormsModule,i.c,r.yb,r.Vb,l.pb,l.cb,r.ab,r.Yb,r.tb,a.m,o.f.forChild(Object(a.u)(J)),s.wb]]}),e})()}}]);