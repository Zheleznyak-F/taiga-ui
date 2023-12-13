(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29739],{29739:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiScrollModule:()=>N});var n=o(88692),r=o(78942),i=o(18241),l=o(11205),c=o(68392),a=o(78129),s=o(50675),u=o(64537),d=o(83074),m=o(62840),p=o(60404),h=o(43560),g=o(93525),b=o(38868),f=o(91473),y=o(46782),w=o(34600),v=o(65009),T=o(10383),Z=o(76189),_=o(3881);let M=(()=>{class e{constructor(e,t){this.scrollService=e,this.destroy$=t,this.scrollTop=0,this.scrollLeft=0,this.duration=300}onClick({nativeElement:e}){this.scrollService.scroll$(e,this.scrollTop,this.scrollLeft,this.duration).pipe((0,y.R)(this.destroy$)).subscribe()}}return e.ɵfac=function(t){return new(t||e)(u.Y36(c.TuiScrollService),u.Y36(c.TuiDestroyService,2))},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-scroll-example-1"]],features:[u._Bn([c.TuiDestroyService])],decls:18,vars:3,consts:[[1,"flex"],[1,"element",3,"ngModel","ngModelChange"],["tuiButton","","type","button",1,"element",3,"click"],["tuiElement","",1,"scrollbar"],["scrollRef","elementRef"],[1,"wrapper"]],template:function(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",0)(1,"tui-input-count",1),u.NdJ("ngModelChange",(function(e){return t.scrollTop=e})),u._uU(2," scrollTop "),u.qZA(),u.TgZ(3,"tui-input-count",1),u.NdJ("ngModelChange",(function(e){return t.scrollLeft=e})),u._uU(4," scrollLeft "),u.qZA(),u.TgZ(5,"tui-input-count",1),u.NdJ("ngModelChange",(function(e){return t.duration=e})),u._uU(6," duration "),u.qZA(),u.TgZ(7,"button",2),u.NdJ("click",(function(){u.CHM(e);const o=u.MAs(10);return u.KtG(t.onClick(o))})),u._uU(8," Go! "),u.qZA()(),u.TgZ(9,"tui-scrollbar",3,4)(11,"div",5)(12,"p"),u._uU(13," Monty Python (also collectively known as the Pythons) were a British surreal comedy group who created their sketch comedy show Monty Python's Flying Circus, which first aired on the BBC in 1969. Forty-five episodes were made over four series. The Python phenomenon developed from the television series into something larger in scope and impact, including touring stage shows, films, numerous albums, several books, and musicals. The Pythons' influence on comedy has been compared to the Beatles' influence on music. Their sketch show has been referred to as \"not only one of the more enduring icons of 1970s British popular culture, but also an important moment in the evolution of television comedy\". "),u.qZA(),u.TgZ(14,"p"),u._uU(15," Broadcast by the BBC between 1969 and 1974, Monty Python's Flying Circus was conceived, written, and performed by its members Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and Michael Palin. Loosely structured as a sketch show, but with an innovative stream-of-consciousness approach, aided by Gilliam's animation, it pushed the boundaries of what was acceptable in style and content. A self-contained comedy team responsible for both writing and performing their work, the Pythons had creative control which allowed them to experiment with form and content, discarding rules of television comedy. Following their television work, they began making films, which include Monty Python and the Holy Grail (1975), Life of Brian (1979) and The Meaning of Life (1983). Their influence on British comedy has been apparent for years, while in North America, it has coloured the work of cult performers from the early editions of Saturday Night Live through to more recent absurdist trends in television comedy. \"Pythonesque\" has entered the English lexicon as a result. "),u.qZA(),u.TgZ(16,"p"),u._uU(17,' In a 2005 poll of over 300 comics, comedy writers, producers and directors throughout the English-speaking world to find "The Comedian\'s Comedian", three of the six Pythons members were voted to be among the top 50 greatest comedians ever: Cleese at No. 2, Idle at No. 21, and Palin at No. 30. '),u.qZA()()()}2&e&&(u.xp6(1),u.Q6J("ngModel",t.scrollTop),u.xp6(2),u.Q6J("ngModel",t.scrollLeft),u.xp6(2),u.Q6J("ngModel",t.duration))},dependencies:[r.JJ,r.On,w.U,v.E,T.a,Z.v,_.I],styles:[".flex[_ngcontent-%COMP%]{display:flex}.element[_ngcontent-%COMP%]{width:10rem;margin:0 1rem 1rem 0}.scrollbar[_ngcontent-%COMP%]{display:flex;max-width:25rem;max-height:18.75rem;background:var(--tui-secondary)}.wrapper[_ngcontent-%COMP%]{width:50rem;padding:0 1rem}"],changeDetection:0}),e})();function k(e,t){if(1&e&&(u.TgZ(0,"p"),u._uU(1,"A service for smooth scroll"),u.qZA(),u.TgZ(2,"tui-doc-example",2),u._UZ(3,"tui-scroll-example-1"),u.qZA()),2&e){const e=u.oxw();u.xp6(2),u.Q6J("content",e.example1)}}function x(e,t){1&e&&u._uU(0," Element to be scrolled ")}function C(e,t){1&e&&u._uU(0," Target position from top ")}function P(e,t){1&e&&(u.TgZ(0,"strong"),u._uU(1,"Optional"),u.qZA(),u._uU(2," . Target position from left "))}function U(e,t){1&e&&(u.TgZ(0,"strong"),u._uU(1,"Optional"),u.qZA(),u._uU(2," . Duration time in ms (0 for an instant scroll). "))}function A(e,t){1&e&&(u.TgZ(0,"p",3),u._uU(1," Method "),u.TgZ(2,"strong"),u._UZ(3,"code",4),u.qZA(),u.TgZ(4,"em"),u._uU(5," (emits a tuple tuple "),u.TgZ(6,"code"),u._uU(7,"[scrollTop, scrollLeft]"),u.qZA(),u._uU(8," ) "),u.qZA()(),u.TgZ(9,"tui-doc-documentation",5),u.YNc(10,x,1,0,"ng-template",6),u.YNc(11,C,1,0,"ng-template",7),u.YNc(12,P,3,0,"ng-template",8),u.YNc(13,U,3,0,"ng-template",9),u.qZA()),2&e&&(u.xp6(9),u.Q6J("showValues",!1))}function q(e,t){if(1&e&&(u.TgZ(0,"ol",10)(1,"li")(2,"p"),u._uU(3," Inject "),u.TgZ(4,"code"),u._uU(5,"TuiScrollService"),u.qZA(),u._uU(6," into your component: "),u.qZA(),u._UZ(7,"tui-doc-code",11),u.qZA(),u.TgZ(8,"li")(9,"p"),u._uU(10," Call "),u.TgZ(11,"code"),u._uU(12,"scroll$"),u.qZA(),u._uU(13," method and subscribe to returned "),u.TgZ(14,"code"),u._uU(15,"Observable"),u.qZA(),u._uU(16," : "),u.qZA(),u._UZ(17,"tui-doc-code",11),u.qZA()()),2&e){const e=u.oxw();u.xp6(7),u.Q6J("code",e.exampleInjectService),u.xp6(10),u.Q6J("code",e.exampleScroll)}}let S=(()=>{class e{constructor(){this.exampleScroll=o.e(5619).then(o.t.bind(o,5619,17)),this.exampleModule=o.e(5608).then(o.t.bind(o,5608,17)),this.exampleInjectService=o.e(11533).then(o.t.bind(o,11533,17)),this.example1={TypeScript:o.e(270).then(o.t.bind(o,270,17)),HTML:o.e(31083).then(o.t.bind(o,31083,17)),LESS:o.e(74469).then(o.t.bind(o,74469,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["example-tui-scrollbar"]],decls:4,vars:0,consts:[["header","ScrollService","package","CDK","path","cdk/services/scroll.service.ts"],["pageTab",""],["id","interactive","heading","Interactive sample",3,"content"],[1,"b-full-width"],["tuiText","scroll$: Observable<[number, number]>"],[3,"showValues"],["documentationPropertyName","element","documentationPropertyType","Element"],["documentationPropertyName","scrollTop","documentationPropertyType","number"],["documentationPropertyName","scrollLeft","documentationPropertyType","number"],["documentationPropertyName","duration","documentationPropertyType","number"],[1,"b-demo-steps"],["filename","my.component.ts",3,"code"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-doc-page",0),u.YNc(1,k,4,1,"ng-template",1),u.YNc(2,A,14,1,"ng-template",1),u.YNc(3,q,18,2,"ng-template",1),u.qZA())},dependencies:[d.c,m.z,p.B,h.q,g.n,b.f,f.v,M],styles:[".wrapper[_ngcontent-%COMP%]{width:31.25rem;height:31.25rem;overflow:auto;padding:1.25rem;background-color:var(--tui-secondary)}@media all and (-webkit-min-device-pixel-ratio: 0) and (-webkit-min-device-pixel-ratio: 0),all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar, .wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:.375rem solid transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--tui-clear-hover)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--tui-clear-active)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--tui-text-03)}}.bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}.content[_ngcontent-%COMP%]{position:relative;width:62.5rem;height:62.5rem}"],changeDetection:0}),e})(),N=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({providers:[c.TuiScrollService],imports:[n.ez,r.u5,c.TuiElementModule,s.TuiInputCountModule,a.TuiButtonModule,a.TuiScrollbarModule,l.fV,i.Bz.forChild((0,l.Ve)(S)),l.Zp]}),e})()}}]);