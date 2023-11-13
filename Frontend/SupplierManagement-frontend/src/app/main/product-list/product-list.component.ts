import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product/product';
import { ProductService } from '../../services/product/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [MessageService]
})
export class ProductListComponent{
  products!: Product[];

  clonedProduct: { [s: number]: Product} ={};

  columnHeadProducts: string[] = ['ID Producto','Nombre producto','Precio promedio','Criterio de seleccion','Actividad de seleccion'];

  constructor(private productService: ProductService, private messageService: MessageService){}

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
      this.products[0]= response;
      console.log(`GET Request for ... successful`, response);
    }, error => {
      console.error(`Error during GET request for ...`,error)
    })
  }

  private getProductByCriteria(criteria: number){
    this.productService.getProductByCriteria(criteria).subscribe(response =>{
      this.products[0] = response;
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

}
