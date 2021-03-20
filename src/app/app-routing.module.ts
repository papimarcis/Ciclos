import { DetalleCicloComponent } from './components/detalle-ciclo/detalle-ciclo.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ciclos', component: CiclosComponent},
  {path: 'asignaturas', component: AsignaturasComponent},
  {path: 'detalle-ciclo/:nombre/:ciclo/:imagen', component: DetalleCicloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
