(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[37803],{37803:e=>{e.exports="import {Component, OnInit} from '@angular/core';\nimport {AbstractControl, UntypedFormControl, ValidatorFn} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-files-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputFilesExample2 implements OnInit {\n    readonly control = new UntypedFormControl([], [maxFilesLength(5)]);\n    rejectedFiles: readonly TuiFileLike[] = [];\n\n    ngOnInit(): void {\n        this.control.statusChanges.subscribe(response => {\n            console.info('STATUS', response);\n            console.info('ERRORS', this.control.errors, '\\n');\n        });\n    }\n\n    onReject(files: TuiFileLike | readonly TuiFileLike[]): void {\n        this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];\n    }\n\n    removeFile({name}: File): void {\n        this.control.setValue(\n            this.control.value?.filter((current: File) => current.name !== name) ?? [],\n        );\n    }\n\n    clearRejected({name}: TuiFileLike): void {\n        this.rejectedFiles = this.rejectedFiles.filter(\n            rejected => rejected.name !== name,\n        );\n    }\n}\n\nexport function maxFilesLength(maxLength: number): ValidatorFn {\n    return ({value}: AbstractControl) =>\n        value.length > maxLength\n            ? {\n                  maxLength: new TuiValidationError(\n                      'Error: maximum limit - 5 files for upload',\n                  ),\n              }\n            : null;\n}\n"}}]);