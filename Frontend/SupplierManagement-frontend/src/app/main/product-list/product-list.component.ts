import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product/product';
import { ProductService } from '../../services/product/product.service';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [MessageService]
})
export class ProductListComponent implements OnInit{

  boolInput: boolean = false;

  dropdownOptions: string[];

  value: string;

  selectedItem: string;

  products: Product[] = [];

  clonedProduct: { [s: number]: Product} ={};

  columnHeadProducts: string[] = ['ID Producto','Nombre producto','Precio promedio','Criterio de seleccion','Actividad de seleccion'];

  constructor(private productService: ProductService, private messageService: MessageService, private router: Router){}

  ngOnInit() {
    this.dropdownOptions=['Todos','Id producto','Criterio de seleccion'];
  }

  handleEnterKey() {
    this.products=[];
    switch(this.router.url){
      case '/home/products/productid':{
        this.getProductByProductId(parseInt(this.value))
        break;
      }
      case '/home/products/criteria':{
        this.getProductByCriteria(parseInt(this.value))
        break;
      }
    }
  }

  private getProductList(){
    this.productService.getProductList().subscribe(response =>{
      this.products = response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private getProductByProductId(productid: number){
    this.productService.getProductByProductId(productid).subscribe(response =>{
      this.products=response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private getProductByCriteria(criteria: number){
    this.productService.getProductByCriteria(criteria).subscribe(response =>{
      this.products= response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  // onRowEditInit(product: Product) {
  //   this.clonedProduct[product.productid as number] = { ...product };
  // }

  // onRowEditSave(product: Product, index: number) {
  //     if (product.averageprice >= 0) {
  //         delete this.clonedProduct[product.productid as number];
  //         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
  //         return
  //     }
  //     this.products[index] = this.clonedProduct[product.productid as number];
  //     delete this.clonedProduct[product.productid as number];
  //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Average Price' });
  // }

  // onRowEditCancel(product: Product, index: number) {
  //     this.products[index] = this.clonedProduct[product.productid as number];
  //     delete this.clonedProduct[product.productid as number];
  // }

  onChangeDrop(event: DropdownChangeEvent){
    switch (event.value){
      case 'Todos':{
        this.router.navigate(['home/products/all']);
        this.getProductList();
        this.boolInput=true;
        break;
      }
      case 'Id producto':{
        this.router.navigate(['home/products/productid']);
        this.boolInput=false;
        break;
      }
      case 'Criterio de seleccion':{
        this.router.navigate(['home/products/criteria']);
        this.boolInput=false;
        break;
      }
    }
  }

}
