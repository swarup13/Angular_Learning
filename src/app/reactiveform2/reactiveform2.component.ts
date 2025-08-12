import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveform2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform2.component.html',
  styleUrl: './reactiveform2.component.css'
})
export class Reactiveform2Component {


  userObj!: FormGroup;

  finalObj: any = null;

  finalAllObj: any[] = [];
  submitted: boolean = false;
  constructor(private fb: FormBuilder , private router: Router) { }

  selectedCountry: any[] = ['India', "America", 'Japan', 'China'];

  selectedGender: any[] = ['Male', 'Female', 'Other'];

  ngOnInit() {
    debugger;
    this.userObj = this.fb.group({

      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    })



    this.userObj.patchValue({
      gender: this.selectedGender[0],
      country: this.selectedCountry[0]
    })

    console.log('gender', this.selectedGender);
    console.log('countries', this.selectedCountry);


  }


  onSubmit() {
    debugger;

    if (this.userObj.valid) {
      //store it to variable after to showcase single obj values
      this.finalObj = this.userObj.value;

      //store it to array for multiple data
      this.finalAllObj.push(this.userObj.value);
      alert('Data Submitted')
      this.submitted = true;

      console.log('final obj', this.finalObj);

    } else {
      this.userObj.markAllAsTouched();
    }
  }


  reset() {
    this.submitted = false;
    //reset is default angular method which clears the all data
    // this.userObj.reset();   

    this.userObj.reset({
      username: '',
      email: '',
      password: '',
      country: this.selectedCountry[0],
      gender: this.selectedGender[0]
    })

  }




  goTo(){
    this.router.navigate(['/reactiveform']);
   //also use //navigateByUrl(['/reactiveform'])
  }
}
