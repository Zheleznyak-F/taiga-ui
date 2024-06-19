(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[62809],{62809:e=>{e.exports="import {Component, inject, INJECTOR} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@taiga-ui/polymorpheus';\n\nimport {SearchDialogExample} from './search-example/search-dialog-example.component';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent7\",\n    imports: [TuiButton],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly injector = inject(INJECTOR);\n\n    protected showDialog(): void {\n        this.dialogs\n            .open(new PolymorpheusComponent(SearchDialogExample, this.injector), {\n                size: 'page',\n                closeable: true,\n                dismissible: true,\n            })\n            .subscribe();\n    }\n}\n"}}]);