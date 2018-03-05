import { NavController, NavParams } from 'ionic-angular';
import { Component }                from '@angular/core';
import { ActionSheetController }    from 'ionic-angular';
import { Input }                    from '@angular/core';
import { AlertController }          from 'ionic-angular';

import { ManageQuinielasPage }      from '../../pages/manage-quinielas/manage-quinielas';

@Component({
  selector: 'qh-button',
  templateUrl: 'qh-button.html'
})
export class QhButtonComponent {

  @Input() btnText: string;
  @Input() type: string;

  constructor(private _actionSheetCtrl: ActionSheetController,
              private _alertCtrl:       AlertController,
              private _navCtrl:         NavController,
              private _navParams:       NavParams) { }

  private _showActionSheet(): void {

    let actionSheet = this._actionSheetCtrl.create({
      title: '¿Qué Deseas Hacer?',
      buttons: [
        {
          text: 'Borrar Picks',
          role: 'destructive',
          handler: this._clearPicks
        },
        {
          text: 'Guardar Picks',
          handler: this._savePicks
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.info('cancelado');
          }
        }
      ]
    });

    actionSheet.present();

  }

  private _showAlert(): void {

    let alert = this._alertCtrl.create({
      title: '¿Seguro que quiéres guardar estos datos?',
      message: 'Estos datos serán usados para crear toda la experiencia en QuinielHero.',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {}
        },
        {
          text: 'Guardar',
          handler: () => {
            this._navCtrl.setRoot(ManageQuinielasPage);
          }
        }
      ]
    });
    alert.present();

  }

  private _savePicks(): void {
    console.info('guardado');
  }

  private _clearPicks(): void {}

}
