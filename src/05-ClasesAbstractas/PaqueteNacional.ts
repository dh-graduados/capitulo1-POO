import { Paquete } from './Paquete'
export class PaqueteNacional extends Paquete {
  constructor (destino: string) {
    super(destino)
  }

  requierePasaporte () {
    return false
  }

  requiereTraslado (): boolean {
    return this.destinoConTraslado()
  }
}
