import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { QualificationsComponent } from 'angular-cli/Prod/src/app/qualifications/qualifications.component';
import { QualificationComponent } from 'angular-cli/Prod/src/app/qualifications/qualification/qualification.component';

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
