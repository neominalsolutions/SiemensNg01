import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  isDarkTheme: boolean = false;

  changeBgColor() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
