import { LoginComponent } from './components/template/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductCreateComponent } from './layout/product-create/product-create.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';


const routes: Routes = [
  {path: '', component:HomeComponent,
    children:[
      {path:'',component: ProductCreateComponent}
    ],
    canActivate: [AuthGuard]
  },
  {path: '', component: LoginComponent,
  children:[
    {path: '', redirectTo: 'Login', pathMatch: 'full'},
    {path: 'Login', component: LoginComponent}
  ]
  }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }