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

  showPopupSuccessEdit = false;
  showPopupErrorEdit = false;

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
  elemenIdEditUser: any = '';
  

  constructor(
    private http: HttpClient,
    private userService: UsersService,
    private formBuilder: FormBuilder) { 

      this.editUser = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        telefone:['', [Validators.pattern('/^\(\d{2}\)\s\d{4}-\d{4}$/')]],
        cpf: ['', [Validators.pattern('/^\d{3}\.\d{3}\.\d{3}-\d{2}$/')]],
        
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
  }

  async updateUserAccount() {
    let name = this.editUser.get('name')?.value;
    let email = this.editUser.get('email')?.value;
    let telefone = this.editUser.get('telefone')?.value;
    let cpf = this.editUser.get('cpf')?.value;
    let password = this.editUser.get('password')?.value;

    const updateData = {
      name: name,
      email: email,
      telefone: telefone,
      cpf: cpf,
      password: password
    }

     try {
      const result = await this.userService.updateAccount(this.elemenIdEditUser.id, updateData)
      if(result.affected == 1) {
        
        this.getAll();
        this.closeModalEditUserAccount();
        this.showPopupSuccessEdit = true;

        setTimeout(() => {
          this.showPopupSuccessEdit = false;
         }, 5000)
      }
     } catch (error) {
      this.showPopupErrorEdit = true;

      setTimeout(() => {
        this.showPopupErrorEdit = false;
       }, 5000)
     }
  }

  showModalEditUsers(param: any) {
    this.elemenIdEditUser = param;

    const modalEditUsers = document.getElementById('modalEditUsers');
    let container = document.getElementById('content');
   

    if(modalEditUsers != null) {
     modalEditUsers.style.display = 'block';
    }
   }

   closeModalEditUserAccount() {
    const modalEditUsers = document.getElementById('modalEditUsers');

    if(modalEditUsers != null) {
     modalEditUsers.style.display = 'none';
    }
   }

  

  



}
