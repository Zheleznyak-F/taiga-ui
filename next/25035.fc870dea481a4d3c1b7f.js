"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[25035],{25035:($,T,e)=>{e.r(T),e.d(T,{ExampleTuiPdfViewerModule:()=>Q});var l=e(12057),x=e(33982),g=e(29851),a=e(3497),m=e(55908),t=e(74788),P=e(88331),C=e(37159),v=e(79121),Z=e(57068),u=e(91211),f=e(68538),d=e(76189);function y(n,o){1&n&&(t.TgZ(0,"a",3),t._uU(1," Download "),t.qZA()),2&n&&t.Q6J("href",o.content,t.LSH)}let V=(()=>{class n{constructor(i,s,c){this.sanitizer=i,this.pdfService=s,this.isMobile=c,this.pdf="assets/media/taiga.pdf"}show(i){this.pdfService.open(this.sanitizer.bypassSecurityTrustResourceUrl(this.isMobile?`https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`:this.pdf),{label:"Taiga UI",actions:i}).subscribe()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(u.H7),t.Y36(m.TuiPdfViewerService),t.Y36(f.TUI_IS_MOBILE))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-pdf-viewer-example-1"]],decls:6,vars:0,consts:[[1,"tui-space_bottom-3"],["tuiButton","","type","button",3,"click"],["actions",""],["tuiButton","","shape","rounded","size","s","download","",3,"href"]],template:function(i,s){if(1&i){const c=t.EpF();t.TgZ(0,"tui-notification",0),t._uU(1," Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n"),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){t.CHM(c);const h=t.MAs(5);return s.show(h)}),t._uU(3," Taiga\n"),t.qZA(),t.YNc(4,y,2,1,"ng-template",null,2,t.W1O)}},directives:[v.L,d.v],encapsulation:2,changeDetection:0}),n})();var r=e(89570),U=e(43190);function E(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){const p=t.CHM(i).$implicit,h=t.oxw();return p.onClick(h.context)}),t._uU(1),t.qZA()}if(2&n){const i=o.$implicit;t.xp6(1),t.hij(" ",i.text,"\n")}}let A=(()=>{class n{constructor(i){this.context=i}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(r.yf))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-actions-content"]],decls:1,vars:1,consts:[["tuiButton","","size","s","shape","rounded","class","tui-space_left-3",3,"click",4,"ngFor","ngForOf"],["tuiButton","","size","s","shape","rounded",1,"tui-space_left-3",3,"click"]],template:function(i,s){1&i&&t.YNc(0,E,2,1,"button",0),2&i&&t.Q6J("ngForOf",s.context.data)},directives:[l.sg,d.v],encapsulation:2,changeDetection:0}),n})();var M=e(46797),S=e(88002),w=e(23184);function I(n,o){1&n&&t._UZ(0,"iframe",2),2&n&&t.Q6J("src",o.ngIf,t.uOi)}function O(n,o){1&n&&t._UZ(0,"tui-loader",3)}let Y=(()=>{class n{constructor(i,s){this.isMobile=i,this.sanitizer=s,this.pdf="assets/media/taiga.pdf",this.src$=(0,M.H)(3e3).pipe((0,S.U)(()=>this.sanitizer.bypassSecurityTrustResourceUrl(this.isMobile?`https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`:this.pdf)))}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.TUI_IS_MOBILE),t.Y36(u.H7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-pdf-content"]],decls:4,vars:4,consts:[["title","pdf",3,"src",4,"ngIf","ngIfElse"],["loading",""],["title","pdf",3,"src"],["size","xl"]],template:function(i,s){if(1&i&&(t.YNc(0,I,1,1,"iframe",0),t.ALo(1,"async"),t.YNc(2,O,1,0,"ng-template",null,1,t.W1O)),2&i){const c=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,s.src$))("ngIfElse",c)}},directives:[l.O5,w.k],pipes:[l.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%}[_nghost-%COMP%]   *[_ngcontent-%COMP%]{flex:1}"],changeDetection:0}),n})(),F=(()=>{class n{constructor(i,s){this.alerts=i,this.pdfService=s}show(){const i={label:"Taiga UI",actions:new r.Al(A),data:[{text:"Sign",onClick:s=>s.completeWith("Document signed")},{text:"Deny",onClick:s=>s.completeWith("Document denied")}]};this.pdfService.open(new r.Al(Y),i).pipe((0,U.w)(s=>this.alerts.open(s))).subscribe()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(a.TuiAlertService),t.Y36(m.TuiPdfViewerService))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-pdf-viewer-example-2"]],decls:2,vars:0,consts:[["tuiButton","","type","button",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.show()}),t._uU(1," Taiga\n"),t.qZA())},directives:[d.v],encapsulation:2,changeDetection:0}),n})();var J=e(52504);function B(n,o){if(1&n&&t._UZ(0,"iframe",2),2&n){const i=t.oxw();t.Q6J("src",i.src,t.uOi)}}let D=(()=>{class n{constructor(i,s){this.isMobile=i,this.sanitizer=s,this.pdf="assets/media/taiga.pdf",this.open=!1,this.src=this.sanitizer.bypassSecurityTrustResourceUrl(this.isMobile?`https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`:this.pdf)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.TUI_IS_MOBILE),t.Y36(u.H7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-pdf-viewer-example-3"]],decls:3,vars:1,consts:[["tuiButton","","type","button",3,"click"],[3,"tuiPdfViewer","tuiPdfViewerChange"],["title","pdf",1,"iframe",3,"src"]],template:function(i,s){1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.open=!0}),t._uU(1," Taiga\n"),t.qZA(),t.YNc(2,B,1,1,"ng-template",1),t.NdJ("tuiPdfViewerChange",function(p){return s.open=p})),2&i&&(t.xp6(2),t.Q6J("tuiPdfViewer",s.open))},directives:[d.v,J.E],styles:[".iframe[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0}),n})();var L=e(76349);function N(n,o){if(1&n&&(t.TgZ(0,"p"),t._uU(1,"Custom dialog to preview PDF"),t.qZA(),t.TgZ(2,"tui-notification",3),t._uU(3," Keep in mind mobile devices do not support displaying PDFs in iframe, so you need to rely on "),t.TgZ(4,"code"),t._uU(5,"TUI_IS_MOBILE"),t.qZA(),t._uU(6," token to provide suitable alternative behavior. For example, you can use third-party service "),t.TgZ(7,"code"),t._uU(8,"https://drive.google.com/viewerng/viewer?embedded=true&url=$YOUR_PUBLIC_PATH_TO_PDF"),t.qZA(),t._uU(9," or your own service to render PDF in mobile iframe with "),t.TgZ(10,"code"),t._uU(11,"pdf.js"),t.qZA(),t._uU(12," . "),t.qZA(),t.TgZ(13,"tui-doc-example",4),t._UZ(14,"tui-pdf-viewer-example-1"),t.qZA(),t.TgZ(15,"tui-doc-example",5),t._UZ(16,"tui-pdf-viewer-example-2"),t.qZA(),t.TgZ(17,"tui-doc-example",6),t._UZ(18,"tui-pdf-viewer-example-3"),t.qZA()),2&n){const i=t.oxw();t.xp6(13),t.Q6J("content",i.example1),t.xp6(2),t.Q6J("content",i.example2),t.xp6(2),t.Q6J("content",i.example3)}}function z(n,o){if(1&n&&(t.TgZ(0,"ol",7),t.TgZ(1,"li"),t._uU(2," Import "),t.TgZ(3,"code"),t._uU(4,"TuiPdfViewerModule"),t.qZA(),t._uU(5," to your main app module: "),t._UZ(6,"tui-doc-code",8),t.qZA(),t.TgZ(7,"li"),t._uU(8," Show preview with a service: "),t._UZ(9,"tui-doc-code",9),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.Q6J("code",i.exampleModule),t.xp6(3),t.Q6J("code",i.exampleService)}}let H=(()=>{class n{constructor(){this.exampleService=e.e(4914).then(e.t.bind(e,4914,17)),this.exampleModule=e.e(16272).then(e.t.bind(e,16272,17)),this.example1={TypeScript:e.e(56782).then(e.t.bind(e,56782,17)),HTML:e.e(57953).then(e.t.bind(e,57953,17))},this.example2={TypeScript:e.e(67871).then(e.t.bind(e,67871,17)),HTML:e.e(63178).then(e.t.bind(e,63178,17)),"actions-content.component.ts":e.e(19387).then(e.t.bind(e,19387,17)),"actions-content.component.html":e.e(74398).then(e.t.bind(e,74398,17)),"pdf-content.component.ts":e.e(28770).then(e.t.bind(e,28770,17)),"pdf-content.component.html":e.e(31067).then(e.t.bind(e,31067,17)),"pdf-content.component.less":e.e(85076).then(e.t.bind(e,85076,17))},this.example3={TypeScript:e.e(51079).then(e.t.bind(e,51079,17)),HTML:e.e(44676).then(e.t.bind(e,44676,17)),LESS:e.e(50396).then(e.t.bind(e,50396,17))}}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["example-tui-pdf-viewer"]],decls:3,vars:0,consts:[["header","PdfViewer","package","KIT"],["pageTab",""],["pageTab","Setup"],["status","warning"],["id","base","heading","Basic",3,"content"],["id","component","heading","Component",3,"content"],["id","directive","heading","Directive",3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(i,s){1&i&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,N,19,3,"ng-template",1),t.YNc(2,z,10,2,"ng-template",2),t.qZA())},directives:[P.q,C.n,v.L,Z.f,V,F,D,L.c],encapsulation:2,changeDetection:0}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,m.TuiPdfViewerModule,a.TuiLoaderModule,a.TuiButtonModule,a.TuiNotificationModule,g.fV,x.Bz.forChild((0,g.Ve)(H))]]}),n})()}}]);