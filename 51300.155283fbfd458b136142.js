"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[51300],{51300:(he,f,o)=>{o.r(f),o.d(f,{ExampleTuiTreeModule:()=>ge});var c=o(12057),g=o(24751),v=o(33982),y=o(29851),p=o(50259),T=o(3497),r=o(55908),e=o(74788),C=o(88331),A=o(37159),M=o(57068),x=o(84239),U=o(23046);let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-1"]],decls:17,vars:1,consts:[[3,"tuiTreeController"]],template:function(n,i){1&n&&(e.ynx(0,0),e.TgZ(1,"tui-tree-item"),e._uU(2," Fruits "),e.TgZ(3,"tui-tree-item"),e._uU(4," Apples "),e.TgZ(5,"tui-tree-item"),e._uU(6,"Granny Smith"),e.qZA(),e.TgZ(7,"tui-tree-item"),e._uU(8,"Red Delicious"),e.qZA(),e.qZA(),e.TgZ(9,"tui-tree-item"),e._uU(10,"Oranges"),e.qZA(),e.qZA(),e.TgZ(11,"tui-tree-item"),e._uU(12," Animals "),e.TgZ(13,"tui-tree-item"),e._uU(14,"Cats"),e.qZA(),e.TgZ(15,"tui-tree-item"),e._uU(16,"Dogs"),e.qZA(),e.qZA(),e.BQk()),2&n&&e.Q6J("tuiTreeController",!0)},directives:[x.o,U.R],encapsulation:2,changeDetection:0}),t})();var m=o(93759);let P=(()=>{class t{constructor(){this.data=["Top level 1",["Second level item",["Third level 1","Third level 2","Third level 3"]],"Top level 2","Top level 3",["Second 1","Second 2"]]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-2"]],decls:1,vars:1,consts:[[3,"value"]],template:function(n,i){1&n&&e._UZ(0,"tui-tree",0),2&n&&e.Q6J("value",i.data)},directives:[m.Y],styles:["tui-tree[_ngcontent-%COMP%]{margin-left:-3.5rem}"],changeDetection:0}),t})();var s=o(97247),E=o(34880);function Y(t,l){if(1&t&&e._UZ(0,"tui-svg",4),2&t){const n=e.oxw().$implicit;e.Q6J("src",n.icon)}}function O(t,l){if(1&t&&(e.TgZ(0,"div",2),e.YNc(1,Y,1,1,"tui-svg",3),e._uU(2),e.qZA()),2&t){const n=l.$implicit;e.Udp("opacity",1/l.node.level),e.xp6(1),e.Q6J("ngIf",n.icon),e.xp6(1),e.hij(" ",n.text," ")}}let J=(()=>{class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",icon:"tuiIconHeart",children:[{text:"Another item",children:[{text:"Next level 1",icon:"tuiIconHeart"},{text:"Next level 2",icon:"tuiIconHeart"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2",icon:"tuiIconHeart"}]}]},this.handler=n=>n.children||p.EMPTY_ARRAY}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-3"]],decls:3,vars:4,consts:[[3,"tuiTreeController","value","content","childrenHandler"],["content",""],[1,"wrapper"],[3,"src",4,"ngIf"],[3,"src"]],template:function(n,i){if(1&n&&(e._UZ(0,"tui-tree",0),e.YNc(1,O,3,4,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(2);e.Q6J("tuiTreeController",!0)("value",i.data)("content",a)("childrenHandler",i.handler)}},directives:[m.Y,s.n,x.o,c.O5,E.P],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),t})();var Z=o(63624),H=o(76189);function F(t,l){1&t&&e._uU(0),2&t&&e.hij(" ",l.$implicit.text,"\n")}let L=(()=>{class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.map=new Map,this.handler=n=>n.children||p.EMPTY_ARRAY}toggleTopmost(){this.map.set(this.data,!this.map.get(this.data))}toggleLevel(){const n=this.data.children||[];this.map.set(n[0],!this.map.get(n[0]))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-4"]],decls:8,vars:5,consts:[[3,"tuiTreeController","map","value","content","childrenHandler"],["content",""],["tuiButton","","size","s","type","button",1,"tui-space_right-2",3,"click"],["tuiButton","","size","s","type","button",3,"click"]],template:function(n,i){if(1&n&&(e._UZ(0,"tui-tree",0),e.YNc(1,F,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"p"),e.TgZ(4,"button",2),e.NdJ("click",function(){return i.toggleTopmost()}),e._uU(5," Toggle Topmost "),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){return i.toggleLevel()}),e._uU(7," Toggle Top level 1 "),e.qZA(),e.qZA()),2&n){const a=e.MAs(2);e.Q6J("tuiTreeController",!1)("map",i.map)("value",i.data)("content",a)("childrenHandler",i.handler)}},directives:[m.Y,s.n,Z.m,H.v],encapsulation:2,changeDetection:0}),t})();var Q=o(89570);let S=(()=>{class t extends r.TuiTreeItemContentComponent{get icon(){return this.isExpandable?"tuiIconFolderLarge":"tuiIconFileLarge"}}return t.\u0275fac=function(){let l;return function(i){return(l||(l=e.n5z(t)))(i||t)}}(),t.\u0275cmp=e.Xpm({type:t,selectors:[["folders"]],hostBindings:function(n,i){1&n&&e.NdJ("click",function(){return i.onClick()})},features:[e.qOj],decls:2,vars:2,consts:[[1,"tui-space_right-2",3,"src"],[3,"ngTemplateOutlet"]],template:function(n,i){1&n&&(e._UZ(0,"tui-svg",0),e.GkF(1,1)),2&n&&(e.Q6J("src",i.icon),e.xp6(1),e.Q6J("ngTemplateOutlet",i.context.template))},directives:[E.P,c.tP],styles:['[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;height:var(--tui-height-s);display:flex;align-items:center;padding:0 .5rem;border-radius:var(--tui-radius-xs);background:var(--tui-base-01)}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";position:absolute;left:-.75rem;z-index:-1}[_nghost-%COMP%]:before{width:1rem;border-bottom:1px solid var(--tui-base-04)}[_nghost-%COMP%]:after{top:-1rem;bottom:1rem;border-left:1px solid var(--tui-base-04)}._expandable[_nghost-%COMP%]:hover{cursor:pointer;background:var(--tui-base-02)}tui-svg[_ngcontent-%COMP%]{position:relative;background:inherit;z-index:1}']}),t})();function I(t,l){if(1&t&&e._UZ(0,"tui-tree",2),2&t){const n=l.$implicit,i=e.oxw(),a=e.MAs(2);e.Q6J("tuiTreeController",!0)("value",n)("content",a)("childrenHandler",i.handler)}}function R(t,l){1&t&&e._uU(0),2&t&&e.hij(" ",l.$implicit.text,"\n")}let B=(()=>{class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=n=>n.children||p.EMPTY_ARRAY}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-5"]],features:[e._Bn([{provide:r.TUI_TREE_CONTENT,useValue:new Q.Al(S)}])],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"]],template:function(n,i){1&n&&(e.YNc(0,I,1,4,"tui-tree",0),e.YNc(1,R,1,1,"ng-template",null,1,e.W1O)),2&n&&e.Q6J("ngForOf",i.data.children)},directives:[c.sg,m.Y,s.n,x.o],styles:["tui-tree[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0}),t})();var D=o(81894),$=o(35271);function V(t,l){if(1&t&&e._UZ(0,"tui-tree",2),2&t){const n=l.$implicit,i=e.oxw(),a=e.MAs(2);e.Q6J("tuiTreeController",!0)("value",n)("content",a)("childrenHandler",i.handler)}}function z(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-checkbox-labeled",3),e.NdJ("ngModelChange",function(a){const d=e.CHM(n).$implicit;return e.oxw().onChecked(d,a)}),e.ALo(1,"tuiMapper"),e._uU(2),e.qZA()}if(2&t){const n=l.$implicit,i=e.oxw();e.Q6J("ngModel",e.Dn7(1,2,n,i.getValue,i.map)),e.xp6(2),e.hij(" ",n.text," ")}}let X=(()=>{class t{constructor(){this.map=new Map,this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=n=>n.children||p.EMPTY_ARRAY,this.getValue=(n,i)=>{const a=h(n),u=!!i.get(a[0]);for(let d=0;d<a.length;d++)if(u!==!!i.get(a[d]))return null;return u}}onChecked(n,i){h(n).forEach(a=>this.map.set(a,i)),this.map=new Map(this.map.entries())}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-6"]],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"],[1,"tui-space_vertical-2","tui-space_left-1",3,"ngModel","ngModelChange"]],template:function(n,i){1&n&&(e.YNc(0,V,1,4,"tui-tree",0),e.YNc(1,z,3,6,"ng-template",null,1,e.W1O)),2&n&&e.Q6J("ngForOf",i.data.children)},directives:[c.sg,m.Y,s.n,x.o,D.p,g.JJ,g.On],pipes:[$.c],encapsulation:2,changeDetection:0}),t})();function h(t){return t.children?t.children.map(h).reduce((l,n)=>[...l,...n],[]):[t]}var j=o(46797),W=o(88002);let G=(()=>{class t{loadChildren({text:n}){return(0,j.H)(3e3).pipe((0,W.U)(()=>[{text:`${n} 1`,children:Math.random()>.5},{text:`${n} 2`,children:Math.random()>.5},{text:`${n} 3`,children:Math.random()>.5}]))}hasChildren({children:n}){return!!n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var K=o(23184);function b(t,l){1&t&&e._UZ(0,"tui-loader",4)}function w(t,l){if(1&t&&e._uU(0),2&t){const n=e.oxw().$implicit;e.Oqu(n.text)}}function q(t,l){if(1&t&&(e.YNc(0,b,1,0,"tui-loader",2),e.YNc(1,w,1,1,"ng-template",null,3,e.W1O)),2&t){const n=l.$implicit,i=e.MAs(2),a=e.oxw();e.Q6J("ngIf",n===a.loading)("ngIfElse",i)}}let k=(()=>{class t{constructor(n,i){this.loading=n,this.service=i,this.map=new Map,this.childrenHandler=a=>this.service.getChildren(a)}onToggled(n){this.service.loadChildren(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.TUI_TREE_LOADING),e.Y36(r.TuiTreeService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-7"]],features:[e._Bn([r.TuiTreeService,{provide:r.TUI_TREE_START,useValue:{text:"Topmost"}},{provide:r.TUI_TREE_LOADER,useClass:G}])],decls:4,vars:7,consts:[[3,"tuiTreeController","map","value","childrenHandler","content","toggled"],["content",""],["class","loader",4,"ngIf","ngIfElse"],["text",""],[1,"loader"]],template:function(n,i){if(1&n&&(e.TgZ(0,"tui-tree",0),e.NdJ("toggled",function(u){return i.onToggled(u)}),e.ALo(1,"async"),e.qZA(),e.YNc(2,q,3,2,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(3);e.Q6J("tuiTreeController",!1)("map",i.map)("value",e.lcZ(1,5,i.service.data$))("childrenHandler",i.childrenHandler)("content",a)}},directives:[m.Y,s.n,Z.m,c.O5,K.k],pipes:[c.Ov],styles:[".loader[_ngcontent-%COMP%]{width:2rem;margin:1rem 0}"],changeDetection:0}),t})();var _=o(54476),ee=o(17023),te=o(66596),ne=o(76349);function oe(t,l){if(1&t&&(e.TgZ(0,"p"),e._uU(1,"Component to display tree-like data structure"),e.qZA(),e.TgZ(2,"tui-doc-example",2),e._UZ(3,"tui-tree-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",3),e._UZ(5,"tui-tree-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",4),e._UZ(7,"tui-tree-example-3"),e.qZA(),e.TgZ(8,"tui-doc-example",5),e._UZ(9,"tui-tree-example-4"),e.qZA(),e.TgZ(10,"tui-doc-example",6),e._UZ(11,"tui-tree-example-5"),e.qZA(),e.TgZ(12,"tui-doc-example",7),e._UZ(13,"tui-tree-example-6"),e.qZA(),e.TgZ(14,"tui-doc-example",8),e._UZ(15,"tui-tree-example-7"),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2),e.xp6(2),e.Q6J("content",n.example3),e.xp6(2),e.Q6J("content",n.example4),e.xp6(2),e.Q6J("content",n.example5),e.xp6(2),e.Q6J("content",n.example6),e.xp6(2),e.Q6J("content",n.example7)}}function le(t,l){1&t&&(e._uU(0," Directive used to enable opening/closing of nodes with children. "),e.TgZ(1,"code"),e._uU(2,"Boolean"),e.qZA(),e._uU(3," input is the default state. "))}function ie(t,l){}function ae(t,l){}function re(t,l){}function ce(t,l){1&t&&(e._uU(0," Directive used to enable opening/closing of nodes with children. "),e.TgZ(1,"code"),e._uU(2,"Boolean"),e.qZA(),e._uU(3," input is the default state. "))}function me(t,l){1&t&&e._uU(0," A map used with controller directive for manual programmatic toggling. ")}function pe(t,l){1&t&&(e._uU(0," Provide your own component used internally to display node content (see "),e.TgZ(1,"a",20),e._uU(2," this example "),e.qZA(),e._uU(3," ) "))}function se(t,l){1&t&&e._uU(0," Provide your own open/closed controlling mechanism ")}function ue(t,l){1&t&&(e._uU(0," Provide your own tracker for value/node pairs (so you can match "),e.TgZ(1,"code"),e._uU(2,"TreeItem"),e.qZA(),e._uU(3," instances to their corresponding "),e.TgZ(4,"code"),e._uU(5,"data: T"),e.qZA(),e._uU(6," when using "),e.TgZ(7,"code"),e._uU(8,"Tree"),e.qZA(),e._uU(9," component with custom open/closed controller) "))}function de(t,l){1&t&&(e.TgZ(0,"tui-doc-documentation",9),e.YNc(1,le,4,0,"ng-template",10),e.qZA(),e.TgZ(2,"tui-doc-documentation",11),e.YNc(3,ie,0,0,"ng-template",12),e.YNc(4,ae,0,0,"ng-template",13),e.YNc(5,re,0,0,"ng-template",14),e.YNc(6,ce,4,0,"ng-template",10),e.YNc(7,me,1,0,"ng-template",15),e.qZA(),e.TgZ(8,"tui-doc-documentation",16),e.YNc(9,pe,4,0,"ng-template",17),e.YNc(10,se,1,0,"ng-template",18),e.YNc(11,ue,10,0,"ng-template",19),e.qZA()),2&t&&(e.Q6J("showValues",!1),e.xp6(2),e.Q6J("showValues",!1),e.xp6(6),e.Q6J("showValues",!1))}function Te(t,l){if(1&t&&(e.TgZ(0,"ol",21),e.TgZ(1,"li"),e.TgZ(2,"p"),e._uU(3," Import "),e.TgZ(4,"code"),e._uU(5,"TuiTreeModule"),e.qZA(),e._uU(6," into a module where you want to use our component "),e.qZA(),e._UZ(7,"tui-doc-code",22),e.qZA(),e.TgZ(8,"li"),e.TgZ(9,"p"),e._uU(10,"Add to the template:"),e.qZA(),e._UZ(11,"tui-doc-code",23),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(7),e.Q6J("code",n.exampleModule),e.xp6(4),e.Q6J("code",n.exampleHtml)}}let xe=(()=>{class t{constructor(){this.exampleModule=o.e(148).then(o.t.bind(o,148,17)),this.exampleHtml=o.e(27696).then(o.t.bind(o,27696,17)),this.example1={TypeScript:o.e(79720).then(o.t.bind(o,79720,17)),HTML:o.e(93017).then(o.t.bind(o,93017,17))},this.example2={TypeScript:o.e(12878).then(o.t.bind(o,12878,17)),HTML:o.e(90894).then(o.t.bind(o,90894,17)),LESS:o.e(4918).then(o.t.bind(o,4918,17))},this.example3={TypeScript:o.e(64387).then(o.t.bind(o,64387,17)),HTML:o.e(39585).then(o.t.bind(o,39585,17)),LESS:o.e(82776).then(o.t.bind(o,82776,17))},this.example4={TypeScript:o.e(29166).then(o.t.bind(o,29166,17)),HTML:o.e(93606).then(o.t.bind(o,93606,17))},this.example5={TypeScript:o.e(29902).then(o.t.bind(o,29902,17)),HTML:o.e(45433).then(o.t.bind(o,45433,17)),LESS:o.e(21457).then(o.t.bind(o,21457,17)),"content.ts":o.e(90422).then(o.t.bind(o,90422,17)),"content.less":o.e(90351).then(o.t.bind(o,90351,17))},this.example6={TypeScript:o.e(15661).then(o.t.bind(o,15661,17)),HTML:o.e(45946).then(o.t.bind(o,45946,17))},this.example7={TypeScript:o.e(67978).then(o.t.bind(o,67978,17)),HTML:o.e(21825).then(o.t.bind(o,21825,17)),LESS:o.e(5690).then(o.t.bind(o,5690,17)),"service.ts":o.e(97485).then(o.t.bind(o,97485,17))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tree"]],decls:4,vars:0,consts:[["header","Tree","package","KIT","type","components"],["pageTab",""],["id","manual","heading","Manual",3,"content"],["id","array","heading","Array",3,"content"],["id","template","heading","Template",3,"content"],["id","programmatic","heading","Programmatic control",3,"content"],["id","custom","heading","Custom",3,"content"],["id","checkbox","heading","Checkbox",3,"content"],["id","async","heading","Asynchronous",3,"content"],["heading","TreeItem",3,"showValues"],["documentationPropertyName","tuiTreeController","documentationPropertyType","boolean","documentationPropertyMode","input"],["heading","Tree",3,"showValues"],["documentationPropertyName","childrenHandler","documentationPropertyType","TuiHandler<T, readonly T[]>","documentationPropertyMode","input"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent<TuiTreeContext>","documentationPropertyMode","input"],["documentationPropertyName","data","documentationPropertyType","T","documentationPropertyMode","input"],["documentationPropertyName","map","documentationPropertyType","Map<T, boolean>","documentationPropertyMode","input"],["heading","Tokens",3,"showValues"],["documentationPropertyName","TUI_TREE_CONTENT","documentationPropertyType","PolymorpheusContent<TuiTreeItemContext>"],["documentationPropertyName","TUI_TREE_CONTROLLER","documentationPropertyType","TuiTreeController"],["documentationPropertyName","TUI_TREE_ACCESSOR","documentationPropertyType","TuiTreeAccessor<T>"],["tuiLink","","routerLink","/components/tree","fragment","custom"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,i){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,oe,16,7,"ng-template",1),e.YNc(2,de,12,3,"ng-template",1),e.YNc(3,Te,12,2,"ng-template",1),e.qZA())},directives:[C.q,A.n,M.f,N,P,J,L,B,X,k,_.z,ee.B,te.V,v.yS,ne.c],encapsulation:2,changeDetection:0}),t})(),ge=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.TuiTreeModule,T.TuiSvgModule,T.TuiButtonModule,T.TuiLinkModule,r.TuiCheckboxLabeledModule,p.TuiMapperPipeModule,T.TuiLoaderModule,g.u5,c.ez,y.fV,v.Bz.forChild((0,y.Ve)(xe))]]}),t})()}}]);