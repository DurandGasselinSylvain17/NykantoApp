import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { ArtisanComponent } from './artisans/artisan/artisan.component';
import { ArtisanService } from './shared/artisan.service';
import { ArtisanItemComponent } from './artisans/artisan-item/artisan-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisansComponent,
    ArtisanComponent,
    ArtisanItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    HttpClientModule
  ],
  entryComponents: [ArtisanItemComponent],
  providers: [ArtisanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
