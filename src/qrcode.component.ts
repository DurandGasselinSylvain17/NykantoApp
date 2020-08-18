import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/produit.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  qrcodeIds : string[];
  qrcodeDetails: Promise<any>[];
  constructor(route: ActivatedRoute, private service: ProduitService) {
    this.qrcodeIds = route.snapshot.params['qrcodeIds']
      .split(','); }

  ngOnInit()  {
    
  Promise.all(this.qrcodeIds)
    .then(() => this.service.onDataReady());
  }
  getqrcodeDetails(qrcodeId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({amount}), 1000)
    );
  }


}