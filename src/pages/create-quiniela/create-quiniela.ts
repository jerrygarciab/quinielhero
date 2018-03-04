import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { CreateQuinielaPopoverComponent } from '../../components/create-quiniela-popover/create-quiniela-popover';

@Component({
  selector: 'page-create-quiniela',
  templateUrl: 'create-quiniela.html',
})
export class CreateQuinielaPage {

  private _popover: any;

  constructor(private _navCtrl: NavController,
              private _navParams: NavParams,
              private _popoverCtrl: PopoverController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuinielaPage');
  }

  public showAddQuinielaPopover (): void {

    this._popover = this._popoverCtrl.create(CreateQuinielaPopoverComponent);
    this._popover.present();

  }

}
