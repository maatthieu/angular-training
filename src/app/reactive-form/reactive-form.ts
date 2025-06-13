import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

const notAdmin: ValidatorFn = ac =>
  (ac.value as string).includes('admin') ?
  { notAdmin: { message:'Pirate !' }} : null;

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  personForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required, notAdmin]),
    age: new FormControl(0, [Validators.min(0), Validators.max(150)])
  });

  onSubmit(){
    console.log(this.personForm.value);
  }

  get nameControl() {
    return this.personForm.get('name');
  }

  get ageControl() {
    return this.personForm.get('age');
  }
}
