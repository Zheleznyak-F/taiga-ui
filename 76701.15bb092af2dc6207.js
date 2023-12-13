(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76701],{76701:e=>{e.exports="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertContext} from '@taiga-ui/cdk';\nimport {TuiAlertOptions, TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-alerts-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAlertsExampleComponent2 {\n    @ViewChild('withdrawTemplate')\n    withdrawTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;\n\n    @ViewChild('depositTemplate')\n    depositTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;\n\n    money = 1000;\n\n    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}\n\n    showWithdrawAlert(): void {\n        this.alerts\n            .open(this.withdrawTemplate || '', {\n                label: 'A template sample',\n                status: 'warning',\n                autoClose: false,\n            })\n            .subscribe();\n    }\n\n    showDepositAlert(): void {\n        this.alerts\n            .open(this.depositTemplate || '', {\n                label: 'A template sample',\n                status: 'success',\n                autoClose: false,\n            })\n            .subscribe();\n    }\n\n    withdraw(): void {\n        this.money -= 100;\n    }\n\n    deposit(): void {\n        this.money += 100;\n    }\n}\n"}}]);