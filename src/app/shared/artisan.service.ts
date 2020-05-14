import { Injectable } from '@angular/core';
import { Artisan } from './artisan.model';
import { ArtisanItem } from './artisan-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { ArtisanComponent } from '../artisans/artisan/artisan.component';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
formData:Artisan;
artisanItems:Artisan[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getArtisansList(){
   return this.http.get(environment.apiURL + 'Artisan').toPromise();
  }

  getQualificationList(){
    return this.http.get(environment.apiURL + 'QualificationArtisans').toPromise();
  }

  updateArtisan(artisan : Artisan){
    return this.http.put(environment.apiURL + 'Artisan/' + artisan.ArtisanID, artisan).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  createArtisan(artisan : Artisan){
    return this.http.post(environment.apiURL + 'Artisan/' + artisan.ArtisanID, artisan).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteArtisan(artisan : Artisan){
    return this.http.delete(environment.apiURL + 'Artisan/' + artisan.ArtisanID).subscribe(
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
