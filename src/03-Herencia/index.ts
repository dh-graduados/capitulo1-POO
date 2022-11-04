import { PaqueteInternacional } from './PaqueteInternacional'
import { PaqueteNacional } from './PaqueteNacional'
import { Hotel } from './Hotel'

const paqueteMiami = new PaqueteInternacional('Miami')
const paqueteBSAS = new PaqueteNacional('Buenos Aires')

console.log('### Paquete a Miami')
// console.log(paqueteMiami.destino) // error
console.log(paqueteMiami.obtenerDestino())
console.log(paqueteMiami.requierePasaporte())

console.log('### Paquete a BSAS')
console.log(paqueteBSAS.obtenerDestino())
console.log(paqueteBSAS.requierePasaporte())

const hotelMiami = new Hotel('Hotel Miami Code', 'Miami')

console.log('\n### Hotel a Miami')
// console.log(hotelMiami.nombre) // error
// console.log(hotelMiami.ciudad) // error
console.log(hotelMiami.obtenerHotel())
