import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-allenquires',
  templateUrl: './allenquires.component.html',
  styleUrls: ['./allenquires.component.css']
})
export class AllenquiresComponent implements OnInit {
  public allenquiry: any =[];
  public allreviews: any=[];
  constructor(private enquiryservice:EnquiryService,router:Router) { 
    this.enquiryservice.getenquiry().subscribe(
      (data:any)=>{
        this.allenquiry=data;
      },
      (error:any)=>{
        alert("internal server error")
      }
    )
  }
  delete(name:string){
    this.enquiryservice.deleteenquiry(name).subscribe(
      (data:any)=>{
        alert('success')
        location.reload()
      }
    )
  }
  
  ngOnInit(): void {
  }
  
}
