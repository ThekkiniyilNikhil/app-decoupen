import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OutsideClickDirective } from '../../Directives/outside-click.directive';

@Component({
  selector: 'app-header',
  imports: [CommonModule, OutsideClickDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() isLoginScreen: boolean;
  showDropdownMenu: boolean = false;
  @ViewChild('menuDropdownContainer') menuDropdownContainer!: ElementRef;
  isMobile: boolean = false;
  showDropDownInSmallDevices: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  showMenuDropdownFn(event: Event) {
    event.stopPropagation();
    this.showDropdownMenu = !this.showDropdownMenu;
  }

  showMenuDropDownInMobFn(event: Event) {
    event.stopPropagation();
    this.showDropDownInSmallDevices = !this.showDropDownInSmallDevices;
  }

  // method to close menu on outside click of menu and dropdown container
  handleOutsideClickOfMainMenuFn(event: Event) {
    if (event) {
      this.showDropdownMenu = false;
    }
  }

  // method to close menu on outside click of menu and dropdown container in small devices
  handleOutsideClickOfMainMenuInSmFn(event: Event) {
    if (event) {
      this.showDropDownInSmallDevices = false;
    }
  }

}
