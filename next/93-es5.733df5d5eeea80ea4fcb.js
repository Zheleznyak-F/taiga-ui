function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _templateObject10(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f24bd9acf98b087a0155b1bc8707249be28559a1e\u241f3960939324467592851: Declare a form (",":START_TAG_CODE:FormGroup",":CLOSE_TAG_CODE:) or a control (",":START_TAG_CODE:FormControl",":CLOSE_TAG_CODE:) in your component: "]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f06ec142d67a548163b20177382245fb668dbecd9\u241f7493596421987492320: Import an Angular module for forms and ",":START_TAG_CODE:TuiRadioListModule",":CLOSE_TAG_CODE: in the same module where you want to use our component: "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f179c074c54faa08ac2cd371aae91270430094cb4\u241f5919257397270847364: Size "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f4b5e527bf1b048530ab61297a358799a5489a3fd\u241f6598740144900503893: Direction of group "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fc98678197ea98e1f5d179414969ee7d8dbdcefbb\u241f1004572627847397831:",":START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ",":CLOSE_TAG_DIV:",":START_TAG_STRONG:Must be a pure function",":CLOSE_TAG_STRONG:"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35\u241f472633322147615044: Disabled state (use ",":START_TAG_CODE:formControl.disable()",":CLOSE_TAG_CODE:) "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f5091f6acf0fbf0b72c4958189d20c85b8d7f42f0\u241f9065652012369821232:Big size"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f1f167d88b7a873c95464ff4bc94a275d23cbe312\u241f7727225946507083279: Component for fast showing many radio buttons. It supports also custom content "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{tncO:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiRadioListModule",(function(){return te}));var o=n("2kYt"),r=n("nIj0"),i=n("sEIs"),a=n("SVIu"),l=n("Qq0t"),m=n("dvRg"),c=n("kiPw"),d=n("Piem"),s=n("EM62"),p=n("l4xa"),u=n("K/iL"),f=n("pVuH"),v=n("OZlg"),g=n("e0eB"),C=n("iyc4"),_=n("5ZrC");function y(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"div",7),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("Option \xab",n.name,"\xbb."),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](n.description)}}function b(e,t){1&e&&s["\u0275\u0275text"](0),2&e&&s["\u0275\u0275textInterpolate1"](" \xab",t.$implicit.name,"\xbb ")}var h,O=((h=function e(){_classCallCheck(this,e),this.items=[{name:"Simple",description:"Something usual"},{name:"Advanced",description:"Something better"},{name:"PRO",description:"Something cool"}],this.testForm=new r.FormGroup({tariff:new r.FormControl(this.items[0])})}).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=s["\u0275\u0275defineComponent"]({type:h,selectors:[["tui-radio-list-example-1"]],decls:11,vars:6,consts:[[1,"tui-row"],[1,"tui-col_md-4"],[3,"formGroup"],["formControlName","tariff",3,"items","itemContent"],["tariff1ItemContent",""],["formControlName","tariff","orientation","horizontal",3,"items","itemContent"],["tariff2ItemContent",""],[1,"description"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"form",2),s["\u0275\u0275element"](3,"tui-radio-list",3),s["\u0275\u0275template"](4,y,4,2,"ng-template",null,4,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",1),s["\u0275\u0275elementStart"](7,"form",2),s["\u0275\u0275element"](8,"tui-radio-list",5),s["\u0275\u0275template"](9,b,1,1,"ng-template",null,6,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275reference"](5),o=s["\u0275\u0275reference"](10);s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("items",t.items)("itemContent",n),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("items",t.items)("itemContent",o)}},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,_.a,r.NgControlStatus,r.FormControlName],styles:[".description[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);margin-top:.25rem;color:var(--tui-text-03)}"],changeDetection:0}),h);function S(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"div",7),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("Option \xab",n.name,"\xbb."),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](n.description)}}function x(e,t){1&e&&s["\u0275\u0275text"](0),2&e&&s["\u0275\u0275textInterpolate1"](" \xab",t.$implicit.name,"\xbb ")}var E,T,P=((E=function e(){_classCallCheck(this,e),this.items=[{name:"Simple",description:"Something usual"},{name:"Advanced",description:"Something better"},{name:"PRO",description:"Something cool"}],this.testForm=new r.FormGroup({tariff:new r.FormControl(this.items[0])})}).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=s["\u0275\u0275defineComponent"]({type:E,selectors:[["tui-radio-list-example-2"]],decls:11,vars:6,consts:[[1,"tui-row"],[1,"tui-col_md-4"],[3,"formGroup"],["formControlName","tariff","size","l",3,"items","itemContent"],["tariff1ItemContent",""],["formControlName","tariff","orientation","horizontal","size","l",3,"items","itemContent"],["tariff2ItemContent",""],[1,"description"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"form",2),s["\u0275\u0275element"](3,"tui-radio-list",3),s["\u0275\u0275template"](4,S,4,2,"ng-template",null,4,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",1),s["\u0275\u0275elementStart"](7,"form",2),s["\u0275\u0275element"](8,"tui-radio-list",5),s["\u0275\u0275template"](9,x,1,1,"ng-template",null,6,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275reference"](5),o=s["\u0275\u0275reference"](10);s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("items",t.items)("itemContent",n),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("items",t.items)("itemContent",o)}},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,_.a,r.NgControlStatus,r.FormControlName],styles:[".description[_ngcontent-%COMP%]{font:var(--tui-font-text-s);margin-top:.25rem;color:var(--tui-text-03)}"],changeDetection:0}),E),F=n("EPR0"),I=n("yHor"),R=n("zGJC"),j=n("FSyC"),w=n("u8jZ");T=$localize(_templateObject());var V,G,z,A,L,D,M,N=["heading",$localize(_templateObject2())],H=["heading",$localize(_templateObject3())];function $(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,T),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](3,N),s["\u0275\u0275element"](4,"tui-radio-list-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](6,H),s["\u0275\u0275element"](7,"tui-radio-list-example-2"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example2)}}function k(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-radio-list",10),2&e){s["\u0275\u0275nextContext"]();var n=s["\u0275\u0275reference"](3),o=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("formControl",o.control)("items",o.items)("orientation",o.orientation)("pseudoInvalid",o.pseudoInvalid)("pseudoFocused",o.pseudoFocused)("pseudoHovered",o.pseudoHovered)("pseudoPressed",o.pseudoPressed)("size",o.size)("itemContent",n)("disabledItemHandler",o.disabledItemHandler)("focusable",o.focusable)("readOnly",o.readOnly)}}function q(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"div",11),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("Option \xab",n.name,"\xbb."),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](n.description)}}function B(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,V),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function U(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,G),s["\u0275\u0275element"](1,"div"),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"]())}function J(e,t){1&e&&s["\u0275\u0275i18n"](0,z)}function Y(e,t){1&e&&s["\u0275\u0275i18n"](0,A)}function Z(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",4),s["\u0275\u0275template"](1,k,1,12,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,q,4,2,"ng-template",null,5,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](4,"tui-doc-documentation"),s["\u0275\u0275template"](5,B,2,0,"ng-template",6),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().disabled=e})),s["\u0275\u0275template"](6,U,3,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().disabledItemHandler=e})),s["\u0275\u0275template"](7,J,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().orientation=e})),s["\u0275\u0275template"](8,Y,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().size=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"inherited-documentation")}if(2&e){var o=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",o.control),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("documentationPropertyValue",o.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",o.disabledItemHandlerVariants)("documentationPropertyValue",o.disabledItemHandler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",o.orientationVariants)("documentationPropertyValue",o.orientation),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",o.sizeVariants)("documentationPropertyValue",o.size)}}function K(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",12),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,L),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18nStart"](8,D),s["\u0275\u0275element"](9,"code"),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-doc-code",14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"li"),s["\u0275\u0275elementStart"](13,"p"),s["\u0275\u0275i18n"](14,M),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](15,"tui-doc-code",15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",n.exampleDeclareForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}V=$localize(_templateObject4(),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),G=$localize(_templateObject5(),"\ufffd#1\ufffd","\ufffd/#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd"),z=$localize(_templateObject6()),A=$localize(_templateObject7()),L=$localize(_templateObject8(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),D=$localize(_templateObject9(),"[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]","[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"),D=s["\u0275\u0275i18nPostprocess"](D),M=$localize(_templateObject10());var W,Q,X=((W=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.apply(this,arguments)).exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiRadioListModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiRadioListModule\n    ],\n...\n",e.exampleInsertTemplate='<div [formGroup]="testForm">\n    <tui-radio-list formControlName="tariff"\n                    [items]="items">\n        <ng-template tuiRadioList\n                     let-item>\n            <div class="tariff">Option &laquo;{{item.name}}&raquo;.</div>\n            <div>{{item.description}}</div>\n        </ng-template>\n    </tui-radio-list>\n</div>\n',e.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    items = [\n        {\n            name: 'Simple',\n            description: 'Something usual',\n        },\n        {\n            name: 'Advanced',\n            description: 'Something better',\n        },\n        {\n            name: 'PRO',\n            description: 'Something cool',\n        },\n    ];\n\n    testForm = new FormGroup({\n        tariff: new FormControl(this.items[0])\n    });\n}\n",e.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-radio-list-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioListExample1 {\n    readonly items = [\n        {\n            name: 'Simple',\n            description: 'Something usual',\n        },\n        {\n            name: 'Advanced',\n            description: 'Something better',\n        },\n        {\n            name: 'PRO',\n            description: 'Something cool',\n        },\n    ];\n\n    readonly testForm = new FormGroup({\n        tariff: new FormControl(this.items[0]),\n    });\n}\n",HTML:'<div class="tui-row">\n    <div class="tui-col_md-4">\n        <form [formGroup]="testForm">\n            <tui-radio-list\n                formControlName="tariff"\n                [items]="items"\n                [itemContent]="tariff1ItemContent"\n            ></tui-radio-list>\n            <ng-template #tariff1ItemContent let-data>\n                <div>Option &laquo;{{data.name}}&raquo;.</div>\n                <div class="description">{{data.description}}</div>\n            </ng-template>\n        </form>\n    </div>\n    <div class="tui-col_md-4">\n        <form [formGroup]="testForm">\n            <tui-radio-list\n                formControlName="tariff"\n                orientation="horizontal"\n                [items]="items"\n                [itemContent]="tariff2ItemContent"\n            ></tui-radio-list>\n            <ng-template #tariff2ItemContent let-data>\n                &laquo;{{data.name}}&raquo;\n            </ng-template>\n        </form>\n    </div>\n</div>\n',LESS:"@import 'taiga-ui-local';\n\n.description {\n    font: var(--tui-font-text-xs);\n    margin-top: @space;\n    color: var(--tui-text-03);\n}\n"},e.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-radio-list-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioListExample2 {\n    readonly items = [\n        {\n            name: 'Simple',\n            description: 'Something usual',\n        },\n        {\n            name: 'Advanced',\n            description: 'Something better',\n        },\n        {\n            name: 'PRO',\n            description: 'Something cool',\n        },\n    ];\n\n    readonly testForm = new FormGroup({\n        tariff: new FormControl(this.items[0]),\n    });\n}\n",HTML:'<div class="tui-row">\n    <div class="tui-col_md-4">\n        <form [formGroup]="testForm">\n            <tui-radio-list\n                formControlName="tariff"\n                size="l"\n                [items]="items"\n                [itemContent]="tariff1ItemContent"\n            ></tui-radio-list>\n            <ng-template #tariff1ItemContent let-data>\n                <div>Option &laquo;{{data.name}}&raquo;.</div>\n                <div class="description">{{data.description}}</div>\n            </ng-template>\n        </form>\n    </div>\n    <div class="tui-col_md-4">\n        <form [formGroup]="testForm">\n            <tui-radio-list\n                formControlName="tariff"\n                orientation="horizontal"\n                size="l"\n                [items]="items"\n                [itemContent]="tariff2ItemContent"\n            ></tui-radio-list>\n            <ng-template #tariff2ItemContent let-data>\n                &laquo;{{data.name}}&raquo;\n            </ng-template>\n        </form>\n    </div>\n</div>\n',LESS:"@import 'taiga-ui-local';\n\n.description {\n    font: var(--tui-font-text-s);\n    margin-top: @space;\n    color: var(--tui-text-03);\n}\n"},e.orientationVariants=["vertical","horizontal"],e.orientation=e.orientationVariants[0],e.items=[{name:"Simple",description:"It is simple"},{name:"Advanced",description:"For better clients"},{name:"PRO",description:"For pro and cool clients"}],e.sizeVariants=["m","l"],e.size=e.sizeVariants[0],e.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,p.ALWAYS_TRUE_HANDLER,function(e){return"Advanced"===e.name}],e.disabledItemHandler=e.disabledItemHandlerVariants[0],e.control=new r.FormControl(e.items[0]),e}return n}(f.a)).\u0275fac=function(e){return ee(e||W)},W.\u0275cmp=s["\u0275\u0275defineComponent"]({type:W,selectors:[["example-tui-radio-list"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:u.a,useExisting:Object(s.forwardRef)((function(){return W}))}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","RadioList","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","large",3,"content",6,"heading"],[3,"control"],["itemContent",""],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","orientation","documentationPropertyMode","input","documentationPropertyType","TuiOrientationT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"tui-space_bottom-3",3,"formControl","items","orientation","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","size","itemContent","disabledItemHandler","focusable","readOnly"],[1,"description"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,$,8,2,"ng-template",1),s["\u0275\u0275template"](2,Z,10,8,"ng-template",1),s["\u0275\u0275template"](3,K,16,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[v.a,g.a,C.a,O,P,F.a,I.a,R.a,j.a,_.a,r.NgControlStatus,r.FormControlDirective,w.a],styles:[".description[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);margin-top:.25rem;color:var(--tui-text-03)}[data-tui-host-size=l][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}"],changeDetection:0}),W),ee=s["\u0275\u0275getInheritedFactory"](X),te=((Q=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:Q}),Q.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Q)},imports:[[o.c,r.FormsModule,m.TuiRadioListModule,r.ReactiveFormsModule,l.TuiButtonModule,d.a,c.c,a.h,i.f.forChild(Object(a.o)(X))]]}),Q)}}]);