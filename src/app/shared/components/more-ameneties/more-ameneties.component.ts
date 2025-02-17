import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-more-ameneties',
  imports: [CommonModule],
  templateUrl: './more-ameneties.component.html',
  styleUrl: './more-ameneties.component.scss'
})
export class MoreAmenetiesComponent implements OnInit {

  @Input() amenetiesList: any;
  amenetiesListArr: any;
  @Input() openAsBottomSheetModal: boolean;
  @Output() hideOpenAsBottomSheetModal = new EventEmitter<boolean>();

  constructor(
    @Optional() private dialogRef: MatDialogRef<MoreAmenetiesComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.amenetiesListArr = this.dialogRef ? this.data : this.amenetiesList;
  }

  closeModalFn() {
    this.dialogRef.close();
  }

  closeBottomSheetFn() {
    this.hideOpenAsBottomSheetModal.emit(true);
  }
}
