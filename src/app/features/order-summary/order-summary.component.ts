import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxOtpInputComponent, NgxOtpInputComponentOptions } from 'ngx-otp-input';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule, FormsModule, NgxOtpInputComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 6,
    autoFocus: true,
    autoBlur: true
  };
  onOtpChange(otp: string): void {

  }
}
