import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InitialFormPage } from '../initial-form/initial-form';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  slides = [
    {
      title: "¡Bienvenido a QuinielHero!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/logo_gris_transparente.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/logo_negro_transparente.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/logo_full-color_transparente.png"
    }
  ];

  constructor(private _navCtrl: NavController,
              private _navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private _login(provider: string) {

    this._navCtrl.setRoot(InitialFormPage);
    this._navCtrl.popToRoot();

  }

}
