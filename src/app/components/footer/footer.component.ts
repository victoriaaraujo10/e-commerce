import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 onSubmit(){
    alert("Email cadastro para receber ofertar com sucesso!")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
