import { conocimientoInterface } from './conocimientoInterface';
export interface asignaturasInterfaz {
    nombre: string,
    profesor: string,
    conocimientos: conocimientoInterface[],
    ciclo: string,
    curso: number;
}