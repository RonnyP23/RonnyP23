import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import * as bcrypt from 'bcryptjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  login: FormGroup;
  invalidPassword = false

  constructor( 
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.login = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  async onSubmit() {
      const email = this.login.get('email')?.value;
      const password = this.login.get('password')?.value;

      // const saltRounds = 10;
      // const hashedPassword = bcrypt.hashSync(password,saltRounds)
      const loginData = {
        username: email,
        password: password
      };
    try {
      const result = await this.accountService.login(loginData);
      console.log(`login efetuado ${result}`);
      this.router.navigate(['productCreate']);
    } catch (error) {
      this.invalidPassword = true
      //this.router.navigate(['createAccount']);
      console.log(error)
    }
    
  }

}
