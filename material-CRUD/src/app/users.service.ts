import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  postUser(data: any){
     return this.http.post<any>('https://jsonplaceholder.typicode.com/users/',data);

  }
  getUser(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  putUser(data:any, id: number){
    return this.http.put<any>('https://jsonplaceholder.typicode.com/users/'+id,data)
  }

  deleteUser(id:number){
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
