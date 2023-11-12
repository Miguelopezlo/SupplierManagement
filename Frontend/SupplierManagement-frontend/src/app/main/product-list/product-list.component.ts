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
  product!: Product[];

  clonedProduct: { [s: number]: Product} ={};

  columnHeadProducts: string[] = ['ID Producto','Nombre producto','Precio promedio','Criterio de seleccion','Actividad de seleccion','Acciones'];

  constructor(private productservice: ProductService, private messageService: MessageService){}


  private getProductId(){

  }

  onRowEditInit(product: Product) {
    this.clonedProduct[product.productid as number] = { ...product };
  }

  // if {... return } line 36-38 
  onRowEditSave(product: Product, index: number) {
      if (product.averageprice >= 0) {
          delete this.clonedProduct[product.productid as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
          return
      }
      this.product[index] = this.clonedProduct[product.productid as number];
      delete this.clonedProduct[product.productid as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid AveragePrice' });
  }

  onRowEditCancel(product: Product, index: number) {
      this.product[index] = this.clonedProduct[product.productid as number];
      delete this.clonedProduct[product.productid as number];
  }

}
