import { Component, OnInit } from '@angular/core';
import { GameDTO } from 'src/app/models/gameDTO';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  public games: GameDTO[] = [];

  constructor() {}

  ngOnInit(): void {
    //TODO prendere le partite passate da db, ordinate per punteggio, e metterle in games (se l'utente è admin, le devo prendere tutte!)
  }
  setDifficulty(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
