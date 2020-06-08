import { Injectable } from '@angular/core';
import { QualificationArtisan } from './qualification.model';
import { QualificationArtisanItem } from './qualification-artisan-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { QualificationArtisanComponent } from '../qualification-artisans/qualification-artisan/qualification-artisan.component';

@Injectable({
  providedIn: 'root'
})
export class QualificationArtisanService {
formData:QualificationArtisan;
QualificationItems:QualificationArtisan[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getQualificationArtisansList(){
   return this.http.get(environment.apiURL + 'QualificationArtisans').toPromise();
  }

  
  getQualificationArtisanNom(){
    // return this.http.get(environment.apiURL + 'QualificationQualifications/' + id).toPromise();
    return this.http.get(environment.apiURL).toPromise();;
  }
  updateQualificationArtisan(QualificationArtisan : QualificationArtisan){
    return this.http.put(environment.apiURL + 'QualificationArtisans/' + QualificationArtisan.QualificationArtisanID, QualificationArtisan).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  
  createQualificationArtisan(QualificationArtisan : QualificationArtisan){
    return this.http.post(environment.apiURL + 'QualificationArtisans/' + QualificationArtisan.QualificationArtisanID, QualificationArtisan).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteQualificationArtisan(QualificationArtisan : QualificationArtisan){
    return this.http.delete(environment.apiURL + 'QualificationArtisans/' + QualificationArtisan.QualificationArtisanID).subscribe(
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

