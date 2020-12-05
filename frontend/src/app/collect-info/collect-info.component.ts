import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-collect-info',
  templateUrl: './collect-info.component.html',
  styleUrls: ['./collect-info.component.scss']
})
export class CollectInfoComponent implements OnInit {

  public body = {
    firstName: '',
    lastName: '',
    age: null,
    weight: null,
    height: null
  }

  public payload: any;

  loginGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    age: new FormControl('')
  })

  constructor(private services: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  postReq(){
    this.payload = JSON.stringify(this.loginGroup.value);
    var jsonObj = JSON.parse(this.payload);
    this.body.firstName = jsonObj.firstName;
    this.body.lastName = jsonObj.lastName;
    this.body.age = 1 * jsonObj.age;
    this.body.weight = 1 * jsonObj.weight;
    this.body.height = 1 * jsonObj.height;
    this.services.createAcct(this.body).subscribe(data =>{
      console.log(data, "SUCCESS")
    })
    this.router.navigate(['/dashboard/user'], {queryParams: {firstName: this.body.firstName, lastName: this.body.lastName}})
  }

}
