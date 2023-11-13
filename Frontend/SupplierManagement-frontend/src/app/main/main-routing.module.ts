import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { SupplierListIdComponent } from './supplier-list-id/supplier-list-id.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';

const routes: Routes = [
  {path: 'home', children: [
    {path:'suppliers', component: SupplierListComponent},
    {path:'suppliersid', component: SupplierListIdComponent},
    {path: 'contracts', component: ContractListComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'createsupplier', component: CreateSupplierComponent},
    {path: 'createcontract', component: CreateContractComponent},
    {path: 'createproduct', component: CreateProductComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
