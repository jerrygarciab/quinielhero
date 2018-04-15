import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginProvider {

  public $fbInformation: BehaviorSubject<Object> = new BehaviorSubject(null);

  constructor(private _auth: AngularFireAuth) { }

}
