import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MemoryComponent } from './components/memory/memory.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { WinPageComponent } from './components/win-page/win-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagePickerService } from './services/image-picker.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToasterModule, ToasterService } from 'angular2-toaster';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MemoryComponent,
    InfoPanelComponent,
    WinPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
  ],
  providers: [ImagePickerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
