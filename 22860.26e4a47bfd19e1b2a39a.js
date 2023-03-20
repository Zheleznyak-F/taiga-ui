"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[22860],{22860:(J,c,o)=>{o.r(c),o.d(c,{ExampleTuiEditorPasteEmojiToolModule:()=>D});var u=o(12057),m=o(24751),p=o(33982),T=o(29851),l=o(48014),g=o(50259),a=o(3497),t=o(74788),E=o(88331),f=o(66596),v=o(57068),h=o(69303),x=o(62939),Z=o(33250),A=o(76189),y=o(17163);function M(n,e){if(1&n){const i=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){const d=t.CHM(i).$implicit;return t.oxw(2).insertSmile(d)}),t.qZA()}2&n&&t.Q6J("innerHTML",e.$implicit,t.oJD)}function C(n,e){if(1&n&&(t.TgZ(0,"div",4),t.YNc(1,M,1,1,"button",5),t.qZA()),2&n){const i=e.$implicit,s=t.oxw();t.Q6J("tuiActiveZoneParent",i),t.xp6(1),t.Q6J("ngForOf",s.smiles)}}let S=(()=>{class n{constructor(i){this.editor=i,this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(i){this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${i}</p>`).insertContent(" ").run()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(l.TuiTiptapEditorService))},n.\u0275cmp=t.Xpm({type:n,selectors:[["smiles-tool"]],decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","icon","tuiIconStarLarge","appearance","icon","automation-id","smiles-tool__button",1,"tool-button",3,"pseudoActive","focusable"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["type","button","class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],["type","button",1,"smile",3,"innerHTML","click"]],template:function(i,s){if(1&i&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t._UZ(2,"button",2),t.YNc(3,C,2,2,"ng-template",null,3,t.W1O),t.qZA()),2&i){const r=t.MAs(1),d=t.MAs(4);t.Q6J("content",d),t.xp6(2),t.Q6J("pseudoActive",r.open)("focusable",r.open)}},directives:[x.o,Z.Ek,A.v,y.e,u.sg],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"],changeDetection:0}),n})();var U=o(82707),P=o(34880);let j=(()=>{class n{constructor(){this.builtInTools=[l.TuiEditorTool.Undo],this.control=new m.NI("")}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-editor-paste-emoji-tool-example-1"]],features:[t._Bn([{provide:l.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,2823)).then(({StarterKit:e})=>e),o.e(99963).then(o.bind(o,99963)).then(({EmojiExtension:e})=>e)]}])],decls:7,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(i,s){1&i&&(t.TgZ(0,"tui-editor",0),t._uU(1," Smiles are custom tool. Try it. "),t.ynx(2,1),t._UZ(3,"smiles-tool",2),t.TgZ(4,"span",3),t._UZ(5,"tui-svg",4),t._uU(6," click it "),t.qZA(),t.BQk(),t.qZA()),2&i&&t.Q6J("formControl",s.control)("tools",s.builtInTools)},directives:[h.a,m.JJ,m.oH,S,U.w,P.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),n})(),O=(()=>{class n{constructor(){this.example1={HTML:o.e(21587).then(o.t.bind(o,21587,17)),TypeScript:o.e(52478).then(o.t.bind(o,52478,17)),LESS:o.e(87896).then(o.t.bind(o,87896,17)),"smiles-tool/emoji.extension.ts":o.e(14328).then(o.t.bind(o,14328,17)),"smiles-tool/smiles-tool.component.ts":o.e(70017).then(o.t.bind(o,70017,17)),"smiles-tool/smiles-tool.template.html":o.e(52568).then(o.t.bind(o,52568,17)),"smiles-tool/smiles-tool.styles.less":o.e(36665).then(o.t.bind(o,36665,17)),"smiles-tool/smiles-tool.module.ts":o.e(87748).then(o.t.bind(o,9852,17))}}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["editor-paste-emoji-tool"]],features:[t._Bn([{provide:l.TUI_EDITOR_EXTENSIONS,useValue:l.defaultEditorExtensions}])],decls:32,vars:1,consts:[["header","Editor","package","ADDON-EDITOR","type","components"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","custom-tool","heading","Custom emoji tool",3,"content"],[1,"tui-list","tui-space_bottom-6"],[1,"tui-list__item"],["tuiLink","","target","_blank","rel","noreferrer","href","https://tiptap.dev/api/introduction"]],template:function(i,s){1&i&&(t.TgZ(0,"tui-doc-page",0),t.TgZ(1,"p"),t._uU(2," Rich Text Editor based on "),t.TgZ(3,"a",1),t._uU(4," TipTap Editor "),t.qZA(),t._uU(5," for using with Angular forms. For safety reasons use a "),t.TgZ(6,"a",2),t._uU(7," sanitizer "),t.qZA(),t._uU(8," with this component. "),t.qZA(),t.TgZ(9,"tui-doc-example",3),t._uU(10," You can create your own tool: "),t.TgZ(11,"ul",4),t.TgZ(12,"li",5),t._uU(13," Create component with tool button (which can get access to "),t.TgZ(14,"a",6),t._uU(15," original TipTap editor API "),t.qZA(),t._uU(16," via "),t.TgZ(17,"code"),t._uU(18,"TuiTiptapEditorService"),t.qZA(),t._uU(19," from "),t.TgZ(20,"code"),t._uU(21,"@taiga-ui/addon-editor"),t.qZA(),t._uU(22," ). "),t.qZA(),t.TgZ(23,"li",5),t._uU(24," Pass the component as content projection (with "),t.TgZ(25,"code"),t._uU(26,'ngProjectAs="tools"'),t.qZA(),t._uU(27," ) to "),t.TgZ(28,"code"),t._uU(29,"<tui-editor>"),t.qZA(),t._uU(30," . "),t.qZA(),t.qZA(),t._UZ(31,"tui-editor-paste-emoji-tool-example-1"),t.qZA(),t.qZA()),2&i&&(t.xp6(9),t.Q6J("content",s.example1))},directives:[E.q,f.V,p.yS,v.f,j],encapsulation:2,changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,a.TuiButtonModule,a.TuiHostedDropdownModule,g.TuiActiveZoneModule,a.TuiDropdownModule]]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,g.TuiActiveZoneModule,a.TuiSvgModule,a.TuiLinkModule,a.TuiHostedDropdownModule,a.TuiButtonModule,T.fV,m.u5,m.UX,l.TuiEditorModule,I,l.TuiEditorSocketModule,p.Bz.forChild((0,T.Ve)(O))]]}),n})()}}]);