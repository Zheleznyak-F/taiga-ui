(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96790],{96790:n=>{n.exports="import {Component, Inject, Injector} from '@angular/core';\nimport {UntypedFormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';\nimport {tuiControlValue, TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {TUI_MONTHS, TuiDialogService} from '@taiga-ui/core';\nimport {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {combineLatest, map, Observable} from 'rxjs';\n\n@Component({\n    selector: 'tui-mobile-calendar-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMobileCalendarExample4 {\n    private readonly control = new UntypedFormControl(null);\n\n    private readonly dialog$: Observable<TuiDayRange> = this.dialogs.open(\n        new PolymorpheusComponent(\n            TuiMobileCalendarDialogComponent,\n            Injector.create({\n                providers: [\n                    {\n                        provide: TUI_CALENDAR_DATE_STREAM,\n                        useValue: tuiControlValue(this.control),\n                    },\n                ],\n                parent: this.injector,\n            }),\n        ),\n        {\n            size: 'fullscreen',\n            closeable: false,\n            data: {\n                min: new TuiDay(2018, 2, 10),\n            },\n        },\n    );\n\n    readonly date$ = combineLatest([\n        tuiControlValue<TuiDayRange>(this.control),\n        this.months$,\n    ]).pipe(\n        map(([value, months]) => {\n            if (!value) {\n                return 'Choose a date range';\n            }\n\n            return value.isSingleDay\n                ? `${months[value.from.month]} ${value.from.day}, ${value.from.year}`\n                : `${months[value.from.month]} ${value.from.day}, ${value.from.year} - ${\n                      months[value.to.month]\n                  } ${value.to.day}, ${value.to.year}`;\n        }),\n    );\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,\n        @Inject(Injector) private readonly injector: Injector,\n        @Inject(TUI_MONTHS) private readonly months$: Observable<string[]>,\n    ) {}\n\n    get empty(): boolean {\n        return !this.control.value;\n    }\n\n    onClick(): void {\n        this.dialog$.subscribe(value => this.control.setValue(value));\n    }\n}\n"}}]);