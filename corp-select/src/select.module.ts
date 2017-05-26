import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BkCorpSelectComponent } from './select.component';
import { BkCorpSelectOptionComponent } from './select-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BkCorpSelectComponent,
    BkCorpSelectOptionComponent
  ],
  providers: [ ],
  exports: [
    BkCorpSelectComponent,
    BkCorpSelectOptionComponent
  ]
})
export class BkCorpSelectModule { }

