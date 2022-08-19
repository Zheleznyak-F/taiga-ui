(window.webpackJsonp=window.webpackJsonp||[]).push([[958],{GvCG:function(t,n,i){"use strict";i.r(n),n.default='<p i18n>\n    <code>tuiTable</code>\n    directive from\n    <code>@taiga-ui/addon-table</code>\n</p>\n\n<form\n    tuiTextfieldSize="m"\n    [tuiTextfieldLabelOutside]="true"\n    [formGroup]="form"\n>\n    <table\n        tuiTable\n        class="table"\n    >\n        <thead>\n            <tr>\n                <th\n                    tuiTh\n                    class="name"\n                >\n                    Name\n                </th>\n                <th tuiTh>Date</th>\n                <th tuiTh>Gender</th>\n                <th tuiTh>Quantity</th>\n                <th tuiTh>Sum, $</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td tuiTd>\n                    <tui-input formControlName="name">\n                        Name\n                        <input\n                            tuiTextfield\n                            placeholder="Ivan Ivanov"\n                        />\n                    </tui-input>\n                </td>\n                <td tuiTd>\n                    <tui-input-date formControlName="date">Date</tui-input-date>\n                </td>\n                <td tuiTd>\n                    <tui-select formControlName="color">\n                        Color\n                        <tui-data-list-wrapper\n                            *tuiDataList\n                            [items]="items"\n                        ></tui-data-list-wrapper>\n                    </tui-select>\n                </td>\n                <td tuiTd>\n                    <tui-input-count formControlName="quantity">Quantity</tui-input-count>\n                </td>\n                <td tuiTd>\n                    <tui-input-number\n                        formControlName="sum"\n                        [readOnly]="true"\n                    >\n                        Sum\n                    </tui-input-number>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</form>\n'}}]);