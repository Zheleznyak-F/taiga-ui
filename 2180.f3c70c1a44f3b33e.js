(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2180],{2180:n=>{n.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-card-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputCardExample1 {\n    readonly form = new UntypedFormGroup({\n        card: new UntypedFormControl(''),\n        expire: new UntypedFormControl(''),\n        cvc: new UntypedFormControl(''),\n    });\n\n    get card(): string | null {\n        const value: string | null | undefined = this.form.get('card')?.value;\n\n        if ((value?.length ?? 0) < 7) {\n            return null;\n        }\n\n        switch (value?.charAt(0)) {\n            case '0':\n            case '1':\n            case '2':\n                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';\n            case '3':\n            case '4':\n            case '5':\n                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';\n            case '6':\n            case '7':\n                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';\n            case '8':\n            case '9':\n            default:\n                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';\n        }\n    }\n}\n"}}]);