import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // ToasterModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class LoginModule {}
