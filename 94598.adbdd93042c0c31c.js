(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[94598],{94598:n=>{n.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiCurrency} from '@taiga-ui/addon-commerce';\nimport {TuiDay, TuiTime} from '@taiga-ui/cdk';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nclass Account {\n    constructor(\n        readonly id: string,\n        readonly name: string,\n        readonly amount: number,\n        readonly currency: TuiCurrency,\n        readonly cardSvg: string,\n    ) {}\n}\n\n@Component({\n    selector: `tui-form-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.style.less`],\n    changeDetection,\n})\nexport class TuiExample {\n    readonly svgIcons = {\n        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,\n        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,\n        intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,\n        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,\n    };\n\n    persons = [new User(`Roman`, `Sedov`), new User(`Alex`, `Inkin`)];\n\n    accounts = [\n        new Account(`1`, `Common`, 24876.55, TuiCurrency.Ruble, this.svgIcons.common),\n        new Account(`2`, `Universal`, 335, TuiCurrency.Dollar, this.svgIcons.universal),\n        new Account(\n            `3`,\n            `Intersection`,\n            10000,\n            TuiCurrency.Euro,\n            this.svgIcons.intersection,\n        ),\n        new Account(`4`, `Mutation`, 100, TuiCurrency.Pound, this.svgIcons.mutation),\n    ];\n\n    testForm = new UntypedFormGroup({\n        nameValue: new UntypedFormControl(``, Validators.required),\n        textValue: new UntypedFormControl(``, Validators.required),\n        passwordValue: new UntypedFormControl(``, Validators.required),\n        phoneValue: new UntypedFormControl(``, Validators.required),\n        moneyValue: new UntypedFormControl(`100`, Validators.required),\n        periodValue: new UntypedFormControl(new TuiDay(2017, 2, 15), Validators.required),\n        timeValue: new UntypedFormControl(new TuiTime(12, 30), Validators.required),\n        personValue: new UntypedFormControl(this.persons[0]),\n        quantityValue: new UntypedFormControl(50_000, Validators.required),\n        radioValue: new UntypedFormControl(`with-commission`),\n        accountWherefrom: new UntypedFormControl(null),\n        accountWhere: new UntypedFormControl(null),\n        checkboxValue: new UntypedFormControl(false),\n        osnoValue: new UntypedFormControl(false),\n        usnValue: new UntypedFormControl(false),\n        eshnValue: new UntypedFormControl(false),\n        envdValue: new UntypedFormControl(false),\n        usn2Value: new UntypedFormControl(false),\n        patentValue: new UntypedFormControl(false),\n    });\n}\n"}}]);