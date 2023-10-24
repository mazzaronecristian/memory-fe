import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinPageComponent } from 'src/app/components/win-page/win-page.component';
import { MemoryComponent } from './components/memory/memory.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full',
  },
  {
    path: 'win-page/:misses/:win',
    component: WinPageComponent,
  },
  {
    path: 'memory',
    canActivate: [AuthGuard],
    component: MemoryComponent,
  },
  {
    path: 'menu',
    canActivate: [AuthGuard],
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
