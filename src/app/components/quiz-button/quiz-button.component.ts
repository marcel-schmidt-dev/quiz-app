import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-button.component.html',
  styleUrl: './quiz-button.component.scss',
})
export class QuizButtonComponent {
  @Input() letter: string = '';
  @Input() isSelected: boolean = false;
  @Output() buttonClick = new EventEmitter();

  handleClick() {
    this.buttonClick.emit();
  }
}