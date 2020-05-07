import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';

import { QualificationComponent } from 'angular-cli/Prod/src/app/qualifications/qualification/qualification.component';
import { QualificationsComponent } from 'angular-cli/Prod/src/app/qualifications/qualifications.component';
const routes: Routes = [
  {path:'',redirectTo:'qualification',pathMatch:'full'},
  {path:'qualification',component:QualificationsComponent},
  {path:'qualification',children:[
    {path:'',component:QualificationComponent},
    {path:'edit/:id',component:QualificationComponent}
  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
 
})
export class AppRoutingModule { }
