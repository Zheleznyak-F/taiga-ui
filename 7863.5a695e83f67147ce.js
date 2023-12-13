(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7863],{7863:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {UntypedFormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\nimport {databaseMockData} from './database-mock-data';\nimport {RequestService} from './request.service';\n\n@Component({\n    selector: 'tui-combo-box-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    providers: [RequestService, TuiDestroyService],\n})\nexport class TuiComboBoxExample2 {\n    search: string | null = '';\n\n    readonly control = new UntypedFormControl(databaseMockData[0]);\n\n    constructor(@Inject(RequestService) readonly service: RequestService) {}\n}\n"}}]);