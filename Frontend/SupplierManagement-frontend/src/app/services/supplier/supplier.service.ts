import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  //Esta URL retorna el listado de todos los proveedores
  private baseURL = "http://localhost:8080/api/v1/supplier"

  constructor(private httpClient: HttpClient) { }

/**
 * The function `postNewSupplier` sends a POST request to create a new supplier and returns an
 * Observable of the created supplier.
 * @param {Supplier} supplier - The `supplier` parameter is an object of type `Supplier`.
 * @returns an Observable of type Supplier.
 */
  postNewSupplier(supplier: Supplier): Observable<Supplier>{
    return this.httpClient.post<Supplier>(`${this.baseURL}/create`,supplier)
  }

/**
 * The function `postSupplierList` sends a POST request to the specified URL with a file containing a
 * list of suppliers.
 * @param {File} suppliers - The "suppliers" parameter is a File object that contains the data of the
 * suppliers. It is used to upload the file to the server.
 * @returns an Observable of type any.
 */
  postSupplierList(suppliers: File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append("suppliers",suppliers);
    return this.httpClient.post(`${this.baseURL}/create/many`, formData)
  }

/**
 * The function `updateSupplier` sends a PUT request to update a supplier with the given ID using the
 * provided supplier object.
 * @param {Supplier} supplier - The `supplier` parameter is an object of type `Supplier` that contains
 * the updated information for the supplier.
 * @param {number} id - The `id` parameter is the unique identifier of the supplier that you want to
 * update. It is of type `number`.
 * @returns an Observable of type Supplier.
 */
  updateSupplier(supplier: Supplier, id: number): Observable<Supplier>{
    return this.httpClient.put<Supplier>(`${this.baseURL}/update/${id}`,supplier)
  }

/**
 * The function `getSupplierList` returns an Observable that emits an array of Supplier objects
 * obtained from an HTTP GET request to a specified URL.
 * @returns The `getSupplierList()` function returns an Observable of type `Supplier[]`.
 */
  getSupplierList(): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/all`)
  }

/**
 * The function `getSupplierById` retrieves a supplier by their ID from a server using an HTTP GET
 * request.
 * @param {number} id - The `id` parameter is a number that represents the unique identifier of a
 * supplier.
 * @returns an Observable of type 'any'.
 */
  getSupplierById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/id/${id}`)
  }

/**
 * The function `getSupplierByScore` retrieves a list of suppliers based on their score.
 * @param {number} score - The `score` parameter is a number that represents the score value. It is
 * used to filter the suppliers based on their score.
 * @returns an Observable of type Supplier array.
 */
  getSupplierByScore(score: number): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/score/${score}`)
  }

/**
 * The function `getSupplierByCity` returns an Observable that emits an array of Supplier objects
 * obtained by making an HTTP GET request to the specified URL.
 * @param {string} city - A string representing the city for which you want to retrieve suppliers.
 * @returns an Observable of type Supplier array.
 */
  getSupplierByCity(city: string): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/city/${city}`)
  }

/**
 * The function `getSupplierByProductId` retrieves a list of suppliers based on a given product ID.
 * @param {number} productId - The `productId` parameter is a number that represents the unique
 * identifier of a product.
 * @returns an Observable of type Supplier[].
 */
  getSupplierByProductId(productId: number): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/supplierbyproductid/${productId}`)
  }

/**
 * The function `deleteSupplierById` sends a DELETE request to the server to delete a supplier with the
 * specified ID and returns an Observable of type `Supplier`.
 * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
 * supplier that needs to be deleted.
 * @returns The deleteSupplierById function returns an Observable of type Supplier.
 */
  deleteSupplierById(id: number): Observable<Supplier>{
    return this.httpClient.delete<Supplier>(`${this.baseURL}/delete/${id}`)
  }
  
}
