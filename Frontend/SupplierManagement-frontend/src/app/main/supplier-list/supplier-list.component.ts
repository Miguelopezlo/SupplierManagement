import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../services/supplier/supplier';
import { SupplierService } from '../../services/supplier/supplier.service';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers: [MessageService]
})

export class SupplierListComponent implements OnInit{

  dropdownOptions: string[];

  value: string;

  selectedItem: string;

  suppliers: Supplier[]=[];

  clonedSuppliers: { [s: number]: Supplier } = {};

  columnHeadSupplier: string[]= ['Nombre de empresa','Nombre de contacto','Dirección','Telefono','E-mail','Calificacion','Ciudad','Acciones'];

  constructor(private supplierService:SupplierService, private messageService: MessageService, private router: Router){}

  ngOnInit(){
    this.dropdownOptions=['Todos','Calificacion','Ciudad','Id proveedor','Id producto'];
  }

  private getSuppliersList(){
    this.supplierService.getSupplierList().subscribe(response =>{
      this.suppliers = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private getSupplierByScore(score: number){
    this.supplierService.getSupplierByScore(score).subscribe(response =>{
      this.suppliers = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private getSupplierByCity(city: string){
    this.supplierService.getSupplierByCity(city).subscribe(response =>{
      this.suppliers = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private getSupplierByProductId(productid: number){
    this.supplierService.getSupplierByProductId(productid).subscribe(response =>{
      this.suppliers = response;
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

  onChangeDrop(event: DropdownChangeEvent){
    switch (event.value){
      case 'Todos':{
        this.router.navigate(['home/suppliers/all']);
        this.getSuppliersList();
        break;
      }
      case 'Calificacion':{
        this.router.navigate(['home/suppliers/score']);
        break;
      }
      case 'Ciudad':{
        this.router.navigate(['home/suppliers/city']);
        break;
      }
      case 'Id proveedor':{
        this.router.navigate(['home/suppliersid']);
        break;
      }
      case 'Id producto':{
        this.router.navigate(['home/suppliers/productid']);
        break;
      }
    }
  }
}
