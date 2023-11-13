import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule} from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule} from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierListComponent } from './main/supplier-list/supplier-list.component';
import { SearchBarComponent } from './main/search-bar/search-bar.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { ContractListComponent } from './main/contract-list/contract-list.component';
import { MenuComponent } from './main/menu/menu.component';
import { SupplierListIdComponent } from './main/supplier-list-id/supplier-list-id.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { CreateContractComponent } from './main/create-contract/create-contract.component';
import { CreateProductComponent } from './main/create-product/create-product.component';
import { CreateSupplierComponent } from './main/create-supplier/create-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierListComponent,
    SearchBarComponent,
    ProductListComponent,
    ContractListComponent,
    MenuComponent,
    SupplierListIdComponent,
    MainComponent,
    LoginComponent,
    CreateContractComponent,
    CreateProductComponent,
    CreateSupplierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    MenuModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    FileUploadModule,
    PasswordModule,
    DialogModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
