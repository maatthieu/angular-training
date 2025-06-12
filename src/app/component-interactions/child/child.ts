import { Component, inject, input, output } from '@angular/core';
import { Person } from '../parent/parent';
import { LightBulb } from '../light-bulb';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  person = input<Person>();
  getOlder = output<number>();
  lightBulbService = inject(LightBulb);

  constructor() {
    // Do nothing
  }

  ngOnInit(): void {
    console.log(this.person());
  }

  onGetOlder(years: number) {
    this.getOlder.emit(years);
  }
}
