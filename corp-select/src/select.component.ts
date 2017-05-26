import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnInit,
  QueryList,
  forwardRef,
  ElementRef,
  Renderer
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BkCorpSelectOptionComponent } from './select-option.component';

import { Observable } from 'r xjs/Rx';
import { Subscription } from 'rxjs/Subscription';

// TODO: Move this function to a helper library because is used in selectOption component
function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

@Component({
  selector: 'bk-corp-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BkCorpSelectComponent),
      multi: true
    }
  ],
  template: `
    <div class='custom-select'>
      <button
        id="button1" 
        tabindex="1"
        (click)="toggleDropdown($event)"
        [disabled]='disabled'
        [ngClass]="{ 'required': required, 'dropdown-visible':isDropdownVisible }"
        class="dropdown-btn" 
        type="button">
        <div class="text-wrapper">
          <p class="custom-label">{{ label }}
            <span class="required-icon" [style.display]="required?'block':'none'">*</span>
          </p>
          <span *ngIf="!(selectedOption?.selected)" class="custom-placeholder">
            {{ placeholder }}
          </span>
          <span *ngIf="selectedOption?.selected" class="value">
            {{ selectedOption?.element?.nativeElement?.textContent?.trim() }}
          </span>
        </div>
        <div class="dropdown-icon-wrapper">  
          <span class="dropdown-icon" 
            [ngClass]="{ 'bki-ac-unfold-down': !isDropdownVisible, 
                         'bki-ac-unfold-up': isDropdownVisible }">
          </span>
        </div>
      </button>

      <ul class="dropdown-list" role="menu"
          *ngIf="isDropdownVisible">
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  styleUrls: ['select.component.scss']
})
export class BkCorpSelectComponent implements ControlValueAccessor, OnInit, AfterContentInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }  
  
  @Input()
  get required() { return this._required; }
  set required(value: any) {
    this._required = coerceBooleanProperty(value); 
  }

  @Output() change = new EventEmitter<any>();

  @ContentChildren(BkCorpSelectOptionComponent) options: QueryList<BkCorpSelectOptionComponent>;

  isDropdownVisible: boolean = false;
  selectedOption: BkCorpSelectOptionComponent;

  private _required: boolean = false;
  private _disabled: boolean = false;
  private optionsArray: Array<BkCorpSelectOptionComponent>;
  /** Subscriptions to option events. */
  private _optionSubscription: Subscription;

  @HostListener('document:click', ['$event']) clickOutComponent($event: any): void {
    if (!this.element.nativeElement.contains(event.target))
      this.isDropdownVisible = false;
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit() {
    this.checkDefautText();
  }

  ngAfterContentInit() {
    this.optionsArray = this.getOptionsAsArray(this.options);
    this.options.changes.startWith(null)
      .subscribe((options: Array<BkCorpSelectOptionComponent>) => {
        this._resetOptions();
        this.optionsArray = options;
      });
  }

  registerOnTouched(fn: any) {
    return;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  writeValue(value: any) {
    if (value !== undefined && value !== null && value.length > 0) {
      let option = this.getOptionByValue(value);
      this.selectOption(option);
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  private _resetOptions(): void {
    this._dropSubscriptions();
    this._listenToOptions();
  }

  private _listenToOptions(): void {
    this._optionSubscription = this.optionSelectionChanges
      .subscribe((event:any) => {
        this.onOptionSelectListener(event);
      });
  }

  private _dropSubscriptions(): void {
    if (this._optionSubscription) {
      this._optionSubscription.unsubscribe();
      this._optionSubscription = null;
    }
  }

  /** Combined stream of all of the child options' change events. */
  get optionSelectionChanges(): any {
    return Observable.merge(...this.options.map(option => option.select));
  }

  private propagateChange = (_: any) => {
    return;
  }

  // TODO: find options with keys
  // findOption(key: any): void {
  //   console.log('TODO: key press');
  //   // this.search = this.search + key.key;
  //   // setTimeout(() => this.search = '', 750);
  //   // this.keyPressSubject.next(key);
  // }

  private getOptionsAsArray(query: QueryList<BkCorpSelectOptionComponent>) {
    return query.map(item => item);
  }

  private onOptionSelectListener(option: BkCorpSelectOptionComponent) {
    this.selectOption(option);
    this.isDropdownVisible = false;
  }

  private checkDefautText() {
    if (!this.placeholder || this.placeholder === '') this.placeholder = 'DefaultPlaceholder';
    if (!this.label || this.label === '') this.label = 'DefaultLabel';
  }

  private unselectOptions() {
    this.options
      .forEach(option => option.selected = false);
  }

  private selectOption(selectedOption: BkCorpSelectOptionComponent) {
    this.unselectOptions();
    this.selectedOption = selectedOption;
    this.selectedOption.selected = true;
    this.emitValue(this.selectedOption.value);
  }

  private emitValue(value: any): void {
    this.propagateChange(value);
    this.change.emit(value);
  }

  private getOptionByValue(value: any): BkCorpSelectOptionComponent {
    return this.options.filter(option => option.value === value)[0];
  }
}
