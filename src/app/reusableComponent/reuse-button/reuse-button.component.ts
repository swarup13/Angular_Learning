import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-reuse-button',
   imports: [],
   templateUrl: './reuse-button.component.html',
   styleUrl: './reuse-button.component.css'
})
export class ReuseButtonComponent {


   @Input() text: string = '';

   @Input() className: string = '';

   //it is combination of output + Eventemitter
   @Output() btnClick = new EventEmitter<any>();

   onClick() {
      this.btnClick.emit('data from child tooooooooo Paerent');
   }
}
