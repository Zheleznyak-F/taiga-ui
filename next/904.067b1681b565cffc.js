(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[904],{904:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiRadioModule:()=>z});var n=i(88692),o=i(69900),a=i(64500),u=i(53222),l=i(73588),r=i(61917),d=i(64537),c=i(79121),s=i(83074),p=i(43560),m=i(93525),g=i(38868),f=i(31464),h=i(96479);function Z(e,t){if(1&e&&(d.TgZ(0,"div",1),d._UZ(1,"input",2)(2,"input",3)(3,"input",4)(4,"input",5)(5,"input",6)(6,"input",6),d.qZA()),2&e){const e=t.$implicit,i=t.first,n=d.oxw();d.ekj("wrapper_web","web"===e),d.Q6J("tuiPlatform",e),d.xp6(1),d.Q6J("size",n.getSize(i)),d.xp6(1),d.Q6J("disabled",!0)("size",n.getSize(i)),d.xp6(1),d.Q6J("size",n.getSize(i)),d.xp6(1),d.Q6J("disabled",!0)("size",n.getSize(i)),d.xp6(1),d.Q6J("formControl",n.invalidTrue)("size",n.getSize(i))("value",!0),d.xp6(1),d.Q6J("formControl",n.invalidFalse)("size",n.getSize(i))("value",!0)}}let v=(()=>{var e;class t{constructor(){this.platforms=["web","web","android","ios"],this.invalidTrue=new o.NI(!0,(()=>({invalid:!0}))),this.invalidFalse=new o.NI(!1,(()=>({invalid:!0})))}ngOnInit(){this.invalidTrue.markAsTouched(),this.invalidFalse.markAsTouched()}getSize(e){return e?"m":"s"}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-radio-example-1"]],decls:1,vars:1,consts:[["class","wrapper",3,"wrapper_web","tuiPlatform",4,"ngFor","ngForOf"],[1,"wrapper",3,"tuiPlatform"],["ngModel","checked","tuiRadio","","type","radio","value","checked",3,"size"],["ngModel","checked","tuiRadio","","type","radio","value","checked",3,"disabled","size"],["tuiRadio","","type","radio",3,"size"],["ngModel","checked","tuiRadio","","type","radio",3,"disabled","size"],["tuiRadio","","type","radio",3,"formControl","size","value"]],template:function(e,t){1&e&&d.YNc(0,Z,7,15,"div",0),2&e&&d.Q6J("ngForOf",t.platforms)},dependencies:[o.Fj,o._,o.JJ,o.On,o.oH,n.sg,f.b,h._],styles:["[_nghost-%COMP%]{display:flex;--tui-accent: var(--tui-info-fill)}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;flex:1;gap:1rem;padding:1rem}.wrapper_web[_ngcontent-%COMP%]{border:1px solid var(--tui-base-04);border-left-width:0}.wrapper_web[_ngcontent-%COMP%]:first-child{border-right-width:0;border-left-width:1px}"],changeDetection:0}),t})();var x=i(4425),b=i(44495),_=i(99443);const M=function(){return{test:"value"}},A=function(){return{test:"test"}},y=function(){return{test:"item"}};let T=(()=>{var e;class t{constructor(){this.value=null,this.identityMatcher=(e,t)=>e?.test===t?.test}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-radio-example-2"]],decls:14,vars:12,consts:[["tuiButton","",3,"click"],["tuiLabel",""],["name","test","tuiRadio","","type","radio",3,"identityMatcher","value","ngModel","ngModelChange"]],template:function(e,t){1&e&&(d.TgZ(0,"button",0),d.NdJ("click",(function(){return t.value={test:"value"}})),d._uU(1," Set copy\n"),d.qZA(),d.TgZ(2,"p")(3,"label",1)(4,"input",2),d.NdJ("ngModelChange",(function(e){return t.value=e})),d.qZA(),d._uU(5," value "),d.qZA()(),d.TgZ(6,"p")(7,"label",1)(8,"input",2),d.NdJ("ngModelChange",(function(e){return t.value=e})),d.qZA(),d._uU(9," test "),d.qZA()(),d.TgZ(10,"p")(11,"label",1)(12,"input",2),d.NdJ("ngModelChange",(function(e){return t.value=e})),d.qZA(),d._uU(13," item "),d.qZA()()),2&e&&(d.xp6(4),d.Q6J("identityMatcher",t.identityMatcher)("value",d.DdM(9,M))("ngModel",t.value),d.xp6(4),d.Q6J("identityMatcher",t.identityMatcher)("value",d.DdM(10,A))("ngModel",t.value),d.xp6(4),d.Q6J("identityMatcher",t.identityMatcher)("value",d.DdM(11,y))("ngModel",t.value))},dependencies:[o.Fj,o._,o.JJ,o.On,h._,x.m,b.X,_.Q],encapsulation:2,changeDetection:0}),t})();var w=i(25167);function U(e,t){1&e&&(d.TgZ(0,"tui-notification",3),d._uU(1," This code is "),d.TgZ(2,"strong"),d._uU(3,"experimental"),d.qZA(),d._uU(4," and is a subject to change. Expect final solution to be shipped in the next major version "),d.qZA(),d.TgZ(5,"p"),d._uU(6,"A radio component that is able to imitate native control on mobile platforms."),d.qZA(),d.TgZ(7,"tui-notification",3),d._uU(8," Due to internal Angular implementation of radio buttons, you are required to add "),d.TgZ(9,"code"),d._uU(10,"name"),d.qZA(),d._uU(11," attribute to your "),d.TgZ(12,"code"),d._uU(13,"input"),d.qZA(),d._uU(14," tag, unless you are using "),d.TgZ(15,"code"),d._uU(16,"formControlName"),d.qZA()(),d.TgZ(17,"tui-doc-example",4),d.ALo(18,"tuiExample"),d.TgZ(19,"tui-notification",5),d._uU(20," Use "),d.TgZ(21,"code"),d._uU(22,"--tui-accent"),d.qZA(),d._uU(23," CSS variable to customize color of native control emulation "),d.qZA(),d._UZ(24,"tui-radio-example-1"),d.qZA(),d.TgZ(25,"tui-doc-example",6),d.ALo(26,"tuiExample"),d._UZ(27,"tui-radio-example-2"),d.qZA()),2&e&&(d.xp6(17),d.Q6J("content",d.xi3(18,2,1,"html,ts")),d.xp6(8),d.Q6J("content",d.xi3(26,5,2,"html,ts")))}function q(e,t){if(1&e&&(d.TgZ(0,"ol",7)(1,"li")(2,"p"),d._uU(3,"Import module:"),d.qZA(),d._UZ(4,"tui-doc-code",8),d.qZA(),d.TgZ(5,"li")(6,"p"),d._uU(7,"Add to the template:"),d.qZA(),d._UZ(8,"tui-doc-code",9),d.qZA()()),2&e){const e=d.oxw();d.xp6(4),d.Q6J("code",e.exampleModule),d.xp6(4),d.Q6J("code",e.exampleHtml)}}let J=(()=>{var e;class t{constructor(){this.exampleModule=i.e(4530).then(i.t.bind(i,4530,17)),this.exampleHtml=i.e(83386).then(i.t.bind(i,83386,17))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["example-radio"]],decls:3,vars:0,consts:[["header","Radio","package","EXPERIMENTAL","type","experimental"],["pageTab",""],["pageTab","Setup"],["status","warning"],["id","platforms","heading","Platforms",3,"content"],[1,"tui-space_bottom-4"],["id","identity","heading","Identity matcher",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,U,28,8,"ng-template",1),d.YNc(2,q,9,2,"ng-template",2),d.qZA())},dependencies:[c.L,s.c,p.q,m.n,g.f,v,T,w.I],encapsulation:2,changeDetection:0}),t})();i(41841);let z=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[o.u5,o.UX,n.ez,l.TuiNotificationModule,u.TuiPlatformModule,r._M,(0,a.bG)(J),r.fN]}),t})()}}]);