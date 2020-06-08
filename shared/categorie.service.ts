import { Injectable } from '@angular/core';
import { Categorie } from './categorie.model';
import { CategorieItem } from './categorie-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { CategorieComponent } from '../Categories/categorie/categorie.component';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
formData:Categorie;
CategorieItems:Categorie[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getCategoriesList(){
   return this.http.get(environment.apiURL + 'Categorie').toPromise();
  }

  getCollectionsList(){
    return this.http.get(environment.apiURL + 'Collection').toPromise();
  }

  // getCollectionNom(){
    
  //   return this.http.get(environment.apiURL + 'Collection/1').toPromise();;
  // }

  updateCategorie(categorie : Categorie){
    return this.http.put(environment.apiURL + 'Categorie/' + categorie.CategorieID, categorie).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  createCategorie(categorie : Categorie){
    return this.http.post(environment.apiURL + 'Categorie/' + categorie.CategorieID, categorie).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteCategorie(categorie : Categorie){
    return this.http.delete(environment.apiURL + 'Categorie/' + categorie.CategorieID).subscribe(
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
