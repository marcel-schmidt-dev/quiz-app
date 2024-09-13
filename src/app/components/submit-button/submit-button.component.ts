import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  @Output() onSubmit = new EventEmitter();
  submitAnswer() {
    this.onSubmit.emit();
  }
}
