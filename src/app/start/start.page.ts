import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class StartPage {
  templates: any[] = [];
  showData: boolean = false;

  constructor() {
    this.templates = [
      'BTB | Full Body (2)',
      'Upper / Lower Body Split (4)',
      'Bodybuilding Bro Split (6)',
      'Push / Pull / Legs (3)',
      'Complete Workout (3)',
      'Go to the gym to take pics (3)',
      'Only arms (2)',
      'Soccer bro (4)',
      'PHUL Training Program (4)',
      'BTB | Full Body (3)',
      'Upper / Lower Body Split (6)',
      'Soccer bro (4)',
      'PHUL Training Program (4)',
      'BTB | Full Body (3)',
      'Upper / Lower Body Split (6)',
      'Soccer bro (4)',
      'PHUL Training Program (4)',
      'BTB | Full Body (3)',
      'Upper / Lower Body Split (6)',
    ].map((val) => ({
      title: val, selected: false,
    }));

    setTimeout(() => {
      this.selectSegment(0);
      this.showData = true;
      // this.videos = homeData;
    }, 1500)

  }

  selectSegment(index: any) {
    this.templates.map(item => item.selected = false);
    this.templates[index].selected = true;
  }

}
