(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[66797],{66797:e=>{e.exports="import {ClipboardModule} from '@angular/cdk/clipboard';\nimport {AsyncPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component, inject, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {WA_WINDOW} from '@ng-web-apis/common';\nimport {TuiDocCopy} from '@taiga-ui/addon-doc';\nimport {tuiInjectElement, tuiPure} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"Exampletable\",\n    selector: 'table[colors]',\n    imports: [NgIf, AsyncPipe, NgForOf, TuiDocCopy, ClipboardModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TableColors {\n    private readonly win = inject(WA_WINDOW);\n    private readonly styles = this.win.getComputedStyle(tuiInjectElement());\n\n    @Input()\n    public colors: readonly string[] = [];\n\n    @tuiPure\n    protected getValue(variable: string): string {\n        return this.styles.getPropertyValue(variable);\n    }\n}\n"}}]);