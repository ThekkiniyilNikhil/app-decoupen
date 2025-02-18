import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isLoginScreen: boolean;
}
