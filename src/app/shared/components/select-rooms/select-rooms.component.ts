import { Component, EventEmitter, Output } from '@angular/core';
import { IncrementDecrementCounterComponent } from '../increment-decrement-counter/increment-decrement-counter.component';

@Component({
  selector: 'app-select-rooms',
  imports: [IncrementDecrementCounterComponent],
  templateUrl: './select-rooms.component.html',
  styleUrl: './select-rooms.component.scss'
})
export class SelectRoomsComponent {

  @Output() backArrowClicked = new EventEmitter<boolean>();
  @Output() moreDetailClicked = new EventEmitter<boolean>();

  closeSelRoomCntrFn() {
    this.backArrowClicked.emit(true);
  }

  viewMoreDetailsInSmScreenFn() {
    this.moreDetailClicked.emit(true)
  }
}
