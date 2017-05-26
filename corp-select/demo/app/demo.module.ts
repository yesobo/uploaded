import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CSSSwitcherComponent } from './bankular-css-switcher/bankular-css-switcher.component';
//import { BkCorpSelectModule } from '../../src/select.module';
import { BkCorpSelectModule } from '../../dist/select.module';
import { DemoComponent } from './demo.component';

// Examples
import { SelectBasicExampleComponent } from './examples/select-basic-example.component';
import { SelectRequiredExampleComponent } from './examples/select-required-example.component';
import { SelectEventsExampleComponent } from './examples/select-events-example.component';
import { SelectProgramExampleComponent } from './examples/select-program-example.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BkCorpSelectModule
  ],declarations: [
    DemoComponent,
    CSSSwitcherComponent,
    SelectBasicExampleComponent,
    SelectRequiredExampleComponent,
    SelectEventsExampleComponent,
    SelectProgramExampleComponent
 ],
  bootstrap: [ DemoComponent ]
})
export class DemoModule { }
