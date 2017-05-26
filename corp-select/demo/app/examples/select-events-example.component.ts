import { Component } from '@angular/core';

@Component({
  selector: 'bkc-select-events-example',
  templateUrl: './select-events-example.component.html'
})
export class SelectEventsExampleComponent {

  model: any = {};

  cities: Array<{
    value: string,
    label: string,
  }> = [
    {
      value: 'MAD',
      label: 'Madrid'
    },
    {
      value: 'BAR',
      label: 'Barcelona'
    },
    {
      value: 'VAL',
      label: 'Valencia'
    },
    {
      value: 'BIL',
      label: 'Bilbao'
    },
    {
      value: 'SEV',
      label: 'Sevilla'
    },
    {
      value: 'TOL',
      label: 'Toledo'
    }
  ];

  onChange(newValue) {
    console.log(`Se ha seleccionado el valor ${newValue}`);
    alert(`Se ha seleccionado el valor ${newValue}`);
  }
}
