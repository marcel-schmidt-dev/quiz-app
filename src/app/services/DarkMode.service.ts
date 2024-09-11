import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkMode = new BehaviorSubject<boolean>(false);

  changeDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }

  getDarkMode() {
    return this.darkMode.asObservable();
  }

  getCurrentDarkModeValue(): boolean {
    return this.darkMode.value;
  }
}
