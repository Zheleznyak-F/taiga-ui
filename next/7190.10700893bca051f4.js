(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7190],{7190:(e,o,t)=>{t.r(o),t.d(o,{ExampleTuiCopyProcessorModule:()=>b});var n=t(88692),s=t(78942),c=t(18241),r=t(11205),p=t(68392),i=t(50675),u=t(64537),a=t(83074),l=t(43560),d=t(93525),m=t(38868),h=t(78129),g=t(16753),y=t(13735),f=t(93157);let x=(()=>{class e{constructor(e,o){this.format=e,this.alerts=o,this.value=12345.67,this.numberProcessor=e=>e.replace(this.format.decimalSeparator,".").replace(new RegExp(this.format.thousandSeparator,"g"),""),this.textProcessor=e=>e.toUpperCase()}onCopy(e){var o,t;this.alerts.open(null!==(t=null===(o=e.clipboardData)||void 0===o?void 0:o.getData("text/plain"))&&void 0!==t?t:"").subscribe()}}return e.ɵfac=function(o){return new(o||e)(u.Y36(h.TUI_NUMBER_FORMAT),u.Y36(h.TuiAlertService))},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-copy-processor-example-1"]],hostBindings:function(e,o){1&e&&u.NdJ("copy",(function(e){return o.onCopy(e)}))},decls:4,vars:3,consts:[[1,"tui-space_bottom-2",3,"tuiCopyProcessor","ngModel","ngModelChange"],[3,"tuiCopyProcessor"]],template:function(e,o){1&e&&(u.TgZ(0,"tui-input-number",0),u.NdJ("ngModelChange",(function(e){return o.value=e})),u._uU(1," Copy this\n"),u.qZA(),u.TgZ(2,"div",1),u._uU(3,"Try copy this text"),u.qZA()),2&e&&(u.Q6J("tuiCopyProcessor",o.numberProcessor)("ngModel",o.value),u.xp6(2),u.Q6J("tuiCopyProcessor",o.textProcessor))},dependencies:[s.JJ,s.On,g.q,y.g,f.Z],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),e})();function Z(e,o){if(1&e&&(u.TgZ(0,"p"),u._uU(1,"Directive is used to processed text when coping"),u.qZA(),u.TgZ(2,"tui-doc-example",3),u._UZ(3,"tui-copy-processor-example-1"),u.qZA()),2&e){const e=u.oxw();u.xp6(2),u.Q6J("content",e.example1)}}function T(e,o){if(1&e&&(u.TgZ(0,"ol",4)(1,"li")(2,"p"),u._uU(3," Import "),u.TgZ(4,"code"),u._uU(5,"TuiCopyProcessorModule"),u.qZA(),u._uU(6," into a module where you want to use our component "),u.qZA(),u._UZ(7,"tui-doc-code",5),u.qZA(),u.TgZ(8,"li")(9,"p"),u._uU(10,"Add to the template:"),u.qZA(),u._UZ(11,"tui-doc-code",6),u.qZA()()),2&e){const e=u.oxw();u.xp6(7),u.Q6J("code",e.exampleModule),u.xp6(4),u.Q6J("code",e.exampleHtml)}}let C=(()=>{class e{constructor(){this.example1={TypeScript:t.e(91197).then(t.t.bind(t,91197,17)),HTML:t.e(24975).then(t.t.bind(t,24975,17))},this.exampleModule=t.e(8074).then(t.t.bind(t,8074,17)),this.exampleHtml=t.e(44146).then(t.t.bind(t,44146,17))}}return e.ɵfac=function(o){return new(o||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["example-tui-copy-processor"]],decls:3,vars:0,consts:[["header","CopyProcessor","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","usage","heading","Usage",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,o){1&e&&(u.TgZ(0,"tui-doc-page",0),u.YNc(1,Z,4,1,"ng-template",1),u.YNc(2,T,12,2,"ng-template",2),u.qZA())},dependencies:[a.c,l.q,d.n,m.f,x],encapsulation:2,changeDetection:0}),e})(),b=(()=>{class e{}return e.ɵfac=function(o){return new(o||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[n.ez,s.u5,i.TuiInputNumberModule,p.TuiCopyProcessorModule,r.fV,c.Bz.forChild((0,r.Ve)(C))]}),e})()}}]);