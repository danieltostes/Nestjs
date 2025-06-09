import { Component } from '@angular/core';
import { TituloComponent } from '../../../../shared/titulo/titulo.component';

@Component({
  selector: 'app-product-list',
  imports: [TituloComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      id: "68465faed08aff23f73e9b5c",
      title: "Produto 1",
      description: "Descrição do produto 1",
      imageURL: "https://via.placeholder.com/100"
    },
    {
      id: "68465faed08aff23f73e9b5c",
      title: "Produto 2",
      description: "Descrição do produto 2",
      imageURL: "https://via.placeholder.com/100"
    },
    {
      id: "68465faed08aff23f73e9b5c",
      title: "Produto 3",
      description: "Descrição do produto 3",
      imageURL: "https://via.placeholder.com/100"
    },
    {
      id: "68465faed08aff23f73e9b5c",
      title: "Produto 4",
      description: "Descrição do produto 4",
      imageURL: "https://via.placeholder.com/100"
    }
  ]
}
