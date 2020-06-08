import { Injectable } from '@angular/core';
import { Production } from './production.model';
import { ProductionItem } from './production-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { ProductionComponent } from '../productions/production/production.component';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
formData:Production;
ProductionItems:Production[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getProductionsList(){
   return this.http.get(environment.apiURL + 'Production').toPromise();
  }
  getProduitsList(){
    return this.http.get(environment.apiURL + 'Produits').toPromise();
  }
  getPiecesList(){
    return this.http.get(environment.apiURL + 'Piece').toPromise();
  }

  getStatutProductionsList(){
    return this.http.get(environment.apiURL + 'StatutProduction').toPromise();
  }
  getArticlesList(){
    return this.http.get(environment.apiURL + 'Article').toPromise();
  }

  updateProduction(Production : Production){
    return this.http.put(environment.apiURL + 'Production/' + Production.ProductionID, Production).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  createProduction(Production : Production){
    return this.http.post(environment.apiURL + 'Production/' + Production.ProductionID, Production).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteProduction(Production : Production){
    return this.http.delete(environment.apiURL + 'Production/' + Production.ProductionID).subscribe(
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
