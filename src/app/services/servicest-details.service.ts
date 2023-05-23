import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailService {

  constructor() { }

  // services

  servicesDetails = [
    {
      id:1,
      serviceName:"Corporate Services",
      serviceDetails:"Corporate Services.",
      serviceCharges:200,
      serviceImg:"assets/images/q.jpg"
    },
    {
      id:2,
      serviceName:"Business Advisory Services",
      serviceDetails:"Business Advisory Services.",
      serviceCharges:200,
      serviceImg:"assets/images/w.jpg"
    },
    {
      id:3,
      serviceName:"Audit and Assurance",
      serviceDetails:"Audit and Assurance.",
      serviceCharges:200,
      serviceImg:"assets/images/e.jpg"
    },
    {
      id:4,
      serviceName:"Taxation",
      serviceDetails:"Taxation Services.",
      serviceCharges:200,
      serviceImg:"assets/images/r.jpg"
    },
    {
      id:5,
      serviceName:"Accounting and Bookkeeping",
      serviceDetails:"Accounting and Bookkeeping Services.",
      serviceCharges:200,
      serviceImg:"assets/images/t.jpg"
    },

  ]




}
