(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55827],{55827:e=>{e.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-radio-labeled-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiRadioLabeledExample1 {\n    items = [{name: 'tariff1'}, {name: 'tariff2'}, {name: 'tariff3'}];\n\n    testForm = new UntypedFormGroup({\n        testValue1: new UntypedFormControl(this.items[0]),\n    });\n}\n"}}]);