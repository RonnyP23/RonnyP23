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

  async clearUserById (param: any) {
    debugger
    let id = param
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      const result = await this.http.post<any>(`${environment.api}/user-account`,id,httpOptions).toPromise();
      return result
    } catch (error) {
      
    }
  }

}
