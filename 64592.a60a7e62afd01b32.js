(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64592],{64592:(n,t,e)=>{e.r(t),e.d(t,{default:()=>L});var o=e(42436);const i=["electron","cirrus","maestro","mastercard","mir","visa","union-pay","jcb","pay-pal","amex","diners-club","discover","humo","ru-pay","uzcard","verve","apple-pay","google-pay","samsung-pay","world-pay","ali-pay","amazon-pay","android-pay"],c=["@tui.electron-mono","@tui.maestro-mono","@tui.mastercard-mono","@tui.mir-mono","@tui.visa-mono"];var r=e(51517),s=e(4594),a=e(35548),u=e(54795),l=e(66094),p=e(39050),g=e(44268),h=e(60050),f=e(81774),m=e(51160),d=e(24815),x=e(75123),y=e(13591);let T=(()=>{var n;class t{constructor(){this.template=(0,a.f3M)(a.Rgc)}}return(n=t).ɵfac=function(t){return new(t||n)},n.ɵdir=a.lG2({type:n,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"},standalone:!0}),t})();var v=e(21805),Z=e(7911),C=e(46953),O=e(10188),w=e(85454);const _=function(n,t,e){return{icon:n,group:t,copyPath:e}};function b(n,t){if(1&n&&a.GkF(0,9),2&n){const n=t.$implicit,e=a.oxw(3).$implicit,o=a.oxw();a.Q6J("ngTemplateOutlet",(null==o.iconGroup?null:o.iconGroup.template)||null)("ngTemplateOutletContext",a.kEZ(2,_,n,e,o.copyPath))}}function k(n,t){if(1&n&&(a.ynx(0),a.TgZ(1,"div",5)(2,"h2",0),a._uU(3),a.qZA(),a.TgZ(4,"tui-badge",6),a._uU(5),a.qZA()(),a.TgZ(6,"div",7),a.YNc(7,b,1,6,"ng-container",8),a.qZA(),a.BQk()),2&n){const n=a.oxw().ngIf,t=a.oxw().$implicit,e=a.oxw();a.xp6(3),a.hij(" ",t," "),a.xp6(2),a.hij(" ",n.length.toString()," "),a.xp6(1),a.Udp("--tui-text-primary",e.color),a.xp6(1),a.Q6J("ngForOf",n)}}function A(n,t){if(1&n&&(a.ynx(0),a.YNc(1,k,8,5,"ng-container",4),a.BQk()),2&n){const n=t.ngIf;a.xp6(1),a.Q6J("ngIf",n.length)}}function M(n,t){if(1&n&&(a.ynx(0),a.YNc(1,A,2,1,"ng-container",4),a.ALo(2,"tuiFilter"),a.ALo(3,"async"),a.BQk()),2&n){const n=t.$implicit,e=a.oxw();let o;a.xp6(1),a.Q6J("ngIf",a.Dn7(2,1,e.icons[n],e.matcher,null!==(o=a.lcZ(3,5,e.search$))&&void 0!==o?o:""))}}const P=["*"];let I=(()=>{var n;class t{constructor(){this.clipboard=(0,a.f3M)(r.TU),this.alerts=(0,a.f3M)(o.TuiAlertService),this.route=(0,a.f3M)(p.gz),this.router=(0,a.f3M)(p.F0),this.destroyRef=(0,a.f3M)(a.ktI),this.matcher=g.TUI_DEFAULT_MATCHER,this.control=new l.NI(""),this.search$=this.route.queryParams.pipe((0,m.U)((n=>n.search??"")),(0,d.x)()),this.icons={},this.color=null,this.copyPath=n=>{this.clipboard.copy(n),this.alerts.open(`The name ${n} copied`,{status:"success"}).subscribe()}}ngOnInit(){this.control.patchValue(this.route.snapshot.queryParams.search??""),this.control.valueChanges.pipe((0,x.b)(500),(0,m.U)((n=>n||"")),(0,y.h)((n=>n.length>2||0===n.length)),(0,u.sL)(this.destroyRef)).subscribe((n=>{this.router.navigate([],{queryParams:{search:n}})}))}}return(n=t).ɵfac=function(t){return new(t||n)},n.ɵcmp=a.Xpm({type:n,selectors:[["icons-group"]],contentQueries:function(n,t,e){if(1&n&&a.Suo(e,T,5),2&n){let n;a.iGM(n=a.CRH())&&(t.iconGroup=n.first)}},inputs:{icons:"icons",color:"color"},standalone:!0,features:[a.jDz],ngContentSelectors:P,decls:8,vars:6,consts:[[1,"title"],["tuiAutoFocus","","tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"formControl","tuiTextfieldCleaner","tuiTextfieldLabelOutside"],[4,"ngFor","ngForOf"],[1,"nothing","tui-space_top-8"],[4,"ngIf"],[1,"header-group"],["appearance","success","size","m",1,"badge"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,t){1&n&&(a.F$t(),a.TgZ(0,"h2",0),a.Hsn(1),a.qZA(),a.TgZ(2,"tui-input",1),a._uU(3," Input icon name to highlight\n"),a.qZA(),a.YNc(4,M,4,7,"ng-container",2),a.ALo(5,"tuiKeys"),a.TgZ(6,"div",3),a._uU(7,"Nothing found"),a.qZA()),2&n&&(a.xp6(2),a.Q6J("formControl",t.control)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),a.xp6(2),a.Q6J("ngForOf",a.lcZ(5,4,t.icons)))},dependencies:[f.QfL,v.K,Z.w,g.TuiAutoFocus,o.TuiHintOptionsDirective,l.UX,l.JJ,l.oH,o.TuiTextfieldOptionsDirective,f.cnw,C.b,O.x,w.s,s.sg,g.TuiKeysPipe,s.O5,g.TuiFilterPipe,s.Ov,h.TuiBadge,s.tP],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem;justify-content:center}.nothing[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem;justify-content:center}.icons[_ngcontent-%COMP%] + .nothing[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),t})();var U=e(60666);function q(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"tui-icon",10),a.NdJ("click",(function(){a.CHM(n);const t=a.oxw(),e=t.icon,o=t.copyPath;return a.KtG(o(e))})),a.qZA()}if(2&n){const n=a.oxw().icon;a.Q6J("icon",n)}}function F(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"img",11),a.NdJ("click",(function(){a.CHM(n);const t=a.oxw(),e=t.icon,o=t.copyPath;return a.KtG(o(e))})),a.ALo(1,"tuiIcon"),a.qZA()}if(2&n){const n=a.oxw().icon;a.Q6J("src",a.lcZ(1,1,n),a.LSH)}}function Q(n,t){if(1&n&&(a.TgZ(0,"div",7),a.YNc(1,q,1,1,"tui-icon",8),a.YNc(2,F,2,3,"img",9),a.qZA()),2&n){const n=t.group;a.xp6(1),a.Q6J("ngIf","Mono"===n),a.xp6(1),a.Q6J("ngIf","Colored"===n)}}function J(n,t){if(1&n&&(a.TgZ(0,"h2",2),a._uU(1,"Default icons pack"),a.qZA(),a.TgZ(2,"p"),a._uU(3," Open source theme for Taiga UI uses processed "),a.TgZ(4,"a",3),a._uU(5," Lucide Icons "),a.qZA(),a._uU(6," . You can browse all the icons from this pack and find the one that suits you "),a.TgZ(7,"a",4),a._uU(8," here "),a.qZA(),a._uU(9," . "),a.qZA(),a.TgZ(10,"p"),a._uU(11," In addition to the main icon pack Taiga has several custom icons related to payment systems. You can see them below: "),a.qZA(),a.TgZ(12,"icons-group",5),a._uU(13," Custom icons "),a.YNc(14,Q,3,2,"ng-template",6),a.qZA()),2&n){const n=a.oxw();a.xp6(12),a.Q6J("icons",n.icons)}}const L=(()=>{var n;class t{constructor(){this.icons={Mono:c,Colored:i}}}return(n=t).ɵfac=function(t){return new(t||n)},n.ɵcmp=a.Xpm({type:n,selectors:[["ng-component"]],standalone:!0,features:[a.jDz],decls:2,vars:0,consts:[["header","Icons","type","components"],["pageTab","Overview"],[1,"title"],["href","https://lucide.dev/","rel","noreferrer","target","_blank","tuiLink",""],["href","https://lucide.dev/icons/","rel","noreferrer","target","_blank","tuiLink",""],[3,"icons"],["iconGroup",""],[1,"icon-place"],["class","icon",3,"icon","click",4,"ngIf"],["class","icon",3,"src","click",4,"ngIf"],[1,"icon",3,"icon","click"],[1,"icon",3,"src","click"]],template:function(n,t){1&n&&(a.TgZ(0,"tui-doc-page",0),a.YNc(1,J,15,1,"ng-template",1),a.qZA())},dependencies:[U.xR,U.Cn,o.TuiLink,s.O5,o.TuiIcon,o.TuiIconPipe,I,T],styles:[".icon-place[_ngcontent-%COMP%]{min-width:4.25rem;min-height:4.25rem;display:flex;align-items:center;justify-content:center;padding:.125rem}.icon[_ngcontent-%COMP%]{transition:all .5s ease-in;box-shadow:0 .05rem .5rem #3333;will-change:transform,box-shadow;border-radius:.625rem;width:var(--tui-height-m);height:var(--tui-height-m);border:.5rem solid transparent;cursor:pointer}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.5);background:var(--tui-background-base);z-index:1}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover{transition:.5s}.icon[_ngcontent-%COMP%]:not(.t-appearance)     [tuiWrapper][data-appearance=icon]{opacity:1!important}"],changeDetection:0}),t})()}}]);