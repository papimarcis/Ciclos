import { asignaturasInterfaz } from './../../utils/asignaturasInterfaz';
import { ciclosInterfaz } from './../../utils/ciclosInterfaz';
import { AsignaturasService } from './../../services/asignaturas.service';
import { CiclosService } from './../../services/ciclos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  ciclosDam: ciclosInterfaz[] = [];
  ciclosDaw: ciclosInterfaz[] = [];
  asignaturasDam: asignaturasInterfaz[] = [];
  asignaturasDaw: asignaturasInterfaz[] = [];
  filtroDam: string = 'DAM';
  filtroDaw: string = 'DAW';

  constructor(private datosC: CiclosService, private datosA: AsignaturasService, private ruta: Router) { }

  ngOnInit(): void {
    this.asignaturasDam = this.datosA.getAsigFiltrado(this.filtroDam);
    this.asignaturasDaw = this.datosA.getAsigFiltrado(this.filtroDaw);
    this.ciclosDam = this.datosC.getCicloFiltrado(this.filtroDam);
    this.ciclosDaw = this.datosC.getCicloFiltrado(this.filtroDaw);
  }

  detalles(nombre: string, ciclo: number, imagen: string) {
    this.ruta.navigate(['detalle-ciclo', nombre, ciclo, imagen])
  }
}
