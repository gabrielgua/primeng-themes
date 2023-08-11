import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {



  constructor(@Inject(DOCUMENT) private document: Document) {
    let themeLink = localStorage.getItem('theme');

    if (themeLink) {
      this.switchTheme(themeLink);
    }
  }

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
      this.saveTheme(theme);      
    }
  }

  private saveTheme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  getTheme(): string {
    return localStorage.getItem('theme')!.toString();
  }
}
