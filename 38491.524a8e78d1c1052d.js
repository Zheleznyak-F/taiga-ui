(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38491],{38491:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-rating-example-2',\n    templateUrl: 'index.html',\n    styleUrls: ['index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiRatingExample2 {\n    value = 0;\n\n    readonly icon: PolymorpheusContent<TuiContextWithImplicit<number>> = ({\n        $implicit,\n    }) => {\n        switch ($implicit) {\n            case 1:\n                return 'tuiIconFrownLarge';\n            case 2:\n                return 'tuiIconMehLarge';\n            default:\n                return 'tuiIconSmileLarge';\n        }\n    };\n}\n"}}]);