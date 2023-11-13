import { Component, OnInit } from '@angular/core';
import { Contract } from '../../services/contract/contract';
import { ContractService } from '../../services/contract/contract.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  
})
export class ContractListComponent implements OnInit{
  
  contract!: Contract[];

  clonedContract: { [s: number]: Contract} ={};

  columnHeadContracts: string [] = ['Id contrato','Nombre producto','Fecha de inicio','Fecha de finalizacion','Estado del contrato','Id producto','Acciones'];

  constructor(private contractService: ContractService, private messageService: MessageService){}

  ngOnInit(){
    
  }

  private getContractById(id: number){
    this.contractService.getContractById(id).subscribe(response =>{
      this.contract[0] = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private updateContract(contract: Contract,id: number){
    this.contractService.updateContract(contract,id).subscribe(response =>{
      console.log(`PUT Request for ... successful`, response);
    }, error => {
      console.error(`Error during PUT request for ...`,error)
    })
  }

  onRowEditInit(contract: Contract) {
    this.clonedContract[contract.contractid as number] = { ...contract };
  }

  onRowEditSave(contract: Contract, index: number) {
      if (contract.contractdescription != '') {
          delete this.clonedContract[contract.contractid as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contract is updated' });
          return this.updateContract(contract,  contract.contractid);
      }
      this.contract [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid contract description' });
  }

  onRowEditCancel(contract: Contract, index: number) {
      this.contract [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
  }

}
