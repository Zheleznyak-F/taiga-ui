(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59552],{59552:e=>{e.exports="```ts\nimport {Component, inject, TemplateRef, ViewChild} from '@angular/core';\nimport {TuiPreviewDialogService} from '@taiga-ui/kit';\nimport {PolymorpheusContent} from '@taiga-ui/polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n  // ...\n})\nexport class Example {\n  private readonly previewDialogService = inject(TuiPreviewDialogService);\n\n  @ViewChild(`preview`)\n  readonly preview: TemplateRef<TuiDialogContext<void>>;\n\n  show() {\n    this.previewDialogService.open(this.preview).subscribe();\n  }\n}\n```\n"}}]);