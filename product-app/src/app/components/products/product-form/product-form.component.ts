import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  productForm!: FormGroup;
}
