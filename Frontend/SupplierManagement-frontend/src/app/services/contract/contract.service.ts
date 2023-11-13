import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Contract } from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  //Esta URL retorna el listado de todos los proveedores
  private baseURL = "http://localhost:8080/api/v1/contract"

  constructor(private httpClient: HttpClient) { }

  postNewContract(contract: Contract): Observable<Contract>{
    return this.httpClient.post<Contract>(`${this.baseURL}/create`, contract)
  }

  updateContract(contract: Contract, id: number): Observable<Contract>{
    return this.httpClient.put<Contract>(`${this.baseURL}/update/${id}`,contract)
  }
  
  getContractById(id: number): Observable<Contract>{
    return this.httpClient.get<Contract>(`${this.baseURL}/${id}`)
  }
}
