(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16023],{16023:e=>{e.exports='<tui-items-with-more [required]="required">\n    <ng-container *ngFor="let item of items">\n        <tui-tag\n            *tuiItem\n            size="m"\n            class="tui-space_right-1"\n            [value]="item"\n        ></tui-tag>\n    </ng-container>\n    <ng-template\n        let-index\n        tuiMore\n    >\n        and {{ getRemaining(index) }} more\n    </ng-template>\n</tui-items-with-more>\n'}}]);