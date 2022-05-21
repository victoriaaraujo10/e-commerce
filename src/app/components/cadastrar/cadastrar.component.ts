import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
   
    
    senha: ['', [Validators.required, Validators.minLength(8)]],
    
  });

  cadastroForm = this.fb.group({
        email2: ['', [ Validators.required,Validators.email]],
        cpf: ['', [Validators.required, Validators.minLength(11)]],
        celular: ['', [Validators.required, Validators.minLength(11)]],
        senha2: ['', [Validators.required, Validators.minLength(8)]],
        senha3: ['', [Validators.required]],
  },{
    validators: this.MustMatch('senha2', 'senha3')
  })

  get nome() {
    return this.loginForm.get('nome');
  }

  get email() {
    return this.loginForm.get('email');
  }

   get email2() {
    return this.cadastroForm.get('email2');
  }

  get cpf(){
    return this.cadastroForm.get('cpf');
  }

  get celular(){
    return this.cadastroForm.get('celular');
  }

  get senha() {
    return this.loginForm.get('senha');
  }
  get senha2() {
    return this.cadastroForm.get('senha2');
  }
  get senha3() {
    return this.cadastroForm.get('senha3');
  }

  MustMatch(controlName: string, matchingControlName: string){
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors['mustMatch']){
        return;
      };
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({mustMatch: true});
      }else{
        matchingControl.setErrors(null);
      }

    }
  }

  onLogin() {
    alert("Login feito com sucesso, bem vindo(a)")
    console.log("funcionando...");
  }

  onCadastro(){
    alert("Conta criada com sucesso!")
  }

  ngOnInit(): void {
  }

}
