import { ITraslado } from './ITraslado'

export class TrasladoAuto implements ITraslado {
  tipo: string
  capacidad: number
  constructor (tipo: string, capacidad: number) {
    this.tipo = tipo
    this.capacidad = capacidad
  }

  validarCapacidad (personas: number) {
    if (this.capacidad <= personas) {
      return true
    }
    return false
  }
}
