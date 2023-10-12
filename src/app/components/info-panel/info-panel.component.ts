import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
})
export class InfoPanelComponent implements OnInit {
  moves: number = 0;
  misses: number = 0;
  @Input() time!: number;

  constructor() {}

  ngOnInit(): void {}
}
