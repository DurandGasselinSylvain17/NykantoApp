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
import { QualificationArtisansComponent } from './qualification-artisans/qualification-artisans.component';
import { QualificationArtisanComponent } from './qualification-artisans/qualification-artisan/qualification-artisan.component';
import { QualificationArtisanItemComponent } from './qualification-artisans/qualification-artisan-item/qualification-artisan-item.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionComponent } from './Collections/collection/collection.component';
import { CollectionItemComponent } from './Collections/collection-item/collection-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisansComponent,
    ArtisanComponent,
    ArtisanItemComponent,
    QualificationArtisansComponent,
    QualificationArtisanComponent,
    QualificationArtisanItemComponent,
    CollectionsComponent,
    CollectionComponent,
    CollectionItemComponent
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
