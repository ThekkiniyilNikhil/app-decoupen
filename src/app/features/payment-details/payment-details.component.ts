import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingSummaryComponent } from '../booking-summary/booking-summary.component';

@Component({
  selector: 'app-payment-details',
  imports: [CommonModule, FormsModule, BookingSummaryComponent],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.scss'
})
export class PaymentDetailsComponent {
  paymentOpts: string = 'upiId';
}
