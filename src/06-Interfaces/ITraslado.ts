export interface ITraslado {
    tipo: string
    capacidad: number
    validarCapacidad: (personas: number) => boolean
}
