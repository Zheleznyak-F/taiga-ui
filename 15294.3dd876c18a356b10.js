(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[15294],{15294:a=>{a.exports='<div class="flex">\n    <tui-axes\n        class="axes"\n        [axisXLabels]="labelsX"\n        [axisYLabels]="labelsY"\n    >\n        <tui-bar-chart\n            [max]="10000"\n            [tuiHintAppearance]="appearance"\n            [tuiHintContent]="hint"\n            [value]="value"\n        ></tui-bar-chart>\n    </tui-axes>\n\n    <tui-axes\n        class="axes"\n        [axisXLabels]="labelsX"\n        [axisYLabels]="labelsY"\n    >\n        <tui-bar-chart\n            [collapsed]="true"\n            [max]="10000"\n            [tuiHintAppearance]="appearance"\n            [tuiHintContent]="hint"\n            [value]="value"\n        ></tui-bar-chart>\n    </tui-axes>\n</div>\n\n<tui-select\n    class="b-form"\n    [(ngModel)]="appearance"\n>\n    Hint appearance\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="appearances"\n    ></tui-data-list-wrapper>\n</tui-select>\n'}}]);