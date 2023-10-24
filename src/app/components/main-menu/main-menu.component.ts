import { Component, OnInit } from '@angular/core';
import { GameDTO } from 'src/app/models/gameDTO';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  public games: GameDTO[] = [];

  constructor(private resultService: ResultsService) {}

  ngOnInit(): void {
    this.resultService.getResults().subscribe((res) => {
      if (!(!!res && !!res.item)) {
        return;
      }
      this.games = res.item;
    });
  }
  setDifficulty(arg0: string) {
    this.resultService.getResults().subscribe((res) => {
      console.log(res);
    });
  }
}
