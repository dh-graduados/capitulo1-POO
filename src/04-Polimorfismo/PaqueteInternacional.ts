import { Paquete } from './Paquete'
const CIUDAD_TRASLADO = ['Miami', 'Calafate']

export class PaqueteInternacional extends Paquete {
  constructor (destino: string) {
    super(destino)
  }

  requierePasaporte () {
    return true
  }

  requiereTraslado () {
    const destino = this.obtenerDestino()
    return CIUDAD_TRASLADO.includes(destino)
  }
}
