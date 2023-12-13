(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68245],{68245:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiCalendarRangeModule:()=>q});var a=n(88692),o=n(18241),r=n(11205),i=n(78129),u=n(50675),d=n(68392),c=n(64537),l=n(85385),m=n(83074),p=n(10977),s=n(62840),y=n(60404),h=n(43560),g=n(93525),V=n(38868),P=n(66596);let f=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-calendar-range-example-1"]],decls:1,vars:0,template:function(e,t){1&e&&c._UZ(0,"tui-calendar-range")},dependencies:[l.m],encapsulation:2,changeDetection:0}),e})();const x=(0,n(25917).of)(new d.TuiDayRange(new d.TuiDay(2019,2,11),new d.TuiDay(2019,2,14)));let T=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-calendar-range-example-2"]],features:[c._Bn([{provide:u.TUI_CALENDAR_DATE_STREAM,useValue:x}])],decls:1,vars:0,template:function(e,t){1&e&&c._UZ(0,"tui-calendar-range")},dependencies:[l.m],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{constructor(){this.items=(0,u.tuiCreateDefaultDayRangePeriods)()}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-calendar-range-example-3"]],decls:1,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&c._UZ(0,"tui-calendar-range",0),2&e&&c.Q6J("items",t.items)},dependencies:[l.m],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-calendar-range-example-4"]],features:[c._Bn([{provide:i.TUI_FIRST_DAY_OF_WEEK,useValue:d.TuiDayOfWeek.Sunday}])],decls:1,vars:0,template:function(e,t){1&e&&c._UZ(0,"tui-calendar-range")},dependencies:[l.m],encapsulation:2,changeDetection:0}),e})();function _(e,t){1&e&&(c._uU(0," Use "),c.TgZ(1,"a",7),c._uU(2," TUI_FIRST_DAY_OF_WEEK "),c.qZA(),c._uU(3," token to change start day of the week (Monday by default). "))}function C(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1,"Component for choosing date range in calendar"),c.qZA(),c.TgZ(2,"tui-doc-example",2),c._UZ(3,"tui-calendar-range-example-1"),c.qZA(),c.TgZ(4,"tui-doc-example",3),c._UZ(5,"tui-calendar-range-example-2"),c.qZA(),c.TgZ(6,"tui-doc-example",4),c._UZ(7,"tui-calendar-range-example-3"),c.qZA(),c.TgZ(8,"tui-doc-example",5),c.YNc(9,_,4,0,"ng-template",null,6,c.W1O),c._UZ(11,"tui-calendar-range-example-4"),c.qZA()),2&e){const e=c.MAs(10),t=c.oxw();c.xp6(2),c.Q6J("content",t.example1),c.xp6(2),c.Q6J("content",t.example2),c.xp6(2),c.Q6J("content",t.example3),c.xp6(2),c.Q6J("content",t.example4)("description",e)}}function H(e,t){1&e&&c._uU(0," Default month to show ")}function L(e,t){1&e&&(c.TgZ(0,"div"),c._uU(1,"A handler that gets a date and returns true if it is disabled."),c.qZA(),c.TgZ(2,"strong"),c._uU(3,"Must be a pure function"),c.qZA())}function D(e,t){1&e&&c._uU(0," Fixed intervals (shows 2 calendars with empty array) ")}function Z(e,t){1&e&&c._uU(0," A handler that gets date and returns null or a tuple with circled marker colors ")}function A(e,t){1&e&&c._uU(0," Min date ")}function N(e,t){1&e&&c._uU(0," Max date ")}function U(e,t){1&e&&c._uU(0," Minimal length of range ")}function b(e,t){1&e&&c._uU(0," Maximal length of range ")}function k(e,t){1&e&&c._uU(0," Selected date range ")}function J(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-doc-demo")(1,"tui-calendar-range",8),c.NdJ("valueChange",(function(t){c.CHM(e);const n=c.MAs(12);return c.KtG(n.emitEvent(t))})),c.qZA()(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,H,1,0,"ng-template",9),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.defaultViewedMonth=t)})),c.YNc(4,L,4,0,"ng-template",10),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.disabledItemHandler=t)})),c.YNc(5,D,1,0,"ng-template",11),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.items=t)})),c.YNc(6,Z,1,0,"ng-template",12),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.markerHandler=t)})),c.YNc(7,A,1,0,"ng-template",13),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.min=t)})),c.YNc(8,N,1,0,"ng-template",14),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.max=t)})),c.YNc(9,U,1,0,"ng-template",15),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.minLength=t)})),c.YNc(10,b,1,0,"ng-template",16),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.maxLength=t)})),c.YNc(11,k,1,0,"ng-template",17,18,c.W1O),c.qZA()}if(2&e){const e=c.oxw();c.xp6(1),c.Q6J("defaultViewedMonth",e.defaultViewedMonth)("disabledItemHandler",e.disabledItemHandler)("items",e.items)("markerHandler",e.markerHandler)("max",e.max)("maxLength",e.maxLength)("min",e.min)("minLength",e.minLength),c.xp6(2),c.Q6J("documentationPropertyValues",e.defaultViewedMonthVariants)("documentationPropertyValue",e.defaultViewedMonth),c.xp6(1),c.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c.xp6(1),c.Q6J("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),c.xp6(1),c.Q6J("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),c.xp6(1),c.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c.xp6(1),c.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c.xp6(1),c.Q6J("documentationPropertyValues",e.minLengthVariants)("documentationPropertyValue",e.minLength),c.xp6(1),c.Q6J("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength)}}function I(e,t){if(1&e&&(c.TgZ(0,"ol",19)(1,"li")(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiCalendarRangeModule"),c.qZA(),c._uU(6," into a module where you want to use our component "),c.qZA(),c._UZ(7,"tui-doc-code",20),c.qZA()()),2&e){const e=c.oxw();c.xp6(7),c.Q6J("code",e.exampleModule)}}const R=["var(--tui-primary)","var(--tui-info-fill)"],v=["var(--tui-success-fill)"];let Y=(()=>{class e{constructor(){this.exampleModule=n.e(17130).then(n.t.bind(n,17130,17)),this.example1={TypeScript:n.e(91210).then(n.t.bind(n,91210,17)),HTML:n.e(95087).then(n.t.bind(n,95087,17))},this.example2={TypeScript:n.e(16725).then(n.t.bind(n,16725,17)),HTML:n.e(83211).then(n.t.bind(n,83211,17))},this.example3={TypeScript:n.e(88133).then(n.t.bind(n,88133,17)),HTML:n.e(69735).then(n.t.bind(n,69735,17))},this.example4={TypeScript:n.e(83156).then(n.t.bind(n,83156,17)),HTML:n.e(19592).then(n.t.bind(n,19592,17))},this.minVariants=[d.TUI_FIRST_DAY,new d.TuiDay(2017,2,5),new d.TuiDay(1900,0,1)],this.maxVariants=[d.TUI_LAST_DAY,new d.TuiDay(2018,9,30),new d.TuiDay(2020,2,5),new d.TuiDay(2300,0,1)],this.disabledItemHandlerVariants=[d.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.defaultViewedMonthVariants=[d.TuiMonth.currentLocal(),d.TuiMonth.currentLocal().append({month:1}),new d.TuiMonth(2007,5)],this.itemsVariants=[[],(0,u.tuiCreateDefaultDayRangePeriods)()],this.minLengthVariants=[{day:3},{day:15}],this.maxLengthVariants=[{day:5},{month:1},{year:1}],this.markerHandlerVariants=[i.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?R:v],this.markerHandler=this.markerHandlerVariants[0],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.cleaner=!1,this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.items=this.itemsVariants[0],this.defaultViewedMonth=this.defaultViewedMonthVariants[0],this.minLength=null,this.maxLength=null}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["example-calendar-range"]],decls:4,vars:0,consts:[["header","CalendarRange","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","with-value","heading","with value",3,"content"],["id","periods","heading","with ranges",3,"content"],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["fragment","first-day-of-week","routerLink","/utils/tokens","tuiLink",""],[3,"defaultViewedMonth","disabledItemHandler","items","markerHandler","max","maxLength","min","minLength","valueChange"],["documentationPropertyMode","input","documentationPropertyName","defaultViewedMonth","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","items","documentationPropertyType","TuiDayRangePeriod[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","markerHandler","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLength","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","rangeChange","documentationPropertyType","TuiDayRange"],["documentationPropertyRangeChange","documentationProperty"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,C,12,5,"ng-template",1),c.YNc(2,J,13,24,"ng-template",1),c.YNc(3,I,8,1,"ng-template",1),c.qZA())},dependencies:[l.m,m.c,p.F,s.z,y.B,h.q,g.n,V.f,P.V,o.rH,f,T,M,w],encapsulation:2,changeDetection:0}),e})(),q=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[u.TuiCalendarRangeModule,a.ez,r.fV,i.TuiLinkModule,o.Bz.forChild((0,r.Ve)(Y))]}),e})()}}]);