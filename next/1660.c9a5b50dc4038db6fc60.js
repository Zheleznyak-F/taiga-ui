(window.webpackJsonp=window.webpackJsonp||[]).push([[1660],{"1Jpz":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-validator-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiValidatorExample1 {\n    readonly items = [`Email`, `Phone`];\n\n    type = this.items[0];\n\n    readonly group = new FormGroup({\n        name: new FormControl(``, Validators.required),\n        contact: new FormControl(``, Validators.required),\n    });\n\n    readonly validator = Validators.email;\n}\n"}}]);