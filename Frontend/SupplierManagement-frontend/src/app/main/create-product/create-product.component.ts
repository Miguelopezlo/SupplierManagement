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

/**
 * The function `postNewProduct` sends a POST request to the server to create a new product and logs
 * the response or any errors.
 * @param {Product} product - The "product" parameter is of type "Product", which is likely a custom
 * class or interface representing a product object. It contains the necessary data for creating a new
 * product, such as name, price, description, etc.
 */
  private postNewProduct(product: Product){
    this.productService.postNewProduct(product).subscribe(response =>{
      console.log(`POST Request for ... successful`, response);
    }, error => {
      console.error(`Error during POST request for ...`,error)
    })
  }

/**
 * The function "onRowEditInit" initializes a clone of a product object for editing purposes.
 * @param {Product} product - The parameter "product" is of type "Product".
 */
  onRowEditInit(product: Product) {
    this.clonedProducts[product.productId as number] = { ...product };
  }

/**
 * The function `onRowEditSave` checks if the average price of a product is greater than or equal to
 * zero, and if so, saves the product and displays a success message; otherwise, it reverts the changes
 * and displays an error message.
 * @param {Product} product - The "product" parameter is an object of type "Product" which represents a
 * product. It contains various properties such as "productId", "averagePrice", etc.
 * @param {number} index - The `index` parameter represents the index of the product in the `products`
 * array that is being edited.
 * @returns the result of the `postNewProduct` function if the condition `product.averagePrice >= 0` is
 * true. Otherwise, it is not returning anything.
 */
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

/**
 * The function reverts the changes made to a product and cancels the editing process.
 * @param {Product} product - The "product" parameter is an object of type "Product". It represents the
 * product that was being edited before the cancel action was triggered.
 * @param {number} index - The index parameter represents the index of the product in the products
 * array that is being edited.
 */
  onRowEditCancel(product: Product, index: number) {
      this.products[index] = this.clonedProducts[product.productId as number];
      delete this.clonedProducts[product.productId as number];
  }

}
