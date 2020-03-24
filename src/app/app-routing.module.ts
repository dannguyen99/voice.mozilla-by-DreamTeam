import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributionComponent } from './contribution/contribution.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { LogComponent } from './log/log.component';
import { RecordComponent } from './contribution/record/record.component';
import { ListenComponent } from './listen/listen.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contribute', component: ContributionComponent, children: [
    { path: '', redirectTo: '/contribute/record', pathMatch: 'full'},
    { path: 'record', component: RecordComponent},
    { path: 'listen', component: ListenComponent}
  ]},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
