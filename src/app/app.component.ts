import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/DarkMode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SelectCategoryComponent,
    HeaderComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quiz-app';
  darkMode: boolean = false;
  private darkModeSubscription!: Subscription;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeSubscription = this.darkModeService
      .getDarkMode()
      .subscribe((darkMode: boolean) => {
        this.darkMode = darkMode;
      });
  }

  ngOnDestroy(): void {
    if (this.darkModeSubscription) {
      this.darkModeSubscription.unsubscribe();
    }
  }
}
