import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  constructor(
    private http: HttpClient,
    ) { }

  async login(user: any) {


    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      
      const result = await this.http.post<any>(`${environment.api}/auth/login`, user, httpOptions).toPromise();
      if (result && result.access_token) {
        // Armazena o token no localStorage
        window.localStorage.setItem('token', result.access_token);
        window.localStorage.setItem('usuario', user.username);
        return true;
      }
      
      return false;
    } catch (error) {
      
      return false;
    }
  }
}



