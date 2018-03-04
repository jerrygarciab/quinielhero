import { Component, OnInit }              from '@angular/core';
import { NavController, NavParams }       from 'ionic-angular';

import { MiscProvider } from '../../providers/misc/misc';

@Component({
  selector:    'page-create-quiniela',
  templateUrl: 'create-quiniela.html',
})
export class CreateQuinielaPage implements OnInit {

  constructor(private _navCtrl:   NavController,
              private _navParams: NavParams,
              private _misc:      MiscProvider) { }

  ngOnInit() { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuinielaPage');
  }

  private _onSave(): void {
    this._misc.openLoading();

    setTimeout(() => {
      this._misc.closeLoading();
    }, 3000);
  }

}
