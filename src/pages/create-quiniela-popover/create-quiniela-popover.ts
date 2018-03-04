import { Component }                from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CreateQuinielaPage } from '../create-quiniela/create-quiniela';

@Component({
  selector: 'page-create-quiniela-popover',
  templateUrl: 'create-quiniela-popover.html',
})
export class CreateQuinielaPopoverPage {

  constructor(private _navCtrl:   NavController,
              private _navParams: NavParams,
              private _viewCtrl:  ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuinielaPopoverPage');
  }

  private _selectView(event: Event, direction: string): void {

    (direction === 'crear') ? this._navCtrl.push(CreateQuinielaPage) : this._navCtrl.push(CreateQuinielaPage);
    this._viewCtrl.dismiss();
  }

}
