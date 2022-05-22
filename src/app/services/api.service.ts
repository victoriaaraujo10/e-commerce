import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getProdutos(){
    return this.http.get("http://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res;
    }))
  }
}
