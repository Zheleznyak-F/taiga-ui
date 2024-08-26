(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1059],{1059:n=>{n.exports="import {Component, inject} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDataListWrapper,\n    TuiFilterByInputPipe,\n    TuiStringifyContentPipe,\n} from '@taiga-ui/kit';\nimport {TuiComboBoxModule} from '@taiga-ui/legacy';\n\ninterface User {\n    readonly id: number;\n    readonly name: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        ReactiveFormsModule,\n        TuiComboBoxModule,\n        TuiDataListWrapper,\n        TuiFilterByInputPipe,\n        TuiStringifyContentPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = inject<readonly string[]>('Pythons' as any);\n\n    protected readonly users = [\n        {id: 1, name: 'John Cleese'},\n        {id: 2, name: 'Eric Idle'},\n        {id: 3, name: 'Graham Chapman'},\n        {id: 4, name: 'Michael Palin'},\n        {id: 5, name: 'Terry Gilliam'},\n    ];\n\n    protected readonly form = new FormGroup({\n        user: new FormControl<User | null>(null),\n        user2: new FormControl<User | null>(null),\n    });\n\n    protected readonly stringify = ({name}: User): string => name;\n\n    protected readonly matcherString = (name: string, search: string): boolean =>\n        name.split(' ').pop()!.toLowerCase().startsWith(search.toLowerCase());\n\n    protected readonly matcherUser = (user: User, search: string): boolean =>\n        user.name.toLowerCase().startsWith(search.toLowerCase());\n}\n"}}]);