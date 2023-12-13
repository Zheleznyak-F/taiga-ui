(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[42899],{42899:e=>{e.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-inline-example-1`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputInlineExample1 {\n    testForm = new UntypedFormGroup({\n        testValue1: new UntypedFormControl(`Hello 1`),\n        testValue2: new UntypedFormControl(`Hello 2`),\n        testValue3: new UntypedFormControl(`Hello 3`),\n        testValue4: new UntypedFormControl(``),\n    });\n\n    get toggleContent(): string {\n        return this.testForm.disabled ? `enable (allow editing)` : `disable`;\n    }\n\n    get input4Empty(): boolean {\n        return this.testForm.get(`testValue4`)!.value === ``;\n    }\n\n    onToggleClick(): void {\n        if (this.testForm.disabled) {\n            this.testForm.enable();\n        } else {\n            this.testForm.disable();\n        }\n    }\n}\n"}}]);