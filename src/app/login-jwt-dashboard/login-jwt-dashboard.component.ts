import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-jwt-dashboard',
  imports: [CommonModule],
  templateUrl: './login-jwt-dashboard.component.html',
  styleUrl: './login-jwt-dashboard.component.css'
})
export class LoginJwtDashboardComponent {


userdata: any[] = [];
     constructor(private http : HttpClient){}

     ngOnInit(){
      this.onPageLoad();
     }

     onPageLoad(){
      debugger;
      this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any) =>{
        console.log(res);

debugger;
        this.userdata = res.data.map((user:any)=>user.firstName);
        console.log('userdata', this.userdata);
        
      
        
      })
     }
}
