export abstract class Paquete {
  private destino: string

  constructor (destino: string) {
    this.destino = destino
  }

  abstract requierePasaporte (): boolean

  obtenerDestino () {
    return this.destino
  }

  validarPasaporte () {
    if (this.requierePasaporte()) {
      return 'Usted debe validar su pasaporte'
    }

    return 'No requiere pasaporte para el viaje.'
  }

  requiereTraslado (): boolean {
    return true
  }

  validarTraslado () {
    if (this.requiereTraslado()) {
      return 'Su paquete requiere traslado'
    }

    return 'Su paquete no requiere traslado.'
  }
}
