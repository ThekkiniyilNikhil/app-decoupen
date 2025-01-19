import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment-decrement-counter',
  imports: [],
  templateUrl: './increment-decrement-counter.component.html',
  styleUrl: './increment-decrement-counter.component.scss'
})
export class IncrementDecrementCounterComponent {
  @Input() counterValue: number;
  @Output() counterValueChange = new EventEmitter<number>();

  incrementFn(): void {
    this.counterValue++;
    this.counterValueChange.emit(this.counterValue);
  }

  decrementFn(): void {
    if(this.counterValue > 0) {
      this.counterValue--;
      this.counterValueChange.emit(this.counterValue);
    }
  }
}
