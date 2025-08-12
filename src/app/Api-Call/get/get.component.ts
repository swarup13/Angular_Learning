import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  imports: [CommonModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {

details:any[] = [];
    
constructor(private http: HttpClient){}

ngOnInit(){
debugger;
// this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((res) =>{

//    this.details = res;

//    console.log(this.details);
   

   
   
// })
    

this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients').subscribe((r:any)=>{
  this.details = r;
  console.log('daaata',this.details);
  
})
}
       

}
