(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3934],{3934:e=>{e.exports="import {CommonModule} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [CommonModule, FormsModule, TuiSwitch],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiSwitchOptionsProvider({showIcons: false, appearance: () => 'primary'}),\n    ],\n})\nexport default class Example {\n    protected value = false;\n}\n"}}]);