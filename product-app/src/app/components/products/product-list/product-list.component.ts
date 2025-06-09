import { Component, inject, Inject, OnInit } from '@angular/core';
import { TituloComponent } from '../../../../shared/titulo/titulo.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-product-list',
  imports: [TituloComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  products: Product[] = []

  constructor(){
  }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    console.log(this.products);
  }
}
