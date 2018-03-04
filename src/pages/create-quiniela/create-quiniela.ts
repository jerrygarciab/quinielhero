import { Component, OnInit }              from '@angular/core';
import { NavController, NavParams }       from 'ionic-angular';

@Component({
  selector: 'page-create-quiniela',
  templateUrl: 'create-quiniela.html',
})
export class CreateQuinielaPage implements OnInit {

  constructor(private _navCtrl:     NavController,
              private _navParams:   NavParams) { }

  ngOnInit() { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuinielaPage');
  }

}
