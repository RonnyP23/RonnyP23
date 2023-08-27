import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient) { }
  async createAccount(createData: any) {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      const result = await this.http.post<any>(`${environment.api}/user-account`, createData, httpOptions).subscribe();
      console.log(result);
    } catch (error) {
      // Handle the error here
    }
  }

  
}

