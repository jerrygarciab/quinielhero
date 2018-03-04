import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { Input } from '@angular/core';

/**
 * Generated class for the QhButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qh-button',
  templateUrl: 'qh-button.html'
})
export class QhButtonComponent {

  @Input() btnText: string;

  constructor(private _actionSheetCtrl: ActionSheetController) { }

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

  private _savePicks() {
    console.info('guardado');
  }

  private _clearPicks() {}

}
