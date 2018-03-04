import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginComponent } from '../components/login/login';
import { CreateQuinielaComponent } from '../components/create-quiniela/create-quiniela';
import { MyPicksComponent } from '../components/my-picks/my-picks';
import { UsersStandingsComponent } from '../components/users-standings/users-standings';
import { ListPage } from '../components/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginComponent;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Logout', component: LoginComponent },
      { title: 'Administrar Quinielas', component: CreateQuinielaComponent },
      { title: 'Mis Picks', component: MyPicksComponent },
      { title: 'Tabla de Posiciones', component: UsersStandingsComponent }
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
