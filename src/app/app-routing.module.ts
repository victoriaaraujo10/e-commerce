import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { HomeComponent } from './components/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { PagErroComponent } from './components/pag-erro/pag-erro.component';
import { FeedbackUsuarioComponent } from './components/feedback-usuario/feedback-usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component:ProdutosComponent },
  {path: 'carrinho', component:CarrinhoComponent},
  {path:'cadastrar', component:CadastrarComponent},
  { path: 'feedback-usuario', component: FeedbackUsuarioComponent},
  {path:'**', component:PagErroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
