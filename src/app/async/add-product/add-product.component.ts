import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncserviceService } from '../asyncservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private appService: AsyncserviceService) {
    this.productForm = this.fb.group({
      Id: ["", Validators.required],
      Title: ["", Validators.required],
      Price: [],
      inStock: []
    })
  }

  addProduct() {
    if (this.productForm.valid) {
      this.appService.AddProduct(this.productForm.value);
    }
  }
}
