import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule} from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select';
import { MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './components/template/footer/footer.component';
import { LoginComponent } from './components/template/login/login.component';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { HomeComponent } from './layout/home/home.component';
import { ProductCreateComponent } from './layout/product-create/product-create.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateAccountComponent } from './layout/create-account/create-account.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ProductCreateComponent,
    AuthenticationComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
