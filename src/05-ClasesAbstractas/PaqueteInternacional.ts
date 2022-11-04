import { Paquete } from './Paquete'
const DESTINOS_CON_TRASLADOS = ['Miami', 'Calafate']

export class PaqueteInternacional extends Paquete {
  constructor (destino: string) {
    super(destino)
  }

  requierePasaporte () {
    return true
  }

  requiereTraslado (): boolean {
    return DESTINOS_CON_TRASLADOS.includes(this.obtenerDestino())
  }
}
