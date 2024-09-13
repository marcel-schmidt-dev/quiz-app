import { Component } from '@angular/core';
import { QuizzesService } from '../../services/Quizzes.service';
import { SelectCategoryButtonComponent } from '../select-category-button/select-category-button.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [SelectCategoryButtonComponent, HeaderComponent, CommonModule],
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent {
  categories: any[] = [];

  constructor(private quizzesService: QuizzesService) {}

  ngOnInit(): void {
    this.categories = this.quizzesService.getQuizCategories();
  }
}
