import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { SigninScreenComponent } from './auth/signin-screem.component';
import { SignupScreenComponent } from './auth/singup-screen.component';

const APP_ROUTES: Routes = [
{ path:'', component: QuestionListComponent, pathMatch: 'full' },
{ path:'signin', component: SigninScreenComponent, },
//{ path:'signup', component: SignupScreenComponent, },
]
export const Routing = RouterModule.forRoot(APP_ROUTES);
