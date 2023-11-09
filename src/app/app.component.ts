import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darkTheme = false;
  title = 'registration-angular';
  toggleDarkTheme(): void {
    this.darkTheme = !this.darkTheme;
  }
}
