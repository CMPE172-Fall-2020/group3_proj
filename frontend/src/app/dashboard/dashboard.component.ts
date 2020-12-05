import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  constructor(private service: ServicesService, private route: ActivatedRoute) { }

  myGroup = new FormGroup({
    weight: new FormControl(''),
    height: new FormControl('')
  })

  private userInfo: Array<any>;
  private personalInfo: any;
  private fName: string;
  private lName: string;
  public bmi: number;
  private weight: number = 50; //In terms of kilograms
  private height: number = 1.524; //In terms of meters 
  public category: string;
  public dynamicHeight: any;
  public dynamicWeight: any;
  public dynamicBMI: any;
  public payload;

  ngOnInit(): void {
    this.fName = this.route.snapshot.queryParams['firstName'];
    this.lName = this.route.snapshot.queryParams['lastName'];
    this.service.getData().subscribe(data => {
      if(data){
        this.userInfo = data
        this.personalInfo = this.userInfo.filter(x => (x.firstName == this.fName && x.lastName == this.lName))
        this.personalInfo = this.personalInfo[0]
        this.weight = this.personalInfo.weight;
        this.height = this.personalInfo.height;
        this.bmi = (this.weight)/((this.height)*(this.height))
        this.calculateBMICategory();        
      }
    })
  }

  calculateBMI(){
    this.payload = JSON.stringify(this.myGroup.value);
    var jsonObj = JSON.parse(this.payload);
    this.dynamicHeight = 1 * jsonObj.height;
    this.dynamicWeight = 1* jsonObj.weight;
    this.dynamicBMI = (this.dynamicWeight)/((this.dynamicHeight)*(this.dynamicHeight))
    if(this.dynamicBMI != 'NaN' && this.dynamicBMI != 'Infinity'){
      return this.dynamicBMI;
    } else {
      return 0;
    }
  }

  calculateBMICategory() {
    if(this.bmi < 18.5) {
      this.category = 'Underweight'
    } else if(this.bmi >= 18.5 && this.bmi <= 24.9){
      this.category = 'Normal'
    } else if(this.bmi >24.9 && this.bmi <= 29.9){
      this.category = 'Overweight'
    } else if(this.bmi > 29.9) {
      this.category = 'Obese'
    } else {
      this.category = 'Error calculating BMI'
    }
  }

}
