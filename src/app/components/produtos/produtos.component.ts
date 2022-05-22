import { CarrinhoAPIService } from './../../services/carrinho-api.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  listaProdutos:any;

  constructor(private api:ApiService, private cartApi:CarrinhoAPIService) { }

  ngOnInit(): void {
    this.api.getProdutos().subscribe(res=>{
      this.listaProdutos=res;
      this.listaProdutos.forEach((a:any)=>{
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }

  addtoCart(item:any){
    this.cartApi.addToCart(item);
  }

}
