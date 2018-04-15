import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'; //BORRAR

import { ManageQuinielasPage } from '../manage-quinielas/manage-quinielas';
import { InitialFormPage } from '../initial-form/initial-form';
import { LoginProvider } from '../../providers/login/login';
import { CollectionsProvider } from '../../providers/collections/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector   : 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private _usersCollection: AngularFirestoreCollection<any>;
  private _users          : Array<any>;
  private _userID         : string = '';

  slides = [
    {
      title      : "¡Bienvenido a QuinielHero!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image      : "assets/imgs/logo_gris_transparente.png",
    },
    {
      title      : "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image      : "assets/imgs/logo_negro_transparente.png",
    },
    {
      title      : "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image      : "assets/imgs/logo_full-color_transparente.png"
    }
  ];

  constructor(private _navCtrl: NavController,
              private _navParams   : NavParams,
              private _auth        : AngularFireAuth,
              private _loginService: LoginProvider,
              private _collection  : CollectionsProvider) {

    this._auth.authState
      .subscribe(res => {
        this._userID = res.providerData[0].uid;

        this._loginService.$fbInformation.next({
          email  : res.email,
          userId : res.providerData[0].uid,
          name   : res.displayName,
          picture: res.photoURL
        });
      });

    this._usersCollection = _collection.getCollection('users', ref => ref.where('userID', '==', this._userID ));
    
    this._usersCollection.valueChanges().subscribe(users => this._users = users);
    
  }

  ionViewDidLoad() { }

  private _login(provider: string): void {

    (provider === 'facebook') ? this._loginWithFacebook(): this._loginWithGoogle();

  }

  private _loginWithFacebook(): void {

    this._auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        (this._users.length > 0) ? this._navCtrl.setRoot(ManageQuinielasPage): this._navCtrl.setRoot(InitialFormPage);
        this._navCtrl.popToRoot();
      });
  }

  private _loginWithGoogle(): void { }

}
