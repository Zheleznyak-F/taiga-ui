(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[43035],{43035:n=>{n.exports='<tui-hosted-dropdown\n    #dropdown\n    [content]="content"\n    [tuiDropdownMaxHeight]="500"\n>\n    <button\n        appearance="flat"\n        tuiIconButton\n        type="button"\n        [icon]="arrow"\n        [pseudoHover]="dropdown.open || null"\n    ></button>\n</tui-hosted-dropdown>\n<ng-template #content>\n    <tui-data-list\n        size="l"\n        class="list"\n    >\n        <tui-opt-group\n            tuiMultiSelectGroup\n            [(ngModel)]="value"\n        >\n            <tui-opt-group label="Main dishes menu with long label">\n                <button\n                    *ngFor="let burger of burgers"\n                    tuiOption\n                    [value]="burger"\n                >\n                    {{ burger }}\n                </button>\n            </tui-opt-group>\n            <tui-opt-group label="Drinks">\n                <button\n                    *ngFor="let drink of drinks"\n                    tuiOption\n                    [value]="drink"\n                >\n                    {{ drink }}\n                </button>\n            </tui-opt-group>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n<p>{{ value }}</p>\n'}}]);