(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41113],{41113:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAxes, TuiLineChart} from '@taiga-ui/addon-charts';\nimport type {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [TuiAxes, TuiLineChart],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly dotted: readonly TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n    ];\n\n    protected readonly solid: readonly TuiPoint[] = [\n        [150, 50],\n        [200, 150],\n        [250, 155],\n    ];\n\n    protected readonly dashed: readonly TuiPoint[] = [\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n}\n"}}]);