(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[28777],{28777:e=>{e.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-slider-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSliderExample3 {\n    readonly labels: number[] = [0, 250, 500, 750, 1000];\n    readonly formControl = new UntypedFormControl(250);\n\n    patchValue(newValue: number): void {\n        this.formControl.patchValue(newValue);\n    }\n}\n"}}]);