import { Injectable } from '@angular/core';
import { StatutProduit } from './statut-produit.model';
import { StatutProduitItem } from './statut-produit-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { StatutProduitComponent } from '../statut-produits/statut-produit/statut-produit.component';

@Injectable({
  providedIn: 'root'
})
export class StatutProduitService {
formData:StatutProduit;
StatutProduitItems:StatutProduit[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getStatutProduitsList(){
   return this.http.get(environment.apiURL + 'StatutProduit').toPromise();
  }

  
  getStatutProduitNom(){
    // return this.http.get(environment.apiURL + 'QualificationQualifications/' + id).toPromise();
    return this.http.get(environment.apiURL).toPromise();;
  }
  updateStatutProduit(StatutProduit : StatutProduit){
    return this.http.put(environment.apiURL + 'StatutProduit/' + StatutProduit.StatutProduitID, StatutProduit).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  
  createStatutProduit(StatutProduit : StatutProduit){
    return this.http.post(environment.apiURL + 'StatutProduit/' + StatutProduit.StatutProduitID, StatutProduit).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteStatutProduit(StatutProduit : StatutProduit){
    return this.http.delete(environment.apiURL + 'StatutProduit/' + StatutProduit.StatutProduitID).subscribe(
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

