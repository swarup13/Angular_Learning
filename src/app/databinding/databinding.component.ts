import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {



  name: string = "swarup";

  test = 'number';

  imgUril = "https://www.w3schools.com/images/picture.jpg"

  drpselect: string = "Maharashtra";


  city = signal('koplhapur');


  
  constructor(){
      
      console.log(this.city());

      
      
  }

  onCityChange(){
    this.city.set('pune')
  }

  onSubmit(msg: string){

     alert(msg)
  }


   
}
