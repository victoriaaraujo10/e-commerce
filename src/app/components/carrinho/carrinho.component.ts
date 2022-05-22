import { CarrinhoAPIService } from './../../services/carrinho-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos:any=[];
  todosProdutos:any =0;

  constructor(private cartApi:CarrinhoAPIService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.produtos = res;
      this.todosProdutos = this.cartApi.getTotalAmount();
    })
    
  }

  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }

  removeAllProduct(){
    this.cartApi.removeAllCart();
  }

}
