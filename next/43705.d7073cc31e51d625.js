(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[43705],{43705:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiLink} from '@taiga-ui/core';\nimport {TuiSwitch} from '@taiga-ui/kit';\nimport {TuiIslandDirective} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiIslandDirective, ReactiveFormsModule, TuiSwitch, TuiLink, TuiButton],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected testForm = new FormGroup({\n        testValue: new FormControl(true),\n    });\n}\n"}}]);