import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ArticleItem } from './article-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { ArticleComponent } from '../articles/article/article.component';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
formData:Article;
articleItems:Article[];
private subject = new Subject<any>();

  constructor(public http: HttpClient) { }

  getArticlesList(){
   return this.http.get(environment.apiURL + 'Article').toPromise();
  }

  getCategoriesList(){
    return this.http.get(environment.apiURL + 'Categorie').toPromise();
  }
  getCollectionsList(){
    return this.http.get(environment.apiURL+ 'Collection').toPromise();
  }

  updateArticle(article : Article){
    return this.http.put(environment.apiURL + 'Article/' + article.ArticleID, article).subscribe(
      () => {
        console.log('Enregistrement mis à jour !');
      },
      (error) => {
        console.log('Erreur lors de l update ! : ' + error);
      }
    );
  }

  createArticle(article : Article){
    return this.http.post(environment.apiURL + 'Article/' + article.ArticleID, article).subscribe(
      () => {
        console.log('Enregistrement créé !');
      },
      (error) => {
        console.log('Erreur lors de la création ! : ' + error);
      }
    );
  }

  deleteArticle(article : Article){
    return this.http.delete(environment.apiURL + 'Article/' + article.ArticleID).subscribe(
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
