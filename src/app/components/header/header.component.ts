import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../services/DarkMode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() background!: string;

  darkMode: boolean = false;

  constructor(public darkModeService: DarkModeService) {}

  switchDarkMode() {
    this.darkModeService.changeDarkMode();
    this.darkMode = this.darkModeService.getCurrentDarkModeValue();
  }
}
