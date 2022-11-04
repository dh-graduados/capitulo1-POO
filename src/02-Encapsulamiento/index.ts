import { Paquete } from './Paquete'
import { Hotel } from './Hotel'

const paqueteMiami = new Paquete('Miami')
const hotelMiami = new Hotel('Hotel Miami Code', 'Miami')

console.log('### Paquete a Miami')
// console.log(paqueteMiami.destino) // error
console.log(paqueteMiami.obtenerDestino())

console.log('\n### Hotel a Miami')
console.log(hotelMiami.nombre)
console.log(hotelMiami.ciudad)
