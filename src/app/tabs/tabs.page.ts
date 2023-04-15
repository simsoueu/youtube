import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { SheetPage } from '../sheet/sheet.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  listData = [];

  constructor(private modalCtrl: ModalController, private dataService: DataService) {
    this.loadData();
  }

  async loadData() {
    this.listData = await this.dataService.getData()
  }

  async addData() {
    await this.dataService.addData(Math.floor(Math.random() * 100));
    this.loadData();
  }

  async removeItem(index) {

    this.dataService.removeItem(index);
    this.listData.splice(index, 1)
  }

  async add() {
    const modal = await this.modalCtrl.create({
      component: SheetPage,
      breakpoints: [0.5],
      initialBreakpoint: 0.5,
      handle: false,
    })

    await modal.present()
  }
}
