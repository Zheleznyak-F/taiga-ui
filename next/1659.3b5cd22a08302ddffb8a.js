(window.webpackJsonp=window.webpackJsonp||[]).push([[1659],{kVeO:function(n,t,e){"use strict";e.r(t),t.default='<form\n    class="b-form"\n    [formGroup]="group"\n>\n    <tui-input formControlName="name">Name</tui-input>\n    <tui-select\n        class="tui-space_vertical-3"\n        [ngModelOptions]="{standalone: true}"\n        [(ngModel)]="type"\n    >\n        Connection\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-input\n        *ngIf="type === items[0]; else phone"\n        formControlName="contact"\n        [tuiValidator]="validator"\n    >\n        Contact\n    </tui-input>\n    <ng-template #phone>\n        <tui-input-phone formControlName="contact">Contact</tui-input-phone>\n    </ng-template>\n</form>\n'}}]);