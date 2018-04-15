import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { ManageQuinielasPage } from '../pages/manage-quinielas/manage-quinielas';
import { CreateQuinielaPage } from '../pages/create-quiniela/create-quiniela';
import { JoinQuinielaPage } from '../pages/join-quiniela/join-quiniela';
import { LoginPage } from '../pages/login/login';
import { MyPicksPage } from '../pages/my-picks/my-picks';
import { UsersStandingsPage } from '../pages/users-standings/users-standings';
import { CreateQuinielaPopoverPage } from '../pages/create-quiniela-popover/create-quiniela-popover';
import { InitialFormPage } from '../pages/initial-form/initial-form';

import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SavePicksProvider } from '../providers/save-picks/save-picks';
import { MiscProvider } from '../providers/misc/misc';
import { LoginProvider } from '../providers/login/login';
import { CollectionsProvider } from '../providers/collections/collections';

export const firebaseConfig = {
  apiKey           : 'AIzaSyDpbGTt0fLXm7NlfyFDOMN2JCvj0oc-kXs',
  authDomain       : 'quinielhero.firebaseapp.com',
  databaseURL      : 'https://quinielhero.firebaseio.com',
  projectId        : 'quinielhero',
  storageBucket    : 'quinielhero.appspot.com',
  messagingSenderId: '576621860208'
};

@NgModule({
  declarations: [
    ManageQuinielasPage,
    CreateQuinielaPage,
    JoinQuinielaPage,
    LoginPage,
    MyPicksPage,
    UsersStandingsPage,
    CreateQuinielaPopoverPage,
    InitialFormPage,
    MyApp
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap      : [IonicApp],
  entryComponents: [
    ManageQuinielasPage,
    CreateQuinielaPage,
    JoinQuinielaPage,
    LoginPage,
    MyPicksPage,
    UsersStandingsPage,
    CreateQuinielaPopoverPage,
    InitialFormPage,
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SavePicksProvider,
    MiscProvider,
    AngularFireDatabase,
    AngularFirestore,
    LoginProvider,
    CollectionsProvider
  ]
})
export class AppModule {}
