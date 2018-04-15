import { Component }                          from '@angular/core';
import { NavController, NavParams }           from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ManageQuinielasPage }                from '../manage-quinielas/manage-quinielas';
import { LoginProvider } from '../../providers/login/login';
import { fbInformation } from '../../shared/interfaces';

@Component({
  selector   : 'page-initial-form',
  templateUrl: 'initial-form.html',
})
export class InitialFormPage {

  private _registerForm       : FormGroup;
  private _formValues         : Array<Object>;
  private _terms              : any;
  private _predeterminedValues: fbInformation;

  constructor(private _navCtrl:     NavController,
              private _navParams   : NavParams,
              private _formBuilder : FormBuilder,
              private _loginService: LoginProvider) {

    this._loginService.$fbInformation
      .subscribe((res: fbInformation) => {
        this._predeterminedValues = res;
      });
      this._createForm();
      
  }

  ionViewDidLoad(): void { }

  private _saveInfo():void {

    console.log(this._registerForm.contains('terms').valueOf());

  }

  private _createForm(): void {

    this._formValues = [
      { name: 'name', placeholder: 'Nombre' },
      { name: 'username', placeholder: 'Usuario' },
      { name: 'email', placeholder: 'Email' },
      { name: 'city', placeholder: 'Ciudad' },
      { name: 'state', placeholder: 'Estado' },
      { name: 'country', placeholder: 'País' },
      { name: 'favTeam', placeholder: 'Equipo Favorito' },
      { name: 'userID', placeholder: 'ID' }
  ]

    this._registerForm = this._formBuilder.group({
      name    : [this._predeterminedValues.name, Validators.required],
      username: ['', Validators.required],
      email   : [this._predeterminedValues.email, Validators.required],
      city    : ['', Validators.required],
      state   : ['', Validators.required],
      country : ['', Validators.required],
      favTeam : ['', Validators.required],
      terms   : [false, Validators.required],
      userID  : [this._predeterminedValues.userId, Validators.required],
    });

  }

}
