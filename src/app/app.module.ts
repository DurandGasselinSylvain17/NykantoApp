import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { ArtisanComponent } from './artisans/artisan/artisan.component';
import { ArtisanService } from './shared/artisan.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtisansComponent,
    ArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArtisanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
