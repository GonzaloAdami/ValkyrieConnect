import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';

const routes: Routes = [
{path: '', component: Component}, 
 {path: 'Equipo', component: DesarrolladoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
