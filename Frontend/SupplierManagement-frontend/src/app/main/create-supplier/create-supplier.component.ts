import { Component , OnInit} from '@angular/core';
import { Supplier } from '../../services/supplier/supplier';
import { SupplierService } from '../../services/supplier/supplier.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css'],
  providers: [MessageService]
})
export class CreateSupplierComponent implements OnInit{

  suppliers: Supplier[] = [];

  supplier: Supplier= {} as Supplier;
  

  clonedSuppliers: { [s: number]: Supplier } = {};

  columnHeadSupplier: string[]= ['Nombre de empresa','Nombre de contacto','Dirección','Telefono','E-mail','Calificacion','Ciudad','Acciones'];

  constructor(private supplierService:SupplierService, private messageService: MessageService){}
  
  ngOnInit(){
    this.suppliers.push(this.supplier)
  }

  private postNewSupplier(supplier: Supplier){
    this.supplierService.postNewSupplier(supplier).subscribe(response =>{
      console.log(`POST Request for ... successful`, response);
    }, error => {
      console.error(`Error during POST request for ...`,error)
    })
  }

    private postSupplierList(event: { files: File[]; }, form: any) {
    console.log('Reading file...');
    let file = event.files[0];
    this.supplierService.postSupplierList(file).subscribe(response =>{
      console.log(`POST Request for ... successful`, response);
    }, error => {
      console.error(`Error during POST request for ...`,error)
    }
    )
    form.clear();
  }

  onRowEditInit(supplier: Supplier) {
    this.clonedSuppliers[supplier.supplierid as number] = { ...supplier };
  }

  onRowEditSave(supplier: Supplier, index: number) {
      if (supplier.score >= 0) {
          delete this.clonedSuppliers[supplier.supplierid as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Supplier is loaded' });
          return this.postNewSupplier(supplier);
      }
      this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
      delete this.clonedSuppliers[supplier.supplierid as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Score' });
  }

  onRowEditCancel(supplier: Supplier, index: number) {
      this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
      delete this.clonedSuppliers[supplier.supplierid as number];
  }

}
