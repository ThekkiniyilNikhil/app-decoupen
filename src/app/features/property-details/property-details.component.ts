import { Component } from '@angular/core';
import { IncrementDecrementCounterComponent } from '../../shared/components/increment-decrement-counter/increment-decrement-counter.component';

@Component({
  selector: 'app-property-details',
  imports: [IncrementDecrementCounterComponent],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.scss'
})
export class PropertyDetailsComponent {
  dummyAmenetiesArr = [
    {
      name: 'Wifi',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Free Parking',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Toiletries',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'TV',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Event Spaces',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Air Conditioning',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Gym',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Pool',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Breakfast',
      imgUrl: '/assets/images/wifi.svg'
    },
    {
      name: 'Pet Friendly',
      imgUrl: '/assets/images/wifi.svg'
    }
  ];
}
