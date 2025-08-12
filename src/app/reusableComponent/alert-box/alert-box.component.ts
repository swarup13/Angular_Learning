import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-alert-box',
  imports: [CommonModule],
  templateUrl: './alert-box.component.html',
  styleUrl: './alert-box.component.css'
})
export class AlertBoxComponent implements OnChanges {
//it acts as child componet which is reusable in parent
   @Input() message:string = '';

  @Input() classType: string = '';

  
  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges workks');
      
  }
}
