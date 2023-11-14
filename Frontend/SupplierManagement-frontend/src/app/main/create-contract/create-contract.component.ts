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

  columnHeadContracts: string [] = ['Nombre producto','Fecha de inicio','Fecha de finalizacion','Estado del contrato','Id producto','Acciones'];

  constructor(private contractService: ContractService, private messageService: MessageService){}

  ngOnInit(){
    this.contracts.push(this.contract);
  }

  private postNewContract(contract: Contract){
    this.contractService.postNewContract(contract).subscribe(response =>{
      console.log(`POST Request for ... successful`, response);
    }, error => {
      console.error(`Error during POST request for ...`,error)
    })
  }

  onRowEditInit(contract: Contract) {
    this.clonedContract[contract.contractid as number] = { ...contract };
  }

  onRowEditSave(contract: Contract, index: number) {
      if (contract.contractdescription != '') {
          delete this.clonedContract[contract.contractid as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contract is loaded' });
          return this.postNewContract(contract);
      }
      this.contracts [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid contract description' });
  }

  onRowEditCancel(contract: Contract, index: number) {
      this.contracts [index]= this.clonedContract[contract.contractid as number];
      delete this.clonedContract[contract.contractid as number];
  }
}
