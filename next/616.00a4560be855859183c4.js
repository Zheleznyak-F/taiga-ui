(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{Kdaa:function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-dialog-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent5 {\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    onClick(\n        content: PolymorpheusContent<TuiDialogContext>,\n        header: PolymorpheusContent,\n        size: TuiDialogSize,\n    ): void {\n        this.dialogService\n            .open(content, {\n                label: `What a cool library set`,\n                header,\n                size,\n            })\n            .subscribe();\n    }\n}\n"}}]);