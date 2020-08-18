import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { ProduitService } from '../../shared/produit.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProduitItemComponent } from '../produit-item/produit-item.component';
import { Produit } from '../../shared/produit.model';
import { Article } from '../../shared/article.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Piece } from 'src/app/shared/piece.model';
import { ProduitCreateComponent } from '../produit-create/produit-create.component';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styles: [
  ]
})


export class ProduitComponent implements OnInit {
 
  produitsList: Produit[];
  rereshEventSubscription:Subscription;
  articlesList: Article[];
  piecesList: Piece[];


  


  constructor(public service: ProduitService,
  public dialog:MatDialog,
  public http: HttpClient,
  public router: Router
) { 
  this.rereshEventSubscription = this.service.getRefreshEvent().subscribe(()=>{this.incrementCounter();})
}

count:number=0;
  ngOnInit() {
    this.resetForm();
    this.rereshEventSubscription = this.service.getRefreshEvent().subscribe(()=>{this.incrementCounter();})
    this.service.getProduitsList().then(res => this.produitsList = res as Produit[]);
    //this.service.getProduitsList().then(res => console.log(res));
    this.service.getPiecesList().then(res=> this.articlesList = res as Article[])
  }

  resetForm(form?:NgForm) {
    if(form = null)
      form.resetForm();
  }
  
  AddOrEditProduit(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    //dialogConfig.width = "50%";
    dialogConfig.data = {data};
    this.dialog.open(ProduitItemComponent, dialogConfig);
  }
  CreateProduit(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    //dialogConfig.width = "50%";
    dialogConfig.data = {data};
    this.dialog.open(ProduitCreateComponent, dialogConfig);
  }
  DeleteProduit(data){
    this.service.deleteProduit(data);
    this.service.getProduitsList().then(res => this.produitsList = res as Produit[]);
    this.service.getProduitsList().then(res => this.produitsList = res as Produit[]);
  }
  ModifyStatusProduit(data){
    //A REMPLIR
  }

  ToAdminMenu(url){
    // url = 'A définir dans le html'
    
    // this.router.navigate([url]).then( (e) => {
      this.router.navigate(['admin']).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  incrementCounter(){
    
    this.ngOnInit()
    this.count ++ ;
    // console.log('compteur' + this.count)
  }

}