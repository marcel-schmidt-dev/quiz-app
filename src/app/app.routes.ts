import { Routes } from '@angular/router';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { QuizComponent } from './components/quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: SelectCategoryComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '' },
];
