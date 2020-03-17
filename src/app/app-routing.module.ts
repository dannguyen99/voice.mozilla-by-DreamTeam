import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributionComponent } from './contribution/contribution.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { LogComponent } from './log/log.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contribute', component: ContributionComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
