import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {environment} from "../model/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  findById(id: number) {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  save(product: Product): Observable<Product> {
    console.log(API_URL + `/products`);
    return this.http.post<Product>(API_URL + `/products`, product);
  }

  delete(id: number | undefined): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }

  edit(id: number, temp: Product) {
    return this.http.put<Product>(`${API_URL}/products/${id}`, temp);
  }

}
