
import { Component, OnInit } from '@angular/core';
import { QualificationService } from 'angular-cli/Prod/src/app/shared/qualification.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QualificationItemComponent } from '../Qualification-item/Qualification-item.component';
import { Qualification } from '../../shared/Qualification.model';

import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
QualificationQualificationsList: Qualification[];
  rereshEventSubscription:Subscription;

  constructor(public service: QualificationService,
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
    //this.service.getQualificationsList().then(res => this.QualificationArtisansList = res as QualificationArtisan[]);
  }

  resetForm(form?:NgForm) {
    if(form = null)
      form.resetForm();
  }
  
  AddOrEditQualificationArtisan(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    //dialogConfig.width = "50%";
    dialogConfig.data = {data};
    this.dialog.open(QualificationItemComponent, dialogConfig);
  }

  DeleteQualificationArtisan(data){
    this.service.deleteQualification(data);
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
