import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../services/supplier/supplier';
import { SupplierService } from '../../services/supplier/supplier.service';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Router } from '@angular/router';

interface Text{
  name: string;
}

@Component({
  selector: 'app-supplier-list-id',
  templateUrl: './supplier-list-id.component.html',
  styleUrls: ['./supplier-list-id.component.css'],
  providers: [MessageService]
})

export class SupplierListIdComponent implements OnInit{

  dropdownOptions: Text[];

  value: string;

  selectedItem: Text= {} as Text;

  option: number;

  suppliers!: Supplier[];

  clonedSuppliers: { [s: number]: Supplier } = {};

  columnHeadSupplier: string[]= ['Id proveedor','Nombre de empresa','Nombre de contacto','Dirección','Telefono','E-mail','Calificacion','Ciudad','Acciones'];

  constructor(private supplierService:SupplierService, private messageService: MessageService, private router: Router){}

  ngOnInit(){
    this.option=4;
    this.dropdownOptions=[
      {name: 'Id proveedor'},
      {name: 'Calificacion'},
      {name: 'Ciudad'},
      {name: 'Id producto'},
      {name: 'Todos'}
    ];
  }

  private getSupplierById(id: number){
    this.supplierService.getSupplierById(id).subscribe(response =>{
      this.suppliers.push(response);
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private deleteSupplierById(id: number){
    this.supplierService.deleteSupplierById(id).subscribe(response =>{
      console.log(`DELETE Request for ... successful`, response);
    }, error => {
      console.error(`Error during DELETE request for ...`,error)
    })
  }

  private updateSupplier(supplier: Supplier, id: number){
    this.supplierService.updateSupplier(supplier,id).subscribe(response =>{
      console.log(`PUT Request for ... successful`, response);
    }, error => {
      console.error(`Error during PUT request for ...`,error)
    })
  }

  onRowEditInit(supplier: Supplier) {
    this.clonedSuppliers[supplier.supplierid as number] = { ...supplier };
  }

  onRowEditSave(supplier: Supplier, index: number) {
      if (supplier.score >= 0 && supplier.score<= 10) {
          delete this.clonedSuppliers[supplier.supplierid as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Supplier is updated' });
          return this.updateSupplier(supplier,supplier.supplierid);
      }
      this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
      delete this.clonedSuppliers[supplier.supplierid as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Score' });
  }

  onRowEditDelete(supplier: Supplier, index: number){
    this.suppliers.splice(index,1);
    this.deleteSupplierById(supplier.supplierid);
  }

  onRowEditCancel(supplier: Supplier, index: number) {
      this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
      delete this.clonedSuppliers[supplier.supplierid as number];
  }

  onChangeDrop(event: Text){
    switch (event.name){
      case 'Todos':{
        this.router.navigate(['home/suppliers']);
        break;
      }
      case 'Calificacion':{
        break;
      }
      case 'Ciudad':{
        break;
      }
      case 'Id proveedor':{
        
        break;
      }
      case 'Id producto':{

        break;
      }
    }
  }
}
