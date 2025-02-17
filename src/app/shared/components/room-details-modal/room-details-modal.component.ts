import { Component, EventEmitter, Inject, Input, Optional, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-room-details-modal',
  imports: [CarouselModule],
  templateUrl: './room-details-modal.component.html',
  styleUrl: './room-details-modal.component.scss'
})
export class RoomDetailsModalComponent {

  roomSliderImagePlaceholders = [
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white',
    'https://placehold.co/250x250/orange/white'
  ];
  @Input() openAsBottomSheetModal: boolean;
  @Output() hideRoomDetOpenAsBotSheet = new EventEmitter<boolean>();

  constructor(
    @Optional() private dialogRef: MatDialogRef<RoomDetailsModalComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModalFn() {
    this.dialogRef.close();
  }

  hideRoomDetOpenAsBotSheetFn() {
    this.hideRoomDetOpenAsBotSheet.emit(true);
  }
}
