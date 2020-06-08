import { Component, OnInit, Inject, QueryList, ViewChildren, ViewChild, AfterViewInit } from '@angular/core';
import { ProduitService } from '../../shared/produit.service';
import { NgForm, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { ProduitItemComponent } from '../produit-item/produit-item.component';
import { Produit } from '../../shared/produit.model';
import { Article } from '../../shared/article.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, merge, of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { Piece } from 'src/app/shared/piece.model';
import { ProduitCreateComponent } from '../produit-create/produit-create.component';
import { ArticleService } from '../../shared/article.service';
import { DecimalPipe } from '@angular/common';
import { catchError, map, startWith, switchMap, debounceTime } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { ArticleComponent } from '../../Articles/article/article.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  providers: [ProduitService, DecimalPipe],
  styles: [
  ]
})
export class ProduitComponent implements OnInit {
  produitsList: Produit[];
  rereshEventSubscription: Subscription;
  articlesList: Article[];
  articlesList2: Article[];
  piecesList: Piece[];
  count: number = 0;
  quantity: number = 0;
  resumer: string = '';
  selectedArticlesIds: number[] = [];
  selectedArticlesNoms: string[] = [];
  selectedCategoriesNoms: string[] = [];
  selectedCollectionsNoms: string[] = [];

  public displayedColumns = ['select', 'nom', 'surnom'];
  public dataSource = new MatTableDataSource<Article>();
  public selection = new SelectionModel<Article>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public service: ProduitService,
    public serviceArticle: ArticleService,
    public dialog: MatDialog,
    public http: HttpClient,
    public router: Router
  ) {
    this.rereshEventSubscription = this.service.getRefreshEvent().subscribe(() => { this.incrementCounter(); })
  }


  ngOnInit() {
    this.resetForm();
    this.rereshEventSubscription = this.service.getRefreshEvent().subscribe(() => { this.incrementCounter(); })
    this.service.getProduitsList().then(res => this.produitsList = res as Produit[]);
    this.service.getArticlesList().then(res => this.articlesList = res as Article[]);

    this.getAllArticles();

    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  TryTest(int: number) {

    this.selectedArticlesIds = [];
    this.selectedArticlesNoms = [];
    this.selectedCategoriesNoms = [];
    this.selectedCollectionsNoms = [];

    for (let item of this.selection.selected) {
      console.log(item.ArticleID);
      this.selectedArticlesIds.push(item.ArticleID);
      this.selectedArticlesNoms.push(item.Nom);
      this.selectedCategoriesNoms.push(item.Categorie.Nom);
      this.selectedCollectionsNoms.push(item.Categorie.Collection.Nom);
    }

    this.resumer = "Merci de valider le lancement en production de " + int.toString() + " " + this.selectedArticlesNoms[0] + " de " + this.selectedCategoriesNoms[0] + " de " + this.selectedCollectionsNoms[0] + ".";



  }

  onClickValider() {
  this.service.bulkCreateProduitsFromArticleIDS(this.selectedArticlesIds, this.quantity);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Article): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ArticleID + 1}`;
  }


  public getAllArticles = () => {
    this.service.getArticles().subscribe(res => {
      this.dataSource.data = res as Article[];
    })
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
  }
  AddOrEditProduit(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    //dialogConfig.width = "50%";
    dialogConfig.data = { data };
    this.dialog.open(ProduitItemComponent, dialogConfig);
  }

  CreateProduit(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    //dialogConfig.width = "50%";
    dialogConfig.data = { data };
    this.dialog.open(ProduitCreateComponent, dialogConfig);
  }

  DeleteProduit(data) {
    this.service.deleteProduit(data);
    this.service.getProduitsList().then(res => this.produitsList = res as Produit[]);
    this.service.getProduitsList().then(res => this.produitsList = res as Produit[]);
  }

  ModifyStatusProduit(data) {
    //A REMPLIR
  }

  ToAdminMenu(url) {
    // url = 'A définir dans le html'

    // this.router.navigate([url, id]).then( (e) => {
    this.router.navigateByUrl(url).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  incrementCounter() {

    this.ngOnInit()
    this.count++;
    // console.log('compteur' + this.count)
  }
}