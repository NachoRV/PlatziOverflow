import { Respuesta } from '../respuestas/respuestas.model';


export class Question {

  titulo: string;
  descripcion: string;
  createdAt?: Date;
  icon?: String;
  respuestas: Respuesta[];

  constructor(
    titulo: string,
    descripcion: string,
    createdAt?: Date,
    icon?: String,

  ){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.createdAt = createdAt;
    this.icon = icon;
    
  }

}
