import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import * as bcrypt from 'bcryptjs'
import { UsersService } from 'src/app/layout/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  login: FormGroup;
  invalidPassword = false;
 

  constructor( 
    private accountService: AccountService,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.login = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
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
      if(result === false){
        this.invalidPassword = true;
        setTimeout(() => {
          this.invalidPassword = false;
      }, 5000);
      }else{
        this.router.navigate(['productCreate']);
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  async verifyUserLevel () {
    const id: any = ''
    const user = await this.usersService.getUserById(id)
  }

}
