(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[88112],{88112:n=>{n.exports="import {AfterViewInit, Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\n\nconst LONG_TEXT_EXAMPLE = `\nIn Java: everything is an object.\nIn Clojure: everything is a list.\nIn JavaScript: everything is a terrible mistake.\n`;\n\nexport function maxLengthMessageFactory(context: {requiredLength: string}): string {\n    return `Maximum length — ${context.requiredLength}`;\n}\n\n@Component({\n    selector: 'tui-text-area-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                maxlength: maxLengthMessageFactory,\n            },\n        },\n    ],\n})\nexport class TuiTextAreaExample4 implements AfterViewInit {\n    readonly maxLength = 97;\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [\n            Validators.required,\n            Validators.maxLength(this.maxLength),\n        ]),\n    });\n\n    ngAfterViewInit(): void {\n        tuiMarkControlAsTouchedAndValidate(this.testForm);\n    }\n}\n"}}]);