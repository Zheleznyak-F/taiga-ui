(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[71024],{71024:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {\n    TuiAvatarComponent,\n    TuiBadgedContentComponent,\n    TuiBadgeDirective,\n    TuiSwitch,\n} from '@taiga-ui/kit';\nimport {TuiCell} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiCell,\n        TuiBadgedContentComponent,\n        TuiBadgeDirective,\n        TuiIcon,\n        TuiAvatarComponent,\n        TuiSwitch,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected incoming = false;\n    protected outgoing = true;\n}\n"}}]);