import { AsignaturasService } from './../../services/asignaturas.service';
import { asignaturasInterfaz } from './../../utils/asignaturasInterfaz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  contador: number = 0;
  asignaturas:asignaturasInterfaz[] = [];
  constructor(private servicioAsignaturas: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturas = this.servicioAsignaturas.getAsignaturas()
    this.contador = this.asignaturas.length
  }

  filtrarTodo(nombre:string, curso:string, conocimiento:string) {
    this.asignaturas = this.servicioAsignaturas.getAsigFiltrados(nombre,curso,conocimiento)
    this.contador = this.asignaturas.length
  }
}
