import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertBoxComponent } from '../reusableComponent/alert-box/alert-box.component';

@Component({
  selector: 'app-template-form',
  imports:[FormsModule, JsonPipe , CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

isSubmitted:boolean = false;
    detailsObject = {


        fullName:'',
        email:'',
        password:'',
        phoneNumber:'',
        gender: 'Male'


    }

    obj:any;


    onSubmit(form:NgForm){
      debugger;

    
      
      if(form.valid){
        alert("Form Submitted Successfully!");
        console.log(this.detailsObject);
    this.isSubmitted = true;
        
      }else{
        alert("Form is invalid. Please fill all required fields.");
      }
      

    }
}
