import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinPageComponent } from 'src/app/components/win-page/win-page.component';
import { MemoryComponent } from './components/memory/memory.component';
import { AuthService } from './services/auth.service';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/memory',
    pathMatch: 'full',
  },
  {
    path: 'win-page/:misses/:win',
    component: WinPageComponent,
  },
  {
    path: 'memory',
    canActivate: [AuthService],
    component: MemoryComponent,
  },
  {
    path: 'menu',
    canActivate: [AuthService],
    component: MainMenuComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./modules/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
