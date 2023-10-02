import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  myForm: FormGroup  // Initialize as null

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      nameOfReceiver: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      // Add more form controls as needed
    });
  }

  onSubmit() {
    if (this.myForm && this.myForm.valid) { // Check if myForm is not null
      // Handle the form submission when it's valid
      console.log('Form is valid:', this.myForm.value);
    } else {
      // Handle form errors when it's invalid or null
      console.log('Form has errors');
    }
  }
}
