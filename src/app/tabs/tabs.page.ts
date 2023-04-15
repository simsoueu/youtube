import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { SheetPage } from '../sheet/sheet.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private modalCtrl: ModalController) { }

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
