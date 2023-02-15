import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { RouteGuardService } from './../services/route-guard.service';
import { LogoutComponent } from './pages/logout/logout.component';
import { ErrorComponent } from './pages/error/error.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:user', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path:'articoli', component: ArticoliComponent, canActivate: [RouteGuardService]},
  {path:'articoli/grid', component: GridArticoliComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent},
  {path:'**', component: ErrorComponent}            // sempre l'ultimo elemento //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
