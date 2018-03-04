import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ManageQuinielasPage } from '../pages/manage-quinielas/manage-quinielas';
import { CreateQuinielaPage } from '../pages/create-quiniela/create-quiniela';
import { JoinQuinielaPage } from '../pages/join-quiniela/join-quiniela';
import { LoginPage } from '../pages/login/login';
import { MyPicksPage } from '../pages/my-picks/my-picks';
import { UsersStandingsPage } from '../pages/users-standings/users-standings';
import { CreateQuinielaPopoverPage } from '../pages/create-quiniela-popover/create-quiniela-popover';

import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SavePicksProvider } from '../providers/save-picks/save-picks';
import { MiscProvider } from '../providers/misc/misc';

@NgModule({
  declarations: [
    ManageQuinielasPage,
    CreateQuinielaPage,
    JoinQuinielaPage,
    LoginPage,
    MyPicksPage,
    UsersStandingsPage,
    CreateQuinielaPopoverPage,
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ManageQuinielasPage,
    CreateQuinielaPage,
    JoinQuinielaPage,
    LoginPage,
    MyPicksPage,
    UsersStandingsPage,
    CreateQuinielaPopoverPage,
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SavePicksProvider,
    MiscProvider
  ]
})
export class AppModule {}
