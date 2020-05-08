import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { QualificationsComponent } from './qualifications/qualifications.component';
import { QualificationComponent } from './qualifications/qualification/qualification.component';
import {QualificationItemComponent} from 'angular-cli/Prod/src/app/qualifications/qualification-item/qualification-item.component';
import { QualificationService } from 'angular-cli/Prod/src/app/shared/qualification.service';

@NgModule({
  declarations: [
    AppComponent,
  
    QualificationsComponent,
    QualificationComponent,
    QualificationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // MatDialogModule,
    // MatSliderModule,
    HttpClientModule,
    //HttpModule
    
  ],
  entryComponents: [QualificationItemComponent],
  providers: [QualificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
