import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './services/auth/auth.guard';
import { SupplierListComponent } from './main/supplier-list/supplier-list.component';
import { SupplierListIdComponent } from './main/supplier-list-id/supplier-list-id.component';
import { ContractListComponent } from './main/contract-list/contract-list.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { CreateSupplierComponent } from './main/create-supplier/create-supplier.component';
import { CreateContractComponent } from './main/create-contract/create-contract.component';
import { CreateProductComponent } from './main/create-product/create-product.component';

/* The `const routes: Routes` defines the routes for the Angular application. Each route object
specifies a path and a component that should be displayed when that path is accessed. */
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'home', canActivate: [AuthGuard], children: [
    {path:'suppliers', component: SupplierListComponent, children: [
      {path: 'all',component: SupplierListComponent},
      {path: 'score',component: SupplierListComponent},
      {path: 'city',component: SupplierListComponent},
      {path: 'productid',component: SupplierListComponent},
      {path: 'suppliersid', component: SupplierListComponent}
    ]},
    
    {path: 'contracts',  component: ContractListComponent, children:[
      {path: 'contractid',component: ContractListComponent},
    ]},
    {path: 'products',  component: ProductListComponent, children:[
      {path: 'all',component: ProductListComponent},
      {path: 'productid',component: ProductListComponent},
      {path: 'criteria',component: ProductListComponent},
    ]},
    {path: 'createsupplier', component: CreateSupplierComponent, },
    {path: 'createcontract', component: CreateContractComponent, },
    {path: 'createproduct', component: CreateProductComponent, },
  ]},
  {path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

