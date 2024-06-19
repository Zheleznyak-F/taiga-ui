import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiBadgeDirective, TuiSensitiveDirective, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiSensitiveDirective,
        TuiButton,
        TuiBadgeDirective,
        TuiLabel,
        TuiSwitch,
        FormsModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected sensitive = true;
}
