import { Component, OnInit } from '@angular/core';

import { ContactDetailService } from 'src/app/services/servicest-details.service';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor(private service:ContactDetailService) { }
  servicesDetails:any;
  ngOnInit(): void {
    this.servicesDetails = this.service.servicesDetails;
  }

}