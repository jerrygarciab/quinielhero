import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CreateQuinielaPage } from '../pages/create-quiniela/create-quiniela';
import { LoginPage } from '../pages/login/login';
import { MyPicksPage } from '../pages/my-picks/my-picks';
import { UsersStandingsPage } from '../pages/users-standings/users-standings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Logout', component: LoginPage },
      { title: 'Administrar Quinielas', component: CreateQuinielaPage },
      { title: 'Mis Picks', component: MyPicksPage },
      { title: 'Tabla de Posiciones', component: UsersStandingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
