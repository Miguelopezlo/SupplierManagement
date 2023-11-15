import { Component, OnInit} from '@angular/core';
import { Contract } from '../../services/contract/contract';
import { ContractService } from '../../services/contract/contract.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css'],
  providers: [MessageService]
})
export class CreateContractComponent implements OnInit{

  contracts: Contract[]=[];

  contract: Contract= {} as Contract;

  clonedContract: { [s: number]: Contract} ={};

  columnHeadContracts: string [] = ['Nombre producto','Fecha de inicio','Fecha de finalizacion','Estado del contrato','Id producto','Id proveedor','Acciones'];

  constructor(private contractService: ContractService, private messageService: MessageService){}

/**
 * The ngOnInit function pushes the contract object into the contracts array.
 */
  ngOnInit(){
    this.contracts.push(this.contract);
  }

/**
 * The function `postNewContract` sends a POST request to the contract service to create a new contract
 * and logs the response or any errors.
 * @param {Contract} contract - The parameter `contract` is of type `Contract`, which is an object
 * representing a contract.
 */
  private postNewContract(contract: Contract){
    this.contractService.postNewContract(contract).subscribe(response =>{
      console.log(`POST Request for new contract successful`, response);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contrato cargado' });
    }, error => {
      console.error(`Error during POST request for new contract`,error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El contrato no pudo ser cargado' });
    })
  }

/**
 * The function "onRowEditInit" creates a clone of the contract object and stores it in the
 * "clonedContract" array.
 * @param {Contract} contract - The parameter "contract" is of type "Contract".
 */
  onRowEditInit(contract: Contract) {
    this.clonedContract[contract.contractid as number] = { ...contract };
  }

/**
 * The function `onRowEditSave` checks if the contract description is not empty, saves the contract if
 * valid, or reverts the changes and displays an error message if the description is invalid.
 * @param {Contract} contract - The "contract" parameter is an object that represents a contract. It
 * contains properties such as "contractid" and "contractdescription".
 * @param {number} index - The `index` parameter is the index of the contract in the `contracts` array
 * that is being edited.
 * @returns the result of the `postNewContract(contract)` function call if the
 * `contract.contractdescription` is not empty. Otherwise, it is not returning anything.
 */
  onRowEditSave(contract: Contract, index: number) {
      if (contract.contractdescription != '') {
          delete this.clonedContract[contract.contractid as number];
          return this.postNewContract(contract);
      }
      this.contracts [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Descripcion de contrato invalida' });
  }

/**
 * The function onRowEditCancel reverts the changes made to a contract object and removes it from the
 * clonedContract array.
 * @param {Contract} contract - The contract object that is being edited or cancelled.
 * @param {number} index - The index parameter represents the index of the contract in the contracts
 * array that is being edited.
 */
  onRowEditCancel(contract: Contract, index: number) {
      this.contracts [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
  }
}
