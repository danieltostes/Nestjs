import { Component, inject, Inject, OnInit } from '@angular/core';
import { TituloComponent } from '../../../../shared/titulo/titulo.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  products: Product[] = []

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result => this.products = result);
  }
}
