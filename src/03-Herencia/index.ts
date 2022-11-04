import { PaqueteInternacional } from './PaqueteInternacional'
import { Hotel } from './Hotel'

const paqueteMiami = new PaqueteInternacional('Miami')
const hotelMiami = new Hotel('Hotel Miami Code', 'Miami')

console.log('### Paquete a Miami')
// console.log(paqueteMiami.destino) // error
console.log(paqueteMiami.obtenerDestino())
console.log(paqueteMiami.requierePasaporte())

console.log('\n### Hotel a Miami')
// console.log(hotelMiami.nombre) // error
// console.log(hotelMiami.ciudad) // error
console.log(hotelMiami.obtenerHotel())
