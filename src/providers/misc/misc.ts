import { Injectable }        from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class MiscProvider {

  public loader: any;

  constructor(private _loading: LoadingController) {

    this._createLoadingInstance();
    
  }

  public openLoading(): void {

    this.loader.present();

  }

  public closeLoading(): void {

    this.loader.dismiss();

  }

  private _createLoadingInstance(): void {

    this.loader = this._loading.create({
      content: "Un momento por favor..."
    });

  }

}
