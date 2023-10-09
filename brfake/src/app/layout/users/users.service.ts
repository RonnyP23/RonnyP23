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

  async getUserById(param: number): Promise<any> {
    let id = param
    try {
      const url = `${environment.api}/user-account/${id}`;
      const result = await this.http.get<any>(url).toPromise();

    } catch (error) {
      
    }
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
    try {
      const url = `${environment.api}/user-account/${param}`;
      const userAccount = userselecteUpdate;
      const result = await this.http.patch<any>(url, userAccount).toPromise();
      return result
    } catch (error) {
      
    }
  }

}
