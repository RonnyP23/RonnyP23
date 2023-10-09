import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const customReq = req.clone({
      setHeaders: {
        'Custom-Header': 'application/json',
        // 'Authorization': `Bearer ${}`
      },
    });

    
    return next.handle(customReq);
  }
}