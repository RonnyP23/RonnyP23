import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateAccountService } from './create-account.service';
import * as bcrypt from 'bcryptjs'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
   name: string = '';
   email: string = '';
   telefone: string = '';
   cpf: string = '';
   password: string = '';



  createUser: FormGroup;
  showCreate = false;
  validCadastro = false;


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

  if(name: string ) {

  }
  async onSubmit() {
  
    const name = this.createUser.get('name')?.value;
    const email = this.createUser.get('email')?.value;
    const telefone = this.createUser.get('telefone')?.value;
    const cpf = this.createUser.get('cpf')?.value;
    const password = this.createUser.get('password')?.value;

    // const saltRounds = 10;
    // const hashedPassword = bcrypt.hashSync(password, saltRounds)

    const createData = {
      name: name,
      email: email,
      telefone: telefone,
      cpf: cpf,
      password: password
    }
    
    try {
      const result = await this.createAccountService.createAccount(createData)
      this.validCadastro = true
      setTimeout(() => {
        window.location.href = ''
        this.validCadastro = false
    }, 5000);
    } catch (error) {
      console.log(error)
    }
  }
}
