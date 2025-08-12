import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testapp',
  imports: [ CommonModule],
  templateUrl: './testapp.component.html',
  styleUrl: './testapp.component.css'
})
export class TestappComponent {



// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


res:any[] = []

 constructor(private http: HttpClient){

    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) =>{


      console.log(data);

      this.res  = data as any[];

      console.log('result will be', this.res);
      

    })
     
 

}

}
