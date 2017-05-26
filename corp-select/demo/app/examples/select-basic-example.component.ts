ntimport { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bkc-select-basic-example',
  templateUrl: './select-basic-example.component.html'
})
export class SelectBasicExampleComponent implements OnInit {
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

  ngOnInit() {
    this.model.cityname = 'MAD';
  }
}
