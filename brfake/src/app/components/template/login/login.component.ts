import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  login: FormGroup;
  

  constructor( 
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  async onSubmit() {
    debugger
      const email = this.login.get('email')?.value;
      const password = this.login.get('password')?.value;

      const loginData = {
        username: email,
        password: password
      };
    try {
      
      const result = await this.accountService.login(loginData);
      console.log(`login efetuado ${result}`);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error)
    }
    
  }

}
