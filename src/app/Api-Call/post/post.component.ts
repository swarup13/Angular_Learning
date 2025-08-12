import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {


 obj = {
  "departmentId": 0,
  "departmentName": "",
  "departmentLogo": ""
};

private http = inject(HttpClient);
ngOnInit(){
  
  
}

onPost(){
  debugger
// console.log('obj is' , this.obj);
 
   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.obj).subscribe((res: any) => {
    debugger;

    console.log('obj is' , this.obj);
        // if(res.result){
        //   alert('Data Submitted Successfully')
        // }else{
        //   alert('Not Valid ')
        // }
        alert('successfull')
   });
}


}
