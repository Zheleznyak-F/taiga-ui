(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39403],{39403:n=>{n.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-date-example-5',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputDateExample5 {\n    readonly nativeDateControl = new UntypedFormControl(new Date(2022, 0, 26));\n    readonly defaultControl = new UntypedFormControl(new TuiDay(2022, 0, 26));\n}\n"}}]);