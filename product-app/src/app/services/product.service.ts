import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  public getAllProducts() : Product[] {
    let products : Product[] = [
      {
        title: "product one",
        description: "description for product one",
        imageURL: "https://www.site.com.br/image.jpg",
        id: "1234567890"
      },
      {
        title: "product two",
        description: "description for product two",
        imageURL: "https://www.site.com.br/image.jpg",
        id: "1234567890"
      },
      {
        title: "product one",
        description: "description for product three",
        imageURL: "https://www.site.com.br/image.jpg",
        id: "1234567890"
      }
    ]

    return products;
  }
}
