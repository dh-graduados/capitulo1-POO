export class Paquete {
  private destino: string

  constructor (destino: string) {
    this.destino = destino
  }

  obtenerDestino () {
    return this.destino
  }

  requierePasaporte (): boolean {
    return true
  }

  validarPasaporte () {
    if (this.requierePasaporte()) {
      return 'Usted debe validar su pasaporte'
    }

    return 'No requiere pasaporte para el viaje.'
  }
}
