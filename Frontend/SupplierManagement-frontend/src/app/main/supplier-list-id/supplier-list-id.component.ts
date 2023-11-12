import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../services/supplier/supplier';
import { SupplierService } from '../../services/supplier/supplier.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-supplier-list-id',
  templateUrl: './supplier-list-id.component.html',
  styleUrls: ['./supplier-list-id.component.css'],
  providers: [MessageService]
})

export class SupplierListIdComponent implements OnInit{
  suppliers!: Supplier[];

  clonedSuppliers: { [s: number]: Supplier } = {};

  columnHeadSupplier: string[]= ['Id proveedor','Nombre de empresa','Nombre de contacto','Dirección','Telefono','E-mail','Calificacion','Ciudad','Acciones'];

  constructor(private supplierService:SupplierService, private messageService: MessageService){}

  ngOnInit(){
    
  }
  
  private getSuppliers(){

  }

  onRowEditInit(supplier: Supplier) {
    this.clonedSuppliers[supplier.supplierid as number] = { ...supplier };
  }

  onRowEditSave(supplier: Supplier, index: number) {
      if (supplier.score >= 0) {
          delete this.clonedSuppliers[supplier.supplierid as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Supplier is updated' });
      } else {
          this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
          delete this.clonedSuppliers[supplier.supplierid as number];
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Score' });
      }
  }

  onRowEditCancel(supplier: Supplier, index: number) {
      this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
      delete this.clonedSuppliers[supplier.supplierid as number];
  }
}
