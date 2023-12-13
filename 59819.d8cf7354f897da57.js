(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59819],{59819:e=>{e.exports='<div class="description">\n    To highlight extra characters:\n    <ul class="steps">\n        <li>\n            use\n            <code>maxLength</code>\n            input\n        </li>\n        <li class="steps_optional">\n            (Optional) Don\'t forget to set form validator (for example,\n            <code>Validators.maxLength</code>\n            ) if you want to make field invalid on exceeding the characters limit\n        </li>\n    </ul>\n</div>\n\n<form [formGroup]="testForm">\n    <label tuiLabel="Write a wise thought">\n        <tui-textarea\n            formControlName="testValue1"\n            tuiHintContent="it\'s just a joke"\n            [expandable]="true"\n            [maxLength]="maxLength"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Type it\n        </tui-textarea>\n        <tui-error\n            formControlName="testValue1"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n</form>\n'}}]);