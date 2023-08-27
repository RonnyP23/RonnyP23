import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateAccountService } from './create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createUser: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private createAccountService:CreateAccountService) { 
    
    this.createUser = this.formBuilder.group({
      name: '',
      email: '',
      telefone:'',
      cpf: '',
      password:''
    })
  }
  ngOnInit(): void {
     
  }

  async onSubmit() {
    debugger
    const name = this.createUser.get('name')?.value;
    const email = this.createUser.get('email')?.value;
    const telefone = this.createUser.get('telefone')?.value;
    const cpf = this.createUser.get('cpf')?.value;
    const password = this.createUser.get('password')?.value;

    const createData = {
      name: name,
      email: email,
      telefone: telefone,
      cpf: cpf,
      password: password
    }
    console.log(createData)
    try {
      const result = await this.createAccountService.createAccount(createData)
    } catch (error) {
      console.log(error)
    }
  }
}
