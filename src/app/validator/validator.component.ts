import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {
  form!: FormGroup;
  @ViewChild('input') input!: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required,]]
    });
  }

  onBlur(evt: Event) {
    let amount = this.form.get('amount');
    amount?.setValue(amount!.value.toFixed(2))
  }
}
