import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AdminAddCategoryComponent } from './components/admin-add-category/admin-add-category.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
  // children:
  // [
  //   { path: ':categoryName', component: ProductsByCategoryComponent },    
  // ]
},
  // { path: 'home/:categoryName', component: HomeComponent },
  // { path: './:categoryName', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent,
          // children:[     
          //   {path:':admin',component:UserDetailsComponent},
          //   {path:'registeredUser',component:PlaceholderComponent},           
          // ] 
        },
  { path: 'register', component: RegisterComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  {path:'admin',component:AdminDashboardComponent},
  // {path:'registeredUser/:registeredUserName',component:UserDashboardComponent},
  {path:'registeredUser/:registeredUserName',component:HomeComponent},
  {path:'adminLogout',component:AdminLogoutComponent},
  {path:'editProduct/:id',component:EditProductComponent},
  {path:'adminAddCategory',component:AdminAddCategoryComponent},
  {path:'adminAddProduct',component:AdminAddProductComponent},
  {path:'checkout',component:CheckoutComponent}, 
  {path:'payment',component:PaymentComponent},
  {path:'orderSummary',component:OrderSummaryComponent},
  {path:'redirect',component:RedirectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
