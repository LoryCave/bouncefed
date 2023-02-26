import { LogoutComponent } from './pages/logout/logout.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'news', component: NewsComponent},
  {path: 'logout', component: LogoutComponent},
  {path:'**', component: ErrorComponent}            // sempre l'ultimo elemento //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
