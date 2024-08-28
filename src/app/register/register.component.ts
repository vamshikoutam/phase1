import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  repeatPass: string = 'none';  // Used to show/hide error message
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z].*')]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z].*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      gender: new FormControl('', [Validators.required]),
      pws: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      rpws: new FormControl('')
    });
  }

  // Method to handle form submission
  registerSubmit() {
    if (this.Pws.value === this.Rpws.value) {
      console.log('Submitted');
      // Implement form submission logic here
    } else {
      this.repeatPass = 'inline'; // Show the error message if passwords don't match
    }
  }

  // Getters for easier access to form controls
  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  get Pws(): FormControl {
    return this.registerForm.get('pws') as FormControl;
  }

  get Rpws(): FormControl {
    return this.registerForm.get('rpws') as FormControl;
  }
}
