import { IHotel } from './IHotel'

export class Hotel implements IHotel {
  private nombre: string
  private ciudad: string

  constructor (nombre: string, ciudad: string) {
    this.nombre = nombre
    this.ciudad = ciudad
  }

  obtenerHotel () {
    return `El hotel ${this.nombre} está ubicado en ${this.ciudad}`
  }
}
