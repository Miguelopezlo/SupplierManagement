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

  contract: Contract[]=[];

  contrato: Contrato={
    contractstate: ''
  };

  clonedContract: { [s: number]: Contract} ={};

  columnHeadContracts: string [] = ['Id contrato','Descripcion contrato','Fecha de inicio','Fecha de finalizacion','Estado del contrato','Nombre producto','Nombre proveedor','Acciones'];

  constructor(private contractService: ContractService, private messageService: MessageService, private router: Router){}

  ngOnInit(){
    this.dropdownOptions=['Id contrato'];
  }

  private getContractById(id: number){
    this.contractService.getContractById(id).subscribe(response =>{
      this.contract.push(response)
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private updateContract(contract: Contract,id: number){
    this.contrato.contractstate=contract.contractState;
    this.contractService.updateContract(this.contrato,id).subscribe(response =>{
      console.log(`PUT Request for ... successful`, response);
    }, error => {
      console.error(`Error during PUT request for ...`,error)
    })
  }

  onRowEditInit(contract: Contract) {
    this.clonedContract[contract.contractId as number] = { ...contract };
  }

  onRowEditSave(contract: Contract, index: number) {
      if (contract.contractDescription != '') {
          delete this.clonedContract[contract.contractId as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contract is updated' });
          return this.updateContract(contract,  contract.contractId);
      }
      this.contract [index]= this.clonedContract[contract.contractId as number];
      delete this.clonedContract[contract.contractId as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid contract description' });
  }

  onRowEditCancel(contract: Contract, index: number) {
      this.contract [index]= this.clonedContract[contract.contractId as number];
      delete this.clonedContract[contract.contractId as number];
  }

  onChangeDrop(event: DropdownChangeEvent){
    switch (event.value){
      case 'Id contrato':{
        this.router.navigate(['home/contracts/contractid']);
        break;
      }
    }
  }
}
