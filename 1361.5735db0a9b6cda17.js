(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1361],{1361:n=>{n.exports='<ng-container *ngIf="currentQuestion < 2; else result">\n    <p>{{ currentQuestion + 1 }}. {{ questionTitles[currentQuestion] }}</p>\n\n    <form [formGroup]="form">\n        <label *ngFor="let option of questions[currentQuestion]; let index = index">\n            <input\n                size="s"\n                tuiCheckbox\n                type="checkbox"\n                [formControlName]="index"\n            />\n            {{ option }}\n        </label>\n    </form>\n\n    <button\n        size="s"\n        tuiButton\n        type="button"\n        class="tui-space_top-4"\n        (click)="nextQuestion()"\n    >\n        Next\n    </button>\n</ng-container>\n\n<ng-template #result>\n    <p><b>Your answers</b></p>\n\n    <div\n        *ngFor="let options of results; let i = index"\n        class="tui-space_top-4"\n    >\n        <p>{{ i + 1 }}. {{ questionTitles[i] }}</p>\n\n        <label *ngFor="let question of questions[i]; let j = index">\n            <input\n                size="s"\n                tuiCheckbox\n                type="checkbox"\n                [checked]="options[j]"\n            />\n            {{ question }}\n        </label>\n    </div>\n</ng-template>\n'}}]);