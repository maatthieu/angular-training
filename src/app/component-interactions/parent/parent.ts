import { Component } from '@angular/core';
import { Child } from '../child/child';

export interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  user = {
    name: 'matt',
    age: 40
  };

  onOlder(years: number) {
    this.user.age += years;
  }
}
