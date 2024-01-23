import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {CustomersComponent} from "./customers/customers.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {
    path : "products", component : ProductsComponent, canActivate : [AuthGuard], data : { roles : ['ADMIN']}}
      ,
  {
    path : "customers", component : CustomersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
