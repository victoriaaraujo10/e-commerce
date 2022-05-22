import { CarrinhoAPIService } from './../../services/carrinho-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalItemNumber: number =0;

  constructor(private cartApi:CarrinhoAPIService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalItemNumber = res.length;
    })
  }

}
