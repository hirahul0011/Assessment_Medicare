import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredUser } from '../models/registered-user.model';

const baseUrl = 'http://localhost:8080/api/registeredUsers';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUserService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(baseUrl);
  }

  get(id: any): Observable<RegisteredUser> {
    return this.http.get<RegisteredUser>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
