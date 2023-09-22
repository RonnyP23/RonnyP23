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
    
      const result = await this.http.post<any>(`${environment.api}/user-account`, createData).subscribe();
      
    } catch (error) {
      
    }
  }

  
}

