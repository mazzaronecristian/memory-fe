import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: RegistrationComponent, pathMatch: 'full' },
];
@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RegistrationModule {}
