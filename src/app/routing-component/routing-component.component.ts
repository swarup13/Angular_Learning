import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-routing-component',
  imports: [],
  templateUrl: './routing-component.component.html',
  styleUrl: './routing-component.component.css'
})
export class RoutingComponentComponent {


  constructor(private route : Router){} 
     nextPage(){

         this.route.navigate(['/structural']);
     }

}

