import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup= new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  signin() {
    console.log(this.loginform,"login values")
    this.authenticationService.createlogin(this.loginform.value).subscribe(
      (data: any) => {
        alert("signin");
        console.log(data);
        sessionStorage.setItem('myAppToken', data.token);
        this.router.navigateByUrl('/dashboard');
        this.router.navigateByUrl('/dashboard');
      },
      (error: any) => {
        alert('internal server error')
      }
    )
  }
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

}
