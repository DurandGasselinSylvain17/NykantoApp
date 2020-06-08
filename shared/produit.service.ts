import { Injectable, PipeTransform } from '@angular/core';
import { Produit } from './produit.model';
import { ProduitItem } from './produit-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject, BehaviorSubject, of, from } from 'rxjs';
import { ProduitComponent } from '../produits/produit/produit.component';
import { filter, delay, tap, switchMap, debounceTime } from 'rxjs/operators';
import { Article } from './article.model';
import { DecimalPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {
 
formData:Produit;
ProduitItems:Produit[];
ArticlesFromGet:Article[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { 
  
  }

  getArticles(){
    return this.http.get(environment.apiURL + 'Article');
  }

  getProduitsList(){
   return this.http.get(environment.apiURL + 'Produit').toPromise();
  }

  getPiecesList(){
    return this.http.get(environment.apiURL + 'Piece').toPromise();
  }

  getStatutProduitsList(){
    return this.http.get(environment.apiURL + 'StatutProduit').toPromise();
  }

  getArticlesList(){
    return this.http.get(environment.apiURL + 'Article').toPromise();
  }

  getCollectionsList(){
    return this.http.get(environment.apiURL + 'Collection').toPromise();
  }

  getCategoriesList(){
    return this.http.get(environment.apiURL + 'Categorie').toPromise();
  }
  
  updateProduit(Produit : Produit){
    return this.http.put(environment.apiURL + 'Produit/' + Produit.ProduitID, Produit).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  createCode(Produit : Produit){
    return this.http.post(environment.apiURL + 'Produit/' + Produit.ProduitID, Produit).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création Code ! : ' + error);
      }
    );
  }

  createProduit(Produit : Produit){
    return this.http.post(environment.apiURL + 'Produit/' + Produit.ProduitID, Produit).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création PRoduit ! : ' + error);
      }
    );
  }

  bulkCreateProduitsFromArticleIDS(ints : number[], quantity : number){
    return this.http.post(environment.apiURL + 'BulkProduits?quantity=' + quantity, ints).subscribe(
      () => {
        console.log('Enregistrements créés !');
      },
      (error) => {
        console.log('Erreur lors de la création des Produits ! : ' + error);
      }
    );
  }


  deleteProduit(Produit : Produit){
    return this.http.delete(environment.apiURL + 'Produit/' + Produit.ProduitID).subscribe(
      () => {
        console.log('Enregistrement supprimer !');
      },
      (error) => {
        console.log('Erreur lors de la suppression ! : ' + error);
      }
    );
  }

  sendRefreshEvent(){
    this.subject.next();
  }

  getRefreshEvent(){
    return this.subject.asObservable();
  }

}
