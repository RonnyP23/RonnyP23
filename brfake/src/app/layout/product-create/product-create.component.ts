import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  createUser: FormGroup

  constructor(private formBuilder: FormBuilder) { 
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
    const name = this.createUser.get('name')?.value;
    const email = this.createUser.get('email')?.value;
    const telefone = this.createUser.get('telefone')?.value;
    const cpf = this.createUser.get('cpf')?.value;
    const password = this.createUser.get('email')?.value;

    const createData = {
      name: name,
      email: email,
      telefone: telefone,
      cpf: cpf,
      password: password
    }
    console.log(createData)
  }

}
