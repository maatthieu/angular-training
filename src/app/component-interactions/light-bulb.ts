import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightBulb {

  on = signal(false);

  constructor() { }

  toggle() {
    this.on.update(s => !s);
  }

  get isOn() {
    return this.on();
  }

    get isOff() {
    return !this.isOn;
  }
}
