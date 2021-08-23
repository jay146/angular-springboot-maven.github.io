import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
// injectable decorator will make typescript class behaves like angular service 
export class UserserveService { 
private baseUrl = "http://localhost:8085/api"; 
constructor(private http: HttpClient) { }

// TO SAVE DATA FROM SERVICE
save(data:any):Observable<any>
{
  return this.http.post<any>(`${this.baseUrl}/user`,data)
  console.log(data);
}
// to send form data from service to springboot 
getdata():Observable<User[]>
{
  return this.http.get<User[]>(`${this.baseUrl}/user`);
    }

    deleteuser(id:any):Observable<any>
{
  return this.http.delete<any>(`${this.baseUrl}/user/${id}`);
    }

updateuser(data:any,id:any):Observable<any>
{
  return this.http.put<any>(`${this.baseUrl}/user/${id}`,data)
  }



}



