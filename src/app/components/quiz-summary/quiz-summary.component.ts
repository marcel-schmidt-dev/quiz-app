import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.scss'],
})
export class QuizSummaryComponent {
  @Input() correctAnswers: number = 0;
  @Input() maxAnswers: number = 0;
  @Input() category: any;
}
