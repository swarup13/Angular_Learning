import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-jwt-authentication',
  imports: [FormsModule],
  templateUrl: './login-jwt-authentication.component.html',
  styleUrl: './login-jwt-authentication.component.css'
})
export class LoginJwtAuthenticationComponent {

  loginObj = {
    EmailId: '',
    Password: ''
  };

  constructor(private http: HttpClient , private router:Router) { }

  onSubmit() {
    console.log('Login attempt with:', this.loginObj);
    debugger;


    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj)
      .subscribe({
        next: (res: any) => {
          debugger;
          if (res.result) {
            debugger;
            console.log('Login Success:', res);
            alert('login success')

          } else {
            alert(res.message)
          }
          //remember run on port 4209
          // step 1. from api call take token and store it to localstorage
          debugger;
          localStorage.setItem('token', res.data.token);
          console.log(res.data.token);
          this.router.navigate(['/login_dashboard'])
          
        },
        error: (err) => {
          console.error('Login failed:', err.error?.message || err.message);
        }
      });
  }
}
