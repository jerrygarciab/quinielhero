import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from '../app/app.component';

import { CreateQuinielaComponent } from './create-quiniela/create-quiniela';
import { ListPage } from './list/list';
import { MyPicksComponent } from './my-picks/my-picks';
import { SelectWeekComponent } from './select-week/select-week';
import { UsersStandingsComponent } from './users-standings/users-standings';
import { MatchesCardsComponent } from './my-picks/matches-cards/matches-cards';
import { QhButtonComponent } from './qh-button/qh-button';
import { LoginComponent } from './login/login';
@NgModule({
	declarations: [
		CreateQuinielaComponent,
		MyPicksComponent,
		SelectWeekComponent,
		UsersStandingsComponent,
		MatchesCardsComponent,
    QhButtonComponent,
    LoginComponent
	],
	imports: [IonicModule.forRoot(MyApp)],
	exports: [SelectWeekComponent,
    MatchesCardsComponent,
    QhButtonComponent,
    LoginComponent]
})
export class ComponentsModule {}
