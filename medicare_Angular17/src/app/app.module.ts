import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import {DataTablesModule} from 'angular-datatables';
import { FileUploadComponentComponent } from './components/file-upload-component/file-upload-component.component';
import { AdminAddCategoryComponent } from './components/admin-add-category/admin-add-category.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminLogoutComponent,
    EditProductComponent,
    FileUploadComponentComponent,
    AdminAddCategoryComponent,
    AdminAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
