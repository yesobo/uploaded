import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <bankular-css-switcher></bankular-css-switcher>
    <div class="container">
      <h1>BkCorpSelect Demo</h1>
      <h2>Select básico</h2>
      <bkc-select-basic-example></bkc-select-basic-example>
      <hr/>
      <h2>Select requerido con mensaje de error</h2>
      <bkc-select-required-example></bkc-select-required-example>
      <hr/>
      <h2>Select con evento change</h2>
      <bkc-select-events-example></bkc-select-events-example>
      <hr/>
      <h2>Seleccionar valor programáticamente</h2>
      <bkc-select-program-example></bkc-select-program-example>
      <hr/>
    </div>
  `,
   styles: ['h2 { margin:10px 10px; font-size: 1.5em; }']
})
export class DemoComponent {
}
