import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutDetailService {

  constructor() { }

  // services

  aboutDetails = [
    {
      id:1,
      name:"Ahsan Mehboob  ",
      Details:"Mr. Ahsan Mehboob is a consummate professional having 3.5 years of working experience from a well recognized and reputed firm of Chartered Accountancy “Tariq Abdul Ghani Maqbool & Co., Chartered Accountants. A registered Income Tax Practitioner with Federal Board of Revenue Pakistan. His calm demeanor and collected thought process make him an ideal professional for the evaluation of complicated Financial Models.",

      Img:"assets/images/1.jpg"
    },
    {
      id:2,
      name:"Kaleemullah Khan",
      Details:"Mr. Kaleemullah Khan is a professional having 3.5 years of experience from Iqbal Yasir & Company (Chartered Accountants). A registered Income Tax Practitioner with Federal Board of Revenue Pakistan. He is possessing proficient experience in providing accounting, finance, corporate and tax services to clients along with ability to work in deadlines, skills to lead team members. He possesses a very charismatic and convincing personality.",


      Img:"assets/images/2.jpg"
    },
    {
      id:3,
      name:"Murad Ali",
      Details:"Mr. Murad Ali is a passionate, competent and hard-working professional having 3 years of experience from a well-reputed firm BDO Ebrahim & Co. Also worked as an internal auditor in a well-known Leasing co for approximately 2 years. He has an extensive experience in the fields of auditing, accounting, compliance, finance & taxation gained in the professional environments of Pakistan.",


      Img:"assets/images/3.jpg"
    },
    {
    id:4,
    name:"AKM CONSULTANTS TEAM",
    Details:"SKILL FULL PERSONNEL HAVING EXPERTIES IN CORPORATE, TAX , AUDIT AND ASSURANCE SERVICES.",


    Img:"assets/images/4.jpg"
  }



  ]




}
