"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12831],{12831:(F,c,i)=>{i.r(c),i.d(c,{ExampleTuiIsPresentModule:()=>Y});var u=i(12057),f=i(24751),l=i(33982),r=i(29851),a=i(50259),p=i(3497),m=i(55908),t=i(74788),x=i(88331),T=i(37159),g=i(66596),y=i(57068),b=i(79765),v=i(25917),I=(i(77393),i(18891),i(55197)),P=i(20509);class d{constructor(e){this.delayDurationSelector=e}call(e,n){return n.subscribe(new A(e,this.delayDurationSelector))}}class A extends I.L{constructor(e,n){super(e),this.delayDurationSelector=n,this.completed=!1,this.delayNotifierSubscriptions=[],this.index=0}notifyNext(e,n,o,h,z){this.destination.next(e),this.removeSubscription(z),this.tryComplete()}notifyError(e,n){this._error(e)}notifyComplete(e){const n=this.removeSubscription(e);n&&this.destination.next(n),this.tryComplete()}_next(e){const n=this.index++;try{const o=this.delayDurationSelector(e,n);o&&this.tryDelay(o,e)}catch(o){this.destination.error(o)}}_complete(){this.completed=!0,this.tryComplete(),this.unsubscribe()}removeSubscription(e){e.unsubscribe();const n=this.delayNotifierSubscriptions.indexOf(e);return-1!==n&&this.delayNotifierSubscriptions.splice(n,1),e.outerValue}tryDelay(e,n){const o=(0,P.D)(this,e,n);o&&!o.closed&&(this.destination.add(o),this.delayNotifierSubscriptions.push(o))}tryComplete(){this.completed&&0===this.delayNotifierSubscriptions.length&&this.destination.complete()}}var U=i(40939),D=i(76189),M=i(21188);function N(s,e){if(1&s&&(t.TgZ(0,"div"),t._uU(1," count is "),t.TgZ(2,"code"),t._uU(3),t.ALo(4,"json"),t.qZA(),t.qZA()),2&s){const n=t.oxw().tuiLet;t.xp6(3),t.Oqu(t.lcZ(4,1,n))}}function O(s,e){if(1&s&&(t.TgZ(0,"div"),t._uU(1," count is "),t.TgZ(2,"code"),t._uU(3),t.ALo(4,"json"),t.qZA(),t._uU(5," while it's loading "),t.qZA()),2&s){const n=t.oxw().tuiLet;t.xp6(3),t.Oqu(t.lcZ(4,1,n))}}function j(s,e){if(1&s&&(t.ynx(0),t.YNc(1,N,5,3,"div",2),t.ALo(2,"tuiIsPresent"),t.YNc(3,O,6,3,"ng-template",null,3,t.W1O),t.BQk()),2&s){const n=e.tuiLet,o=t.MAs(4);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,n))("ngIfElse",o)}}let J=(()=>{class s{constructor(){this.loadCountSubject=new b.xQ,this.count$=(0,v.of)(0).pipe(function(s,e){return n=>n.lift(new d(s))}(()=>this.loadCountSubject))}loadCount(){this.loadCountSubject.next(),this.loadCountSubject.complete()}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["tui-is-present-example1"]],decls:4,vars:3,consts:[[4,"tuiLet"],["tuiButton","","size","m","type","button",1,"tui-space_top-4",3,"click"],[4,"ngIf","ngIfElse"],["loading",""]],template:function(n,o){1&n&&(t.YNc(0,j,5,4,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"button",1),t.NdJ("click",function(){return o.loadCount()}),t._uU(3," Load count\n"),t.qZA()),2&n&&t.Q6J("tuiLet",t.lcZ(1,1,o.count$))},directives:[U.L,D.v,u.O5],pipes:[u.Ov,M.j,u.Ts],encapsulation:2,changeDetection:0}),s})();var Q=i(76349);function B(s,e){if(1&s&&(t._uU(0," Pipe wrapper for "),t.TgZ(1,"a",3),t.TgZ(2,"code"),t._uU(3,"IsPresent"),t.qZA(),t.qZA(),t._uU(4," function "),t.TgZ(5,"tui-doc-example",4),t._UZ(6,"tui-is-present-example1"),t.qZA()),2&s){const n=t.oxw();t.xp6(5),t.Q6J("content",n.example1)}}function V(s,e){if(1&s&&(t.TgZ(0,"ol",5),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiIsPresentPipeModule"),t.qZA(),t._uU(6," into a module where you want to use our pipe "),t.qZA(),t._UZ(7,"tui-doc-code",6),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Use pipe in template:"),t.qZA(),t._UZ(11,"tui-doc-code",7),t.qZA(),t.qZA()),2&s){const n=t.oxw();t.xp6(7),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let W=(()=>{class s{constructor(){this.exampleModule=i.e(47322).then(i.t.bind(i,47322,17)),this.exampleHtml=i.e(78400).then(i.t.bind(i,78400,17)),this.example1={TypeScript:i.e(43080).then(i.t.bind(i,43080,17)),HTML:i.e(65046).then(i.t.bind(i,65046,17))}}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["example-tui-is-present"]],decls:3,vars:0,consts:[["header","IsPresent","package","CDK","type","pipes"],["pageTab",""],["pageTab","Setup"],["tuiLink","","routerLink","/utils/miscellaneous","fragment","isPresent"],["id","base","heading","Basic",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,o){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,B,7,1,"ng-template",1),t.YNc(2,V,12,2,"ng-template",2),t.qZA())},directives:[x.q,T.n,g.V,l.yS,y.f,J,Q.c],encapsulation:2,changeDetection:0}),s})(),Y=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[u.ez,r.fV,l.Bz.forChild((0,r.Ve)(W)),f.UX,a.TuiIsPresentPipeModule,p.TuiLinkModule,m.TuiSelectModule,m.TuiDataListWrapperModule,p.TuiButtonModule,a.TuiLetModule]]}),s})()}}]);