import { Component } from '@angular/core';

@Component({
  selector: 'bkc-select-required-example',
  templateUrl: './select-required-example.component.html'
})
export class SelectRequiredExampleComponent {
  model: any = {
    cityName: undefined
  };

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
}
