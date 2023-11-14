import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../services/supplier/supplier';
import { SupplierService } from '../../services/supplier/supplier.service';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers: [MessageService]
})

export class SupplierListComponent implements OnInit{

  boolInput: boolean = false;

  dropdownOptions: string[];

  value: string;

  selectedItem: string;

  suppliers: Supplier[]=[];

  clonedSuppliers: { [s: number]: Supplier } = {};

  columnHeadSupplier: string[]= ['Nombre de empresa','Nombre de contacto','Dirección','Telefono','E-mail','Calificacion','Ciudad','Acciones'];

  constructor(private supplierService:SupplierService, private messageService: MessageService, private router: Router){}

/**
 * The ngOnInit function initializes a dropdownOptions array with a list of options.
 */
  ngOnInit(){
    this.dropdownOptions=['Todos','Calificacion','Ciudad','Id proveedor','Id producto'];
  }

/**
 * The handleEnterKey function checks the current URL and calls different functions based on the URL to
 * get supplier data.
 */
  handleEnterKey() {
    switch(this.router.url){
      case '/home/suppliers/score':{
        this.getSupplierByScore(parseInt(this.value))
        break;
      }
      case '/home/suppliers/city':{
        this.getSupplierByCity(this.value)
        break;
      }
      case '/home/suppliers/productid':{
        this.getSupplierByProductId(parseInt(this.value))
        break;
      }
    }
  }

/**
 * The function `getSuppliersList` makes a GET request to retrieve a list of suppliers and logs the
 * response or any errors.
 */
  private getSuppliersList(){
    this.supplierService.getSupplierList().subscribe(response =>{
      this.suppliers = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

/**
 * The function `getSupplierByScore` makes a GET request to the supplier service to retrieve suppliers
 * based on a given score and logs the response.
 * @param {number} score - The parameter "score" is a number that represents the score of a supplier.
 */
  private getSupplierByScore(score: number){
    this.supplierService.getSupplierByScore(score).subscribe(response =>{
      this.suppliers = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

/**
 * The function `getSupplierByCity` makes a GET request to retrieve suppliers based on a specified city
 * and logs the response or any errors.
 * @param {string} city - The `city` parameter is a string that represents the city for which you want
 * to retrieve suppliers.
 */
  private getSupplierByCity(city: string){
    this.supplierService.getSupplierByCity(city).subscribe(response =>{
      this.suppliers = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

/**
 * The function `getSupplierByProductId` makes a GET request to retrieve the supplier information for a
 * given product ID and logs the response or any errors.
 * @param {number} productid - The `productid` parameter is a number that represents the ID of a
 * product.
 */
  private getSupplierByProductId(productid: number){
    this.supplierService.getSupplierByProductId(productid).subscribe(response =>{
      this.suppliers = response;
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
 * array. It is used to access and update the supplier at that specific index.
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
 * The function `onChangeDrop` is used to navigate to different routes based on the selected value of a
 * dropdown and update a boolean variable accordingly.
 * @param {DropdownChangeEvent} event - The parameter "event" is of type DropdownChangeEvent. It is an
 * object that represents the change event of a dropdown component. It typically contains information
 * about the selected value of the dropdown.
 */
  onChangeDrop(event: DropdownChangeEvent){
    switch (event.value){
      case 'Todos':{
        this.router.navigate(['home/suppliers/all']);
        this.getSuppliersList();
        this.boolInput=true;
        break;
      }
      case 'Calificacion':{
        this.router.navigate(['home/suppliers/score']);
        this.boolInput=false;
        break;
      }
      case 'Ciudad':{
        this.router.navigate(['home/suppliers/city']);
        this.boolInput=false;
        break;
      }
      case 'Id proveedor':{
        this.router.navigate(['home/suppliersid']);
        this.boolInput=false;
        break;
      }
      case 'Id producto':{
        this.router.navigate(['home/suppliers/productid']);
        this.boolInput=false;
        break;
      }
    }
  }
}
