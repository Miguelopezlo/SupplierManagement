import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { SupplierListIdComponent } from './supplier-list-id/supplier-list-id.component';

const routes: Routes = [
  {path:'suppliers', component: SupplierListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'contracts', component: ContractListComponent},
  {path: 'suppliersid', component: SupplierListIdComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
