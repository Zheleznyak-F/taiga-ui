(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79147],{79147:n=>{n.exports="import {Component, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    UntypedFormArray,\n    UntypedFormControl,\n    UntypedFormGroup,\n    ValidationErrors,\n    ValidatorFn,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-field-error-pipe-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiFieldErrorPipeExample4 {\n    @ViewChild('phoneErrorContent')\n    phoneErrorContent: PolymorpheusContent;\n\n    testForm = new UntypedFormGroup({\n        phones: new UntypedFormArray(\n            [\n                new UntypedFormControl('', [\n                    Validators.required,\n                    this.getPhoneLengthValidator(),\n                ]),\n            ],\n            [this.getPhoneArrayValidator()],\n        ),\n    });\n\n    get formData(): UntypedFormArray {\n        return this.testForm.get('phones') as UntypedFormArray;\n    }\n\n    addPhone(): void {\n        this.formData.push(new UntypedFormControl('', this.addValidators()));\n    }\n\n    removePhone(index: number): void {\n        this.formData.removeAt(index);\n\n        let n = 0;\n\n        while (n <= 1 && this.formData.controls[n]) {\n            this.formData.controls[n].setValidators([\n                Validators.required,\n                this.getPhoneLengthValidator(),\n            ]);\n            n++;\n        }\n    }\n\n    addValidators(): ValidationErrors | null {\n        return this.formData.controls.length < 2\n            ? [Validators.required, this.getPhoneLengthValidator()]\n            : null;\n    }\n\n    private getPhoneLengthValidator(): (\n        field: AbstractControl,\n    ) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value.length !== 12\n                ? {\n                      length: new TuiValidationError(this.phoneErrorContent),\n                  }\n                : null;\n    }\n\n    private getPhoneArrayValidator(): ValidatorFn {\n        return ((array: UntypedFormArray): ValidationErrors | null =>\n            array.controls.length < 2 ||\n            (!!array.controls.filter(item => item.errors).length && array.controls.length)\n                ? {\n                      length: new TuiValidationError(\n                          'You should add at least 2 phone number',\n                      ),\n                  }\n                : null) as ValidatorFn;\n    }\n}\n"}}]);