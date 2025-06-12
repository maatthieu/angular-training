import { Component } from '@angular/core';

@Component({
  selector: 'app-component-basic',
  imports: [],
  templateUrl: './component-basic.html',
  styleUrl: './component-basic.css'
})
export class ComponentBasic {
  counter = 0;

  increment(event: MouseEvent) {
    console.log(event);
    this.counter++;
  }
}
