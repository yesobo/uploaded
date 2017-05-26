import { Component } from '@angular/core';

@Component({
  selector: 'bkc-select-program-example',
  templateUrl: './select-program-example.component.html'
})
export class SelectProgramExampleComponent {
  model: any = {};

  cities1: Array<{
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

  cities2: Array<{
    value: string,
    label: string,
  }> = [
    {
      value: 'TOK',
      label: 'Tokio'
    },
    {
      value: 'PAR',
      label: 'París'
    },
    {
      value: 'NYC',
      label: 'Nueva York'
    },
    {
      value: 'SHA',
      label: 'Shanghai'
    },
    {
      value: 'SYD',
      label: 'Sydney'
    },
    {
      value: 'MOS',
      label: 'Moscú'
    }
  ];

  cities = this.cities1;


  changeModel() {
    var random = this.cities[Math.floor(Math.random() * this.cities.length)];
    // no repetir el valor
    if (this.model.cityName === random.value) {
      this.changeModel();
    } else {
      console.log(`Changing model to ${random.value}`);
      this.model.cityName = random.value;
    }
  }

  changeOptions() {
    if (this.cities[0].value === 'MAD') {
      this.cities = this.cities2;
    } else {
      this.cities = this.cities1;
    }
  }
}
