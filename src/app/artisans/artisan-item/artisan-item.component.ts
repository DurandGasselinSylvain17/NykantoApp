import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,  MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ArtisanItem } from '../../shared/artisan-item.model';
import { Artisan } from '../../shared/artisan.model';
import { QualificationArtisan } from '../../shared/qualification.model';
import { ArtisanService } from '../../shared/artisan.service';
import { NgForm } from '@angular/forms';
import { ArtisanComponent } from '../artisan/artisan.component';

@Component({
  selector: 'app-artisan-item',
  templateUrl: './artisan-item.component.html',
  styles: [
  ]
})
export class ArtisanItemComponent implements OnInit {
formData: Artisan;
listQualification : QualificationArtisan[];
value:number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<ArtisanItemComponent>,
    public service: ArtisanService
  ) { this.value = null;}

  ngOnInit(): void {

    this.service.getQualificationList().then(res => this.listQualification = res as QualificationArtisan[] );

        if(this.data.data == null)
        {
          this.formData = {
            ArtisanID : 0,
            Nom : '',
            QualificationArtisanID:0,
            QualificationArtisan: {
              Nom: '',
              QualificationArtisanID : 0
            }
          }; 
        }
        else{
          this.formData = {
            ArtisanID: this.data.data.ArtisanID,
            Nom: this.data.data.Nom,
            QualificationArtisanID:this.data.data.QualificationArtisanID,
            QualificationArtisan : {
              Nom:this.data.data.QualificationArtisan.Nom,
              QualificationArtisanID:this.data.data.QualificationArtisan.QualificationArtisanID}
                          };
        }
}

  AddOrEditArtisan(id, form : NgForm){

    var artisan = new Artisan();
    var qualif = new QualificationArtisan();

    artisan.ArtisanID = id;
    artisan.Nom = form.value.NomEditArtisan;

    if(this.value !=  null)
    {
      artisan.QualificationArtisanID = +this.value;
      qualif.QualificationArtisanID = +this.value;
      qualif.Nom = form.value.QualificationEditArtisan;
      artisan.QualificationArtisan = qualif;
    }
    else
    {
      artisan.QualificationArtisanID = this.formData.QualificationArtisanID;
      artisan.QualificationArtisan.QualificationArtisanID = this.formData.QualificationArtisan.QualificationArtisanID;
      artisan.QualificationArtisan.Nom = this.formData.QualificationArtisan.Nom;
    }

    console.log(artisan);

    if(this.formData.ArtisanID != 0)
    {
      console.log('maj');
    this.service.updateArtisan(artisan);
    this.refreshData();
    }
    else
    {
      console.log('création');
      this.service.createArtisan(artisan);
      this.refreshData();
    }
    this.dialogRef.close();
  }

  refreshData(){
    this.service.sendRefreshEvent()
  }

}
