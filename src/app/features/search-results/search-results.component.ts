import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-search-results',
  imports: [CommonModule, SharedModule, NgxPaginationModule],
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

  counterValueChangeFn(counterValue: number): void {
    console.log('Counter value changed to: ', counterValue);
  };

  pageChangeFn(page: any): void {
    console.log('Page changed to: ', page);
  }
}
