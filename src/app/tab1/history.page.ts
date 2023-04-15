import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import homeData from '../../assets/data/home.json';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@Component({
  selector: 'history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, ExploreContainerComponent, CommonModule, SharedDirectivesModule],
})
export class HistoryPage {
  videos: any[] = [];
  segments: any[] = [];
  shouldHideToolbar = false;
  private previousScrollTop = 0;

  constructor() {
    this.segments = [
      'All', 'New to you', 'Gaming', 'Sitcoms', 'Computer program',
    ].map((val) => ({
      title: val, selected: false,
    }));

    setTimeout(() => {
      this.selectSegment(0);
      this.videos = homeData;
    }, 500)

  }

  selectSegment(index: any) {
    this.segments.map(item => item.selected = false);
    this.segments[index].selected = true;
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 1500)
  }

}
