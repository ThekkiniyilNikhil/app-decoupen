import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomDatepickerHeaderComponent } from '../../shared/components/custom-datepicker-header/custom-datepicker-header.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search-results',
  imports: [
    CommonModule, SharedModule, NgxPaginationModule, 
    MatDatepickerModule, MatNativeDateModule, FormsModule,
    MatSliderModule, MatFormFieldModule, MatSelectModule
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  dummyStayOptions = [ 'Resorts(10)', 'Hotels(8)', 'Bed and breakfasts(10)', 'Homestays(5)' ];
  dummyStarRatings = [ '5 star', '4 star', '3 star', '2 star', '1 star' ];
  dummyRoomGoodies = [ 'Free WiFi', 'Breakfast included', 'Free parking', 'Pet friendly' ];
  dummyMeals = [ 'Breakfast', 'Lunch', 'Dinner' ];
  dummyPropsFoundsLIst = [
    {
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },
    {
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },{
      discountOfferRate: 30,
      tagName: 'Most Popular',
      propertyName: 'Gokulam Grand',
      starRating: 4.86,
      totalReviews: 101,
      distance: '1 km away from Kowdiar',
      strikeOffPrice: 5900,
      currentPrice: 5400
    },
  ];
  currentPage = 1;
  isScrolledToThreshold = false;
  lastScrollPosition: number = 0;
  threshold: number = 130;
  scrollBuffer: number = 20;
  customHeader = CustomDatepickerHeaderComponent;
  minSpendingPlanRange = 4000;
  maxSpendingPlanRange = 18000;

  counterValueChangeFn(counterValue: number): void {
    console.log('Counter value changed to: ', counterValue);
  };

  pageChangeFn(page: any): void {
    console.log('Page changed to: ', page);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Only change visibility if the scroll position crosses the threshold + buffer range
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) > this.scrollBuffer) {
      if (currentScrollPosition > this.threshold) {
        this.isScrolledToThreshold = true;
      } else {
        this.isScrolledToThreshold = false;
      }

      // Update the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    }
  }

  // Filter function to disable previous dates
  filterDates = (date: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for accurate comparison
    return date ? date >= today : false;
  };

  // method to get minimum and maximum plan ranges
  onPlanRangeChangeFn() {
    console.log(`Min Value ${this.minSpendingPlanRange}`);
    console.log(`Max Value ${this.maxSpendingPlanRange}`);
  }

  sortByOpts = [ 'User Rating: Highest First', 'Price: Lowest First', 'Price: Highest First' ];
  selectedSortOpt = this.sortByOpts[0];

  @ViewChild('filterSmallScrnContainer') filterSmallScrnContainer!: ElementRef;
  @ViewChild('fullScrnHandler') fullScrnHandler!: ElementRef;
  @ViewChild('backToNormlScrnArrw') backToNormlScrnArrw!: ElementRef;
  touchStartY = 0;
  touchEndY = 0;
  // method to make filter container full screen in small devices
  gotoFullScrnFn() {
    this.filterSmallScrnContainer.nativeElement.style.height = '100%';
    this.filterSmallScrnContainer.nativeElement.style.borderRadius = '0';
    this.fullScrnHandler.nativeElement.style.display = 'none';
    this.backToNormlScrnArrw.nativeElement.style.display = 'block';
  }

  // swipe events for making full screen
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }
  onTouchEnd(event: TouchEvent) {
    this.touchEndY = event.changedTouches[0].clientY;

    if (this.touchStartY - this.touchEndY > 50) {
      this.gotoFullScrnFn();
    }
  }

  // show/hide filter panels in small devices
  showFilterPanel = false;
  openFilterPanelInSmFn() {
    this.showFilterPanel = true;
  }
  hideFilterPanelFn() {
    this.showFilterPanel = false;
  }
  cancelFilterActionFn() {
    this.showFilterPanel = false;
  }
}
