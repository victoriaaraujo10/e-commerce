import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { PagErroComponent } from './components/pag-erro/pag-erro.component';

const routes: Routes = [
  {path:'cadastrar', component:CadastrarComponent},
  {path:'**', component:PagErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
