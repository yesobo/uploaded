import {
  AfterViewInit,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer
} from '@angular/core';

@Component({
  selector: 'bk-corp-select-option',
  template: `
      <li role='menuitem'
        tabindex="2"
        (keydown)='selectWithTab($event)'
        [ngClass]="{'match': selected}"
        (click)='onSelect()' class="custom-item-select">
        {{ label }}
        <ng-content></ng-content>
      </li>
  `,
  styleUrls: ['select-option.component.scss']
})
export class BkCorpSelectOptionComponent implements AfterViewInit {

  @Input() label: string;
  @Input() value: any;

  @Input() selected: boolean = false;

  @Output() select = new EventEmitter<BkCorpSelectOptionComponent>();
  @Output() hover = new EventEmitter<BkCorpSelectOptionComponent>();
  @Output() unSelect = new EventEmitter();

  @Output() selectNext = new EventEmitter<BkCorpSelectOptionComponent>();
  @Output() selectPrev = new EventEmitter<BkCorpSelectOptionComponent>();

  constructor (
    public element: ElementRef,
    private renderer: Renderer) {}

  ngAfterViewInit() {
  }

  selectWithTab($event: any): void {
    if ($event.keyCode === 9 || $event.keyCode === 13) {
      this.onSelect();
    }else if ($event.keyCode === 40) {
       this.selectNext.emit(this);
    }else if ($event.keyCode === 38) {
       this.selectPrev.emit(this);
    }
  }

  onSelect (): void {
    this.selected = true;
    this.select.emit(this);
  }
}
