import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

const baseUrl = 'http://localhost:8080/api/carts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(baseUrl);
  }

  get(id: any): Observable<Cart> {
    return this.http.get<Cart>(`${baseUrl}/${id}`);
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

  findByCartproductregisteredusername(cartproductregisteredusername: any): Observable<Cart[]> {    
    return this.http.get<Cart[]>(`${baseUrl}/cartsbyregisteredusers/${cartproductregisteredusername}`);
  }

}
