import {Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Respuesta } from './respuestas.model';
import { Question } from '../question/question.module';
import { User } from '../auth/user.model';
@Component({
  selector: 'app-respuesta-form',
  templateUrl: './respuesta-for.controller.html',
  styles: [`
    form{
      margin-top: 20px;
    }

    `]

})

export class RespuestaFormComponent {
  @Input() pregunta: Question;

  onSubmit(form: NgForm ) {

    const respuesta = new Respuesta(
      form.value.descripcion,
      this.pregunta,
      new Date(),
      new User(null, null, 'nacho', 'royo-v')
    );
    this.pregunta.respuestas.unshift(respuesta);
    form.reset();
  }
}
