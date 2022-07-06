import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-createenquiry',
  templateUrl: './createenquiry.component.html',
  styleUrls: ['./createenquiry.component.css']
})
export class CreateenquiryComponent implements OnInit {
  public enquiryform:FormGroup= new FormGroup({
    date: new FormControl(),
    email: new FormControl(),
    platform:new FormControl(),
    full_name: new FormControl(),
    phone_number: new FormControl(),
    passedout: new FormControl(),
    backlogs: new FormControl(),
    qualification: new FormControl(),
    city: new FormControl(),
    assignee: new FormControl(),
    status: new FormControl(),
    course: new FormControl(),
    batch: new FormControl(),
    comments: new FormControl(),


  })

  constructor(private enquiryservice:EnquiryService,private activateRouter:ActivatedRoute) { }
  submit()
  {
    this.enquiryform.markAllAsTouched();
    console.log(this.enquiryform.value);
    this.enquiryservice.createenquiry(this.enquiryform.value).subscribe(
      (data:any)=>{
        alert("success")
      },
      (error:any)=>{
        alert('internal server error')
      }
    )
  }

  ngOnInit(): void {
  }

}
