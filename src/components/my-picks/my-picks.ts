import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { fixtures, IFixture} from '../../db/fixtures';

@Component({
  selector: 'qh-my-picks',
  templateUrl: 'my-picks.html'
})
export class MyPicksComponent implements OnInit {

  public fixtures: Array<IFixture>;

  constructor(public navCtrl: NavController) {
    
    this.fixtures = fixtures;
    
  }

  ngOnInit() { }

}
