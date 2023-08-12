import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { MyPopoverPage } from '../my-popover/my-popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController) {

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'small-modal'
    });
    await modal.present();
  }

  async openTransparentModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'transparent-modal'
    });
    await modal.present();
  }

  async openPopover(ev: Event) {
    const popover = await this.popoverCtrl.create({
      component: MyPopoverPage,
      event: ev,
      cssClass: 'custom-popover',
    });
    await popover.present();
  }


}
