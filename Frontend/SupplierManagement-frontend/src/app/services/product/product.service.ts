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

/**
 * The function `postNewProduct` sends a POST request to create a new product and returns an Observable
 * of the created product.
 * @param {Product} product - The product parameter is an object of type Product.
 * @returns an Observable of type Product.
 */
  postNewProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(`${this.baseURL}/create`,product)
  }

/**
 * The `getProductList` function returns an Observable that emits an array of Product objects obtained
 * from an HTTP GET request to the specified URL.
 * @returns The `getProductList()` function returns an Observable of type `Product[]`.
 */
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/all`)
  }

/**
 * The function `getProductByProductId` retrieves a product by its product ID from an API and returns
 * an Observable of an array of products.
 * @param {number} productid - The `productid` parameter is a number that represents the unique
 * identifier of a product.
 * @returns The `getProductByProductId` function returns an Observable of type `Product[]`.
 */
  getProductByProductId(productid: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/productid/${productid}`)
  }

/**
 * The function `getProductByCriteria` retrieves a list of products based on a given criteria.
 * @param {number} criteria - The criteria parameter is a number that is used to filter the products.
 * It is passed to the server to retrieve a list of products that match the specified criteria.
 * @returns The `getProductByCriteria` function is returning an `Observable` of type `Product[]`.
 */
  getProductByCriteria(criteria: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/criteria/${criteria}`)
  }
  
}
