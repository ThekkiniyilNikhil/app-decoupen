import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { Popover, PopoverModule } from 'primeng/popover';
import { SharedModule } from '../../shared/shared.module';
import { FaqComponent } from '../faq/faq.component';
import { MatDialog } from '@angular/material/dialog';
import { CollectTarvellersDetailsModalComponent } from '../../shared/components/collect-tarvellers-details-modal/collect-tarvellers-details-modal.component';

@Component({
  selector: 'app-home',
  imports: [  FaqComponent, PopoverModule, SharedModule, DatePicker, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  // date range selector
  rangeDates: Date[] | undefined;
  currentDay: Date = new Date();

  ngOnInit(): void {
    this.openCollectTravelInvestmentModalFn();
  }

  @ViewChild('guestPopOver') guestPopOver!: Popover;
  toggleGuestsSelFn(event: any) {
    this.guestPopOver.toggle(event);
  }
  dummyGuestsSearchValues = [
    {
      category: 'Adults',
      ageRange: 'Ages 13 or above',
      defaultCount: 2
    },
    {
      category: 'Adults',
      ageRange: 'Ages 13 or above',
      defaultCount: 0
    },
    {
      category: 'Adults',
      ageRange: 'Ages 13 or above',
      defaultCount: 0
    },
    {
      category: 'Adults',
      ageRange: 'Ages 13 or above',
      defaultCount: 0
    }
  ];

  modalService = inject(MatDialog);
  // method to open search properties modal
  openCollectTravelInvestmentModalFn() {
    const dialogRef = this.modalService.open(CollectTarvellersDetailsModalComponent, {
      width: '605px',
      maxWidth: '605px',
      disableClose: true,
      panelClass: 'collect-travellers-detail-modal'
    });  

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('result', result)
      }
    })
  }
  
}
