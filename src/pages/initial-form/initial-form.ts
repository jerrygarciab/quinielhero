import { Component }                          from '@angular/core';
import { NavController, NavParams }           from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ManageQuinielasPage }                from '../manage-quinielas/manage-quinielas';

@Component({
  selector: 'page-initial-form',
  templateUrl: 'initial-form.html',
})
export class InitialFormPage {

  private _registerForm: FormGroup;
  private _formValues:   Array<Object>;
  private _terms:        any;

  constructor(private _navCtrl:     NavController,
              private _navParams:   NavParams,
              private _formBuilder: FormBuilder) {

    this._createForm();

  }

  private _saveInfo():void {

    console.log(this._registerForm.contains('terms').valueOf());

  }

  private _createForm(): void {

    this._formValues = [
      { name: 'firstName', placeholder: 'Nombre' },
      { name: 'lastName', placeholder: 'Apellido' },
      { name: 'username', placeholder: 'Usuario' },
      { name: 'email', placeholder: 'Email' },
      { name: 'city', placeholder: 'Ciudad' },
      { name: 'state', placeholder: 'Estado' },
      { name: 'country', placeholder: 'País' },
      { name: 'favTeam', placeholder: 'Equipo Favorito' },
      { name: 'userID', placeholder: 'ID' }
  ]

    this._registerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      username:  ['', Validators.required],
      email:     ['', Validators.required],
      city:      ['', Validators.required],
      state:     ['', Validators.required],
      country:   ['', Validators.required],
      favTeam:   ['', Validators.required],
      terms:     [false, Validators.required],
      userID:    ['', Validators.required],
    });

  }

  ionViewDidLoad():void {
    console.log('ionViewDidLoad InitialFormPage');
  }

}
