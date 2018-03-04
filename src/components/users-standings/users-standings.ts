import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'qh-users-standings',
  templateUrl: 'users-standings.html'
})
export class UsersStandingsComponent implements OnInit {

  public users: Array<Object>;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.users = [{
        'name': 'Todd',
        'points': 13,
        'position': 1,
        'img': 'img/avatar-finn.png'
      },
      {
        'name': 'John',
        'points': 12,
        'position': 2,
        'img': 'img/avatar-finn.png'
      },
      {
        'name': 'Lindsay',
        'points': 9,
        'position': 3,
        'img': 'img/avatar-finn.png'
      },
      {
        'name': 'Xavier',
        'points': 7,
        'position': 4,
        'img': 'img/avatar-finn.png'
      },
      {
        'name': 'Will',
        'points': 2,
        'position': 5,
        'img': 'img/avatar-finn.png'
      }
    ];
  }

}
