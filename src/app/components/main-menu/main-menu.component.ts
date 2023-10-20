import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  setDifficulty(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit(): void {}
}
