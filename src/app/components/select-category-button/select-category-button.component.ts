import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/Quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-category-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-category-button.component.html',
  styleUrls: ['./select-category-button.component.scss'],
})
export class SelectCategoryButtonComponent {
  @Input() icon: string = '';
  @Input() category: any = '';
  @Input() iconBackground: string = '';

  constructor(private quizService: QuizService, private router: Router) {}

  handleClick() {
    this.quizService.setCategory(this.category);
    this.router.navigate(['quiz']);
  }
}
