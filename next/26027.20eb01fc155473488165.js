(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26027],{26027:n=>{n.exports='<button\n    tuiButton\n    type="button"\n    (click)="toggle(true)"\n>\n    Show/Hide\n</button>\n\n<ng-template\n    [tuiSheetDialog]="open"\n    [tuiSheetDialogOptions]="{stops: [\'29rem\']}"\n    (tuiSheetDialogChange)="toggle($event)"\n>\n    <header class="header">\n        <tui-input\n            tuiTextfieldIconLeft="tuiIconSearchLarge"\n            [formControl]="search"\n            (focus.capture)="scroll($event.currentTarget)"\n        >\n            Find user\n        </tui-input>\n    </header>\n    <button\n        *ngFor="let user of users$ | async"\n        class="item"\n        (click)="toggle(false)"\n    >\n        <tui-avatar\n            size="s"\n            [autoColor]="true"\n            [text]="user"\n        ></tui-avatar>\n        {{ user }}\n    </button>\n    <div [style.height]="buffer$ | async"></div>\n    <footer class="footer">\n        <button\n            tuiButton\n            (click)="toggle(false)"\n        >\n            Invite more users\n        </button>\n        Opens a separate app\n    </footer>\n</ng-template>\n'}}]);