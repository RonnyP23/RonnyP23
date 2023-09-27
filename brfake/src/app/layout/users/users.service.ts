import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  async getAllUsers() {

    const result = await this.http.get<any>(`${environment.api}/user-account`).toPromise();
    return result
    
  }

  async clearUserById (param: any): Promise<any> {
    let id = param
    try {
      const url = `${environment.api}/user-account/${id}`;
      const result = await this.http.delete<any>(url).toPromise();
      return result

    } catch (error) {
      
    }
  }

  async updateAccount (param: any, userselecteUpdate: any) {
    debugger
    try {
      const url = `${environment.api}/user-account/${param.name,param.email,param.telefone,param.cpf}`;
      const userAccount = userselecteUpdate;
      const result = await this.http.put<any>(url, userAccount).toPromise();
    } catch (error) {
      
    }
  }

}
