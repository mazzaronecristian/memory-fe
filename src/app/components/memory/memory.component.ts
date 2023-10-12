import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/image';
import { ImagePickerService } from 'src/app/services/image-picker.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
})
export class MemoryComponent implements OnInit {
  cardNumber: number = 12;
  images: Image[] = [];
  flippedImages: number = -1;
  isChecking: boolean = false;
  moves: number = 0;
  misses: number = 0;
  time: number = 120;
  flipTime: number = 2000;
  cardMatched: [number, boolean] = [-1, false];

  constructor(
    private imagePicker: ImagePickerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.time--;
      if (this.time === 0)
        this.router.navigate(['/win-page/' + this.misses + '/0']);
    }, 1000);
    this.imagePicker.clear();
    for (let i = 0; i < this.cardNumber; i++) {
      let image = this.imagePicker.getImage();
      if (!!image) this.images.push(image);
    }
  }
  receiveId($event: number) {
    if (this.flippedImages === -1) {
      this.flippedImages = $event;
      return;
    } else {
      this.moves++;
      this.isChecking = true;
      setTimeout(() => {
        if (this.flippedImages === $event) {
          // le carte sono uguali
          this.cardMatched = [this.flippedImages, true];
        } else {
          // le carte sono diverse
          this.misses++;
          this.cardMatched = [this.flippedImages, false];
        }
        this.isChecking = false;
        this.flippedImages = -1;

        if (this.moves - this.misses === this.cardNumber / 2) {
          this.router.navigate(['/win-page/' + this.misses + '/1']);
        }
      }, this.flipTime);
    }
  }
}
