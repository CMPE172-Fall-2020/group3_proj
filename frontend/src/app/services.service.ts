import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(public http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get('http://localhost:8080/api/user');
  }

  createAcct(body):Observable<any>{
    return this.http.post('http://localhost:8080/api/user', body)
  }
}
