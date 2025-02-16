import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { IncrementDecrementCounterComponent } from '../../shared/components/increment-decrement-counter/increment-decrement-counter.component';
import { MatDialog } from '@angular/material/dialog';
import { MoreAmenetiesComponent } from '../../shared/components/more-ameneties/more-ameneties.component';
import { RoomDetailsModalComponent } from '../../shared/components/room-details-modal/room-details-modal.component';
import { CarouselModule } from 'primeng/carousel';
import { SelectRoomsComponent } from '../../shared/components/select-rooms/select-rooms.component';

@Component({
  selector: 'app-property-details',
  imports: [CommonModule, IncrementDecrementCounterComponent, CarouselModule, SelectRoomsComponent, MoreAmenetiesComponent],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.scss'
})
export class PropertyDetailsComponent implements OnInit, AfterViewInit {
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

  sliderImagePlaceholders = [
    'https://placehold.co/666x430/orange/white',
    'https://placehold.co/666x430/orange/white',
    'https://placehold.co/666x430/orange/white',
    'https://placehold.co/666x430/orange/white',
    'https://placehold.co/666x430/orange/white',
    'https://placehold.co/666x430/orange/white',
    'https://placehold.co/666x430/orange/white'
  ];
  sliderSmImagePlaceholders = [
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white'
  ];
  sliderImagestoDisplay: string[] = [];
  moreImgsCount: number;
  dialog = inject(MatDialog);
  dummyMoreAmenetiesArr = [
    {
      category: 'Popular Amenities',
      ameneties: ['Swimming Pool', 'Reception', 'Free Wi-Fi', 'Restaurant', 'Free Parking', 'Air Conditioning', 'Fitness Centre']
    },
    {
      category: 'Food and Drinks',
      ameneties: ['Restaurant']
    },
    {
      category: 'Safety and Security',
      ameneties: ['Securtiy Guard', 'Fire Extinguishers', 'CCTV']
    },
    {
      category: 'Health and Wellness',
      ameneties: ['Fitness Centre', 'First-aid Services']
    },
    {
      category: 'Transfers',
      ameneties: ['PaidAirport Transfers']
    }
  ]
  showRoomsInSmScreen = false;
  showMoreAmenetiesInSmScreen = false;
  isSmallDevices: boolean = false;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.generatePptyImagesForSliderFn();
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.isSmallDevices = window.innerWidth > 767 ? false : true;
      this.cdr.detectChanges();
    }
  }

  // method to create images array to display in banner
  generatePptyImagesForSliderFn() {
    const imgArrLength = this.sliderImagePlaceholders.length;
    const imgDisplayCount = 5;
    if(imgArrLength > imgDisplayCount) {
      this.moreImgsCount = imgArrLength - imgDisplayCount;
      this.sliderImagestoDisplay = this.sliderImagePlaceholders.slice(0, 5);
    } else {
      this.sliderImagestoDisplay = [...this.sliderImagePlaceholders];
    }
  }

  // method to open more ameneties modal
  openViewMoreAmenitiesModalFn() {
    const windowWidth = window.innerWidth;
    if(windowWidth > 510) {
      const dialogRef = this.dialog.open(MoreAmenetiesComponent, {
        width: '505px',
        maxWidth: '505px',
        panelClass: 'more-ameneties-modal-outr',
        data: this.dummyMoreAmenetiesArr,
        disableClose: true
      });
    } else {
      this.showMoreAmenetiesInSmScreen = true;
    }
  }

  // method to open modal to show more details of rooms
  openMoreSelectRoomDetailsModalFn() {
    const modalRef = this.dialog.open(RoomDetailsModalComponent, {
      width: '726px',
      maxWidth: '726px',
      panelClass: 'room-det-modal-outr',
      disableClose: true
    })
  }

  // method to open rooms available in small screens
  openRoomsAvailbleSmFn() {
    this.showRoomsInSmScreen = true;
  }

  // method to close rooms available in small screens
  closeSelectRoomInSmFn() {
    this.showRoomsInSmScreen = false;
  }
}
