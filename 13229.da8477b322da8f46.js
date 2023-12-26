(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13229],{13229:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';\nimport {map, Observable, of, startWith, switchMap} from 'rxjs';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n        readonly disabled: boolean = false,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst DATA: readonly User[] = [\n    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),\n    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),\n    new User('Gabriel José', 'de la Concordia «Gabo» García Márquez'),\n];\n\n@Component({\n    selector: 'tui-input-example-8',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputExample8 {\n    readonly control = new FormControl('');\n\n    firstName = '';\n    lastName = '';\n\n    readonly items$ = this.control.valueChanges.pipe(\n        startWith(''),\n        switchMap(value =>\n            this.request(value ?? '').pipe(\n                map(response => {\n                    if (response.length === 1 && String(response[0]) === value) {\n                        this.onClick(response[0]);\n\n                        return [];\n                    }\n\n                    return response;\n                }),\n            ),\n        ),\n        startWith(DATA),\n    );\n\n    onClick({lastName, firstName}: User): void {\n        this.lastName = lastName;\n        this.firstName = firstName;\n    }\n\n    // Request imitation\n    private request(query: string): Observable<readonly User[]> {\n        return of(DATA.filter(item => TUI_DEFAULT_MATCHER(item, query)));\n    }\n}\n"}}]);