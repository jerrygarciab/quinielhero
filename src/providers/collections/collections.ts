import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'; //BORRAR

@Injectable()
export class CollectionsProvider {

  constructor(private _fireStore : AngularFirestore) {}

  public getCollection(name: string, query?: any): AngularFirestoreCollection<any> {

    return (typeof query === 'function') ? this._fireStore.collection<any>(name, query): this._fireStore.collection<any>(name);

  }

  public saveCollection(name: string): any {

  }

  public saveDocument(colName: string): any {

  }

}
