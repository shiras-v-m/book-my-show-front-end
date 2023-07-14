import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url='http://localhost:3000'
  constructor(private http:HttpClient) { }

  adminRegister(email:any,password:any){
    const body={
      email,
      password
    }

    return this.http.post(`${this.base_url}/admin/register`,body)
  }
  getallmovies(){
    return this.http.get(`${this.base_url}/getallMovies`)
  }
  userRegister(name:any,email:any,password:any){
    const body={
      name,
      email,
      password
    }
    return this.http.post(`${this.base_url}/user/adduser`,body)
  }
  userLogin(email:any,password:any){
    const body={
    
      email,
      password
    }
    return this.http.post(`${this.base_url}/user/login`,body)
  }
  adminLogin(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post(`${this.base_url}/admin/login`,body)
  }
}
