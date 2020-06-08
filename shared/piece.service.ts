import { Injectable } from '@angular/core';
import { Piece } from './piece.model';
import { PieceItem } from './piece-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { PieceComponent } from '../pieces/piece/piece.component';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
formData:Piece;
PieceItems:Piece[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getPiecesList(){
   return this.http.get(environment.apiURL + 'Piece').toPromise();
  }

  getArticlesList(){
    return this.http.get(environment.apiURL + 'Article').toPromise();
  }

  

  updatePiece(Piece : Piece){
    return this.http.put(environment.apiURL + 'Piece/' + Piece.PieceID, Piece).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  createPiece(Piece : Piece){
    return this.http.post(environment.apiURL + 'Piece/' + Piece.PieceID, Piece).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deletePiece(Piece : Piece){
    return this.http.delete(environment.apiURL + 'Piece/' + Piece.PieceID).subscribe(
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
