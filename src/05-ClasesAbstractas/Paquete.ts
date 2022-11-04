const DESTINOS_CON_TRASLADOS = ['Miami', 'Calafate']

export abstract class Paquete {
  private destino: string

  constructor (destino: string) {
    this.destino = destino
  }

  abstract requierePasaporte (): boolean
  abstract requiereTraslado () :boolean

  obtenerDestino () {
    return this.destino
  }

  validarPasaporte () {
    if (this.requierePasaporte()) {
      return 'Usted debe validar su pasaporte'
    }

    return 'No requiere pasaporte para el viaje.'
  }

  validarTraslado () {
    if (this.requiereTraslado()) {
      return 'Su paquete requiere traslado'
    }

    return 'Su paquete no requiere traslado.'
  }

  protected destinoConTraslado () {
    return DESTINOS_CON_TRASLADOS.includes(this.obtenerDestino())
  }
}
