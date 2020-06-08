import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
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
import { CategorieComponent } from './categories/categorie/categorie.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieItemComponent } from './categories/categorie-item/categorie-item.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './Articles/article/article.component';
import { ArticleItemComponent } from './Articles/article-item/article-item.component';
import { PiecesComponent } from './pieces/pieces.component';
import { PieceComponent } from './Pieces/piece/piece.component';
import { PieceItemComponent } from './Pieces/piece-item/piece-item.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitComponent } from './produits/produit/produit.component';
import { ProduitItemComponent } from './produits/produit-item/produit-item.component';
import { StatutProduitsComponent } from './statut-produits/statut-produits.component';
import { StatutProduitComponent } from './statut-produits/statut-produit/statut-produit.component';
import { StatutProduitItemComponent } from './statut-produits/statut-produit-item/statut-produit-item.component';
import { ProduitCreateComponent } from './produits/produit-create/produit-create.component';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionComponent } from './Productions/production/production.component';
import { ProductionItemComponent } from './Productions/production-item/production-item.component';
import { StatutProductionsComponent } from './statut-productions/statut-productions.component';
import { StatutProductionComponent } from './statut-productions/statut-production/statut-production.component';
import { StatutProductionItemComponent } from './statut-productions/statut-production-item/statut-production-item.component';

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
    CollectionItemComponent,
    CategorieComponent,
    CategoriesComponent,
    CategorieItemComponent,
    ArticlesComponent,
    ArticleComponent,
    ArticleItemComponent,
    PiecesComponent,
    PieceComponent,
    PieceItemComponent,
    ProduitsComponent,
    ProduitComponent,
    ProduitItemComponent,
    StatutProduitsComponent,
    StatutProduitComponent,
    StatutProduitItemComponent,
    ProduitCreateComponent,
    ProductionsComponent,
    ProductionComponent,
    ProductionItemComponent,
    StatutProductionsComponent,
    StatutProductionComponent,
    StatutProductionItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports : [
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  entryComponents: [ArtisanItemComponent],
  providers: [ArtisanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
