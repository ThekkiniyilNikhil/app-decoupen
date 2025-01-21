import { Component } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-datepicker-header',
  imports: [ MatIconModule ],
  templateUrl: './custom-datepicker-header.component.html',
  styleUrl: './custom-datepicker-header.component.scss',
  standalone: true
})
export class CustomDatepickerHeaderComponent {
  constructor(public calendar: MatCalendar<Date>) {}


  previousClicked(): void {
    const activeDate = this.calendar.activeDate;
    this.calendar.activeDate = new Date(
      activeDate.getFullYear(),
      activeDate.getMonth() - 1,
      1
    );
  }

  nextClicked(): void {
    const activeDate = this.calendar.activeDate;
    this.calendar.activeDate = new Date(
      activeDate.getFullYear(),
      activeDate.getMonth() + 1,
      1
    );
  }

  // Disable previous dates
  isPreviousDateDisabled(): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time
    const firstDayOfActiveMonth = new Date(
      this.calendar.activeDate.getFullYear(),
      this.calendar.activeDate.getMonth(),
      1
    );
    return firstDayOfActiveMonth <= today;
  }
}
