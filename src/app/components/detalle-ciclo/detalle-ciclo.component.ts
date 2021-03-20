import { AsignaturasService } from './../../services/asignaturas.service';
import { asignaturasInterfaz } from './../../utils/asignaturasInterfaz';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-ciclo',
  templateUrl: './detalle-ciclo.component.html',
  styleUrls: ['./detalle-ciclo.component.css']
})
export class DetalleCicloComponent implements OnInit {

  asignaturas: asignaturasInterfaz[] = [];
  conocimientos: any[] = [];
  imagen: string = '';
  nombre: string = '';
  ciclo: number = 0;

  constructor(private datosA: AsignaturasService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.params.nombre;
    this.ciclo = this.rutaActiva.snapshot.params.ciclo;
    this.imagen = this.rutaActiva.snapshot.params.imagen;
    this.asignaturas = this.datosA.getAsignaFiltrado(this.nombre, this.ciclo);
    this.asignaturas.forEach(element => {
        this.conocimientos.push(element.conocimientos)
      
    });
  }

}
