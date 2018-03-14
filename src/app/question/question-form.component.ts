import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.module';
import icons from './icons';

@Component ({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',

})

export class QuestionFormComponent {
  icons:Object[] = icons;
  getIconVersion(icon: any) {
    let version;

    if(icon.versions.font.includes('plain-wordmark')){
      version= 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }
    return version;
  }

  onSubmit(form: NgForm ) {
    const q = new Question(
      form.value.title,
      form.value.description
    );
console.log(q);
console.log(q);
  }
}
