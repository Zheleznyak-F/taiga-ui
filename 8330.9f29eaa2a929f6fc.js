(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8330],{8330:e=>{e.exports=JSON.parse('{"name":"@taiga-ui/components","version":"4.7.0","private":true,"description":"Taiga UI by TBank is a set of components, services, directives and other tools to build high quality UI using modern Angular framework","keywords":["angular","kit","ui","component-library","component","service","directive"],"homepage":"https://github.com/taiga-family/taiga-ui","repository":"https://github.com/taiga-family/taiga-ui","license":"Apache-2.0","maintainers":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>","Maksim Ivanov <splincodewd@yandex.ru>","Vladimir Potekhin <vladimir.potekh@gmail.com>","Nikita Barsukov <nikita.s.barsukov@gmail.com>"],"workspaces":["projects/*"],"scripts":{"prepare":"husky","start":"nx serve demo","start:default":"nx serve demo -c def","start:shadow":"nx serve demo -c shadow","start:host":"nx serve demo --open --host 0.0.0.0 --disable-host-check","build:ssr":"nx build demo && nx run demo:server:production","prerender":"nx run demo:prerender","pretest":"npx tsc --project tsconfig.spec.json","test":"nx run-many --target test --all --output-style=stream","test:e2e":"nx e2e-ui demo-playwright","cypress:open":"cypress open --browser chrome --project ./projects/demo-cypress","*** Workflow ***":"","stylelint":"stylelint \'**/*.{less,css}\' --config package.json","lint":"eslint .","cspell":"cspell --relative --dot --gitignore .","prettier":"prettier !package-lock.json . --ignore-path .gitignore","typecheck":"tsc --noEmit --strict --incremental false --tsBuildInfoFile null --project tsconfig.spec.json","*** Build **":"","build:demo":"nx build demo","build:demo:next":"nx build demo -c next","*** Release ***":"","release":"standard-version -a --no-verify","release:patch":"ts-node ./scripts/release.ts --release-as patch","release:minor":"ts-node ./scripts/release.ts --release-as minor","release:major":"ts-node ./scripts/release.ts --release-as major","*** CI ***":"","run-many:build:libs":"nx run-many --target build --all --exclude=demo --output-style=stream --nxBail","run-many:publish:libs":"nx run-many --target publish --all --output-style=stream --nxBail"},"commitlint":{"extends":["@taiga-ui/commitlint-config"]},"lint-staged":{"*.less":["stylelint --fix"],"*.{js,ts,html,svg,yml,md,less,json}":["prettier --write","cspell --no-must-find-files"]},"browserslist":["extends @taiga-ui/browserslist-config"],"prettier":"@taiga-ui/prettier-config","eslintConfig":{"extends":["plugin:@taiga-ui/experience/all","plugin:@taiga-ui/experience/taiga-naming","plugin:@taiga-ui/experience/entry-points"],"rules":{"jest/prefer-importing-jest-globals":"off","sonarjs/arguments-order":"off","sonarjs/concise-regex":"off","sonarjs/no-angular-bypass-sanitization":"off","sonarjs/no-nested-conditional":"off","sonarjs/no-redundant-type-constituents":"off","sonarjs/no-unused-expressions":"off","sonarjs/prefer-nullish-coalescing":"off","sonarjs/redundant-type-aliases":"off","unicorn/consistent-destructuring":"off"},"overrides":[{"files":["**/legacy/**/*.ts"],"rules":{"@angular-eslint/prefer-standalone":"off"}},{"files":["**/demo/**/*.ts"],"rules":{"max-classes-per-file":"off"}}],"root":true},"stylelint":{"extends":["@taiga-ui/stylelint-config"],"rules":{"selector-class-pattern":["^(_.*)|(t-.*)|(tui-.*)|(ng-.*)|(hljs.*)$",{"resolveNestedSelectors":true}]},"overrides":[{"files":["**/demo/**/*.{less,css,scss}"],"rules":{"no-empty-source":null,"selector-class-pattern":null}}]},"devDependencies":{"@angular-devkit/build-angular":"16.2.15","@angular-devkit/core":"16.2.15","@angular-devkit/schematics":"16.2.15","@angular/animations":"16.2.12","@angular/cdk":"16.2.14","@angular/cli":"16.2.15","@angular/common":"16.2.12","@angular/compiler-cli":"16.2.12","@angular/core":"16.2.12","@angular/forms":"16.2.12","@angular/platform-browser":"16.2.12","@angular/router":"16.2.12","@nx/angular":"19.7.3","@nx/jest":"19.7.3","@nx/workspace":"19.7.3","@schematics/angular":"16.2.15","@taiga-ui/browserslist-config":"0.182.0","@taiga-ui/commitlint-config":"0.182.0","@taiga-ui/cspell-config":"0.182.0","@taiga-ui/design-tokens":"0.135.0","@taiga-ui/eslint-plugin-experience":"0.182.0","@taiga-ui/event-plugins":"4.2.0","@taiga-ui/prettier-config":"0.182.0","@taiga-ui/stylelint-config":"0.182.0","@taiga-ui/tsconfig":"0.182.0","@types/glob":"8.1.0","@types/loader-utils":"2.0.6","@types/node":"22.5.5","@types/webpack-env":"1.18.5","cpy-cli":"5.0.0","husky":"9.1.6","lint-staged":"15.2.10","ng-morph":"4.8.1","ng-packagr":"16.2.3","ngx-highlightjs":"10.0.0","nx":"19.7.3","rxjs":"7.5.0","standard-version":"9.5.0","ts-mockito":"2.6.1","ts-node":"10.9.2","typescript":"5.0.4","webpack":"5.94.0"},"engines":{"node":">= 20","npm":">= 10","yarn":"Please use npm instead of yarn to install dependencies"},"authors":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>"],"standard-version":{"scripts":{"postchangelog":"ts-node ./scripts/postchangelog.ts","postbump":"ts-node ./scripts/postbump.ts"},"types":[{"type":"feat","section":"🚀 Features"},{"type":"fix","section":"🐞 Bug Fixes"},{"type":"deprecate","section":"⚠️ Deprecations"}]}}')}}]);