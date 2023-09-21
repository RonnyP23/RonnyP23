import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'
import { Users } from 'src/app/@types/interfaces/IUsers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'telefone', 'cpf', 'acoes'];

  usuario: Users[] = [
    {
      name: '',
      email: '',
      telefone: '',
      cpf: '',
      password: ''
    }
  ];
  

  constructor(
    private http: HttpClient,
    private userService: UsersService) { }

  ngOnInit(): void {
    
    this.getAll();

  }

  async getAll(): Promise<any> {
    
    try {

      const result = await this.userService.getAllUsers();
      this.usuario = result;
      
    } catch (error) {
      
    }
  }

  async clearElement(param: any) {
    debugger
    const result = await this.userService.clearUserById(param.id)
  }



}
