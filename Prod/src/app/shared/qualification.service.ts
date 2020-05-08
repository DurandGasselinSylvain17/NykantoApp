import { Injectable } from '@angular/core';
import { Qualification } from 'angular-cli/Prod/src/app/shared/qualification.model';
import { QualificationItem } from './Qualification-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { QualificationComponent } from '../Qualifications/Qualification/Qualification.component';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
formData:Qualification;
QualificationItems:Qualification[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getQualificationsList(){
   return this.http.get(environment.apiURL + 'Qualification').toPromise();
  }

  
  getQualificationNom(){
    // return this.http.get(environment.apiURL + 'QualificationQualifications/' + id).toPromise();
    return this.http.get(environment.apiURL).toPromise();;
  }

  
  createQualification(Qualification : Qualification){
    return this.http.post(environment.apiURL + 'Qualification/' + Qualification.QualificationArtisanID, Qualification).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteQualification(Qualification : Qualification){
    return this.http.delete(environment.apiURL + 'Qualification/' + Qualification.QualificationArtisanID).subscribe(
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

