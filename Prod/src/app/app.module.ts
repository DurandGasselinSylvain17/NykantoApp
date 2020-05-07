import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { QualificationsComponent } from './qualifications/qualifications.component';
import { QualificationComponent } from './qualifications/qualification/qualification.component';
import { QualificationItemsComponent } from './qualifications/qualification-items/qualification-items.component';

@NgModule({
  declarations: [
    AppComponent,
  
    QualificationsComponent,
    QualificationComponent,
    QualificationItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
