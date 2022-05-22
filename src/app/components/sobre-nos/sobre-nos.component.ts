 import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
    const loader= new Loader({
  apiKey:"AIzaSyA-e48GByi9nti9pq_mifHC7qVzlZSS5QA",
  version:"weekly"
});
  loader.load().then(() => {  
     const point = { lat:-23.593318820054122, lng:-46.68599194313524};

  const map = new google.maps.Map(
  document.getElementById("map") as HTMLElement,
   {zoom: 17,center: point,})

  const marker = new google.maps.Marker({
    position: point,
    map: map,
  });
});
  }

}
