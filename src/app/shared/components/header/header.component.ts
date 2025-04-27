import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  parentHeaderClassName: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setClassNameToParentElementFn();
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  // method to set class name to parent class for adjusting header styles, based on pages
  setClassNameToParentElementFn() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const url = event.urlAfterRedirects;
      this.parentHeaderClassName = '';
      if(url.includes('/home')) {
        this.parentHeaderClassName = 'home-header'
      } else {
        this.parentHeaderClassName = '';
      }
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
