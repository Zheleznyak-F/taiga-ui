(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46829],{46829:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';\nimport {TuiComboBoxModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [FormsModule, TuiComboBoxModule, TuiDataListWrapper, TuiFilterByInputPipe],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = inject<readonly string[]>('Pythons' as any);\n    protected value = '';\n}\n"}}]);