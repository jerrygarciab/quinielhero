import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController }        from 'ionic-angular';

import { CreateQuinielaPopoverPage } from '../create-quiniela-popover/create-quiniela-popover';

@Component({
  selector: 'page-manage-quinielas',
  templateUrl: 'manage-quinielas.html',
})
export class ManageQuinielasPage {

    private _popover:   any;
    private _quinielas: any;

    constructor(private _navCtrl:     NavController,
                private _navParams:   NavParams,
                private _popoverCtrl: PopoverController) { }

    ngOnInit() {

      //this._popover.dismiss();

      this._quinielas = [
        { "name": "quiniela1" },
        { "name": "quiniela2" }
      ]

    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad CreateQuinielaPage');
    }

    public showAddQuinielaPopover (): void {

      this._popover = this._popoverCtrl.create(CreateQuinielaPopoverPage);
      this._popover.present();

    }

}
