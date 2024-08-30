import { Component } from '@angular/core';
import { QuizzesService } from '../../services/quizzes.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.scss',
})
export class SelectCategoryComponent {
  categories: any[] = [];

  constructor(private quizzesService: QuizzesService) {}

  ngOnInit(): void {
    this.categories = this.quizzesService.getQuizCategories();
  }
}
