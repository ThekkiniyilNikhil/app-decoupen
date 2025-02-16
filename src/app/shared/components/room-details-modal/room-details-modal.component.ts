import { Component, Inject } from '@angular/core';
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

  constructor(
    private dialogRef: MatDialogRef<RoomDetailsModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModalFn() {
    this.dialogRef.close();
  }
}
