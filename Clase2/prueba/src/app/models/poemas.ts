

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
  id?: number;
  nombre: string;
  texto: string;
  url: string;
  fecha?: string; 
    id_Poeta: number;
  id_categoria: number;
  poeta: poetas;
  categorium: categoria;
}

export interface categoria{
 id: number;
  tipo: string;
}