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

  requiereTraslado (): boolean {
    return true
  }

  validarPasaporte () {
    if (this.requierePasaporte()) {
      return 'Usted debe validar su pasaporte'
    }

    return 'No requiere pasaporte para el viaje.'
  }

  validarTraslado () {
    if (this.requiereTraslado()) {
      return 'Su paquete requiere traslado.'
    }

    return 'Su paquete no requiere traslado.'
  }
}
