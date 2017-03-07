import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { BarsService } from '../../providers/bars-service';
import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-bars',
  templateUrl: 'bars.html',
  providers: [BarsService]
})
export class BarsPage {
  bars: any;
 
    constructor(public nav: NavController, public barsService: BarsService, public modalCtrl: ModalController, public locationTracker: LocationTracker) {
 
  }
 
  ionViewDidLoad(){
 
    this.barsService.getBars().then((data) => {
      console.log(data);
      this.bars = data;
    });
  }
  
   start(){
    this.locationTracker.startTracking();
  }
 
  stop(){
    this.locationTracker.stopTracking();
  }
 
 
}