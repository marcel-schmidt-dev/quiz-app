import { Component } from '@angular/core';
import { QuizzesService } from '../../services/Quizzes.service';
import { SelectCategoryButtonComponent } from '../select-category-button/select-category-button.component';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [SelectCategoryButtonComponent, HeaderComponent],
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
