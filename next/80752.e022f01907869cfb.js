(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[80752],{80752:e=>{e.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiSwipeActionsComponent} from '@taiga-ui/addon-mobile';\nimport {TuiButtonDirective, TuiSurfaceDirective, TuiTitleDirective} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiCheckboxComponent} from '@taiga-ui/kit';\nimport {TuiCardLarge, TuiCellDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiSwipeActionsComponent,\n        TuiSurfaceDirective,\n        TuiCellDirective,\n        TuiCardLarge,\n        TuiAvatarComponent,\n        TuiTitleDirective,\n        TuiAmountPipe,\n        AsyncPipe,\n        NgIf,\n        TuiButtonDirective,\n        TuiCheckboxComponent,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected shareButton = false;\n    protected editButton = true;\n}\n"}}]);