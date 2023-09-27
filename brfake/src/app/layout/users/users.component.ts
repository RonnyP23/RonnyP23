import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './users.service'
import { Users } from 'src/app/@types/interfaces/IUsers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'telefone', 'cpf', 'acoes'];

  showPopupSucessDelete = false;
  showPopupErrorDelete = false;
  usuario: Users[] = [
    {
      id: 0,
      name: '',
      email: '',
      telefone: '',
      cpf: '',
      password: ''
    }
  ];

  editUser: FormGroup;
  

  constructor(
    private http: HttpClient,
    private userService: UsersService,
    private formBuilder: FormBuilder) { 

      this.editUser = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        telefone:'',
        cpf: '',
        
      });

    }

  ngOnInit(): void {
    
    this.getAll();

  }

  async getAll(): Promise<any> {
    
    try {

      const result = await this.userService.getAllUsers();
      this.usuario = result;
      return result
    } catch (error) {
      
    }
  }

  async clearElement(param: any) {
    const result = await this.userService.clearUserById(param.id);

    if(result.data) {

      this.showPopupSucessDelete = true;
      this.getAll();
      setTimeout(() => {
        this.showPopupSucessDelete = false;
       }, 5000)
    } else {
      this.showPopupErrorDelete = true;

      setTimeout(() => {
        this.showPopupSucessDelete = false;
       }, 5000)
    }
    
      
    
    console.log(result)
  }

  async updateAccount() {
    debugger
    let name = this.editUser.get('name')?.value;
    let email = this.editUser.get('email')?.value;
    let telefone = this.editUser.get('telefone')?.value;
    let cpf = this.editUser.get('cpf')?.value;

    const updateData = {
      name: name,
      email: email,
      telefone: telefone,
      cpf: cpf
    }
     try {
      const result = await this.userService.getAllUsers();
      const userselecteUpdate =  result.find((usuario : Users) => usuario.id === result.id)

      if(userselecteUpdate) {
        const result = await this.userService.updateAccount(updateData, userselecteUpdate)
      }
     } catch (error) {
      
     }

    

    
  }

  showModalEditUsers() {
    const modalEditUsers = document.getElementById('modalEditUsers');
    const container = document.getElementById('content');
    if(modalEditUsers != null) {
     modalEditUsers.style.display = 'block';
    }
   }

   closeModalEditUsers() {
    const modalEditUsers = document.getElementById('modalEditUsers');
    if(modalEditUsers != null) {
     modalEditUsers.style.display = 'none';
    }
   }



}
