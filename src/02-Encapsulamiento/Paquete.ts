export class Paquete {
  private destino: string

  constructor (destino: string) {
    this.destino = destino
  }

  obtenerDestino () {
    return this.destino
  }
}
