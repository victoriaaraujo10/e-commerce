import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoAPIService {

  listaCarrinho:any =[];
  listaProdutos = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getProductData(){
    return this.listaProdutos.asObservable();
  }

  setProddutos(produto:any){
    this.listaCarrinho.push(...produto);
    this.listaProdutos.next(produto);

  }

  addToCart(produto:any){
    this.listaCarrinho.push(produto);
    this.listaProdutos.next(this.listaCarrinho);
    this.getTotalAmount();
    console.log(this.listaCarrinho)
  }

  getTotalAmount(){
    let grandTotal=0;
    this.listaCarrinho.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartData(produto: any){
    this.listaCarrinho.map((a:any, index:any)=>{
      if(produto.id === a.id){
        this.listaCarrinho.splice(index,1)
      }
    })
    this.listaProdutos.next(this.listaCarrinho)
  }

  removeAllCart(){
    this.listaCarrinho =[]
    this.listaProdutos.next(this.listaCarrinho)
  }

}
