import { Paquete } from './Paquete'

export class PaqueteInternacional extends Paquete {
  constructor (destino: string) {
    super(destino)
  }

  requierePasaporte () {
    return true
  }
}
