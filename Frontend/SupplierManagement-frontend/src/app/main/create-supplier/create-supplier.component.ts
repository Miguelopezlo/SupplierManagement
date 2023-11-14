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
  
/**
 * The ngOnInit function adds the supplier object to the suppliers array.
 */
  ngOnInit(){
    this.suppliers.push(this.supplier)
  }

/**
 * The function `postNewSupplier` sends a POST request to the server to create a new supplier and logs
 * the response or any errors.
 * @param {Supplier} supplier - The parameter `supplier` is of type `Supplier`, which is an object
 * representing a supplier.
 */
  private postNewSupplier(supplier: Supplier){
    this.supplierService.postNewSupplier(supplier).subscribe(response =>{
      console.log(`POST Request for ... successful`, response);
    }, error => {
      console.error(`Error during POST request for ...`,error)
    })
  }

/**
 * The function `postSupplierList` takes in an event object containing files and a form, reads the
 * first file from the event, and sends a POST request to the supplier service with the file.
 * @param event - An object containing the files that were uploaded.
 * @param {any} form - The `form` parameter is an object that represents the form data. It is used to
 * clear the form after the POST request is completed.
 */
  protected postSupplierList(event: { files: File[]; }, form: any) {
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

/**
 * The function "onRowEditInit" initializes a clone of the supplier object before editing.
 * @param {Supplier} supplier - The parameter "supplier" is of type "Supplier", which is an object
 * representing a supplier.
 */
  onRowEditInit(supplier: Supplier) {
    this.clonedSuppliers[supplier.supplierid as number] = { ...supplier };
  }

/**
 * The function `onRowEditSave` checks if the supplier's score is valid, and if so, saves the supplier
 * and displays a success message; otherwise, it reverts the changes and displays an error message.
 * @param {Supplier} supplier - The supplier object that is being edited.
 * @param {number} index - The index parameter represents the index of the supplier in the suppliers
 * array.
 * @returns the result of the "postNewSupplier" function call if the supplier's score is greater than
 * or equal to 0. Otherwise, it does not return anything.
 */
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

/**
 * The function "onRowEditCancel" reverts the changes made to a supplier object and removes it from the
 * clonedSuppliers array.
 * @param {Supplier} supplier - The `supplier` parameter is an object of type `Supplier`. It represents
 * the supplier that was being edited before the cancel action was triggered.
 * @param {number} index - The index parameter is the index of the row being edited in the suppliers
 * array. It is used to access and update the specific row in the array.
 */
  onRowEditCancel(supplier: Supplier, index: number) {
      this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
      delete this.clonedSuppliers[supplier.supplierid as number];
  }

}
