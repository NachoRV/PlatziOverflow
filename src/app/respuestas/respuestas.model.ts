import { Question } from '../question/question.module';

export class User {
  constructor(
    public nombre: string,
    public apellidos: string,
  ){ }
}


export class Respuesta {
  constructor(
    public descripcion: string,
    public question: Question,
    public vreatedAt?: Date,
    public user?: User,
  ){ }
}
