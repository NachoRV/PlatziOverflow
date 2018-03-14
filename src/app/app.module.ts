import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Material angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { QuestionDetailComponent } from './question/question-detail.component';
import { RespuestaFormComponent } from './respuestas/respuesta-for.controller';
import { SigninScreenComponent } from './auth/signin-screem.component';
import { SignupScreenComponent } from './auth/singup-screen.Component';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';

import { MomentModule } from 'angular2-moment';
import { MatInputModule } from '@angular/material/input';
import { Routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    RespuestaFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    Routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
