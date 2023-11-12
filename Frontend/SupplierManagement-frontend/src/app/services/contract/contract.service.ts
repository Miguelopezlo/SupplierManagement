import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Contract } from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  //Esta URL retorna el listado de todos los proveedores
  private baseURL = "http://localhost:8080/api/v1/Contract"

  constructor(private httpClient: HttpClient) { }

  getContractById(id: number): Observable<Contract>{
    return this.httpClient.get<Contract>(`${this.baseURL}/${id}`)
  }
}
