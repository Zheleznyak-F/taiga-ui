(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82983],{82983:e=>{e.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-radio-block-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiRadioBlockExample2 {\n    readonly testForm = new UntypedFormGroup({\n        testValue: new UntypedFormControl('orange'),\n    });\n\n    readonly fruits = ['apple', 'orange', 'pineapple'];\n}\n"}}]);