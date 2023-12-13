(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17007],{17007:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiPure} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'example-tui-pure-getter',\n    templateUrl: './pure-getter.component.html',\n    changeDetection,\n})\nexport class ExampleTuiPureGetterComponent {\n    @tuiPure\n    get fibonacci42(): number {\n        return this.fibonacci(42);\n    }\n\n    show = false;\n\n    private fibonacci(num: number): number {\n        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);\n    }\n}\n"}}]);