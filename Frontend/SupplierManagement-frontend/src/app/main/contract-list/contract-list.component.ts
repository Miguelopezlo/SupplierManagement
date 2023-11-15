import { Component, OnInit } from '@angular/core';
import { Contract } from '../../services/contract/contract';
import { ContractService } from '../../services/contract/contract.service';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Router } from '@angular/router';

interface Contrato{
  contractstate: string;
}

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  
})
export class ContractListComponent implements OnInit{

  dropdownOptions: string[];

  value: string;

  contract: Contract[];

  contrato: Contrato={
    contractstate: ''
  };

  clonedContract: { [s: number]: Contract} ={};

  columnHeadContracts: string [] = ['Id contrato','Descripcion contrato','Fecha de inicio','Fecha de finalizacion','Estado del contrato','Nombre producto','Nombre proveedor','Acciones'];

  constructor(private contractService: ContractService, private messageService: MessageService, private router: Router){}

/**
 * The ngOnInit function initializes the dropdownOptions array with the value 'Id contrato'.
 */
  ngOnInit(){
    this.dropdownOptions=['Id contrato'];
  }

/**
 * The function "handleEnterKey" clears the "contract" array and then checks the current URL to
 * determine if it should call the "getContractById" function with a parsed integer value.
 */
  handleEnterKey() {
    this.contract=[];
    switch(this.router.url){
      case '/home/contracts/contractid':{
        this.getContractById(parseInt(this.value))
        break;
      }
    }
  }

/**
 * The function `getContractById` makes a GET request to retrieve a contract by its ID and logs the
 * response or any errors.
 * @param {number} id - The `id` parameter is of type `number` and represents the unique identifier of
 * a contract.
 */
  private getContractById(id: number){
    this.contractService.getContractById(id).subscribe(response =>{
      this.contract.push(response)
      console.log(`GET Request for contract #${id} successful`, response);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contrato encontrado' });
    }, error => {
      console.error(`Error during GET request for contract #${id}`,error)
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Contrato no encontrado' });
    })
  }

/**
 * The function `updateContract` updates a contract by making a PUT request to the contract service.
 * @param {Contract} contract - The `contract` parameter is an object of type `Contract` that contains
 * the updated contract information.
 * @param {number} id - The `id` parameter is the unique identifier of the contract that needs to be
 * updated.
 */
  private updateContract(contract: Contract,id: number){
    this.contrato.contractstate=contract.contractstate;
    this.contractService.updateContract(this.contrato,id).subscribe(response =>{
      console.log(`PUT Request for contract #${id} successful`, response);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contrato actualizado' });
    }, error => {
      console.error(`Error during PUT request for for contract #${id}`,error);
      this.messageService.add({ severity: 'error', summary: 'Error:', detail: 'No se pudo actualizar el contrato' });
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
 * The function `onRowEditSave` is used to save the edited contract details and display success or
 * error messages based on the validity of the contract description.
 * @param {Contract} contract - The contract object that is being edited and saved.
 * @param {number} index - The index parameter represents the index of the contract in the array that
 * is being edited.
 * @returns the result of the "updateContract" function if the contract description is not empty.
 * Otherwise, it is not returning anything.
 */
  onRowEditSave(contract: Contract, index: number) {
      if (contract.contractdescription != '') {
          delete this.clonedContract[contract.contractid as number];
          return this.updateContract(contract,  contract.contractid);
      }
      this.contract [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Descripcion de contrato invalida' });
  }

/**
 * The function onRowEditCancel reverts the changes made to a contract object and deletes the cloned
 * contract object.
 * @param {Contract} contract - The contract object that is being edited or cancelled.
 * @param {number} index - The index parameter represents the index of the row being edited in an array
 * or list. It is used to access and modify the specific row in the array or list.
 */
  onRowEditCancel(contract: Contract, index: number) {
      this.contract [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
  }

/**
 * The onChangeDrop function navigates to a specific route based on the selected value of a dropdown.
 * @param {DropdownChangeEvent} event - DropdownChangeEvent - an event object that is triggered when
 * the value of a dropdown/select element changes.
 */
  onChangeDrop(event: DropdownChangeEvent){
    switch (event.value){
      case 'Id contrato':{
        this.router.navigate(['home/contracts/contractid']);
        break;
      }
    }
  }
}
