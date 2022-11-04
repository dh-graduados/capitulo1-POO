import { Paquete } from './Paquete'
import { Hotel } from './Hotel'

const paqueteMiami = new Paquete('Miami')

console.log('### Paquete a Miami')
console.log(paqueteMiami.destino)

const hotelMiami = new Hotel('Hotel Gran Miami', 'Miami')

console.log(hotelMiami.nombre)
console.log(hotelMiami.ciudad)
console.log('############')
console.log(hotelMiami)
