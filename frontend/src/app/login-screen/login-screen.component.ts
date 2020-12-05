import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  loginForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl('')
  })

  public fName: any;
  public lName: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard(){
    this.fName = this.loginForm.get('firstname').value;
    this.lName = this.loginForm.get('lastname').value;
    this.router.navigate(['/dashboard/user'], {queryParams: {firstName: this.fName, lastName: this.lName}})
  }



}
