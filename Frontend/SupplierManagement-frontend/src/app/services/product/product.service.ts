import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Esta URL retorna el listado de todos los proveedores
  private baseURL = "http://localhost:8080/api/v1/product"

  constructor(private httpClient: HttpClient) { }

  postNewProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(`${this.baseURL}/create`,product)
  }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/all`)
  }

  getProductByProductId(productid: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/productid/${productid}`)
  }

  getProductByCriteria(criteria: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/criteria/${criteria}`)
  }
  
}
