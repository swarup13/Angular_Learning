import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactiveform1',
  imports: [ReactiveFormsModule, CommonModule , RouterLink],
  templateUrl: './reactiveform1.component.html',
  styleUrl: './reactiveform1.component.css'
})
export class Reactiveform1Component {

isSubmit:boolean = false;

submittedEntries: any[] = [];

  //create object which bind to html element
  //1 way
  studentObj: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.maxLength(6)]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('Male'),

  })


formValue:any;
  saveDetails(){
debugger;

    // this.formValue = this.studentObj.value;
  if(this.studentObj.valid){

    // const copy = {...this.studentObj.value}
    this.submittedEntries.push(this.studentObj.value)

    console.log('submitted entry', this.submittedEntries);
    
    // alert(`Form Submitted Successfully`)
    this.isSubmit=true;
  //  console.log(this.studentObj);
   this.studentObj.reset();
   
  }else{
    alert(`please fill all required filled`);
    this.studentObj.markAllAsTouched();
  }
    console.log('student values' , this.formValue);
    
  }



    //2 way to write object

  // studentObj2!:FormGroup;

  // constructor(private formBuilder:FormBuilder){}

  // ngOnInit(){

  //   this.studentObj2 =  this.formBuilder.group({

  //        name: ['', [Validators.required]],
  //        email:['',[Validators.required]]
  //   })
  // }

}
