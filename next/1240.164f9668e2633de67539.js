(window.webpackJsonp=window.webpackJsonp||[]).push([[1240],{UyHo:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: `tui-rating-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n})\nexport class TuiRatingExample1 {\n    rateControl = new FormControl(2);\n    rateValue = 2;\n\n    enableOrDisable(): void {\n        if (this.rateControl.disabled) {\n            this.rateControl.enable();\n        } else {\n            this.rateControl.disable();\n        }\n    }\n}\n"}}]);