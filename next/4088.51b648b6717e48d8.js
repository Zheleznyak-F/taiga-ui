(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4088],{4088:n=>{n.exports="import {isPlatformBrowser, NgFor} from '@angular/common';\nimport {Component, inject, PLATFORM_ID} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiItemDirective} from '@taiga-ui/cdk';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiCarouselComponent, TuiIslandModule, TuiPaginationModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiCarouselComponent,\n        TuiIslandModule,\n        TuiPaginationModule,\n        NgFor,\n        TuiButtonDirective,\n        TuiItemDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 4_000 : 0;\n    protected index = 2;\n\n    protected readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Michael Palin',\n        'Graham Chapman',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n}\n"}}]);