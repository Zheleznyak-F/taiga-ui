(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[24290],{24290:(t,e,n)=>{n.r(e),n.d(e,{AlertExample:()=>f,default:()=>h});var o=n(4594),c=n(35548),i=n(39050),s=n(12569),a=n(68018),u=n(275),r=n(14279);function p(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",1),c.NdJ("click",(function(){const e=c.CHM(t).$implicit,n=c.oxw();return c.KtG(n.context.completeWith(e))})),c._uU(1),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t?"Yes":"No"," ")}}const l=function(){return[!0,!1]};let f=(()=>{var t;class e{constructor(){this.context=(0,c.f3M)(a.yf)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[c.jDz],decls:3,vars:2,consts:[["appearance","whiteblock","size","s","tuiButton","","type","button","class","tui-space_right-1",3,"click",4,"ngFor","ngForOf"],["appearance","whiteblock","size","s","tuiButton","","type","button",1,"tui-space_right-1",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1,"Yes?"),c.qZA(),c.YNc(2,p,2,1,"button",0)),2&t&&(c.xp6(2),c.Q6J("ngForOf",c.DdM(1,l)))},dependencies:[s.TuiButton,o.sg],encapsulation:2,changeDetection:0}),e})();const h=(()=>{var t;class e{constructor(){this.alerts=(0,c.f3M)(s.TuiAlertService),this.notification=this.alerts.open(new a.Al(f),{label:"Question",status:"error",autoClose:0}).pipe((0,u.w)((t=>this.alerts.open(`Got a value — ${t}`,{label:"Information"}))),(0,r.R)((0,c.f3M)(i.F0).events))}showNotification(){this.notification.subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[c.jDz],decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1,"This notification will be removed after router change (see TypeScript tab)"),c.qZA(),c.TgZ(2,"button",0),c.NdJ("click",(function(){return e.showNotification()})),c._uU(3," Show\n"),c.qZA())},dependencies:[s.TuiButton],encapsulation:2,changeDetection:0}),e})()}}]);