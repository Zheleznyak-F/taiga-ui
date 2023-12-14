(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[21311],{21311:e=>{e.exports="import {Component, ElementRef, Inject, Self} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {fromEvent, takeUntil} from 'rxjs';\n\n@Component({\n    selector: `tui-destroy-example`,\n    templateUrl: `./template.html`,\n    encapsulation,\n    changeDetection,\n    providers: [TuiDestroyService],\n})\nexport class TuiDestroyExample {\n    constructor(\n        @Self()\n        @Inject(TuiDestroyService)\n        destroy$: TuiDestroyService,\n        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,\n    ) {\n        fromEvent(nativeElement, `click`)\n            .pipe(takeUntil(destroy$))\n            .subscribe(() => console.info(`click`));\n    }\n}\n"}}]);