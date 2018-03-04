import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
  Generated class for the SavePicksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SavePicksProvider {

  public picks = new BehaviorSubject(null);

  constructor(public http: HttpClient) {
    console.log('Hello SavePicksProvider Provider');
  }

  public savePicks(pick: any): void {

    this.picks.next(pick);
    
  }

}
