(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{dpNd:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilterModule",(function(){return le}));var o=n("2kYt"),r=n("nIj0"),a=n("sEIs"),i=n("SVIu"),l=n("Qq0t"),m=n("dvRg"),s=n("kiPw"),c=n("l4xa"),d=n("EM62"),u=n("OZlg"),p=n("e0eB"),f=n("iyc4"),g=n("MsR7");let h=(()=>{class e{constructor(){this.items=["News","Food","Clothes","Popular","Goods","Furniture","Tech","Building materials"],this.disabledItemHandler=e=>e.length<7,this.form=new r.FormGroup({filters:new r.FormControl(["Food"])})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-1"]],decls:6,vars:6,consts:[[3,"formGroup"],["formControlName","filters","size","s",3,"disabledItemHandler","items"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275element"](1,"tui-filter",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"div"),d["\u0275\u0275elementStart"](3,"pre"),d["\u0275\u0275text"](4),d["\u0275\u0275pipe"](5,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.form),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("disabledItemHandler",t.disabledItemHandler)("items",t.items),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("Form value: ",d["\u0275\u0275pipeBind1"](5,4,t.form.value),""))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,g.a,r.NgControlStatus,r.FormControlName],pipes:[o.k],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),e})();function y(e,t){1&e&&d["\u0275\u0275text"](0),2&e&&d["\u0275\u0275textInterpolate1"](" ",t.$implicit.title," ")}const b={title:"Done",operations:[{amount:100},{amount:200}]};let C=(()=>{class e{constructor(){this.identityMatcher=(e,t)=>e.title===t.title,this.items=[b,{title:"Drafts",operations:[{amount:100},{amount:200},{amount:100},{amount:100}]},{title:"For sign",operations:[]},{title:"Queue",operations:[{amount:100},{amount:200},{amount:100},{amount:200},{amount:100},{amount:200}]}],this.badgeHandler=e=>e.operations.length,this.form=new r.FormGroup({filters:new r.FormControl([{title:"Drafts"}])})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-2"]],decls:8,vars:8,consts:[[3,"formGroup"],["formControlName","filters",3,"identityMatcher","content","badgeHandler","items"],["content",""]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275element"](1,"tui-filter",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](2,y,1,1,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275elementStart"](5,"pre"),d["\u0275\u0275text"](6),d["\u0275\u0275pipe"](7,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](3);d["\u0275\u0275property"]("formGroup",t.form),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("identityMatcher",t.identityMatcher)("content",e)("badgeHandler",t.badgeHandler)("items",t.items),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"]("Form value: ",d["\u0275\u0275pipeBind1"](7,6,t.form.value),"")}},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,g.a,r.NgControlStatus,r.FormControlName],pipes:[o.k],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),e})();var v=n("ONKv");function x(e,t){if(1&e&&(d["\u0275\u0275text"](0),d["\u0275\u0275element"](1,"tui-svg",3)),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275textInterpolate1"](" ",e," "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("src",n.getItemIcon(e))}}const T={Calendar:"tuiIconCalendarLarge",Favorite:"tuiIconStarLarge",Messages:"tuiIconCommentLarge",FAQ:"tuiIconHelpCircleLarge",Settings:"tuiIconSettingsLarge"};let S=(()=>{class e{constructor(){this.items=["Calendar","Favorite","Messages","FAQ","Settings"],this.form=new r.FormGroup({filters:new r.FormControl([])})}getItemIcon(e){return T[e]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-3"]],decls:8,vars:6,consts:[[3,"formGroup"],["formControlName","filters",3,"content","items"],["content",""],[1,"tui-space_left-2",3,"src"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275element"](1,"tui-filter",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](2,x,2,2,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275elementStart"](5,"pre"),d["\u0275\u0275text"](6),d["\u0275\u0275pipe"](7,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](3);d["\u0275\u0275property"]("formGroup",t.form),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("content",e)("items",t.items),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"]("Form value: ",d["\u0275\u0275pipeBind1"](7,4,t.form.value),"")}},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,g.a,r.NgControlStatus,r.FormControlName,v.a],pipes:[o.k],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),e})();var I=n("D57K"),M=n("C05f"),P=n("YtkY"),F=n("zV1d"),E=function(e){return e.IT="IT",e.HR="HR",e.HeadOffice="Heads",e.Delivery="Delivery",e}({});let w=(()=>{class e{constructor(){this.items=Object.values(E),this.filters$=new M.a([])}get model$(){return this.filters$.pipe(Object(P.a)(e=>e.length===this.items.length?[]:e))}get buttonAppearance$(){return this.filters$.pipe(Object(P.a)(e=>e.length===this.items.length?"whiteblock-active":"whiteblock"))}onModelChange(e){this.filters$.next(e)}toggleAll(){this.filters$.next(this.items.length===this.filters$.value.length?[]:[...this.items])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-4"]],decls:8,vars:7,consts:[[1,"tui-space_bottom-4"],[1,"filters-with-all"],["tuiButton","","type","button","size","m",1,"tui-space_right-1",3,"appearance","click"],[3,"items","ngModel","ngModelChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275text"](1,"Choose a departament:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"div",1),d["\u0275\u0275elementStart"](3,"button",2),d["\u0275\u0275listener"]("click",(function(){return t.toggleAll()})),d["\u0275\u0275pipe"](4,"async"),d["\u0275\u0275text"](5," All "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-filter",3),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.onModelChange(e)})),d["\u0275\u0275pipe"](7,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("appearance",d["\u0275\u0275pipeBind1"](4,3,t.buttonAppearance$)),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("items",t.items)("ngModel",d["\u0275\u0275pipeBind1"](7,5,t.model$)))},directives:[F.a,g.a,r.NgControlStatus,r.NgModel],pipes:[o.b],styles:[".filters-with-all[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}"],changeDetection:0}),Object(I.a)([c.tuiPure],e.prototype,"model$",null),Object(I.a)([c.tuiPure],e.prototype,"buttonAppearance$",null),e})();var _,H=n("EPR0"),O=n("yHor"),A=n("zGJC"),$=n("u8jZ");_=$localize`:␟90be8d4d3cc3f40486374a307aa38ce8b799ff56␟5312517512718346871: Components shows separated items that can be used to filter content on the page. There are also an option with badges. `;const V=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],G=["heading",$localize`:␟555c6fe50ef4fae4068cfa5e1e739a164cbd1f39␟1282387873164068840:With badges`],D=["heading",$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`],N=["heading",$localize`:␟5a776544392d038f30f735cea42d6e409b3e9915␟6633556289912992409:With all button`];function z(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,_),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,V),d["\u0275\u0275element"](4,"tui-filter-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,G),d["\u0275\u0275element"](7,"tui-filter-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](9,D),d["\u0275\u0275element"](10,"tui-filter-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"tui-doc-example",5),d["\u0275\u0275i18nAttributes"](12,N),d["\u0275\u0275element"](13,"tui-filter-example-4"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example3),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example4)}}function L(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-filter",14),d["\u0275\u0275listener"]("toggledItem",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).onToggledItemChange(t)})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("formControl",e.control)("badgeHandler",e.badgeHandler)("disabledItemHandler",e.disabledItemHandler)("items",e.items)("size",e.size)}}var R,k,j,B,U,Q,W,Y,J;function K(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,R),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function Z(e,t){1&e&&d["\u0275\u0275i18n"](0,k)}function q(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,j),d["\u0275\u0275element"](1,"div"),d["\u0275\u0275element"](2,"strong"),d["\u0275\u0275i18nEnd"]())}function X(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,B),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"strong"),d["\u0275\u0275i18nEnd"]())}function ee(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,U),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function te(e,t){1&e&&d["\u0275\u0275i18n"](0,Q)}function ne(e,t){1&e&&d["\u0275\u0275i18n"](0,W)}function oe(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo",6),d["\u0275\u0275template"](1,L,1,5,"ng-template"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,K,2,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().badgeHandler=t})),d["\u0275\u0275template"](4,Z,1,0,"ng-template",8),d["\u0275\u0275template"](5,q,3,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabledItemHandler=t})),d["\u0275\u0275template"](6,X,3,0,"ng-template",10),d["\u0275\u0275template"](7,ee,2,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().items=t})),d["\u0275\u0275template"](8,te,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().size=t})),d["\u0275\u0275template"](9,ne,1,0,"ng-template",13),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("control",e.control),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("documentationPropertyValues",e.badgeHandlerVariants)("documentationPropertyValue",e.badgeHandler),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size)}}function re(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",15),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,Y),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",16),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,J),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}R=$localize`:␟9df85ec68329695d28ffcdeb82e2a3e628740c28␟183587868473780180: Function that gets and item and returns a badge value. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:valueOf${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: to get a number to show by default `,k=$localize`:␟3e711c8b413963d30140ff282746aa85e58af981␟9103376824632144211: Template for custom content in filter `,j=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,B=$localize`:␟dacf5bad87b1355fcec81815d547e61c18fd8085␟7109034352517674919: Function that matches value and items, e.g. if objects are copied. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:===${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,U=$localize`:␟ef2e7a0871707cacb8a92eea64081576bf413278␟4907744772326322111: Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:toString${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: for view `,Q=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,W=$localize`:␟0ff47041d2860cb4d3a45fbce5b410bdabb3aabf␟4387032186612939582: toggled event of item `,Y=$localize`:␟f351b66fa250ee1a6943110d9678f5998434ef4b␟6255290480536177884: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,J=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;class ae{constructor(e,t){this.text=e,this.badgeValue=t}toString(){return this.text}valueOf(){return this.badgeValue?this.badgeValue:null}}let ie=(()=>{class e{constructor(e){this.notifications=e,this.exampleImportModule="import {TuiFilterModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiFilterModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="form">\n    <tui-filter formControlName="filters"\n                 [badgeHandler]="badgeHandler"\n                 [disabledItemHandler]="disabledItemHandler"\n                 [items]="items"\n                 [size]="size"\n                 (toggledItem)="onToggledItemChange($event)"></tui-filter>\n</form>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-filter-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample1 {\n    readonly items = [\n        'News',\n        'Food',\n        'Clothes',\n        'Popular',\n        'Goods',\n        'Furniture',\n        'Tech',\n        'Building materials',\n    ];\n\n    disabledItemHandler: TuiBooleanHandler<string> = item => item.length < 7;\n\n    readonly form = new FormGroup({\n        filters: new FormControl(['Food']),\n    });\n}\n",HTML:'<form [formGroup]="form">\n    <tui-filter\n        formControlName="filters"\n        size="s"\n        [disabledItemHandler]="disabledItemHandler"\n        [items]="items"\n    ></tui-filter>\n</form>\n<div>\n    <pre>Form value: {{form.value | json}}</pre>\n</div>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\ninterface Orerations {\n    title: string;\n    operations: ReadonlyArray<Oreration>;\n}\n\ninterface Oreration {\n    amount: number;\n}\n\nconst COMPLETED = {\n    title: 'Done',\n    operations: [\n        {\n            amount: 100,\n        },\n        {\n            amount: 200,\n        },\n    ],\n};\n\n@Component({\n    selector: 'tui-filter-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample2 {\n    identityMatcher: TuiIdentityMatcher<Orerations> = (\n        item1: Orerations,\n        item2: Orerations,\n    ) => item1.title === item2.title;\n    items: ReadonlyArray<Orerations> = [\n        COMPLETED,\n        {\n            title: 'Drafts',\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 100,\n                },\n            ],\n        },\n        {\n            title: 'For sign',\n            operations: [],\n        },\n        {\n            title: 'Queue',\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n            ],\n        },\n    ];\n\n    badgeHandler: TuiHandler<Orerations, number> = item => item.operations.length;\n\n    readonly form = new FormGroup({\n        filters: new FormControl([\n            {\n                title: 'Drafts',\n            },\n        ]),\n    });\n}\n",HTML:'<form [formGroup]="form">\n    <tui-filter\n        formControlName="filters"\n        [identityMatcher]="identityMatcher"\n        [content]="content"\n        [badgeHandler]="badgeHandler"\n        [items]="items"\n    ></tui-filter>\n</form>\n<ng-template #content let-item> {{item.title}} </ng-template>\n<div>\n    <pre>Form value: {{form.value | json}}</pre>\n</div>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nconst getIcon: Record<string, string> = {\n    Calendar: 'tuiIconCalendarLarge',\n    Favorite: 'tuiIconStarLarge',\n    Messages: 'tuiIconCommentLarge',\n    FAQ: 'tuiIconHelpCircleLarge',\n    Settings: 'tuiIconSettingsLarge',\n};\n\n@Component({\n    selector: 'tui-filter-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample3 {\n    items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];\n\n    form = new FormGroup({\n        filters: new FormControl([]),\n    });\n\n    getItemIcon(title: string): string {\n        return getIcon[title];\n    }\n}\n",HTML:'<form [formGroup]="form">\n    <tui-filter\n        formControlName="filters"\n        [content]="content"\n        [items]="items"\n    ></tui-filter>\n</form>\n<ng-template #content let-item>\n    {{item}}\n    <tui-svg class="tui-space_left-2" [src]="getItemIcon(item)"></tui-svg>\n</ng-template>\n<div>\n    <pre>Form value: {{form.value | json}}</pre>\n</div>\n'},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiAppearance} from '@taiga-ui/core';\nimport {BehaviorSubject, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nenum Department {\n    IT = 'IT',\n    HR = 'HR',\n    HeadOffice = 'Heads',\n    Delivery = 'Delivery',\n}\n\n@Component({\n    selector: 'tui-filter-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample4 {\n    readonly items = Object.values(Department);\n\n    readonly filters$ = new BehaviorSubject<readonly string[]>([]);\n\n    @tuiPure\n    get model$(): Observable<readonly string[]> {\n        return this.filters$.pipe(\n            map(value => (value.length === this.items.length ? [] : value)),\n        );\n    }\n\n    @tuiPure\n    get buttonAppearance$(): Observable<TuiAppearance> {\n        return this.filters$.pipe(\n            map(value =>\n                value.length === this.items.length\n                    ? TuiAppearance.WhiteblockActive\n                    : TuiAppearance.Whiteblock,\n            ),\n        );\n    }\n\n    onModelChange(model: readonly string[]) {\n        this.filters$.next(model);\n    }\n\n    toggleAll() {\n        this.filters$.next(\n            this.items.length === this.filters$.value.length ? [] : [...this.items],\n        );\n    }\n}\n",HTML:'<div class="tui-space_bottom-4">Choose a departament:</div>\n\n<div class="filters-with-all">\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_right-1"\n        size="m"\n        [appearance]="buttonAppearance$ | async"\n        (click)="toggleAll()"\n    >\n        All\n    </button>\n\n    <tui-filter\n        [items]="items"\n        [ngModel]="model$ | async"\n        (ngModelChange)="onModelChange($event)"\n    ></tui-filter>\n</div>\n',LESS:"@import 'taiga-ui-local';\n\n.filters-with-all {\n    display: inline-flex;\n}\n"},this.initialItems=["Alex Inkin","Roman Sedov"],this.itemsVariants=[["Alex Inkin","Roman Sedov"],[new ae("Focused Zone",10),new ae("Dropdown",100),new ae("Menu Items",30),new ae("Accordion")]],this.badgeHandlerVariants=[e=>Number(e),e=>String(e).length],this.badgeHandler=this.badgeHandlerVariants[0],this.disabledItemHandlerVariants=[c.ALWAYS_FALSE_HANDLER,e=>"Roman Sedov"===e,e=>e.valueOf()>=30],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.items=this.itemsVariants[0],this.control=new r.FormControl(this.initialItems),this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[1]}onToggledItemChange(e){this.notifications.show(String(e)).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.TuiNotificationsService))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-filters"]],decls:4,vars:0,consts:[["header","Filter","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","badge",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],["id","all",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","badgeHandler","documentationPropertyMode","input","documentationPropertyType","TuiHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent<any>"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","T[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","toggledItem","documentationPropertyMode","output","documentationPropertyType","T"],[3,"formControl","badgeHandler","disabledItemHandler","items","size","toggledItem"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,z,14,4,"ng-template",1),d["\u0275\u0275template"](2,oe,10,9,"ng-template",1),d["\u0275\u0275template"](3,re,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,f.a,h,C,S,w,H.a,O.a,A.a,g.a,r.NgControlStatus,r.FormControlDirective,$.a],encapsulation:2,changeDetection:0}),e})(),le=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.c,m.TuiFilterModule,l.TuiButtonModule,m.TuiTagModule,l.TuiSvgModule,o.c,r.FormsModule,r.ReactiveFormsModule,i.h,a.f.forChild(Object(i.o)(ie))]]}),e})()}}]);