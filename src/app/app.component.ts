import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    SharedModule, 
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'decoupen-app';
  currentUrl: string = '';
  isLoginScreen: boolean = true;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects; // Get the full URL after redirection
        if(this.currentUrl === '/login') {
          this.isLoginScreen = true;
        }
      }
    });
  }
}
