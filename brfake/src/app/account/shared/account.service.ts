import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accessToken: string| null = null; 
  
  constructor(
    private http: HttpClient,
    ) { }

  async login(user: any) {
    try {
      
      const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
      this.accessToken = result.access_token;
      window.localStorage.setItem('usuario', user.username);
      window.localStorage.setItem( 'token', result.access_token);

      // if (this.accessToken) {
      //   window.localStorage.setItem('token', result.access_token);
      //   return true;
      // }
      
      return true;
    } catch (error) {
      return false;
    }
  }

  isAuthorized(): boolean {
    return !!this.accessToken;
  }

  logout(): void {
    window.localStorage.clear()
  }
}