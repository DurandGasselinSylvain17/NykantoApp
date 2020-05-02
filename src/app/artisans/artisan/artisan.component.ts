import { Component, OnInit, Inject } from '@angular/core';
import { ArtisanService } from '../../shared/artisan.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtisanItemComponent } from '../artisan-item/artisan-item.component';
import { Artisan } from '../../shared/artisan.model';
import { QualificationArtisan } from '../../shared/qualification.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styles: [
  ]
})
export class ArtisanComponent implements OnInit {
  artisansList: Artisan[];
  rereshEventSubscription:Subscription;

  constructor(public service: ArtisanService,
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
    this.service.getArtisansList().then(res => this.artisansList = res as Artisan[]);
  }

  resetForm(form?:NgForm) {
    if(form = null)
      form.resetForm();
  }
  
  AddOrEditArtisan(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    //dialogConfig.width = "50%";
    dialogConfig.data = {data};
    this.dialog.open(ArtisanItemComponent, dialogConfig);
  }

  DeleteArtisan(data){
    this.service.deleteArtisan(data);
    this.ngOnInit();
  }

  ToAdminMenu(url){
    // url = 'A définir dans le html'

    // this.router.navigate([url]).then( (e) => {
      this.router.navigateByUrl(url).then( (e) => {
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
    console.log('compteur' + this.count)
  }

}