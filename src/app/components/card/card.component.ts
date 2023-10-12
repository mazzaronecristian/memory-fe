import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/image';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() image!: Image;
  @Input() cardMatched: [number, boolean] = [-1, false];
  @Output() sendIdImage = new EventEmitter<number>();

  flipped: boolean = false;
  founded: boolean = false;

  constructor() {}
  flip() {
    this.flipped = !this.flipped;
    this.sendIdImage.emit(this.image.id);
  }

  ngOnChanges() {
    if (this.cardMatched[1] && this.cardMatched[0] === this.image.id) {
      this.founded = true;
    }
    if (!this.cardMatched[1] && this.flipped) {
      this.flipped = false;
    }
  }

  ngOnInit(): void {}
}
