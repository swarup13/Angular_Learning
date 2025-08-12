import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertBoxComponent } from '../reusableComponent/alert-box/alert-box.component';

@Component({
  selector: 'app-atrribute-directive',
  imports: [AlertBoxComponent],
  templateUrl: './atrribute-directive.component.html',
  styleUrl: './atrribute-directive.component.css'
})
export class AtrributeDirectiveComponent {
  constructor(){

  }

  
}
