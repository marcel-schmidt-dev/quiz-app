import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectCategoryComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quiz-app';
}
