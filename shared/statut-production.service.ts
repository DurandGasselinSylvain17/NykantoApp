import { Injectable } from '@angular/core';
import { StatutProduction } from './statut-production.model';
import { StatutProductionItem } from './statut-production-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { StatutProductionComponent } from '../statut-productions/statut-production/statut-production.component';

@Injectable({
  providedIn: 'root'
})
export class StatutProductionService {
formData:StatutProduction;
StatuProductionItems:StatutProduction[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getStatutProductionsList(){
   return this.http.get(environment.apiURL + 'StatutProduction').toPromise();
  }

  
  getStatutProductionNom(){
    
    return this.http.get(environment.apiURL).toPromise();;
  }
  updateStatutProduction(StatutProduction : StatutProduction){
    return this.http.put(environment.apiURL + 'StatutProduction/' + StatutProduction.StatutProductionID, StatutProduction).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  
  createStatutProduction(StatutProduction : StatutProduction){
    return this.http.post(environment.apiURL + 'StatutProduction/' + StatutProduction.StatutProductionID, StatutProduction).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteStatutProduction(StatutProduction : StatutProduction){
    return this.http.delete(environment.apiURL + 'StatutProduction/' + StatutProduction.StatutProductionID).subscribe(
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

