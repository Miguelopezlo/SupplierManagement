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

  columnHeadProducts: string[] = ['Nombre producto','Precio promedio','Criterio de seleccion','Actividad de seleccion'];

  constructor(private productService:ProductService, private messageService: MessageService){}
  
  ngOnInit(){
    this.products.push(this.product)
  }

/**
 * The function `postNewProduct` sends a POST request to the server to create a new product and logs
 * the response or any errors.
 * @param {Product} product - The "product" parameter is of type "Product", which is likely a custom
 * class or interface representing a product object. It contains the necessary data for creating a new
 * product, such as name, price, description, etc.
 */
  private postNewProduct(product: Product){
    this.productService.postNewProduct(product).subscribe(response =>{
      console.log(`POST Request for new product successful`, response);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Producto cargado' });
    }, error => {
      console.error(`Error during POST request for new product`,error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El producto no pudo ser cargado' });
    })
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.productId as number] = { ...product };
  }


  onRowEditSave(product: Product, index: number) {
      if (product.averagePrice != '') {
          delete this.clonedProducts[product.productId as number];
          return this.postNewProduct(product);
      }
      this.products[index] = this.clonedProducts[product.productId as number];
      delete this.clonedProducts[product.productId as number];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Precio promedio invalido' });
  }

  onRowEditCancel(product: Product, index: number) {
      this.products[index] = this.clonedProducts[product.productId as number];
      delete this.clonedProducts[product.productId as number];
  }

}
