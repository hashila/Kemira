import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OursegmentsComponent } from './components/oursegments/oursegments.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'aboutus',  component: AboutusComponent },
  { path: 'segments', component:  OursegmentsComponent },
  { path: 'careers', component:  CareersComponent },
  { path: 'products', component:  ProductsComponent },
  { path: 'services', component:  ServicesComponent },
  { path: 'contactus', component:  ContactusComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
