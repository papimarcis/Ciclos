import { ciclosInterfaz } from './../utils/ciclosInterfaz';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  ciclos: ciclosInterfaz[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
  ]

  constructor() { }

  getCicloFiltrado(filtro: string): ciclosInterfaz[] {
    return this.ciclos.filter((item) => item.nombre.toLowerCase().includes(filtro.toLowerCase()));
  }

  getCiclosFiltrado(filtro: string, numero: number): ciclosInterfaz[] {
    return this.ciclos.filter((item) => item.nombre.toLowerCase().includes(filtro.toLowerCase()) && item.curso == numero);
  }
}
