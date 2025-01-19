import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxOtpInputComponent, NgxOtpInputComponentOptions } from 'ngx-otp-input';

export enum LoginType {
  MOBILE = 'mobile',
  EMAIL = 'email'
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, NgxOtpInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})

export class LoginComponent {
  
  isValidMobileNumber = false;
  mobNumber: string = '';
  emailId: string = '';
  loginType: LoginType = LoginType.MOBILE;
  loginTypeEnum = LoginType;
  mobErrorMessages: { [key: string]: string } = {};
  emailErrorMessages: { [key: string]: string } = {};
  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 6,
    autoFocus: true,
    autoBlur: true
  };
  @ViewChild('otpInput') otpInput!: NgxOtpInputComponent;
  isOTPValid = false;

  // This function is used to allow only numbers in the input field for mobile number
  numbersOnlyFn(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  // This function is used to choose the login type between mobile and email
  chooseLoginTypeFn(type: LoginType): void {
    this.loginType = type;
    this.mobErrorMessages = {};
    this.emailErrorMessages = {};
  }

  // This function is used to continue the login process
  signInContinueFn(): void {
    if(this.loginType === LoginType.MOBILE) {
      const regex = /^[6789]\d{9}$/;
      this.mobErrorMessages['invalidMobileNumber'] = !regex.test(this.mobNumber) ? 'Invalid phone number' : '';
    } else {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.emailErrorMessages['invalidEmail'] = !regex.test(this.emailId) ? 'Invalid email format' : '';
    }
  }

  // function calls when all otp input fields are entered
  onOtpChange(otp: string): void {
    this.isOTPValid = otp.length === this.otpOptions.otpLength;
  }
}
