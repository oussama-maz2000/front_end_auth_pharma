import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Client } from '../Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegisterService {

  constructor(private http:HttpClient) { }
getLocation():Promise<any>{
  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(response=>{
      resolve({lng:response.coords.longitude,lat:response.coords.latitude})
    })
  })
}

postUrl="http://localhost:8082/register"
  registerUser(user:Client): Observable<Object> {
   return this.http.post(`${this.postUrl}`,user);
  }
  
}
