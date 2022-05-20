import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  peliculas:any[]=[
    {name: '',
    img: 'https://celularesexpress.com/wp-content/uploads/2021/06/1600722827_banner-xiaommi.png.png',
    des: ''},

    {
      name: '',
      img: 'https://dullo.com.br/wp-content/uploads/2021/03/banner-loja-1-scaled.jpg',
      desc: ''
    },
    {
      name: '',
      img: 'https://celularesexpress.com/wp-content/uploads/2021/06/1600722827_banner-xiaommi.png.png',
      desc: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
