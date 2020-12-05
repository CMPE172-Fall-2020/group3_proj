import { animate, sequence, style, transition, trigger, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('keyframes',[
      transition(':enter', [
        sequence([
          style({width: '0ch'}),
          animate("4s steps(33, end)", style({width: '33ch'}))
        ])
      ])
    ])
  ]
  
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSignUp(){
    this.router.navigate(['/register/1']);
  }

  navigateToLogin(){
    this.router.navigate(['/login/user'])
  }

}
