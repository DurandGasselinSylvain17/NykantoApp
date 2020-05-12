import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtisansComponent } from './artisans/artisans.component';
import { ArtisanComponent } from './artisans/artisan/artisan.component';


const routes: Routes = [
  {path:'', redirectTo:'artisan',pathMatch:'full'},
   {path:'artisans', component:ArtisansComponent},
   {path:'artisan',children:[
     {path:'', component:ArtisanComponent},
     {path:'edit/:id', component:ArtisanComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
