import { Component } from '@angular/core';
import { ComponentBasic } from './component-basic/component-basic';
import { Routing } from './routing/routing';
import { Signals } from './signals/signals';
import { Parent } from './component-interactions/parent/parent';

@Component({
  selector: 'app-root',
  imports: [Routing, ComponentBasic, Signals, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'demo';
}
