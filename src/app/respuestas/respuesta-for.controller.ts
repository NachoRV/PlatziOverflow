import {Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Respuesta, User } from './respuestas.model';
import { Question } from '../question/question.module';

@Component({
  selector: 'app-respuesta-form',
  templateUrl: './respuesta-for.controller.html',
  styles: [`
    form{
      display: flex;
      flex-direction: column;
      width: 90;
      margin: 40px auto;
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
      new User('nacho', 'royo')
    );
    this.pregunta.respuestas.unshift(respuesta);
    form.reset();
  }
}
