import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { LoginComponent } from '../components/login/login';
import { CreateQuinielaComponent } from '../components/create-quiniela/create-quiniela';
import { CreateQuinielaPopoverComponent } from '../components/create-quiniela/create-quiniela-popover/create-quiniela-popover.component';
import { ListPage } from '../components/list/list';
import { MyPicksComponent } from '../components/my-picks/my-picks';
import { SelectWeekComponent } from '../components/select-week/select-week';
import { UsersStandingsComponent } from '../components/users-standings/users-standings';
import { MatchesCardsComponent } from '../components/my-picks/matches-cards/matches-cards';
import { QhButtonComponent } from '../components/qh-button/qh-button';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SavePicksProvider } from '../providers/save-picks/save-picks';

@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    CreateQuinielaComponent,
    CreateQuinielaPopoverComponent,
    ListPage,
    MyPicksComponent,
    SelectWeekComponent,
    UsersStandingsComponent,
    MatchesCardsComponent,
    QhButtonComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    CreateQuinielaComponent,
    CreateQuinielaPopoverComponent,
    ListPage,
    MyPicksComponent,
    UsersStandingsComponent,
    MatchesCardsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SavePicksProvider
  ]
})
export class AppModule {}
