(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60579],{60579:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var o=s(75407),n=s(16895);const i=(()=>{var e;class t{constructor(){this.jestConfig=s.e(10182).then(s.t.bind(s,10182,17)),this.packageJson=s.e(57002).then(s.t.bind(s,57002,17)),this.setupJest=s.e(41929).then(s.t.bind(s,41929,17))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.VBU({type:e,selectors:[["ng-component"]],standalone:!0,features:[o.aNF],decls:67,vars:3,consts:[["header","Jest"],[1,"tui-list"],[1,"tui-list__item"],["filename","jest.config.ts",3,"code"],["filename","package.json",3,"code"],["filename","setup-jest.ts",3,"code"]],template:function(e,t){1&e&&(o.j41(0,"tui-doc-page",0)(1,"p"),o.EFF(2," If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. "),o.k0s(),o.j41(3,"p"),o.EFF(4," Taiga UI uses "),o.j41(5,"code"),o.EFF(6,"@ng-web-apis/common"),o.k0s(),o.EFF(7," to avoid accessing global variables like "),o.j41(8,"code"),o.EFF(9,"window"),o.k0s(),o.EFF(10," or "),o.j41(11,"code"),o.EFF(12,"navigator"),o.k0s(),o.EFF(13," directly. Which requires Server Side Rendering (SSR) with the help of its sister library "),o.j41(14,"code"),o.EFF(15,"@ng-web-apis/universal"),o.k0s(),o.EFF(16," for Jest to run properly. "),o.k0s(),o.j41(17,"p"),o.EFF(18," Otherwise, you're gonna face errors like "),o.j41(19,"code"),o.EFF(20,"ReferenceError: IntersectionObserver is not defined"),o.k0s()(),o.j41(21,"h2"),o.EFF(22," Using "),o.j41(23,"code"),o.EFF(24,"@angular-builders/jest"),o.k0s(),o.EFF(25," or "),o.j41(26,"code"),o.EFF(27,"jest-preset-angular"),o.k0s()(),o.j41(28,"p"),o.EFF(29,"If you're using one of these libraries. You can follow the following steps :"),o.k0s(),o.j41(30,"ol",1)(31,"li",2),o.EFF(32," Install "),o.j41(33,"code"),o.EFF(34,"npm i @ng-web-apis/universal --save-dev"),o.k0s(),o.EFF(35," (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. "),o.k0s(),o.j41(36,"li",2),o.EFF(37," Add a "),o.j41(38,"code"),o.EFF(39,"setupFilesAfterEnv"),o.k0s(),o.EFF(40," property to your "),o.j41(41,"code"),o.EFF(42,"jest.config.ts"),o.k0s(),o.EFF(43," or "),o.j41(44,"code"),o.EFF(45,"package.json"),o.k0s(),o.EFF(46," jest configuration (depending on where your configuration is) with the path to "),o.j41(47,"code"),o.EFF(48,"setup-jest.ts"),o.k0s(),o.EFF(49," if you have not already. "),o.nrm(50,"tui-doc-code",3),o.EFF(51," or "),o.nrm(52,"tui-doc-code",4),o.k0s(),o.j41(53,"li",2),o.EFF(54," Create the file "),o.j41(55,"code"),o.EFF(56,"setup-jest.ts"),o.k0s(),o.EFF(57," (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. "),o.k0s(),o.j41(58,"li",2),o.EFF(59," Add the following line to the "),o.j41(60,"code"),o.EFF(61,"setup-jest.ts"),o.k0s(),o.EFF(62," : "),o.j41(63,"code"),o.EFF(64,"import '@taiga-ui/testing/setup-jest';"),o.k0s(),o.EFF(65," . "),o.nrm(66,"tui-doc-code",5),o.k0s()()()),2&e&&(o.R7$(50),o.Y8G("code",t.jestConfig),o.R7$(2),o.Y8G("code",t.packageJson),o.R7$(14),o.Y8G("code",t.setupJest))},dependencies:[n.MN,n.e3],encapsulation:2,changeDetection:0}),t})()}}]);