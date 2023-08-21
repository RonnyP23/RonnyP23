import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    debugger
    const result = await this.http.post<any> (`${environment.api}/auth/login`, user).toPromise();

    if(result) {
      window.localStorage.setItem('token', result.access_token);
      return true
    }
    return false;
  }
}
