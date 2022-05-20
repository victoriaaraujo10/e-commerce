import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  cadastroForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    email2: ['', [ Validators.required,Validators.email]],
    endereco: ['', [Validators.required, Validators.maxLength(50)]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
    senha2: ['', [Validators.required, Validators.minLength(8)]],
    senha3: ['', [Validators.required, Validators.minLength(8)]],
  });

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

   get email2() {
    return this.cadastroForm.get('email2');
  }

  get endereco() {
    return this.cadastroForm.get('endereco');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }
  get senha2() {
    return this.cadastroForm.get('senha2');
  }
  get senha3() {
    return this.cadastroForm.get('senha3');
  }

  onSubmit() {
    alert('Bem vindo(a)!');
    console.log("sucessso");
  }

  ngOnInit(): void {
  }

}
