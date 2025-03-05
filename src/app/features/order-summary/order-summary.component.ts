import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxOtpInputComponent, NgxOtpInputComponentOptions } from 'ngx-otp-input';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule, FormsModule, NgxOtpInputComponent, Checkbox],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

  useDecouponBalance: boolean = true;
  guestFullName: string;
  guestMobNumber: string;
  guestEmailId: string;
  isEnterGSTDetails: boolean = false;
  gstRegNumber: string;
  gstCompanyName: string;
  gstCompanyAddress: string;

  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 6,
    autoFocus: true,
    autoBlur: true
  };
  onOtpChange(otp: string): void {

  }
}
