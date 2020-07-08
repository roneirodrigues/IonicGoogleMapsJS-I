import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;

  constructor(
    public navCtrl: NavController

  ) { }

  ionViewWillEnter() {
    console.log('mapRef', this.mapRef);
    this.showMap();
  }



  showMap() {
    const location = new google.maps.LatLng(51.507351, -0.127758);
    const options = {
      center: location,
      zoom: 14
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}
