import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './nav/main/main.component';
import {OneComponent} from './nav/one/one.component';
import {TwoComponent} from './nav/two/two.component';
import {ThreeComponent} from './nav/three/three.component';
import {StartComponent} from './nav/two/start/start.component';
import {DetailComponent} from './nav/two/detail/detail.component';
import {AuthComponent} from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'one', component: OneComponent},
  { path: 'two', component: TwoComponent, children: [
      {path: '', component: StartComponent},
      {path: ':id', component: DetailComponent}
    ]},
  { path: 'three', component: ThreeComponent},
  { path: 'auth', component: AuthComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]


})
export class AppRoutingModule {

}
