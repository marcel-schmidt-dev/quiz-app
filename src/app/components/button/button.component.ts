import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() icon: string = '';
  @Input() category: any = '';
  @Input() iconBackground: string = '';

  @Output() selectCategory = new EventEmitter<string>();

  onCategorySelect() {
    this.selectCategory.emit(this.category.title);
  }
}
