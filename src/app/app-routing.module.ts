import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
 /* { path: '', redirectTo: '/home', pathMatch: 'full' },*/
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
