import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-win-page',
  templateUrl: './win-page.component.html',
  styleUrls: ['./win-page.component.scss'],
})
export class WinPageComponent implements OnInit {
  misses: number = 0;
  win: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(): void {
    let result = Number(this.route.snapshot.paramMap.get('win'));
    if (result === 1) this.win = true;
    else this.win = false;
    this.misses = Number(this.route.snapshot.paramMap.get('misses'));
  }

  restart() {}
}
