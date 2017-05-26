import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'bankular-css-switcher',
  template: `
    <button (click)='switchCSS()'>Switch CSS</button>
    `
})
export class CSSSwitcherComponent {

  @Input() value: string;

  corecss_url = 'node_modules/corp-styles/dist/core.css';

  constructor( @Inject(DOCUMENT) private document) { }

  switchCSS() {
    const themeLink = this.document.getElementById('theme');
    const href = themeLink.getAttribute('href');
    if (href === '') {
      themeLink.setAttribute('href',
        this.corecss_url);
    } else {
      themeLink.setAttribute('href', '');
    }
  }
}
