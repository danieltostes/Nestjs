import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL : string = "api/products";
  products : Product[] = [];

  constructor(private http: HttpClient) { }

  // get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL).pipe(
      tap((data: Product[]) => {
        this.products = data;
      })
    );
  }
}
