(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89174],{89174:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTextfieldControllerModule} from '@taiga-ui/core';\nimport {TuiInputPasswordModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [ReactiveFormsModule, TuiInputPasswordModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected testForm = new FormGroup({\n        testValue: new FormControl('password', Validators.required),\n    });\n}\n"}}]);