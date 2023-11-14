import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../services/supplier/supplier';
import { SupplierService } from '../../services/supplier/supplier.service';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-list-id',
  templateUrl: './supplier-list-id.component.html',
  styleUrls: ['./supplier-list-id.component.css'],
  providers: [MessageService]
})

export class SupplierListIdComponent implements OnInit{

  dropdownOptions: string[];

  value: string;

  selectedItem: string;

  suppliers: Supplier[]=[];

  clonedSuppliers: { [s: number]: Supplier } = {};

  columnHeadSupplier: string[]= ['Nombre de empresa','Nombre de contacto','Dirección','Telefono','E-mail','Calificacion','Ciudad','Acciones'];

  constructor(private supplierService:SupplierService, private messageService: MessageService, private router: Router){}

  ngOnInit(){
    this.dropdownOptions=['Id proveedor','Calificacion','Ciudad','Todos','Id producto'];
  }

/**
 * The function "handleEnterKey" checks the current URL and calls a function to get a supplier by ID if
 * the URL matches a specific route.
 */
  handleEnterKey() {
    switch(this.router.url){
      case '/home/suppliersid':{
        this.getSupplierById(parseInt(this.value))
        break;
      }
    }
  }

/**
 * The function `getSupplierById` makes a GET request to retrieve a supplier by its ID and adds the
 * response to the `suppliers` array.
 * @param {number} id - The `id` parameter is a number that represents the unique identifier of a
 * supplier.
 */
  private getSupplierById(id: number){
    this.supplierService.getSupplierById(id).subscribe(response =>{
      this.suppliers.push(response);
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

/**
 * The function `deleteSupplierById` sends a DELETE request to the server to delete a supplier by their
 * ID and logs the response or any errors.
 * @param {number} id - The `id` parameter is the unique identifier of the supplier that you want to
 * delete.
 */
  private deleteSupplierById(id: number){
    this.supplierService.deleteSupplierById(id).subscribe(response =>{
      console.log(`DELETE Request for ... successful`, response);
    }, error => {
      console.error(`Error during DELETE request for ...`,error)
    })
  }

/**
 * The function `updateSupplier` sends a PUT request to update a supplier with the given data and ID,
 * and logs the response or any errors.
 * @param {Supplier} supplier - The `supplier` parameter is an object of type `Supplier` that contains
 * the updated information for the supplier.
 * @param {number} id - The `id` parameter is the unique identifier of the supplier that you want to
 * update. It is used to specify which supplier should be updated in the `updateSupplier` method.
 */
  private updateSupplier(supplier: Supplier, id: number){
    this.supplierService.updateSupplier(supplier,id).subscribe(response =>{
      console.log(`PUT Request for ... successful`, response);
    }, error => {
      console.error(`Error during PUT request for ...`,error)
    })
  }

/**
 * The function "onRowEditInit" creates a clone of the supplier object and stores it in the
 * "clonedSuppliers" array.
 * @param {Supplier} supplier - The parameter "supplier" is of type "Supplier".
 */
  onRowEditInit(supplier: Supplier) {
    this.clonedSuppliers[supplier.supplierid as number] = { ...supplier };
  }

/**
 * The function `onRowEditSave` checks if the supplier's score is within a valid range, updates the
 * supplier if the score is valid, and displays an error message if the score is invalid.
 * @param {Supplier} supplier - The "supplier" parameter is an object that represents a supplier. It
 * contains properties such as "supplierid" and "score" which are used in the function logic.
 * @param {number} index - The index parameter represents the index of the supplier in the suppliers
 * array.
 * @returns the result of the `updateSupplier` function if the supplier's score is between 0 and 10.
 * Otherwise, it does not explicitly return anything.
 */
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

/**
 * The function "onRowEditDelete" removes a supplier from the "suppliers" array at the specified index
 * and deletes the supplier by its ID.
 * @param {Supplier} supplier - The `supplier` parameter is an object of type `Supplier`. It represents
 * the supplier that needs to be deleted from the `suppliers` array.
 * @param {number} index - The index parameter represents the index of the supplier in the suppliers
 * array that needs to be edited or deleted.
 */
  onRowEditDelete(supplier: Supplier, index: number){
    this.suppliers.splice(index,1);
    this.deleteSupplierById(supplier.supplierid);
  }

/**
 * The function "onRowEditCancel" reverts the changes made to a supplier object and removes it from the
 * clonedSuppliers array.
 * @param {Supplier} supplier - The `supplier` parameter is an object of type `Supplier`. It represents
 * the supplier that was being edited before the cancel action was triggered.
 * @param {number} index - The index parameter is the index of the row being edited in the suppliers
 * array. It is used to access and update the corresponding element in the array.
 */
  onRowEditCancel(supplier: Supplier, index: number) {
      this.suppliers[index] = this.clonedSuppliers[supplier.supplierid as number];
      delete this.clonedSuppliers[supplier.supplierid as number];
  }

/**
 * The onChangeDrop function navigates to different routes based on the selected value of a dropdown
 * menu.
 * @param {DropdownChangeEvent} event - The event parameter is an object that represents the change
 * event of a dropdown. It contains information about the selected value of the dropdown.
 */
  onChangeDrop(event: DropdownChangeEvent){
    switch (event.value){
      case 'Todos':{
        this.router.navigate(['home/suppliers/all']);
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
