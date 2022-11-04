import { PaqueteInternacional } from './PaqueteInternacional'
import { PaqueteNacional } from './PaqueteNacional'
import { Hotel } from './Hotel'

const paqueteMiami = new PaqueteInternacional('Miami')
const paqueteCordoba = new PaqueteNacional('Cordoba')
const hotelMiami = new Hotel('Hotel Miami Code', 'Miami')

console.log('### Paquete a Miami')
console.log(paqueteMiami.validarPasaporte())
console.log('\n### Paquete a Cordoba')
console.log(paqueteCordoba.validarPasaporte())

console.log('\n### Hotel a Miami')
console.log(hotelMiami.obtenerHotel())
