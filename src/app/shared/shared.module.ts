import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IncrementDecrementCounterComponent } from './components/increment-decrement-counter/increment-decrement-counter.component';

@NgModule({
  imports: [
    CommonModule, 
    HeaderComponent,
    FooterComponent,
    IncrementDecrementCounterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    IncrementDecrementCounterComponent

  ], // Export it for use in other modules
})
export class SharedModule {}
