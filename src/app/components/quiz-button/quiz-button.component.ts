import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-button.component.html',
  styleUrls: ['./quiz-button.component.scss'],
})
export class QuizButtonComponent {
  @Input() letter: string = '';
  @Input() isSelected: boolean = false;
  @Input() index: any;
  @Input() isCorrect: boolean = false;
  @Input() answerSubmitted: boolean = false;

  @Output() answerSelected = new EventEmitter<Number>();

  handleClick() {
    this.answerSelected.emit(this.index);
  }
}
