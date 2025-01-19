import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  standalone: true,
})
export class FaqComponent {
  faqItems = [
    { 
      id: 1, 
      title: 'How do I book a hotel on your site?', 
      content: 'To book a hotel, simply enter your destination, check-in and check-out dates, and the number of guests in the search bar on our homepage. Click "Search" to view available options, and then select the hotel that suits your preferences. Follow the prompts to complete the booking process.' 
    },
    { 
      id: 2, 
      title: 'Can I make changes to my reservation after booking?', 
      content: "Yes, depending on the hotel's cancellation policy, you may be able to modify your reservation. Log in to your account, go to the 'My Bookings' section, and select the reservation you wish to change. Follow the instructions provided to make the necessary adjustments." 
    },
    { 
      id: 3, 
      title: 'What are your cancellation policies?', 
      content: "Each hotel has its own cancellation policy, which is displayed during the booking process and in your confirmation email. You can also find this information on the hotel's page on our website. Please review the cancellation policy carefully before making a reservation."
    },
    { 
      id: 4, 
      title: 'How do I know if my booking is confirmed?', 
      content: "After completing the booking process, you will receive a confirmation email containing all the details of your reservation. You can also log in to your account on our website and navigate to the 'My Bookings' section to view your confirmed reservations." 
    },
    { 
      id: 5, 
      title: 'Do you offer special rates for group bookings?', 
      content: "Yes, we offer special rates for group bookings depending on the size of the group and the availability of rooms. To inquire about group bookings, please contact our customer support team or fill out the group booking request form on our website."
    },
    { 
      id: 6, 
      title: 'Is it safe to enter my credit card information on your site?', 
      content: "Yes, we take the security of our customers' personal information very seriously. Our website uses industry-standard encryption technology to ensure that your credit card details are transmitted securely. Additionally, we do not store your credit card information on our servers after the transaction is complete."
    },
    { 
      id: 7, 
      title: 'Can I request additional amenities or special accommodations?', 
      content: "Yes, you can request additional amenities or special accommodations during the booking process or by contacting the hotel directly after making your reservation. Please note that some requests may be subject to availability and additional charges."
    },
    { 
      id: 8, 
      title: 'What do I do if I encounter any issues during my stay?', 
      content: "If you encounter any issues during your stay, please contact the hotel's front desk immediately for assistance. If the issue cannot be resolved at the hotel level, you can reach out to our customer support team, and we will do our best to assist you."
    },
    { 
      id: 9, 
      title: 'Do you offer loyalty rewards or membership programs?', 
      content: "Yes, we offer coupons you can purchase and share with your friends and both will get discounts on next booking. Also you can trade these coupons in live market coupon prices"
    },
    { 
      id: 10, 
      title: 'How can I contact your customer support team?', 
      content: "You can contact our customer support team by phone, email, or live chat. Our contact information is available on our website, and our support team is available 24/7 to assist you with any questions or concerns you may have."
    }
  ];
  // Splitting the faqItems into two columns
  faqColumnOne = [...this.faqItems].slice(0, 4);
  faqColumnTwo = [...this.faqItems].slice(4, 10);
  // Default open faq item
  openFaqId: number = 1;
  // Function to toggle the accordion
  toggleAccordion(id: number) {
    this.openFaqId = this.openFaqId === id ? -1 : id;
  }
}
