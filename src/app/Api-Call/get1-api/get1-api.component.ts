import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { DemoService } from '../../Service-Folder/demo.service';

@Component({
  selector: 'app-get1-api',
  imports: [CommonModule],
  templateUrl: './get1-api.component.html',
  styleUrl: './get1-api.component.css'
})
export class Get1ApiComponent {

  name: any[] = [];

  details: any[] = [];

  //injection comes from angular16 replacement to use it in constructor(private ht: HttpClient)
  private ht = inject(HttpClient);


  //second way 

  constructor(private service_: DemoService){}

  getAllUser() {

    this.ht.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      debugger;
      console.log('Result', res);

      this.name = res;

    })
  }

// if we write api directly in ts

//   getCustomer(){
// debugger;
//      this.ht.get('https://dummyjson.com/users').subscribe((result:any) =>{
// debugger;
//          this.details = result.users;

//          console.log('details are',this.details);
         
         
//      })
//   }


//write in service and call in ts
  getCustomer(){
debugger;
     this.service_.getCustomer().subscribe((result) =>{
      debugger; 
         console.log(result.users);

         this.details = result.users;


         
     })
  }


}
