import { Component } from '@angular/core';

import { BarsPage } from '../bars/bars';
import { MapPage } from '../map/map';
import { FeaturesPage } from '../features/features';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BarsPage;
  tab2Root: any = MapPage;
  tab3Root: any = FeaturesPage;

  constructor() {

  }
}
