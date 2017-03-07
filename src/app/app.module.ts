import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { BarsPage } from '../pages/bars/bars';
import { MapPage } from '../pages/map/map';
import { FeaturesPage } from '../pages/features/features';
import { BarsService } from '../providers/bars-service';
import { LocationTracker } from '../providers/location-tracker';

@NgModule({
  declarations: [
    MyApp,
    BarsPage,
    MapPage,
    FeaturesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BarsPage,
    MapPage,
    FeaturesPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BarsService, LocationTracker]
})
export class AppModule {}
