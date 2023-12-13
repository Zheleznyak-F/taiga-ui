(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[32410],{32410:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nconst PERCENT = 100;\n\n@Component({\n    selector: 'tui-axes-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAxesExample3 {\n    readonly axisXLabels = ['0', '25', '50', '75', '100'];\n    readonly value = [50, 24, 36, 95];\n    readonly largest = 100;\n\n    getBackground(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n\n    getHeight(value: number): number {\n        return Math.abs((value * PERCENT) / this.largest);\n    }\n}\n"}}]);