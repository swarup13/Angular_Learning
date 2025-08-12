import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }


getCustomer():Observable<any>{
debugger;
   return this.http.get('https://dummyjson.com/users')
}

}
