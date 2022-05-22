import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback-usuario.component.html',
  styleUrls: ['./feedback-usuario.component.css']
})
export class FeedbackUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

vaidacerto = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    feedback: ['', [Validators.required, Validators.minLength(20)]],
    nota: ['', [Validators.required]],
  });

  get nome() {
    return this.vaidacerto.get('nome');
  }
  get email() {
    return this.vaidacerto.get('email');
  }

  get feedback() {
    return this.vaidacerto.get('feedback');
  }

  get nota() {
    return this.vaidacerto.get('nota');
  }


  onSubmit() {
    alert('Obrigado pelo FeedBack!');
  }

  ngOnInit(): void {
  }

}
