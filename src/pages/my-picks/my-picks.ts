import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { fixtures, IFixture} from '../../db/fixtures';

@Component({
  selector: 'page-my-picks',
  templateUrl: 'my-picks.html',
})
export class MyPicksPage {

  public fixtures: Array<IFixture>;

  constructor(private _navCtrl: NavController,
              private _navParams: NavParams) {
    this.fixtures = fixtures;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPicksPage');
  }



  ngOnInit() { }

}
