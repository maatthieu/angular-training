import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {

  counter = signal(0);
  parity = computed(() => this.counter()%2 ? 'even' : 'odd');

  inc() {
    this.counter.set(this.counter() + 1);
    console.log(this.counter);
  }
}
