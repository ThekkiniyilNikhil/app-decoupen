import { Component, Inject } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
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
  
  currentMonthYear: string;
  
  constructor(
    @Inject(MatCalendar) private calendar: MatCalendar<Date>,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.updateMonthYear();
  }

  updateMonthYear() {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateTimeStamp = this.calendar.activeDate;
    const month = monthArr[dateTimeStamp.getMonth()];
    const year = dateTimeStamp.getFullYear();
    this.currentMonthYear = `${month} ${year}`;
  }

  previousClicked(): void {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
    this.updateMonthYear();
  }

  nextClicked(): void {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
    this.updateMonthYear();

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
