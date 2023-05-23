import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

const routes: Routes = [

  {path : '' ,component :HomeComponent},
  {path : 'ourservices' ,component :OurServicesComponent},
  {path : 'services/:id' ,component :ServicePageComponent},
  {path : 'about' ,component :AboutUsComponent},
  {path : 'contact' ,component :ContactUsComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
