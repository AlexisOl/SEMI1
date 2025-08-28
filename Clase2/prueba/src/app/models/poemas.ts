

export interface nacionalidad  {
    id?: Number;
    tipo: String;
}


export interface poetas {
    id?: Number;
    nombre: String;
    nacionalidad: nacionalidad
}


export interface poemas {
    id?: Number;
    nombre: String;
    nacionalidad: nacionalidad
}

export interface categoria{

}