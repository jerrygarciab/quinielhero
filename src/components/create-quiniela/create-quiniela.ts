import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { CreateQuinielaPopoverComponent } from './create-quiniela-popover/create-quiniela-popover.component';

@Component({
  selector: 'qh-create-quiniela',
  templateUrl: 'create-quiniela.html'
})
export class CreateQuinielaComponent {

  private _popover: any;

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController) { }

  public showAddQuinielaPopover (): void {

    this._popover = this.popoverCtrl.create(CreateQuinielaPopoverComponent);
    this._popover.present();

  }

}
