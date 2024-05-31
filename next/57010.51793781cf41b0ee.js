(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[57010],{57010:n=>{n.exports="import {Component, Injectable} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange, TuiValueTransformer} from '@taiga-ui/cdk';\nimport {\n    TUI_DATE_RANGE_VALUE_TRANSFORMER,\n    TUI_DATE_VALUE_TRANSFORMER,\n} from '@taiga-ui/kit';\nimport {TuiInputDateRangeModule} from '@taiga-ui/legacy';\n\nclass ExampleDateRangeTransformer extends TuiValueTransformer<\n    TuiDayRange | null,\n    [Date, Date] | null\n> {\n    constructor(\n        private readonly dateTransformer: TuiValueTransformer<TuiDay | null, Date | null>,\n    ) {\n        super();\n    }\n\n    public fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {\n        const [transformedFrom, transformedTo] = controlValue || [null, null];\n        const from =\n            transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);\n        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);\n\n        return from && to && new TuiDayRange(from, to);\n    }\n\n    public toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {\n        const from =\n            componentValue && this.dateTransformer.toControlValue(componentValue.from);\n        const to =\n            componentValue && this.dateTransformer.toControlValue(componentValue.to);\n\n        return from && to && [from, to];\n    }\n}\n\n@Injectable()\nexport class ExampleDateTransformer extends TuiValueTransformer<\n    TuiDay | null,\n    Date | null\n> {\n    public fromControlValue(controlValue: Date | null): TuiDay | null {\n        return controlValue && TuiDay.fromLocalNativeDate(controlValue);\n    }\n\n    public toControlValue(componentValue: TuiDay | null): Date | null {\n        return componentValue?.toLocalNativeDate() || null;\n    }\n}\n\nexport function getExampleDateRangeTransformer(\n    dateTransformer: ExampleDateTransformer | null,\n): TuiValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {\n    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [TuiInputDateRangeModule, ReactiveFormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_DATE_VALUE_TRANSFORMER,\n            useClass: ExampleDateTransformer,\n        },\n        {\n            provide: TUI_DATE_RANGE_VALUE_TRANSFORMER,\n            deps: [TUI_DATE_VALUE_TRANSFORMER],\n            useFactory: getExampleDateRangeTransformer,\n        },\n    ],\n})\nexport default class ExampleComponent {\n    protected readonly control = new FormControl([\n        new Date(2018, 2, 10),\n        new Date(2018, 3, 20),\n    ]);\n}\n"}}]);