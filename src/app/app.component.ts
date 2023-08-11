import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primeng-switch-themes';
  showPassword: boolean = false;

  constructor(private themeService: ThemeService) {}
  
  ngOnInit(): void {
    
  }

  changeTheme(theme: string): void {
    this.themeService.switchTheme(theme);
  }

  getTheme(): string {
    return this.themeService.getTheme();
  }

  isSelectedTheme(theme: string): boolean {
    return this.getTheme() === theme;
  }
}
