(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25011],{25011:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {tuiInputDateOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-date-example-6',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [tuiInputDateOptionsProvider({nativePicker: true})],\n})\nexport class TuiInputDateExample6 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiDay(2017, 0, 15)),\n    });\n}\n"}}]);