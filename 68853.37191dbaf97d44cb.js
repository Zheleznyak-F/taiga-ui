(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68853],{68853:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-data-list-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDataListExample1 {\n    readonly arrow = TUI_ARROW;\n\n    readonly groups = [\n        {\n            label: 'Components',\n            items: [\n                {\n                    label: 'Input',\n                    routerLink: '/components/input',\n                },\n                {\n                    label: 'Select',\n                    routerLink: '/components/select',\n                },\n                {\n                    label: 'DataList',\n                    routerLink: '/components/data-list',\n                },\n            ],\n        },\n        {\n            label: 'Styles',\n            items: [\n                {\n                    label: 'Icons',\n                    routerLink: '/icons',\n                },\n                {\n                    label: 'Typography',\n                    routerLink: '/typography',\n                },\n            ],\n        },\n        {\n            label: '',\n            items: [\n                {\n                    label: 'Changelog',\n                    routerLink: '/changelog',\n                },\n            ],\n        },\n    ];\n}\n"}}]);