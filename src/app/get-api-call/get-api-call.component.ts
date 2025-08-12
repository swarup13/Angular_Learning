import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api-call',
  imports: [CommonModule],
  templateUrl: './get-api-call.component.html',
  styleUrl: './get-api-call.component.css'
})
export class GetApiCallComponent {

  userDetails:any[] = [];

    //it works as 
   constructor(private http:HttpClient){  }
    
    getAllData(){
debugger;
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
        debugger;
          //store it into varaible 
            this.userDetails = res;
 
            console.log(this.userDetails);

            console.log(this.userDetails[1].name);
            

            
        })
    }
}
