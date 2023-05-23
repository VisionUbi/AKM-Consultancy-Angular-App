import { Component, OnInit } from '@angular/core';
import{ContactDetailService} from 'src/app/services/servicest-details.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ContactDetailService) { }
  servicesDetails:any;
  ngOnInit(): void {
    this.servicesDetails = this.service.servicesDetails;
  }

}