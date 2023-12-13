(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17486],{17486:n=>{n.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInputCountOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-count-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputCountOptionsProvider({\n            icons: {\n                up: 'tuiIconChevronUp',\n                down: 'tuiIconChevronDown',\n            },\n            appearance: 'secondary',\n            step: 10,\n            min: 10,\n            max: 100,\n        }),\n    ],\n})\nexport class TuiInputCountExample3 {\n    testForm = new UntypedFormGroup({\n        testValue1: new UntypedFormControl(10, Validators.required),\n        testValue2: new UntypedFormControl(10, Validators.required),\n    });\n}\n"}}]);