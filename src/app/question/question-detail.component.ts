import { Component } from '@angular/core';
import { Question } from './question.module';

@Component({

  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})

export class questionDetailComponent{
  question: Question = new Question(
    'Esto es el titulo ',
    'La pregunata que planteamos ira aqui La pregunata que planteamos ira aqui La pregunata que planteamos ira aqui...',
    new Date,
    'devicon-apple-original colored'
  );


}
