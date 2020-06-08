import { Injectable } from '@angular/core';
import { Collection } from './collection.model';
import { CollectionItem } from './collection-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { CollectionComponent } from '../collections/collection/collection.component';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
formData:Collection;
QualificationItems:Collection[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getCollectionsList(){
   return this.http.get(environment.apiURL + 'Collection').toPromise();
  }

  
  getCollectionNom(){
    
    return this.http.get(environment.apiURL).toPromise();;
  }
  updateCollection(Collection : Collection){
    return this.http.put(environment.apiURL + 'Collection/' + Collection.CollectionID, Collection).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  
  createCollection(Collection : Collection){
    return this.http.post(environment.apiURL + 'Collection/' + Collection.CollectionID, Collection).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteCollection(Collection : Collection){
    return this.http.delete(environment.apiURL + 'Collection/' + Collection.CollectionID).subscribe(
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

