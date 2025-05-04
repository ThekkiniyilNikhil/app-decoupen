import { CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-collect-tarvellers-details-modal',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './collect-tarvellers-details-modal.component.html',
  styleUrl: './collect-tarvellers-details-modal.component.scss'
})
export class CollectTarvellersDetailsModalComponent {

  fullName = '';
  emailId = '';
  mobNumber = '';
  formErrors: any = {};
  step: 'FORM' | 'DISCOVER_DECOUPON' | 'AGENT_CONTACT';

  constructor(
    @Optional() private dialogRef: MatDialogRef<CollectTarvellersDetailsModalComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.step = 'FORM';
  }

  // close modal
  openDecouponDiscoverFn() {
    this.step = 'DISCOVER_DECOUPON';
  }

  // submit modal and pass values to parent component
  confirmTravelFn() {
    if(this.formValidatorFn()) {
      const postData = {
        fullName: this.fullName,
        emailId: this.emailId,
        mobNumber: this.mobNumber
      }
      this.step = 'AGENT_CONTACT';
    }
  }

  // modal form validation
  formValidatorFn(): boolean {
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    if(this.fullName === '') {
      isValid = false;
      this.formErrors['fullNameReqErr'] = 'Full Name is Required';
    }
    if(this.emailId === '') {
      this.formErrors['emailIdErr'] = 'Email ID is Required';
      isValid = false;
    }
    if(this.emailId && !emailRegex.test(this.emailId)) {
      this.formErrors['emailIdErr'] = 'Email ID is not valid';
      isValid = false;
    }
    if(this.mobNumber === '') {
      this.formErrors['mobNumErr'] = 'Mobile Number is Required';
      isValid = false;
    }
    if(this.mobNumber && !mobileRegex.test(this.mobNumber)) {
      this.formErrors['mobNumErr'] = 'Mobile Number is not valid';
      isValid = false;
    }
    return isValid;
  }

  // method to check value entered, when typing
  onValueEnterFn() {
    if(this.fullName != '') {
      this.formErrors['fullNameReqErr'] = '';
    }
    if(this.emailId != '') {
      this.formErrors['emailIdErr'] = '';
    }
    if(this.mobNumber != '') {
      this.formErrors['mobNumErr'] = '';
    }
  }

  // method to redirect back to form
  bakcToFormFn() {
    this.step = 'FORM';
  }
}
