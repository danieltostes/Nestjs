import { Component } from '@angular/core';
import { TituloComponent } from '../../../shared/titulo/titulo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-products',
  imports: [TituloComponent, ProductListComponent, ProductFormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
