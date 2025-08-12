import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CustomPipePipe,UpperCasePipe, LowerCasePipe, TitleCasePipe , DatePipe , JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {


     name:string = 'abc';

     todayIs:Date = new Date();

      obj:any ={

         name: 'abcd',
         address: 'pune',
         eid:2332,
         dob:''     // this is example to check custom pipe
     }
}
