import { Injectable } from '@angular/core';
import { Artisan } from './artisan.model';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
formData:Artisan;

  constructor() { }
}
