import { Paquete } from './Paquete'
const CIUDAD_TRASLADO = ['Miami', 'Calafate']

export class PaqueteNacional extends Paquete {
  constructor (destino: string) {
    super(destino)
  }

  requierePasaporte () {
    return false
  }

  requiereTraslado () {
    const destino = this.obtenerDestino()
    return CIUDAD_TRASLADO.includes(destino)
  }
}
