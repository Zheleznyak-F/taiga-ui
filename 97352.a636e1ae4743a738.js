(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97352],{97352:(t,e,i)=>{i.r(e),i.d(e,{default:()=>U});var n=i(35548),r=i(54795),a=i(66094),o=i(42436),c=i(81774),s=i(68018),d=i(4594),u=i(77563),p=i(44268),l=i(60050),m=i(60902),g=i(275),f=i(51160);const h={ByNewCard:0,BySavedCard:1};var _=i(84439);const y=[{cardId:"1",firstSix:"4242",lastFour:"4242",cardType:"Visa"},{cardId:"2",firstSix:"5555",lastFour:"4444",cardType:"MasterCard"},{cardId:"3",firstSix:"2200",lastFour:"6404",cardType:"Mir"}];let x=(()=>{var t;class e{constructor(){this.isE2E=(0,n.f3M)(p.TUI_IS_E2E)}preparePayment(t){return(0,_.H)(this.getRandomDelay()).pipe((0,f.U)((()=>t)))}getPrimaryCard(){return(0,_.H)(this.getRandomDelay()).pipe((0,f.U)((()=>y)),(0,f.U)((t=>({primary:t[0],cards:t}))))}pay(){return(0,_.H)(this.getRandomDelay()).pipe((0,f.U)((()=>{})))}getRandomDelay(){return this.isE2E?0:3e3*Math.random()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵprov=n.Yz7({token:t,factory:t.ɵfac,providedIn:"root"}),e})();var C=i(34566);const v=["cardGroupedInput"];function b(t,e){if(1&t){const t=n.EpF();n.ynx(0),n.TgZ(1,"div",4)(2,"div",9),n.NdJ("click",(function(){const e=n.CHM(t).$implicit,i=n.oxw();return n.KtG(i.payBySelectedCard(e))})),n.TgZ(3,"div",10)(4,"div",11)(5,"div",12),n._uU(6,"Card number"),n.qZA(),n.TgZ(7,"div",13),n._UZ(8,"img",14),n.ALo(9,"tuiIcon"),n.TgZ(10,"div",15),n._uU(11),n.qZA()()()()()(),n.BQk()}if(2&t){const t=e.$implicit;n.xp6(8),n.Q6J("src",n.lcZ(9,3,"MasterCard"===t.cardType?"@tui.maestro":"Visa"===t.cardType?"@tui.visa":"@tui.mir"),n.LSH),n.xp6(3),n.AsE(" ",t.firstSix,"****",t.lastFour," ")}}function M(t,e){1&t&&(n.ynx(0),n._UZ(1,"input",16),n.BQk())}function T(t,e){1&t&&(n.TgZ(0,"p"),n._uU(1,"Please wait, we are loading fake cards..."),n.qZA())}function k(t,e){if(1&t&&(n.ynx(0),n.YNc(1,T,2,0,"p",5),n.TgZ(2,"tui-loader",17),n._UZ(3,"tui-input-card-group",18,19),n.qZA(),n.BQk()),2&t){const t=e.tuiLet,i=n.oxw();n.xp6(1),n.Q6J("ngIf",t),n.xp6(1),n.Q6J("overlay",!0)("showLoader",t),n.xp6(1),n.ekj("without-date",i.paymentMode===i.PAYMENT_MODE.BySavedCard),n.Q6J("autocomplete",!0)("cardValidator",i.cardValidator)("tuiTextfieldCleaner",i.paymentMode===i.PAYMENT_MODE.ByNewCard)}}function P(t,e){1&t&&(n.ynx(0),n.TgZ(1,"div",4)(2,"label",20),n._UZ(3,"input",21),n._uU(4," Remember card "),n.qZA()(),n.BQk())}function w(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",22)(1,"button",23),n.NdJ("click",(function(){n.CHM(t);const e=n.oxw();return n.KtG(e.payByNewCard())})),n._uU(2," New card "),n.qZA()()}}let O=(()=>{var t;class e{constructor(){this.payService=(0,n.f3M)(x),this.destroyRef=(0,n.f3M)(n.ktI),this.form=new a.cw({card:new a.NI(null,[a.kI.required,t=>{const{value:e}=t;return e?.cvc&&e.cvc.length<3?{invalidCvc:!0}:null}]),saveCard:new a.NI(!0)}),this.context=(0,n.f3M)(s.yf),this.iOS=(0,n.f3M)(p.TUI_IS_IOS),this.cards=[],this.paymentMode=h.ByNewCard,this.loading$=new m.X(!1),this.payProcessing$=new m.X(!1),this.amount=this.context?.data?.amount??0,this.PAYMENT_MODE=h}ngOnInit(){this.fetchCardsAndSetPrimaryCard()}payBySelectedCard(t){this.form.patchValue({card:{card:this.maskedNumber(t),expire:"**/**",cvc:""}}),this.form.controls.card.removeValidators(u.tuiCardNumberValidator),this.paymentMode=h.BySavedCard,this.cardGroupedInput?.focusCVC()}payByNewCard(){this.form.patchValue({card:null}),this.form.controls.card.addValidators(u.tuiCardNumberValidator),this.paymentMode=h.ByNewCard,this.cardGroupedInput?.focusCard()}pay(){this.form.controls.card.valid&&(this.payProcessing$.next(!0),this.payService.pay().pipe((0,r.sL)(this.destroyRef)).subscribe((()=>{this.payProcessing$.next(!1),this.context.$implicit.complete()}),(()=>this.payProcessing$.next(!1))))}cardValidator(t){return(0,u.tuiDefaultCardValidator)(t)&&16===t.length}maskedNumber(t){return`${t.firstSix.toString().slice(0,-2)}***${t.lastFour}`}fetchCardsAndSetPrimaryCard(){this.loading$.next(!0),this.payService.preparePayment(this.context.data.amount).pipe((0,g.w)((t=>this.payService.getPrimaryCard().pipe((0,f.U)((e=>[t,e]))))),(0,r.sL)(this.destroyRef)).subscribe({next:([,t])=>{this.cards=t.cards,t.primary?this.payBySelectedCard(t.primary):this.payByNewCard()},complete:()=>this.loading$.next(!1)})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["pay-modal"]],viewQuery:function(t,e){if(1&t&&n.Gf(v,5),2&t){let t;n.iGM(t=n.CRH())&&(e.cardGroupedInput=t.first)}},standalone:!0,features:[n.jDz],decls:16,vars:16,consts:[[1,"modal-container"],[1,"title"],[3,"formGroup"],[4,"ngFor","ngForOf"],[1,"form-block"],[4,"ngIf"],[4,"tuiLet"],["class","form-block is--links",4,"ngIf"],["appearance","primary","size","l","tuiButton","","type","submit",3,"loading","click"],[1,"saved-card-preset",3,"click"],[1,"saved-card-preset__item"],[1,"saved-card-preset__item__inner"],[1,"saved-card-preset__item__placeholder"],[1,"saved-card-preset__item__info"],[1,"saved-card-preset__item__info__icon",3,"src"],[1,"saved-card-preset__item__info__number"],["autocomplete","cc-number","inputmode","numeric","maxlength","0","tuiAutoFocus","",1,"fake-input"],[3,"overlay","showLoader"],["formControlName","card",3,"autocomplete","cardValidator","tuiTextfieldCleaner"],["cardGroupedInput",""],["tuiLabel",""],["formControlName","saveCard","tuiCheckbox","","type","checkbox"],[1,"form-block","is--links"],["iconStart","@tui.plus","tuiLink","",3,"click"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0)(1,"h1",1),n._uU(2,"Pay by card"),n.qZA(),n.TgZ(3,"form",2),n.YNc(4,b,12,5,"ng-container",3),n.TgZ(5,"div",4),n.YNc(6,M,2,0,"ng-container",5),n.YNc(7,k,5,8,"ng-container",6),n.ALo(8,"async"),n.qZA(),n.YNc(9,P,5,0,"ng-container",5),n.YNc(10,w,3,0,"div",7),n.qZA(),n.TgZ(11,"button",8),n.NdJ("click",(function(){return e.pay()})),n.ALo(12,"async"),n._uU(13),n.ALo(14,"async"),n.ALo(15,"tuiFormatNumber"),n.qZA()()),2&t){let t;n.xp6(3),n.Q6J("formGroup",e.form),n.xp6(1),n.Q6J("ngForOf",e.cards),n.xp6(2),n.Q6J("ngIf",e.iOS),n.xp6(1),n.Q6J("tuiLet",null!==(t=n.lcZ(8,8,e.loading$))&&void 0!==t&&t),n.xp6(2),n.Q6J("ngIf",e.paymentMode===e.PAYMENT_MODE.ByNewCard),n.xp6(1),n.Q6J("ngIf",e.paymentMode===e.PAYMENT_MODE.BySavedCard),n.xp6(1),n.Q6J("loading",!!n.lcZ(12,10,e.payProcessing$)),n.xp6(2),n.hij(" Pay ",n.lcZ(14,12,n.lcZ(15,14,e.amount))," ₽ ")}},dependencies:[a.UX,a._Y,a.Wl,a.JJ,a.JL,a.sg,a.u,d.sg,d.O5,o.TuiLink,o.TuiButton,l.TuiButtonLoading,d.Ov,o.TuiFormatNumberPipe,p.TuiLet,p.TuiAutoFocus,o.TuiLoader,u.TuiInputCardGroup,C.T,o.TuiTextfieldOptionsDirective,l.TuiCheckbox,o.TuiIconPipe],styles:['[_nghost-%COMP%]     tui-input-card-group{width:100%!important}[_nghost-%COMP%]     tui-input-card-group.without-date .t-wrapper_expire{display:none}[_nghost-%COMP%]     tui-input-card-group.without-date tui-icon[icon="@tui.x"]{display:none}[_nghost-%COMP%]     tui-input-card-group .t-value_collapsed{letter-spacing:.1px}.modal-container[_ngcontent-%COMP%]{width:480px}@media screen and (max-width: 599px){.modal-container[_ngcontent-%COMP%]{width:100%}}.title[_ngcontent-%COMP%]{margin:0 0 16px;font-weight:500;font-size:18px;line-height:26px;letter-spacing:.18px}.form-block[_ngcontent-%COMP%]{position:relative;margin-bottom:16px}.form-block[_ngcontent-%COMP%]   .saved-card-preset__item[_ngcontent-%COMP%]{height:56px;background:#fafbfb;border-radius:16px;border:2px solid #eaeaea;padding:0 16px;display:flex;align-items:center;cursor:pointer}.form-block[_ngcontent-%COMP%]   .saved-card-preset__item__placeholder[_ngcontent-%COMP%]{color:#717172;letter-spacing:.24px;font-size:12px;line-height:18px}.form-block[_ngcontent-%COMP%]   .saved-card-preset__item__info[_ngcontent-%COMP%]{display:flex;align-items:center}.form-block[_ngcontent-%COMP%]   .saved-card-preset__item__info__icon[_ngcontent-%COMP%]{width:36px;height:22px;background-position:center;background-repeat:no-repeat;margin-right:8px}.form-block[_ngcontent-%COMP%]   .saved-card-preset__item__info__number[_ngcontent-%COMP%]{letter-spacing:.2px;line-height:22px;color:#313132}.form-block.is--links[_ngcontent-%COMP%]{display:flex;align-items:center}.form-block.is--links[_ngcontent-%COMP%]     a{font-weight:400;font-size:14px;line-height:20px}.form-block.is--links[_ngcontent-%COMP%]     a:first-child{color:#6496dc}.form-block.is--links[_ngcontent-%COMP%]     a:last-child{color:#b0b0b0;margin-left:auto}.fake-input[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;z-index:-9999999;width:100%;caret-color:transparent;cursor:none;color:transparent}'],changeDetection:0}),e})();var Z=i(59756),N=i(74922),I=i(139),A=i(46953),S=i(10188),L=i(85454),B=i(40661);const U=(()=>{var t;class e{constructor(){this.dialogs=(0,n.f3M)(o.TuiDialogService),this.destroyRef=(0,n.f3M)(n.ktI),this.amountControl=new a.NI(100)}payByCard(){this.dialogs.open(new s.Al(O),{size:"auto",closeable:!0,data:{amount:this.amountControl.value}}).pipe((0,r.sL)(this.destroyRef)).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example9",features:[n.jDz],decls:13,vars:12,consts:[[1,"container"],["tuiHintContent","The amount must be less than 1000 ₽","tuiHintDirection","top","tuiTextfieldPostfix","₽","tuiTextfieldSize","l",3,"formControl","tuiTextfieldCleaner","tuiTextfieldLabelOutside"],["inputmode","numeric","maxlength","5","tuiTextfieldLegacy",""],["tuiButton","",1,"pay-button",3,"click"],[1,"icon-group"],[3,"src"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0)(1,"tui-input-number",1),n._uU(2," 0 ... 999 ₽ "),n._UZ(3,"input",2),n.qZA(),n.TgZ(4,"button",3),n.NdJ("click",(function(){return e.payByCard()})),n.TgZ(5,"div",4),n._UZ(6,"img",5),n.ALo(7,"tuiIcon"),n._UZ(8,"img",5),n.ALo(9,"tuiIcon"),n._UZ(10,"img",5),n.ALo(11,"tuiIcon"),n.qZA(),n._uU(12," Pay "),n.qZA()()),2&t&&(n.xp6(1),n.Q6J("formControl",e.amountControl)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),n.xp6(5),n.Q6J("src",n.lcZ(7,6,"@tui.visa"),n.LSH),n.xp6(2),n.Q6J("src",n.lcZ(9,8,"@tui.maestro"),n.LSH),n.xp6(2),n.Q6J("src",n.lcZ(11,10,"@tui.mir"),n.LSH))},dependencies:[c._Hh,Z.q,N.g,I.M,a.UX,a.JJ,a.oH,o.TuiTextfieldOptionsDirective,c.cnw,A.b,S.x,L.s,B.T,o.TuiHintOptionsDirective,o.TuiButton,o.TuiIconPipe],styles:[".container[_ngcontent-%COMP%]{width:100%;max-width:30rem;margin:0 auto;padding-top:1.25rem}.pay-button[_ngcontent-%COMP%]{margin-top:1rem;width:100%}.icon-group[_ngcontent-%COMP%]{display:flex;gap:.125rem;background:#f6f6f6;padding:.125rem .3125rem;margin-right:.5rem;border-radius:.3125rem}img[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}"],changeDetection:0}),e})()}}]);