import { Component, OnInit } from '@angular/core';
import { AboutDetailService } from 'src/app/services/about-details.service';
 
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  constructor(private service:AboutDetailService) { }
  aboutDetails:any;
  ngOnInit(): void {
    this.aboutDetails = this.service.aboutDetails;
  }

}
