import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'matches-cards',
  templateUrl: 'matches-cards.html'
})
export class MatchesCardsComponent implements OnInit {

  public localScore: number;
  public visitorScore: number;
  
  @Input() localTeamImg: string;
  @Input() visitorTeamImg: string;

  constructor() { }

  ngOnInit() {

    this.localScore = 0;
    this.visitorScore = 0;

  }

  private _increaseScore(team: string): void {

    (team === 'local') ? this.localScore++ : this.visitorScore++;

  }

  private _decreaseScore(team: string): void {

    (team === 'local') ? this.localScore-- : this.visitorScore--;

  }

}
