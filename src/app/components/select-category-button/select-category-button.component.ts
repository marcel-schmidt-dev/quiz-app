import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-category-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-category-button.component.html',
  styleUrl: './select-category-button.component.scss',
})
export class SelectCategoryButtonComponent {
  @Input() icon: string = '';
  @Input() category: any = '';
  @Input() iconBackground: string = '';

  @Output() buttonClick = new EventEmitter();

  handleClick() {
    this.buttonClick.emit(this.category.title);
  }
}
