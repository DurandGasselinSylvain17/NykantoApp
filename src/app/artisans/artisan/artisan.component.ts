import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../../shared/artisan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styles: [
  ]
})
export class ArtisanComponent implements OnInit {

  constructor(public service: ArtisanService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
    if(form = null)
      form.resetForm();
    this.service.formData = {
      ArtisanID: null,
      Nom: 'HellW',
      QualificationArtisanID:0
    
  }
  }

}
