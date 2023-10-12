import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMAGES } from '../mock-image';
import { Image } from '../image';

@Injectable({
  providedIn: 'root',
})
export class ImagePickerService {
  private selectedImages: number[] = [];
  private readonly maxSelections = 2;

  clear(): void {
    for (let i = 0; i < IMAGES.length; i++) {
      this.selectedImages[i] = 0;
    }
  }

  getImage(): Image | null {
    const availableImages = IMAGES.filter(
      (image) => this.selectedImages[image.id] < this.maxSelections
    );

    if (availableImages.length === 0) {
      return null; // Restituisci null se tutte le immagini sono state selezionate due volte
    }

    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const selectedImage = availableImages[randomIndex];

    this.selectedImages[selectedImage.id] =
      (this.selectedImages[selectedImage.id] || 0) + 1;

    return selectedImage;
  }

  constructor() {}
}
