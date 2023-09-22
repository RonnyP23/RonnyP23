import { LoginComponent } from './components/template/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductCreateComponent } from './layout/product-create/product-create.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './layout/create-account/create-account.component';
import { UsersComponent } from './layout/users/users.component';


const routes: Routes = [
  {path: '', component: LoginComponent,
  children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
  ]
  },
  {path: 'createAccount', component: CreateAccountComponent},

  {path: 'appHome', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'productCreate', component:ProductCreateComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
