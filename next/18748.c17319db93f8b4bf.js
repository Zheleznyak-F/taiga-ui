(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18748],{18748:(t,e,n)=>{n.d(e,{e:()=>f});var o=n(20755),i=n(27534),r=n(39387),s=n(76733),a=n(62998),d=n(5824),u=n(60431),c=n(58441),h=n(49212),g=n(6254);function p(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const t=e.polymorpheusOutlet;o.xp6(1),o.hij(" ",t," ")}}const l=function(t,e){return{$implicit:t,index:e}};function m(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"tui-tile")(1,"div",2)(2,"div",3),o._UZ(3,"tui-svg",4),o.YNc(4,p,2,1,"ng-container",5),o.qZA(),o.TgZ(5,"button",6),o.NdJ("click",(function(){const e=o.CHM(t).$implicit,n=o.oxw();return o.KtG(n.toggle(e))}))("keydown.arrowDown.prevent",(function(){const e=o.CHM(t).index,n=o.oxw();return o.KtG(n.move(e,1))}))("keydown.arrowUp.prevent",(function(){const e=o.CHM(t).index,n=o.oxw();return o.KtG(n.move(e,-1))})),o._uU(6),o.ALo(7,"async"),o.qZA()()()}if(2&t){const t=e.$implicit,n=e.index,i=o.oxw();o.Udp("order",i.order.get(n)),o.xp6(3),o.Q6J("src",i.options.icons.drag),o.xp6(1),o.Q6J("polymorpheusOutlet",i.content)("polymorpheusOutletContext",o.WLB(11,l,t,n)),o.xp6(1),o.ekj("t-button_hidden",!i.isEnabled(t)),o.Q6J("iconLeft",i.getIcon(t)),o.xp6(1),o.hij(" ",o.lcZ(7,9,i.showHideText$)," ")}}let f=(()=>{var t;class e{constructor(){this.dragging=!1,this.enabled=[],this.itemsChange=new o.vpe,this.enabledChange=new o.vpe,this.order=new Map,this.unsortedItems=[],this.options=(0,o.f3M)(r.ch),this.showHideText$=(0,o.f3M)(i.s),this.content=({$implicit:t})=>String(t)}set items(t){t.length===this.unsortedItems.length&&t.every((t=>this.unsortedItems.includes(t)))||(this.unsortedItems=t)}noop(){}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(t){return this.enabled.includes(t)}getIcon(t){return this.isEnabled(t)?this.options.icons.hide:this.options.icons.show}toggle(t){this.enabled=this.isEnabled(t)?this.enabled.filter((e=>e!==t)):this.enabled.concat(t),this.updateEnabled()}move(t,e){const n=this.order.get(t)??t;if(!n&&e<0||n===this.unsortedItems.length-1&&e>0)return;const o=n+e,i=Array.from(this.order.values()).findIndex((t=>t===o));this.order.set(t,o),this.order.set(i,n),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const t=new Array(this.unsortedItems.length);return this.unsortedItems.forEach(((e,n)=>{t[this.order.get(n)??n]=e})),t}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const t=this.getSortedItems().filter((t=>this.isEnabled(t)));this.enabled=t,this.enabledChange.emit(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tui-reorder"]],hostBindings:function(t,e){1&t&&o.NdJ("focusout.stop",(function(){return e.noop()}))("pointerdown.silent",(function(){return e.onDrag()}))("pointerup.silent",(function(){return e.onDrop()}),!1,o.evT)},inputs:{enabled:"enabled",items:"items",content:"content"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],[3,"order",4,"ngFor","ngForOf"],[1,"t-item"],["tuiTileHandle","",1,"t-draggable"],[1,"t-icon",3,"src"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"iconLeft","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(t,e){1&t&&(o.TgZ(0,"tui-tiles",0),o.NdJ("orderChange",(function(t){return e.order=t})),o.YNc(1,m,8,14,"tui-tile",1),o.qZA()),2&t&&(o.Q6J("order",e.order),o.xp6(1),o.Q6J("ngForOf",e.unsortedItems))},dependencies:[s.sg,a.P,d.m,u.U,c.D,h.$,g.Li,s.Ov],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-base-01)}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%], .t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),e})()},39387:(t,e,n)=>{n.d(e,{AS:()=>s,Kx:()=>i,ch:()=>r});var o=n(2697);const i={icons:{hide:"tuiIconEye",show:"tuiIconEyeOff",drag:"tuiIconDrag"}},r=(0,o.tuiCreateToken)(i);function s(t){return(0,o.tuiProvideOptions)(r,t,i)}},27534:(t,e,n)=>{n.d(e,{J:()=>s,s:()=>r});var o=n(2697),i=n(82327);const r=(0,o.tuiCreateTokenFromFactory)((0,i.vv)("showHideText")),s=(0,o.tuiCreateTokenFromFactory)((0,i.vv)("paginationTexts"))}}]);