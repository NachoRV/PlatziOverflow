import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-respuesta-form',
  templateUrl: './respuesta-for.controller.html',

})

export class respuestaFormComponent{
  onSubmit(form: NgForm ){
    console.log(form.value.descripcion);

  }
}
