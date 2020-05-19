import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
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
  listQualification: QualificationArtisan[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ArtisanItemComponent>,
    public service: ArtisanService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.service.getQualificationList().then(res => this.listQualification = res as QualificationArtisan[]);

    if (this.data.data == null) {
      this.formData = {
        ArtisanID: 0,
        Nom: '',
        QualificationArtisanID: 0,
        QualificationArtisan: {
          Nom: '',
          QualificationArtisanID: 0
        }
      };
    }
    else {
      this.formData = {
        ArtisanID: this.data.data.ArtisanID,
        Nom: this.data.data.Nom,
        QualificationArtisanID: this.data.data.QualificationArtisanID,
        QualificationArtisan: {
          Nom: this.data.data.QualificationArtisan.Nom,
          QualificationArtisanID: this.data.data.QualificationArtisan.QualificationArtisanID
        }
      };
    }
  }

  AddOrEditArtisan(id, form: NgForm) {
    if (form.value.QualificationEditArtisan != 0) {
      var artisan = new Artisan();
      var artisanComp: ArtisanComponent;
      var qualif = new QualificationArtisan();

      artisan.ArtisanID = id;
      artisan.Nom = form.value.NomEditArtisan;
      artisan.QualificationArtisanID = form.value.QualificationEditArtisan;
      qualif.QualificationArtisanID = form.value.QualificationEditArtisan;

      artisan.QualificationArtisan = qualif;

      console.log(artisan);

      if (this.formData.ArtisanID != 0) {
        console.log('maj');
        this.service.updateArtisan(artisan);
        this.refreshData();
      }
      else {
        console.log('création');
        this.service.createArtisan(artisan);
        this.refreshData();
      }
      this.dialogRef.close();
    }
    else {
      this.snackBar.open("Pas de qualification saisie, merci de saisir une valeur.", "", { duration: 3000, verticalPosition: 'top', panelClass: ['red-snackbar'] })
    }

  }

  refreshData() {
    this.service.sendRefreshEvent()
  }

}
