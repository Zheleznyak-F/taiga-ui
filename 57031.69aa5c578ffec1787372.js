"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[57031],{57031:(L,c,t)=>{t.r(c),t.d(c,{ExampleTuiPullToRefreshModule:()=>y});var x=t(12057),g=t(33982),m=t(29851),s=t(63414),u=t(3497),e=t(74788),v=t(88331),Z=t(37159),A=t(79121),P=t(57068),a=t(50259),d=t(79765),r=t(14471),T=t(76189);const f=new d.xQ;let E=(()=>{class o{constructor(l){this.alertService=l}onPull(){this.alertService.open("Loading...").subscribe()}finishLoading(){f.next()}}return o.\u0275fac=function(l){return new(l||o)(e.Y36(u.TuiAlertService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-pull-to-refresh-example-1"]],features:[e._Bn([{provide:a.TUI_IS_IOS,useValue:!1},{provide:a.TUI_IS_ANDROID,useValue:!0},{provide:s.TUI_LOADED,useValue:f.asObservable()}])],decls:4,vars:0,consts:[[3,"pulled"],["tuiButton","","type","button",1,"tui-space_top-8","tui-space_bottom-8",3,"click"]],template:function(l,i){1&l&&(e.TgZ(0,"tui-pull-to-refresh",0),e.NdJ("pulled",function(){return i.onPull()}),e._uU(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.TgZ(2,"button",1),e.NdJ("click",function(){return i.finishLoading()}),e._uU(3," Finish loading "),e.qZA(),e.qZA())},directives:[r.z,T.v],encapsulation:2,changeDetection:0}),o})();const h=new d.xQ;let U=(()=>{class o{constructor(l){this.alertService=l}onPull(){this.alertService.open("Loading...").subscribe()}finishLoading(){h.next()}}return o.\u0275fac=function(l){return new(l||o)(e.Y36(u.TuiAlertService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-pull-to-refresh-example-2"]],features:[e._Bn([{provide:a.TUI_IS_IOS,useValue:!0},{provide:a.TUI_IS_ANDROID,useValue:!1},{provide:s.TUI_LOADED,useValue:h.asObservable()}])],decls:4,vars:0,consts:[[3,"pulled"],["tuiButton","","type","button",1,"tui-space_top-8","tui-space_bottom-8",3,"click"]],template:function(l,i){1&l&&(e.TgZ(0,"tui-pull-to-refresh",0),e.NdJ("pulled",function(){return i.onPull()}),e._uU(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.TgZ(2,"button",1),e.NdJ("click",function(){return i.finishLoading()}),e._uU(3," Finish loading "),e.qZA(),e.qZA())},directives:[r.z,T.v],encapsulation:2,changeDetection:0}),o})();var R=t(76349);function I(o,n){if(1&o&&(e.TgZ(0,"p"),e._uU(1,"Component to refresh content after pull top. It emulates appearance of native iOS and Android components"),e.qZA(),e.TgZ(2,"tui-notification",3),e.TgZ(3,"div"),e._uU(4," It emits "),e.TgZ(5,"code"),e._uU(6,"(pulled)"),e.qZA(),e._uU(7," event when user wants to start loading. "),e.qZA(),e.TgZ(8,"div",4),e._uU(9," You can finish loading with "),e.TgZ(10,"code"),e._uU(11,"TUI_LOADED"),e.qZA(),e._uU(12," stream token that can be provided in DI "),e.qZA(),e.qZA(),e.TgZ(13,"tui-doc-example",5),e._UZ(14,"tui-pull-to-refresh-example-1"),e.qZA(),e.TgZ(15,"tui-doc-example",6),e._UZ(16,"tui-pull-to-refresh-example-2"),e.qZA()),2&o){const l=e.oxw();e.xp6(13),e.Q6J("content",l.example1),e.xp6(2),e.Q6J("content",l.example2)}}function S(o,n){if(1&o&&(e.TgZ(0,"ol",7),e.TgZ(1,"li"),e.TgZ(2,"p"),e._uU(3," Import "),e.TgZ(4,"code"),e._uU(5,"TuiPullToRefreshModule"),e.qZA(),e._uU(6," into a module where you want to use our component "),e.qZA(),e._UZ(7,"tui-doc-code",8),e.qZA(),e.TgZ(8,"li"),e.TgZ(9,"p"),e._uU(10,"Add to the template:"),e.qZA(),e._UZ(11,"tui-doc-code",9),e.qZA(),e.qZA()),2&o){const l=e.oxw();e.xp6(7),e.Q6J("code",l.exampleModule),e.xp6(4),e.Q6J("code",l.exampleHtml)}}let D=(()=>{class o{constructor(){this.example1={TypeScript:t.e(75002).then(t.t.bind(t,75002,17)),HTML:t.e(63708).then(t.t.bind(t,63708,17))},this.example2={TypeScript:t.e(39551).then(t.t.bind(t,39551,17)),HTML:t.e(96966).then(t.t.bind(t,96966,17))},this.exampleModule=t.e(37397).then(t.t.bind(t,37397,17)),this.exampleHtml=t.e(59525).then(t.t.bind(t,59525,17))}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-mobile-pull-to-refresh-page"]],decls:3,vars:0,consts:[["header","PullToRefresh","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_top-4"],[1,"tui-space_top-2"],["id","android","heading","Android",3,"content"],["id","ios","heading","iOS",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(l,i){1&l&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,I,17,2,"ng-template",1),e.YNc(2,S,12,2,"ng-template",2),e.qZA())},directives:[v.q,Z.n,A.L,P.f,E,U,R.c],encapsulation:2,changeDetection:0}),o})(),y=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[x.ez,s.TuiPullToRefreshModule,u.TuiButtonModule,u.TuiNotificationModule,m.fV,g.Bz.forChild((0,m.Ve)(D))]]}),o})()}}]);