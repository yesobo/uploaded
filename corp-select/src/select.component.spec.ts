import {
  TestBed,
  inject,
  fakeAsync,
  tick,
  discardPeriodicTasks,
  async
} from '@angular/core/testing';
import { BkCorpCommonsModule, BkCorpValidationService, BkCorpValidators } from 'bk-corp-commons';

import { BkCorpSelectOptionComponent } from './select-option.component';
import { BkCorpSelectComponent } from './select.component';
let fixture: any, component: BkCorpSelectComponent;

beforeEach( async(() => {
  TestBed.configureTestingModule({
    imports: [
       BkCorpCommonsModule
    ],
    declarations: [
       BkCorpSelectComponent,
       BkCorpSelectOptionComponent
    ]
  }).compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(BkCorpSelectComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

describe('Entrada de valores y comportamiento', () => {
  it('Creamos instancia del componente', () => {
    expect(component instanceof BkCorpSelectComponent).toBe(true);
  });

  it('Comprobamos que se añade un default placeholder', () => {
    expect(component.placeholder).toBe('DefaultPlaceholder');
  });

  it('Comprobamos que se añade un custom placeholder', () => {
    component.placeholder = 'Placeholder custom';
    fixture.detectChanges();
    let element = document.querySelector('.custom-placeholder');
    expect(element.textContent).toBe('Placeholder custom');
  });

  it('Comprobamos que se añade un default label', () => {
    expect(component.label).toBe('DefaultLabel');
  });

  it('Comprobamos que se añade un custom label', () => {
    component.label = 'Label custom';
    fixture.detectChanges();
    let element = document.querySelector('.custom-label');
    expect(element.textContent).toBe('Label custom');
  });

  it('Comprobamosque se activa el required del component', () => {
    component.required = true;
    fixture.detectChanges();
    document.querySelector('.required');
    expect(document.querySelector('.required')).toBeDefined();
  });

  it('Comprobamosque se activa el disabled del component', () => {
    component.disabled = true;
    fixture.detectChanges();
    let element = document.querySelector('button');
    expect(element.getAttribute('ng-reflect-disabled')).toEqual('true');
  });

  it('Si hacemos click en el desplegable debe seleccionar una opcion por defecto',
    fakeAsync(() => {

      let fixtureOption = TestBed.createComponent(BkCorpSelectOptionComponent);
      let instanciaOption = fixtureOption.componentInstance;

      instanciaOption.label = 'Madrid';
      instanciaOption.value = 'MAD';

      component.options.reset([instanciaOption, instanciaOption]);

      component.ngOnInit();
      component.ngAfterContentInit();

      fixture.detectChanges();

      component.toggleDropdown();
      tick(1000);

      expect(component.selectedOption.value).toBeDefined();
    }));
});

