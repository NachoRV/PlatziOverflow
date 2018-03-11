import { Component } from '@angular/core';
import { Question } from './question.module';

const q = new Question(
  '¿Como reutilizo un componente en android?',
  'esta es mi pregunta',
  new Date,
  'devicon-android-plain'
);
@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles: [`
      i{
        font-size: 48px;
      }
    `]
})

export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);

}
