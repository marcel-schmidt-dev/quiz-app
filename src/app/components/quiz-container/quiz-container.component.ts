import { Component, Input } from '@angular/core';
import { QuizButtonComponent } from '../quiz-button/quiz-button.component';

@Component({
  selector: 'app-quiz-container',
  standalone: true,
  imports: [QuizButtonComponent],
  templateUrl: './quiz-container.component.html',
  styleUrl: './quiz-container.component.scss',
})
export class QuizContainerComponent {
  @Input() questions: any = [];
  @Input() questionIndex: number = 0;

  selectedButton: number | null = null;

  ngOnInit() {
    console.log(this.questions);
  }

  getLetter(index: number) {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[index];
  }

  selectButton(index: number) {
    this.selectedButton = index;
  }
}
