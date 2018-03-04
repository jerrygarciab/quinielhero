import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from '../app/app.component';

import { ListPage } from './list/list';
import { SelectWeekComponent } from './select-week/select-week';
import { QhButtonComponent } from './qh-button/qh-button';
import { MatchesCardsComponent } from './matches-cards/matches-cards';

@NgModule({
	declarations: [
		SelectWeekComponent,
    QhButtonComponent,
		MatchesCardsComponent
	],
	imports: [ IonicModule.forRoot(MyApp) ],
	exports: [
		SelectWeekComponent,
		QhButtonComponent,
		MatchesCardsComponent
	]
})
export class ComponentsModule {}
