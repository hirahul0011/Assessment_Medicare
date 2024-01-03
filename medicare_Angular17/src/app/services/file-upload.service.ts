import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url 
  // baseApiUrl = "https://file.io"
  // baseApiUrl = "http://localhost:8080/api/products"

  // constructor(private http:HttpClient) { }

  // Returns an observable 
  // upload(file):Observable<any> { 
  
    // Create form data 
    // const formData = new FormData();  
      
    // Store form name as "file" with file data 
    // formData.append("file", file, file.name); 
      
    // Make http post request over api 
    // with formData as req 
    // return this.http.post(this.baseApiUrl, formData) 
  // } 





  private baseUrl = 'http://localhost:8080/api/productImages';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  } 
  
  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  }

  updateFile(id: any, file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('PUT', `${this.baseUrl}/update/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);

    // return this.http.put(`${this.baseUrl}/update/${id}`, file);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }    

  getFile(id:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/${id}`);
  }
  
  getImageDataToShow(id:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getImagesDataToShow():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`);
  }

}
