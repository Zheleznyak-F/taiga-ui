"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[53357],{53357:(Y,T,t)=>{t.r(T),t.d(T,{ExampleTuiEditorUploadImagesModule:()=>G});var m=t(12057),r=t(24751),p=t(33982),c=t(29851),d=t(48014),u=t(68538),l=t(3497),h=t(55908),o=t(74788),E=t(88331),f=t(66596),y=t(57068),M=t(22759),L=t(71289),v=t(88002),Z=t(43190),U=t(68939);function x(e){return a=>{const i=new FileReader;return e.loading$.next(!0),i.readAsDataURL(a),(0,M.R)(i,"load").pipe((0,L.g)(2e3),(0,v.U)(()=>String(i.result)),(0,Z.w)(n=>e.save(n)),(0,U.x)(()=>e.loading$.next(!1)))}}var A=t(64762),D=t(26215),N=t(94402),S=t(53585);let I=(()=>{class e{constructor(){this.loading$=new D.X(!1)}static createBody(i){const n=new FormData;return n.append("image",i.split(",").pop()||""),new URLSearchParams(n)}get isLoading(){return this.loading$.getValue()}save(i){const{host:n,apiKey:s,expiration:V}=S.N.imgbb;return(0,N.D)(fetch(`${n}/1/upload?key=${s}&expiration=${V}`,{method:"POST",body:e.createBody(i),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(g=>(0,A.mG)(this,void 0,void 0,function*(){return g.json()}))).pipe((0,v.U)(g=>g.data.url))}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var j=t(23184),C=t(69303),z=t(21082),R=t(36951),O=t(20179),P=t(7114);const F=function(){return[]};let J=(()=>{class e{constructor(i,n){this.doc=i,this.imgbbService=n,this.builtInTools=[d.TuiEditorTool.Undo,d.TuiEditorTool.Img],this.control=new r.NI(""),this.validator=({value:s})=>this.editor.focused||this.imgbbService.isLoading||!this.doc.hasFocus()||s.length?null:{empty:new u.TuiValidationError("ERROR: content must not be empty")},this.control.patchValue('<img data-type="image-editor" src="/assets/images/lumberjack.png" width="300"><p>Try to drag right border of image!</p><p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />')}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(m.K0),o.Y36(I))},e.\u0275cmp=o.Xpm({type:e,selectors:[["tui-editor-upload-images-example-1"]],viewQuery:function(i,n){if(1&i&&o.Gf(d.TuiEditorComponent,7),2&i){let s;o.iGM(s=o.CRH())&&(n.editor=s.first)}},features:[o._Bn([u.TuiDestroyService,{provide:d.TUI_EDITOR_EXTENSIONS,deps:[o.zs3],useFactory:a=>[Promise.resolve().then(t.bind(t,2823)).then(({StarterKit:i})=>i),Promise.resolve().then(t.bind(t,53380)).then(({createImageEditorExtension:i})=>i(a)),Promise.resolve().then(t.bind(t,44632)).then(({default:i})=>i.configure({inline:!0,allowBase64:!0}))]},{provide:d.TUI_EDITOR_MIN_IMAGE_WIDTH,useValue:150},{provide:d.TUI_EDITOR_MAX_IMAGE_WIDTH,useValue:400},{provide:d.TUI_IMAGE_LOADER,useFactory:x,deps:[I]}])],decls:13,vars:16,consts:[[3,"overlay","showLoader"],[1,"editor",3,"formControl","tools","tuiValidator"],[3,"formControl","error"],[3,"content"]],template:function(i,n){1&i&&(o.TgZ(0,"tui-loader",0),o.ALo(1,"async"),o._UZ(2,"tui-editor",1),o.qZA(),o._UZ(3,"tui-error",2),o.ALo(4,"async"),o.ALo(5,"tuiFieldError"),o.TgZ(6,"h4"),o._uU(7,"HTML:"),o.qZA(),o._UZ(8,"tui-editor-socket",3),o.TgZ(9,"h4"),o._uU(10,"Text:"),o.qZA(),o.TgZ(11,"p"),o._uU(12),o.qZA()),2&i&&(o.Q6J("overlay",!0)("showLoader",!!o.lcZ(1,9,n.imgbbService.loading$)),o.xp6(2),o.Q6J("formControl",n.control)("tools",n.builtInTools)("tuiValidator",n.validator),o.xp6(1),o.Q6J("formControl",n.control)("error",o.lcZ(4,11,o.lcZ(5,13,o.DdM(15,F)))),o.xp6(5),o.Q6J("content",n.control.value||""),o.xp6(4),o.Oqu(n.control.value))},directives:[j.k,C.a,r.JJ,r.oH,z.W,R.v,O.D],pipes:[m.Ov,P.A],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{constructor(){this.example1={TypeScript:t.e(47614).then(t.t.bind(t,47614,17)),HTML:t.e(53474).then(t.t.bind(t,53474,17)),"./image-loader.ts":t.e(73693).then(t.t.bind(t,73693,17)),"./imgbb.service.ts":t.e(33932).then(t.t.bind(t,33932,17))}}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["editor-upload-images"]],features:[o._Bn([{provide:d.TUI_EDITOR_EXTENSIONS,useValue:d.defaultEditorExtensions}])],decls:11,vars:1,consts:[["header","Editor","package","ADDON-EDITOR","type","components"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","upload-images","heading","Upload images to a web server",3,"content"]],template:function(i,n){1&i&&(o.TgZ(0,"tui-doc-page",0),o.TgZ(1,"p"),o._uU(2," Rich Text Editor based on "),o.TgZ(3,"a",1),o._uU(4," TipTap Editor "),o.qZA(),o._uU(5," for using with Angular forms. For safety reasons use a "),o.TgZ(6,"a",2),o._uU(7," sanitizer "),o.qZA(),o._uU(8," with this component. "),o.qZA(),o.TgZ(9,"tui-doc-example",3),o._UZ(10,"tui-editor-upload-images-example-1"),o.qZA(),o.qZA()),2&i&&(o.xp6(9),o.Q6J("content",n.example1))},directives:[E.q,f.V,p.yS,y.f,J],encapsulation:2,changeDetection:0}),e})(),G=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[m.ez,u.TuiActiveZoneModule,l.TuiSvgModule,l.TuiLinkModule,l.TuiHostedDropdownModule,l.TuiButtonModule,c.fV,r.u5,r.UX,d.TuiEditorModule,l.TuiLoaderModule,d.TuiEditorSocketModule,l.TuiErrorModule,h.TuiFieldErrorPipeModule,p.Bz.forChild((0,c.Ve)(B)),u.TuiValidatorModule]]}),e})()}}]);