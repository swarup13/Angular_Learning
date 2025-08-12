import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cascading-dropdown',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './cascading-dropdown.component.html',
  styleUrl: './cascading-dropdown.component.css'
})
export class CascadingDropdownComponent {


     countries: any[] = [];
     states:any[] = [];
     cities:any[] = [];



     cascaddrp! : FormGroup;

     constructor(private formbuilder: FormBuilder , private http:HttpClient){}

     ngOnInit(){

debugger;
        this.http.get(" https://countriesnow.space/api/v0.1/countries").subscribe((res:any) =>{
debugger;
           console.log('result will be', res.data);

            this.countries = res.data;
           this.countries = this.countries.map((c: any) => c.country);

           console.log(this.countries);
           
           
        })
       // this.onCountryChange(e);  
     }



      onCountryChange(event:any){
debugger
          console.log(event.target.value);
           
      }
}
