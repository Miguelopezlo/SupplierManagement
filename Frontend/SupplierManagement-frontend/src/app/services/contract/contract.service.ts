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

/**
 * The function `postNewContract` sends a POST request to create a new contract and returns an
 * Observable of the created contract.
 * @param {Contract} contract - The parameter `contract` is of type `Contract`.
 * @returns an Observable of type Contract.
 */
  postNewContract(contract: Contract): Observable<Contract>{
    return this.httpClient.post<Contract>(`${this.baseURL}/create`, contract)
  }

/**
 * The function `updateContract` sends a PUT request to update a contract with the specified ID.
 * @param {Object} contract - An object representing the updated contract information.
 * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
 * contract that needs to be updated.
 * @returns an Observable of type Object.
 */
  updateContract(contract: Object, id: number): Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/update/${id}`,contract)
  }
  
/**
 * The function `getContractById` retrieves a contract by its ID from an API using HTTP GET request.
 * @param {number} id - The `id` parameter is a number that represents the unique identifier of a
 * contract.
 * @returns an Observable of type Contract.
 */
  getContractById(id: number): Observable<Contract>{
    return this.httpClient.get<Contract>(`${this.baseURL}/${id}`)
  }
}
