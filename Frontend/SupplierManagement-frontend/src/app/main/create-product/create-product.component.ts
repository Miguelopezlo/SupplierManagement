import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [MessageService]
})
export class CreateProductComponent implements OnInit{

  products: Product[] = [];

  product: Product= {} as Product;
  

  clonedProducts: { [s: number]: Product } = {};

  columnHeadProducts: string[] = ['Nombre producto','Precio promedio','Criterio de seleccion','Actividad de seleccion','Acciones'];

  constructor(private productService:ProductService, private messageService: MessageService){}
  
  ngOnInit(){
    this.products.push(this.product)
  }

  private postNewProduct(product: Product){
    this.productService.postNewProduct(product).subscribe(response =>{
      console.log(`POST Request for ... successful`, response);
    }, error => {
      console.error(`Error during POST request for ...`,error)
    })
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.productId as number] = { ...product };
  }

  onRowEditSave(product: Product, index: number) {
    // product.averagePrice >= 0
      if (true) {
          delete this.clonedProducts[product.productId as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is loaded' });
          return this.postNewProduct(product);
      }
      this.products[index] = this.clonedProducts[product.productId as number];
      delete this.clonedProducts[product.productId as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Average Price' });
  }

  onRowEditCancel(product: Product, index: number) {
      this.products[index] = this.clonedProducts[product.productId as number];
      delete this.clonedProducts[product.productId as number];
  }

}
