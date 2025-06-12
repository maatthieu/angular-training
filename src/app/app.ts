import { Component } from '@angular/core';
import { ComponentBasic } from './component-basic/component-basic';
import { Routing } from './routing/routing';
import { Signals } from './signals/signals';
import { Parent } from './component-interactions/parent/parent';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';

@Component({
  selector: 'app-root',
  imports: [Routing, ComponentBasic, Signals, Parent, ReactiveForm, TemplateDrivenForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'demo';
}
