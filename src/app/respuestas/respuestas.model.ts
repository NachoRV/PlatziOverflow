import { Question } from '../question/question.module';
import { User } from '../auth/user.model';


export class Respuesta {
  constructor(
    public descripcion: string,
    public question: Question,
    public vreatedAt?: Date,
    public user?: User
  ) { }
}
