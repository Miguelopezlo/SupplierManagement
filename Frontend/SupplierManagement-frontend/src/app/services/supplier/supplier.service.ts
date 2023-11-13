import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  //Esta URL retorna el listado de todos los proveedores
  private baseURL = "http://localhost:8080/api/v1/Supplier"

  constructor(private httpClient: HttpClient) { }

  postNewSupplier(supplier: Supplier): Observable<Supplier>{
    return this.httpClient.post<Supplier>(`${this.baseURL}/create`,supplier)
  }

  postSupplierList(suppliers: File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append("suppliers",suppliers);
    return this.httpClient.post(`${this.baseURL}/create/many`, formData)
  }

  updateSupplier(supplier: Supplier, id: number): Observable<Supplier>{
    return this.httpClient.put<Supplier>(`${this.baseURL}/update/{id}`,supplier)
  }

  //Este método nos sirve para obtener la lista de todos los proveedores
  getSupplierList(): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/all`)
  }

  getSupplierById(id: number): Observable<Supplier>{
    return this.httpClient.get<Supplier>(`${this.baseURL}/id/${id}`)
  }

  getSupplierByScore(score: number): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/score/${score}`)
  }

  getSupplierByCity(city: string): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/city/${city}`)
  }

  getSupplierByProductId(productId: number): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}/Productid/${productId}`)
  }

  deleteSupplierId(id: number): Observable<Supplier>{
    return this.httpClient.delete<Supplier>(`${this.baseURL}/delete/${id}`)
  }
  
}
