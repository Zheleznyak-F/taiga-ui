(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49084],{49084:e=>{e.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-count-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputCountExample2 {\n    testForm = new UntypedFormGroup({\n        testValue1: new UntypedFormControl(10, Validators.required),\n        testValue2: new UntypedFormControl(10, Validators.required),\n    });\n}\n"}}]);