(window.webpackJsonp=window.webpackJsonp||[]).push([[1588],{"2nqa":function(n,e,t){"use strict";t.r(e),e.default='<div class="player">\n    <video\n        #video\n        tuiMedia\n        width="320"\n        class="video"\n        [(currentTime)]="currentTime"\n        [(paused)]="paused"\n        (click)="toggleState()"\n    >\n        <source\n            src="/assets/media/bbb.mp4"\n            type="video/mp4"\n        />\n    </video>\n    <div\n        tuiMode="onDark"\n        class="controls"\n    >\n        <button\n            tuiIconButton\n            type="button"\n            title="Play/Pause"\n            size="s"\n            shape="rounded"\n            appearance="flat"\n            [icon]="icon"\n            (click)="toggleState()"\n        ></button>\n        <input\n            tuiSlider\n            type="range"\n            step="any"\n            class="slider"\n            [max]="video.duration"\n            [(ngModel)]="currentTime"\n        />\n        <div class="time">\n            <time [attr.datetime]="getTime(currentTime)">\n                {{ getTime(currentTime) }}\n            </time>\n            /\n            <time [attr.datetime]="getTime(video.duration)">\n                {{ getTime(video.duration) }}\n            </time>\n        </div>\n    </div>\n</div>\n'}}]);